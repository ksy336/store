import classes from "./ButtonInCart.module.scss";
import {ReactNode} from "react";

interface Props {
    children?: ReactNode;
    onClick: () => void;
    type: any;
}
export default function ButtonInCart(props: Props) {
    return (
        <button onClick={props.onClick} type={props.type || "button"} className={classes.button_inCart}>{props.children}</button>
    )
}