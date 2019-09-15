import {
  LOAD_BOOKS,
  LOAD_MORE,
  FILTER_BOOKS,
  LOAD_MY_BOOKS,
  LOAD_MORE_MY_BOOKS,
  UPLOAD_DONE,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
} from '../actions/types';
import produce from 'immer';

const initialState = {
  next: null,
  myBookNext: null,
  books: [],
  filteredBooks: [],
  myBooks: [],
  costLow: true,
  filterText: '',
  uploadDone: false,
};

const bookReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BOOKS:
        draft.next = action.payload.next;
        draft.books = [...action.payload.books];
        draft.filteredBooks = [...action.payload.books];

        break;

      case LOAD_MORE:
        draft.next = action.payload.next;
        draft.books = [...action.payload.books, ...draft.books];
        if (draft.filterText) {
          draft.filteredBooks = [
            ...draft.filteredBooks,
            ...action.payload.books.includes(draft.filterText.toLowerCase()),
          ];
        } else {
          draft.filteredBooks = [
            ...draft.filteredBooks,
            ...action.payload.books,
          ];
        }
        break;

      case FILTER_BOOKS:
        if (!action.payload) {
          draft.filteredBooks = [...draft.books];
        }
        draft.filterText = action.payload;
        draft.filteredBooks = [
          ...draft.books.filter(book => {
            const contains =
              book.book_name.startsWith(action.payload) ||
              book.author.startsWith(action.payload);

            return contains;
          }),
        ];
        break;

      case LOAD_MY_BOOKS:
        draft.myBookNext = action.payload.next;
        draft.myBooks = [...action.payload.books];
        break;

      case LOAD_MORE_MY_BOOKS:
        draft.myBookNext = action.payload.next;
        draft.myBooks = [...draft.myBooks, ...action.payload.books];
        break;

      case UPLOAD_DONE:
        draft.uploadDone = action.payload;
        break;

      case LOW_TO_HIGH:
        draft.filteredBooks = draft.filteredBooks.sort(
          (a, b) => a['cost'] - b['cost'],
        );
        break;

      case HIGH_TO_LOW:
        draft.filteredBooks = draft.filteredBooks.sort(
          (a, b) => b['cost'] - a['cost'],
        );
        break;
    }
    return draft;
  });

export default bookReducer;
