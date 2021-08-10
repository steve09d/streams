import streams from '../apis/streams';
import history from '../history';

import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const res = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: res.data,
  });
  // progammatic navigation
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const res = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: res.data,
  });
};

export const fetchStream = id => async dispatch => {
  const res = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: res.data,
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const res = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: res.data,
  });

  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });

  history.push('/');
};
