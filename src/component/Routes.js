import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

export default function AppRouter() {

    return (
        <Switch>
            <Route exact path="/" />
        </Switch>
    )
}
