import { Container } from '@chakra-ui/react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container maxW="1200px" margin="0 auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
