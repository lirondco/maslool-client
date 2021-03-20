import React, { Component } from 'react'
import UserComponent from '../../components/UserComponent/UserComponent'
import ModeratorApiService from '../../services/moderator-api-service'
import { Input, Label } from '../../components/Utils/Utils'
import './UsersList.css'

export default class UsersList extends Component {
    state = {
        users: null,
        error: null,
        searchResult: null,
    }

    getUsers = () => {
        ModeratorApiService.getUsers()
            .then(users => this.setState({ users, searchResult: users }))
            .catch(error => this.setState({ ...error }))
    }

    componentDidMount = () => {
        this.getUsers()
    }

    handleToggleBan = (userId) => {
        ModeratorApiService.toggleBanUser(userId)
            .then(() => window.alert('Action completed'))
            .then(() => this.getUsers())
            .catch(error => this.setState({ ...error }))
    }

    handleChange = ev => {
        const searchString = ev.target.value
        if(this.state.users) {
            this.setState({ error: null })
            let searchResult = this.state.users.filter(user => 
                    user.username.toLowerCase().includes(searchString.toLowerCase())
                )
            this.setState({ searchResult })
            if (searchResult.length === 0) {
                this.setState({ error: 'No user with that username'})
            }
        } else {
            this.setState({ error: 'No users available'})
        }
    }

    render() {
        const {error, searchResult } = this.state
        let sortedResult
        if (searchResult !== null) {
            sortedResult = searchResult.sort((a, b)=> a.username.toLowerCase() > b.username.toLowerCase() ? 1: -1)
        }
        return (
            <section className='UsersList'>
                <h2>Users List</h2>
                <hr />
                <Label htmlFor='search_user_box'>
                    Filter by username:
                </Label>
                <Input onChange={this.handleChange} id='search_user_box' name='searchString' />
                <div role="alert">{error && <p className="error">{error}</p>}</div>
                <ul className='user_list'>
                    {sortedResult && sortedResult.map(user => 
                        <li key={user.id}>
                            <UserComponent user={user} onBanUser={() => this.handleToggleBan(user.id)}/>
                        </li>
                        )}
                </ul>
            </section>
        )
    }

}