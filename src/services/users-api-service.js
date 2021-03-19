import config from '../config'
import TokenService from './token-service'

const UsersApiService = {
        editUser(userId, newEmail) {
          return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ email: newEmail }),
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : ''
            )
        },

        getUser(userId) {
            return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
              },
            })
              .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
          },

}

export default UsersApiService