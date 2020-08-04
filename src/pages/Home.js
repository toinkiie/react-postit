import React, { Component } from 'react'
import PostForm from '../components/PostForm'
import Nav from '../components/Nav'
import Messages from '../components/Messages'
import {v4 as uuidv4} from 'uuid'
export class Home extends Component {
  state = {
    messages: []
  }

  onPostIt = (message) => {
    const newPost = {
      uid: uuidv4(),
      text: message.text,
      image: message.image
    }
    this.setState({
      messages: [newPost, ...this.state.messages]
    })
  }

  onDelete = (uid) => {
    this.setState({
      messages: [...this.state.messages.filter(message => message.uid !== uid)]
    })
  }

  render() {
    return (
      <div>
        <Nav email={localStorage.getItem('user')}/>
        <div className="container">
          <PostForm onPostIt={this.onPostIt} />
          <hr/>
          <Messages messages={this.state.messages} onDelete={this.onDelete} />
        </div>
      </div>
    )
  }
}

export default Home
