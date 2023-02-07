import { Header, Footer } from '..';

import { Container } from '@mui/material';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <>
      {/*<Header />*/}
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export { Layout };
