import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from 'views/Root';
import { worker } from './mocks/browser';
import 'assets/styles/fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);

if (process.env.NODE_ENV === 'development') {
  worker.start().then(() => {
    root.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    );
  });
} else {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}
