// Actions.
import * as actionTypes from '../actions/actionTypes';

// `Models`.
import { Action, Parts } from '../../models/Store';

const initialState: Parts = {
  items: [
    { name: 'first part', id: Date.now(), status: true },
    { name: 'second part', id: Date.now(), status: false },
    { name: 'third part', id: Date.now(), status: true },
    { name: 'fourth part', id: Date.now(), status: false }
  ]
};

export default (state = initialState, action: Action = {}) => {
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
