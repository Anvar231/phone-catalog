interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface IDimensions {
    width: number;
    height: number;
    depth: number;
}

interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

type Tags =
    | 'smartphones'
    | 'apple'
    | 'oppo'
    | 'realme'
    | 'samsung galaxy'
    | 'vivo';
type ImageURL = string;

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: Tags[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: ImageURL[];
    thumbnail: string;
}

export interface IProductsResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}
