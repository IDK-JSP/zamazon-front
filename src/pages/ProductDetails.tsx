import {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {getZamazon} from "../api/api";
import {ProductItem as ProductType} from "../@types/productItem";
import "../css/ProductDetails.css";
import AddToKart from "../component/AddToKart";

const ProductDetails: FC<{}> = () => {
    const location = useLocation();
    const id = location.pathname.split('/').pop();
    const [product, setProduct] = useState<ProductType | undefined>(undefined);
    const [selectedQuantity, setSelectedQuantity] = useState(1); // Stocke la valeur sélectionnée

    const fetchData = async () => {
        try {
            const data = await getZamazon(`/products/${id}`);

            if (data) {
                setProduct(data); // Mise à jour de l'état avec les données du produit
            } else {
                console.log("Aucune donnée disponible.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchData();
        };
        loadData();
    }, [id]); // Effectue une nouvelle récupération des données si l'ID change
    if (!product) {
        return <div>Chargement...</div>; // Ou un message d'erreur en attendant le produit
    }

    return (
        <div className={"product-details"}>
            <title>{product.product_name}</title>
            {/* Afficher l'image du produit avec son alt */}
            <img
                alt={`Image du produit : ${product?.product_name}`}
                src="../../public/chargement-removebg-preview.png" // Assure-toi que product?.poster_path contient l'URL de l'image
                className="product-image" // Applique une classe CSS pour définir la taille de l'image
            />
            <div>{product?.product_name}</div>

            {/* Select pour choisir la quantité */}
            <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(Number(e.target.value))} >
                {product?.quantity ?
                    Array.from({length: product.quantity}, (_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    )) : (
                        <option value="0">Quantité non disponible</option>
                    )
                }
            </select>

            {/* Composant pour ajouter au panier */}
            <AddToKart product={product} quantity={selectedQuantity} />

        </div>
    );
};

export default ProductDetails;
