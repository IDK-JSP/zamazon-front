import React, {createContext, useState} from 'react';
import './css/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Kart from "./pages/Kart";
import Details from "./pages/Details";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import LayoutWithBar from "./layout/LayoutWithBar";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<LayoutWithBar/>}>
                        <Route path="/Shop" element={<Shop/>}/>
                        <Route path="/Details" element={<Details/>}/>
                        <Route path="/Kart" element={<Kart/>}/>
                        <Route path="/Admin" element={<Admin/>}/>
                        <Route path="/Payment" element={<Payment/>}/>
                        <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
                        <Route path="*" element={<Navigate to="/shop" replace/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
