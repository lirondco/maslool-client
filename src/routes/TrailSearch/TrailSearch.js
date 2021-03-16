import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResult from '../../components/SearchResult/SearchResult'
import TrailSearchForm from '../../components/TrailSearchForm/TrailSearchForm'
import AllTrailsContext from '../../contexts/AllTrailsContext'
import './TrailSearch.css'

export default class TrailSearch extends Component {
    state = { 
        searchActive: true
    }

    static contextType = AllTrailsContext

    handleSearchClick = () => {
        this.setState({ searchActive: false })
    }

    handleBackClick = () => {
        this.setState({ searchActive: true })
    }

    renderResults = () => {
        const { searchResult } = this.context
        return (
        <>
        <Link to='#' onClick={this.handleBackClick}>
            <h3>{'<'} Back to Search</h3>
        </Link>
        {searchResult.map(trail => {
            return (
                <SearchResult 
                    key={trail.id}
                    id={trail.id}
                    name={trail.name}
                    rating={trail.rating}
                    difficulty={trail.difficulty}
                    address_line={trail.location.address_line}
                    city={trail.location.city}
                    region={trail.location.region}
                    postal_code={trail.location.postal_code}
                />
            )
        })}
        </>
        )
    }

    render() {
        return (
            <section className='TrailSearch'>
                <h2>Base Camp</h2>
                <hr />
                {this.state.searchActive === true
                    ? <TrailSearchForm 
                    onSearchSuccess={this.handleSearchClick}
                    />
                    : this.renderResults()
                }
            </section>
        )
    }
}