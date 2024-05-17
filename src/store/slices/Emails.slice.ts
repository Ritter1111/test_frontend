import { createSlice } from '@reduxjs/toolkit';
import { IEmailsData } from '../../types/types';
import { getEmails } from '../api/api';

interface AuthState {
  emails: IEmailsData;
}

const initAuthData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const initialState: AuthState = {
  emails: initAuthData,
};

export const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.emails = action.payload;
    });
  },
});

export const emailReduces = emailSlice.reducer;
