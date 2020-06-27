import React, { Component } from 'react'
import logo from '../assets/img/logo.png';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <div>
                    <img src={logo} className="logo" alt="logo"></img>
                </div>
            </div>
        )
    }
}