import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  // Add custom props here
}

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <h1>{t('hello')}</h1>
  )
}


export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
})

export default Home