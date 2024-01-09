import { Field } from 'formik';
import { FaUserAlt } from 'react-icons/fa';
import { validateName } from 'utils/validateSchemas';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const ContactNameInput = ({ variant }) => {
  return (
    <Field name="name" validate={validateName}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaUserAlt} color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              required
              autoComplete="name"
              placeholder="Full Name"
              color="black"
              variant={variant}
              _focus={{ color: variant === 'filled' ? 'white' : 'black' }}
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default ContactNameInput;
