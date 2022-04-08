import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Navigate, Routes, Route, Outlet } from 'react-router-dom';
import GlobalStyle from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          {/*
             Main route element that acts as parent of all router
            and provides react router params to all components nested inside
         */}
          <Route
            element={
              <>
                <MainTemplate>
                  <Wrapper>
                    <Outlet />
                  </Wrapper>
                </MainTemplate>
              </>
            }
          >
            <Route path="/" element={<Navigate replace to="/group" />} />
            <Route path="/group">
              <Route path=":id" element={<Dashboard />} />
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="/add-user" element={<AddUser />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
