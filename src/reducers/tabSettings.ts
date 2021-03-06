import {
  ITabSelectAction
} from '../actions/tabSettings';
import defaultState from '../defaultState';

function tabSettings(
  state = defaultState.tabSettings,
  action: ITabSelectAction
) {
  switch (action.type) {
    case 'TAB_SELECT':
      return {
        ...state,
        index: typeof action.index === 'number' ? action.index : state.index
      };
    default:
      return state;
  }
}

export default tabSettings;
