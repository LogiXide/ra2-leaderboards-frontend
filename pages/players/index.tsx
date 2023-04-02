import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Stack, Box } from '@mui/material';

import { config } from '@/config';
import { showNotifyMessage } from '@/modules/core/utils';
import { DataList } from '@/modules/core/components/data';
import { CreatePlayerModal } from '@/modules/players/components';
import { Pagination } from '@/modules/core/components/common';
import { CREATE_PLAYER } from '@/modules/players/api/players';

import {
  GetPlayersDocument,
  GetPlayersQuery,
  CreatePlayerMutation,
  CreatePlayerMutationVariables,
} from '@/generated/graphql';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => <Link href={`/players/${x.id}`}>{x.name}</Link>,
  },
];

const Players: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

  const router = useRouter();

  const [createPlayer] = useMutation<
    CreatePlayerMutation,
    CreatePlayerMutationVariables
  >(CREATE_PLAYER, {
    onCompleted(data) {
      router.push({
        pathname: `/players/${data.createPlayer.players[0].id}`,
      });
    },
  });

  const { data, loading, error } = useQuery<GetPlayersQuery>(
    GetPlayersDocument,
    {
      variables: {
        options: {
          offset: pageInfo.offset,
          limit: pageInfo.limit,
        },
      },
    }
  );

  const handleCreatePlayer = useCallback(
    (data: { name: string }) => {
      createPlayer({
        variables: {
          input: {
            name: data.name,
          },
        },
      });

      showNotifyMessage('Player added!', 'success');
    },
    [createPlayer]
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
        <CreatePlayerModal onCreatePlayer={handleCreatePlayer} />
      </Stack>

      <DataList list={data?.players.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.players.totalPages || 0}
      />
    </Box>
  );
};

export default Players;
