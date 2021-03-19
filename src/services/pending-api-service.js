import config from '../config'
import TokenService from './token-service'

const PendingApiService = {
    postPending(message) {
        return fetch(`${config.API_ENDPOINT}/pending`, {
            method: 'POST',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                message
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getAllPending() {
        return fetch(`${config.API_ENDPOINT}/pending`, {
            method: 'GET',
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

    getPending(pendingId) {
        return fetch(`${config.API_ENDPOINT}/pending/${pendingId}`, {
            method: 'GET',
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

    deletePending(pendingId) {
        return fetch(`${config.API_ENDPOINT}/pending/${pendingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': ' application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : ''
            )
    }


}

export default PendingApiService