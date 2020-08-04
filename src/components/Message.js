import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Message extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.message.uid)
  }

  render() {
    return (
      <div className="card mb-3" >
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={this.props.message.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <p className="card-text">{this.props.message.text}</p>
              <button type="button" className="btn btn-light" onClick={this.onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default Message
