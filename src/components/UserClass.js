import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log(this.props.Name + 'child constructor')
  }

  componentDidMount() {
    console.log('child mount')
  }

  render() {
    console.log('child render')
    const { Name, Location, About } = this.props
    const { count } = this.state
    return (
      <div className='use-card'>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            })
          }}
        >
          Count
        </button>

        <h2>Name:{Name}</h2>
        <h3>Location:{Location}</h3>
        <h4>Contact:{About}</h4>
      </div>
    )
  }
}

export default UserClass
