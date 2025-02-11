import React from 'react';
import "../css/ProductItem.css";
import {useNavigate} from "react-router";

function ProductItem() {
    let navigate = useNavigate();

    return (
        <button className={"product-container"} onClick={() => navigate("/productDetails&{id}")}>
            <img src={""} alt="product"/>
            <div className={"write"}>
                <div className={"name-price"}>
                    <h4>Name</h4>
                    <h3>0</h3>
                </div>
                <p>Quantity</p>
            </div>


        </button>
    );
}

export default ProductItem;