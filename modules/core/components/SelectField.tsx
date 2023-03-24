import { Controller } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import ErrorMessage from './ErrorMessage';

interface ITypeProps {
  label: string;
  control: any;
  name: string;
  errors: any;
}

const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

const SelectField: React.FC<ITypeProps> = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <TextField
            select
            label={props.label}
            required
            variant="filled"
            {...addErrorIntoField(props.errors[props.name])}
            {...field}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </TextField>
        )}
      />

      {props.errors[props.name] && (
        <ErrorMessage message={props.errors[props.name].message} />
      )}
    </FormControl>
  );
};

export { SelectField };
