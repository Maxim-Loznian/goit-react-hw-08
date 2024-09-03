import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://your-api-url.com/api';

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await axios.post(`${BASE_URL}/login`, userData);
  return response.data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post(`${BASE_URL}/logout`);
});

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
  const response = await axios.get(`${BASE_URL}/current`);
  return response.data;
});
