import React, {createContext, useState} from 'react';
import './css/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Kart from "./pages/Kart";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import LayoutWithBar from "./layout/LayoutWithBar";
import {ProductItem as ProductType} from "./@types/productItem";
import Orders from "./pages/Orders";

export const KartContext = createContext<KartContext | undefined>(undefined);


interface KartContext {
    product: ProductType[];
    setProduct: (product: ProductType[]) => void;
    quantity: number[];
    setQuantity: (quantity: number[]) => void;
}

function App() {
    const [product, setProduct] = useState<ProductType[]>([]);
    const [quantity, setQuantity] = useState<number[]>([]);
    return (
        <div className="App">
            <BrowserRouter>
                <KartContext.Provider value={{product, setProduct, quantity, setQuantity}}>
                    <Routes>
                        <Route element={<LayoutWithBar/>}>
                            <Route path="/Shop" element={<Shop/>}/>
                            <Route path="/Kart" element={<Kart/>}/>
                            <Route path="/Admin" element={<Admin/>}/>
                            <Route path="/Payment" element={<Payment/>}/>
                            <Route path="/Orders" element={<Orders/>}/>
                            <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
                            <Route path="*" element={<Navigate to="/shop" replace/>}/>
                        </Route>
                    </Routes>
                </KartContext.Provider>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
