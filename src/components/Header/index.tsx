import React from "react";
import { Link } from "react-router-dom";
import {
  Theme,
  makeStyles,
  createStyles,
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.grey[300]
    },
    nav: {
      width: "100%",
      padding: "20px 0px"
    }
  })
);

// The Header creates links that can be used to navigate
// between routes.
export const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <header>
        <nav className={classes.nav}>
          <Grid container direction="row" spacing={3}>
            <Grid item>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item>
              <Link to="/roster">Roster</Link>
            </Grid>
            <Grid item>
              <Link to="/schedule">Schedule</Link>
            </Grid>
          </Grid>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
