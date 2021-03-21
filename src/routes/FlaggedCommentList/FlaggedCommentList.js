import React, { Component } from 'react'
import ModeratorApiService from '../../services/moderator-api-service'
import FlaggedComment from '../../components/FlaggedComment/FlaggedComment'
import './FlaggedCommentList.css'

export default class FlaggedCommentList extends Component {
    state =  {
        error: null,
        comments: null,
    }

    getFlaggedComments = () => {
        ModeratorApiService.getFlaggedComments()
            .then(comments => this.setState({ comments }))
            .then(() => this.setState({error: null}))
            .catch(error => this.setState({ ...error }))
    }

    componentDidMount = () => {
        this.getFlaggedComments()
    }

    handleBanUser = (userId) => {
        ModeratorApiService.toggleBanUser(userId)
            .then(() => this.getFlaggedComments())
            .then(() => window.alert('Do not forget to edit and/or unflag their comment!'))
            .catch(error => this.setState({ ...error }))
    }

    renderComments = (comments) => {
        return (
            <ul className='flagged_comments'>
                {comments.map(comment =>
                    <li key={comment.id}>
                        <FlaggedComment comment={comment} onBanClick={() => this.handleBanUser(comment.user.id)} />
                    </li>
                    )}
            </ul>
        )
    }
    
    render() {
        const { comments, error } = this.state

        return (
            <section className='FlaggedCommentList'>
                <h2>Flagged comments</h2>
                <hr />
                {comments && this.renderComments(comments)}
                {comments === null && <h4>List is empty</h4>}
                <div role="alert">{error && <p className="error">{error}</p>}</div>
            </section>
        )
    }

}