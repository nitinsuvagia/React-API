import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

export default class Header extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <Grid container>
                    <Grid item xs={8}>
                        <IconButton onClick={this.props.onClick}>
                            <FullscreenIcon fontSize="large" />
                        </IconButton>
                        {/* <FullScreenContext.Provider value={this.state.isFull}>
                        </FullScreenContext.Provider> 
                        <div>
                            <span color={"Red"}>Hi! This may cover the entire monitor.</span>
                        </div>*/}
                    </Grid>
                    <Grid item xs={4}>
                        Welcome, Nitin
                    </Grid>
                </Grid>
            </div>
        )
    }
}
