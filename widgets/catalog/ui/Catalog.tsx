"use client"

import {Row, Pagination, Flex} from "antd";
import ProductCard from "@/widgets/catalog/ui/ProductCard";
import ProductSearch from "@/widgets/catalog/ui/ProductSearch";
import {type ChangeEvent, useState} from "react";
import {sortProducts} from "@/widgets/catalog/model/sortProducts";

const SPAN = 6;
const PAGE_SIZE = 8;

export function Catalog() {
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const {pageFiltered, length} = sortProducts(searchValue, currentPage, PAGE_SIZE);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <ProductSearch
                searchValue={searchValue}
                onChange={handleChange}
            />
            <Row gutter={[16, 16]}>
                {
                    pageFiltered.map(product => (
                        <ProductCard
                            key={product.id}
                            span={SPAN}
                            title={product.title}
                            thumbnail={product.thumbnail}
                            id={product.id}
                        />
                    ))
                }
            </Row>

            <Flex
                justify="center"
                style={{marginTop: 24}}
            >
                <Pagination
                    current={currentPage}
                    pageSize={PAGE_SIZE}
                    total={length}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                />
            </Flex>
        </>
    );
}