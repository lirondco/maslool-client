import config from "../config";
import TokenService from "./token-service";

const ModeratorApiService = {
        getFlaggedComments() {
            return fetch(`${config.API_ENDPOINT}/comments/flagged`, {
              method: "GET",
              headers: {
                "content-type": " application/json",
                authorization: `bearer ${TokenService.getAuthToken()}`,
              },
            }).then((res) =>
              !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            );
          },

          getUsers() {
            return fetch(`${config.API_ENDPOINT}/users`, {
                method: "GET",
                headers: {
                  "content-type": " application/json",
                  authorization: `bearer ${TokenService.getAuthToken()}`,
                },
              }).then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
              );
          },

          toggleBanUser(userId) {
            return fetch(`${config.API_ENDPOINT}/users/ban/${userId}`, {
                method: "PATCH",
                headers: {
                  "content-type": " application/json",
                  authorization: `bearer ${TokenService.getAuthToken()}`,
                },
              }).then((res) =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : ''
              );
          }
        
}

export default ModeratorApiService