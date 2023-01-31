import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import { Meta } from '@/components';

import styles from '../styles/Home.module.css';
import { Button, Typography } from '@mui/material';

interface ITypeProps {
  // Add custom props here
}

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <>
      <Meta title="Main" description="Something text..." />

      <Typography textAlign="center" paddingTop="225px" fontWeight="600" component="h1" variant="h1" color="common.black">Red Alert 2</Typography>
      <Typography textAlign="center" paddingTop="10px" fontWeight="500" fontStyle="italic" component="h2" variant="h2" color="common.black">Leader boards</Typography>

      {/*<div className={styles.wrapper}>
        <h1>{t('hello')}</h1>
      </div>*/}
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
