import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createUserRequestAction } from '../actions/createUserAction';

import { Container, Grid, TextField, Typography, Paper, Button } from '@mui/material';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { loadUserRequestAction } from '../actions/loadUersApi'




const mapStateToProps = (props) => {
  return {
    loadUserApi : props.loadUserApi
    
  }
}

const mapDispatchFromProps = (dispatch) => {
  return {
    createUserDispatch : (data) => dispatch(createUserRequestAction(data)),
    loadUserApiDispatch : () => dispatch(loadUserRequestAction())
  }
}


class AddUser extends Component {

  constructor(props, {history}) {
    super(props)

    this.state = {
      id : '',
      name : '',
      email : '',
      address : ''
    }
  }

  componentDidMount() {
      this.props.loadUserApiDispatch()
  }

  
//   userFindById = () => {
//     if(window.location.href.split('edituser/')[1].length ){
//       this.props.loadUserApi.find((item) => item.id === Number(window.location.href.split('edituser/')[1]) && console.log('item match : ',item))
//     }else {
//       console.log('no data')
//     }
//   }

  // userFindById()


  onSubmitClick = () => {
    if(!this.state.name || !this.state.email || !this.state.address) {
      toast('Please provide all credentials')
      return 
    }else {

    
    this.setState({id : Date.now()})
    setTimeout(() => {
      // console.log('state : ',this.state)
      this.props.createUserDispatch({
            id : Date.now(),
            name : this.state.name,
            email : this.state.email,
            address : this.state.address
        })
        toast.success('User Created')

        
        this.setState({
          id : '',
          name : '',
          email : '',
          address : ''
        })
        this.history.push('/')
        console.log( 'history : ',this.history)

        
    }, 500)
    
}
  }


  filterById = () => {
    const data = this.props.loadUserApi.users.find((item) => item.id === Number(window.location.href.split('edituser/')[1]))
    return data
  }



  render() {
    // console.log(window.location.href.split('edituser/')[1])
    // console.log(this.props.loadUserApi.users)
    // console.log(this.filterById())
    
    return (
        <Container >
            {/* Add User
            <button onClick={ this.onClickHandler }>add user</button> */}
              {/* <Paper> */}
              
            <Grid mt={1} alignContent='center' container spacing = {3} >
              {/* <Typography  variant='h6' component='h3'>
                ADD USER
              </Typography> */}

              <Grid item xs={12}  mx={1}> 
                <TextField
                  id="outlined-name"
                  label="Name"
                  placeholder='Enter Name'
                  value={this.state.name || ''}
                  onChange={(e) => this.setState({name : e.target.value })}
                />
              </Grid>

              <Grid item xs={12} mx={1}>
                <TextField
                  id="outlined-name"
                  label="email"
                  placeholder='Enter email'
                  value={this.state.email || ''}
                  onChange={(e) => this.setState({email : e.target.value })}
                />
              </Grid>

              <Grid item xs={12} mx={1}>
                <TextField
                  id="outlined-name"
                  label="Address"
                  placeholder='Enter Address'
                  value={this.state.address || ''}
                  onChange={(e) => this.setState({address : e.target.value })}
                />
              </Grid>
          </Grid>

          <Button onClick={this.onSubmitClick} sx={{marginTop : '1rem'}} variant='contained'> Submit</Button>
          {/* </Paper> */}
        </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchFromProps)(AddUser);
