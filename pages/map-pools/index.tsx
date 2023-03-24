import { useState } from 'react';
import { useImmer } from 'use-immer';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { DataList, Pagination } from '@/modules/core/components/common';
import { MapPoolForm } from '@/modules/maps/components/mapPools/forms/MapPoolForm';
import {
  GetMapPoolsDocument,
  GetMapPoolsQuery,
  CreateMapPoolMutation,
  CreateMapPoolMutationVariables,
} from '@/generated/graphql';

import { CREATE_MAP_POOL } from '@/modules/maps/api/mapPools';

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

  const [createMapPool] = useMutation<
    CreateMapPoolMutation,
    CreateMapPoolMutationVariables
  >(CREATE_MAP_POOL);

  const { data, loading, error } = useQuery<GetMapPoolsQuery>(
    GetMapPoolsDocument,
    {
      variables: {
        options: {
          offset: pageInfo.offset,
          limit: pageInfo.limit,
        },
      },
    }
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateMapPool = (data: { mapPoolName: string }) => {
    createMapPool({
      variables: {
        input: {
          name: data.mapPoolName,
        },
      },
    });
  };

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
      <DataList list={data?.mapPools.data || []} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.mapPools.totalPages || 0}
      />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            display="flex"
            justifyContent="center"
            mb={2}
            variant="h6"
            component="h2"
          >
            Create map pool
          </Typography>

          <MapPoolForm
            handleCreateMapPool={handleCreateMapPool}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default MapPools;
