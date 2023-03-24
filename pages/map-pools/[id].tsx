import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import Box from '@mui/material/Box';

import { MapPoolForm } from '@/modules/maps/components/mapPools/forms/MapPoolForm';
import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

import {
  UpdateMapPoolDocument,
  UpdateMapPoolMutation,
  UpdateMapPoolMutationVariables,
} from '@/generated/graphql';

const MapPoolDetail = () => {
  const [valueForm, setValueForm] = useState<string>('');
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
      setValueForm(data.mapPool.name);
    }
  }, [data]);

  const [updateMapPool] = useMutation<
    UpdateMapPoolMutation,
    UpdateMapPoolMutationVariables
  >(UpdateMapPoolDocument);

  const handleUpdateMapPool = (data: { mapPoolName: string }) => {
    updateMapPool({
      variables: {
        input: {
          name: data.mapPoolName,
        },

        id: Number(id),
      },
    });
  };

  return (
    <Box mt={2}>
      <MapPoolForm
        handleUpdateMapPool={handleUpdateMapPool}
        valueForm={valueForm}
        setOpen={() => null}
      />
    </Box>
  );
};

export default MapPoolDetail;
