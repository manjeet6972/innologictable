import React from 'react'
import { Layout, Breadcrumb,Typography } from 'antd';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const MainComponent = () => {

	return (
		<Layout className="site-layout">
			<Header className="site-layout-background">
				<select className="dropdown-menu">
					<option value="department">Select a Department</option>
				</select>
				<Title level={5} className="en">EN</Title>
			</Header>
			<Breadcrumb className="breadcrumb">
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item style={{ color: 'darkgreen' }}>Financial Overview</Breadcrumb.Item>
			</Breadcrumb>
			<Title level={4} className="sheet">Sheet 1</Title>
			<Content
				className="site-layout-background"
				style={{
					margin: '24px 16px',
					padding: 24,
					minHeight: 280,
				}}
			>
				Content
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
	)
}

export default MainComponent
