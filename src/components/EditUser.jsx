import { Grid, Paper, TextField, Container, Button, TablePagination } from '@mui/material';
import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { loadUserRequestAction } from '../actions/loadUersApi';

import { editUserRequestAction, editUserSuccessAction } from '../actions/editUserAction';

import { toast } from 'react-toastify';
// import {  } from '../actions/'

const mapStateToProps = (props) => {
    return {
      loadUserApi : props.loadUserApi,
      editUser : props.edituser.user
      
    }
  }
  
  const mapDispatchFromProps = (dispatch) => {
    return {
    //   createUserDispatch : (data) => dispatch(createUserRequestAction(data)),
      loadUserApiDispatch : () => dispatch(loadUserRequestAction()),
      editUserDispatch : (data) => dispatch(editUserRequestAction(data)),
    //   editUserDispatch : (data) => dispatch(editUserSuccessAction(data))

    }
  }
  


class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : '',
            name : '',
            email : '',
            address : ''
        }
    }

    


    // componentDidUpdate(prevState, currentState){
    //     if(prevState !== currentState) {
    //         this.props.loadUserApiDispatch()
    //     }
    // }

    filterById = () => {
        const data = this.props.loadUserApi.users.find((item) => item.id === Number(window.location.href.split('edituser/')[1]))
        
        // this.setState({id : data.id})
        // this.setState({name : data.name})
        // this.setState({email : data.email})
        // this.setState({address : data.address})
        return data
      }

      updateStates = () => {
        //   if(this.filterById().length) {
        this.setState({id : this.filterById().id})
        this.setState({name : this.filterById().name})
        this.setState({email : this.filterById().email})
        this.setState({address : this.filterById().address})
        //   }
    }

      componentDidMount() {
        this.props.loadUserApiDispatch()
        if(this.filterById() !== undefined){
            this.filterById()
            this.updateStates()
        }

    }   

    // componentDidUpdate(){
    onClickEditDispatch = () => {
        console.log(this.filterById().id)
        // this.props.editUserDispatchReq()
        if(!this.state.name || !this.state.email || !this.state.address){
        // setTimeout(() => {
            toast.error('User Should Contain All the Values')
        }
        else {
            
            this.props.editUserDispatch({
                id : this.state.id,
                name : this.state.name,
                email : this.state.email,
                address : this.state.address
            })
            toast.success(`${this.filterById().id} is Updated Successfully`)
            console.log('onclickdispatch on edit user')
            // process.exit()
        }
        setTimeout(() => {
            console.log(this.props.editUser)
        }, 500)

    }

        // }, 2000)
         


    // }

    // onClickEditDispatch()

    
    
    
    render() {
    //   console.log(this.props.loadUserApi)
    //   console.log(this.state.id)

    //   console.log(this.filterById())
      
    return (
        <Container>
        <div style={{alignSelf:'center', marginTop : '2rem'}}>
            <Paper sx={{textAlign : 'center', padding : '1rem'}}>
                <h2>EDIT USER </h2>
                <p>(updating user Id : {this.filterById() && this.filterById().id})</p>
                <Grid container spacing={2}>
                    <Grid item xs={12}  mx={1}> 
                        <TextField
                            id="outlined-name"
                            label="Name"
                            placeholder='Enter Name'
                            value={this.state.name}
                            required
                            onChange={(e) => this.setState({name : e.target.value })}
                        />
                    </Grid>

                    <Grid item xs={12}  mx={1}> 
                        <TextField
                            id="outlined-name"
                            label="Email"
                            placeholder='Enter Email'
                            required
                            value={this.state.email}
                            onChange={(e) => this.setState({email : e.target.value })}
                        />
                    </Grid>

                    <Grid item xs={12}  mx={1}> 
                        <TextField
                            id="outlined-name"
                            label="Address"
                            required
                            placeholder='Enter Address'
                            value={this.state.address}
                            onChange={(e) => this.setState({address : e.target.value })}
                        />
                    <div>
                        <Button onClick={() => this.onClickEditDispatch()} sx={{marginTop : '1rem'}} variant='contained' color ='success'>Update</Button> 
                        <Link to='/' style={{textDecoration:'none', color : 'inherit'}}> <Button sx={{marginTop : '1rem'}} variant='contained' color='warning'> Back </Button> </Link>
                    </div>
                    </Grid>
                </Grid>
            </Paper>

        </div>
        </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchFromProps)(EditUser);
