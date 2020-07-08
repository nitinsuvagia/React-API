import React, { Component } from 'react'
// import logo from '../assets/img/logo-black.png';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Sidebar extends Component {

    render() {
        return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <Link to="/">
                        <div className="logo">
                            LOGO
                        </div>
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <List>
                        <li>
                            <ListItem button component={Link} to="/">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} to="/user-list">
                                <ListItemText primary="User" />
                            </ListItem>
                            <ListItem button component={Link} to="/tasks-list">
                                <ListItemText primary="Tasks" />
                            </ListItem>
                        </li>
                    </List>
                </div>
            </div>
        </div>
        )
    }
}