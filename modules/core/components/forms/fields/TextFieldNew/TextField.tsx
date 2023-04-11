import MUITextField from '@mui/material/TextField';

import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

type PropsType = {
  variant: 'standard' | 'filled' | 'outlined' | undefined;
  fieldState: ControllerFieldState;
} & ControllerRenderProps;

export const TextField: React.FC<PropsType> = (props) => {
  const { variant, fieldState, ...field } = props;

  return (
    <MUITextField
      required
      variant={variant}
      label={field.name}
      error={!!fieldState?.error}
      helperText={fieldState.error?.message}
      sx={{ textTransform: 'capitalize' }}
      {...field}
    />
  );
};
