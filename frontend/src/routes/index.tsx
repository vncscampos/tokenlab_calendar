import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>
);

export default Routes;