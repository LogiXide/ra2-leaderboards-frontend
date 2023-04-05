import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box, Stack } from '@mui/material';

import { showNotifyMessage } from '@/modules/core/utils';
import { MapPoolForm } from '@/modules/maps/components';
import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';

import { SearchMapList } from '@/modules/core/components/common/SearchMapList';
import { SelectedMapList } from '@/modules/core/components/common/SelectedMapList';

import {
  GetMapPoolDocument,
  GetMapPoolQuery,
  UpdateMapPoolDocument,
  UpdateMapPoolMutation,
  UpdateMapPoolMutationVariables,
} from '@/generated/graphql';

import type { FormValuesType } from '@/modules/maps/components';

const MapPoolDetail: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
  });

  const router = useRouter();

  const mapPoolId = parseInt(router.query.id as string, 10);

  const { data } = useQuery<GetMapPoolQuery>(GetMapPoolDocument, {
    variables: {
      id: mapPoolId,
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data?.mapPool?.name || '',
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

      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        spacing={5}
        mt={5}
      >
        <SearchMapList />
        <SelectedMapList maps={data?.mapPool?.maps || []} />
      </Stack>
    </Box>
  );
};

export default MapPoolDetail;
