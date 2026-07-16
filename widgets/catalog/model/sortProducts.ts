import type {IProduct} from "@/entities/product/";


interface sortProductsReturnType {
    pageFiltered: IProduct[];
    length: number;
}

export function sortProducts(products: IProduct[], string: string, currentPage: number, pageSize: number): sortProductsReturnType {
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