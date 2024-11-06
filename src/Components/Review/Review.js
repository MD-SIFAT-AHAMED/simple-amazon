import React from 'react';
import { getDatabaseCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart] = React.useState([]);
    React.useEffect(()=> {
        //cart
        const savecart = getDatabaseCart();
        const productKeys = Object.keys(savecart);
        const cartProducts = productKeys.map( key =>{
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity = savecart[key];
            return product;
        })
        setCart(cartProducts);
    },[]);
    return (
        <div>
            <h1>Total Item : {cart.length} </h1>
            {
                cart.map( pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;