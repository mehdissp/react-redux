import { combineReducers } from 'redux';
import postsReducers from '../reducers/postsReducers';


export default combineReducers({
    posts:postsReducers
});