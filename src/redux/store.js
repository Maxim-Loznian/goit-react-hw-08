import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  auth: persistReducer(persistConfig, authReducer),
  contacts: contactsReducer,
  filters: filtersReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
