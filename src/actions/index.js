import C from './types';

import postsJson from '../utils/posts.json';

// Actions
export const updateTotalAssets = items => ({
  type: C.TOTAL_ASSETS,
  payload: items,
});

export const updateVisibleAssets = items => ({
  type: C.VISIBLE_ASSETS,
  payload: items,
});

export const filterAssets = text => ({
  type: C.FILTER_ASSETS,
  payload: text.toString().toLowerCase(),
});

// Action Creators

export const fetchingAssets = () => async (dispatch) => {
  const initialAssets = postsJson;
  setTimeout(() => {
    dispatch(updateTotalAssets(initialAssets));
    dispatch({
      type: C.VISIBLE_ASSETS,
      payload: initialAssets,
    });
  }, 500);
};

export const searchingAssets = text => async (dispatch) => {
  dispatch(filterAssets(text.toString().toLowerCase()));
};
