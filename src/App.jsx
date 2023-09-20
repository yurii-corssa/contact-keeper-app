import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import RegistrationForm from 'components/Auth/RegistrationForm';
import LoginForm from 'components/Auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authRefresh } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { Flex, Spinner } from '@chakra-ui/react';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import AuthPage from 'pages/AuthPage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
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
      </Route>
    </Routes>
  );
};
