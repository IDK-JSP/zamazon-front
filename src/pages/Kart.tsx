import React, { useContext } from "react";
import KartProduct from "../component/KartProduct";
import { useNavigate } from "react-router";
import { KartContext } from "../App";
import "../css/Kart.css"

const Kart = () => {
    const navigate = useNavigate();
    const kartContext = useContext(KartContext);

    if (!kartContext || kartContext.product.length === 0) {return <article><title>Panier</title> <div>Panier vide</div></article>;}

    return (
        <div className="kart">
            <title>Panier</title>
            <div className="product-list">
                {kartContext.product.map((product, index) => (
                    <KartProduct key={product.product_id} product={product} quantity={kartContext.quantity[index]} productIndex={index} />
                ))}
            </div>
            <button onClick={() => navigate("/Payment")}>Valider</button>
        </div>
    );
};

export default Kart;
