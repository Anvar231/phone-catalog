import axios, { AxiosError } from 'axios';
import type { IProductsResponse } from '@/src/entities/product/model/types';

const API_URL = 'https://dummyjson.com';

const clientApi = axios.create({
    baseURL: API_URL,
});

export async function getProducts() {
    try {
        const { data } =
            await clientApi.get<IProductsResponse>(
                '/products/category/smartphones'
            );

        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                `Не удалось загрузить данные: ${error.status}`
            );
        }

        throw error;
    }
}

export async function getProductById(id: number) {
    const response = await getProducts();
    const product = response.products.find(
        (item) => item.id === id
    );

    if (!product) {
        throw new Error('Товар не найден');
    }

    return product;
}
