import React, {FC} from 'react';
import {ProductItem as ProductType} from "../@types/productItem";

const MyComponent: FC<{product?:ProductType, quantity?:number}> = ({product,quantity}) => {
    const addToKart=()=>{

    }
    return (
        <button onClick={addToKart}>+</button>
    );
};

export default MyComponent;
