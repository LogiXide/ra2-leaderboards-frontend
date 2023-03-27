import { Container } from '@mui/system';

import { Header } from '@/core/components/common';

type TypeProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<TypeProps> = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export { MainLayout };
