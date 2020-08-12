import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Main from '../pages/Main'

export default function AppRouter() {

    return (
        <Switch>
            <Route exact path="/" component={Main}/>

            <Redirect from="*" to="/" />
        </Switch>
    )
}
