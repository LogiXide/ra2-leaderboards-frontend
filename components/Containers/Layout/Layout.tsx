import { Header, Footer } from '..';

import { LayoutStyled } from './Layout.styles';

interface ITypeProps {
  children: React.ReactNode;
}

const Layout: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      {props.children}
      <Footer />
    </LayoutStyled>
  );
};

export { Layout };
