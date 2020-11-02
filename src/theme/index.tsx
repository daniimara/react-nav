import { createMuiTheme } from "@material-ui/core/styles";
import { FONT_BARON_SANS, FONT_MEDIUM } from "../utils/constants";
import "./index.css";

const defaultTheme = createMuiTheme({
  typography: {
    htmlFontSize: 12
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
});

export default theme;
