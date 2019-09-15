import { AUTH_SUCCESS, LOGOUT } from '../actions/types';
import produce from 'immer';
const initialState = {
	token: '',
	authenticated: false
};

const authReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		{
			switch (action.type) {
				case AUTH_SUCCESS:
					draft.authenticated = true;
					draft.token = action.payload;
					break;
				case LOGOUT:
					draft.authenticated = false;
					break;
			}

			return draft;
		}
	});

export default authReducer;
