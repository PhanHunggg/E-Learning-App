import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  DESKTOP,
  IPHONE6PLUS,
  IPAD_PRO,
  MOBILE,
  TABLET,
} from "../../constants";
import { withViewport } from "../../HOCs/withViewport";
import "./AdminLayout.scss";

interface Props {
  device: any;
}

function AdminLayout(props: Props): JSX.Element {
  const { Content, Sider } = Layout;

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Người Dùng", "/admin/user-management", <UserOutlined />),
    getItem("Khóa Học", "/admin/learning-management", <CalendarOutlined />),
  ];

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  console.log(props.device);

  return (
    <Layout
      className={`layoutMain ${props.device === TABLET && "tablet"} ${
        props.device === IPHONE6PLUS && "iphone6plus"
      } ${props.device === MOBILE && "mobile"} ${
        props.device === IPAD_PRO && "laptop"
      } ${props.device === DESKTOP && "desktop"}`}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          onClick={(items) => navigate(items.key)}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withViewport(AdminLayout);
