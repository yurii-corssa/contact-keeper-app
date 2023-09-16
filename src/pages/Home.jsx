import { Flex } from '@chakra-ui/react';
import Greeting from 'components/Greeting';
import RegistrationForm from 'components/RegistrationForm';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="space-evenly">
      <Greeting />
      <Outlet />
    </Flex>
  );
};

export default Home;
