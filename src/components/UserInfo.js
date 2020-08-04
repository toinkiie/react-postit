import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class UserInfo extends Component {
  render() {
    return (
      <div>
        Current user: {this.props.email}
      </div>
    )
  }
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired
}

export default UserInfo
