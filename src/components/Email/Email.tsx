import { useEffect } from 'react';
import EmailModal from './EmailModal.tsx/EmailModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getCreds } from '../../utils/localStorage';
import { login, getEmails } from '../../store/api/api';
import EmailsList from './EmailsList/EmailsList';
import { Box, Typography } from '@mui/material';
import Loader from '../Loader/Loader';

export default function Email() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(login(getCreds()));
    dispatch(getEmails('/'));
    console.log(getCreds());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px 0',
        }}
      >
        <Typography variant="h6">Username: {user?.username}</Typography>
        <Typography variant="h6">Email: {user?.email}</Typography>
        <EmailModal />
      </Box>

      <EmailsList />
    </div>
  );
}
