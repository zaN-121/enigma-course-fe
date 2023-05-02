const TOKEN = 'TOKEN'
export const setToken = (token) => {
    token = JSON.stringify(token)
    localStorage.setItem(TOKEN, token)

}

export const getToken = () => {
    const token = localStorage.getItem(TOKEN)
    return JSON.parse(token)
}

export const deleteToken = () => {
    localStorage.removeItem(TOKEN)
}