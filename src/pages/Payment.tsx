import React, {FC} from 'react';


const Payment: FC<{}> = ({}) => {
    return (
        <div className="payment-form">
            <h2><u>Total à payé : 0</u></h2>
            <input placeholder={"Votre e-mail"}/>
            <button>Valider le payment</button>
        </div>
    );
};

export default Payment;
