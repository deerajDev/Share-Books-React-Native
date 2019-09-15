import {
  LOAD_BOOKS,
  FILTER_BOOKS,
  LOAD_MORE,
  LOAD_MY_BOOKS,
  LOAD_MORE_MY_BOOKS,
  UPLOAD_DONE,
} from './types';
import axios from 'axios';
import {Alert} from 'react-native';

export const getBooks = (college, branch, semester) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const url = `http://sharebooksbackend.herokuapp.com/api/books/${college}/${branch}/${semester}/`;
  axios
    .get(url, config)
    .then(res => {
      const payload = {
        next: res.data.next,
        books: res.data.results,
      };

      dispatch({
        type: LOAD_BOOKS,
        payload: payload,
      });
    })
    .catch(err => Alert.alert('Error', 'oops  , something went wrong'));
};

export const uploadBook = (
  image,
  book_name,
  author,
  branch,
  semester,
  cost,
  token,
) => dispatch => {
  dispatch({
    type: UPLOAD_DONE,
    payload: false,
  });
  const body = new FormData();
  body.append('image', {
    uri: image.uri,
    name: `${splitUri(image.uri)}.jpeg`,
    filename: `${splitUri(image.uri)}`,
    type: 'image/jpeg',
  });
  body.append('book_name', book_name);
  body.append('author', author);
  body.append('branch', branch);
  body.append('semester', semester);
  body.append('cost', cost);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  config.headers['Authorization'] = `Token ${token}`;
  axios
    .post(
      'http://sharebooksbackend.herokuapp.com/api/books/create',
      body,
      config,
    )
    .then(res => {
      dispatch({
        type: UPLOAD_DONE,
        payload: true,
      });
      Alert.alert('Success', 'Upload was successful');
    })
    .catch(err => {
      dispatch({
        type: UPLOAD_DONE,
        payload: true,
      });

      Alert.alert('Error', 'OPPS , something wrong occured');
    });
};

export const filterBooks = input => dispatch => {
  dispatch({
    type: FILTER_BOOKS,
    payload: input.toLowerCase(),
  });
};

export const loadMoreBooks = url => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .get(url, config)
    .then(res => {
      const payload = {
        next: res.data.next,
        books: res.data.results,
      };

      dispatch({
        type: LOAD_MORE,
        payload: payload,
      });
    })
    .catch(err => Alert.alert('Error', 'something wrong occurred'));
};

export const loadMyBooks = token => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  config.headers['Authorization'] = `Token ${token}`;
  axios
    .get('http://sharebooksbackend.herokuapp.com/api/books/my_books', config)
    .then(res => {
      const payload = {
        next: res.data.next,
        books: res.data.results,
      };
      dispatch({
        type: LOAD_MY_BOOKS,
        payload: payload,
      });
    })
    .catch(err => {
      Alert.alert('Error', 'could not get your books');
    });
};

export const loadMoreMyBooks = (url, token) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  config.headers['Authorization'] = `Token ${token}`;

  axios
    .get(url, config)
    .then(res => {
      const payload = {
        next: res.data.next,
        books: res.data.results,
      };

      dispatch({
        type: LOAD_MORE_MY_BOOKS,
        payload: payload,
      });
    })
    .catch(err => Alert.alert('Error', 'something wrong occurred'));
};

export const updateBook = (
  book_name,
  author,
  branch,
  semester,
  cost,
  available,
  id,
  token,
) => dispatch => {
  const body = JSON.stringify({
    book_name,
    author,
    branch,
    semester,
    cost,
    available,
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  config.headers['Authorization'] = `Token ${token}`;
  axios
    .post(
      `http://sharebooksbackend.herokuapp.com/api/books/update/${id}`,
      body,
      config,
    )
    .then(res => Alert.alert('Success', 'Update was successful'))
    .catch(err => Alert.alert('Error', 'Update Failed'));
  dispatch({
    type: UPLOAD_DONE,
  });
};

const splitUri = uri => {
  const aftersplit = uri.split('/');
  return aftersplit[aftersplit.length - 1];
};
