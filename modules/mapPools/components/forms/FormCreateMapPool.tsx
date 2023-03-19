import { useRef, useEffect } from 'react';
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

import { CREATE_MAP_POOL } from '../../api/mutations/createMapPool';
import { createMapPoolSchema } from '@/modules/mapPools/schemas/createMapPoolSchema';

interface ITypeDataForm {
  mapPoolName: string;
}

interface ITypeProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

const FormCreateMapPool: React.FC<ITypeProps> = (props) => {
  const [createMapPool] = useMutation(CREATE_MAP_POOL);
  const inputRef = useRef<HTMLInputElement>();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ITypeDataForm>({
    defaultValues: {
      mapPoolName: '',
    },
    resolver: yupResolver(createMapPoolSchema),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [props.open]);

  const onSubmit = (data: ITypeDataForm) => {
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

  const handleClose = () => props.setOpen(false);

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: '1rem' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column" spacing={1}>
        <FormControl fullWidth sx={{ mb: '15px' }}>
          <Controller
            name="mapPoolName"
            control={control}
            render={({ field }) => (
              <TextField
                inputRef={inputRef}
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
                gap: '5px',
                mt: '6px',
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

export default FormCreateMapPool;
