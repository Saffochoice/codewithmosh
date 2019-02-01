import React, { Component } from 'react'
import Input from '../common/Input/Input'

export default class LoginForm extends Component {
  username = React.createRef()
  state = {
    account: [
      {
        title: 'Username',
        tag: 'username',
        value: ''
      },
      {
        title: 'Password',
        tag: 'password',
        value: ''
      },
    ]
  }
  
  render() {
    const { account } = this.state
    return (
      
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSumbit}>
          { account.map(el => <Input key={el.tag} handleChange={this.handleChange} tag={el.tag} title={el.title} value={el.value}/>) }
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    )
  }

  componentDidMount() {
    //this.username.current.focus()
  }
  handleSumbit = e => {
    e.preventDefault()
    const value = this.username.current.value
    console.log(value)
  }
  handleChange = ({ currentTarget: input }) => {
    const account = [...this.state.account]
    const idx = account.findIndex(el => el.tag === input.name)
    account[idx].value = input.value 
    this.setState({ account })
  }
}
