import * as yup from 'yup';

const formSchema = yup.object().shape({
  login: yup.string().required('Login is required'),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, 'Password length must be more than 6 letters')
    .required('Email address is required'),
  age: yup.string().required(),
});

export { formSchema };
