import { createMuiTheme } from "@material-ui/core/styles";

import "./index.css";

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
  }
});

export default theme;
