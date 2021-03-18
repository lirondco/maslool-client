import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import { NiceDate } from '../Utils/Utils'
import './Ratings.css'

export default class Ratings extends Component {


    render() {
        const rating = this.props.rating

        return (
            <div className='trail_rating'>
                <h4 className='rating_username'>From: {rating.user.username} {(rating.user.banned) ? '[banned]' : ''}{(rating.user.admin) ? '[moderator]' : ''}</h4>
                <div className='rating_content'>
                    <StarRatings
                        rating={rating.rating}
                        starDimension='20px'
                        starSpacing='5px'
                        starRatedColor='red'
                        starEmptyColor='grey'
                    />
                </div>
                <p className='rating_date'>modified: <NiceDate date={rating.date_modified} /></p>
            </div>
        )
    }
}