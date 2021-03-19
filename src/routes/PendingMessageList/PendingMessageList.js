import React, { Component } from 'react'
import PendingMessage from '../../components/PendingMessage/PendingMessage'
import PendingApiService from '../../services/pending-api-service'
import './PendingMessageList.css'

export default class PendingMessageList extends Component {
    state = {
        pending: null,
        error: null
    }

    loadAllPending = () => {
        this.setState({ error: 'Loading messages ...' })
        PendingApiService.getAllPending()
            .then(pending => this.setState({ pending, error: null }))
            .catch(er => this.setState({ er }))
    }

    componentDidMount = () => {
        this.loadAllPending()
    }

    handleDeleteClick = (pendingId, e) => {
        PendingApiService.deletePending(pendingId)
            .then(() => this.loadAllPending())
            .catch(er => this.setState({ er }))
    }

    renderMessages = () => {
        const { pending } = this.state
        return (
            <>
                <ul className='message_list'>
                    {pending.map(pending =>
                        <li key={pending.id}>
                                <PendingMessage pending={pending} onDeleteClick={e => this.handleDeleteClick(pending.id, e)} />
                        </li>
                    )}
                </ul>
            </>
        )
    }

    render() {
        return (
            <section className='PendingMessageList'>
                <h2>Pending Messages</h2>
                <hr />
                {(this.state.pending === null)
                    ? <h4>You have no pending messages.</h4>
                    : this.renderMessages()
                }
                <div role='alert'>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                </div>
            </section>
        )
    }
}