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

    deleteProduct(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Product/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Product: this.state.Product.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Product/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.ItemCode.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Product: result });
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
            <h3 > All Product Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search Here" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class ="table table-bordered table-white">
            <thead className = "thead-dark" >
            <tr >
            <th > Item Code </th> 
            <th>  Item name </th >
             < th > Item Brand </th> 
            <th > Qty </th> 
             <th> Purchased date</th>
             <th> Purchasing Price </th >
            <th> Discount </th >
            <th> Total cost </th >  
            <th> Action </th > 
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
                    <td >
                    < Link to = { "/Product-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteProduct(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Product-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Item  </button> </Link > </div> 
          
            <div style = {{ float: 'left' }} >
            <Link to = "/Product-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}