import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCreds } from '../../utils/localStorage';

interface ProtectedRouteProps {
  redirectLink: string;
  children: ReactNode;
}

export const WithoutAuth: React.FC<ProtectedRouteProps> = ({
  redirectLink,
  children,
}) => {
  if (!getCreds()) return <Navigate to={redirectLink} />;

  return children;
};
