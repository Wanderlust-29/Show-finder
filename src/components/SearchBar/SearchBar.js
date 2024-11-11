import React, { useState, useEffect, useRef } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import SearchBarList from "../SearBarList/SearchBarList";

function SearchBar({ onSubmit, query, setQuery, inputChange, suggestions, setSuggestions, searchById }) {
    const [showSuggestions, setShowSuggestions] = useState(true);

    // Fonction pour soumettre la recherche
    function submit(e) {
        if (e.key === "Enter" && query.trim() !== "") {
            onSubmit(query);
            setShowSuggestions(false);
            setQuery("")
            setSuggestions([]);
        }
    }

    // Fonction de sélection d'une suggestion
    const handleSelectSuggestion = (suggestion) => {
        onSubmit(suggestion);
        setShowSuggestions(false);
        setQuery("");
        setSuggestions([]);
    };

    const handleSelectID = (id) => {
        searchById(id);
    }


    return (
        <div className={s.search_container}>
            <SearchIcon size={27} className={s.icon} />
            <input
                value={query}
                onChange={inputChange}
                onKeyUp={submit}
                className={s.input}
                type="text"
                placeholder="Search a TV show"
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && suggestions.length > 0 && (
                <SearchBarList
                    handleSelectID={handleSelectID}
                    suggestions={suggestions}
                    onSelectSuggestion={handleSelectSuggestion}
                />
            )}
        </div>
    );
}

export default SearchBar;
