import React from "react";
import { useState } from "react";

import './Products.css';

const Price = ({ onChange }) => {
    const [price, setPrice] = useState(100);

    return (
        <div className="price">
            <input type="range" onChange={(e) => {
                setPrice(e.target.value);

                onChange(price)
            }} />
            <h1>Price: {price}</h1>
        </div>
    )
}

export default Price;