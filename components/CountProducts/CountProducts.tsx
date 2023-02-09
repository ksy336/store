import {useMemo} from "react";
import Image from "next/image";
import classes from "./CountProducts.module.scss";
import plus from "../../public/+.svg";
import minus from "../../public/-.svg";
import {IProduct} from "@/components/Cards/Cards-types";

type InitialPropsForCount = {
    product: IProduct;
    cartItems: IProduct[];
    setCartItems: (prev: any) => {};
}
export default function CountProducts({product, cartItems, setCartItems}: InitialPropsForCount) {
    let count = useMemo(() => cartItems?.find((item: any) => item.id === product.id)?.count, [cartItems]);

    const deleteProductFromCart = () => {
        if (count === 1) {
            return
        }
        setCartItems((cartItems: IProduct[]) => {
            return cartItems.map((storeItem: any) => {
                return {
                    ...storeItem,
                    count: storeItem.count - 1 > 1 ? Number(storeItem.count - 1) : 1,
                    totalPrice: (storeItem.count - 1 > 1 ? Number(storeItem.count - 1) : 1) * Number(storeItem.price)
                }
            })
        })
    }
    const addProductToCart = () => {
        if (count === 20) {
            return;
        }
        setCartItems((cartItems: IProduct[]) => {
            return cartItems?.map((storeItem: any) => {
                if (storeItem?.id === product.id) {
                    return {
                        ...storeItem,
                        count: Number(++storeItem.count),
                        totalPrice: Number(storeItem.count) * Number(product.price),
                    }
                }
                return storeItem;
            })
        })
    };
    return (
        <div className={classes.button_count}>
            <Image
                    src={minus}
                    alt="it is a minus sign"
                    width="10"
                    height="2"
                    className={classes.icon_minus}
                    onClick={deleteProductFromCart}
                />
            <span className={classes.count_number}>{count || 1}</span>
            <Image
                    src={plus}
                    alt="it is a plus sign"
                    width="10"
                    height="10"
                    className={classes.icon_plus}
                    onClick={addProductToCart}
            />
        </div>
    )
}