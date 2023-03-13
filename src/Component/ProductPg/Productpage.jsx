import {React,useState} from "react";
import { Items } from "../../products";
import './Products.css';


const Page=()=>{
    return(
        <>
        <div className="Display-Product">
            {Items.map(item=>{
                return (
                    <img src={item.fields.image.fields.file.url} /> +
                    item.fields.title + "," +
                 item.fields.price)        
            }  )                
            }
        </div>
        
        </>

    )
}


export default Page;