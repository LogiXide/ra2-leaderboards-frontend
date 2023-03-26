import { Roboto } from '@next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, teal } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const base = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: teal[400],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

const theme = responsiveFontSizes(base);

export { theme, roboto };
