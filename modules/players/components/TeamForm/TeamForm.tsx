import { useCallback, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Link from 'next/link';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack, TextField } from '@mui/material';

import { ItemType } from '@/modules/core/components/common';
import { TeamPlayers } from '@/modules/core/components/common/TeamPlayers';

type FormValuesType = {
  name: string;
  players: ItemType[];
};

type PropsType = {
  type: 'create' | 'update';
  defaultValues?: FormValuesType;
  onSubmit: (values: FormValuesType) => void;
};

const schema = object().shape({
  name: string().required('Team name is required'),
});

const TeamForm: React.FC<PropsType> = (props) => {
  const { defaultValues, type, onSubmit } = props;

  const { handleSubmit, control, reset } = useForm<FormValuesType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, replace } = useFieldArray({
    control,
    keyName: '_',
    name: 'players',
  });

  // NOTE: https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect
  useEffect(() => {
    reset({
      name: defaultValues?.name,
      players: defaultValues?.players,
    });
  }, [reset, defaultValues]);

  const onChecked = useCallback(
    (item: ItemType, checked: boolean) => {
      if (checked) {
        const newFields = fields.filter((field) => field.id !== item.id);

        replace(newFields);
      } else if (!checked) {
        const newField = {
          id: item.id,
          name: item.name,
          checked: true,
        };

        append(newField);
      }
    },
    [fields, append, replace]
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
            />
          )}
        />

        {type === 'update' && (
          <Controller
            name="players"
            control={control}
            render={() => <TeamPlayers items={fields} onChecked={onChecked} />}
          />
        )}

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          {type === 'create' ? (
            <Button sx={{ color: 'black' }}>Cancel</Button>
          ) : (
            <Link
              href="/teams"
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

export { TeamForm };
