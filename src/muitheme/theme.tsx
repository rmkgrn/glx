import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#DC9202',
      light: '#DC9202',
      dark: '#DC9202',
      contrastText: '#DC9202'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#DAA520',
      main: '#DC9202',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#DC9202',
    },
    // error: will use the default color
   
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        color: 'pink', // Some CSS
      },
    },
    MuiIconButton: {
      root: {
        color: "pink"
      }
    },
    MuiInputBase: {

    },
    MuiSelect: {
      root: {
        color: "#DC9202",
        //backgroundColor: "#535353",
        
      },
      /*
      select: {
        color: "yellow",
        backgroundColor: "blue",

      }
      selectMenu: {
        color: "green"
      }*/
    },
  },
});

export const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#DC9202',
      light: '#DC9202',
      dark: '#DC9202',
      contrastText: '#DC9202'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#DAA520',
      main: '#DC9202',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#DC9202',
    },
    // error: will use the default color
   
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        color: 'pink', // Some CSS
      },
    },
    MuiIconButton: {
      root: {
        color: "pink"
      }
    },
    MuiInputBase: {

    },
    MuiSelect: {
      root: {
        color: "#DC9202",
        //backgroundColor: "#535353",
        
      },
      /*
      select: {
        color: "yellow",
        backgroundColor: "blue",

      }
      selectMenu: {
        color: "green"
      }*/
    },
  },
});


/**
 * | 'root'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'disabled'
  | 'label';
 * 
 *   | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  | 'filled'
  | 'outlined';
 * 
 * 
   color?: PropTypes.Color;
  component?: React.ReactType<ButtonProps>;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  mini?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'reset' | 'button';
  variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
 */