import { EmailIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';

const AuthEmailInput = ({ validateEmail }) => {
  return (
    <Field name="email" validate={validateEmail}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default AuthEmailInput;
