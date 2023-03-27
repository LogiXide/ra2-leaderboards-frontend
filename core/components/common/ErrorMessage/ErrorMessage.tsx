import { Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

type TypeProps = {
  message: string;
};

const ErrorMessage: React.FC<TypeProps> = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
      <ErrorIcon color="error" sx={{ width: 20 }} />
      <Typography color="error.main" variant="body1" fontSize="14px">
        {props.message}
      </Typography>
    </Box>
  );
};

export { ErrorMessage };
