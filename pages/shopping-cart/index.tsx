import Router from "next/router";
import classes from "../../styles/shopping-cart.module.scss"
import useLocalStorage from "@/customHooks/useLocalStorage";
import {IProduct} from "@/components/Cards/Cards-types";
import SingleCart from "@/components/SingleCart/SingleCart";
import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";
import ButtonInCart from "@/components/ButtonInCart/ButtonInCart";
import {useMemo} from "react";
import Footer from "@/components/Footer/Footer";
import FooterBottom from "@/components/FooterBottom/FooterBottom";

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useLocalStorage("products", []);
    const [numberOfFavorites] = useLocalStorage("favoritesNumber", 0);
    const [id, setId] = useLocalStorage("idArray", []);
    const totalPrice = useMemo(() => cartItems.reduce((prev: any, curr: any) => prev + (+curr.totalPrice * 70), 0), [cartItems])
    const goLinkHome = () => {
        Router.push('/')
    }
    return (
        <div className={classes.wrapper}>
            <MainLayout cartItems={cartItems} numberOfFavorites={numberOfFavorites}>
                <Head>
                    <title>Online store</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/online-store.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                        rel="stylesheet" />

                </Head>
                <article className={classes.block_text}>
                    <h1>Корзина</h1>
                    <ButtonInCart onClick={goLinkHome}>Back home</ButtonInCart>
                </article>
                {cartItems?.length === 0 ? (
                    <h1 className={classes.no_items}>Корзина пуста</h1>
                ) : (
                    <div className={classes.carts_container}>
                        {cartItems?.map((cart: IProduct) => (
                            <SingleCart
                                cart={cart}
                                key={cart.id}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                setId={setId}
                                id={id}
                            />
                        ))}
                    </div>
                )}
                {cartItems?.length > 0 && (
                    <div className={classes.button_block}>
                        <div className={classes.button_container}>
                            <div className={classes.button_text}>
                                <span>ИТОГО</span>
                                <span>{totalPrice.toFixed(2)} ₽</span>
                            </div>
                        </div>
                    </div>
                )}
                {cartItems?.length > 0 ? (
                    <Footer />
                ) : (
                    <FooterBottom />
                )}

            </MainLayout>
        </div>
    )
}