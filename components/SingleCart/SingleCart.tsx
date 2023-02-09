import Image from "next/image";
import StarRating from "@/components/StarRating/StarRating";
import {IProduct} from "@/components/Cards/Cards-types";
import deleteIcon from "../../public/delete.svg";
import classes from "@/components/Card/Card.module.scss";
import CountProducts from "@/components/CountProducts/CountProducts";

type InitialPropsForSingleCart = {
    cart: IProduct;
    cartItems: IProduct[];
    setCartItems: (prev: any) => {};
    setId: (prev:any) => {};
    id: number[];
}
export default function SingleCart({cart, cartItems, setCartItems, id, setId}: InitialPropsForSingleCart) {
    const deleteHandler = () => {
        const filteredCartItems = cartItems.filter((item: IProduct) => item.id !== cart.id);
        setCartItems(filteredCartItems);
        setId((prev: any) => prev.filter((item: any) => item !== cart.id ))
    }
    return (
            <article>
                <div className="delete-icon" onClick={deleteHandler}>
                    <Image
                        src={deleteIcon}
                        alt="delete icon"
                        width="21"
                        height="17"
                    />
                </div>
                <div className={classes.image_container}>
                    <Image
                        src={`${cart.image}`}
                        alt="it is photo"
                        width="220"
                        height="220"
                    />
                </div>
                <div className={classes.category}>
                    <span className={classes.type_product}>{cart.category}</span>
                    <div>
                        <StarRating rating={cart.rating.rate} />
                    </div>
                </div>
                <div className={classes.description}>{cart.description}</div>
                <div className={classes.price}>{(cart.price * 70).toFixed(2)} ₽ <span className={classes.price_single}>/шт.</span></div>
                <CountProducts cartItems={cartItems} product={cart} setCartItems={setCartItems} />
            </article>
    )
}