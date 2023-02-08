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
}
export default function Card({product, itemsToLocalStorage, setItemsToLocalStorage, numberOfFavorites, setNumberOfFavourites }: InitialPropsForProduct) {
    const [id, setId] = useLocalStorage("id", []);
    const [currentId, setCurrentId] = useState();
    useEffect(() => {
        setCurrentId(id)
    })
    const size = 100;
    const addToCartHandler = () => {
        setItemsToLocalStorage((prev: any) => [...prev, {product}]);
        setId((prev: any) => [...prev, product.id]);
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
                {id.includes(product.id) && (
                    <ButtonToCart onClick={addToCartHandler} type="button">В корзину</ButtonToCart>
                )}
                {product.id === currentId && (
                    <ButtonInCart setItemsToLocalStorage={setItemsToLocalStorage} onClick={goToShoppingCart} type="button">В корзине</ButtonInCart>
                )}
                <FavoritesSign numberOfFavorites={numberOfFavorites} setNumberOfFavourites={setNumberOfFavourites} />
            </div>
        </article>
    )
}