import {Col, Card} from "antd";
import Image from "next/image";
import Link from "next/link";

interface ProductCardType {
    span: number;
    title: string;
    thumbnail: string;
    id: number;
}

export default function ProductCard({span, title, thumbnail, id}: ProductCardType) {
    return (
        <Col span={span}>
            <Link href={`/product/${id}`}>
                <Card
                    hoverable
                    cover={
                        <Image
                            src={thumbnail}
                            alt={title}
                            width={450}
                            height={450}
                        />
                    }
                    style={{textAlign: "center", minHeight: "400px"}}
                >

                    {title}
                </Card>
            </Link>
        </Col>
    );
}