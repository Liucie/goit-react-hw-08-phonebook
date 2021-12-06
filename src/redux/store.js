import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

// const rootReducer = combineReducers({
//     auth: authPersistReducer,
//     contacts: contactsReducer,
// })

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
