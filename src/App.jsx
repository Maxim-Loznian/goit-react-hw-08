// src/App.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsLoggedIn } from './redux/auth/selectors';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        {isLoggedIn ? (
          <button className={styles.navButton} onClick={() => {/* Додайте функцію для виходу */}}>Log Out</button>
        ) : (
          <>
            <button className={styles.navButton} onClick={() => setShowLogin(true)}>Log In</button>
            <button className={styles.navButton} onClick={() => setShowLogin(false)}>Register</button>
          </>
        )}
      </header>
      <main className={styles.mainContent}>
        <h1>My Application</h1>
        {isLoggedIn ? (
          <p>Welcome back!</p>
        ) : (
          showLogin ? <LoginForm /> : <RegistrationForm />
        )}
      </main>
    </div>
  );
};

export default App;
