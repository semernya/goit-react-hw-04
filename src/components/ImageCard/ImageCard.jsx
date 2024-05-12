import css from './ImageCard.module.css'

export default function ImageCard({ onClick, item: {
    alt_description,
    likes,
    urls: { small },
    user: { instagram_username },
} }) {
    return (
        <div className={css.imgBox}>
            <img onClick={onClick} src={small} alt={alt_description} width='300' height='230' className={css.img} />
            <div className={css.socials}>
                <p>Likes: {likes}</p>
                <p>{instagram_username}</p>
            </div>
        </div>

    )
}