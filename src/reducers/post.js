// @flow
import {
  REQUEST_FETCH_ITEM_LIST,
  SUCCESS_FETCH_ITEM_LIST,
  FAILURE_FETCH_ITEM_LIST
} from '../actions/post';
import type { Action } from '../actions/post';

type State = {
  isFetching: boolean,
  items: Array<any>,
  error: any
};

const initialState = {
  isFetching: false,
  items: [],
  error: {}
};

export default function post(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case REQUEST_FETCH_ITEM_LIST:
      return { ...state, isFetching: true };
    case SUCCESS_FETCH_ITEM_LIST:
      return { ...state, isFetching: false, items: action.data };
    case FAILURE_FETCH_ITEM_LIST:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}
