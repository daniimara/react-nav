import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FullRoster from "./pages/FullRoster";
import Player from "./pages/Player";
import Schedule from "./pages/Schedule";

export interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/detail" component={Player} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </main>
  );
};

export default Router;
