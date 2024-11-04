import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const { name, price, stock, img, seller } = props.product;
  return (
    <div>

      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="product-item">
          <h4 className="product-name">{name}</h4>
          <p>
            <small>By : {seller}</small>
          </p>
          <p>${price}</p>
          <p>
            <small>Only {stock} left in Stock - order soon</small>
          </p>
          <button onClick={()=>props.handelAddProduct(props.product)} className="btn"><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default Product;
