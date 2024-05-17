import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReduces } from './slices/Auth.slice';
import { emailReduces } from './slices/Emails.slice';

const rootReducer = combineReducers({
  auth: authReduces,
  email: emailReduces,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
