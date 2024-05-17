import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateEmailData, ILoginData, ISignupData } from '../../types/types';
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

export const getEmails = createAsyncThunk('email/get', async () => {
  const response = await fetch(`api/emails/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' + btoa(`${getCreds().username}:${getCreds().password}`),
    },
    // body: JSON.stringify({
    //   sender,
    //   recipient,
    //   subject,
    //   message,
    // }),
  });
  const data = await response.json();
  return data;
});
