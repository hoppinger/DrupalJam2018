import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, RouteComponentProps } from 'react-router-dom'

import { Hello } from "./components/hello";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/(world|)" render={(props:RouteComponentProps<{}>) => <Hello message={"world!"} history={props.history} />} />
      <Route path="/everyone" render={(props:RouteComponentProps<{}>) => <Hello message={"everyone!"} history={props.history} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("react-root"))
