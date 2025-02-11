import React, {FC, useEffect} from 'react';
import ProductItem from "../component/ProductItem";
import "../css/Shop.css"
import {getZamazon} from "../api/api";
import {ProductItem as ProductType} from "../@types/productItem"

const Shop:FC<{}>=()=> {
    const [productCollection, setProductCollection] = React.useState<ProductType[]>([]);
    const fetchData = async () => {
        try {
            const data = await getZamazon("http://localhost:8080/products/all");

            if (data) {
                console.log('data',data); // Afficher les données récupérées
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
            <div className={"body"}>
                {productCollection.map((product:any) => (
                    <ProductItem key={product.product_id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Shop;