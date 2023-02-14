import {useEffect, useState} from "react";
import Router from "next/router";
import Image from "next/image";
import {IProduct} from "@/components/Cards/Cards-types";
import StarRating from "@/components/StarRating/StarRating";
import FavoritesSign from "@/components/FavoritesSign/FavoritesSign";
import classes from "./Card.module.scss";
import ButtonToCart from "@/components/ButtonToCart/ButtonToCart";
import ButtonInCart from "@/components/ButtonInCart/ButtonInCart";
import CountProducts from "@/components/CountProducts/CountProducts";
import hit from "../../public/hit.png"
import openNotification from "@/helper/notification";

type InitialPropsForProduct = {
    product: IProduct;
    numberOfFavorites: number;
    setNumberOfFavourites: () => void;
    id: number[];
    setId: (prev:any) => {};
    redHeart: number[];
    setRedHeart: (prev: any) => {};
    cartItems: IProduct[];
    setCartItems: (prev: any) => {};
    setFavoriteProducts: (prev: any) => {};
    favoriteProducts: IProduct[];
}
export default function Card ({setCartItems, cartItems, id, setId,  product, numberOfFavorites, setNumberOfFavourites, redHeart, setRedHeart, setFavoriteProducts, favoriteProducts }: InitialPropsForProduct) {
    const [currentId, setCurrentId] = useState<number[]>([]);
    useEffect(() => {
        setCurrentId(id);
    }, [id]);

    const size = 100;
    const addToCartHandler = () => {
        setId((prev: any) => {
            return [...prev, product.id]
        });
        // addToCart(product);
        setCartItems((prev: any) => {
           return  [...prev, {...product}]
        });
        try {
            openNotification("success", "Товар добавлен в корзину!");
        } catch(e) {
            openNotification("error", "Произошла ошибка! Попробуйте снова");
        }
    }
    const goToShoppingCart = () => {
        Router.push('/shopping-cart');
    }

    return (
        <article>
            {product.rating.count > 300 && (
                <div className={classes.hit}>
                    <Image
                        src={hit}
                        alt="it is photo"
                        width="64"
                        height="24"
                    />
                </div>
            )}
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
                    <>
                        <ButtonInCart onClick={goToShoppingCart} type="button">В корзине</ButtonInCart>
                        <CountProducts cartItems={cartItems} product={product} setCartItems={setCartItems} />
                    </>
                    )}
                <FavoritesSign
                    setFavoriteProducts={setFavoriteProducts}
                    favoriteProducts={favoriteProducts}
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