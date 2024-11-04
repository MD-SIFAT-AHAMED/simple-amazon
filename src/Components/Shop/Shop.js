import React from 'react';
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product,setProduct] = React.useState(first10);
    const [cart,setCart] = React.useState([]);

    const handelAddProduct = (product)=>{
        console.log("added product",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="shoping_container">
                <div className="product_continer">
                    {product.map(product => <Product handelAddProduct={handelAddProduct}  product={product}></Product>)}
                </div>
                <div className="cart_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;