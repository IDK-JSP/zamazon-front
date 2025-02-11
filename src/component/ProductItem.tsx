import React from 'react';
import "../css/ProductItem.css";

function ProductItem() {
    return (
        <button className={"product-container"}>
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