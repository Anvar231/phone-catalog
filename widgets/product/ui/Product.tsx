"use client"

import {Carousel, Row, Col, Space, Button, Descriptions, Rate, Tag, Typography} from "antd";
import Image from "next/image";
import type {IProduct} from "../../../entities/product";

const { Title, Paragraph, Text } = Typography;

interface ProductType {
    product: IProduct;
}

export function Product({product}: ProductType) {
    return (
        <Row>
            <Col span={6}>
                <Carousel arrows style={{paddingBottom: 20}}>
                    {
                        product?.images.map((img) => (
                            <Image
                            key={img}
                            src={img}
                            alt={product.title}
                            width={500}
                            height={500}
                            />
                        ))
                    }
                </Carousel>
            </Col>
            <Col>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <div>
                        <Title level={2}>{product.title}</Title>

                        <Space>
                            <Tag color="blue">{product.brand}</Tag>
                            <Tag>{product.category}</Tag>
                            <Tag color={product.stock > 0 ? 'green' : 'red'}>
                                {product.availabilityStatus}
                            </Tag>
                        </Space>
                    </div>

                    <Space align="center">
                        <Rate disabled allowHalf value={product.rating} />
                        <Text>{product.rating}</Text>
                    </Space>

                    <Title level={3}>${product.price}</Title>

                    <Paragraph>
                        {product.description}
                    </Paragraph>

                    <Descriptions column={1} bordered size="small">
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

                    <Button type="primary" size="large">
                        Купить
                    </Button>
                </Space>
            </Col>
        </Row>
    );
}