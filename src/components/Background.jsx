import { Box, Flex } from '@chakra-ui/react';
import { useDevice } from 'deviceContext';
import { motion, useAnimation } from 'framer-motion';
import { useCurrentPage } from 'hooks/useCurrentPage';
import { useEffect } from 'react';
import {
  createAuthPageAnimation,
  createBgAnimation,
  createConfirmationPageAnimation,
  createContactsPageAnimation,
  createHomePageAnimation,
} from 'utils/animations';

const Background = () => {
  const { deviceType } = useDevice();
  const controls = useAnimation();
  const currentPage = useCurrentPage();

  const isDesktop = deviceType === 'desktop';

  useEffect(() => {
    if (currentPage.isHomePage) {
      createHomePageAnimation(controls);
    }

    if (currentPage.isAuthPage) {
      createAuthPageAnimation(controls, isDesktop);
    }
    if (currentPage.isContactsPage) {
      createContactsPageAnimation(controls, isDesktop);
    }
    if (currentPage.isConfirmationPage) {
      createConfirmationPageAnimation(controls);
    }
  }, [controls, currentPage, isDesktop]);

  return (
    <Flex w="100%" h="100vh" overflow="hidden" position="absolute" zIndex="-1">
      <Box
        as={motion.div}
        {...createBgAnimation(controls, currentPage, isDesktop)}
        position="absolute"
        top="0"
        bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      />
    </Flex>
  );
};

export default Background;
