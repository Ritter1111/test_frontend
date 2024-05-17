import { ILoginData } from '../types/types';

export function getCreds(): ILoginData {
  const userData = localStorage.getItem('creds');
  return JSON.parse(userData!);
}

export function setCreds({ username, password }: ILoginData) {
  localStorage.setItem('creds', JSON.stringify({ username, password }));
}

export function clearCreds() {
  return localStorage.removeItem('creds');
}
