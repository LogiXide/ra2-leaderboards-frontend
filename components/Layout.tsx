import { Header, Footer } from './Containers';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export { Layout };
