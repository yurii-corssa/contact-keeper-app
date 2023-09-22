import { Flex } from '@chakra-ui/react';
import AuthGreeting from 'components/Auth/AuthGreeting';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Outlet />
      <AuthGreeting />
    </Flex>
  );
};

export default AuthPage;
