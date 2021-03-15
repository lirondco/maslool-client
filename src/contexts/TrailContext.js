import React, { Component } from 'react'

export const nullTrail = {
    location: {}
}

const TrailContext = React.createContext({
    trail: nullTrail,
    comments: [],
    ratings: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setTrail: () => {},
    clearTrail: () => {},
    setComments: () => {},
    addComment: () => {},
    setRatings: () => {},
    addRating: () => {},
})

export default TrailContext

export class TrailProvider extends Component {
    state = {
        trail: nullTrail,
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setTrail = trail => {
        this.setState({ trail })
    }

    setComments = comments => {
        this.setState({ comments })
    }

    setRatings = ratings => {
        this.setState({ ratings })
    }

    clearTrail = () => {
        this.setTrail(null)
        this.setComments([])
        this.setRatings([])
    }

    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    addRating = rating => {
        this.setRatings([
            ...this.state.ratings,
            rating
        ])
    }

    render() {
        const value = {
            trail: this.state.trail,
            comments: this.state.comments,
            ratings: this.state.ratings,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setTrail: this.setTrail,
            setComments: this.setComments,
            setRatings: this.setRatings,
            clearTrail: this.clearTrail,
            addComment: this.addComment,
            addRating: this.addRating,
        }
        return (
            <TrailContext.Provider value={value}>
                {this.props.children}
            </TrailContext.Provider>
        )
    }
}