import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import RegistrationForm from 'components/Main/Auth/RegistrationForm';
import LoginForm from 'components/Main/Auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { authRefresh } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import LoadSpinner from 'components/LoadSpinner';
import { useDevice } from 'deviceContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const { deviceType } = useDevice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  return isRefreshing || !deviceType ? (
    <LoadSpinner />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/auth"
          element={
            <RestrictedRoute component={AuthPage} redirectTo="/contacts" />
          }
        >
          <Route path="login" element={<LoginForm />} />
          <Route path="sign-up" element={<RegistrationForm />} />
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} redirectTo="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
