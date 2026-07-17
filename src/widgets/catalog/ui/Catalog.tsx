'use client';

import { Pagination } from 'antd';
import ProductCard from '@/src/widgets/catalog/ui/ProductCard';
import ProductSearch from '@/src/widgets/catalog/ui/ProductSearch';
import { type ChangeEvent, useState } from 'react';
import { sortProducts } from '@/src/widgets/catalog/model/sortProducts';
import type { IProductsResponse } from '../../../entities/product/model/types';
import {
    CURRENT_PAGE,
    PAGE_SIZE,
} from '@/src/shared/constants';
import '../model/Catalog.scss';
import TextBox from '@/src/widgets/textBox/ui/TextBox';

interface ICatalog {
    phones: IProductsResponse;
}

export const Catalog = ({ phones }: ICatalog) => {
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] =
        useState(CURRENT_PAGE);

    const { pageFiltered, length } = sortProducts(
        phones.products,
        searchValue,
        currentPage,
        PAGE_SIZE
    );

    function handleChange(
        e: ChangeEvent<HTMLInputElement>
    ) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="catalog-wrapper">
            <ProductSearch
                searchValue={searchValue}
                onChange={handleChange}
            />

            {pageFiltered.length > 0 ? (
                <div className="products">
                    {pageFiltered.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <TextBox>Товаров нет</TextBox>
            )}

            {length / PAGE_SIZE > 1 ? (
                <Pagination
                    className="catalog_pagination"
                    current={currentPage}
                    pageSize={PAGE_SIZE}
                    total={length}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                />
            ) : null}
        </div>
    );
};
