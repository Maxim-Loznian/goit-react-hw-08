import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './operations';
import { clearContacts } from '../contacts/slice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); // Зберегти токен
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token); // Зберегти токен
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token); // Зберегти токен
      })
      .addCase(logOut.fulfilled, (state, { dispatch }) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
        localStorage.removeItem('token'); // Видалити токен
        dispatch(clearContacts()); // Очистити контакти при виході
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = localStorage.getItem('token'); // Отримати токен з localStorage
      });
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
