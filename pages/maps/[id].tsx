import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { UPDATE_MAP } from '@/modules/maps/api/maps/mutations';
import { UpdateMapMutation, UpdateMapMutationVariables } from '@/src/generated/graphql';

const MapDetail: React.FC = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    author: '',
    imageUrl: '',
    spots: 1,
  });

  const router = useRouter();
  const [updateMap] = useMutation<UpdateMapMutation, UpdateMapMutationVariables>(UPDATE_MAP);

  const { id } = router.query;

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMap({
      variables: {
        input: {
          name: dataForm.name,
          author: dataForm.author,
          imageUrl: dataForm.imageUrl,
          spots: dataForm.spots,
        },

        id: Number(id),
      },
    });
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: '1rem' }}
      onSubmit={handleSubmit}
    >
      <Stack direction="column" spacing={1}>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <TextField
            name="name"
            value={dataForm.name}
            onChange={handleChangeInput}
            variant="filled"
            label="Name"
            required
          />
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <TextField
            name="author"
            value={dataForm.author}
            onChange={handleChangeInput}
            variant="filled"
            label="Author"
            required
          />
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <TextField
            name="imageUrl"
            value={dataForm.imageUrl}
            onChange={handleChangeInput}
            variant="filled"
            label="image URL"
            required
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <TextField
            name="spots"
            value={dataForm.spots}
            select
            label="Spots"
            required
            variant="filled"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </TextField>
        </FormControl>

        <Stack justifyContent="flex-end" direction="row">
          <Button type="submit" variant="outlined" color="primary">
            Update Map
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MapDetail;
