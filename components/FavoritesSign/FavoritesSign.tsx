import Image from "next/image";
import image from "../../public/favourites.svg";
import redImage from "../../public/heart2.svg";
import {useState} from "react";
import styles from "./FavoritesSign.module.scss";
import useLocalStorage from "@/customHooks/useLocalStorage";

type InitialPropsForSign = {
    numberOfFavorites: number;
    setNumberOfFavourites: (num: number) => void;
}
export default function FavoritesSign({numberOfFavorites, setNumberOfFavourites}: InitialPropsForSign) {
    // const [redHeart, setRedHeart] = useLocalStorage("heart", false);
    const [redHeart, setRedHeart] = useState( false);
    const addToFavorites = () => {
        setRedHeart(true);
        setNumberOfFavourites(numberOfFavorites + 1);
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