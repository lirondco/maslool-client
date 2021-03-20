import React, { Component } from 'react'
import { Button } from '../Utils/Utils'
import './MessageContent.css'

export default class MessageContent extends Component {
    static defaultProps = {
        onDeleteClick: () => {}
    }

    handleDeleteClick = ev => {
        ev.preventDefault()
        if (!window.confirm('Are you sure you want to do this?')) {
            return
        }
        this.props.onDeleteClick()
    }

    render() {
        const pending = this.props.pending
        if (pending === null) {
            return <></>
        }
        return (
            <div className='MessageContent'>
                <p>From: <span>{pending.user.username}</span></p>
                <p>Message user: <span><a href={`mailto: ${pending.user.email}`}>{pending.user.email}</a></span></p>
                <p style={{whiteSpace: "pre-wrap"}}>{pending.message}</p>
                <Button type='button' onClick={this.handleDeleteClick}>Delete Message</Button>
            </div>
        )
    }
}
