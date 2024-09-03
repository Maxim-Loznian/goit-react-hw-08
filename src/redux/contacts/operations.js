import axios from '../../api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    const response = await axios.get('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    const response = await axios.post('/contacts', contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    await axios.delete(`/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk('contacts/update', async ({ contactId, contact }, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    const response = await axios.patch(`/contacts/${contactId}`, contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
