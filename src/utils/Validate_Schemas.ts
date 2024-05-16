import * as Yup from 'yup';

export const validationPasswordEmail = Yup.object().shape({
  username: Yup.string().required('username is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password should contain at least one lowercase letter'),
});

export const validationSignIn = Yup.object().shape({
  username: Yup.string().required('username is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password should contain at least one lowercase letter'),
});
