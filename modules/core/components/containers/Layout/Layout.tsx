import { Header, Footer } from '@/modules/core/components/containers';
import { Container } from '@mui/system';

import styles from './Layout.module.css';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export { Layout };
