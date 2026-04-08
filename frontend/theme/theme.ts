import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },

  palette: {
    primary: {
      main: palette.pink[400],
    },

    secondary: {
      main: palette.navyBlue[400],
    },

    text: {
      primary: palette.text.heading,
      secondary: palette.text.body,
    },

    error: {
      main: palette.error.main,
    },

    background: {
      default: palette.common.white,
    },

    orange: palette.orange,
    yellow: palette.yellow,
    neutralBlue: palette.neutralBlue,
    violet: palette.violet,
    navyBlue: palette.navyBlue,
    pink: palette.pink,
    gray: palette.gray,
    blueSelected: palette.blueSelected,
  },

  /*typography,*/

  components: {
    ...components,

    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true,
      },

      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",

          [theme.breakpoints.up("sm")]: {
            maxWidth: 720,
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: 960,
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: 1200,
          },
          [theme.breakpoints.up("xl")]: {
            maxWidth: 1352,
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        }),
      },
    }
  },
});

theme = createTheme(theme, {
  typography: typography(theme),
});

export default theme;