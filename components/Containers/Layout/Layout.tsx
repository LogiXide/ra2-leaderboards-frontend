import { Header, Footer } from '..';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </>
  );
};

export { Layout };
