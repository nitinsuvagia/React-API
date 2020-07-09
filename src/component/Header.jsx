import React, { Component } from 'react'
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = { userName: '' }
        this.GetUserName("NITIN");
    }

    GetUserName(name){
        Axios.get(`http://localhost:3001/api/greeting?name=${encodeURIComponent(name)}`)
        .then(response => {
            this.setState({userName: response.data.greeting});
        });
    }

    render() {
        
        return (
            <div className="navbar-fixed">
                <Grid container>
                    <Grid item xs={8}>
                        <IconButton onClick={this.props.onClick}>
                            <FullscreenIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        {this.state.userName}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
