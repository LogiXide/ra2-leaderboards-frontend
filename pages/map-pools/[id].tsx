import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMapPool({
      variables: {
        input: {
          name: valueForm,
        },

        id: Number(id),
      },
    });
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValueForm(e.target.value);
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: '1rem' }}
      onSubmit={handleSubmit}
    >
      <Stack direction="column" spacing={1}>
        <FormControl fullWidth sx={{ mb: '15px' }}>
          <TextField
            value={valueForm}
            onChange={handleChangeInput}
            variant="filled"
            label="Name Map Pool"
            required
          />
        </FormControl>

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          <Button type="submit" variant="outlined" color="primary">
            Update Map Pool
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MapPoolDetail;
