import {BALANCE_LIMIT} from './constant';

export function balanceLimitUpdate(balanceLimitValue) {
  return {
    type: BALANCE_LIMIT,
    payload: balanceLimitValue,
  };
}
