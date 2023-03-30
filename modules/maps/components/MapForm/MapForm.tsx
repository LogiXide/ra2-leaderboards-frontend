import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Stack } from '@mui/material';

import { TextField } from '@/modules/core/components/forms/fields';

type FormValuesType = {
  name: string;
  imageUrl: string;
  author: string;
  spots: number;
};

type PropsType = {
  valuesForm?: FormValuesType;
  onClose: () => void;
  onCreateMap?: (data: FormValuesType) => void;
  onUpdateMap?: (data: FormValuesType) => void;
};

const mapSchema = object().shape({
  name: string().required('Map name is required'),
  author: string().required('Author is required'),
  imageUrl: string().required('Image URL is required'),
  spots: number()
    .required('Spots is required')
    .typeError('Spots must be a number'),
});

const MapForm: React.FC<PropsType> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValuesType>({
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

  const onSubmit = useCallback(
    (values: FormValuesType) => {
      if (props.onCreateMap) {
        props.onCreateMap(values);

        props.onClose();
      }

      if (props.onUpdateMap) {
        props.onUpdateMap(values);
      }
    },
    [props]
  );

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

        <Stack justifyContent="flex-end" direction="row" spacing={3}>
          {props.onCreateMap && (
            <>
              <Button onClick={() => props.onClose()} sx={{ color: 'black' }}>
                Cancel
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </>
          )}

          {props.onUpdateMap && (
            <>
              <Link
                href="/maps"
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

export { MapForm };
