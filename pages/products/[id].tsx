import {useRouter} from "next/router";
import productsService from "@/api/products-service/products-service";
import {useEffect, useState} from "react";


export default function Product()  {
    const [post, setPost] = useState();
    const router = useRouter();
    useEffect(() => {
        getSingleCart();
    })
    const getSingleCart = async () => {
        const data = await productsService.getSingleProduct(router.query.id);
        // setPost(data);
    }
    return (
        <>
            {!post && <p>Loading...</p>}
            <div>{post}</div>
        </>
    )
}
Product.getInitialProps = async ({query}: any) => {
    const response = await productsService.getSingleProduct(query.id);
    return response;
}