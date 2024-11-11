import s from "./style.module.css"
import TVShowListItem from "../TVShowListItem/TVShowListItem"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function TVShowList({ tvShowList, onClickItem }) {
    const carouselSettings = {
        responsive: {
            0: {
                items: 1,
                itemsFit: 'contain', // This ensures the images are contained and fit within the viewport
                margin: 10,
            },
            600: {
                items: 1,  // One item per slide for small screens
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
        autoPlay: true,
        infinite: true,
        autoPlayInterval: 3000,
        centerMode: true,  // Centers the active item
    };

    return (
        <div className={s.carouselContainer}>
            <AliceCarousel {...carouselSettings}>
                {tvShowList.map((tvShow) => (
                    <span key={tvShow.id} className={s.tv_show_list_item}>
                        <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
                    </span>
                ))}
            </AliceCarousel>
        </div>
    );
}

export default TVShowList;