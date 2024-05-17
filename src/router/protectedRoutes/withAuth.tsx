import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface withAuthRouteProps {
  redirectLink: string;
  children: ReactNode;
}

export const WithAuthRoute: React.FC<withAuthRouteProps> = ({
  redirectLink,
  children,
}) => {
  // const user = 1;

  if (localStorage.getItem('creds')) return <Navigate to={redirectLink} />;

  return children;
};
