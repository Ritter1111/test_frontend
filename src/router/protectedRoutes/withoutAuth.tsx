import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  redirectLink: string;
  children: ReactNode;
}

export const WithoutAuth: React.FC<ProtectedRouteProps> = ({
  redirectLink,
  children,
}) => {
  // const user = null;
  if (!localStorage.getItem('creds')) return <Navigate to={redirectLink} />;

  return children;
};
