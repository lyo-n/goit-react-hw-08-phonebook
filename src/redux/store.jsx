import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './contacts/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducersAuth from './auth/reducers';


const authConf = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    contacts: reducers,
    auth: persistReducer(authConf, reducersAuth),
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);