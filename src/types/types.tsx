export interface ILoginData {
  username: string;
  password: string;
}

export interface ISignupData {
  username: string;
  email: string;
  password: string;
}

export interface IAuthData {
  username: string;
  email: string;
  id: number;
}

export interface ICreateEmailData {
  sender: number;
  recipient: string;
  subject: string;
  message: string;
}
