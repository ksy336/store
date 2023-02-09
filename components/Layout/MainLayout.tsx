import {ReactNode, useEffect, useState} from "react";
import Router from "next/router";
import classes from "./MainLayout.module.scss";
import Image from "next/image";
import heart from "../../public/heart.svg";
import cart from "../../public/cart.svg";

interface Props {
    children?: ReactNode;
    cartItems?: any;
    numberOfFavorites?: any;
}
export default function MainLayout({cartItems, children, numberOfFavorites }: Props) {
    // const numberOfItems = cartItems?.length;
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [favourites, setFavourites] = useState(0);
    useEffect(() => {
        setNumberOfItems(cartItems?.length);
        setFavourites(numberOfFavorites);
    }, [numberOfFavorites, cartItems]);

    const handleClick = () => {
        Router.push('/');
    }
    const goToCartPage = () => {
        Router.push('/shopping-cart');
    }
    const goToFavourites = () => {
        Router.push("/favorites");
    }
    return (
        <>
            <header className={classes.header_header_first}>
                <div className={classes.header_wrapper}>
                    <div className={classes.header_logo} onClick={handleClick}>
                        <span>ONLINE STORE</span>
                    </div>
                    <nav className={classes.nav}>
                        <div className={classes.heart_block} onClick={goToFavourites}>
                        <span>
                            <Image
                                src={heart}
                                alt="it is heart icon"
                                width="23"
                                height="20"
                            />
                        </span><span className={classes.heart_container}><span className={classes.heart_number}>{favourites}</span></span>
                        </div>
                        <div className={classes.cart_block} onClick={goToCartPage}>
                            <span>
                            <Image
                                src={cart}
                                alt="it is shopping cart icon"
                                width="24"
                                height="25"
                            />
                         </span><span className={classes.cart_container}><span className={classes.cart_number}>{numberOfItems}</span></span>
                        </div>
                    </nav>
                </div>
            </header>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}