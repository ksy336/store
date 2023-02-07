import classes from "./ButtonToCart.module.scss";
import {ReactNode} from "react";

interface Props {
    children?: ReactNode;
    onClick: () => void;
    type: any;
}
export default function ButtonToCart(props: Props) {
    return (
        <button onClick={props.onClick} type={props.type || "button"} className={classes.button_toCart}>{props.children}</button>

    )
}
