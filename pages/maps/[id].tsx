import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import { GET_MAP, UPDATE_MAP } from '@/modules/maps/api/maps';

import type {
  UpdateMapMutation,
  UpdateMapMutationVariables,
} from '@/src/generated/graphql';

type ITypeDataForm = {
  name: string;
  author: string;
  imageUrl: string;
  spots: number;
};

const MapDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(GET_MAP, {
    variables: {
      id: Number(id),
    },
  });

  const [dataForm, setDataForm] = useState<ITypeDataForm>({
    name: '',
    author: '',
    imageUrl: '',
    spots: 0,
  });

  useEffect(() => {
    if (data) {
      setDataForm({
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
  >(UPDATE_MAP);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMap({
      variables: {
        input: {
          name: dataForm.name,
          author: dataForm.author,
          imageUrl: dataForm.imageUrl,
          spots: Number(dataForm.spots),
        },

        id: Number(id),
      },
    });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <TextField
            name="spots"
            value={dataForm.spots}
            onChange={handleChangeInput}
            variant="filled"
            label="Spots"
            required
          />
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
