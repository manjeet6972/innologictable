import React from 'react'
import { Layout,Breadcrumb } from 'antd';
import './index.css';

const { Header, Content } = Layout;
const MainComponent = () => {
	return (
		<Layout className="site-layout">
			<Header className="site-layout-background">

			</Header>
			<Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item style={{color: 'darkgreen'}}>Financial Overview</Breadcrumb.Item>
          
        </Breadcrumb>
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
		</Layout>
	)
}

export default MainComponent
