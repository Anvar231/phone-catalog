"use client"

interface ICatalogError {
    error: Error & {digest?: string}
}

export default function CatalogError({error}: ICatalogError) {
    return (
        <h1>Произошла ошибка при загрузке данных: {error.message}</h1>
    );
}