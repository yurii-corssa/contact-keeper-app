import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadSpinner from './LoadSpinner';
import BurgerMenu from './BurgerMenu';

const SharedLayout = () => {
  const [isMobile] = useMediaQuery('(max-width: 992px)');

  return (
    <Box maxW="1200px" bgColor="#fff" p="0" margin="0 auto" position="relative">
      {isMobile ? <BurgerMenu /> : <Header />}
      <main>
        <Suspense fallback={<LoadSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default SharedLayout;
