/*
  tslint:disable:
  no-reference-import
  array-type
  interface-name
  max-classes-per-file
  member-access
  member-ordering
*/

/// <reference types="react" />
/// <reference types="jsplumb" />
import PropTypes from 'prop-types';
import {
  CSSProperties,
  PureComponent,
  ReactElement,
  ReactText
} from 'react';
import {
  jsPlumbInstance
} from 'jsplumb'

export type onRemoveConnection = (connectionId: string, sourceId?: string, targetId?: string) => any

export interface BridgeProps {
  id: string;
}

export class Bridge extends PureComponent<BridgeProps> {
  static propTypes: {
    id: PropTypes.Validator<any>;
  };
  private static defaultProps;
  private overlay;
  constructor(props: BridgeProps);
  render(): React.ReactPortal;
}

export interface PortalsProps {
  children: ((connId: string, source?: string, target?: string, onRemoveConnection?: onRemoveConnection) => (ReactElement<any>)) | null;
  connections: Connections;
  id: string;
  onRemoveConnection: onRemoveConnection;
}

export class Portals extends PureComponent<PortalsProps> {
  static propTypes: {
    children: PropTypes.Validator<any>;
    connections: PropTypes.Validator<any>;
    id: PropTypes.Validator<any>;
    onRemoveConnection: PropTypes.Validator<any>;
  };
  private static defaultProps;
  constructor(props: PortalsProps);
  render(): JSX.Element;
}

export interface CloseProps {
  id?: string;
  onClose?: (id: string, source?: string, target?: string) => any;
  source?: string;
  target?: string;
}

export class Close extends PureComponent<CloseProps> {
  static propTypes: {
    connId: PropTypes.Requireable<any>;
    onClose: PropTypes.Requireable<any>;
    source: PropTypes.Requireable<any>;
    target: PropTypes.Requireable<any>;
  };
  private static defaultProps;
  private overlay;
  render(): JSX.Element;
  private handleClose;
}

export interface Connection {
  bridge?: ((connId: string, source?: string, target?: string, onRemoveConnection?: onRemoveConnection) => (ReactElement<any>)) | false
  id: string;
  source: string;
  target: string;
}

export type Connections = Connection[];

export interface GraphProps {
  bridge?: ((connId: string, source?: string, target?: string, onRemoveConnection?: onRemoveConnection) => (ReactElement<any>)) | false
  className?: string;
  connections?: Connections;
  height?: ReactText;
  id: string;
  maxScale?: number;
  minScale?: number;
  onAddConnection?: (connectionId: string, sourceId: string, targetId: string) => any;
  onPanAndZoom?: (x?: number, y?: number, scale?: number, event?: MouseEvent) => any;
  onPanEnd?: (x?: number, y?: number, event?: MouseEvent | TouchEvent) => any;
  onPanMove?: (x?: number, y?: number, event?: MouseEvent | TouchEvent) => any;
  onPanStart?: (event?: MouseEvent | TouchEvent) => any;
  onRemoveConnection?: onRemoveConnection;
  onSelect?: (selected: string[]) => any;
  onZoom?: (x?: number, y?: number, scale?: number, event?: MouseEvent) => any;
  passOnProps?: boolean;
  renderOnChange?: boolean;
  scale?: number;
  scaleFactor?: number;
  settings?: {
    [key: string]: any;
  };
  style?: CSSProperties;
  styleName?: string;
  width?: ReactText;
  xOffset?: number;
  yOffset?: number;
}

export interface GraphState {
  xOffset: number;
  yOffset: number;
}

