import { Container } from '@mui/system';

import { Header } from '@/modules/core/components/common';

type PropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<PropsType> = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export { MainLayout };
