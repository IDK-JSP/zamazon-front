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

    //Fonction pour se connecter
    const handleLogIn= () => {
        const data = {
            email: email,
            password: password
        }
    // Vérifie que les champs email et mot de passe ne sont pas vides, et fait la requête en fonction des données
        if (email && password != undefined) {
            postZamazon("/auth/login", data)
                .then((message) => {
                    if (typeof (message)=== "string") {
                        // Si la connexion est réussie, on enregistre l'email dans un contexte
                        emailContext?.setEmail(email)
                        navigate('/Shop')
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
            <button onClick={handleLogIn}>Connexion</button>
        </div>
    );
};

export default LogInForm;
