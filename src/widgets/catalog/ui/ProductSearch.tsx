import { Input } from 'antd';
import type { ChangeEvent } from 'react';
import '../model/ProductSearch.scss';

interface ProductPageType {
    searchValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProductSearch = ({
    searchValue,
    onChange,
}: ProductPageType) => (
    <>
        <Input
            placeholder="Поиск"
            className="search-input"
            value={searchValue}
            onChange={onChange}
        />
    </>
);

export default ProductSearch;
