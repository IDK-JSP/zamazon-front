import React, { FC, useContext } from "react";
import { ProductItem as ProductType } from "../@types/productItem";
import { KartContext } from "../App";

const AddToKart: FC<{ product: ProductType; quantity: number }> = ({ product, quantity }) => {
    const kartContext = useContext(KartContext);
    if (!kartContext) return null;

    const { product: kartProducts, setProduct, quantity: kartQuantities, setQuantity } = kartContext;

    const handleAddToKart = () => {
        const updatedKartProducts = [...kartProducts];
        const updatedKartQuantities = [...kartQuantities];

        // Vérifie si le produit est déjà dans le panier
        const existingProductIndex = kartProducts.findIndex((p) => p.product_id === product.product_id);

        if (existingProductIndex !== -1) {
            // Si le produit est déjà dans le panier, mets à jour sa quantité
            updatedKartQuantities[existingProductIndex] = quantity;
        } else {
            // Sinon, ajoute le produit et sa quantité correspondante
            updatedKartProducts.push({ ...product });
            updatedKartQuantities.push(quantity);
        }

        setProduct(updatedKartProducts); // Mise à jour de la liste des produits
        setQuantity(updatedKartQuantities); // Mise à jour des quantités
        console.log(updatedKartQuantities);
        console.log(updatedKartProducts);
    };

    return <button onClick={handleAddToKart}>Ajouter au panier</button>;
};

export default AddToKart;
