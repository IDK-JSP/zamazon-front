import React from 'react';
import {Outlet} from "react-router";
import "../css/LayoutWithBar.css"
import MyNavBarLogged from "../component/MyNavBarLogged";

function LayoutWithBarLogged() {
    return (
        <div className="page">
            <MyNavBarLogged/>
            <Outlet/>
        </div>
    );
}

export default LayoutWithBarLogged;