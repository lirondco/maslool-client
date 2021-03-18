import React, { Component } from 'react'
import { NiceDate } from '../../components/Utils/Utils'
import UserContext from '../../contexts/UserContext'
import TrailsApiService from '../../services/trails-api-service'
import './Comments.css'

export default class Comments extends Component {
    static defaultProps = {
        onFlagSuccess: () => {},
        onEditSuccess: () => {},
        onDeleteSuccess: () => {},
    }

    static contextType = UserContext

    renderButtons = (comment) => {
        return (
            <div className = 'comment_buttons'>
            <button className='edit_comment_button'>Edit</button>
            <button className='delete_comment_button'>Delete</button>
            </div>
        )
    }

    handleFlaggedClick = (comment, e) => {
        const { user } = this.context
        if (comment.user.id === user.id) {
            alert('You cannot flag your own comment!')
            return
        }
        e.preventDefault()
        this.context.clearError()
        TrailsApiService.flagComment(comment.id)
            .then(this.props.onFlagSuccess())
            .catch(this.context.setError)
    }

    render() {
        const comment = this.props.comment
        const { user } = this.context
        return (
            <div className = 'trail_comment'>
                <h4 className='comment_username'>From: {comment.user.username} {(comment.user.banned) ? '[banned]' : ''}</h4>
                <p className='comment_date'>Last modified: <NiceDate date={comment.last_modified} /></p>
                {(user.id === comment.user.id || user.admin === true)
                    ? this.renderButtons(comment)
                    : ''
                }
                <p className = 'comment_content'>{comment.content}</p>
                {(comment.flagged === true)
                    ? <p className='flagged_comment' role='alert'>Comment has been flagged as inappropriate</p>
                    : <button className='flag_button' onClick={e => this.handleFlaggedClick(comment, e)}>Flag as inappropriate</button>
                }
            </div>
        )
    }
}
