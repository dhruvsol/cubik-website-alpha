import { Container } from '@chakra-ui/react';
import MainBackground from './MainBackground';
import { Header } from './Navigation/Header';

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <Container p='0' maxW={'full'}>
      <MainBackground />
      <Container p='0' position={'absolute'} maxW={'full'} zIndex='999'>
        <Header />
        {children}
      </Container>
    </Container>
  );
};

export default Layout;
