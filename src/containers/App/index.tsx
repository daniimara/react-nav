import React, { FC, CSSProperties } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export interface AppProps {
  rootStyle?: CSSProperties;
}

export const App: FC<AppProps> = ({ children, rootStyle }) => {
  return (
    <div style={{ ...rootStyle }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

App.defaultProps = {
  rootStyle: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  }
};

export default App;
