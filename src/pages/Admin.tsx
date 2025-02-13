import React, {FC, useContext, useEffect, useState} from 'react';
import {OrderItem as OrderType} from "../@types/orderItem";
import {getZamazon} from "../api/api";
import "../css/Admin.css"
import {EmailContext} from "../App";
const Admin: FC<{}> = ({}) => {
    const [email, setEmail] = useState<string>();
    const [orders, setOrders] = useState<OrderType[]>([]);
    const emailContext = useContext(EmailContext);
    const recherche = async () => {
        if (emailContext?.email){
            const response = getZamazon(`/orders/search?query=${emailContext?.email}`);
            if (response) {
                setOrders(await response)
            }
        }
    }
    useEffect(() => {
        recherche();
    }, []);

    return (
        <div>
            <title>Commandes</title>
            <table className="order-list">
                <thead>
                <th>N° de commande :</th>
                <th>Total de la commande :</th>
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


export default Admin;
