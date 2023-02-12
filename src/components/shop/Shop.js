import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    //1.Data Load Using Local File
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    //1.End
    return (
        <div className="shop-container">
           <div className="products-container">
                <h3>This is for products: {products.length}</h3>
           </div>
           <div className="cart-container">
                <h4>Order Summery</h4>
           </div>
        </div>
    );
};

export default Shop;