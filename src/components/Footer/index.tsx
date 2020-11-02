import React from "react";
import { Container, makeStyles, createStyles } from "@material-ui/core";
import Copyright from "./Copyright";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: "#CCCCCC",
      color: "#000000",
      textAlign: "center",
      padding: 20
    }
  })
);

export const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Copyright />
    </Container>
  );
};

export default Footer;
