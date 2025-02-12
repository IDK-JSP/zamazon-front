import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;


export const getZamazon = async (url: string, config: object = {}) => {
    try {
        const response = await axios.get(url, config);
        return response.data; // Retourner les résultats de la réponse
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null; // Retourner null en cas d'erreur
    }
};
export const postZamazon = (url: string, data: any, config: any = {}) => {
    // Si un token est fourni, on ajoute le header Authorization
    return axios.post('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            return { success: false, message: error.response?.data || "Erreur de connexion" };
        });
};
export const putZamazon = (url: string, data: any, config: any = {}) => {
    return axios.put('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            return { success: false, message: error.response?.data || "Erreur de connexion" };
        });
}






