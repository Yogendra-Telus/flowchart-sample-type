import defaultState from './defaultState';
import reducers from './reducers';
import State from './state';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {loadState, saveState} from './localStorage';

const middleware = applyMiddleware(...[].concat(
  // @ts-ignore
  process.env.NODE_ENV !== 'production' ?
  [
    // tslint:disable-next-line:no-var-requires
    require('redux-immutable-state-invariant').default()
  ] : []
));

const store = createStore(
  reducers,
  {
    ...defaultState,
    ...loadState()
  },
  composeWithDevTools(
    middleware
  )
);

store.subscribe(() => {
  // @ts-ignore
  saveState(store.getState() as State.All);
});

export default store;
