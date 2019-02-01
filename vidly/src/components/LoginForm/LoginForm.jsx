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
    ],
    errors: null
  }
  
  render() {
    const { account, errors } = this.state
    return (
      
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSumbit}>
          { account.map(el => <Input key={el.tag} handleChange={this.handleChange} tag={el.tag} title={el.title} value={el.value} error={errors ? errors[el.tag] : null}/>) }
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    )
  }

  componentDidMount() {
    //this.username.current.focus()
  }

  validate = () => {
    const errors = {}

    const { account } = this.state
    account.forEach(el => {
      if(el.value.trim() === '')
        errors[el.tag] = `${el.title} is required`
      else
        errors[el.tag] = null
    })
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSumbit = e => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors })
    if(errors) return 

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
