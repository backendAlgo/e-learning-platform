import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
    AppstoreOutlined,
    UserAddOutlined,
    LoginOutlined,
} from "@ant-design/icons";
const { Item } = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("");
    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);
    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item
                key="/"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined />}
            >
                <Link href="/">
                    <a className="">App</a>
                </Link>
            </Item>
            <Item
                key="/login"
                onClick={(e) => setCurrent(e.key)}
                icon={<LoginOutlined />}
            >
                <Link href="/login">
                    <a className="">Login</a>
                </Link>
            </Item>
            <Item
                key="/register"
                onClick={(e) => setCurrent(e.key)}
                icon={<UserAddOutlined />}
            >
                <Link href="/register">
                    <a className="">Register</a>
                </Link>
            </Item>
        </Menu>
    );
};

export default TopNav;
