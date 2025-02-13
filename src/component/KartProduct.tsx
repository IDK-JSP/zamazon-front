import React, { FC, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ProductItem as ProductType } from "../@types/productItem";
import { KartContext } from "../App";
import "../css/KartProduct.css"

const KartProduct: FC<{ product: ProductType; quantity: number; productIndex: number }> = ({ product, quantity, productIndex }) => {
    const navigate = useNavigate();
    const kartContext = useContext(KartContext);
    const [selectedQuantity, setSelectedQuantity] = useState(quantity);

    if (!kartContext) return null;

    const { product: kartProducts, setProduct, quantity: kartQuantities, setQuantity } = kartContext;

    // Le <select> permet de modifier la quantité du produit dans le panier (context)
    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newQuantity = Number(e.target.value);
        setSelectedQuantity(newQuantity);
        const updatedQuantities = [...kartQuantities];
        updatedQuantities[productIndex] = newQuantity;
        setQuantity(updatedQuantities);
    };
    //Pour supprimer un élément du panier(context)
    const handleRemove = () => {
        const updatedProducts = kartProducts.filter((_, i) => i !== productIndex);
        const updatedQuantities = kartQuantities.filter((_, i) => i !== productIndex);
        setProduct(updatedProducts);
        setQuantity(updatedQuantities);
    };

    return (
        <div className="kart-product">
            <div className="left">
                <img src="" alt="product" onClick={() => navigate(`/ProductDetails/${product.product_id}`)} />
                <div className="kart-write">
                    <h4>{product.product_name}</h4>
                    <h5>Quantité: {selectedQuantity}</h5>
                </div>
                <select value={selectedQuantity} onChange={handleQuantityChange}>
                    {Array.from({ length: product.quantity }, (_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <button onClick={handleRemove}>Supprimer</button>
            </div>
            <div className="right">
                <h3>Total : {(product.price * selectedQuantity).toFixed(2)}$</h3>
            </div>
        </div>
    );
};

export default KartProduct;
