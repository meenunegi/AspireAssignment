import {BALANCE_LIMIT} from './constant';

const initialState = {
  balanceLimitValue: 500,
};
const balanceLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case BALANCE_LIMIT:
      return {
        ...state,
        balanceLimitValue: action.payload,
      };
    default:
      return state;
  }
};
export default balanceLimitReducer;
