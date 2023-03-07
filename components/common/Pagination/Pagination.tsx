import { Pagination as PaginationMui, Stack } from '@mui/material';

interface ITypeProps {
  page: number;
  pages: number;
  offset: number;
  limit: number;
  setOffset: (page: number) => void;
  setPage: (page: number) => void;
}

const Pagination: React.FC<ITypeProps> = (props) => {
  const handleChangePage = (page: number) => {
    if (page > props.pages || page === 0) {
      return;
    }

    props.setPage(page);
    props.setOffset((props.limit * page) - props.limit);
  };

  return (
    <Stack justifyContent="center" flexDirection="row">
      {props.pages > 1 && (
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
