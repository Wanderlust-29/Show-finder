import s from "./style.module.css"

function FiveStarRating({ rating }) {

    const filled = Math.floor(rating) /*`<i class="bi bi-star-fill"></i>` remplie */
    const half = rating - filled >= 0.5/*`<i class="bi bi-star-half"></i>`  moitiée */
    const empty = 5 - filled - (half ? 1 : 0) /* `<i class="bi bi-star"></i>` vide */

    const stars = [];

    for (let i = 0; i < filled; i++) {
        stars.push(<i key={`filled-${i}`} className="bi bi-star-fill"></i>)
    }
    if (half) {
        stars.push(<i key="half" className="bi bi-star-half"></i>)
    }
    for (let i = 0; i < empty; i++) {
        stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
    }

    return (
        <div className={s.stars}>
            {stars}
        </div>
    )
}

export default FiveStarRating