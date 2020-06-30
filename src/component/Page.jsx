import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import UserList from './UserList'
import Dashboard from './Dashboard'

export default class Page extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/user-list">
                        <UserList></UserList>
                    </Route>
                </Switch>
            </div>
        )
    }
}
