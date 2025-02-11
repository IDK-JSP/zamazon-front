import {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {getZamazon} from "../api/api";
import {ProductItem as ProductType} from "../@types/productItem"


const ProductDetails: FC<{}> = () => {
    const location = useLocation();
    const id = location.pathname.split('/').pop();
    const [product, setProduct] = useState<ProductType>()
    const fetchData = async () => {
        try {
            const data = await getZamazon(`http://localhost:8080/products/${id}`);

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
    }, []);
    return (
        <div className={"product-details"}>

            {product ? (
                    <div>{product.product_name}</div>
            ) : (
                <div>Loading..</div>
            )}
        </div>
    );
};

export default ProductDetails;
