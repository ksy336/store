import Card from "@/components/Card/Card";
import Image from "next/image";
import {IProduct} from "@/components/Cards/Cards-types";
import classes from "./Cards.module.scss";
import arrow from  "../../public/arrow.svg";
import photo from "../../public/banner 1.png";
import banner from "../../public/banner 2.png";
import useLocalStorage from "@/customHooks/useLocalStorage";

type InitialProps = {
    products: IProduct[];
    numberOfFavorites: number;
    setNumberOfFavourites: () => {};
    cartItems: IProduct[];
    setCartItems: (prev: any) => {};
}
export default function Cards({cartItems, setCartItems, products, numberOfFavorites, setNumberOfFavourites}: InitialProps) {
    const [id, setId] = useLocalStorage("idArray", []);
    const [redHeart, setRedHeart] = useLocalStorage("heart", []);
    return (
        <>
            <div className={classes.cards}>
                <article className={classes.first_article}>
                    <div className={classes.work_text}>Всё для комфортной работы</div>
                    <div>
                        <Image
                            width="40"
                            height="16"
                            alt="it is an arrow image"
                            src={arrow}
                        />
                    </div>
                    <div className={classes.banner}>
                        <Image
                            width="332"
                            height="140"
                            alt="it is an banner image"
                            src={photo}
                            className={classes.banner_img}
                        />
                    </div>
                    <div>
                        <Image
                            width="332"
                            height="140"
                            alt="it is an banner second image"
                            src={banner}
                            className={classes.banner_img}

                        />
                    </div>
                </article>
                {products?.map((product: IProduct) => (
                    <Card
                        key={product.id}
                        product={product}
                        id={id}
                        setId={setId}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        numberOfFavorites={numberOfFavorites}
                        setNumberOfFavourites={setNumberOfFavourites}
                        redHeart={redHeart}
                        setRedHeart={setRedHeart}
                    />
                ))}
            </div>
        </>
    )
}