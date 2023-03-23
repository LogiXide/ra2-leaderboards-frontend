import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { CREATE_MAP_POOL } from '@/modules/maps/api/mapPools/mutations';
import { createMapPoolSchema } from '@/modules/maps/schemas/mapPools/create-map-pool';
import {
  CreateMapPoolMutation,
  CreateMapPoolMutationVariables,
} from '@/generated/graphql';

interface ITypeFormValues {
  mapPoolName: string;
}

interface ITypeProps {
  setOpen: (value: boolean) => void;
}

const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

const MapPoolForm: React.FC<ITypeProps> = (props) => {
  const [createMapPool] = useMutation<
    CreateMapPoolMutation,
    CreateMapPoolMutationVariables
  >(CREATE_MAP_POOL);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ITypeFormValues>({
    defaultValues: {
      mapPoolName: '',
    },
    resolver: yupResolver(createMapPoolSchema),
  });

  const onSubmit = (data: ITypeFormValues) => {
    createMapPool({
      variables: {
        input: {
          name: data.mapPoolName,
        },
      },
    });

    reset();

    if (!errors.mapPoolName) {
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
      sx={{ width: '100%', mt: 1 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={1}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="mapPoolName"
            control={control}
            render={({ field }) => (
              <TextField
                variant="filled"
                label="Name Map Pool"
                required
                {...addErrorIntoField(errors.mapPoolName)}
                {...field}
              />
            )}
          />
          {errors.mapPoolName && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mt: 1,
              }}
            >
              <ErrorIcon color="error" sx={{ width: '20px' }} />
              <Typography color="error.main" variant="body1" fontSize="14px">
                {errors.mapPoolName.message}
              </Typography>
            </Box>
          )}
        </FormControl>

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

export { MapPoolForm };
