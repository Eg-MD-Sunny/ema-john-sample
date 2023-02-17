import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
//----1.Data Load Using Local File
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
//----1.End
    const handleAddToCart = (product) =>{
        console.log(product)
    }
    return (
        <div className="shop-container">
           <div className="products-container">
{/*--2.Dynamic Data Load*/}
                {
                    products.map(product=><Product 
                                           key={product.id}
                                           product={product}
                                           handleAddToCart={handleAddToCart}
                                          ></Product>)
                }
{/*--2.End*/}
           </div>
           <div className="cart-container">
                <h4>Order Summery</h4>
                <p>Selected Item:</p>
           </div>
        </div>
    );
};

export default Shop;