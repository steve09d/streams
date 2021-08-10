import _ from 'lodash';

import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from '../_actions/types';

//key interpolation
/*
animals: { cat: 'meow', dog: 'bark' } 
const addNewValue = { ...animals, [lion]: 'roar'}
animals: { cat: 'meow', dog: 'bark', lion: 'roar' } 
*/

const StreamsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    /* case FETCH_STREAMS:
      return {
        ...state,
        ...payload,
      }; */
    case FETCH_STREAMS:
      return {
        ...state,
        ..._.mapKeys(payload, 'id'),
      };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_STREAM:
      delete state.payload;
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default StreamsReducer;
