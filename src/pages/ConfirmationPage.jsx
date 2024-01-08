import { Suspense } from 'react';
import { Outlet } from 'react-router';

const ConfirmationPage = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default ConfirmationPage;
