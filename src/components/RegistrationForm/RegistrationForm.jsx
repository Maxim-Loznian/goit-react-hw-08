// src/components/RegistrationForm/RegistrationForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(credentials));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
