import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';

interface ITypeProps {
  message: string;
}

const ErrorMessage: React.FC<ITypeProps> = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
      <ErrorIcon color="error" sx={{ width: '20px' }} />
      <Typography color="error.main" variant="body1" fontSize="14px">
        {props.message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
