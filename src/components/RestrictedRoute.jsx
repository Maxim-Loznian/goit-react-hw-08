import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? component : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
