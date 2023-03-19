/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { UPDATE_MAP_POOL } from '@/modules/mapPools/api/mutations/updateMapPool';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
} from '@mui/material';

const mapPoolsDetail = () => {
  const [updateMapPool] = useMutation(UPDATE_MAP_POOL);
  const [value, setValue] = useState('');
  const router = useRouter();

  const { id } = router.query;

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMapPool({
      variables: {
        input: {
          name: value,
        },

        id: Number(id),
      },
    });
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
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
            value={value}
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

export default mapPoolsDetail;