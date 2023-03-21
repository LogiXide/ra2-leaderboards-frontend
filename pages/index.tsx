import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ITypeProps {
  // Add custom props here
}

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation('common');

  return <h1>Hello World!</h1>;
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default Home;
