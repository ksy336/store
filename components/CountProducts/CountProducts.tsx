import Image from "next/image";
import classes from "./CountProducts.module.scss";
import plus from "../../public/+.svg";
import minus from "../../public/-.svg";

export default function CountProducts() {
    const deleteProductFromCart = () => {

    }
    const addProductToCart = () => {

    }
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
            <span className={classes.count_number}>1</span>
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