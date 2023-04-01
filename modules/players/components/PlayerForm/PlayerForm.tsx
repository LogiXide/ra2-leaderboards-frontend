import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/forms/fields';

type FormValuesType = {
  name: string;
};

type PropsType = {
  initialValues?: FormValuesType;
  onClose: () => void;
  onCreatePlayer?: (data: FormValuesType) => void;
  onUpdatePlayer?: (data: FormValuesType) => void;
};

const PlayerSchema = object().shape({
  name: string().required('Player name is required'),
});

const PlayerForm: React.FC<PropsType> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValuesType>({
    defaultValues: {
      name: props.initialValues?.name || '',
    },
    resolver: yupResolver(PlayerSchema),
  });

  useEffect(() => {
    reset({
      name: props.initialValues?.name,
    });
  }, [reset, props.initialValues?.name]);

  const onSubmit = useCallback(
    (data: FormValuesType) => {
      if (props.onCreatePlayer) {
        props.onCreatePlayer(data);

        props.onClose();
      }

      if (props.onUpdatePlayer) {
        props.onUpdatePlayer(data);
      }
    },
    [props]
  );

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: 1 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={1}>
        <TextField
          label="Name"
          control={control}
          name="name"
          errors={errors}
        />

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {props.onCreatePlayer && (
            <>
              <Button onClick={() => props.onClose()} sx={{ color: 'black' }}>
                Cancel
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </>
          )}

          {props.onUpdatePlayer && (
            <>
              <Link
                href="/players"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button sx={{ color: 'black' }}>Back</Button>
              </Link>

              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { PlayerForm };
