import { Navigate } from 'react-router';

export function PublicRoute({ isAuth, component: C }) {
  return (
    <>
      <h1>Public</h1>
      {isAuth ? <Navigate to="/" /> : <C />}
    </>
  );
}
