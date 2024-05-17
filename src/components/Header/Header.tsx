import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Email App
        </Typography>
        <NavLink to={'login'} className={styles.pages__link}>
          Login
        </NavLink>
        <NavLink to={'register'} className={styles.pages__link}>
          Register
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
