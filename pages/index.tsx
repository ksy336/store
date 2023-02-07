import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";
import productsService from "@/api/products-service/products-service";
import Cards from "@/components/Cards/Cards";
import {IProduct} from "@/components/Cards/Cards-types";
import classes from "../styles/Home.module.scss";
import useLocalStorage from "@/customHooks/useLocalStorage";

type InitialProps = {
    products: IProduct[]
}
export default function Index({products}: InitialProps) {
     const [itemsToLocalStorage, setItemsToLocalStorage] = useLocalStorage("products", []);
     return (
        <div className={classes.wrapper}>
            <MainLayout itemsToLocalStorage={itemsToLocalStorage}>
                <Head>
                    <title>Online store</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/online-store.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                        rel="stylesheet" />

                </Head>
                {!products && <p>Loading...</p>}
                <Cards
                    itemsToLocalStorage={itemsToLocalStorage}
                    setItemsToLocalStorage={setItemsToLocalStorage}
                    products={products}

                />
            </MainLayout>
        </div>
    )
}
Index.getInitialProps = async () => {
    const products = await productsService.getAllProducts();
    return {products};
}