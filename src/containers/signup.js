import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/user'
import SignupForm from '../components/signup-form'

class Signup extends Component {

  handleSubmit(data) {
    const {createUser} = this.props
    const {email, password} = data

    createUser(email, password)
  }

  render() {
    return (<SignupForm onSubmit={this.handleSubmit.bind(this)}/>)
  }
}


export default connect(null, actions)(Signup)