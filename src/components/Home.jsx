
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { Container, TablePagination, Pagination } from '@mui/material';

import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux';

import { connect } from 'react-redux'
import { useEffect } from 'react'

import { loadUserRequestAction } from '../actions/loadUersApi';

import { createUserRequestAction } from '../actions/createUserAction';
import { deleteRequestAction } from '../actions/deleteUserAction';
import { toast } from 'react-toastify';



function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}



const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const mapStateToProps = (props) => {
	return {
		loadUserApi : props.loadUserApi,
		keyword : props.searchKeyword.keyword
	}
}

const mapDispatchFromProps = (dispatch) => {
	return {
		loadUserApiDispatch : () => dispatch(loadUserRequestAction()),
		deleteUserApi : (item) => dispatch(deleteRequestAction(item))
		
	}
}

class Home extends React.Component {
	constructor(){
		super()

		this.state = {
			page : 1,
			rowsPerPage : 5
		}
	}


	componentDidMount () {
		this.props.loadUserApiDispatch()
	}

	// componentDidUpdate () {
	//   this.props.loadUserApiDispatch()
	// }

	onDeleteHandleClick = async(data) => {
		// if(window.confirm('are u sure To Delete User')) {
			await this.props.deleteUserApi(data)
			await this.props.loadUserApiDispatch()
			toast.success(`user with id :${data} is deleted `)
			
		// }
	}

	handleChangePage = (event, newPage) => {
		// setPage(newPage);
		this.setState({page : newPage})
	  };
	
	// handleChangeRowsPerPage = (event) => {
	// 	// setRowsPerPage(+event.target.value);
	// 	this.setState({RowsPerPage : +event.target.value})
	// 	this.setState({page : 0})
	//   };

	handleChangeRowsPerPage = event => {
		this.setState({RowsPerPage : (parseInt(event.target.value, 5)) });
		this.setState({page : 0});
	  };


	// count = Math.ceil(data.length / PER_PAGE)
	// PER_PAGE = 24;
	
    // emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, rows.length - this.state.page * this.state.rowsPerPage);
	render() {
	

		
	return (
		<Container>

		<Grid mt={2} container spacing={2}>
			<Grid item xs={12}>
		<TableContainer component={Paper}>
			<Table  aria-label="simple table">
				<TableHead style={{backgroundColor : 'black', color : 'white'}}>
					<TableRow style={{color:'white'}}>
						<TableCell style={{color:'white'}}><strong>SI No.</strong></TableCell>
						<TableCell style={{color:'white'}}><strong>User Name</strong></TableCell>
						<TableCell style={{color:'white'}} align="center"><strong>User Email</strong></TableCell>
						<TableCell  style={{color:'white'}} align="center"><strong>User Address</strong></TableCell>
						<TableCell style={{color:'white'}} align="center"><strong>Update</strong></TableCell>
						<TableCell style={{color:'white'}} align="center"><strong>Delete</strong></TableCell>
						
					</TableRow>
				</TableHead>
				<TableBody>
					{!this.props.keyword && this.props.loadUserApi.users && this.props.loadUserApi.users.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((item, index) => (
						<TableRow
							key={index}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>

							<TableCell align="center">{index + 1}</TableCell>
							<TableCell component="th" scope="row">
								{item.name}
							</TableCell>
							<TableCell align="center">{item.email}</TableCell>
							<TableCell align="center">{item.address}</TableCell>
							<TableCell align="center"><Button onClick={() => console.log(item.id)} variant='contained'> <Link to={`/edituser/${item.id}`} style={{textDecoration : "none", color : 'inherit'}}  > Edit </Link></Button></TableCell>
							<TableCell align="center"><Button onClick={() => this.onDeleteHandleClick(item.id)} variant='contained'>Delete</Button></TableCell>
						
						</TableRow>
					))}

						{this.props.keyword && this.props.loadUserApi.users && this.props.loadUserApi.users.map((item, index) => (
							<>
								{item.name.match(this.props.keyword) && (
									<TableRow
									key={index}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
		
									<TableCell align="center">{index + 1}</TableCell>
									<TableCell component="th" scope="row">
										{item.name}
									</TableCell>
									<TableCell align="center">{item.email}</TableCell>
									<TableCell align="center">{item.address}</TableCell>
									<TableCell align="center"><Button onClick={() => console.log(item.id)} variant='contained'> <Link to={`/edituser/${item.id}`} style={{textDecoration : "none", color : 'inherit'}}  > Edit </Link></Button></TableCell>
									<TableCell align="center"><Button onClick={() => this.onDeleteHandleClick(item.id)} variant='contained'>Delete</Button></TableCell>
									
									{/* {this.emptyRows > 0 && (
										<TableRow style={{ height: 53 * this.emptyRows }}>
										<TableCell colSpan={6} />
										</TableRow>
									)} */}

								</TableRow>
								) }
							</>
						))}
							
									


				</TableBody>
			</Table>

			{/* <TablePagination
			rowsPerPageOptions={[5, 10, 15]}
			component="div"
			count={rows.length}
			rowsPerPage={this.state.rowsPerPage}
			page={this.state.page}
			onPageChange={this.handleChangePage}
			onRowsPerPageChange={this.handleChangeRowsPerPage}
		/> */}

		{/* <TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={this.props.loadUserApi.users.length}
				rowsPerPage={this.state.rowsPerPage}
				page={this.state.page}
				onChangePage={this.handleChangePage}
				onChangeRowsPerPage={this.handleChangeRowsPerPage}
			/> */}
			{!this.props.keyword && (
				<Pagination count={5} defaultPage={1} siblingCount={1} page={this.state.page} color="primary" onChange={(e, value) => this.setState({page : value })} />
			)}
		</TableContainer>
		</Grid>
		{/* <Pagination
        count={this.state.count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      /> */}
		</Grid>
		</Container>
	);
}
}


export default connect(mapStateToProps, mapDispatchFromProps)(Home)

