import React from 'react';
import {Outlet} from "react-router";
import MyNavBar from "../component/MyNavBar";
import "../css/LayoutWithBar.css"

function LayoutWithBar() {
    return (
        <div className="page">
            <MyNavBar/>
            <Outlet/>
        </div>
    );
}

export default LayoutWithBar;