import { Formik, Form, Field } from 'formik';
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import styles from './SignUp.module.css';
import { EMAIL_ROUTE, formSignUpFieldsDefault } from '../../../utils/const';
import { ISignupData } from '../../../types/types';
import { validationSignIn } from '../../../utils/Validate_Schemas';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/slices/Auth.slice';
import { setCreds } from '../../../utils/localStorage';

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (values: ISignupData) => {
    try {
      dispatch(register(values));
    } catch (error) {
      console.log(error);
    } finally {
      setCreds(values);
      navigate(EMAIL_ROUTE);
    }
  };

  return (
    <Container maxWidth="xs">
      <div className={styles.container}>
        <Avatar sx={{ m: 1, width: 46, height: 46, bgcolor: 'white' }}>
          <LockOpenIcon sx={{ color: 'black' }} />
        </Avatar>
        <Typography variant="h5">Sign up</Typography>
        <Formik
          initialValues={formSignUpFieldsDefault}
          validationSchema={validationSignIn}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="username"
                type="text"
                label="Username"
                variant="standard"
                as={TextField}
                fullWidth
                margin="normal"
                error={errors.username && touched.username}
                helperText={
                  errors.username && touched.username && errors.username
                }
              />
              <Field
                name="email"
                type="text"
                label="Email"
                variant="standard"
                as={TextField}
                fullWidth
                margin="normal"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
              />
              <Field
                name="password"
                label="Password"
                as={TextField}
                variant="standard"
                fullWidth
                margin="normal"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                size="large"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container>
          <Grid item sx={{ mt: 2 }}>
            <Link to="/login" className={styles.link}>
              {'Already have an account? Log In'}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
