import React, { useContext, useState } from "react";
import Navbar from "../Component/Navbar";
import Categories from "../Component/ProductPg/Categories";

import Price from "../Component/ProductPg/Price";
import List from "../Component/ProductPg/List";

import { Items } from "../products";
import BasketContext from "../Contexts/Basket";
// import Cart from "../Component/Cart/Context";

const Product = (props) => {
    const basket = useContext(BasketContext);
    const [items, setItems] = useState(Items);

    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(100);
    const [searchTerm, setSearchTerm] = useState('');

    const filter = function () {
        let data = [];
        Items.filter(item => {
            if (parseFloat(item.fields.price) <= price && (!category.length || category === item.fields.category) && (item.fields.title.toLowerCase().includes(searchTerm.toLowerCase()))) {
                data.push(item);
            }
        })

        setItems(data);
    };


    return (
        <div>
            <List onChange={(value) => {
                setSearchTerm(value);
                filter()
            }} />

            <Categories onChange={(value) => {
                setCategory(value);

                filter()
            }} />

            <Price onChange={(value) => {
                setPrice(parseFloat(value));

                filter();
            }} />

            <div className="App">
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

                                <button className="cart" onClick={() => basket.push(val)} >Add to cart</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product;
