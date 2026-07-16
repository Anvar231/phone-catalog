import axios from "axios";
import type {IProductsResponse} from "@/entities/product/model/types";

const API_URL = "https://dummyjson.com";

const clientApi = axios.create({
    baseURL: API_URL,
})

export async function getProducts() {
    const response = await clientApi.get<IProductsResponse>("/products/category/smartphones");

    return response.data;
}

export async function getProductById(id: number) {
    const response = await getProducts();
    const product = response.products.find(item => item.id === id);

    if (!product) {
        throw new Error("Товар не найден");
    }

    return product;
}