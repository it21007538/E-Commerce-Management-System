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
        const searchKey = "Income";

        axios.get("http://localhost:5000/Finance/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Type.includes(searchKey)|| props.Type.includes(searchKey)
            );

            this.setState({ Finance: result });
        });
    }

    getPosts() {
        const searchKey = "Income";

        axios.get("http://localhost:5000/Finance/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Type.includes(searchKey)|| props.Type.includes(searchKey)
            );

            this.setState({ Finance: result });
        });
    }

 



    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Delivery/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.TrackingNo.includes(searchKey)|| props.TrackingNo.includes(searchKey)
            );

            this.setState({ Delivery: result });
        });
    };

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
            <h3 > All Income Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
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
           
            </tr></thead > 
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