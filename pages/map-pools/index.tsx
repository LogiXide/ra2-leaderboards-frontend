import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { useQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';

import { DataList } from '@/modules/core/components/data';
import { Pagination } from '@/modules/core/components/common';
import { CreateMapPoolModal } from '@/modules/maps/components';
import { CREATE_MAP_POOL } from '@/modules/maps/api/mapPools';
import { showNotifyMessage } from '@/modules/core/utils';
import { config } from '@/config';
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

const MapPools = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

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

  const router = useRouter();

  const [createMapPool] = useMutation<
    CreateMapPoolMutation,
    CreateMapPoolMutationVariables
  >(CREATE_MAP_POOL, {
    onCompleted(data) {
      router.push({
        pathname: `/map-pools/${data.createMapPool.mapPools[0].id}`,
      });
    },
  });

  const handleCreateMapPool = useCallback(
    (values: { name: string; maps: { id: number; name: string }[] }) => {
      createMapPool({
        variables: {
          input: {
            name: values.name,
            mapIds: values?.maps?.map((it) => it.id),
          },
        },
      });

      showNotifyMessage('Map Pool added!', 'success');
    },
    [createMapPool]
  );

  // TODO: here add wrapper component
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    showNotifyMessage('Something went wrong!', 'error');
    return <h1>Error...</h1>;
  }

  return (
    <Box mt={2}>
      <Stack justifyContent="flex-end" alignItems="flex-end">
        <CreateMapPoolModal onCreateMapPool={handleCreateMapPool} />
      </Stack>

      <DataList list={data?.mapPools.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.mapPools.totalPages || 0}
      />
    </Box>
  );
};

export default MapPools;
