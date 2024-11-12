import s from "./style.module.css"
import TVShowListItem from "../TVShowListItem/TVShowListItem"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function TVShowList({ tvShowList, onClickItem }) {
    const carouselSettings = {
        responsive: {
            0: {
                items: 1,
                itemsFit: 'contain',
                margin: 10,
            },
            600: {
                items: 1,
                itemsFit: 'contain',
                margin: 10,
            },
            1024: {
                items: 3,
                itemsFit: 'contain',
                margin: 20,
            },
            1200: {
                items: 4,
                itemsFit: 'contain',
                margin: 25,
            },
        },
        centerMode: true,
    };

    return (
        <>
            <div className={s.title}>You may also like:</div>
            <div className={s.carouselContainer}>
                <AliceCarousel {...carouselSettings}>
                    {tvShowList.map((tvShow) => (
                        <span key={tvShow.id} className={s.tv_show_list_item}>
                            <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
                        </span>
                    ))}
                </AliceCarousel>
            </div>
        </>
    );
}

export default TVShowList;