'use client';

import { Menu } from 'antd';
import { items } from '@/src/widgets/header/model/menuItems';
import { usePathname } from 'next/navigation';
import '../model/Header.scss';

export const Header = () => {
    const path = usePathname();

    return (
        <header
            className="header"
        >
            <Menu
                className="header-menu"
                mode="horizontal"
                selectedKeys={[path]}
                items={items}
            />
        </header>
    );
};
