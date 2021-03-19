import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils'
import './FlaggedComment.css'

export default class FlaggedComment extends Component {
    static defaultProps = {
        onBanClick: () => {}
    }

    handleBanClick = ev => {
        ev.preventDefault()
        window.confirm('Are you sure you want to do this?')
        this.props.onBanClick()
    }

    render() {
        const comment = this.props.comment 
        return (
            <div className='FlaggedComment'>
                <p className='flagged_user'>Comment Author: {comment.user.username} {comment.user.banned && '[banned]'}</p>
                <p className='reported_by'>Flagged by: {comment.flagged_by}</p>
                <p className='comment_content'>Comment: <q>{comment.content}</q></p>
                <div className='action_buttons'>
                    <Link to={`/trails/${comment.trail_id}`}><p className='comment_link'>Go to page</p></Link>
                    <Button type='button' onClick={this.handleBanClick}>{(comment.user.banned) ? 'Unban User' : 'Ban User'}</Button>
                </div>
            </div>
        )
    }
}