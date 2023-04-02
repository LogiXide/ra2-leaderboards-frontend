import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { showNotifyMessage } from '@/modules/core/utils';
import { TeamForm } from '@/modules/players/components';
import { GET_TEAM } from '@/modules/players/api/teams';

import {
  UpdateTeamDocument,
  UpdateTeamMutation,
  UpdateTeamMutationVariables,
} from '@/generated/graphql';

import type { FormValuesType } from '@/modules/players/components';

const TeamDetail = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
  });
  const router = useRouter();

  const teamId = parseInt(router.query.id as string, 10);

  const { data } = useQuery(GET_TEAM, {
    variables: {
      id: teamId,
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data.team.name,
      });
    }
  }, [data]);

  const [updateTeam] = useMutation<
  UpdateTeamMutation,
  UpdateTeamMutationVariables
  >(UpdateTeamDocument);

  const handleUpdateTeam = (data: { name: string }) => {
    updateTeam({
      variables: {
        input: {
          name: data.name,
        },

        id: teamId,
      },
    });

    showNotifyMessage('Team updated!', 'success');
  };

  return (
    <Box mt={2}>
      <TeamForm
        onUpdateTeam={handleUpdateTeam}
        initialValues={formValues}
        onClose={() => null}
      />
    </Box>
  );
};

export default TeamDetail;
