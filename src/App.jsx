import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
      </Routes>
    </Layout>
  );
};

export default App;
