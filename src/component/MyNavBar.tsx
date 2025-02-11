import React from 'react';
import "../css/MyNavBar.css"
import {useNavigate} from "react-router";
function MyNavBar() {
    let navigate = useNavigate();

    return (
        <div className={"container"}>
            <button onClick={()=>navigate("/Shop")}>Shop</button>
            <button onClick={() => navigate("/Kart")}>Panier</button>
            <button onClick={() => navigate("/Admin")}>Admin</button>
        </div>
    );
}

export default MyNavBar;