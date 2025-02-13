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
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

    const fetchData = async () => {
        try {
            const data = await getZamazon(`/products/${id}`);
            if (data) {
                setProduct(data);
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
    }, [id]);

    if (!product) {
        return <div>Chargement...</div>;
    }

    return (
        <div className={"product-details"}>
            <title>{product.product_name}</title>
            <img
                alt={`Image du produit : ${product?.product_name}`}
                src={""}
                className="product-image"
            />
            <article className={"product-details-write"}>
                <aside className={"name-quantity"}>
                    <div>{product?.product_name}</div>
                    <select
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                    >
                        {product?.quantity && product.quantity > 0 ? (
                            Array.from({length: product.quantity}, (_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))
                        ) : (
                            <option value="0">Quantité non disponible</option>
                        )}
                    </select>
                </aside>
                <div>{product.price}$</div>
                <div>{product?.description}</div>
            </article>

            <AddToKart product={product} quantity={selectedQuantity}/>
        </div>
    );
};

export default ProductDetails;
