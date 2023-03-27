import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography, Stack } from '@mui/material';

type PropsType = {
  // Add custom props here
};

const Home: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Typography variant="h1" component="h1">
        Hello World!
      </Typography>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps<PropsType> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default Home;
