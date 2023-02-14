import Image from "next/image";
import image from "../../public/favourites.svg";
import redImage from "../../public/heart2.svg";
import {useEffect, useState} from "react";
import styles from "./FavoritesSign.module.scss";
import {IProduct} from "@/components/Cards/Cards-types";
import openNotification from "@/helper/notification";

type InitialPropsForSign = {
    numberOfFavorites: number;
    setNumberOfFavourites: (num: number) => void;
    product: IProduct;
    redHeart: number[];
    setRedHeart: (prev: any) => {};
    setFavoriteProducts: (prev: any) => {};
    favoriteProducts: IProduct[];
}
export default function FavoritesSign({ redHeart, setRedHeart, product, numberOfFavorites, setNumberOfFavourites, setFavoriteProducts, favoriteProducts}: InitialPropsForSign) {
    const [heart, setHeart] = useState<number[]>( []);
    const [favoritesForState, setFavoritesForState] = useState<IProduct[]>([]);
    useEffect(() => {
        setHeart(redHeart);
        setFavoritesForState(favoriteProducts);
    })
    const addToFavorites = () => {
        setRedHeart((prev: any) => [...prev, product.id] )
        setNumberOfFavourites(numberOfFavorites + 1);
        setFavoriteProducts((prev: any) => [...prev, product]);
        try {
            openNotification("success", "Товар добавлен в избранное!");
        } catch(e) {
            openNotification("error", "Произошла ошибка! Попробуйте снова");
        }
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
        setFavoriteProducts((prev: any) => [...prev].filter((item) => item.id !== product.id))
        try {
            openNotification("success", "Товар удален из избранного!");
        } catch(e) {
            openNotification("error", "Произошла ошибка! Попробуйте снова");
        }
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