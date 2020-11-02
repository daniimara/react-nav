import { createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import propsFactory from "./props";
import {
  FONT_BARON_SANS,
  FONT_MEDIUM,
  BREAKPOINT_XS,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL
} from "../utils/constants";

const defaultTheme = createMuiTheme({
  typography: {
    htmlFontSize: 12
  },
  breakpoints: {
    values: {
      xs: BREAKPOINT_XS,
      sm: BREAKPOINT_SM,
      md: BREAKPOINT_MD,
      lg: BREAKPOINT_LG,
      xl: BREAKPOINT_XL
    }
  }
});

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: "#ffebee"
    },
    background: {
      default: "#fff"
    }
  },
  props: propsFactory(defaultTheme),
  breakpoints: defaultTheme.breakpoints,
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none"
      },
      colorDefault: {
        backgroundColor: defaultTheme.palette.background.paper
      }
    },
    MuiContainer: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        [defaultTheme.breakpoints.up("sm")]: {
          paddingLeft: 30,
          paddingRight: 30
        },
        [defaultTheme.breakpoints.up("md")]: {
          paddingLeft: 50,
          paddingRight: 50
        },
        [defaultTheme.breakpoints.up("lg")]: {
          paddingLeft: 40,
          paddingRight: 40
        },
        [defaultTheme.breakpoints.up("xl")]: {
          paddingLeft: 90,
          paddingRight: 90
        }
      }
    },
    MuiTypography: {
      h4: {
        fontFamily: FONT_BARON_SANS,
        fontWeight: FONT_MEDIUM,
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: defaultTheme.typography.pxToRem(24),
        color: "#000000",
        letterSpacing: 1
      }
    }
  }
});

export default theme;
