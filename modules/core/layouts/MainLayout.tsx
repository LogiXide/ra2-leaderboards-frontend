import { Container } from '@mui/system';

import { Header } from '@/modules/core/components/common/Header';

type PropType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<PropType> = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};

export { MainLayout };
