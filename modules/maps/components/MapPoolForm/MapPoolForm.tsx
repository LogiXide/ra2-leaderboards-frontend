import { useCallback, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import { Box, Button, Stack, TextField } from '@mui/material';

import { MapPoolMaps } from '@/modules/core/components/common';

type FieldType = {
  id: number;
  name: string;
  checked: boolean;
};

type FormValuesType = {
  name: string;
  maps: { id: number; name: string; checked: boolean }[];
};

type PropsType = {
  type: 'create' | 'update';
  defaultValues?: FormValuesType;
  onSubmit: (values: FormValuesType) => void;
};

const schema = yup.object().shape({
  name: yup.string().required('Required'),
});

const MapPoolForm: React.FC<PropsType> = (props) => {
  const { defaultValues, type, onSubmit } = props;

  const { handleSubmit, control, reset } = useForm<FormValuesType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'maps',
  });

  // https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect
  useEffect(() => {
    reset({
      name: defaultValues?.name,
      maps: defaultValues?.maps,
    });
  }, [reset, defaultValues]);

  const onSubmitForm = useCallback(
    (values: FormValuesType) => {
      onSubmit(values);
    },

    [onSubmit]
  );

  const onSelectField = (field: FieldType) => {
    const checkField = fields.some((f) => f.name === field.name);

    if (!checkField) {
      const newField = {
        id: field.id,
        name: field.name,
        checked: true,
      };

      append(newField);
    }
  };

  const onRemoveField = (field: FieldType) => {
    console.log('remove field', field);
    remove(field.id);
  };

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
            <TextField
              required
              label={field.name}
              error={!!fieldState?.error}
              helperText={fieldState.error?.message}
              {...field}
              sx={{ textTransform: 'capitalize' }}
            />
          )}
        />

        {type === 'update' && (
          <Controller
            name="maps"
            control={control}
            render={({ field }) => (
              <MapPoolMaps
                fields={fields}
                onSelectField={onSelectField}
                onRemoveField={onRemoveField}
                {...field}
              />
            )}
          />
        )}

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {type === 'create' ? (
            <Button sx={{ color: 'black' }}>Cancel</Button>
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
