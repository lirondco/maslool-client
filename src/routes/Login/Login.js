import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

export default class Login extends Component{
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/trails'
        history.push(destination)
    }

    render() {
        return (
            <section className = 'loginpage'>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}