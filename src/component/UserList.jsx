import React, { Component } from "react";
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import User from "./User";

export default class UserList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			rowsPerPage: 5,
			page: 0,
			isOpen: false,
			user_id: 0,
		};

		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
		this.btnAdd_Click = this.btnAdd_Click.bind(this);
		this.btnEdit_Click = this.btnEdit_Click.bind(this);
		this.btnDelete_Click = this.btnDelete_Click.bind(this);

	}

	componentDidMount() {
        this.Page_Load();
	}

	// Load all Users
	Page_Load(){
		Axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
				this.setState({ users: res.data });
				this.loading = false;
            })
	}

	// Handle to change Page - Next/Prev
	handleChangePage = (event, newPage) => {
		this.setState({page: newPage});
	};

	// Handle to Change No. of Rows per Page
	handleChangeRowsPerPage = (event) => {
		this.setState({rowsPerPage: +event.target.value});
		this.setState({page: 0});
	};

	// Handle to Delete clicked Row, without confirmation
	btnDelete_Click(key){
		Axios.delete(`https://jsonplaceholder.typicode.com/users/${key}`)
		.then((res) => {
			this.setState({users: this.state.users.filter(item => item.id !== key)});
			console.log("Record deleted with # : "+{key});
		},
		(err) => {
			console.log(err);
		})
	}

	// To load data to Edit it
	btnEdit_Click(key){
		if(this.state.users.findIndex(user => user.id === key)>=0)
		{
			this.setState({isOpen: true});
			this.setState({user_id: key});
		}
	}

	// To open Dailog to add new User
	btnAdd_Click(){
		this.setState({isOpen: true});
		this.setState({user_id: 0});
	}

	// Click event to Update the Data
	btnUpdate_click() {

	}

	// Handle to after Dailog Close to reload Data
	btnClose_click() {
		this.setState({ isOpen: false });
		this.Page_Load();
	}

	render() {
		return(
			<div>
				<div className="content-header">
					<Grid container>
						<Grid item xs={6}>
							<h1>User List</h1>
						</Grid>
						<Grid item xs={6}>
							<div className="header-buttons">
								<IconButton variant="outlined" color="primary" onClick={this.btnAdd_Click.bind(this)}>
									<Icon color="primary" style={{ fontSize: 36 }}>add_circle</Icon>
								</IconButton>
							</div>
						</Grid>
					</Grid>
				</div>
				<Paper>
					<TableContainer>
						<Table stickyHeader size="small" aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell width="30px">#</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>City</TableCell>
									<TableCell>Phone</TableCell>
									<TableCell>company</TableCell>
									<TableCell width="90px">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.state.users.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((user) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
											<TableCell>{user.id}</TableCell>
											<TableCell><b>{user.name}</b></TableCell>
											<TableCell><a href={'mailto:'+user.email}>{user.email}</a></TableCell>
											<TableCell>{user.address.city}</TableCell>
											<TableCell>{user.phone}</TableCell>
											<TableCell>{user.company.name}</TableCell>
											<TableCell>
												<IconButton onClick={this.btnDelete_Click.bind(this,user.id)}>
													<DeleteIcon fontSize="small" />
												</IconButton>
												<IconButton onClick={this.btnEdit_Click.bind(this,user.id)}>
													<EditIcon fontSize="small" />
												</IconButton>
											</TableCell>
									</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25, 100]}
						component="div"
						count={this.state.users.length}
						rowsPerPage={this.state.rowsPerPage}
						page={this.state.page}
						onChangePage={this.handleChangePage}
						onChangeRowsPerPage={this.handleChangeRowsPerPage}
					/>
				</Paper>
				{ this.state.isOpen
					? <User isOpen={this.state.isOpen} user_id={this.state.user_id} onClose={ this.btnClose_click.bind(this) }></User>
					: <div></div>
				}
			</div>
		);
	}
}