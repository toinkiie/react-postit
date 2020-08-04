import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fire from '../firebase'
import { withRouter } from 'react-router-dom';

export class Nav extends Component {
  onLogout = () => {
    fire.auth().signOut().then(() => {
      localStorage.clear();
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">PostIt</span>
          <span className="navbar-text ml-auto">
            User: {this.props.email}
            
          </span>
          <button onClick={this.onLogout} className="btn btn-secondary ml-4">Logout </button>
        </div>
      </nav>
    )
  }
}
Nav.propTypes = {
  email: PropTypes.string.isRequired
}
export default withRouter(Nav)
