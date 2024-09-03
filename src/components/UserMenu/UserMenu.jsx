import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    isLoggedIn && (
      <div>
        <p>Welcome, {user.name}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  );
};

export default UserMenu;
