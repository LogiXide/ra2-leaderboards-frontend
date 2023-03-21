import * as yup from 'yup';

const createMapSchema = yup.object().shape({
  name: yup.string().required('Map name is required'),
  author: yup.string().required('Author is required'),
  imageUrl: yup.string().required('Image URL is required'),
  spots: yup.string().required('Spots is required'),
});

export { createMapSchema };
