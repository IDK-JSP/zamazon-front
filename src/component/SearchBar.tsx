import React, {useState} from "react";
import {getZamazon} from "../api/api";

interface SearchBarProps {
    handleSearchResults: (results: any[]) => void;  // Fonction pour mettre à jour les résultats de recherche dans Shop
}

const SearchBar: React.FC<SearchBarProps> = ({handleSearchResults}) => {
    const [search, setSearch] = useState("");  // État pour gérer la valeur de recherche

    // Fonction pour rechercher des produits via l'API
    const handleSearch = async (query: string) => {
        if (!query.trim()) return;  // Si la recherche est vide, ne rien faire

        try {
            const response = await getZamazon(`/products/search?query=${query}`);
            if (response) {
                console.log(response);  // Affichage des résultats dans la console (facultatif)
                handleSearchResults(response);  // Met à jour les résultats dans Shop via la fonction passée en prop
            }
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
        }
    };

    // Gérer le changement de texte dans l'input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;  // Récupère la nouvelle valeur de l'input
        setSearch(query);  // Met à jour l'état 'search'
        handleSearch(query);  // Lance la recherche dès que la valeur change
    };

    return (
        <div>
            <input
                type="text"
                value={search}  // Lier l'input à l'état 'search'
                onChange={handleChange}  // Appeler handleChange à chaque changement de l'input
                placeholder="Rechercher un produit"  // Placeholder de l'input
            />
        </div>
    );
};

export default SearchBar;
