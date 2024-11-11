import s from "./style.module.css"

function Logo({ image, title, subtitle }) {

    return (
        <>
            <div className={s.container}>
                <img src={image} className={s.img} />
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitle}</span>
        </>
    )
}

export default Logo