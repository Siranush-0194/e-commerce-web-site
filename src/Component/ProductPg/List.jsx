import React, { useState } from "react";
import './Products.css';

function List({ onChange }) {
const [searchTerm, setSearchTerm] = useState('');

return (
<input
type="text"
placeholder="seach..."
onChange={e => {
setSearchTerm(e.target.value);

onChange(searchTerm);
}}
/>
);
}

export default List;