import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, userData);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await axios.post(`${BASE_URL}/users/login`, userData);
  return response.data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post(`${BASE_URL}/users/logout`);
});

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }
  
  const response = await axios.get(`${BASE_URL}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
