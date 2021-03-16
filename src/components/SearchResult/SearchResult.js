import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchResult.css'
import StarRatings from 'react-star-ratings'

export default class SearchResult extends Component {
    static defaultProps = {
        trail: {}
    }
    
    render() {
        const trail = this.props

        return (
            <div className='search_result'>
                <Link to={`/trails/${trail.id}`}>
                    <p>{trail.name}</p>
                </Link>
                <StarRatings 
                    rating={trail.rating}
                    starDimension='15px'
                    starSpacing='5px'
                    starRatedColor='yellow'
                    starEmptyColor='grey'
                />
                <p>Location: {trail.location.address_line} {trail.location.city}, {trail.location.region} {trail.location.postal_code}</p>
                <p>Difficulty: {trail.difficulty}</p>
            </div>
        )
    }
}   