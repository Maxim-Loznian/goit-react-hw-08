import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Конфігурація персистенції
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'], // Персистити тільки масив контактів
};

// Обгортання редюсерів у персистенційний редюсер
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Вимкнути перевірку серіалізації для редюсера контакту
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['contacts'],
      },
    }),
});

export const persistor = persistStore(store);
