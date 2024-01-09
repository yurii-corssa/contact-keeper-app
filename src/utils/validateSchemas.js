export const validateName = value => {
  if (!value) return 'Name is required';

  if (value.length < 3) return 'Name should be at least 3 characters long';

  if (value.length > 50) return 'Name should not exceed 50 characters';
};

export const validateNumber = value => {
  if (!value) return 'Phone is required';
};

export const validateEmail = value => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!value) return 'Email is required';

  if (!emailRegex.test(value)) return 'Invalid email format';
};

export const validatePassword = value => {
  if (!value) return 'Password is required';

  if (value.length < 8) return 'Password should be at least 8 characters long';

  if (value.length > 50) return 'Password should not exceed 50 characters';
};
