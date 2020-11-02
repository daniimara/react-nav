import React from "react";
import { Theme, Container, makeStyles, createStyles } from "@material-ui/core";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: theme.palette.grey[200],
      textAlign: "center",
      padding: 20
    }
  })
);

export const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Copyright />
    </Container>
  );
};

export default Footer;
