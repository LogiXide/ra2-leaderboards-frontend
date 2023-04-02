import { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useImmer } from 'use-immer';
import { useRouter } from 'next/router';

import { Stack, Box } from '@mui/material';

import { config } from '@/config';
import { DataList } from '@/modules/core/components/data';
import { CreateMapModal } from '@/modules/maps/components';
import { Pagination } from '@/modules/core/components/common';
import { CREATE_MAP } from '@/modules/maps/api/maps';

import { showNotifyMessage } from '@/modules/core/utils';

import {
  CreateMapMutation,
  CreateMapMutationVariables,
  GetMapsDocument,
  GetMapsQuery,
} from '@/generated/graphql';

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
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

  const router = useRouter();

  const [createMap] = useMutation<
    CreateMapMutation,
    CreateMapMutationVariables
  >(CREATE_MAP, {
    onCompleted(data) {
      router.push({
        pathname: `/maps/${data.createMap.maps[0].id}`,
      });
    },
  });

  const { data, loading, error } = useQuery<GetMapsQuery>(GetMapsDocument, {
    variables: {
      options: {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      },
    },
  });

  const handleCreateMap = useCallback(
    (data: {
      name: string;
      author: string;
      spots: number;
      imageUrl: string;
    }) => {
      createMap({
        variables: {
          input: {
            name: data.name,
            spots: Number(data.spots) || 0,
            imageUrl: data.imageUrl,
            author: data.author,
          },
        },
      });

      showNotifyMessage('Map added!', 'success');
    },
    [createMap]
  );

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
        <CreateMapModal onCreateMap={handleCreateMap} />
      </Stack>

      <DataList list={data?.maps.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.maps.totalPages || 0}
      />
    </Box>
  );
};

export default Maps;
