import { v4 as uuidv4 } from 'uuid';

// Actions.
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [
    { name: 'first part', id: uuidv4(), status: true },
    { name: 'second part', id: uuidv4(), status: false },
    { name: 'third part', id: uuidv4(), status: true },
    { name: 'fourth part', id: uuidv4(), status: false }
  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CREATE_PART:
      return {
        items: [
          ...state.items,
          action.partItem
        ]
      };
    case actionTypes.LOAD_PARTS:
      return {
        items: [
          ...state.items,
        ],
      };
    default:
      return state
  }
};