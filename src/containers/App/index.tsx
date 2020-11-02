import React, { FC, CSSProperties } from "react";
import Header from "../../components/Header";

export interface AppProps {
  rootStyle?: CSSProperties;
}

export const App: FC<AppProps> = ({ children, rootStyle }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
