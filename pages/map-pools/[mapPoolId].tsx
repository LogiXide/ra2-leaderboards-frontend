import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { MapPoolForm } from '@/modules/maps/components';

import {
  //  GetMapPoolDocument,
  //  GetMapPoolQuery,
  UpdateMapPoolDocument,
  UpdateMapPoolMutation,
  UpdateMapPoolMutationVariables,
} from '@/generated/graphql';

import { GET_MAP_POOL } from '@/modules/maps/api/mapPools';
import { Map } from '@/generated/graphql';

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

  const selectedMaps = useMemo(() => {
    const result: { id: number; name: string; checked: boolean }[] = [];

    data?.mapPool?.maps.forEach((it: Map) => {
      const newObj = {
        id: it.id,
        name: it.name,
        checked: true,
      };

      result.push(newObj);
    });

    return result;
  }, [data]);

  const convertDataToId = useMemo(() => {
    const result: number[] = [];

    data?.mapPool?.maps.forEach((it: Map) => {
      result.push(it.id);
    });

    return result;
  }, [data]);

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data?.mapPool?.name,
        mapIds: convertDataToId,
      });
    }
  }, [data]);

  const [updateMapPool] = useMutation<
    UpdateMapPoolMutation,
    UpdateMapPoolMutationVariables
  >(UpdateMapPoolDocument);

  const handleUpdateMapPool = (values: { name: string; mapIds: number[] }) => {
    updateMapPool({
      variables: {
        input: {
          name: values.name,
          mapIds: values.mapIds,
        },

        id: mapPoolId,
      },
    });
  };

  return (
    <Box mt={2}>
      <MapPoolForm
        type="update"
        onSubmit={handleUpdateMapPool}
        initialValues={formValues}
        selectedMaps={selectedMaps}
      />
    </Box>
  );
};

export default MapPoolDetail;
