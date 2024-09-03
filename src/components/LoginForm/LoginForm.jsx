// src/components/LoginForm/LoginForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
