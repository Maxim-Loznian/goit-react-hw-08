// src/redux/contacts/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

// Отримати всі контакти
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.get(`${BASE_URL}/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Повертає масив контактів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Додати новий контакт
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contactData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Повертає новий контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Видалити контакт
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return contactId; // Повертає ID видаленого контакту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Оновити контакт
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, contactData }, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.patch(`${BASE_URL}/contacts/${contactId}`, contactData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Повертає оновлений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
