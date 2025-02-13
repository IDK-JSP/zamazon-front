import {FC, useContext, useState} from 'react';
import "../css/RegisterForm.css"
import {postZamazon} from "../api/api";
import {useNavigate} from "react-router";
import {EmailContext, KartContext} from "../App";

const RegisterForm: FC<{}> = ({}) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigate = useNavigate();
    const emailContext = useContext(EmailContext);


    const handleRegister = () => {
        const data = {
            email: email,
            password: password
        }
        if (email && password != undefined) {
            postZamazon("/auth/register", data)
                .then((message) => {
                    if (message === "User registered successfully!") {
                        navigate('/Shop')
                        emailContext?.setEmail(email);
                    }
                })
                .catch((error) => {
                    console.error("Error during registration:", error);
                });
        }
        console.log(emailContext?.email)
    }
    return (
        <div className={"register-form"}>
            <input placeholder={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder={"Mot de passe"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>Inscription</button>
        </div>
    );
};

export default RegisterForm;
