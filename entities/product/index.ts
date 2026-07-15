import phones from "./model/smartphones.json";
import type {ProductsResponse, Product} from "./model/types";

export const typedPhones: ProductsResponse = phones;
export type {Product};