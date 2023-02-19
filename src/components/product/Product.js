import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    // console.log(props)
    const {name,img,seller,price,ratings}=props.product;
    
    
    //---Demo Test-01
    // const handleAddToCart = () =>{
    //     console.log('Clicked')
    // }
    
    return (
        <div className="product">
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;