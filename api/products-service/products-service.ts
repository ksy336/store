import axios from "axios";
import {IProduct} from "@/components/Cards/Cards-types";
const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

class ProductsService {
    async getAllProducts(): Promise<IProduct[]> {
        const response = await axios.get(`${BASE_URL}/products`);
        try {
            const data = await response.data;
            return data
        } catch(e) {
            console.warn(e);
            throw new Error();
        }
    }
    async getSingleProduct(id: any): Promise<IProduct> {
        const response = await axios.get(`${BASE_URL}products/${id}`);
        try {
            const data = await response.data;
            return data
        } catch(e) {
            console.warn(e);
            throw new Error();
        }
    }
}
const productsService = new ProductsService();
export default productsService;