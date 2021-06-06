import { combineReducers } from 'redux';
import postsReducers from '../reducers/postsReducers';
import usersReducer from '../reducers/usersReducer';


export default combineReducers({
    posts:postsReducers,
    users:usersReducer, 
});