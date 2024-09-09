import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Зберігайте лише auth
};

const rootReducer = {
  auth: persistReducer(persistConfig, authReducer),
  contacts: contactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/register/fulfilled',
          'auth/login/fulfilled',
          'auth/logOut/fulfilled',
          'auth/refreshUser/fulfilled',
        ],
        ignoredPaths: ['auth.token'], // Додайте інші шляхи, якщо потрібно
      },
    }),
});

export const persistor = persistStore(store);
