import React, {FC, useContext, useEffect} from 'react';
import ProductItem from "../component/ProductItem";
import "../css/Shop.css"
import {getZamazon} from "../api/api";
import {ProductItem as ProductType} from "../@types/productItem"
import {EmailContext} from "../App";

const Shop:FC<{}>=()=> {
    const [productCollection, setProductCollection] = React.useState<ProductType[]>([]);
    // Fonction pour récupérer tous les produits dans la base de données
    const fetchData = async () => {
        try {
            const data = await getZamazon("/products/all");

            if (data) {
                setProductCollection(data);
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
    }, []);
    return (
        <div className={"shop"}>
            <title>Boutique</title>
            <div className={"body"}>
                {productCollection.map((product:any) => (
                    <ProductItem key={product.product_id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Shop;