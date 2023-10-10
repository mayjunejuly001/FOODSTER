import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component {
  constructor(props) {
    super(props)

    console.log('parent constructor')
  }

  componentDidMount() {
    console.log('parent component did mount')
  }

  render() {
    console.log('parent render')
    return (
      <div>
        <h1>About</h1>
        <h2>I AM AN IDIOT</h2>
        <UserClass Name={'Mayank'} Location={'Gwalior'} About={'@mayjuneILI'} />
      </div>
    )
  }
}

export default About
