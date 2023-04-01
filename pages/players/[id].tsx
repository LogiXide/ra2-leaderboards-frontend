import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { PlayerForm } from '@/modules/players/components';
import { GET_PLAYER } from '@/modules/players/api/players';

import {
  UpdatePlayerDocument,
  UpdatePlayerMutation,
  UpdatePlayerMutationVariables,
} from '@/generated/graphql';

type FormValuesType = {
  name: string;
};

const PlayerDetail = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
  });
  const router = useRouter();

  const playerId = parseInt(router.query.id as string, 10);

  const { data } = useQuery(GET_PLAYER, {
    variables: {
      id: playerId,
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data.player.name,
      });
    }
  }, [data]);

  const [updatePlayer] = useMutation<
    UpdatePlayerMutation,
    UpdatePlayerMutationVariables
  >(UpdatePlayerDocument);

  const handleUpdatePlayer = (data: { name: string }) => {
    updatePlayer({
      variables: {
        input: {
          name: data.name,
        },

        id: playerId,
      },
    });
  };

  return (
    <Box mt={2}>
      <PlayerForm
        onUpdatePlayer={handleUpdatePlayer}
        initialValues={formValues}
        onClose={() => null}
      />
    </Box>
  );
};

export default PlayerDetail;
