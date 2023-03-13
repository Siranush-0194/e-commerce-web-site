import { Link } from "react-router-dom";

import styled from "styled-components";
import { Items } from "../../products";
// import { StateContext } from "../Cart/Context";
// import { Items } from "../../products";
//import "./App.css"
import React, { useContext } from "react";
// const {addToCart, favoriteItems, addToFavorite, removeFromFavorite} = useContext(StateContext)
const ProductCont = styled.div`
    padding: "4rem 0"
`


const SectionTitle = styled.div`
text-align: "center",
top:"200%",
font-size: "2.5rem",
margin-bottom: "5rem";
text-transform:' capitalize';
letter-spacing: "var(--mainSpacing)";
`

const ProductsCenter = styled.div`
width: 90vw;
margin: 0 auto;
max-width: 1170px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
grid-column-gap: 1.5rem;
grid-row-gap: 2rem;
`;

const Products = ({ item }) => {
    console.log(Items, 'Items');
    return (
        <ProductsCenter>
            <ProductCont>
                <SectionTitle>Our Products</SectionTitle>
                <div className="productCont">
                    <div className="data-container">
                        {Items.map((data, key) => {
                            return (
                                <div key={key} className="DataIm">
                                    <div className="image-render"><img src={data.fields.image.fields.file.url} /></div>

                                    <div className="product-item-details">
                                        <p className="product-item-title">{data.fields.title}</p>
                                        <div className="line"></div>
                                        <h3 className="product-item-price">
                                            {data.fields.price}
                                        </h3>

                               
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ProductCont>
        </ProductsCenter>
    )
}

export default Products;
