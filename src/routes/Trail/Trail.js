import React, { Component } from 'react'
import TrailContext, { nullTrail } from '../../contexts/TrailContext'
import TrailsApiService from '../../services/trails-api-service'
import StarRatings from 'react-star-ratings'
import  './Trail.css'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import NotFound from '../../components/NotFound/NotFound'

export default class Trail extends Component {
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = TrailContext
    
    componentDidMount = () => {
        const { trailId } = this.props.match.params
        TrailsApiService.getTrail(trailId)
            .then(this.context.setTrail)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearTrail()
    }

    renderTrail = () => {
        const { trail } = this.context
        return <>
            <h2>{trail.name}</h2>
            <hr />
            <Link to={'/trails'}>
                <h3>{'<'} Back to Search</h3>
            </Link>
            <TrailInfo trail={trail} />
        </>
    }

    render() {
        const { trail, error } = this.context
        let content
        console.error('sldkjfslkdfjsldkfjsldkfj')

        if (error) {
            content = <NotFound />
        } else if (!trail) {
            content = <Loading />
        } else {
            content = this.renderTrail()
        }
        return (
            <section className='TrailPage'>
                {content}
            </section>
        )
    }
  
} 

function TrailInfo({ trail }) {
    return (
        <div className='TrailInfo'>
            <p>Location: {trail.location.address_line} {trail.location.city}, {trail.location.region} {trail.location.postal_code}</p>
            <p>Difficulty: {trail.difficulty}</p>
            <p>Website: <a href={`${trail.website}`} target='_blank' rel= 'noreferrer'>{trail.website}</a></p>
            <StarRatings 
                    rating={trail.rating}
                    starDimension='15px'
                    starSpacing='5px'
                    starRatedColor='red'
                    starEmptyColor='grey'
                />
            <p>{trail.rating} of {trail.number_of_ratings} total ratings</p>
        </div>
    )
}