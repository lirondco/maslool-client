import React, { Component } from 'react'
import './TrailSearchForm.css'
import AllTrailsContext from '../../contexts/AllTrailsContext'
import TrailsApiService from '../../services/trails-api-service'
import { Input, Label, Button } from '../Utils/Utils'

export default class TrailSearchForm extends Component {
    static defaultProps = {
        onSearchSuccess: () => { }
    }

    state = {
        searchQuery: ''
    }

    static contextType = AllTrailsContext

    firstInput = React.createRef()

    handleSearch = ev => {
        ev.preventDefault()
        this.setState({ searchQuery: '' })
        this.context.setError('Processing your request ...')
        this.context.clearSearchResult()
        const { search, location, difficulty, rating } = ev.target
        let nameSearch = ''
        if (search.value) {
            nameSearch = search.value
        }
        this.setState({ searchQuery: `?name=${nameSearch}&region=${location.value}&difficulty=${difficulty.value}&rating=${rating.value}`})
        TrailsApiService.searchTrails(this.state.searchQuery)
            .then(this.context.setSearchResult)
            .then(this.props.onSearchSuccess())
            .then(this.context.clearError())
            .catch(this.context.setError)
    }

    componentDidMount = () => {
        this.firstInput.current.focus()
        this.context.clearError()
        TrailsApiService.searchTrails('')
            .then(this.context.setAllTrails)
            .catch(this.context.setError)
    }

    render() {
        const { allTrails, error } = this.context
        let uniqueLocations = [...new Set(allTrails.map(trail => trail.location.region))]
        const difficulties = ['Beginner', 'Intermediate', 'Advanced']
        const ratings = [1, 2, 3, 4, 5]

        return (
            <div className='TrailSearchForm'>
                <h3>Search for your next hike</h3>
                <form className='search_form'>
                    <Label htmlFor='search_box'>
                        Search by name:
                    </Label>
                    <Input
                        ref={this.firstInput}
                        id='search_box'
                        name='search'
                    />
                    <Label htmlFor='location_search'>
                        Search by location:
                    </Label>
                    <select id='location_search' name='location'>
                        <option value={''}>Any</option>
                        {uniqueLocations.map(location => {
                            return (
                                <option key={location.toLowerCase()} value={location.toLowerCase()}>
                                    {location}
                                </option>
                            )
                        })}
                    </select>
                    <Label htmlFor='difficulty_search'>
                        Search by difficulty:
                    </Label>
                    <select id='difficulty_search' name='difficulty'>
                        <option value={''}>Any</option>
                        {difficulties.map(diff => {
                            return (
                                <option key={diff.toLowerCase()} value={diff.toLowerCase()}>
                                    {diff}
                                </option>
                            )
                        })}
                    </select>
                    <Label htmlFor='rating_saerch'>
                        Search by minimum rating:
                    </Label>
                    <select id='rating_search' name='rating'>
                        <option value={0}>Any</option>
                        {ratings.map(r => {
                            return (
                                <option key={r} value={Number(r)}>
                                    {r}
                                </option>
                            )   
                        })}
                    </select>
                    <p>Leave fields blank to return all.</p>
                    <Button type='submit'>
                        Search
                    </Button>
                    <div role='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
                </form>
            </div>
        )
    }

}