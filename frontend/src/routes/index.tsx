import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Routes;