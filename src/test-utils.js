import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

export { customRender as render };
