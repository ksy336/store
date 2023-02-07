import styles from "./StarRating.module.scss";


type InitialPropsForRating = {
    rating: number;
}
export default function StarRating({rating}: InitialPropsForRating) {
    return (
        <>
            {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input className={styles.invisible} type="radio" name="rating" value={ratingValue} />
                        <span className={`${ratingValue <= Math.round(rating) ? styles.yellow : styles.grey}`}>★</span>
                    </label>
                        )
            }
            )}
            <span className={styles.feedback}>4 отзыва</span>
        </>
    )
}