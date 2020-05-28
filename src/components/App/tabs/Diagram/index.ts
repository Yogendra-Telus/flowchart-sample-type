import {UIRouterReact} from '@uirouter/react';
import {
  onSetDiagramScale,
  onSetDiagramXYOffset
} from '../../../../actions/diagrams';
import {
  onRemoveNode,
  onUpdateNode
} from '../../../../actions/nodes';
import {onSelectionUpdate} from '../../../../actions/selections';
import {
  onAddConnection,
  onRemoveConnection
} from '../../../../actions/sources';
import defaultState from '../../../../defaultState';
import {Connections} from 'jsplumb-react';
import {connect} from 'react-redux';
import {connectWithRouter} from 'ui-router-react-digest';
import Diagram from './Diagram';

const defaultConnections: Connections = [];
const defaultNodes: IDiagramNodes = {};

const mapRouterToProps = (router: UIRouterReact) => ({
  diagramId: router.stateService.params.id
});

const mapStateToProps = (
  state = defaultState,
  {diagramId}: {diagramId: string}
) => ({
  connections: state.diagrams[diagramId].nodes.reduce(
    (connections, nodeId) => ([
      ...connections,
      ...(state.sources[nodeId] ? state.sources[nodeId].map(connectionId => (
        {source: nodeId, id: connectionId, target: state.connections[connectionId].target}
      )) : [])
    ]),
    [...defaultConnections]
  ),
  nodes: state.diagrams[diagramId].nodes.reduce(
    (nodes, nodeId) => (
      // tslint:disable-next-line:prefer-object-spread
      Object.assign(nodes, {[nodeId]: state.nodes[nodeId]})
    ),
    {...defaultNodes}
  ),
  scale: state.diagrams[diagramId].scale,
  selections: state.selections,
  xOffset: state.diagrams[diagramId].xOffset,
  yOffset: state.diagrams[diagramId].yOffset
});

export default connectWithRouter(
  mapRouterToProps,
  false
)(
  connect(
    mapStateToProps,
    {
      onAddConnection,
      onRemoveConnection,
      onRemoveNode,
      onSelectionUpdate,
      onSetDiagramScale,
      onSetDiagramXYOffset,
      onUpdateNode
    }
  )(Diagram)
);
