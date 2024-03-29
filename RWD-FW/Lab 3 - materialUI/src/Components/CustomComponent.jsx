import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default function CustomComponent() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Movie Details</MyThemeComponent>
    </ThemeProvider>
  );
}