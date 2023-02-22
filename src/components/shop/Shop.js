import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
    const [cart,setCart] = useState([]);
    console.log(cart)
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart)
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
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;