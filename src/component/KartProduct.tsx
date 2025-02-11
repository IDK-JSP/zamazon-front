import React from 'react';
import "../css/KartProduct.css"
import {useNavigate} from "react-router";

function KartProduct() {
    let navigate = useNavigate();
    return (
        <button className="kart-product" onClick={() => navigate("/ProductDetails/")}>
            <div className={"left"}>
                <img src={""} alt="product"/>
                <div className={"kart-write"}>
                    <h4>Name</h4>
                    <h5>Quantité: 0</h5>
                </div>
            </div>
            <div className={"right"}>
                <h3>Total : 0</h3>
            </div>
        </button>
    );
}

export default KartProduct;