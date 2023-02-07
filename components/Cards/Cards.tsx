import Card from "@/components/Card/Card";
import Image from "next/image";
import {IProduct} from "@/components/Cards/Cards-types";
import classes from "./Cards.module.scss";
import arrow from  "../../public/arrow.svg";
import photo from "../../public/banner 1.png";
import banner from "../../public/banner 2.png";

type InitialProps = {
    products: IProduct[]
}
export default function Cards({products}: InitialProps) {
    return (
        <>
            {/*<article className={classes.first_article}>*/}
            {/*    <div className={classes.work_text}>Всё для комфортной работы</div>*/}
            {/*        <Image*/}
            {/*            width="40"*/}
            {/*            height="16"*/}
            {/*            alt="it is an arrow image"*/}
            {/*            src={arrow}*/}
            {/*        />*/}
            {/*    <div className={classes.banner}>*/}
            {/*        <Image*/}
            {/*            width="332"*/}
            {/*            height="140"*/}
            {/*            alt="it is an banner image"*/}
            {/*            src={photo}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*        <Image*/}
            {/*            width="332"*/}
            {/*            height="140"*/}
            {/*            alt="it is an banner second image"*/}
            {/*            src={banner}*/}
            {/*        />*/}
            {/*</article>*/}
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
                        />
                    </div>
                    <div>
                        <Image
                            width="332"
                            height="140"
                            alt="it is an banner second image"
                            src={banner}
                        />
                    </div>
                </article>
                {products?.map((product: IProduct) => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}