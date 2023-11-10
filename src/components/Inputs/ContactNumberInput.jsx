import { PhoneIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';

const ContactNumberInput = ({ variant }) => {
  const validateNumber = value => {
    if (!value) {
      return 'Phone is required';
    }
  };

  return (
    <Field name="phone" validate={validateNumber}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.phone && form.touched.phone}>
          <FormLabel>Phone</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              required
              autoComplete=""
              placeholder="123-456-7890"
              color="black"
              variant={variant}
              _focus={{ color: variant === 'filled' ? 'white' : 'black' }}
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default ContactNumberInput;
