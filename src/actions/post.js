// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export const REQUEST_FETCH_ITEM_LIST = 'REQUEST_FETCH_ITEM_LIST';
export const SUCCESS_FETCH_ITEM_LIST = 'SUCCESS_FETCH_ITEM_LIST';
export const FAILURE_FETCH_ITEM_LIST = 'FAILURE_FETCH_ITEM_LIST';

export type Action =
  | { type: 'REQUEST_FETCH_ITEM_LIST' }
  | { type: 'SUCCESS_FETCH_ITEM_LIST', data: any }
  | { type: 'FAILURE_FETCH_ITEM_LIST', error: any };

export const fetchItemList = () => async (dispatch: ReduxDispatch) => {
  dispatch({ type: REQUEST_FETCH_ITEM_LIST });
  const data = await fetchPostItemList();
  dispatch({ type: SUCCESS_FETCH_ITEM_LIST, data });
};

async function fetchPostItemList(): any {
  const res = await fetch('https://qiita.com/api/v2/items?page=1&per_page=20')
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  return res;
}
