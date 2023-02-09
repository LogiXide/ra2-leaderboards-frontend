import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button,
  Container,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Paper,
  FormHelperText,
} from '@mui/material';

import { formSchema } from '@/utils/schemas/formSchema';

interface ITypeDataForm {
  login: string;
  password: string;
  email: string;
  age: number;
  gender: string;
  remember: boolean;
}

const Form: React.FC = (): JSX.Element => {
  const { handleSubmit, control } = useForm<ITypeDataForm>({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });

  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ITypeDataForm> = (data) => console.log(data);

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'white',
          padding: '16px 24px 24px',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            render={({ field, formState }) => (
              <TextField
                {...field}
                margin="normal"
                size="small"
                label="Login"
                fullWidth={true}
                onChange={(event) => field.onChange(event)}
                value={field.value || ''}
                helperText={errors.login?.message}
                error={!!formState.errors.login}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, formState }) => (
              <TextField
                margin="normal"
                size="small"
                label="Email"
                fullWidth={true}
                onChange={(event) => field.onChange(event)}
                value={field.value || ''}
                helperText={errors.email?.message}
                error={!!formState.errors.email}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, formState }) => (
              <TextField
                margin="normal"
                size="small"
                label="Password"
                fullWidth={true}
                onChange={(event) => field.onChange(event)}
                value={field.value || ''}
                helperText={errors.password?.message}
                error={!!formState.errors.password}
              />
            )}
          />

          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <FormControl size="small" margin="normal" fullWidth={true}>
                <InputLabel id="age">Age</InputLabel>
                <Select
                  labelId="age"
                  id="age"
                  label="Age"
                  value={field.value || ''}
                  onChange={(event) => field.onChange(event)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <FormControl fullWidth={true} margin="normal">
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender"
                  defaultValue="male"
                  name="gender"
                  value={field.value || ''}
                  onChange={(event) => field.onChange(event)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />

                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />

                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="remember"
            render={({ field }) => (
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="remember"
                    control={
                      <Checkbox
                        checked={field.value || false}
                        onChange={(event) => field.onChange(event)}
                      />
                    }
                    label="Remember"
                  />
                </FormGroup>
              </FormControl>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            size="small"
            fullWidth={true}
            sx={{
              marginTop: 2,
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export { Form };
