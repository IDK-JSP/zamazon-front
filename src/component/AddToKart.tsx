import React, {FC, useContext} from "react";
import {ProductItem as ProductType} from "../@types/productItem";
import {KartContext} from "../App";
import {useNavigate} from "react-router";

const AddToKart: FC<{ product: ProductType; quantity: number }> = ({product, quantity}) => {
    const kartContext = useContext(KartContext);
    let navigate = useNavigate();

    if (!kartContext) return null;

    const {product: kartProducts, setProduct, quantity: kartQuantities, setQuantity} = kartContext;

    //handleAddToKart permet d'ajouter les produits au panier en passant par un context.
    const handleAddToKart = () => {
        const updatedKartProducts = [...kartProducts];
        const updatedKartQuantities = [...kartQuantities];

        const existingProductIndex = kartProducts.findIndex((p) => p.product_id === product.product_id);
        //Si le produit est déjà dans le panier, on ne modifie que la quantité
        if (existingProductIndex !== -1) {
            updatedKartQuantities[existingProductIndex] = quantity;
        } else {
            updatedKartProducts.push({...product});
            updatedKartQuantities.push(quantity);
        }
        setProduct(updatedKartProducts);
        setQuantity(updatedKartQuantities);
        navigate("/Shop")

    };

    return <button onClick={handleAddToKart}>Ajouter au panier</button>;
};

export default AddToKart;
