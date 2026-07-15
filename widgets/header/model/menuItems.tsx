import Link from "next/link"

export const items = [
    {
        key: "/",
        label: <Link href="/">Главная</Link>
    },
    {
        key: "/catalog",
        label: <Link href="/catalog">Каталог</Link>
    },
    {
        key: "/profile",
        label: <Link href="/profile">Профиль</Link>
    }
]