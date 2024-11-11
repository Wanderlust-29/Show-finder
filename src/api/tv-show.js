import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
import Swal from 'sweetalert2';

export class TVShowAPI {
    static async fetchPopulars() {
        try {
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
            return response.data.results;
        } catch (error) {
            console.error("Erreur:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: "An error occurred while fetching popular TV shows.Please try again later.",
            });
        }
    }

    static async fetchRecommendations(tvShowId) {
        try {
            const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
            return response.data.results;
        } catch (error) {
            console.error("Erreur:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: "An error occurred while fetching recommendations TV shows.Please try again later.",
            });
        }
    }
    static async findById(id) {
        try {
            const response = await axios.get(`${BASE_URL}tv/${id}${API_KEY_PARAM}`);
            return response.data.results;
        } catch (error) {
            console.error("Erreur:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: "An error occurred while fetching recommendations TV shows.Please try again later.",
            });
        }
    }

    static async fetchByTitle(title) {
        try {
            const response = await axios.get(
                `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
            );
            return response.data.results;
        } catch (error) {
            console.error("Erreur:", error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: "An error occurred while searching for the TV show. Please try again later.",
            });
        }
    }
}


