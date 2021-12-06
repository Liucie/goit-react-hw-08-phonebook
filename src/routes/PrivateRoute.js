import { Navigate } from 'react-router';

export function PrivateRoute({ isAuth, component: Component }) {
  return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}
