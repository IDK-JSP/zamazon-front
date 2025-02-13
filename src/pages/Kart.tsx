import React, {useContext} from "react";
import KartProduct from "../component/KartProduct";
import {useNavigate} from "react-router";
import {KartContext} from "../App";
import "../css/Kart.css"

const Kart = () => {
    const navigate = useNavigate();
    const kartContext = useContext(KartContext);
    const empty=()=>{

        kartContext?.setQuantity([])
        kartContext?.setProduct([])
    }


    //Si le panier est vide ça affiche un message et rien d'autre
    if (!kartContext || kartContext.product.length === 0) {
        return (
            <article>
                <title>Panier</title>
                <div>
                    <img className={"gif"}
                        src="https://media.tenor.com/vRea8pufu1gAAAAM/take-the-l-billie-eilish.gif"
                        alt="Gif humoristique de Fortnite"
                    />
                </div>
            </article>
        );
    }

    return (
        <div className="kart">
            <title>Panier</title>
            <div className="product-list">
                {kartContext.product.map((product, index) => (
                    <KartProduct key={product.product_id} product={product} quantity={kartContext.quantity[index]}
                                 productIndex={index}/>
                ))}
            <article className={"button"}>
                <article/>
                <button className={"validation"} onClick={() => navigate("/Payment")}>Valider</button>
                <button className={"empty"} onClick={empty}>Vider</button>
            </article>
            </div>
        </div>
    );
};

export default Kart;
