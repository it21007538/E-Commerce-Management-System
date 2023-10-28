import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Finance = (props) => ( 
    <tr>
    <td > { props.Finance.ID } </td> 
    <td> {props.Finance.Description} </td > { " " } 
    <td > { props.Finance.Date.substring(0, 10)  } </td>{" "}
    <td > { props.Finance.Amount } </td> 
    <td > { props.Finance.Type } </td> 
    <td > { props.Finance.ReciptNo } </td> 
    <td > { props.Finance.Note } </td> 

    <td >
    <Link to = { "/Finance/" + props.Finance._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteFinance(props.Finance._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class FinanceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Finance: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Finance/")
            .then((response) => {
                this.setState({ Finance: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Finance/")
            .then((response) => {
                this.setState({ Finance: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteFinance(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Finance/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Finance: this.state.Finance.filter((el) => el._id !== id),
            });
        }
    }

    FinanceList() {
        return this.state.Finance.map((currentFinance) => {
            return ( <
                Finance Finance = { currentFinance }
                deleteFinance = { this.deleteFinance }
                key = { currentFinance._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Finance/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.ID.includes(searchKey)|| props.Description.includes(searchKey)
            );

            this.setState({ Finance: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <Navbar/>
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Finance Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search Here" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> 
            <th>  Description </th >
             < th > Date  </th> 
            <th > Amount </th> 
             <th> Type </th>
             <th> ReciptNo </th>
            <th> Note </th >
            <th> Action </th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Finance.map((props) => ( 
                    <tr key = { props.ID }>
                    <td > { props.ID } </td> 
                    <td> {props.Description} </td > 
                    <td > { props.Date.substring(0, 10)  } </td>
                     <td > { props.Amount } </td> 
                     <td > { props.Type } </td> 
                     <td > { props.ReciptNo } </td> 
                     <td > { props.Note } </td> 
                    <td >
                    < Link to = { "/Finance-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteFinance(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Finance-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Finance  </button> </Link > </div> 

            <div style = {{ float: 'left' }} >
            <Link to = "/Report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
          
            
            </div >
        );
    }
}