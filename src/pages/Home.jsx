import { Flex } from '@chakra-ui/react';
import Greeting from 'components/Greeting';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="space-evenly">
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <Greeting />
      <Outlet />
    </Flex>
  );
};

export default Home;
