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

import { ItemType } from '@/modules/core/components/common';

type FormValuesType = {
  name: string;
  maps: ItemType[];
};

const convertDataToFields = (data: ItemType[]) => {
  return data.map((it: ItemType) => ({
    id: it.id,
    name: it.name,
    checked: true,
  }));
};

const MapPoolDetail: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: '',
    maps: [],
  });

  const router = useRouter();

  const mapPoolId = parseInt(router.query.mapPoolId as string, 10);

  const { data } = useQuery(GET_MAP_POOL, {
    variables: {
      id: mapPoolId,
    },
  });

  const selectedItems = useMemo(() => {
    return convertDataToFields(data?.mapPool?.maps || []);
  }, [data?.mapPool?.maps]);

  useEffect(() => {
    if (data?.mapPool?.name) {
      setFormValues({
        name: data?.mapPool?.name,
        maps: selectedItems,
      });
    }
  }, [data?.mapPool?.name, selectedItems]);

  const [updateMapPool] = useMutation<
    UpdateMapPoolMutation,
    UpdateMapPoolMutationVariables
  >(UpdateMapPoolDocument);

  const handleUpdateMapPool = (values: FormValuesType) => {
    const mapIds: number[] = [];

    values.maps.forEach((map) => {
      mapIds.push(map.id);
    });

    updateMapPool({
      variables: {
        input: {
          name: values.name,
          mapIds,
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
        defaultValues={formValues}
      />
    </Box>
  );
};

export default MapPoolDetail;