export class Graph extends PureComponent<GraphProps, GraphState> {
  static propTypes: {
    bridge: PropTypes.Requireable<any>;
    children: PropTypes.Requireable<any>;
    className: PropTypes.Requireable<any>;
    connections: PropTypes.Requireable<any>;
    height: PropTypes.Requireable<any>;
    id: PropTypes.Validator<any>;
    maxScale: PropTypes.Requireable<any>;
    minScale: PropTypes.Requireable<any>;
    onAddConnection: PropTypes.Requireable<any>;
    onPanAndZoom: PropTypes.Requireable<any>;
    onPanEnd: PropTypes.Requireable<any>;
    onPanMove: PropTypes.Requireable<any>;
    onPanStart: PropTypes.Requireable<any>;
    onRemoveConnection: PropTypes.Requireable<any>;
    onSelect: PropTypes.Requireable<any>;
    onZoom: PropTypes.Requireable<any>;
    passOnProps: PropTypes.Requireable<any>;
    renderOnChange: PropTypes.Requireable<any>;
    scale: PropTypes.Requireable<any>;
    scaleFactor: PropTypes.Requireable<any>;
    settings: PropTypes.Requireable<any>;
    style: PropTypes.Requireable<any>;
    styleName: PropTypes.Requireable<any>;
    width: PropTypes.Requireable<any>;
    xOffset: PropTypes.Requireable<any>;
    yOffset: PropTypes.Requireable<any>;
  };
  static defaultProps: GraphProps;
  state: {
    xOffset: number;
    yOffset: number;
  };
  private jsPlumb;
  private nodes;
  constructor(props: GraphProps);
  componentWillReceiveProps({scale, xOffset, yOffset}: GraphProps): void;
  componentDidMount(): void;
  componentDidUpdate({ connections: prevConnections }: GraphProps): void;
  componentWillUnmount(): void;
  render(): JSX.Element;
  private handlePanAndZoom;
  private handlePanEnd;
  private handlePanMove;
  private renderConnections;
  private handleMouseDown;
  private renderConnection;
  private handleNewConnection;
  private handleAddConnection;
  private handleDetachedConnection;
  private handleRemoveConnection;
}

export interface NodeProps {
  allowLoopback?: boolean;
  children?: ((id?: string, drag?: boolean) => (ReactElement<any>)) | null
  className?: string;
  diagramId?: string;
  dragSettings?: {[key: string]: any};
  id: string;
  jsPlumb?: jsPlumbInstance;
  onDrag?: (id: string, x: number, y: number) => any;
  onDrop?: (id: string, x: number, y: number) => any;
  onSelect?: (selected: string[]) => any;
  sourceSettings?: { [key: string]: any };
  style?: CSSProperties;
  styleName?: string;
  targetSettings?: {[key: string]: any};
  type?: 'both' | 'source' | 'target';
}

export interface NodeState {
  drag: boolean;
}

export class Node extends PureComponent<NodeProps, NodeState> {
  static propTypes: {
    allowLoopback: PropTypes.Requireable<any>;
    children: PropTypes.Requireable<any>;
    className: PropTypes.Requireable<any>;
    diagramId: PropTypes.Validator<any>;
    dragSettings: PropTypes.Requireable<any>;
    id: PropTypes.Validator<any>;
    jsPlumb: PropTypes.Requireable<any>;
    onDrag: PropTypes.Requireable<any>;
    onDrop: PropTypes.Requireable<any>;
    onSelect: PropTypes.Requireable<any>;
    sourceSettings: PropTypes.Requireable<any>;
    style: PropTypes.Requireable<any>;
    styleName: PropTypes.Requireable<any>;
    targetSettings: PropTypes.Requireable<any>;
    type: PropTypes.Requireable<any>;
  };
  private static defaultProps;
  state: {
    drag: boolean;
  };
  private connectionFilter: string;
  private dragFilter: string;
  private timeout: NodeJS.Timer;
  private style: CSSProperties;
  private drop: boolean;
  private node;
  constructor(props: NodeProps);
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): JSX.Element;
  private handlePrevent;
  private handleMouseDown;
  private handleSelect;
  private handleDeselect;
  private addEndPoints;
  private makeNodeDraggable;
  private handleDrag;
  private handleDrop;
}

export interface NodeContentProps {
  className?: string;
  id?: string;
  label?: string;
  onRemoveNode?: (id?: string) => any;
  selected?: boolean;
  style?: CSSProperties;
  styleName?: string;
}

export class NodeContent extends PureComponent<NodeContentProps> {
  static propTypes: {
    className: PropTypes.Requireable<any>;
    id: PropTypes.Requireable<any>;
    onRemoveNode: PropTypes.Requireable<any>;
    selected: PropTypes.Requireable<any>;
    style: PropTypes.Requireable<any>;
    styleName: PropTypes.Requireable<any>;
  };
  private static defaultProps: NodeContentProps;
  render(): JSX.Element;
  private handleClose;
}

export interface NodesProps {
  id: string;
  jsPlumb: jsPlumbInstance;
  onRender: (...args: any[]) => any;
  onSelect: (selected: string[]) => any;
}

export class Nodes extends PureComponent<NodesProps> {
  static propTypes: {
    id: PropTypes.Validator<any>;
    jsPlumb: PropTypes.Validator<any>;
    onRender: PropTypes.Validator<any>;
    onSelect: PropTypes.Requireable<any>;
  };
  render(): JSX.Element;
}
