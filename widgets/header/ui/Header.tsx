"use client"

import {Header as AntHeader} from "antd/es/layout/layout";
import {Menu} from "antd";
import {items} from "@/widgets/header/model/menuItems";
import {usePathname} from "next/navigation";

export function Header() {
    const path = usePathname();

    return (
        <AntHeader style={{ height: 50, lineHeight: '50px' }}>
            <Menu
                mode="horizontal"
                selectedKeys={[path]}
                items={items}
            />
        </AntHeader>
    );
}