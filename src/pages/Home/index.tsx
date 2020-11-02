import React, { CSSProperties, FC } from "react";
import { Button } from "@material-ui/core";

export interface AppProps {
  rootStyle?: CSSProperties;
}

export const Home: FC<AppProps> = ({ children, rootStyle }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button color="primary">Hello World</Button>
    </div>
  );
};

export default Home;
