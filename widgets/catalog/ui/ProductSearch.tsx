import {Input} from "antd";
import {ChangeEvent} from "react";

interface ProductPageType {
    searchValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductSearch({searchValue, onChange}: ProductPageType) {


    return (
        <>
            <Input
                placeholder="Поиск"
                style={{marginBottom: "20px"}}
                value={searchValue}
                onChange={onChange}
            />
        </>
    );
}