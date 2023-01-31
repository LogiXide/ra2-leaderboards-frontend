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
    <Container>
      <Box>
        <AppBar
          sx={{
            backgroundColor: '#0b0d12',
            padding: '25px 20px',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid>
              <Typography component="h1" variant="h4" fontWeight="600">
                Red-Alert 2
              </Typography>
            </Grid>
            <Grid>Locale</Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export { Header };
