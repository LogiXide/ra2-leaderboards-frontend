import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Typography,
} from '@mui/material';

import styles from './Header.module.css';

const Header: React.FC = (): JSX.Element => {
  return (
    <Toolbar
      sx={{
        backgroundColor: '#0b0d12',
        padding: '25px 20px',
      }}
    >
      <Container>
        <Box>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
            }}
          >
            <Grid>
              <Typography component="h1" variant="h4" fontWeight="600">
                Red-Alert 2
              </Typography>
            </Grid>
            <Grid>Locale</Grid>
          </Toolbar>
        </Box>
      </Container>
    </Toolbar>
  );
};

export { Header };
