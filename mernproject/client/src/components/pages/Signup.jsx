import React, { Component } from 'react'
import api from '../../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
<<<<<<< HEAD
      name: this.state.name,
=======
      // name: this.state.name,
>>>>>>> parent of 62e24c5... reverting
      password: this.state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />{' '}
          <br />
<<<<<<< HEAD
          Name:{' '}
=======
          {/* Name:{' '}
>>>>>>> parent of 62e24c5... reverting
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />{' '}
<<<<<<< HEAD
          <br />
=======
          <br /> */}
>>>>>>> parent of 62e24c5... reverting
          Password:{' '}
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
}
