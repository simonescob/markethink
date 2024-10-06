import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import { configure } from '@storybook/react';
// import { addDecorator } from '@storybook/react';
// import { withKnobs } from '@storybook/addon-essentials';

// Configure your stories directory path (adjust if needed)
// const stories = require('./**/*.stories.mdx') || require('./**/*.stories.@(js|jsx|ts|tsx)');

// addDecorator(withKnobs);
// configure(stories, module);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
