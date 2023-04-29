import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { Box } from '@mui/material';

import { TeamForm } from '@/modules/players/components';
import { showNotifyMessage } from '@/modules/core/utils';

import { GET_TEAM } from '@/modules/players/api/teams';

import {
  UpdateTeamDocument,
  UpdateTeamMutation,
  UpdateTeamMutationVariables,
} from '@/generated/graphql';

import { ItemType } from '@/modules/core/components/common';

type FormValuesType = {
  name: string;
  players: ItemType[];
};

const convertDataToFields = (data: ItemType[]) => {
  return data.map((it: ItemType) => ({
    id: it.id,
    name: it.name,
    checked: true,
  }));
};

const TeamDetail = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
    players: [],
  });

  const router = useRouter();

  const teamId = parseInt(router.query.teamId as string, 10);

  const { data } = useQuery(GET_TEAM, {
    variables: {
      id: teamId,
    },
    skip: Number.isNaN(teamId),
  });

  const selectedItems = useMemo(() => {
    return convertDataToFields(data?.team?.players || []);
  }, [data?.team?.players]);

  useEffect(() => {
    if (data?.team?.name) {
      setFormValues({
        name: data?.team?.name,
        players: selectedItems,
      });
    }
  }, [data, selectedItems]);

  const [updateTeam] = useMutation<
    UpdateTeamMutation,
    UpdateTeamMutationVariables
  >(UpdateTeamDocument);

  const handleUpdateTeam = (values: FormValuesType) => {
    updateTeam({
      variables: {
        id: teamId,
        input: {
          name: values.name,
          playerIds: values.players.map((player) => player.id),
        },
      },
    });

    showNotifyMessage('Team updated!', 'success');
  };

  return (
    <Box mt={2}>
      <TeamForm
        type="update"
        onSubmit={handleUpdateTeam}
        defaultValues={formValues}
      />
    </Box>
  );
};

export default TeamDetail;
