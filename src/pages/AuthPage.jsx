import { Flex } from '@chakra-ui/react';
import AuthHeader from 'components/Auth/AuthHeader';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="space-evenly">
      <Outlet />
      <AuthHeader />
    </Flex>
  );
};

export default AuthPage;
