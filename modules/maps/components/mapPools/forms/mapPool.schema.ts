import * as yup from 'yup';

const mapPoolSchema = yup.object().shape({
  mapPoolName: yup.string().required('Map pool name is required'),
});

export { mapPoolSchema };
