import React, { Component } from "react";
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import User from "./User";

export default class ViewUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			rowsPerPage: 5,
			page: 0,
			isOpen: false

		};

		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
		this.btnDelete_Click = this.btnDelete_Click.bind(this);
		this.btnEdit_Click = this.btnEdit_Click.bind(this);
	}

	componentDidMount() {
        this.Page_Load();
	}

	Page_Load(){
		Axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              this.setState({ users: res.data });
            })
	}

	handleChangePage = (event, newPage) => {
		this.setState({page: newPage});
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({rowsPerPage: +event.target.value});
		this.setState({page: 0});
	};

	btnDelete_Click(key){
		Axios.delete(`https://jsonplaceholder.typicode.com/users/${key}`)
		.then((res) => {
			console.log(key);
			this.setState({users: this.state.users.filter(item => item.id !== key)});
			console.log("Record deleted with # : "+{key});
		},
		(err) => {
			console.log(err);
		})
	}

	btnEdit_Click(key){
		this.setState({isOpen: true});
	}

	render() {
		return(
			<div>
				<User isOpen={this.state.isOpen}></User>
				<div className="content-header"><h1>User List</h1></div>
				<Paper>
					<TableContainer>
						<Table stickyHeader aria-label="sticky table">
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
			</div>
		);
	}
}
