import { useEffect } from 'react';
import EmailModal from './EmailModal.tsx/EmailModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login } from '../../store/slices/Auth.slice';
import { getCreds } from '../../utils/localStorage';

export default function Email() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(login(getCreds()));
  }, [dispatch]);

  return (
    <div>
      {user?.username}
      {user?.email}
      <EmailModal />
    </div>
  );
}
