import { Header, Footer } from '@/components/containers';
import { Container } from '@mui/system';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export { Layout };
