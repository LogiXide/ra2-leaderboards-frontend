import * as yup from 'yup';

const createMapPoolSchema = yup.object().shape({
  mapPoolName: yup.string().required('Map pool name is required'),
});

export { createMapPoolSchema };
