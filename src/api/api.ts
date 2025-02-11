import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

export const postVisiotheque = (url: string, data: any,  config?: {}) => {
    return axios.post('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            return {success: false, message: error.response?.data || "Erreur de connexion"};  // Gestion simplifiée des erreurs
        });
}

export const getCollection = (url: string, config?: {}) => {

    return axios.get('https://api.themoviedb.org/3' + url, config)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
        })
}

export const get = (url: string, config: any = {}) => {
    const defParams = {
        api_key: "2bc9a7883ffe9f225bee010bee3d0f67", // ta clé API
        include_adult: false,
        include_video: false,
        language: "fr-FR",
    };

    // Fusionner les paramètres par défaut avec ceux passés dans `config`
    const finalConfig = {
        ...config,
        params: {
            ...defParams, // paramètres par défaut
            ...config.params, // paramètres supplémentaires
        },
    };

    // Vérification de l'URL
    const baseUrl = 'https://api.themoviedb.org/3'; // URL de base de l'API externe

    return axios.get(baseUrl + url, finalConfig)
        .then((response) => {
            return response.data; // Retourner les données de la réponse
        })
        .catch((error) => {
            console.error(error);
            // Traiter l'erreur si nécessaire
        });
};



