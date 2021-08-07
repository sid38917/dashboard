import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Layout, Menu, Image } from 'antd';
import {
HomeOutlined,
MenuUnfoldOutlined,
MenuFoldOutlined,
UserOutlined,
VideoCameraOutlined,
UploadOutlined,
} from '@ant-design/icons';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Login from './login'
import Register from './register'
import Home from './home'
import CustomPage from './Custom'
const { Header, Content, Footer } = Layout;
const MainPage = () => {
const history = useHistory();
const [collapsed, setCollapsed] = useState(false)
function toggle() { 
setCollapsed(!collapsed)
}
return (
<Layout style={{ minHeight: '100vh' }}>
<Header className="header">
<div className="logo" >
    <Image src={"https://i.ibb.co/GCgpW7V/logo.png"} height={50}/>
    </div>
<Menu mode="horizontal" defaultSelectedKeys={['1']} className="menu">
<Menu.Item key="1" icon={<HomeOutlined />}>
<Link to="/">
Home
</Link>
</Menu.Item>
<Menu.Item key="2" >
FAQ
</Menu.Item>
<Menu.Item key="3" >
About Us
</Menu.Item>
<Menu.Item key="4" >
<Link to="/login">
Login
</Link>
</Menu.Item>
</Menu>
</Header>
<Content
className="site-layout-background"
style={{
// margin: '24px 16px',
// padding: 24,
// minHeight: 280,
}}
>
<Switch>
<Route path="/login">
<Login />
</Route>
<Route path="/register">
<Register />
</Route>

<Route path="/custom/:product">
<CustomPage />
</Route>
<Route path = "/">
<Home />
</Route>
</Switch>
</Content>
<Footer className="footer">ini footer</Footer>
</Layout >
)
}
export default MainPage
