import React,{useState}from "react";
import { Items } from "../../products";
import "./Products.css";

const Categories = ({ onChange }) => {
  const [category] = useState('');
  return (
    <div className="row">
      <div className="filter-container">
        <button class="company-btn" onClick={() => category(Items)}>All</button>
        <button class="company-btn" onClick={() => onChange('Ikea')}>Ikea</button>
        <button class="company-btn" onClick={() => onChange('Marcos')}>Marcos</button>
        <button class="company-btn" onClick={() => onChange('Caressa')} >Caressa</button>
        <button class="company-btn" onClick={() => onChange('Liddy')} >Liddy</button>
      </div>
    </div>
  )
}

export default Categories;
