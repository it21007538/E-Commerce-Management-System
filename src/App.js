import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";






//Product

import EditProduct from "./components/Product/edit-Product.component";
import CreateProduct from "./components/Product/create-Product.component";
import ProductList from "./components/Product/Product-list.component";
import Repost from "./components/Product/Report";






function App() {

    return (<Router >
        <div className = "container"  >
       
        <br/>
       
       
       

        <Route path = "/Product-add/" component = { CreateProduct }/>
        <Route path = "/" exact component = { ProductList }/> 
        <Route path = "/Product-Edit/:id" component = { EditProduct }/>
        <Route path = "/Product-Report/" component = { Repost }/>


      

       
          </div > </Router>
    );
}

export default App;