import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <p>Selected Item: {props.cart.length}</p>
        </div>
    );
};

export default Cart;