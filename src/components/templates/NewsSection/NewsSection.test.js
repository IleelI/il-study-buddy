import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import NewsSection, { query } from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });
  it('It displays error when articles are not loaded correctly.', async () => {
    mock.onPost('/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });
  it('It displays articles.', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
