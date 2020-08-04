import React, { Component } from 'react'
import fire from '../firebase'
import * as ERROR_CODE from '../constants/firebase-codes'
import * as ROUTES from '../constants/routes'
import './Login.css'
import BsAlertError from '../components/BsAlertError'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    loginError: null,
    isSubmitting: false
  };

  constructor(props) {
    super(props);
    fire.auth().signOut().then();
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSubmitting: true })
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        localStorage.setItem('user', user)
        this.props.history.push(ROUTES.HOME);
      })
      .catch(e => {
        this.setState({ isSubmitting: false })
        this.onLoginFailed(e)
      });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  
  onPassowrdChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onLoginFailed = (error) => {
    let loginError = '';
    console.log(error);
    if (
      error.code === ERROR_CODE.AUTH_USER_NOT_FOUND || 
      error.code === ERROR_CODE.AUTH_WRONG_PASSWORD
    ) {
      loginError = 'Incorrect email and password!'
    }
    this.setState({ loginError })
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <form 
            autoComplete="false" 
            autoCorrect="false" 
            autoCapitalize="false"
            onSubmit={this.onSubmit}
            >
            <h2>Login</h2>
            { (this.state.loginError) ? <BsAlertError message={this.state.loginError} /> : '' }
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input 
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={this.onPassowrdChange}
              />
            </div>
            <button disabled={this.state.isSubmitting} type="submit" className="btn btn-primary btn-block">
              { (this.state.isSubmitting) ? 'Submitting...' : 'Login' }
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
