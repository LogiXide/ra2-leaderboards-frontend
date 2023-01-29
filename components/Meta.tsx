import Head from 'next/head';

interface ITypeProps {
  title: string;
  description: string;
}

const Meta: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description}></meta>
    </Head>
  );
};

export { Meta };
