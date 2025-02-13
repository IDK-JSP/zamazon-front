import React, {FC, useContext, useEffect, useState} from 'react';
import {ProductItem as ProductType} from "../@types/productItem";
import KartProduct from "../component/KartProduct";
import {EmailContext, KartContext} from "../App";
import {postZamazon, putZamazon} from "../api/api";


const Payment: FC<{}> = ({}) => {
    const [email, setEmail] = useState('');
    const [total, setTotal] = useState(0);
    const kartContext = useContext(KartContext);
    const emailContext = useContext(EmailContext);

    // Fonction pour modifier la quantité du produit dans la base de données en fonction de la quantité présente dans le panier
    const updateQuantity = () => {
        kartContext?.product.forEach((product, index) => {
            const quantityToUpdate = kartContext?.quantity[index];

            if (product && quantityToUpdate && quantityToUpdate <= product.quantity) {
                const updatedProduct = {...product, quantity: product.quantity - quantityToUpdate};

                putZamazon(`/products/${product.product_id}`, updatedProduct)
                    .then(response => {
                    })
                    .catch(error => {
                    });
            }
        });
        createOrders()
    };
    // Fonction pour créer une commande dans la base de données
    const createOrders = async () => {
        try {
            const data = {
                email: email,
                total: total
            };
            const response = await postZamazon("/orders", data);
            if (response) {
                console.log("Commande créée :", response);
                kartContext?.setProduct([]);
            } else {
                console.error("Erreur : La réponse est vide.");
            }
        } catch (error) {
            console.error("Erreur lors de la création de la commande :", error);
        }
    };
    useEffect(() => {
        let calculatedTotal = 0;
        kartContext?.product.forEach((product: ProductType, index: number) => {
            calculatedTotal += product.price * kartContext.quantity[index];
        });
        setTotal(Number(calculatedTotal.toFixed(2)));
    }, []);

    return (
        <div className="payment-form">
            <title>Paiement</title>

            <h2><u>Total à payé : {total}$
            </u></h2>

            <input placeholder={"Votre e-mail"} value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={updateQuantity}>Valider le payment</button>
        </div>
    );
};

export default Payment;
