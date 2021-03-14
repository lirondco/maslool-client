import React, { Component } from 'react'
import { Input, Label, Button } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import './LoginForm.css'
import Loading from '../Loading/Loading'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    static contextType = UserContext

    state = {
        error: null,
        isLodaing: false
    }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password } = ev.target

        this.setState({ error: "Processing your request ..." })

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                this.setState({ error: null, isLoading: true })
                username.value = ''
                password.value = ''
                this.context.processLogin(res.authToken)
                this.props.onLoginSuccess()
            })
            .then(this.setState({ isLoading: false }))
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        if (this.state.isLoading === true) {
            return <Loading />
        }
        return (
            <>
                <h2>Sign in</h2>
                <hr />
                <form 
                    className='LoginForm'
                    onSubmit={this.handleSubmit}
                >
                    <div>
                        <Label htmlFor='login-username-input'>
                            Username: 
                        </Label>
                        <Input 
                            ref={this.firstInput}
                            id='login-username-input'
                            name='username'
                            required
                        />
                        <Label htmlFor='login-password-input'>
                            Password:
                        </Label>
                        <Input 
                            id='login-password-input'
                            name='password'
                            type='password'
                            required
                        />
                    </div>
                    <div role='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <Button type='submit'>
                        Sign in
                    </Button>
                </form>
            </>
        )
    }
}