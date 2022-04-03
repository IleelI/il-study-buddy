import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import GlobalStyle from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UsersProvider from 'providers/UsersProvider';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
              <Outlet />
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
