import { typedPhones } from "../../../entities/product";
import type {Product} from "@/entities/product/";

const products = typedPhones.products;

interface sortProductsReturnType {
    pageFiltered: Product[];
    length: number;
}

export function sortProducts(string: string, currentPage: number, pageSize: number): sortProductsReturnType {
    const searchString = string.toLowerCase();
    const nameFiltered = products.filter(product => product.title.toLowerCase().includes(searchString));

    const end = currentPage * pageSize;
    const start = end - pageSize;
    const pageFiltered = nameFiltered.slice(start, end);

    return {
        pageFiltered,
        length: nameFiltered.length,
    };
}