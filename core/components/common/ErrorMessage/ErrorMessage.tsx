import { Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

type PropsType = {
  message: string;
};

const ErrorMessage: React.FC<PropsType> = (props) => {
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
