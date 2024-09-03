import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './operations';

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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, (state, { dispatch }) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
        dispatch(clearContacts()); // Clear contacts when logging out
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = localStorage.getItem('token');
      });
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
