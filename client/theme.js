import { createMuiTheme } from '@material-ui/core/styles';
import { teal, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#81c784',
      main: '#388e3c',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcc80',
      main: '#ef6c00',
      dark: '#e65100',
      contrastText: '#fff',
    },
    openTitle: teal['500'],
    protectedTitle: orange['300'],
    type: 'light',
  },
});

export default theme;
