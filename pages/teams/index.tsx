import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Stack, Box } from '@mui/material';

import { config } from '@/config';
import { showNotifyMessage } from '@/modules/core/utils';
import { DataList } from '@/modules/core/components/data';
import { CreateTeamModal } from '@/modules/players/components';
import { Pagination } from '@/modules/core/components/common';
import { CREATE_TEAM } from '@/modules/players/api/teams';

import {
  GetTeamsDocument,
  GetTeamsQuery,
  CreateTeamMutation,
  CreateTeamMutationVariables,
} from '@/generated/graphql';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => <Link href={`/teams/${x.id}`}>{x.name}</Link>,
  },
];

const Teams: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

  const router = useRouter();

  const [createTeam] = useMutation<
    CreateTeamMutation,
    CreateTeamMutationVariables
  >(CREATE_TEAM, {
    onCompleted(data) {
      router.push({
        pathname: `/teams/${data.createTeam.teams[0].id}`,
      });
    },
  });

  const { data, loading, error } = useQuery<GetTeamsQuery>(GetTeamsDocument, {
    variables: {
      options: {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      },
    },
  });

  const handleCreateTeam = useCallback(
    (data: { name: string }) => {
      createTeam({
        variables: {
          input: {
            name: data.name,
          },
        },
      });

      showNotifyMessage('Team added!', 'success');
    },
    [createTeam]
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
        <CreateTeamModal onCreateTeam={handleCreateTeam} />
      </Stack>

      <DataList list={data?.teams.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.teams.totalPages || 0}
      />
    </Box>
  );
};

export default Teams;
