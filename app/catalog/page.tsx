import {Catalog} from "@/widgets/catalog";
import {getProducts} from "../../shared/api/api";

export default async function Page() {
    const phones = await getProducts();

    return (
        <>
            <Catalog phones={phones}/>
        </>
    );
}