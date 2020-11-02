import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Provider from "./Provider";
import App from "./containers/App";
import Router from "./Router";

render(
  <Provider>
    <BrowserRouter>
      <App>
        <Router />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("spa-root")
);
