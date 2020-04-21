import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    posts: postsReducer,
    users: UsersReducer
});