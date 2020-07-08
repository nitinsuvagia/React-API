import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class User extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            isOpen: props.isOpen,
            user_id: props.user_id,
            user: [],
            name: '',
            email: '',
            city: '',
            phone: '',
            company: '',
        }

        this.handleChange = this.handleChange.bind(this);
        console.log(props.user_id);
        if(this.state.user_id !== undefined && this.state.user_id !== 0)
            this.Page_Load();
    }

    // Page Load Event
	Page_Load(){
        if(this.state.user_id !== undefined && this.state.user_id !== 0)
        {
            Axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.user_id}`)
                .then(res => {
                    this.setState({
                        user: res.data,
                        name: res.data.name, 
                        email: res.data.email, 
                        city: res.data.address.city, 
                        phone: res.data.phone, 
                        company: res.data.company.name 
                    })
                })
        } else {
            this.setState({
                user: '',
                name: '',
                email: '',
                city: '',
                phone: '',
                company: '',
            })
        }
	}
    
    // Handle Close button to close Dialog
    handleClose = () => {
        this.props.onClose();
    };

    // Handle to Save/Update User based on Key
    btnSave_click(){
        // New Mode

        let usr = this.state.user;
        usr.name = this.state.name;
        usr.email = this.state.email;
        usr.city = this.state.city;
        usr.phone = this.state.phone;
        usr.company = this.company;

        if(this.state.user_id === undefined || this.state.user_id === 0) {

            Axios.post(`https://jsonplaceholder.typicode.com/users`,usr)
            .then(response => console.log(response));

            console.log("NEW")
            console.log(this.state.name);
            console.log(this.state.email);
            console.log(this.state.city);
            console.log(this.state.phone);
            console.log(this.state.company);
        }
        // Edit Mode
        else {

            Axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.user_id}`,usr)
            .then(response => console.log(response));

            console.log("EDIT")
            console.log(this.state.name);
            console.log(this.state.email);
            console.log(this.state.city);
            console.log(this.state.phone);
            console.log(this.state.company);
        }

        this.props.onClose();
    }

    // Handle to change value Input Control
    handleChange(valueTo, e){
        this.setState({valueTo: e.target.value});
    }

    render() {
        let dialog = (
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={true}
                    onClose={this.handleClose.bind(this)}
                    scroll={'paper'}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">User Management{ this.state.user_id===0?' (New)':' (Edit)'}</DialogTitle>
                    <DialogContent dividers={true}>
                    <DialogContentText component="div"
                        id="scroll-dialog-description"
                        ref={this.descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Container maxWidth="sm" className="dialog-container">
                            <Grid item xs={12}>
                                <form noValidate autoComplete="off">
                                    <TextField fullWidth id="txtUserName" label="Name" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})} />
                                    <TextField fullWidth id="txtEmail" label="Email" value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
                                    <TextField fullWidth id="txtCity" label="City" value={this.state.city} onChange={(e) => this.setState({city : e.target.value})} />
                                    <TextField fullWidth id="txtPhone" label="Phone" value={this.state.phone} onChange={(e) => this.setState({phone : e.target.value})} />
                                    <TextField fullWidth id="txtCompany" label="Company" value={this.state.company} onChange={(e) => this.setState({company : e.target.value})} />
                                </form>
                            </Grid>
                        </Container>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.btnSave_click.bind(this)} color="secondary">
                        Save
                    </Button>
                    </DialogActions>
                </Dialog>
        );

        if (!this.props.isOpen) {
            dialog = null;
        }

        return (
            <div>
                {dialog}
            </div>
        );
    }
}