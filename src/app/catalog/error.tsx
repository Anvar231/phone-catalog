'use client';

import TextBox from '@/src/widgets/textBox/ui/TextBox';

interface ICatalogError {
    error: Error & { digest?: string };
}

const CatalogError = ({ error }: ICatalogError) => (
    <TextBox>
        Произошла ошибка при загрузке данных:{' '}
        {error.message}
    </TextBox>
);

export default CatalogError;
