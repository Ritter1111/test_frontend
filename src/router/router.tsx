import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../components/Auth/LogIn/LogIn';
import SignUp from '../components/Auth/SignUp/SignUp';
import { WithAuthRoute } from './protectedRoutes/withAuth';
import { WithoutAuth } from './protectedRoutes/withoutAuth';
import Email from '../components/Email/Email';
import { Layout } from '../components/Layout/Layout';

export function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Email />} /> */}
        <Route
          path="/register"
          element={
            <WithAuthRoute redirectLink="/email">
              <SignUp />
            </WithAuthRoute>
          }
        />
        <Route
          path="/login"
          element={
            <WithAuthRoute redirectLink="/email">
              <LogIn />
            </WithAuthRoute>
          }
        />
        <Route
          path="/email"
          element={
            <WithoutAuth redirectLink="/">
              <Email />
            </WithoutAuth>
          }
        />
      </Route>
    </Routes>
  );
}
