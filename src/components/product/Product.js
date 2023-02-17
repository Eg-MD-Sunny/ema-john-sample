import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {name,img,seller,price,ratings}=props.product;
    const {addToCart} = props;
    // const handleAddToCart = (product) =>{
    //     console.log(product)
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
            <button onClick={addToCart} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;