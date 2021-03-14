import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './Registration.css'

export default class Registration extends Component {
    state = {
        isLoading: false
    }

    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        },
    }

    handleIsLoading = () => {
        this.setState({ isLoading: true })
    }

    handleRegistrationSuccess = () => {
        this.setState({ isLoading: false })
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/welcome'
        history.push(destination)
    }

    render() {
        return (
            <section className = 'registrationpage'>
                <h2>Register</h2>
                <hr />
                <RegistrationForm 
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
        )
    }
}