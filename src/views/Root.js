import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Root.styles';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import UsersList from '../components/organisms/UsersList/UsersList';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

Root.propTypes = {};

export default Root;
