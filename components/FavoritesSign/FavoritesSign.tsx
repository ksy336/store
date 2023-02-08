import Image from "next/image";
import image from "../../public/favourites.svg";
import redImage from "../../public/heart2.svg";
import {useEffect, useState} from "react";
import styles from "./FavoritesSign.module.scss";
import {IProduct} from "@/components/Cards/Cards-types";

type InitialPropsForSign = {
    numberOfFavorites: number;
    setNumberOfFavourites: (num: number) => void;
    product: IProduct;
    redHeart: number[];
    setRedHeart: (prev: any) => {};
}
export default function FavoritesSign({ redHeart, setRedHeart, product, numberOfFavorites, setNumberOfFavourites}: InitialPropsForSign) {
    const [heart, setHeart] = useState<number[]>( []);
    useEffect(() => {
        setHeart(redHeart);
    })
    const addToFavorites = () => {
        setRedHeart((prev: any) => [...prev, product.id] )
        setNumberOfFavourites(numberOfFavorites + 1);
    }
    const removeFromFavorites = () => {
        if (numberOfFavorites < 0) {
            return
        }
        setNumberOfFavourites(numberOfFavorites - 1);
        setRedHeart((prev: any) => {
            console.log(prev);
            return [...prev].filter((item) => item !== product.id)
        });
    }
    return (
        <>
            {!heart?.includes(product.id) && (
                    <Image
                        src={image}
                        alt="it is photo"
                        width="40"
                        height="40"
                        onClick={addToFavorites}
                        className={styles.heart_image}
                    />
            )}
            {heart?.includes(product.id) && (
                <Image
                    src={redImage}
                    alt="it is photo"
                    width="40"
                    height="40"
                    className={styles.heart_image}
                    onClick={removeFromFavorites}
                />
            )}
        </>
    )
}