import React, { Component } from 'react'
import TrailContext, { nullTrail } from '../../contexts/TrailContext'
import TrailsApiService from '../../services/trails-api-service'
import StarRatings from 'react-star-ratings'
import './Trail.css'
import { Link, NavLink } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import NotFound from '../../components/NotFound/NotFound'
import Comments from '../../components/Comments/Comments'
import CommentForm from '../../components/CommentForm/CommentForm'

export default class Trail extends Component {
    state = {
        active: null
    }


    static defaultProps = {
        match: { params: {} }
    }

    static contextType = TrailContext

    loadComments = trailId => {
        TrailsApiService.getTrailComments(trailId)
        .then(this.context.setComments)
        .catch(this.context.setError)
    }

    componentDidMount = () => {
        const { trailId } = this.props.match.params
        TrailsApiService.getTrail(trailId)
            .then(this.context.setTrail)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearTrail()
    } 

    renderComments = () => {
        const { trailId } = this.props.match.params
        this.loadComments(trailId)
        const { comments } = this.context
        if (!comments) {
            return <p className = 'comments_list'>Loading ... </p>
        }
        return (
            <ul className='comments_list'>
                {comments.map(comment => 
                <li className='trail_comment_list' key={`${comments.indexOf(comment)}`}>
                    <Comments 
                        comment={comment} 
                        onFlagSuccess={this.handleRerenderComments}
                        onEditSuccess={this.handleRerenderComments}
                        onDeleteSuccess={this.handleRerenderComments}
                    />
                </li>    
                )}
                <li className='trail_comment_list' key='comment_form'>
                    <CommentForm />
                </li>
            </ul>
        )
    }

    handleRerenderComments = () => {
        this.renderComments()
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
            {this.renderLowerSection()}
        </>
    }

    handleClickDescription = () => {
        this.setState({active: null})
    }

    handleClickSafety = () => {
        this.setState({active: 'safety'})
    }

    handleClickComments = () => {
        this.setState({active: 'comments'})
    }

    renderLowerSection = () => {
        const { trail } = this.context
        let section
        if (this.state.active === null) {
            section = <TrailDescription trail={trail} />
        } else if (this.state.active === 'safety') {
            section = <TrailSafety trail={trail} />
        } else if (this.state.active === 'comments') {
            section = this.renderComments()
        }
         return (
            <div className='LowerSection'>
                <ul className='trailnav'>
                    <li key='description'>
                        <NavLink
                            activeClassName='active_trailnav'
                            exact to={`/trails/${trail.id}`}
                            onClick={this.handleClickDescription}
                        >
                            Description
                        </NavLink>
                    </li>
                    <li key='safety'>
                        <NavLink
                            activeClassName='active_trailnav'
                            to={`/trails/${trail.id}/safety`}
                            onClick = {this.handleClickSafety}
                        >
                            Safety
                        </NavLink>
                    </li>
                    <li key='comments'>
                        <NavLink
                            activeClassName='active_trailnav'
                            to={`/trails/${trail.id}/comments`}
                            onClick = {this.handleClickComments}
                        >
                            Comments
                        </NavLink>
                    </li>
                    <li key='ratings'>
                        <NavLink
                            activeClassName='active_trailnav'
                            to={`/trails/${trail.id}/ratings`}
                        >
                            Ratings
                        </NavLink>
                    </li>
                </ul>
                {section}
            </div>
        )
    }



    render() {
        const { trail, error } = this.context
        let content

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
            <p>Website: <a href={`${trail.website}`} target='_blank' rel='noreferrer'>{trail.website}</a></p>
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

function TrailDescription({ trail }) {
    return (
        <div className='TrailText'>
            <p className='trail_paragraph'>{trail.description}</p>
        </div>
    )
}

function TrailSafety({ trail }) {
    return (
        <div className='TrailText'>
            <p className='trail_paragraph'>{trail.safety}</p> 
        </div>
    )
}