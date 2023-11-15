import { Flex } from '@chakra-ui/react';
import AuthGreeting from 'components/Main/Auth/AuthGreeting';
import { useDevice } from 'deviceContext';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  const { deviceType } = useDevice();

  return (
    <Flex
      align="center"
      flexDir={deviceType !== 'desktop' ? 'column-reverse' : 'row'}
    >
      <Outlet />
      <AuthGreeting />
    </Flex>
  );
};

export default AuthPage;
