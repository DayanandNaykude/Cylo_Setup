import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
// import AppFooter from '@cylo/ami-portal/components/layout/AppFooter';
import AppFooter from './AppFooter';
import { Footer, Header } from 'antd/es/layout/layout';

import './layout.scss';
import React from 'react';

const { Content } = Layout;

const MainLayout = ({ children }: { children?: any }) => {
  return (
    <Layout className="cylo-app-layout">
      <Header>
        <AppHeader></AppHeader>
      </Header>
      <Content>
        <div className="cylo-main-content-wrapper width-full">
          <Outlet />
          {children}
        </div>
      </Content>
      <Footer>
        <AppFooter></AppFooter>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
