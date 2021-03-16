import React, { Component } from 'react'

const AllTrailsContext = React.createContext({
    allTrails: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setAllTrails: () => {},
})

export default AllTrailsContext

export class AllTrailsProvider extends Component {
    state = {
        allTrails: [],
        error: null,
    };

    setAllTrails = allTrails => {
        this.setState({ allTrails })
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
            allTrails: this.state.allTrails,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setAllTrails: this.setAllTrails
        }

        return (
            <AllTrailsContext.Provider value={value}>
                {this.props.children}
            </AllTrailsContext.Provider>
        )
    }
}