import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class User extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            // Assign Passed Parameter to current isOpen Variable
            isOpen: props.isOpen
        }
    }
    
    // Handle Close button to close Dialog
    handleClose = () => {
        this.setState({isOpen: false});
    };

    render() {
        // Checking Dialog should be open or not
        if(!this.state.isOpen)
        { return null }
        else {
            return (
                <div>
                    {
                        <Dialog
                            open={this.state.isOpen}
                            onClose={this.handleClose.bind(this)}
                            scroll={'paper'}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">User Management</DialogTitle>
                            <DialogContent dividers={true}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={this.descriptionElementRef}
                                tabIndex={-1}
                            >
                                
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose.bind(this)} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose.bind(this)} color="warning">
                                Save
                            </Button>
                            </DialogActions>
                        </Dialog>
                    }
                </div>
            );
        }
    }
}