import React, {FC} from 'react';
import {OrderItem as OrderType} from "../@types/orderItem"
import "../css/OrderItem.css"


const OrderItem: FC<{order:OrderType}> = ({order}) => {
    return (
        <div className="order-item">
            <h2>{order?.order_id}</h2>
            <h3>{order?.total}</h3>
        </div>
    );
};

export default OrderItem;