import { Box } from '@chakra-ui/react';
import Header from 'components/Header/Header';
import BurgerMenu from './Header/BurgerMenu';
import { useDevice } from 'deviceContext';
import Background from './Background';
import { Suspense } from 'react';
import LoadSpinner from './LoadSpinner';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const { deviceType } = useDevice();
  return (
    <Box maxW="1200px" p="0" margin="0 auto" position="relative">
      {deviceType !== 'desktop' ? <BurgerMenu /> : <Header />}
      <main>
        <Background />
        <Suspense fallback={<LoadSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default SharedLayout;
