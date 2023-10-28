import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Product = (props) => ( 
    <tr>
    <td > { props.Product.ItemCode } </td> 
    <td> {props.Product.Name} </td > { " " } 
    <td > { props.Product.Brand } </td>{" "}
    <td > { props.Product.Qty } </td> 
    <td > { props.Product.Price } </td>
    <td > { props.Product.Discount } </td> 
    <td > { props.Product.Tcost } </td> 

    <td >
    <Link to = { "/Product/" + props.Product._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteProduct(props.Product._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Product: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Product/")
            .then((response) => {
                this.setState({ Product: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Product/")
            .then((response) => {
                this.setState({ Product: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    ProductList() {
        return this.state.Product.map((currentProduct) => {
            return ( <
                Product Product = { currentProduct }
                deleteProduct = { this.deleteProduct }
                key = { currentProduct._id }
                />
            );
        });
    }



    myfunction(){
   
        window.print();
       }


   

    render() {
        return ( 
            <div className = "container" >
            
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Product Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Item Code </th> 
            <th>  Item name </th >
             < th > Item Brand </th> 
            <th > Qty </th> 
             <th> Purchased date</th>
             <th> Purchasing Price </th >
            <th> Discount </th >
            <th> Total cost </th >

            </tr> </thead > 
            <tbody >  {
                this.state.Product.map((props) => ( 
                    <tr key = { props.ItemCode }>
                    <td > { props.ItemCode } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Brand } </td>
                     <td > { props.Qty } </td> 
                     <td > { props.PDate } </td> 
                         <td > { props.Price } </td> 
                     <td > { props.Discount } </td> 
                     <td > { props.Tcost } </td>  
                    </ tr >))}  </tbody> </table > 
                     <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
            </div >
        );
    }
}