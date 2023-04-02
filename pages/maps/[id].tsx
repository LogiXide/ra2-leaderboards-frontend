import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { GET_MAP } from '@/modules/maps/api/maps';
import { MapForm } from '@/modules/maps/components';

import { showNotifyMessage } from '@/modules/core/utils';

import {
  UpdateMapDocument,
  UpdateMapMutation,
  UpdateMapMutationVariables,
} from '@/generated/graphql';

type FormValuesType = {
  name: string;
  author: string;
  imageUrl: string;
  spots: number;
};

const MapDetail: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
    author: '',
    imageUrl: '',
    spots: 0,
  });

  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(GET_MAP, {
    variables: {
      id: Number(id),
    },
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data.map.name,
        author: data.map.author,
        spots: data.map.spots,
        imageUrl: data.map.imageUrl,
      });
    }
  }, [data]);

  const [updateMap] = useMutation<
    UpdateMapMutation,
    UpdateMapMutationVariables
  >(UpdateMapDocument);

  const handleUpdateMap = (data: {
    name: string;
    author: string;
    imageUrl: string;
    spots: number;
  }) => {
    updateMap({
      variables: {
        input: {
          name: data.name,
          author: data.author,
          imageUrl: data.imageUrl,
          spots: Number(data.spots),
        },

        id: Number(id),
      },
    });

    showNotifyMessage('Map updated!', 'success');
  };

  return (
    <Box mt={2}>
      <MapForm
        onClose={() => null}
        valuesForm={formValues}
        onUpdateMap={handleUpdateMap}
      />
    </Box>
  );
};

export default MapDetail;
