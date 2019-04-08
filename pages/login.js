import { Component } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import Frame from '../components/Admin/Frame.js'
import { login } from '../helpers/auth.js'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  performLogin = () => {
    const { username, password } = this.state
    login({ username, password })
  }

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChangeHandler = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Frame loggedIn={loggedIn}>
        <h1>Login</h1>
        <div className='formContainer'>
          <div className='logo'>
            <div className='icon'>
              <FontAwesomeIcon icon={faTv} fixedWidth size='lg' color='#7bc043' />
            </div>
          </div>
          <form
            className='form'
            onSubmit={event => {
              event.preventDefault()
              this.performLogin()
              return false
            }}
          >
            <label for='username'>Username</label>
            <input
              type='text'
              className='username'
              id='username'
              placeholder='Enter your username...'
              onChange={this.usernameChangeHandler}
            />
            <label for='password'>Password</label>
            <input
              type='password'
              className='password'
              id='password'
              placeholder='Enter your password...'
              onChange={this.passwordChangeHandler}
            />
            <button>Log In.</button>
          </form>
          <Link href='/'>
            <span className='back'>
              <FontAwesomeIcon icon={faAngleLeft} fixedWidth /> Back to the home page
            </span>
          </Link>
        </div>
        <style jsx>
          {`
            h1 {
              font-family: 'Open Sans', sans-serif;
              font-size: 24px;
              color: #4f4f4f;
              margin: 0px;
            }
            .logo {
              display: flex;
              flex-direction: row;
              margin-top: 20px;
              margin-bottom: 20px;
              padding-right: 10px;
              padding-left: 10px;
              align-self: center;
            }
            .logo .icon {
              min-width: 3em;
              min-height: 3em;
              padding: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              transform: scale(2);
            }
            .form {
              background: white;
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              padding: 24px;
              font-family: 'Open Sans', sans-serif;
            }
            .formContainer {
              max-width: 640px;
              margin: auto;
              display: flex;
              flex-direction: column;
            }
            .form input[type='text'],
            .form input[type='password'] {
              outline: none;
              background: #ededed;
              border-radius: 8px;
              font-family: 'Open Sans', sans-serif;
              font-weight: 400;
              font-size: 16px;
              color: #928f8f;
              border: none;
              padding: 8px;
              height: 32px;
              min-width: 256px;
              vertical-align: middle;
              -webkit-appearance: none;
              margin-bottom: 16px;
            }
            .form button {
              outline: none;
              background: #7bc043;
              border-radius: 8px;
              font-family: 'Open Sans', sans-serif;
              font-weight: 600;
              font-size: 18px;
              color: #ffffff;
              text-align: center;
              border: none;
              padding: 4px;
              height: 48px;
              vertical-align: middle;
              padding-left: 16px;
              padding-right: 16px;
              -webkit-appearance: none;
            }
            .form label {
              padding-bottom: 16px;
            }
            .back {
              display: inline-block;
              margin: 16px;
              font-family: 'Open Sans', sans-serif;
              color: #6f6e6e;
              font-size: 14;
              cursor: pointer;
            }
          `}
        </style>
      </Frame>
    )
  }
}

export default Login
