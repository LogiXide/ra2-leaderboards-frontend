import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { TextFields } from '@/modules/core/components/TextFields';
import { SelectFields } from '@/modules/core/components/SelectFields';
import { CREATE_MAP } from '@/modules/maps/api/maps/mutations';
import { createMapSchema } from '@/modules/maps/schemas/maps/create-map';
import { CreateMapMutation, CreateMapMutationVariables } from '@/src/generated/graphql';

interface ITypeDataForm {
  name: string;
  spots: number | null;
  imageUrl: string;
  author: string;
}

interface ITypeProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CreateMapForm: React.FC<ITypeProps> = (props) => {
  const [createMapPool] = useMutation<CreateMapMutation, CreateMapMutationVariables>(CREATE_MAP);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ITypeDataForm>({
    defaultValues: {
      name: '',
      spots: null,
      author: '',
      imageUrl: '',
    },
    resolver: yupResolver(createMapSchema),
  });

  const onSubmit = (data: ITypeDataForm) => {
    console.log(data);
    createMapPool({
      variables: {
        input: {
          name: data.name,
          spots: Number(data.spots),
          imageUrl: data.imageUrl,
          author: data.author,
        },
      },
    });

    reset();

    if (!errors.name) {
      props.setOpen(false);
    }
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{ width: '100%', mt: 2 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="column">
        <TextFields
          control={control}
          errors={errors}
          name="name"
          label="Name"
        />
        <TextFields
          control={control}
          errors={errors}
          name="author"
          label="Author"
        />
        <TextFields
          control={control}
          errors={errors}
          name="imageUrl"
          label="Image"
        />
        <SelectFields
          control={control}
          errors={errors}
          name="spots"
          label="Spots"
        />

        <Stack justifyContent="flex-end" direction="row" spacing={2}>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Create
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export { CreateMapForm };
