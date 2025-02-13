import {FC, useContext, useState} from 'react';
import "../css/RegisterForm.css"
import {postZamazon} from "../api/api";
import {useNavigate} from "react-router";
import {EmailContext, KartContext} from "../App";

const LogInForm: FC<{}> = ({}) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigate = useNavigate();
    const emailContext = useContext(EmailContext);


    const handleLogIn= () => {
        const data = {
            email: email,
            password: password
        }
        if (email && password != undefined) {
            postZamazon("/auth/login", data)
                .then((message) => {
                    if (message) {
                        console.log(message)
                        emailContext?.setEmail(email)
                        /*navigate('/Shop')
                        emailContext?.setEmail(email);*/
                    } else {
                        alert("Mauvais identifiants")
                    }
                })
                .catch((error) => {
                    console.error("Error during registration:", error);
                    if (error === 400) {
                        console.log("Email déjà utilisé")
                    }
                });
        }
    }
    return (
        <div className={"register-form"}>
            <input placeholder={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder={"Mot de passe"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogIn}>Inscription</button>
        </div>
    );
};

export default LogInForm;
