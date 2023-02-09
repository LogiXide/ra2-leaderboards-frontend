import { Header, Footer } from '@/components/containers';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <>
<<<<<<< HEAD:components/Containers/Layout/Layout.tsx
      {/*<Header />*/}
      <Container>{props.children}</Container>
=======
      <Header />
      {props.children}
>>>>>>> eb8b631612862b4c13f86a875fa2db065c7a8833:components/containers/Layout/Layout.tsx
      <Footer />
    </>
  );
};

export { Layout };
