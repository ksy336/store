import Image from "next/image";
import image from "../../public/favourites.svg";
import redImage from "../../public/избранное (1).svg";
import {useState} from "react";
import styles from "./FavoritesSign.module.scss";

export default function FavoritesSign() {
    const [redHeart, setRedHeart] = useState(false);
    const addToFavorites = () => {
        setRedHeart(true);
    }

    return (
        <>
            {!redHeart && (
                    <Image
                        src={image}
                        alt="it is photo"
                        width="40"
                        height="40"
                        onClick={addToFavorites}
                        className={styles.heart_image}
                    />
            )}
            {redHeart && (
                <Image
                    src={redImage}
                    alt="it is photo"
                    width="40"
                    height="40"
                    className={styles.heart_image}
                />
            )}
        </>
    )
}