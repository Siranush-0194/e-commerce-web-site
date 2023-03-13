import React, { useContext, useState, useEffect } from "react";
import { useStickyState } from '../hooks/useStickyState';
import BasketContext from "../Contexts/Basket";
import CartItem from "../Component/Cart/CartItem";

import './cartitems.css'
import { Items } from "../products";


function Cart() {

    const basket = useContext(BasketContext);


    const [items, setItems] = useStickyState(basket, 'cardData');
    const [count,setCount] =useState(basket);



    return (
        <section className="cart-section">
            <div className="summary-detail">
                <div className="items">
                    <div className="cart-detail">
                        {
                            items.length === 0 ? <h4 className="warn-txt">No Item in Cart!</h4> :
                                <div className="items">
                                    {items.map((val, key) => {
                                        return <div key={key} className="DataIm">
                                            <div className="image-render"><img src={val.fields.image.fields.file.url} /></div>
                                            <div className="product-item-details">
                                                <p className="product-item-title">{val.fields.title}</p>
                                                <div className="line"></div>
                                                <h3 className="product-item-price">

                                                    {val.fields.price}
                                                </h3>


                                                <button className="cart" onClick={() => {
                                                    setItems(items.filter((item, index) => index !== key))

                                                    basket.pop(key, 1);
                                                }} >Remove from cart</button>

                                                {/* <button className="increase"  onClick={()=>{
                                                 
                                               
                                            
                                                  
                                                }}>

                                                
                                                <i class="fa-solid fa-arrow-up"></i>
                                                </button> */}

                                            </div>

                                        </div>
                                    })}
                                </div>


                        }</div>

                </div>

                <div className="amounts">
                    <h4>Total Items: {items.length}</h4>
                </div>

               


                <div className="total">
                    <h4>  Total Amount:
                        {(items.reduce((sum, i) => (
                            sum += i.fields.price), 0
                        ).toFixed(2))
                        }</h4>



                     





                </div>
                
            </div>
            
        </section>
    )
}


export default Cart 
