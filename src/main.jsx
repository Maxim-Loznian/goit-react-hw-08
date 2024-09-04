import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { fetchCurrentUser } from './redux/auth/operations';
import './index.css';

// Отримання кореня для рендерингу
const root = ReactDOM.createRoot(document.getElementById('root'));

// Ініціалізувати дані про користувача
store.dispatch(fetchCurrentUser());

// Рендеринг компонентів
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
