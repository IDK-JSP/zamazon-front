import React, {FC, useState} from 'react';
import {getZamazon} from "../api/api";
import {OrderItem as OrderType} from "../@types/orderItem"
import OrderItem from "../component/OrderItem";
import "../css/Orders.css"

const Orders: FC<{}> = ({}) => {
    const [email, setEmail] = useState<string>();
    const [orders, setOrders] = useState<OrderType[]>([]);
    const recherche = async () => {
        const response = getZamazon(`/orders/search?query=${email}`);
        console.log(response);
        if (response) {
            setOrders(await response)
            console.log(orders);
        }
    }

    return (
        <div>
            <title>Commandes</title>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={recherche}>Rechercher</button>
            <table className="order-list">
                <thead>
                    <th>N° de commande : </th>
                    <th>Total de la commande : </th>
                </thead>
                {orders && orders.length > 0 ? (
                    orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.order_id}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2}>Aucune commande trouvée</td>
                    </tr>
                )}

            </table>
        </div>
    );
};

export default Orders;