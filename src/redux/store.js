import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice'; // Додати фільтри

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer, // Додати фільтри
  },
});
