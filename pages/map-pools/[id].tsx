import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { MapPoolForm } from '@/modules/maps/components/mapPools/forms';
import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

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
    // TODO: GetMapPoolsDocument return Array ... ??
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
  };

  return (
    <Box mt={2}>
      <MapPoolForm
        onUpdateMapPool={handleUpdateMapPool}
        initialValues={formValues}
        onClose={() => null}
      />
    </Box>
  );
};

export default MapPoolDetail;
