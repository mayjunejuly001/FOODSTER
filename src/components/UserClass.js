import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    console.log('child constructor')

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    }
  }

  async componentDidMount() {
    console.log('child didmount')
    const data = await fetch('https://api.github.com/users/mayjunejuly001')
    const json = await data.json()

    this.setState({
      userInfo: json,
    })
    console.log(json)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log("componentWillUnmount ");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo
    console.log('child render')
    return (
      <div className='use-card'>
        <img src={avatar_url} alt='' />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:About</h4>
      </div>
    )
  }
}

export default UserClass
