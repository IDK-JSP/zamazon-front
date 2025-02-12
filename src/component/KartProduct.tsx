import React, {FC} from 'react';
import {useNavigate} from "react-router";
import {ProductItem as ProductType} from "../@types/productItem";
import "../css/KartProduct.css"


const KartProduct: FC<{product:ProductType, quantity :number}> = ({product,quantity}) => {
    let navigate = useNavigate();
    const total = product.price * quantity;


    return (
        <button className="kart-product" onClick={() => navigate(`/ProductDetails/${product.product_id}`)}>
            <div className={"left"}>
                <img src={""} alt="product"/>
                <div className={"kart-write"}>
                    <h4>{product.product_name}</h4>
                    <h5>Quantité: {quantity}</h5>
                </div>
            </div>
            <div className={"right"}>
                <h3>Total : {Number(total.toFixed(2))}</h3>
            </div>
        </button>
    );
};

export default KartProduct;
