import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, ISignupData } from '../../types/types';

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
    // dispatch(
    //   loginSuccess({ username: data.username, password: data.password })
    // );
    localStorage.setItem(
      'creds',
      JSON.stringify({
        username: data.username,
        password: data.password,
        id: data.id,
      })
    );
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

    localStorage.setItem(
      'creds',
      JSON.stringify({
        username: data.username,
        id: data.id,
        email: data.email,
      })
    );
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
});

// export const { loginSuccess, logout } = authSlice.actions;

export const authReduces = authSlice.reducer;
