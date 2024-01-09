import { useDevice } from 'deviceContext';
import { AddContactForm } from './AddContactForm';
import { ContactFilter } from './ContactFilter';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { createTextAnimationTop } from 'utils/animations';

const ContactTools = () => {
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

  return (
    <Flex
      direction="column"
      padding={!isDesktop ? '20px 56px' : '56px'}
      color="#fff"
      w={!isDesktop ? '100%' : '50%'}
      h={!isDesktop ? '80vh' : '100vh'}
      justify={!isDesktop ? 'space-between' : 'center'}
      alignItems="center"
    >
      <motion.div {...createTextAnimationTop(0.1)}>
        <Heading
          as="h1"
          size={!isDesktop ? 'xl' : '2xl'}
          paddingY={!isDesktop ? '2' : '5'}
        >
          Contact Keeper
        </Heading>
      </motion.div>

      <motion.div {...createTextAnimationTop(0.2)}>
        <Text
          paddingY={!isDesktop ? '2' : '5'}
          textAlign="center"
          fontSize={!isDesktop ? 'md' : 'lg'}
          maxW="380px"
        >
          Add your contacts and keep them organized in one place. Get started
          now!
        </Text>
      </motion.div>

      <AddContactForm />

      <motion.div {...createTextAnimationTop(0.5)}>
        <Text
          paddingY={!isDesktop ? '2' : '5'}
          textAlign="center"
          fontSize={!isDesktop ? 'sm' : 'md'}
          maxW="380px"
        >
          Too many contacts? Just start typing a name and let the magic happen!
        </Text>
      </motion.div>

      <ContactFilter />
    </Flex>
  );
};

export default ContactTools;
