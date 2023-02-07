import Router from "next/router";
import classes from "../../styles/shopping-cart.module.scss"
export default function ShoppingCart() {
    const goLinkHome = () => {
        Router.push('/')
    }
    return (
        <div className={classes.wrapper}>
            <h1>Shopping-Cart page</h1>
            <button onClick={goLinkHome}>Back home</button>
        </div>
    )
}