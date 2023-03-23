import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useImmer } from 'use-immer';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { DataList, Pagination } from '@/modules/core/components/common';
import { CreateMapForm } from '@/modules/maps/components/maps/forms/CreateMapForm';
import { GET_MAPS } from '@/modules/maps/api/maps';
import type { GetMapsQuery } from '@/src/generated/graphql';

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
    render: (x: any) => <Link href={`/maps/${x.id}`}>{x.name}</Link>,
  },
  {
    id: 2,
    label: 'Spots',
    render: (x: any) => x.spots,
  },
  {
    id: 3,
    label: 'Image',
    render: (x: any) => x.imageUrl,
  },
  {
    id: 4,
    label: 'Author',
    render: (x: any) => x.author,
  },
];

const Maps: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const { data, loading, error } = useQuery<GetMapsQuery>(GET_MAPS, {
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
          Add map
        </Button>
      </Stack>
      <DataList list={data?.maps.data || []} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.maps.totalPages || 0}
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
              Create map
            </Typography>
          </Stack>

          <CreateMapForm open={open} setOpen={setOpen} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Maps;
