import { combineReducers } from 'redux';
import authReducer from './auth';
import bookReducer from './book';
import messageReducer from './message';

export default combineReducers({
	auth: authReducer,
	message: messageReducer,
	books: bookReducer
});
