import defaultState from '../defaultState';

export default function drawers(
  state = defaultState.drawers,
  action: any
) {
  switch (action.type) {
    default:
      return state;
  }
}
