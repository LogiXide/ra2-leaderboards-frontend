import * as yup from 'yup';

const mapSchema = yup.object().shape({
  name: yup.string().required('Map name is required'),
  author: yup.string().required('Author is required'),
  imageUrl: yup.string().required('Image URL is required'),
  spots: yup
    .number()
    .typeError('Spots must be a number')
    .required('Spots is required'),
});

export { mapSchema };
