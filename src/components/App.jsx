import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useAuth } from 'hooks';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/ContactPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="/logIn"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}
