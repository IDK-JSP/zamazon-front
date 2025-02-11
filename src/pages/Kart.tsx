import React from 'react';
import KartProduct from "../component/KartProduct";
import "../css/Kart.css"
import {useNavigate} from "react-router";
function Kart() {
    let navigate = useNavigate();
    return (
        <div className={"kart"}>
            <div className={"product-list"}>
                <KartProduct/>
                <KartProduct/>
                <KartProduct/>
            </div>
            <button onClick={() => navigate("/Payment")}>Valider</button>
        </div>
    );
}

export default Kart;