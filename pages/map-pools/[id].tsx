import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box, Stack } from '@mui/material';

import { showNotifyMessage } from '@/modules/core/utils';
import { MapPoolForm } from '@/modules/maps/components';
import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

import { SearchBar } from '@/modules/core/components/common/SearchBar/SearchBar';

import {
  UpdateMapPoolDocument,
  UpdateMapPoolMutation,
  UpdateMapPoolMutationVariables,
} from '@/generated/graphql';

type FormValuesType = {
  name: string;
};

const MapPoolDetail = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
  });
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(GET_MAP_POOL, {
    variables: {
      id: Number(id),
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data.mapPool.name,
      });
    }
  }, [data]);

  const [updateMapPool] = useMutation<
    UpdateMapPoolMutation,
    UpdateMapPoolMutationVariables
  >(UpdateMapPoolDocument);

  const handleUpdateMapPool = (data: { name: string }) => {
    updateMapPool({
      variables: {
        input: {
          name: data.name,
        },

        id: Number(id),
      },
    });

    showNotifyMessage('Map Pool updated!', 'success');
  };

  return (
    <Box mt={2}>
      <MapPoolForm
        onUpdateMapPool={handleUpdateMapPool}
        initialValues={formValues}
        onClose={() => null}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        spacing={5}
        mt={5}
      >
        <SearchBar />
      </Stack>
    </Box>
  );
};

export default MapPoolDetail;
