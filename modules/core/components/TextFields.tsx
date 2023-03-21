import { Controller } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ErrorMessage from './ErrorMessage';

interface ITypeProps {
  label: string;
  control: any;
  name: string;
  errors: any;
}

const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

const TextFields: React.FC<ITypeProps> = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <TextField
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

export { TextFields };
