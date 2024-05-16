import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../components/Auth/LogIn/LogIn';
import SignUp from '../components/Auth/SignUp/SignUp';

export function Router(): ReactElement {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<LogIn />} />
      <Route
        path="/register"
        element={
          // <WithAuthRoute redirectLink="/graph-ql">
          <SignUp />
          // </WithAuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          // <WithAuthRoute redirectLink="/log-in">
          <LogIn />
          // </WithAuthRoute>
        }
      />
      {/* <Route
          path="/"
          element={
            <WithoutAuth redirectLink="/">
              <GraphQl />
            </WithoutAuth>
          }
        /> */}
      {/* </Route> */}
    </Routes>
  );
}
