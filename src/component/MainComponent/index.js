import React from 'react'
import { Layout, Breadcrumb, Typography, Select, Tabs } from 'antd';
import './index.css';
import TabContent from '../TabContent';
import CardComponent from '../CardComponent';

const { Header } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;


const MainComponent = () => {

	function callback(key) {
		console.log(key);
	}
	return (
		<Layout className="site-layout">
			<Header className="site-layout-background">
				<Select className="dropdown-menu" defaultValue="Select a Department"></Select>
				<Title level={5} className="en">EN</Title>
			</Header>
			<Breadcrumb className="breadcrumb">
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item style={{ color: 'darkgreen' }}>Financial Overview</Breadcrumb.Item>
			</Breadcrumb>
			<Title level={4} className="sheet">Sheet 1</Title>

			<CardComponent />
			
			<Select className="dropdown-menu a" defaultValue="Custom Date Range"></Select>

			<Tabs defaultActiveKey="1" onChange={callback} className="tabs">
				<TabPane tab="Report 1" key="1">	<TabContent /></TabPane>
				<TabPane tab="Report 2" key="2"><TabContent />	</TabPane>
			</Tabs>
		</Layout>
	)
}

export default MainComponent
