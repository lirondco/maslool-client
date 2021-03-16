import config from '../config'
import TokenService from './token-service'

const TrailsApiService = {
    searchTrails(query) {
        return fetch(`${config.API_ENDPOINT}/trails?region=${query.region}&name=${query.name}&rating=${query.rating}&difficulty=${query.difficulty}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    getTrail(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    getTraiLComments(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}/comments`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    getTrailRatings(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}/ratings`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    postComment(trailId, content) {
        return fetch(`${config.API_ENDPOINT}/comments/${trailId}`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
            body: JSON.stringify({
                content
            })
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    postRating(trailId, rating) {
        return fetch(`${config.API_ENDPOINT}/ratings/${trailId}`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken}`
            },
            body: JSON.stringify({
                rating
            })
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

}

export default TrailsApiService