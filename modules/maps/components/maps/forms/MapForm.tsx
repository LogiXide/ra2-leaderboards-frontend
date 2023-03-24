import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/TextField';
import { CREATE_MAP } from '@/modules/maps/api/maps/mutations';
import { mapSchema } from './map.schema';

import {
  CreateMapMutation,
  CreateMapMutationVariables,
} from '@/generated/graphql';

type ITypeFormValues = {
  name: string;
  imageUrl: string;
  author: string;
  spots: number;
};

type ITypeProps = {
  handleCreateMap?: (data: ITypeFormValues) => void;
  handleUpdateMap?: (data: ITypeFormValues) => void;
  setOpen: (value: boolean) => void;
  valuesForm?: {
    name: string;
    imageUrl: string;
    author: string;
    spots: number;
  };
};

const MapForm: React.FC<ITypeProps> = (props) => {
  const [createMap] = useMutation<
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
      name: props.valuesForm?.name || '',
      author: props.valuesForm?.author || '',
      imageUrl: props.valuesForm?.imageUrl || '',
      spots: props.valuesForm?.spots || 0,
    },
    resolver: yupResolver(mapSchema),
  });

  useEffect(() => {
    reset({
      name: props.valuesForm?.name,
      author: props.valuesForm?.author,
      imageUrl: props.valuesForm?.imageUrl,
      spots: props.valuesForm?.spots,
    });
  }, [reset, props.valuesForm]);

  const onSubmit = (data: ITypeFormValues) => {
    if (props.handleCreateMap) {
      console.log('create map');
      props.handleCreateMap(data);

      props.setOpen(false);
    }

    if (props.handleUpdateMap) {
      props.handleUpdateMap(data);
    }
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
          {props.handleCreateMap && (
            <>
              <Button
                onClick={() => props.setOpen(false)}
                variant="outlined"
                color="error"
              >
                Cancel
              </Button>
              <Button type="submit" variant="outlined" color="primary">
                Create
              </Button>
            </>
          )}

          {props.handleUpdateMap && (
            <>
              <Button>
                <Link
                  href="/maps"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Back
                </Link>
              </Button>
              <Button type="submit" variant="outlined" color="primary">
                Update
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { MapForm };
