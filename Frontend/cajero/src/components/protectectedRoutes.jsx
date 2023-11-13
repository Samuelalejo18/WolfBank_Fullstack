/* eslint-disable no-console */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth.context';

function ProtectedRoute() {
  // eslint-disable-next-line no-unused-vars
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated);
  if (loading) return <h1> Loading....</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
