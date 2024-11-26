import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.js';
import { Provider } from 'react-redux';
import { configureStore } from './services/store.js';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#root'));
const store = configureStore();

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
