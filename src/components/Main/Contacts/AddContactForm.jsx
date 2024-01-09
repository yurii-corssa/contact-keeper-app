import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { normalizeStr } from 'utils/normalizeStr';
import { addContactThunk } from 'redux/contacts/contacts-operations';
import { Form, Formik } from 'formik';
import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import ContactNameInput from 'components/Inputs/ContactNameInput';
import ContactNumberInput from 'components/Inputs/ContactNumberInput';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { createFormAnimation } from 'utils/animations';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

  const initialValues = { name: '', phone: '' };

  const isContact = value =>
    contacts.find(({ name }) => normalizeStr(name) === normalizeStr(value));

  const handleSubmit = async ({ name, phone }, actions) => {
    if (isContact(name)) {
      toast({
        title: 'Duplicate Contact',
        description: `"${name}" is already in contacts.`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      actions.setSubmitting(false);
      return;
    }
    await dispatch(addContactThunk({ name, phone }));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Flex
      direction="column"
      maxW="380px"
      paddingY={!isDesktop ? '2' : '5'}
      width="100%"
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <motion.div {...createFormAnimation(0.3)}>
              <ContactNameInput variant="filled" />
            </motion.div>

            <motion.div {...createFormAnimation(0.4)}>
              <ContactNumberInput variant="filled" />
            </motion.div>

            <motion.div {...createFormAnimation(0.5)}>
              <Button
                textColor="fff"
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
                w="100%"
              >
                Add contact
              </Button>
            </motion.div>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};
