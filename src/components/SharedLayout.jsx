import { Container } from '@chakra-ui/react';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadSpinner from './LoadSpinner';

const SharedLayout = () => {
  return (
    <Container maxW="1200px" bgColor="#fff" p="0" margin="0 auto">
      <Header />
      <main>
        <Suspense fallback={<LoadSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
