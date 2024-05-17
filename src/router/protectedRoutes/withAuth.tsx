import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCreds } from '../../utils/localStorage';

interface withAuthRouteProps {
  redirectLink: string;
  children: ReactNode;
}

export const WithAuthRoute: React.FC<withAuthRouteProps> = ({
  redirectLink,
  children,
}) => {
  if (getCreds()) return <Navigate to={redirectLink} />;

  return children;
};
