import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  CompassFilled,
  DollarCircleFilled,
  QuestionCircleOutlined,
  SettingFilled
} from '@ant-design/icons';
import MainComponent from '../MainComponent';

const {  Sider } = Layout;

class SideBar extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<CompassFilled />}></Menu.Item>
            <Menu.Item key="2" icon={<DollarCircleFilled />}></Menu.Item>
            <Menu.Item key="3" icon={<QuestionCircleOutlined />}></Menu.Item>
            <Menu.Item key="4" icon={<SettingFilled  />} style={{marginTop:'25rem'}} ></Menu.Item>
          </Menu>
        </Sider>
      <MainComponent />
      </Layout>
    );
  }
}

export default SideBar