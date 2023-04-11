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

import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

type FormValuesType = {
  name: string;
  mapIds: number[] | [];
};

const MapPoolDetail: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
    mapIds: [],
  });

  const router = useRouter();

  const mapPoolId = parseInt(router.query.mapPoolId as string, 10);

  const { data } = useQuery(GET_MAP_POOL, {
    variables: {
      id: mapPoolId,
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data?.mapPool?.name || '',
        mapIds: data?.mapPool?.maps || [],
      });
    }
  }, [data]);

  const [updateMapPool] = useMutation<
    UpdateMapPoolMutation,
    UpdateMapPoolMutationVariables
  >(UpdateMapPoolDocument);

  const handleUpdateMapPool = (values: FormValuesType) => {
    console.log(values);
    updateMapPool({
      variables: {
        input: {
          name: values.name,
          mapIds: values.mapIds,
        },

        id: mapPoolId,
      },
    });

    showNotifyMessage('Map Pool updated!', 'success');
  };

  return (
    <Box mt={2}>
      <MapPoolForm
        type="update"
        onSubmit={handleUpdateMapPool}
        initialValues={formValues}
      />
    </Box>
  );
};

export default MapPoolDetail;
