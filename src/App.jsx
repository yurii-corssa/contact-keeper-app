import { Route, Routes } from 'react-router-dom';
import { ContactsBook } from './components/ContactsBook/ContactsBook';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import RegistrationForm from 'components/RegistrationForm';
import LoginForm from 'components/LoginForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}>
          <Route path="sign-up" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="/contacts" element={<ContactsBook />} />
      </Route>
    </Routes>
  );
};
