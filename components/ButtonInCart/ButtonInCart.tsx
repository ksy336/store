import classes from "./ButtonInCart.module.scss";
import {ReactNode} from "react";
import CountProducts from "@/components/CountProducts/CountProducts";
import {IProduct} from "@/components/Cards/Cards-types";

interface Props {
    children?: ReactNode;
    onClick?: () => void;
    type?: any;
    setItemsToLocalStorage: () => {};
    itemsToLocalStorage: IProduct[];
    product: IProduct;
}
export default function ButtonInCart({children, setItemsToLocalStorage, itemsToLocalStorage, product}: Props) {
    return (
        <>
            <button className={classes.button_inCart}>{children}</button>
            <CountProducts product={product} itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />
        </>
    )
}