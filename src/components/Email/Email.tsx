import { useEffect } from 'react';
import EmailModal from './EmailModal.tsx/EmailModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getCreds } from '../../utils/localStorage';
import { login, getEmails } from '../../store/api/api';
import EmailsList from './EmailsList/EmailsList';
import { Box, Typography } from '@mui/material';

export default function Email() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(login(getCreds()));
    dispatch(getEmails());
  }, [dispatch]);

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
