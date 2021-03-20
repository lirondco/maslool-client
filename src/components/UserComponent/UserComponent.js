import { Button, NiceDate } from '../Utils/Utils'
import React, { Component } from 'react'
import './UserComponent.css'

export default class UserComponent extends Component {
    static defaultProps = {
        onBanUser: () => {}
    }

    handleBanClick = (ev) => {
        ev.preventDefault()
        window.confirm('Are you sure you want to do this?')
        this.props.onBanUser()
    }

    render() {
        const user = this.props.user

        return (
            <div className='UserComponent'>
                <h4>{user.username}{user.banned && ' [banned]'}{user.admin && ' [moderator]'}</h4>
                <p className='join_date'>Joined <NiceDate date={user.join_date} /></p>
                <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
                {user.banned && <p className='banned_by'>Banned by: {user.banned_by}</p>}
                {user.banned ? <Button type='button' onClick={this.handleBanClick}>Unban User</Button> : <Button disabled={user.admin} type='button' onClick={this.handleBanClick}>Ban User</Button>}
            </div>
        )
    }
} 