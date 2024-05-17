import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { clearCreds, getCreds } from '../../utils/localStorage';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCreds();
    navigate('/login');
  };

  const isLoggedIn = getCreds();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Email App
        </Typography>
        {!isLoggedIn ? (
          <>
            <NavLink to={'/login'} className={styles.pages__link}>
              Login
            </NavLink>
            <NavLink to={'/register'} className={styles.pages__link}>
              Register
            </NavLink>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            LogOut
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
