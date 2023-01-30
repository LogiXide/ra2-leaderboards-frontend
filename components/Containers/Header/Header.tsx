import styles from './Header.module.css';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <div className={styles.header__content_logo}>LOGO</div>
          <div className={styles.header__content_navbar}>MENU</div>
          <div className={styles.header__content_locale}>LOCALE</div>
        </div>
      </div>
    </header>
  );
};

export { Header };
