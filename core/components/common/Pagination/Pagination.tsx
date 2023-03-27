import { Draft } from 'immer';

import { Pagination as PaginationMui, Stack } from '@mui/material';

type TypeProps = {
  totalPages: number;
  pageInfo: {
    currentPage: number;
    offset: number;
    limit: number;
  };
  setPageInfo: (draft: Draft<any>) => void;
}

const Pagination: React.FC<TypeProps> = (props) => {
  const handleChangePage = (page: number) => {
    if (page > props.totalPages || page === 0) {
      return;
    }

    props.setPageInfo(
      (draft: { currentPage: number }) => void (draft.currentPage = page)
    );

    props.setPageInfo(
      (draft: { offset: number }) =>
        void (draft.offset = props.pageInfo.limit * page - props.pageInfo.limit)
    );
  };

  return (
    <Stack padding={2} justifyContent="center" flexDirection="row">
      {props.totalPages > 1 && (
        <PaginationMui
          count={props.totalPages}
          page={props.pageInfo.currentPage}
          onChange={(_, page) => handleChangePage(page)}
        />
      )}
    </Stack>
  );
};

export { Pagination };
