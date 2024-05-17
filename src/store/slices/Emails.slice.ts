import { createSlice } from '@reduxjs/toolkit';
import { IEmailsData } from '../../types/types';
import { getEmails } from '../api/api';

interface AuthState {
  emails: IEmailsData;
  loading: boolean;
  error: string | null;
}

const initAuthData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const initialState: AuthState = {
  emails: initAuthData,
  loading: false,
  error: null,
};

export const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.emails = action.payload;
    });
    builder.addCase(getEmails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});

export const emailReduces = emailSlice.reducer;
