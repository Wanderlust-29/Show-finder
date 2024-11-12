import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show"
import "./global.css"
import s from "./style.module.css"
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVSowDetail/TVSowDetail";
import Logo from "./components/Logo/Logo";
import logo from "./assets/images/logo.svg"

import TVShowList from "./components/TvShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
    //State
    const [currentTVShow, setCurrentTVShow] = useState();
    const [currentRecommendations, setCurrentRecommendations] = useState([]);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    //Function async api


    //recupere la serie la plus populaire
    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentTVShow(populars[0]);
        }
    }

    //recupere la les recommandation de tvShowId
    async function fetchRecommendations(tvShowId) {
        const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
        if (recommendations.length > 0) {
            const filteredRecommendations = recommendations.filter(recommendation => recommendation.backdrop_path !== null);
            setCurrentRecommendations(filteredRecommendations.slice(0, 10));
        }
    }

    async function fetchTVShowById(id) {
        const numericId = Number(id); // Conversion de l'ID en nombre
        if (isNaN(numericId)) {
            console.error("L'ID fourni n'est pas un nombre valide");
            return;
        }

        const response = await TVShowAPI.findById(numericId);
        if (response) {
            console.log(response);
            setCurrentTVShow(response);
        }
    }


    // recupere le titre  
    async function searchTVShow(tvShowName) {
        const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
        if (searchResponse.length > 0) {
            setCurrentTVShow(searchResponse[0]);
        }
    }

    //met a jour la liste en fonction du texte dans l'input
    async function handleInputChange(e) {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() !== "") {
            const searchResults = await TVShowAPI.fetchByTitle(value);

            const filteredResults = searchResults.filter(result =>
                result.backdrop_path !== null
            );
            setSuggestions(filteredResults.slice(0, 5));
        } else {
            setSuggestions([]);
        }
    }

    //UseEffect
    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    return (
        <div className={s.main_container}
            style={{ background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black" }}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={logo} title={"Show Finder"} subtitle={"Your next favorite show, just a click away"} />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar
                            searchById={fetchTVShowById}
                            onSubmit={searchTVShow}
                            query={query}
                            inputChange={handleInputChange}
                            suggestions={suggestions}
                            setSuggestions={setSuggestions}
                            setQuery={setQuery}
                        />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_details}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className={s.recommendations}>
                {currentRecommendations.length > 0 && (
                    <TVShowList onClickItem={setCurrentTVShow} tvShowList={currentRecommendations} />
                )}
            </div>
        </div>
    );
}

export default App;