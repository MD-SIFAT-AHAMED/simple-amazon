import React from 'react';
import "./ReviewItem.css"
const ReviewItem = (props) => {
    const {name,quantity} = props.product;
    console.log(props)
    return (
        <div className='review-container'>
            <h3 className='product-name'>{name}</h3>
            <p>Quantity : {quantity}</p>
            <br/>
            <button className='btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;