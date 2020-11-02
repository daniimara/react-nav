import React, { CSSProperties, FC } from "react";

export interface AppProps {
  rootStyle?: CSSProperties;
}

export const Home: FC<AppProps> = ({ children, rootStyle }) => {
  return (
    <div style={{ ...rootStyle }}>
      <h1>Home</h1>
    </div>
  );
};

Home.defaultProps = {
  rootStyle: {
    marginTop: 0
  }
};

export default Home;
