import { createSlice } from '@reduxjs/toolkit';
import { IAuthData } from '../../types/types';
import { login } from '../api/api';

interface AuthState {
  user: IAuthData;
  loading: boolean;
}

const initAuthData = {
  username: '',
  email: '',
  id: 0,
};

const initialState: AuthState = {
  user: initAuthData,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
  },
});

export const authReduces = authSlice.reducer;
