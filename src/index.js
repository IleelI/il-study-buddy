import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from 'views/Root';
import { worker } from './mocks/browser';
import 'assets/styles/fonts.css';

worker.start();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
