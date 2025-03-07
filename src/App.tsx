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
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Research from "./pages/Recherche";
import Recherche from "./pages/Recherche";
import AudioPlayer from "./component/AudioPlayer";
import LayoutWithBarLogged from "./layout/LayoutWithBarLogged";

export const KartContext = createContext<KartContext | undefined>(undefined);
export const EmailContext = createContext<EmailContext | undefined>(undefined);
export const ProductContext = createContext<ProductContext | undefined>(undefined);

interface KartContext {
    product: ProductType[];
    setProduct: (product: ProductType[]) => void;
    quantity: number[];
    setQuantity: (quantity: number[]) => void;
}

interface ProductContext {
    product: ProductType[];
    setProduct: (product: ProductType[]) => void;
    quantity: number[];
    setQuantity: (quantity: number[]) => void;
}

interface EmailContext {
    email: string;
    setEmail: (email: string) => void;
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
}

function App() {
    const [product, setProduct] = useState<ProductType[]>([]);
    const [quantity, setQuantity] = useState<number[]>([]);
    const [email, setEmail] = useState<string>("");
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <div className="App">
            <AudioPlayer />
            <BrowserRouter>
                <KartContext.Provider value={{product, setProduct, quantity, setQuantity}}>
                    <EmailContext.Provider value={{email, setEmail,loggedIn,setLoggedIn}}>
                        <ProductContext.Provider value={{product, setProduct, quantity, setQuantity}}>
                            <Routes>
                                {loggedIn ?

                                <Route element={<LayoutWithBarLogged />}>
                                    <Route path="/Register" element={<Register/>}/>
                                    <Route path="/LogIn" element={<LogIn/>}/>
                                    <Route path="/Research" element={<Recherche/>}/>
                                    <Route path="/Shop" element={<Shop/>}/>
                                    <Route path="/Kart" element={<Kart/>}/>
                                    <Route path="/Admin" element={<Admin/>}/>
                                    <Route path="/Payment" element={<Payment/>}/>
                                    <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
                                    <Route path="*" element={<Navigate to="/shop" replace/>}/>
                                </Route>
                                    :
                                    <Route element={<LayoutWithBar/>}>
                                        <Route path="/Register" element={<Register/>}/>
                                        <Route path="/LogIn" element={<LogIn/>}/>
                                        <Route path="/Research" element={<Recherche/>}/>
                                        <Route path="/Shop" element={<Shop/>}/>
                                        <Route path="/Kart" element={<Kart/>}/>
                                        <Route path="/Payment" element={<Payment/>}/>
                                        <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
                                        <Route path="*" element={<Navigate to="/Register" replace/>}/>
                                    </Route>
                                }
                            </Routes>
                        </ProductContext.Provider>
                    </EmailContext.Provider>
                </KartContext.Provider>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
