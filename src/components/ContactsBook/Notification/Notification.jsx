import PropTypes from 'prop-types';
import { Notice } from './Notification.styled';

export const Notification = ({ text }) => <Notice>{text}</Notice>;

Notification.propTypes = { text: PropTypes.string };
