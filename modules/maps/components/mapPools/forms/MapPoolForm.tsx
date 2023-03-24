import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/TextField';

import { mapPoolSchema } from './mapPool.schema';

type ITypeFormValues = {
  mapPoolName: string;
};

type ITypeProps = {
  handleCreateMapPool?: (data: ITypeFormValues) => void;
  handleUpdateMapPool?: (data: ITypeFormValues) => void;
  setOpen: (value: boolean) => void;
  valueForm?: string;
};

const MapPoolForm: React.FC<ITypeProps> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ITypeFormValues>({
    defaultValues: {
      mapPoolName: props.valueForm || '',
    },
    resolver: yupResolver(mapPoolSchema),
  });

  useEffect(() => {
    reset({
      mapPoolName: props.valueForm,
    });
  }, [reset, props.valueForm]);

  const onSubmit = (data: ITypeFormValues) => {
    if (props.handleCreateMapPool) {
      props.handleCreateMapPool(data);

      props.setOpen(false);
    }

    if (props.handleUpdateMapPool) {
      props.handleUpdateMapPool(data);
    }
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: 1 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={1}>
        <TextField
          label="Name Map Pool"
          control={control}
          name="mapPoolName"
          errors={errors}
        />

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {props.handleCreateMapPool && (
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

          {props.handleUpdateMapPool && (
            <>
              <Link
                href="/maps"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button sx={{ color: 'black' }}>Back</Button>
              </Link>
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

export { MapPoolForm };
