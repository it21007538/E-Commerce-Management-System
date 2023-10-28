import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditFinance extends Component {
    constructor(props) {
        super(props);


        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate  = this.onChangeDate.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeReciptNo = this.onChangeReciptNo.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: "",
            Description: "",
            Date  :"",
            Amount: "",
            Type: "Income",
            ReciptNo: "",
            Note: "",
            Finance: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Finance/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ID: response.data.ID,
                    Description: response.data.Description,
                    Date: response.data.Date,
                    Amount: response.data.Amount,
                    Type: response.data.Type,
                    ReciptNo: response.data.ReciptNo,
                    Note: response.data.Note,
                    
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Finance/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Finance: response.data.map(Finance => Finance.ID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the ID

   onChangeID(e) {
    this.setState({
        ID: e.target.value,
    });
}

//set the Description

onChangeDescription(e) {
    this.setState({
        Description: e.target.value,
    });
}

//set Date
onChangeDate(e) {
    this.setState({
        Date: e.target.value,
    });
}

//set Amount




onChangeAmount(e) {
    this.setState({
        Amount: e.target.value,
    });
}

//set Type
onChangeType(e) {
    this.setState({
        Type: e.target.value,
    });
}

//set ReciptNo
onChangeReciptNo(e) {
    this.setState({
        ReciptNo: e.target.value,
    });
}

//set Note
onChangeNote(e) {
    this.setState({
        Note: e.target.value,
    });
}







    onSubmit(e) {
        e.preventDefault();
        const {ID} = this.state;

       

            const Finance = {
                ID: this.state.ID,
                Description: this.state.Description,
                Date: this.state.Date,
                Amount: this.state.Amount,
                Type: this.state.Type,
                ReciptNo: this.state.ReciptNo,
                Note: this.state.Note,
               
            };
            console.log(Finance);
            if (ID.length < 4) {
                swal("ID invalid !", " ID  should be greater than 4", "error");

            }else {

            axios
                .post('http://localhost:5000/Finance/update/' + this.props.match.params.id, Finance)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/"));
            });
        }
        }

    

    render() {
        return (<div  >
             <Navbar/>
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://i.gifer.com/7nXL.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Finance </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

            


            
             <div className = "form-group" >
           <label > ID: </label> 
           <input type = "text"
           placeholder = "ID"
           required  className = "form-control"
           value = { this.state.ID }
           onChange = { this.onChangeID }/>
            </div > 
            
             

           <div className = "form-group" >
           <label > Description: </label> 
           <input type = "text"
           placeholder = "Description"
           required  className = "form-control"
           value = { this.state.Description }
           onChange = { this.onChangeDescription}/>
            </div > 

            <div className = "form-group" >
           <label > Date: </label> 
           <input type = "Date"
           placeholder = "Date"
           required  className = "form-control"
           value = { this.state.Date }
           onChange = { this.onChangeDate }/>
            </div >

     

            <div className = "form-group" >
           <label > Amount: </label> 
           <input type = "number"
           placeholder = "Amount"
           required  className = "form-control"
           value = { this.state.Amount }
           onChange = { this.onChangeAmount }/>
            </div >

           


           

            <div className = "form-group" >
            <label > Type: </label> 
            <select ref = "Type"
            placeholder = "Type"
            required className = "form-control"
            value = { this.state.Type }
            onChange = { this.onChangeType } >
            <option value = "Income" > Income </option> 
            <option value = "Expenses  " > Expenses  </option>
            
            </select > </div>

            <div className = "form-group" >
           <label > ReciptNo: </label> 
           <input type = "text"
           placeholder = "ReciptNo"
           required  className = "form-control"
           value = { this.state.ReciptNo }
           onChange = { this.onChangeReciptNo }/>
            </div >


            <div className = "form-group" >
           <label > Note: </label> 
           <input type = "Note"
           placeholder = "Note"
           required  className = "form-control"
           value = { this.state.Note }
           onChange = { this.onChangeNote }/>
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