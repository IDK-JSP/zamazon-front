import React from 'react';
import MyNavBar from "../component/MyNavBar";
import ProductItem from "../component/ProductItem";
import "../css/Shop.css"

function Shop() {
    return (
        <div className={"shop"}>
            <div className={"body"}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
}

export default Shop;