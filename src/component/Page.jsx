import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import UserList from './UserList'
import Dashboard from './Dashboard'
import Header from './Header'
// import Login from './Login';
import StickyNotes from './StickyNotes';

export default class Page extends Component {

    render() {
        return (
            <div className="main-panel">
                <div>
                    <Header onClick={this.props.onClick}></Header>
                </div>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route path="/user-list">
                            <UserList></UserList>
                        </Route>
                        <Route path="/tasks-list">
                            <StickyNotes></StickyNotes>
                        </Route>
                    </Switch>
                    <div className="bottom copyright mt10">
                        &copy; 2020, all rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp; 
                        <a href="http://www.softqubes.com" target="_blank" rel="noopener noreferrer">Softqube Technologies Private Limited</a>
                    </div>
                </div>
            </div>
        )
    }
}
