import React, { Component } from 'react'
import { Button } from '@material-ui/core';

import '../assets/css/login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div  className="hvr-div hvr-wobble-horizontal"></div>
                <div>
                        <div className="login-logo">LOGO</div>
                        <div className="login-content">
                            <div className="login-area">Already Signed up?</div>
                            <div>Login your to your account so you continue building<br/>
                                and editing your onboarding flows.</div>
                            <div>
                                <Button variant="login-button outlined">LOG IN</Button>
                            </div>
                        </div>
                    <div></div>
                </div>
            </div>
        );
    }
}
