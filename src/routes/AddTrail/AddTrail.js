import React, { Component } from 'react'
import EditTrailForm from '../../components/EditTrailForm/EditTrailForm'
import NewTrailForm from '../../components/NewTrailForm/NewTrailForm'
import { Button } from '../../components/Utils/Utils'
import './AddTrail.css'

export default class AddTrail extends Component {
    state = {
        status: null,
        message: 'Trail Options'
    }

    handleCancel = () => {
        this.setState({status: null, message: 'Trail Options'})
    }

    renderComponent = () => {
        if (this.state.status === 'editing') {
            return <EditTrailForm onCancelSuccess={this.handleCancel}/>
        } else if (this.state.status === 'adding') {
            return <NewTrailForm onCancelSuccess={this.handleCancel}/>
        }
    }

    handleAddMode = (ev) => {
        ev.preventDefault()
        this.setState({status: 'adding', message: 'Add Trail'})
        return
    }

    handleEditMode = (ev) => {
        ev.preventDefault()
        this.setState({status: 'editing', message: 'Edit Trail'})
        return
    }


    render() {
        return (
            <section className='AddTrail'>
                <h2>{this.state.message}</h2>
                <hr />
                {(this.state.status === null) ? <span className = 'AddTrail_buttons'><Button onClick={this.handleAddMode}>Add</Button><Button onClick={this.handleEditMode}>Edit</Button></span> : this.renderComponent()}
            </section>
        )
    }
}

