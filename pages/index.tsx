import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/components';

import styles from '../styles/Home.module.css';
import { Button, Typography } from '@mui/material';
import { Form } from '@/components/form/Form';

interface ITypeProps {
  // Add custom props here
}

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <>
      <Meta title="Main" description="Something text..." />

      {/*<div className={styles.wrapper}>
        <h1>{t('hello')}</h1>
      </div>*/}
      <Form />
    </>
  );
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default Home;
