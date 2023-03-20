import { useState } from 'react';
import { useImmer } from 'use-immer';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';

import { DataList, Pagination } from '@/components/common';
import { CreateMapPoolForm } from '@/modules/maps/components/mapPools/forms/CreateMapPoolForm';
import { GET_MAP_POOLS } from '@/modules/maps/api/mapPools/queries';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: '100%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  paddingTop: 2,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 3,
};

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => <Link href={`/map-pools/${x.id}`}>{x.name}</Link>,
  },
];

const MapPools: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const { data, loading, error } = useQuery(GET_MAP_POOLS, {
    variables: {
      options: {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      },
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <Box mt={2}>
      <Stack justifyContent="flex-end" alignItems="flex-end">
        <Button onClick={handleOpen} variant="contained">
          Add map pools
        </Button>
      </Stack>
      <DataList list={data.mapPools.data} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data.mapPools.totalPages}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            mb={2}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <AddCircleIcon />
            </Avatar>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create map pool
            </Typography>
          </Stack>

          <CreateMapPoolForm open={open} setOpen={setOpen} />
        </Box>
      </Modal>
    </Box>
  );
};

export default MapPools;
