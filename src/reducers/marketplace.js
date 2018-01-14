import _ from 'lodash';
import C from '../actions/types';

// const marketplaceState = {
//   totalAssets: [],
//   visibleAssets: [],
//   RemovedAssets: [],
// };

const marketplace = (state = {}, action) => {
  switch (action.type) {
    case C.TOTAL_ASSETS:
      return Object.assign({}, state, {
        totalAssets: action.payload,
      });

    case C.VISIBLE_ASSETS:
      return Object.assign({}, state, {
        visibleAssets: action.payload,
      });

    case C.FILTER_ASSETS:
      return Object.assign({}, state, {
        visibleAssets: state.totalAssets.filter(asset =>
          _.includes(asset.title, action.payload.toString().toLowerCase())),
      });

    default:
      return state;
  }
};

export default marketplace;
