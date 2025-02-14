import {FC, useContext, useState} from 'react';
import "../css/RegisterForm.css"
import {postZamazon} from "../api/api";
import {useNavigate} from "react-router";
import {EmailContext, KartContext} from "../App";

const RegisterForm: FC<{}> = ({}) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [verifPassword, setVerifPassword] = useState<string>()
    const navigate = useNavigate();
    const emailContext = useContext(EmailContext);

    //Fonction pour s'inscrire
    const handleRegister = () => {
        const data = {
            email: email,
            password: password
        }
        // Comme pour le LogInForm, vérification des champs email et mot de passe et ajout d'un champ de vérification du mot de passe
        if (email && password != undefined && password === verifPassword) {
            postZamazon("/auth/register", data)
                .then((message) => {
                    if (message === "User registered successfully!") {
                        navigate('/Shop')
                        // Si l'inscription est réussie, on enregistre l'email dans un contexte
                        emailContext?.setEmail(email);
                        emailContext?.setLoggedIn(true)
                    }else{
                        alert("Email déjà utilisé")
                    }
                })
                .catch((error) => {
                    console.error("Error during registration:", error);
                    if (error === 400){
                        console.log("Email déjà utilisé")
                    }
                });
        }
    }
    return (
        <div className={"register-form"}>
            <input placeholder={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder={"Mot de passe"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <input placeholder={"Verification du mot de passe"} type={"password"} onChange={(e) => setVerifPassword(e.target.value)}/>
            <button onClick={handleRegister}>Inscription</button>
        </div>
    );
};

export default RegisterForm;
