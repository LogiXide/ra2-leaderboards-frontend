import { Header, Footer } from '@/components/containers';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export { Layout };
