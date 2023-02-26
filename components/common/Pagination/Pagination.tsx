import { Pagination as PaginationMui, Stack } from '@mui/material';

interface ITypeProps {
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<ITypeProps> = (props) => {
  const handleChangePage = (page: number) => {
    if (page > props.pages) {
      return;
    }

    props.setPage(page);

    if (page === 0) {
      return;
    }
  };

  return (
    <Stack justifyContent="center" flexDirection="row">
      {!!props.pages && (
        <PaginationMui
          count={props.pages}
          page={props.page}
          onChange={(_, page) => handleChangePage(page)}
        />
      )}
    </Stack>
  );
};

export { Pagination };
