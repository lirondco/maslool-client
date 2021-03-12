import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'
import logo from '../../../images/maslool_header.png'

export default class Header extends Component {
    static contextType = UserContext

    handleLogoutClick = () => {
        this.context.processLogout()
    }

    renderAdminLinks() {
        if(this.context.user.admin === true) {
            return (
                <>
                <Link
                    className = 'leftNav'
                    to = '/add_trail'
                >
                Add Trail
                </Link>
                <Link 
                    className = 'leftNav'
                    to = '/messages'
                >
                Messages
                </Link>
                <Link
                    className = 'leftNav'
                    to = '/alerts'
                >
                Alerts
                </Link>
                <Link 
                    className = 'leftNav'
                    to = '/users'
                >
                Users
                </Link>
                </>
            )
        } else {
            return (
                <Link 
                    className = 'leftNav'
                    to = '/contact'
                >
                Contact Admin
                </Link>
            )
        }
    }

    renderAuthorisedLinks() {
        return (
            <div className = 'authorised_links'>
                <nav>
                    <Link 
                        className = 'leftNav'
                        to = '/'
                    >
                        Welcome
                    </Link>
                    <Link 
                        className = 'leftNav'
                        to = '/trails'
                    >
                        Trails
                    </Link>
                    {this.renderAdminLinks()}
                    <Link 
                        className = 'rightNav'
                        to ='/profile'
                    >
                        {this.context.user.username}
                    </Link>
                    <Link
                        className = 'rightNav'
                        onClick={this.handleLogoutClick}
                        to='/'>
                            Logout
                    </Link>
                </nav>
            </div>
        )
    }

    renderLoginLinks() {
        return (
            <div className = 'login_links'>
                <Link 
                    to='/'
                >
                    Home
                </Link>
                <Link 
                    to='/join'
                >
                    Register
                </Link>
                <Link 
                    to='/login'
                >
                    Login
                </Link>
            </div>
        )
    }

    render() {
        return (
            <header>
                <Link 
                    className = 'header'
                    to = '/'
                >
                    <img src={logo} alt='logo of the website' />
                </Link>
                {TokenService.hasAuthToken()
                    ? this.renderAuthorisedLinks()
                    : this.renderLoginLinks()
                }
            </header>
        )
    }
}