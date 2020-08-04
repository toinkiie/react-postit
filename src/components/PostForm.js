import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostForm extends Component {
  state = {
    message: '',
    image: ''
  }

  onImageChange = (e) => {
    this.setState({
      image: e.target.value
    });
  }

  onChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.message !== '') {
      this.props.onPostIt({
        text: this.state.message,
        image: this.state.image
      });
      this.setState({ message: '', image: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mt-4">
        <div className="form-group">
          <small>Message:</small>
          <textarea 
            rows="2" 
            className="form-control" 
            onChange={this.onChange}
            value={this.state.message}
          ></textarea>
        </div>
        <div className="form-group">
         <small>Image URL:</small>
         <input className="form-control" type="text" value={this.state.image} onChange={this.onImageChange} />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">Post It!</button>
        </div>
      </form>
    )
  }
}

PostForm.propTypes = {
  onPostIt: PropTypes.func.isRequired
}

export default PostForm
