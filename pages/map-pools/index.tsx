import { useCallback, useState } from 'react';
import { useImmer } from 'use-immer';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';

import { Button, Stack, Box } from '@mui/material';

import { config } from '@/config';
import { DataList } from '@/modules/core/components/data';
import { Pagination } from '@/modules/core/components/common';
import { BasicModal } from '@/modules/core/components/modals';
import { MapPoolForm } from '@/modules/maps/components/mapPools/forms';
import { CREATE_MAP_POOL } from '@/modules/maps/api/mapPools';

import {
  GetMapPoolsDocument,
  GetMapPoolsQuery,
  CreateMapPoolMutation,
  CreateMapPoolMutationVariables,
} from '@/generated/graphql';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => <Link href={`/map-pools/${x.id}`}>{x.name}</Link>,
  },
];

const MapPools: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
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

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  const handleCreateMapPool = useCallback(
    (data: { mapPoolName: string }) => {
      createMapPool({
        variables: {
          input: {
            name: data.mapPoolName,
          },
        },
      });
    },
    [createMapPool]
  );

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
          Add Map Pools
        </Button>
      </Stack>

      <DataList list={data?.mapPools.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.mapPools.totalPages || 0}
      />

      <BasicModal
        open={openModal}
        onClose={handleClose}
        title="Create Map Pool"
      >
        <MapPoolForm
          onCreateMapPool={handleCreateMapPool}
          onClose={handleClose}
        />
      </BasicModal>
    </Box>
  );
};

export default MapPools;
