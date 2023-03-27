import { Controller } from 'react-hook-form';

import { FormControl, TextField, MenuItem } from '@mui/material';

import { ErrorMessage } from '@/core/components/common';
import { addErrorIntoField } from '@/core/utils';

type PropsType = {
  label: string;
  control: any;
  name: string;
  errors: any;
};

const SelectField: React.FC<PropsType> = (props) => {
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
