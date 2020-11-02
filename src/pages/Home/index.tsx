import { Container, Typography } from "@material-ui/core";
import React, { CSSProperties, FC } from "react";

export interface AppProps {
  rootStyle?: CSSProperties;
}

export const Home: FC<AppProps> = ({ children, rootStyle }) => {
  return (
    <Container style={{ ...rootStyle }}>
      <Typography variant="h1" component="h1">
        Home
      </Typography>
      {children}
    </Container>
  );
};

Home.defaultProps = {
  rootStyle: {
    marginTop: 0
  }
};

export default Home;
