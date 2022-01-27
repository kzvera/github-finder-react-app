import { combineReducers } from 'redux'
import githubReducer from '../reducers/githubReducer'
import alertReducer from '../reducers/alertReducer';

export default combineReducers({
    github: githubReducer,
    alert: alertReducer
});
