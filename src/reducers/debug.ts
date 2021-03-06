import {IDebugToggleAction} from '../actions/debug';
import defaultState from '../defaultState';

const debug = (
  state = defaultState.debug,
  action: IDebugToggleAction
): boolean => {
  switch (action.type) {
    case 'DEBUG':
      return typeof action.value === 'undefined' || action.value === null ?
        !state :
        action.value;
    default:
      return state;
  }
};

export default debug;
