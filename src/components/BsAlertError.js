import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class BsAlertError extends Component {
  render() {
    return (
      <div className="alert alert-danger">
        {this.props.message}
      </div>
    )
  }
}
BsAlertError.propTypes = {
  message: PropTypes.string.isRequired
};

export default BsAlertError
