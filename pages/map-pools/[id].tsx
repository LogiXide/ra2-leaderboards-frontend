import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { showNotifyMessage } from '@/modules/core/utils';
import { MapPoolForm } from '@/modules/maps/components';

import {
  GetMapPoolDocument,
  GetMapPoolQuery,
  UpdateMapPoolDocument,
  UpdateMapPoolMutation,
  UpdateMapPoolMutationVariables,
} from '@/generated/graphql';

import type { FormValuesType } from '@/modules/maps/components';
import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

const MapPoolDetail: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
    maps: [],
  });

  const router = useRouter();

  const mapPoolId = parseInt(router.query.id as string, 10);

  const { data } = useQuery(GET_MAP_POOL, {
    variables: {
      id: mapPoolId,
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data?.mapPool?.name || '',
        maps: data?.mapPool?.maps || [],
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

        id: mapPoolId,
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
    </Box>
  );
};

export default MapPoolDetail;
