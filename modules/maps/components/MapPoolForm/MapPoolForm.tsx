import { useCallback, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import { Box, Button, Stack } from '@mui/material';


import { TextField } from '@/modules/core/components/forms/fields/TextFieldNew/TextField';
import { MapPoolMaps } from '@/modules/core/components/common';

type FormValuesType = {
  name: string;
  mapIds: number[] | [];
};

type PropsType = {
  type: 'create' | 'update';
  initialValues?: FormValuesType;
  selectedMaps?: { id: number; name: string; checked: boolean }[];
  onCancel?: () => void;
  onSubmit: (values: FormValuesType) => void;
};

const schema = yup.object().shape({
  name: yup.string().required('Required'),
});

const MapPoolForm: React.FC<PropsType> = (props) => {
  const { initialValues, selectedMaps, type, onSubmit, onCancel} = props;

  const { handleSubmit, control, reset } = useForm<FormValuesType>({
    defaultValues: {
      name: initialValues?.name || '',
      mapIds: initialValues?.mapIds || [],
    },

    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({
      name: initialValues?.name,
      mapIds: initialValues?.mapIds,
    });
  }, [reset, initialValues]);

  const onSubmitForm = useCallback(
    (values: FormValuesType) => {
      if (type === 'create' && onCancel) {
        onSubmit(values);

        onCancel();
      }

      if (type === 'update') {
        onSubmit(values);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onSubmit]
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
      noValidate
      autoComplete="off"
      sx={{ width: '100%' }}
    >
      <Stack direction="column" spacing={1}>
        <Controller
          name="name"
          control={control}
          render={({ fieldState, field }) => (
            <TextField variant="standard" fieldState={fieldState} {...field} />
          )}
        />

        {type === 'update' && <MapPoolMaps selectedMaps={selectedMaps || []} />}

        {/*TODO: refactor for buttons */}
        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {onCancel ? (
            <Button onClick={() => onCancel()} sx={{ color: 'black' }}>
              Cancel
            </Button>
          ) : (
            <Link
              href="/map-pools"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button sx={{ color: 'black' }}>Back</Button>
            </Link>
          )}

          <Button type="submit" variant="contained" color="primary">
            {type === 'create' ? 'Create' : 'Update'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export { MapPoolForm };
