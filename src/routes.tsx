import { Router, Route } from "preact-router";

import Home from "./home";

const Routes = () => (
  <Router>
    <Route path="/" component={Home} />

    <Route default component={Home} />
  </Router>
);

export default Routes;
