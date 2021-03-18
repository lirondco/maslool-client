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
    }
}

export default PendingApiService