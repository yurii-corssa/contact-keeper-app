import { Box, Flex } from '@chakra-ui/react';
import { useDevice } from 'deviceContext';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const { deviceType } = useDevice();
  const location = useLocation();
  const controls = useAnimation();

  const isDesktop = deviceType === 'desktop';
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname.includes('/auth');
  const isContactsPage = location.pathname.includes('/contacts');

  useEffect(() => {
    const defaultAnimation = {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96] },
    };

    if (isHomePage) {
      controls.start({
        ...defaultAnimation,
        left: '0%',
        width: '100%',
      });
    }
    if (isAuthPage) {
      controls.start({
        ...defaultAnimation,
        left: !isDesktop ? '0' : '50%',
        width: !isDesktop ? '100%' : '50%',
      });
    }
    if (isContactsPage) {
      controls.start({
        ...defaultAnimation,
        left: '0',
        width: !isDesktop ? '100%' : '50%',
      });
    }
  }, [controls, isAuthPage, isContactsPage, isDesktop, isHomePage]);

  const bgAnimation = {
    initial: {
      left: isAuthPage ? (!isDesktop ? '0%' : '50%') : '0%',
      width: !isHomePage ? (!isDesktop ? '100%' : '50%') : '100%',
      opacity: 0,
    },
    animate: controls,
  };

  return (
    <Flex w="100%" h="100vh" overflow="hidden" position="absolute" zIndex="-1">
      <Box
        as={motion.div}
        {...bgAnimation}
        position="absolute"
        top="0"
        h="100%"
        bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      />
    </Flex>
  );
};

export default Background;
