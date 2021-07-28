import React from 'react'
import { Layout } from 'antd';
import './index.css';

const { Header, Content } = Layout;
const MainComponent = () => {
	return (
		<Layout className="site-layout">
			<Header className="site-layout-background">

			</Header>
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
