import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/forms/fields';

import { LinkButton } from '@/modules/core/components/common';

type FormValuesType = {
  name: string;
};

type PropsType = {
  initialValues?: FormValuesType;
  onClose: () => void;
  onCreateTeam?: (data: FormValuesType) => void;
  onUpdateTeam?: (data: FormValuesType) => void;
};

const TeamSchema = object().shape({
  name: string().required('Team name is required'),
});

const TeamForm: React.FC<PropsType> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValuesType>({
    defaultValues: {
      name: props.initialValues?.name || '',
    },
    resolver: yupResolver(TeamSchema),
  });

  useEffect(() => {
    reset({
      name: props.initialValues?.name,
    });
  }, [reset, props.initialValues?.name]);

  const onSubmit = useCallback(
    (data: FormValuesType) => {
      if (props.onCreateTeam) {
        props.onCreateTeam(data);

        props.onClose();
      }

      props.onUpdateTeam?.(data);
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
        <TextField label="Name" control={control} name="name" errors={errors} />

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {props.onCreateTeam && (
            <>
              <Button onClick={() => props.onClose()} sx={{ color: 'black' }}>
                Cancel
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </>
          )}

          {props.onUpdateTeam && (
            <>
              <LinkButton text="Back" href="/teams" />

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

export { TeamForm };
