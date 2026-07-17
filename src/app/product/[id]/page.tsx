import { Product } from '@/src/widgets/product';
import { getProductById } from '../../../shared/api/api';

interface PageType {
    params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: PageType) => {
    const { id } = await params;
    const product = await getProductById(Number(id));

    return <Product product={product} />;
};

export default ProductPage;
