import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

export class Messages extends Component {
  render() {
    return this.props.messages.map((message) => {
      return (<Message message={message} onDelete={this.props.onDelete} key={message.uid} />)
    })
  }
}
Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Messages
