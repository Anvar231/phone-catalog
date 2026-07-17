import { Catalog } from '@/src/widgets/catalog';
import { getProducts } from '../../shared/api/api';

const CatalogPage = async () => {
    const phones = await getProducts();

    return (
        <>
            <Catalog phones={phones} />
        </>
    );
};

export default CatalogPage;
