import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from './services/store';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
const store = configureStore();

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);