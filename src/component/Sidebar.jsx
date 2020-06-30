import React, { Component } from 'react'
import logo from '../assets/img/logo.png';
import { BrowserRouter as Router, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Page from './Page';

export default class Sidebar extends Component {

    render() {
        return (
        <Router>
            <div className="sidebar-wrapper">
                <div>
                    <img src={logo} className="logo" alt="logo"></img>
                </div>
                <div>
                    <List>
                        <li>
                            <ListItem button component={Link} to="/">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} to="/user-list">
                                <ListItemText primary="User" />
                            </ListItem>
                        </li>
                    </List>
                </div>
                <div className="bottom">
                    <BottomNavigation showLabels >
                        <BottomNavigationAction href='http://www.softqubes.com' target="_blank" label="Website" icon={<PublicIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    </BottomNavigation>
                </div>
            </div>
            <Page></Page>
        </Router>
        )
    }
}