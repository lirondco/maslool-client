import config from '../config'
import TokenService from './token-service'

const TrailsApiService = {
    searchTrails(query) {
        return fetch(`${config.API_ENDPOINT}/trails${query}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getTrail(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postTrail(newTrail) {
        return fetch(`${config.API_ENDPOINT}/trails`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newTrail)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    editTrail(trailid, query) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailid}`, {
            method: 'PATCH',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(query)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
            )
    },

    deleteTrail(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
                )
    },

    getTrailComments(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}/comments`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getTrailRatings(trailId) {
        return fetch(`${config.API_ENDPOINT}/trails/${trailId}/ratings`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postComment(trailId, content) {
        return fetch(`${config.API_ENDPOINT}/comments/${trailId}`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                content
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postRating(trailId, rating) {
        return fetch(`${config.API_ENDPOINT}/ratings/${trailId}`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                rating
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    flagComment(commentId) {
        return fetch(`${config.API_ENDPOINT}/comments/flag/${commentId}`, {
            method: 'PATCH',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    editComment(commentId, content) {
        return fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                content
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
            )
    },

    deleteComment(commentId) {
        return fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
                )
    },

    editRating(ratingId, rating) {
        return fetch(`${config.API_ENDPOINT}/ratings/${ratingId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                rating
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
            )
    },

}

export default TrailsApiService