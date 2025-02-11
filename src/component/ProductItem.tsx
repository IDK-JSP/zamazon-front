import React, {FC} from 'react';
import "../css/ProductItem.css";
import {useNavigate} from "react-router";
import {ProductItem as ProductType} from "../@types/productItem"


const ProductItem:FC<{product:ProductType}> =({product})=> {
    let navigate = useNavigate();

    console.log('product',product);
    return (
        <button className={"product-container"} onClick={() => navigate(`/productDetails/${product.product_id}`)}>
            <img src={""} alt="product"/>
            <div className={"write"}>
                <div className={"name-price"}>
                    <h4>{product.product_name}</h4>
                    <h3>{product.price}$</h3>
                </div>
                <p>{product.quantity} En stock</p>
            </div>


        </button>
    );
}

export default ProductItem;