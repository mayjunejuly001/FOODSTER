import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../Utils/UserContext'

class About extends Component {
  constructor(props) {
    super(props)

    // console.log('parent constructor')
  }

  componentDidMount() {
    // console.log('parent component did mount')
    //API
  }

  render() {
    // console.log('parent render')
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
        </UserContext.Consumer>
        <h2>Welcome To About Section</h2>
        <UserClass Name={'Mayank'} Location={'Gwalior'} About={'@mayjuneILI'} />
      </div>
    )
  }
}

export default About
