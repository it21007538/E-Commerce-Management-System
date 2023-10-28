import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditProduct extends Component {
    constructor(props) {
        super(props);


        this.onChangeItemCode = this.onChangeItemCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangePDate = this.onChangePDate.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDiscount= this.onChangeDiscount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ItemCode: "",
            Name: "",
            Brand:"",
            Qty: "",
            PDate: "",
            Price: "",
            Discount: "",
            Tcost: "",
            Product: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Product/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ItemCode: response.data.ItemCode,
                    Name: response.data.Name,
                    Brand: response.data.Brand,
                    Qty: response.data.Qty,
                    PDate: response.data.PDate,
                    Price: response.data.Price,
                    Discount: response.data.Discount,
                    Tcost: response.data.Tcost,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Product/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Product: response.data.map(Product => Product.Name),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

 //set the ItemCode

 onChangeItemCode(e) {
    this.setState({
        ItemCode: e.target.value,
    });
}

//set the Name

onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}

//set Brand
onChangeBrand(e) {
    this.setState({
        Brand: e.target.value,
    });
}

//set qty




onChangeQty(e) {
    this.setState({
        Qty: e.target.value,
    });
}



//set PDate
onChangePDate(e) {
    this.setState({
        PDate: e.target.value,
    });
}

//set Price
onChangePrice(e) {
  
    this.setState({
        
        Price: e.target.value,
      
    });
    this.setState({ Tcost:e.target.value- this.state.Discount });
}

//set Discount
onChangeDiscount(e) {
   
    this.setState({
        
        Discount: e.target.value,

    });

    this.setState({Tcost: this.state.Price - e.target.value});
   
}











    onSubmit(e) {
        e.preventDefault();

       
        const { ItemCode} = this.state;
            const Product = {
                ItemCode: this.state.ItemCode,
                Name: this.state.Name,
                Brand: this.state.Brand,
                Qty: this.state.Qty,
                Supplier: this.state.Supplier,
                PDate: this.state.PDate,
                Price: this.state.Price,
                Discount: this.state.Discount,
                Tcost:this.state.Tcost,
               
            };
            console.log(Product);

            if (ItemCode.length < 4) {
                swal("ItemCode invalid !", "ItemCode should be greater than 4", "error");
            } else {

            axios
                .post('http://localhost:5000/Product/update/' + this.props.match.params.id, Product)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Product/"));
            });
        }
        }

    

    render() {
        return (<div  >
             <Navbar/>
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://media.baamboozle.com/uploads/images/50597/1618856704_36162_gif-url.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Product </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

             



            
            <div className = "form-group" >
           
            <label >Item Code: </label> 
           
            <input type = "text"
            placeholder = " Item Code"
            required  className = "form-control"
            value = { this.state.ItemCode }
            onChange = { this.onChangeItemCode }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Item Name: </label> 
            <input type = "text"
            placeholder = "Item Name"
            required  className = "form-control"
            value = { this.state.Name }
            onChange = { this.onChangeName }/>
             </div > 



             <div className = "form-group" >
            <label > Brand: </label> 
            <input type = "text"
            placeholder = "Brand"
            required  className = "form-control"
            value = { this.state.Brand }
            onChange = { this.onChangeBrand}/>
             </div > 

            

             <div className = "form-group" >
            <label > Qty: </label> 
            <input type = "number"
            placeholder = "Qty"
            required  className = "form-control"
            value = { this.state.Qty }
            onChange = { this.onChangeQty }/>
             </div >


            

             <div className = "form-group" >
            <label > Purchased Date: </label> 
            <input type = "date"
            placeholder = "Purchased Date"
            required  className = "form-control"
            value = { this.state.PDate }
            onChange = { this.onChangePDate }/>
             </div >

             <div className = "form-group" >
            <label > Purchased price: </label> 
            <input type = "number"
            placeholder = "Purchased Price"
            required  className = "form-control"
            value = { this.state.Price }
            onChange = { this.onChangePrice }/>
             </div >


           


             <div className = "form-group" >
            <label > Discount: </label> 
            <input type = "number"
            placeholder = "Discount"
            required  className = "form-control"
            value = { this.state.Discount }
            onChange = { this.onChangeDiscount }/>
             </div >

             <div className = "form-group" >
            <label > Total Cost: </label> 
            <input type = "Number"
            placeholder = "Total Cost"
            required  className = "form-control"
            value = { this.state.Tcost }/>
             </div >

            

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update "
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}