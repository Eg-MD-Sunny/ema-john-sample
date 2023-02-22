import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

// Data Pick from Array of Object    
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total:</h3>
        </div>
    );
};

export default Cart;