import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors'; // Виправлені шляхи імпорту

const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
