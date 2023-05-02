import restApi from "../config/restApi";

export const login = (payload) => {
    return restApi.post('/auth/login', payload)
}