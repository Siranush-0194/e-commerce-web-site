
import React,{useState} from "react";
import Navbar from "../Component/Navbar";
// import Product from "../Component/Product";
import Products from "../Component/HomePg/ProductsJSON";

import ShopNow from "../Component/HomePg/ShopNow";


const Home = () => {
  
    return (
        
   
        <div>
        
            <ShopNow/>
            <Products/>
           
         
          
       
        </div>
      
    );
};

export default Home;