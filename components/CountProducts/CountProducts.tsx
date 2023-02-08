import {useMemo} from "react";
import Image from "next/image";
import classes from "./CountProducts.module.scss";
import plus from "../../public/+.svg";
import minus from "../../public/-.svg";
import {IProduct} from "@/components/Cards/Cards-types";

export default function CountProducts({product, itemsToLocalStorage, setItemsToLocalStorage}: any) {
    let count = useMemo(() => itemsToLocalStorage?.reduce((prev: any, curr: any) => curr.count, 0), [itemsToLocalStorage]);
    const deleteProductFromCart = () => {
        // if (count === 1) {
        //     return
        // }
        // setCount(count - 1);
    }
    const addProductToCart = () => {
        if (count === 20) {
            return;
        }
        setItemsToLocalStorage((itemsToLocalStorage: IProduct[]) => {
            return itemsToLocalStorage?.map((storeItem: any) => {
                if (storeItem?.id === product.id) {
                    return {
                        ...storeItem,
                        count: Number(++count),
                        totalPrice: Number(count) * Number(product.price),
                    }
                }
                return storeItem;
            })
        })
    };
    console.log(count);
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
            <span className={classes.count_number}>{count}</span>
            {/*<span className={classes.icon_plus}>＋</span>*/}
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