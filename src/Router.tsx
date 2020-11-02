import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";

export interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </main>
  );
};

export default Router;
