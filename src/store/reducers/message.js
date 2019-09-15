import { IS_LOADING, LOADING_DONE } from '../actions/types';
import produce from 'immer';

const initialState = {
	loading: false,
	messageObject: {
		type: '',
		text: ''
	}
};

const message = (state = initialState, action) =>
	produce(state, (draft) => {
		{
			switch (action.type) {
				case IS_LOADING:
					draft.loading = true;
					break;

				case LOADING_DONE:
					draft.loading = false;
					break;
			}
			return draft;
		}
	});

export default message;
