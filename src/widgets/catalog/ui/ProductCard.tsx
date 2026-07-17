import { Col, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import type { IProduct } from '@/src/entities/product';
import '../model/ProductCard.scss';
import { StarFilled } from '@ant-design/icons';

interface ProductCardType {
    span: number;
    product: IProduct;
}

const ProductCard = ({
    span,
    product,
}: ProductCardType) => (
    <Col span={span}>
        <Link href={`/product/${product.id}`}>
            <Card
                className="product-card"
                hoverable
                cover={
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={450}
                        height={450}
                    />
                }
            >
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
            </Card>
        </Link>
    </Col>
);

export default ProductCard;
