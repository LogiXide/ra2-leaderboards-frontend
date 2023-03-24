import { Controller } from 'react-hook-form';

import { TextField as TextFieldMUI, FormControl } from '@mui/material';
import ErrorMessage from './ErrorMessage';

type ITypeProps = {
  label: string;
  control: any;
  name: string;
  errors: any;
};

const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

const TextField: React.FC<ITypeProps> = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <TextFieldMUI
            {...field}
            {...addErrorIntoField(props.errors[props.name])}
            label={props.label}
            required
            variant="filled"
          />
        )}
      />

      {props.errors[props.name] && (
        <ErrorMessage message={props.errors[props.name].message} />
      )}
    </FormControl>
  );
};

export { TextField };
