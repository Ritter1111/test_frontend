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
  id?: number;
  sender: number;
  recipient: string;
  subject: string;
  message: string;
}

export interface IEmailsData {
  count: number;
  next: string;
  previous: string;
  results: ICreateEmailData[];
}
