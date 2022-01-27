import axios from 'axios'
import { GET_USERS, GET_USER_AND_REPOS, SET_LOADING, CLEAR_USERS } from "./types"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

export const searchUsers = (text) => async (dispatch) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`);

    dispatch({
        type: GET_USERS,
        payload: response.data.items
    })
}

export const getUserAndRepos = (login) => async (dispatch) => {
    const [user, repos] = await Promise.all([ // example of when you need to make multiple requests in a single function
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ]);

    dispatch({
        type: GET_USER_AND_REPOS,
        payload: { user: user.data, repos: repos.data }
    })
}

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}