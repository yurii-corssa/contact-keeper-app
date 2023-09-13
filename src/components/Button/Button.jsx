import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = props => <Btn type="submit" {...props} />;

Button.propTypes = { children: PropTypes.string.isRequired };
