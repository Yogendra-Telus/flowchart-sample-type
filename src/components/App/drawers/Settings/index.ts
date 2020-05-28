import {
  onDrawerDockedToggle,
  onDrawerDragToggle,
  onDrawerHoverToggle
} from '../../../../actions/drawerSettings';
import {onOrientationToggle} from '../../../../actions/orientation';
import {
  onTabAdd,
  onTabRemove
} from '../../../../actions/tabs';
import defaultState from '../../../../defaultState';
import {connect} from 'react-redux';
import Settings from './Settings';

const mapStateToProps = (state = defaultState) => ({
  drawerDocked: state.drawerSettings.docked,
  drawerDrag: state.drawerSettings.drag,
  drawerHover: state.drawerSettings.hover,
  orientation: state.orientation,
  tabs: state.tabs
});

export default connect(
  mapStateToProps,
  {
    onDrawerDockedToggle,
    onDrawerDragToggle,
    onDrawerHoverToggle,
    onOrientationToggle,
    onTabAdd,
    onTabRemove
  }
)(Settings);
