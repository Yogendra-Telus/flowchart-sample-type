import connections from './data/connections';
import diagrams from './data/diagrams';
import nodes from './data/nodes';
import sources from './data/sources';
import State from './state';

const defaultState: State.All = {
  connections,
  debug: false,
  diagrams,
  drawerSettings: {
    docked: true,
    drag: false,
    hover: true,
    index: 0,
    open: true
  },
  drawers: [{
    name: 'tools',
    params: {
      title: 'Tools'
    }
  }, {
    name: 'settings',
    params: {
      title: 'Settings'
    }
  }],
  miscellaneous: {
    shortName: 'jr',
    title: 'jsPlumb React Demo'
  },
  nodes,
  orientation: 'left',
  selections: [],
  sources,
  tabSettings: {
    index: 1
  },
  tabs: [{
    name: '404',
    params: {
      hidden: true,
      title: '404',
      type: '404'
    },
    sticky: true
  }, {
    deepStateRedirect: true,
    name: 'complexDiagram',
    params: {
      swipe: false,
      title: 'Complex Diagram',
      type: 'diagram'
    },
    sticky: true
  }, {
    deepStateRedirect: true,
    name: 'simpleDiagram',
    params: {
      swipe: false,
      title: 'Simple Diagram',
      type: 'simpleDiagram'
    },
    sticky: true
  }]
};

export default defaultState;
