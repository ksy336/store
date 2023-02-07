import Router from "next/router";
import Image from "next/image";
import {IProduct} from "@/components/Cards/Cards-types";
import StarRating from "@/components/StarRating/StarRating";
import FavoritesSign from "@/components/FavoritesSign/FavoritesSign";
import classes from "./Card.module.scss";
import ButtonToCart from "@/components/ButtonToCart/ButtonToCart";
import {useState} from "react";
import ButtonInCart from "@/components/ButtonInCart/ButtonInCart";
import useLocalStorage from "@/customHooks/useLocalStorage";

type InitialPropsForProduct = {
    product: IProduct;
    itemsToLocalStorage: any;
    setItemsToLocalStorage: any;
}
export default function Card({product, itemsToLocalStorage, setItemsToLocalStorage}: InitialPropsForProduct) {
    const [numberOfItems, setNumberOfItems] = useLocalStorage("number", 1);
    const [inShoppingCart, setInShoppingCart] = useState(false);
    const size = 100;
    const addToCartHandler = () => {
        setInShoppingCart(true);
        setItemsToLocalStorage((prev: any) => [...prev, {product}]);
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
                {!inShoppingCart && (
                    <ButtonToCart onClick={addToCartHandler} type="button">В корзину</ButtonToCart>
                )}
                {inShoppingCart && (
                    <ButtonInCart onClick={goToShoppingCart} type="button">В корзине</ButtonInCart>
                )}
                <FavoritesSign />
            </div>
        </article>
    )
}