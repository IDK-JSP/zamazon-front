import React, {FC, useContext, useEffect, useState} from 'react';
import {ProductItem as ProductType} from "../@types/productItem";
import KartProduct from "../component/KartProduct";
import {KartContext} from "../App";
import {postZamazon, putZamazon} from "../api/api";


const Payment: FC<{}> = ({}) => {
    const [email, setEmail] = useState('');
    const [total, setTotal] = useState(0);
    const kartContext = useContext(KartContext);

    const updateQuantity = () => {
        kartContext?.product.forEach((product, index) => {
            const quantityToUpdate = kartContext?.quantity[index];

            if (product && quantityToUpdate && quantityToUpdate <= product.quantity) {
                const updatedProduct = { ...product, quantity: product.quantity - quantityToUpdate };

                putZamazon(`/products/${product.product_id}`, updatedProduct)
                    .then(response => {
                        console.log(`Produit ${product.product_name} mis à jour :`, response);
                    })
                    .catch(error => {
                        console.error(`Erreur lors de la mise à jour du produit ${product.product_name}:`, error);
                    });
            }
        });
    };
    const createOrders = () => {
        const data = {
            email: email,
            total: total,
        }
        const response = postZamazon("/orders", data);
        if (response) {
            console.log(response);
        }
    }
    useEffect(() => {
        let calculatedTotal = 0; // Initialisation de la variable pour stocker le total calculé

        kartContext?.product.forEach((product: ProductType, index: number) => {
            calculatedTotal += product.price * kartContext.quantity[index];
        });

        setTotal(Number(calculatedTotal.toFixed(2))); // Mise à jour de l'état total après avoir fait la somme
    }, []);

    return (
        <div className="payment-form">
            <h2><u>Total à payé : {total}$
            </u></h2>
            <input placeholder={"Votre e-mail"} value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={updateQuantity}>Valider le payment</button>
        </div>
    );
};

export default Payment;
