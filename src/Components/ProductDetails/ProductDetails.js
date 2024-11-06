import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams()
    console.log(useParams());
    const product = fakeData.find((item)=> item.key === productKey);
    return (
        <div>
            <h3>Your Product Details</h3>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;