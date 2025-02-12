import React, { useContext } from 'react';
import KartProduct from "../component/KartProduct";
import "../css/Kart.css";
import { useNavigate } from "react-router";
import { KartContext } from "../App";
import { ProductItem as ProductType } from "../@types/productItem";

function Kart() {
    let navigate = useNavigate();
    const kartContext = useContext(KartContext);

    if (!kartContext) {
        return <div>Erreur de contexte</div>; // Si le contexte est undefined
    }

    return (
        <div className={"kart"}>
            <div className={"product-list"}>
                {kartContext.product.map((product: ProductType, index: number) => (
                    <KartProduct key={product.product_id} product={product} quantity={kartContext.quantity[index]} />
                ))}
            </div>
            {kartContext.product.length === 0 ? (
                    <div>pannier vide</div>
            ):(
                <button onClick={() => navigate("/Payment")}>Valider</button>

            )
            }
        </div>
    );
}

export default Kart;
