import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const location = useLocation();

  return {
    isHomePage: location.pathname === '/',
    isAuthPage: location.pathname.includes('/auth'),
    isContactsPage: location.pathname.includes('/contacts'),
    isConfirmationPage: location.pathname.includes('/confirmation'),
  };
};
