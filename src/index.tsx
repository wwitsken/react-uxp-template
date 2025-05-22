import { createRoot } from 'react-dom/client';
import React from 'react';
import { entrypoints } from 'uxp';
import Panel1 from './panels/Panel1';

entrypoints.setup({
  plugin: {
    create() {
      return new Promise<void>((resolve) => {
        console.log('created');
        resolve();
      });
    },
    destroy() {
      return new Promise<void>((resolve) => {
        console.log('destroyed');
        resolve();
      });
    },
  },
  panels: {
    panel1: {
      show() {
        return new Promise<void>((resolve) => {
          console.log('showed panel 1');
          const container = document.getElementById('root');
          const root = createRoot(container);
          root.render(<Panel1 />);
          resolve();
        });
      },
      hide() {
        return new Promise<void>((resolve) => {
          console.log('hidden');
          resolve();
        });
      },
      destroy() {
        return new Promise<void>((resolve) => {
          console.log('destroyed');
          resolve();
        });
      },
    },
  },
});
