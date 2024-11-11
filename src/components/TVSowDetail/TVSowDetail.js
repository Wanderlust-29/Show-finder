import FiveStarRating from "../FiveStarRating/FiveStarRating"
import s from "./style.module.css"

function TVShowDetail({ tvShow }) {
    const rating = (tvShow.vote_average / 2).toFixed(2);

    return (
        <div>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating} />
                <div className={s.rating}>{rating}</div>
            </div>
            <p className={s.overview}>{tvShow.overview}</p>
        </div>
    )
}

export default TVShowDetail