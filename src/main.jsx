import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { fetchCurrentUser } from './redux/auth/operations';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchCurrentUser());

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
