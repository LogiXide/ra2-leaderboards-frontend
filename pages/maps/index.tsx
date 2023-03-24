import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useImmer } from 'use-immer';
import Link from 'next/link';

import { Button, Stack, Box, Modal, Typography } from '@mui/material';

import { DataList, Pagination } from '@/modules/core/components/common';
import { MapForm } from '@/modules/maps/components/maps/forms/MapForm';

import { CREATE_MAP } from '@/modules/maps/api/maps';

import {
  CreateMapMutation,
  CreateMapMutationVariables,
  GetMapsDocument,
  GetMapsQuery,
} from '@/generated/graphql';

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
  padding: 3,
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
  const [openModal, setOpenModal] = useState(false);
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const [createMap] = useMutation<
    CreateMapMutation,
    CreateMapMutationVariables
  >(CREATE_MAP);

  const { data, loading, error } = useQuery<GetMapsQuery>(GetMapsDocument, {
    variables: {
      options: {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      },
    },
  });

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleCreateMap = (data: {
    name: string;
    author: string;
    spots: number;
    imageUrl: string;
  }) => {
    createMap({
      variables: {
        input: {
          name: data.name,
          spots: Number(data.spots),
          imageUrl: data.imageUrl,
          author: data.author,
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
          Add map
        </Button>
      </Stack>
      <DataList list={data?.maps.data || []} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.maps.totalPages || 0}
      />

      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            display="flex"
            justifyContent="flex-start"
            mb={2}
            variant="h6"
            component="h2"
          >
            Create map
          </Typography>

          <MapForm handleCreateMap={handleCreateMap} setOpen={setOpenModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Maps;
