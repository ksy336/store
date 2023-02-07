import classes from "./ButtonInCart.module.scss";
import {ReactNode} from "react";
import CountProducts from "@/components/CountProducts/CountProducts";

interface Props {
    children?: ReactNode;
    onClick: () => void;
    type: any;
    setItemsToLocalStorage: () => {}
}
export default function ButtonInCart(props: Props, {setItemsToLocalStorage}: any) {
    return (
        <>
            <button onClick={props.onClick} type={props.type || "button"} className={classes.button_inCart}>{props.children}</button>
            <CountProducts setItemsToLocalStorage={setItemsToLocalStorage} />
        </>
    )
}