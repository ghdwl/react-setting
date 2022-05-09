import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
// import './styles/reset.scss';
// import './styles/common.scss';

// import GlobalStyle from './styles/GlobalStyle';
// import { ThemeProvider } from 'styled-components';
// import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GlobalStyle />
    <ThemeProvider theme={theme} /> */}
    <Router />
  </React.StrictMode>
);

reportWebVitals();
