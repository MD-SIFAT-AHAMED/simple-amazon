import React from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    console.log(props)
    // const total = cart.reduce((total,product) => total + product.price,0);
    let total = 0;
    for(let i=0; i < cart.length;i++)
    {
        const product = cart[i];
        total = total + product.price;
    }
    
    let shipping = 0;
    if(total > 35)
    {
        shipping = 0;
    }
    else if(total > 15)
    {
        shipping = 4.99;
    }
    else if(total > 0)
    {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = (num => 
    {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    )
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <h4>Total Items : {cart.length}</h4>
            <p>Product Price : ${formatNumber(total)}</p>
            <p><small>Shipping Cost : ${shipping}</small></p>
            <p><small>Tax + Vat : ${tax}</small></p>
            <p>Total Pirce : ${grandTotal}</p>
            <Link to='/review'><button className='btn'>Review Order</button></Link>
        </div>
    );
};

export default Cart;