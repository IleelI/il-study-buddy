import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from 'views/Root';
import { worker } from './mocks/browser';
import 'assets/styles/fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);

worker.start().then(() => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
});
