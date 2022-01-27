import { GET_USERS, GET_USER_AND_REPOS, SET_LOADING, CLEAR_USERS } from "../actions/types"

const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
}

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER_AND_REPOS:
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}

export default githubReducer