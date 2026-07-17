'use client';

import { ShoppingCartOutlined } from '@ant-design/icons';
import {
    Button,
    Carousel,
    Col,
    Descriptions,
    Rate,
    Row,
    Space,
    Tag,
    Typography,
} from 'antd';
import Image from 'next/image';
import type { IProduct } from '../../../entities/product';
import '../model/Product.scss';

const { Title, Paragraph, Text } = Typography;

interface ProductType {
    product: IProduct;
}

export const Product = ({ product }: ProductType) => (
    <Row
        className="product-page"
        gutter={[32, 32]}
        align="top"
    >
        <Col xs={24} lg={10}>
            <div className="product-page_gallery">
                <Carousel
                    arrows
                    dots
                    className="product-page_carousel"
                >
                    {product.images.map((img) => (
                        <div key={img}>
                            <div className="product-page_slide">
                                <Image
                                    src={img}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="product-page_image"
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </Col>

        <Col xs={24} lg={14}>
            <section className="product-page_info">
                <Space
                    orientation="vertical"
                    size="large"
                    className="product-page_content"
                >
                    <div>
                        <Title
                            level={1}
                            className="product-page_title"
                        >
                            {product.title}
                        </Title>

                        <Space wrap>
                            <Tag className="product-page_tag">
                                {product.brand}
                            </Tag>
                            <Tag className="product-page_tag">
                                {product.category}
                            </Tag>
                            <Tag
                                className="product-page_tag"
                                color={
                                    product.stock > 0
                                        ? 'success'
                                        : 'error'
                                }
                            >
                                {product.availabilityStatus}
                            </Tag>
                        </Space>
                    </div>

                    <div className="product-page_price-rating">
                        <Title
                            level={2}
                            className="product-page_price"
                        >
                            ${product.price}
                        </Title>

                        <Space align="center">
                            <Rate
                                disabled
                                allowHalf
                                value={product.rating}
                                className="product-page_rate"
                            />
                            <Text className="product-page_rating">
                                {product.rating}
                            </Text>
                        </Space>
                    </div>

                    <Paragraph className="product-page_description">
                        {product.description}
                    </Paragraph>

                    <Descriptions
                        column={1}
                        bordered
                        size="small"
                        className="product-page_descriptions"
                    >
                        <Descriptions.Item label="SKU">
                            {product.sku}
                        </Descriptions.Item>
                        <Descriptions.Item label="Warranty">
                            {product.warrantyInformation}
                        </Descriptions.Item>
                        <Descriptions.Item label="Shipping">
                            {product.shippingInformation}
                        </Descriptions.Item>
                        <Descriptions.Item label="Return policy">
                            {product.returnPolicy}
                        </Descriptions.Item>
                        <Descriptions.Item label="Stock">
                            {product.stock}
                        </Descriptions.Item>
                    </Descriptions>

                    <Button
                        type="primary"
                        size="large"
                        icon={<ShoppingCartOutlined />}
                        className="product-page_button"
                    >
                        {
                            '\u041a\u0443\u043f\u0438\u0442\u044c'
                        }
                    </Button>
                </Space>
            </section>
        </Col>
    </Row>
);
