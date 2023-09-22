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

const ContactNumberInput = () => {
  const validateNumber = value => {
    if (!value) {
      return 'Number is required';
    }
  };

  return (
    <Field name="number" validate={validateNumber}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.number && form.touched.number}>
          <FormLabel>Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              required
              autoComplete=""
              placeholder="123-456-7890"
              variant="filled"
              color="black"
              _focus={{ color: 'white' }}
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.number}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default ContactNumberInput;
