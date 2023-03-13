import React from "react";
import { Items } from "../../products";


const Display=(props)=>{ 
    return(  
        <div className="productCont">
        <div className="data-display"> 
        
            {Items.map((data,key) => {
                return(
                    <div key={key} className="DataIm">
                           
                        
                             
                    <div className="image-render"><img src={data.fields.image.fields.file.url}/></div>
             
                    <div className="product-item-details">
                            <p className="product-item-title">{data.fields.title}</p>
                <div className="line"></div>
                <h3 className="product-item-price">
                { data.fields.price}
                </h3>
               
                <button   className="cartttt" >Add to cs </button>
            </div>
            </div>
                                 
                  
        

                        
               
                );
            })}
            </div>      
    </div>
    )
}




export default Display;
