import { useState } from 'react';

import { Pagination as PaginationMui, Stack } from '@mui/material';

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(10);
  const [skip, setSkip] = useState(10);

  const handleChangePage = (newPage: number) => {
    if (newPage > pageQty) {
      return;
    }

    setPage(newPage);

    if (newPage === 0) {
      setSkip(0);
      return;
    }

    setSkip(newPage * 10);
  };

  return (
    <Stack justifyContent="center" flexDirection="row">
      {!!pageQty && (
        <PaginationMui
          count={pageQty}
          page={page}
          onChange={(_, newPage) => handleChangePage(newPage)}
        />
      )}
    </Stack>
  );
};

export { Pagination };
