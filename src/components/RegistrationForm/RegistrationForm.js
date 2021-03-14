import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label, Button } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'
import UserContext from '../../contexts/UserContext'
import Loading from '../Loading/Loading'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }
    state = {
        error: null,
        isLoading: false
    }

    static contextType = UserContext;

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({ error: "Processing your request..." })
        const { username, password, email } = ev.target
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
            email: email.value
        })
            .then(user => {
                this.setState({ error: null, isLoading: true })
                AuthApiService.postLogin({
                    username: username.value,
                    password: password.value,
                })
                    .then(res => {
                        username.value = ''
                        password.value = ''
                        email.value = ''
                        this.context.processLogin(res.authToken)
                        this.props.onRegistrationSuccess()
                        this.setState({ isLoading: false })
                    })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        if(this.state.isLoading === true) {
            return (
                <Loading />
            )
        }
        return(
            <form 
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    
                </div>
            </form>
        )
    }
 
}

