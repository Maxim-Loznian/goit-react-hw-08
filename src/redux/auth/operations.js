// src/redux/auth/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global/users'; // Вірний URL для вашого API

// Register new user
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Error occurred');
    }
  }
);

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'Error occurred');
    }
  }
);

// Logout user
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem('token');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Refresh user
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.get(`${BASE_URL}/current`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
