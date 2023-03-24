import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Typography, Stack } from '@mui/material';

interface ITypeProps {
  // Add custom props here
}

const Home: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="65vh"
    >
      <Typography variant="h1" component="h1">
        Hello World!
      </Typography>
    </Stack>
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
