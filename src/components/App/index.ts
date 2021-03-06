import {onDrawerOpenToggle, onDrawerSelect} from '../../actions/drawerSettings';
import {onTabSelect} from '../../actions/tabSettings';
import defaultState from '../../defaultState';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state = defaultState) => ({
  debug: state.debug,
  drawerDocked: state.drawerSettings.docked,
  drawerDrag: state.drawerSettings.drag,
  drawerHover: state.drawerSettings.hover,
  drawerIndex: state.drawerSettings.index,
  drawerOpen: state.drawerSettings.open,
  drawers: state.drawers,
  orientation: state.orientation,
  tabIndex: state.tabSettings.index,
  tabs: state.tabs,
  title: state.miscellaneous.title
});

export default hot(module)(connect(
  mapStateToProps,
  {
    onDrawerOpenToggle,
    onDrawerSelect,
    onTabSelect
  }
)(
  App
));
