import { Container } from '@mui/system';

import styles from './Footer.module.css';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__content_logo}>LOGO</div>
          <div className={styles.footer__content_socials}>SOCIALS LINKS</div>
          <div className={styles.footer__content_copyright}>COPYRIGHT 2023</div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
