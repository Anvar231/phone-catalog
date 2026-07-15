import {Product} from "@/widgets/product";
import {Carousel, Flex} from "antd";

interface PageType {
    params: Promise<{id: string}>;
}

export default async function Page({params}: PageType) {
    const {id} = await params;

    return (
        <Product id={id} />
    );
}