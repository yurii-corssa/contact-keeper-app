import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Tabs as="header">
      <TabList>
        <Link to="/login">
          <Tab>Home</Tab>
        </Link>
        <Link to="/contacts">
          <Tab>Contacts</Tab>
        </Link>
      </TabList>
    </Tabs>
  );
};

export default Header;
