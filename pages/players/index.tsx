import { Stack, Typography } from '@mui/material';

const Players: React.FC = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="65vh"
    >
      <Typography variant="h1" component="h1">
        Players!
      </Typography>
    </Stack>
  );
};

export default Players;
