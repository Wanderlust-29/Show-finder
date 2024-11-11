import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

function SearchBarList({ suggestions, onSelectSuggestion, handleSelectID }) {
    return (
        <div className={s.container}>
            <ul className={s.suggestions_list}>
                {suggestions.map((tvShow, index) => (
                    <li
                        key={tvShow.id}
                        className={s.suggestion_item}
                        onClick={() => {
                            onSelectSuggestion(tvShow.name);
                            handleSelectID(tvShow.id);
                        }}
                    >
                        {tvShow.name}
                        <img
                            className={`${s.item_img} ${index === suggestions.length - 1 ? s.last_item : ''}`}
                            src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
                            alt={tvShow.name}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBarList;
