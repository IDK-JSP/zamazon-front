import React, {FC, useContext, useState} from 'react';
import {ProductItem as ProductType} from "../@types/productItem";
import KartProduct from "../component/KartProduct";
import {KartContext} from "../App";
import {postZamazon} from "../api/api";


const Payment: FC<{}> = ({}) => {
    const [email, setEmail] = useState('');
    const [total, setTotal] = useState(0);
    const kartContext = useContext(KartContext);

    const updateQuantity =()=>{

    }
    const createOrders = () => {
        let calculatedTotal = 0; // Initialisation de la variable pour stocker le total calculé

        kartContext?.product.forEach((product: ProductType, index: number) => {
            calculatedTotal += product.price * kartContext.quantity[index];
        });

        setTotal(Number(calculatedTotal.toFixed(2))); // Mise à jour de l'état total après avoir fait la somme

        const data = {
            email: email,
            total: total,
        }
        const response = postZamazon("/orders", data);
        if (response){
            console.log(response);
        }
    }

    return (
        <div className="payment-form">
            <h2><u>Total à payé : {total}$
            </u></h2>
            <input placeholder={"Votre e-mail"} value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={createOrders}>Valider le payment</button>
        </div>
    );
};

export default Payment;
