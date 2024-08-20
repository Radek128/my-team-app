import { combineReducers } from 'redux';
import { teamReducer } from './teamReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  team: teamReducer
})

export const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};
