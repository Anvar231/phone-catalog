import { typedPhones } from "../../../entities/product"

export function getProductById(id: number) {
    const result = typedPhones.products.find(item => item.id === id);

    return result;
}