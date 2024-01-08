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
import ResendEmail from 'components/Main/Confirmation/ResendEmail';

const HomePage = lazy(() => import('./pages/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ConfirmationPage = lazy(() => import('./pages/ConfirmationPage'));
const ConfirmationTitle = lazy(() =>
  import('components/Main/Confirmation/ConfirmationTitle')
);
const VerificationConfirm = lazy(() =>
  import('components/Main/Confirmation/VerificationConfirm')
);

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
        <Route
          path="/confirmation"
          element={
            <RestrictedRoute component={ConfirmationPage} redirectTo="/" />
          }
        >
          <Route index element={<ConfirmationTitle />} />
          <Route path="resend" element={<ResendEmail />} />
          <Route path="verification/:token" element={<VerificationConfirm />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
