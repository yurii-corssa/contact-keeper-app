import { Flex } from '@chakra-ui/react';
import AuthHeader from 'components/AuthHeader';
import Greeting from 'components/Greeting';
import { Helmet } from 'react-helmet';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

const AuthPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="space-evenly">
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}

      <Outlet />
      <AuthHeader />
    </Flex>
  );
};

export default AuthPage;
