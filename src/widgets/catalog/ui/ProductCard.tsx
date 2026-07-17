import Image from 'next/image';
import Link from 'next/link';
import type { IProduct } from '@/src/entities/product';
import '../model/ProductCard.scss';
import { StarFilled } from '@ant-design/icons';

interface ProductCardType {
    product: IProduct;
}

const ProductCard = ({ product }: ProductCardType) => (
    <div className="product-card_wrapper">
        <Link href={`/product/${product.id}`}>
            <div className="product-card">
                <div className="product-card_image-wrapper">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                    />
                </div>

                <div className="product-card_wrapper">
                    <div className="product-card_title-price-wrapper">
                        <h3 className="product-card_title">
                            {product.title}
                        </h3>
                        <div className="product-card_price">
                            {product.price}$
                        </div>
                    </div>

                    <div>
                        {product.rating}
                        <StarFilled />
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

export default ProductCard;
