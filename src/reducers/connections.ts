import {
  IAddConnectionAction,
  IRemoveConnectionAction,
  IUpdateConnectionAction
} from '../actions/sources';
import defaultState from '../defaultState';

export default function connections(
  state = defaultState.connections,
  action: IAddConnectionAction |
    IRemoveConnectionAction |
    IUpdateConnectionAction
): IDiagramNodes {
  switch (action.type) {
    case 'CONNECTION_ADD':
      return {
        ...state,
        [action.connectionId]: action.connection
      };
    case 'CONNECTION_REMOVE':
      const {[action.connectionId]: omit, ...remaining} = state;
      return remaining;
    case 'CONNECTION_UPDATE':
      return {
        ...state,
        [action.connectionId]: {
          ...state[action.connectionId],
          ...action.connection
        }
      };
    default:
      return state;
  }
}
