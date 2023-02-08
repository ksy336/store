import Router from "next/router";
import Image from "next/image";
import {IProduct} from "@/components/Cards/Cards-types";
import StarRating from "@/components/StarRating/StarRating";
import FavoritesSign from "@/components/FavoritesSign/FavoritesSign";
import classes from "./Card.module.scss";
import ButtonToCart from "@/components/ButtonToCart/ButtonToCart";
import ButtonInCart from "@/components/ButtonInCart/ButtonInCart";
import useLocalStorage from "@/customHooks/useLocalStorage";
import {useEffect, useState} from "react";

type InitialPropsForProduct = {
    product: IProduct;
    itemsToLocalStorage: any;
    setItemsToLocalStorage: any;
    numberOfFavorites: number;
    setNumberOfFavourites: () => void;
    id: number[];
    setId: (prev:any) => {};
    redHeart: number[];
    setRedHeart: (prev: any) => {};
}
export default function Card ({id, setId,product, itemsToLocalStorage, setItemsToLocalStorage, numberOfFavorites, setNumberOfFavourites, redHeart, setRedHeart, }: InitialPropsForProduct) {
    // const [id, setId] = useLocalStorage("idArray", []);
    const [currentId, setCurrentId] = useState<number[]>([]);
    useEffect(() => {
        setCurrentId(id);
    }, [id]);
    const size = 100;
    const addToCartHandler = () => {
        setId((prev: any) => {
            return [...prev, product.id]
        });
        setItemsToLocalStorage((prev: any) => [...prev, {...product}]);
    }
    const goToShoppingCart = () => {
        Router.push('/shopping-cart');
    }

    return (
        <article>
            <div className={classes.image_container}>
                <Image
                    src={`${product.image}`}
                    alt="it is photo"
                    width="220"
                    height="220"
                />
            </div>
            <div className={classes.category}>
                <span className={classes.type_product}>{product.category}</span>
                <div>
                    <StarRating rating={product.rating.rate} />
                </div>
            </div>
            {product.description.length > size ? (
                <div className={classes.description}>{product.description.slice(0, size) + '...'}</div>
            ) : (
                <div className={classes.description}>{product.description}</div>
            )}
            <div className={classes.price}>{(product.price * 70).toFixed(2)} ₽ <span className={classes.price_single}>/шт.</span></div>
            <div className={classes.buttons}>
                {!currentId?.includes(product.id) && (
                    <ButtonToCart onClick={addToCartHandler} type="button">В корзину</ButtonToCart>
                )}
                {currentId?.includes(product.id) && (
                    <ButtonInCart product={product} itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} onClick={goToShoppingCart} type="button">В корзине</ButtonInCart>
                )}
                <FavoritesSign
                    redHeart={redHeart}
                    setRedHeart={setRedHeart}
                    product={product}
                    numberOfFavorites={numberOfFavorites}
                    setNumberOfFavourites={setNumberOfFavourites}
                />
            </div>
        </article>
    )
}