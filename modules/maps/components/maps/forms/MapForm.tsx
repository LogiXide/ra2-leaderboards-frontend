import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/TextField';
import { CREATE_MAP } from '@/modules/maps/api/maps/mutations';
import { mapSchema } from './map.schema';

import {
  CreateMapMutation,
  CreateMapMutationVariables,
} from '@/generated/graphql';

interface ITypeFormValues {
  name: string;
  imageUrl: string;
  author: string;
  spots: number;
}

type ITypeProps = {
  setOpen: (value: boolean) => void;
};

const MapForm: React.FC<ITypeProps> = (props) => {
  const [createMapPool] = useMutation<
    CreateMapMutation,
    CreateMapMutationVariables
  >(CREATE_MAP);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ITypeFormValues>({
    defaultValues: {
      name: '',
      author: '',
      imageUrl: '',
      spots: 0,
    },
    resolver: yupResolver(mapSchema),
  });

  const onSubmit = (data: ITypeFormValues) => {
    createMapPool({
      variables: {
        input: {
          name: data.name,
          spots: Number(data.spots),
          imageUrl: data.imageUrl,
          author: data.author,
        },
      },
    });

    reset();

    if (!errors.name) {
      props.setOpen(false);
    }
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: 2 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column">
        <TextField control={control} errors={errors} name="name" label="Name" />
        <TextField
          control={control}
          errors={errors}
          name="author"
          label="Author"
        />
        <TextField
          control={control}
          errors={errors}
          name="imageUrl"
          label="Image"
        />

        <TextField
          control={control}
          errors={errors}
          name="spots"
          label="Spots"
        />

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Create
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export { MapForm };
