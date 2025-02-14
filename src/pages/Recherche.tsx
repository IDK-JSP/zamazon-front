import React, {FC, useContext, useEffect} from 'react';
import ProductItem from "../component/ProductItem";
import "../css/Shop.css";
import {getZamazon} from "../api/api";
import {ProductItem as ProductType} from "../@types/productItem";
import {EmailContext, ProductContext} from "../App";
import SearchBar from "../component/SearchBar";

const Research: FC<{}> = () => {
    const [productCollection, setProductCollection] = React.useState<ProductType[]>([]); // Pour stocker les produits
    const productContext = useContext(ProductContext);

    // Fonction pour récupérer tous les produits dans la base de données
    const fetchData = async () => {
        if (productContext?.product) {
            setProductCollection(productContext.product);  // Récupère les produits du contexte s'ils existent
        } else {
            try {
                const data = await getZamazon("/products/all");  // Si pas de produits dans le contexte, on récupère tous les produits

                if (data) {
                    setProductCollection(data);  // Mettre à jour la collection de produits
                } else {
                    console.log("Aucune donnée disponible.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        }
    };

    // Fonction pour mettre à jour les résultats de recherche dans productCollection
    const handleSearchResults = (results: ProductType[]) => {
        setProductCollection(results);  // Met à jour le state avec les résultats de la recherche
    };

    // Charger les produits par défaut au premier rendu
    useEffect(() => {
        const loadData = async () => {
            await fetchData();
        };

        loadData();  // Charger les produits
    }, []);  // Le tableau vide [] signifie que cela se produit uniquement au premier rendu

    return (
        <div className={"shop"}>
            <title>Recherche</title>
            <SearchBar
                handleSearchResults={handleSearchResults}/> {/* Passer la fonction ici pour mettre à jour les produits */}

            <div className={"body"}>
                {/* Si productCollection est vide, on affiche un message, sinon les produits */}
                {productCollection.length === 0 ? (
                    <p>Aucun produit trouvé</p>
                ) : (
                    productCollection.map((product: any) => (
                        <ProductItem key={product.product_id} product={product}/>
                    ))
                )}
            </div>
        </div>
    );
}

export default Research;
