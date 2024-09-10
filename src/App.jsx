import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import styles from './App.module.css'; // Імпортуйте стилі

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Поки йде процес оновлення, можна відобразити завантаження або нічого не показувати
  if (isRefreshing) {
    return <div>Loading...</div>; // Можете замінити це на компонент завантаження
  }

  return (
    <div className={styles.appContainer}>
      <Layout>
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
};

export default App;
