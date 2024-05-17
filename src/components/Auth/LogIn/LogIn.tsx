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
import styles from './LogIn.module.css';
import { formFieldsDefault } from '../../../utils/const';
import { validationPasswordEmail } from '../../../utils/Validate_Schemas';
import { ILoginData } from '../../../types/types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/slices/Auth.slice';
import { AppDispatch } from '../../../store/store';

export default function LogIn() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: ILoginData) => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <Container maxWidth="xs">
      <div className={styles.container}>
        <Avatar sx={{ m: 1, width: 46, height: 46, bgcolor: 'white' }}>
          <LockOpenIcon sx={{ color: 'black' }} />
        </Avatar>
        <Typography variant="h5">Log in</Typography>
        <Formik
          initialValues={formFieldsDefault}
          validationSchema={validationPasswordEmail}
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
            <Link to="/register" className={styles.link}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
