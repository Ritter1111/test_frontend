import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
