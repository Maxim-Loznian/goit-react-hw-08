// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
