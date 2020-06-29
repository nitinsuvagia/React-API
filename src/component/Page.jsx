import React, { Component } from 'react'
import UserList from './UserList'

export default class Page extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <UserList></UserList>
            </div>
        )
    }
}
