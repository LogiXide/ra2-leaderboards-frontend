import { Controller } from 'react-hook-form';

import { TextField as MUITextField, FormControl } from '@mui/material';

import { ErrorMessage } from '@/core/components/common';
import { addErrorIntoField } from '@/core/utils';

type PropsType = {
  label: string;
  control: any;
  name: string;
  errors: any;
};

const TextField: React.FC<PropsType> = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <MUITextField
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
