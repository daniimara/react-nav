import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: "#F3F3F3"
    },
    nav: {
      width: "100%",
      "& ul": {
        display: "flex",
        flexDirection: "row",
        listStyleType: "none",
        "& li": {
          padding: 10
        }
      }
    }
  })
);

// The Header creates links that can be used to navigate
// between routes.
export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {/* <Link color="inherit" href="/">
          <Typography variant="caption">Home</Typography>
        </Link>
        <Link color="inherit" href="/roster">
          <Typography variant="caption">Roster</Typography>
        </Link>
        <Link color="inherit" href="/schedule">
          <Typography variant="caption">Schedule</Typography>
        </Link> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
