import React, { Component } from 'react'

const TrailSearchContext = React.createContext({
    trailSearchResult: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setTrailSearchResult: () => {},
})

export default TrailSearchContext

export class TrailSearchProvider extends Component {
    state = {
        trailSearchResult: [],
        error: null,
    };

    setTrailSearchResult = trailSearchResult => {
        this.setState({ trailSearchResult })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            trailSearchResult: this.state.trailSearchResult,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setTrailSearchResult: this.setTrailSearchResult
        }

        return (
            <TrailSearchContext.Provider value={value}>
                {this.props.children}
            </TrailSearchContext.Provider>
        )
    }
}