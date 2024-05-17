import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAuthData,
  ICreateEmailData,
  ILoginData,
  ISignupData,
} from '../../types/types';
import { getCreds } from '../../utils/localStorage';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: ILoginData) => {
    const response = await fetch(`api/users/current`, {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
      },
    });
    const data = await response.json();

    return data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password, email }: ISignupData) => {
    const response = await fetch(`api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const createEmail = createAsyncThunk(
  'email/create',
  async ({ sender, recipient, subject, message }: ICreateEmailData) => {
    const response = await fetch(`api/emails/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' + btoa(`${getCreds().username}:${getCreds().password}`),
      },
      body: JSON.stringify({
        sender,
        recipient,
        subject,
        message,
      }),
    });
    const data = await response.json();
    return data;
  }
);

interface AuthState {
  user: IAuthData;
}

const initAuthData = {
  username: '',
  email: '',
  id: 0,
};

const initialState: AuthState = {
  user: initAuthData,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const authReduces = authSlice.reducer;
