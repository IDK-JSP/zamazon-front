import React from 'react';
import "../css/MyNavBar.css"
import {useNavigate} from "react-router";

const data =[
    {page:"Boutique", path:"/Shop"},
    {page:"Panier", path:"/Kart"},
    {page:"Commandes",path:"/Orders"},
    {page:"Admin", path:"/Admin"}];
function MyNavBar() {
    let navigate = useNavigate();

    return (
        <div className={"container"}>
            {data.map((item, index) => (
                <button onClick={()=>navigate(item.path)}>{item.page}</button>
            ))}
        </div>
    );
}

export default MyNavBar;