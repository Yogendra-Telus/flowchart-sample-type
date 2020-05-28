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
  // @ts-ignore
  private static defaultProps;
  // @ts-ignore
  private overlay;
  // @ts-ignore
  constructor(props: BridgeProps);
  // @ts-ignore
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
  // @ts-ignore
  private static defaultProps;
  // @ts-ignore
  constructor(props: PortalsProps);
  // @ts-ignore
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
  // @ts-ignore
  private static defaultProps;
  // @ts-ignore
  private overlay;
  // @ts-ignore
  render(): JSX.Element;
  // @ts-ignore
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
  // @ts-ignore
  state: {
    xOffset: number;
    yOffset: number;
  };
  // @ts-ignore
  private jsPlumb;
  // @ts-ignore
  private nodes;
  // @ts-ignore
  constructor(props: GraphProps);
  // @ts-ignore
  componentWillReceiveProps({scale, xOffset, yOffset}: GraphProps): void;
  // @ts-ignore
  componentDidMount(): void;
  // @ts-ignore
  componentDidUpdate({ connections: prevConnections }: GraphProps): void;
  // @ts-ignore
  componentWillUnmount(): void;
  // @ts-ignore
  render(): JSX.Element;
  // @ts-ignore
  private handlePanAndZoom;
  // @ts-ignore
  private handlePanEnd;
  // @ts-ignore
  private handlePanMove;
  // @ts-ignore
  private renderConnections;
  // @ts-ignore
  private handleMouseDown;
  // @ts-ignore
  private renderConnection;
  // @ts-ignore
  private handleNewConnection;
  // @ts-ignore
  private handleAddConnection;
  // @ts-ignore
  private handleDetachedConnection;
  // @ts-ignore
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
  // @ts-ignore
  private static defaultProps;
  // @ts-ignore
  state: {
    drag: boolean;
  };
  // @ts-ignore
  private connectionFilter: string;
  // @ts-ignore
  private dragFilter: string;
  // @ts-ignore
  private timeout: NodeJS.Timer;
  // @ts-ignore
  private style: CSSProperties;
  // @ts-ignore
  private drop: boolean;
  // @ts-ignore
  private node;
  // @ts-ignore
  constructor(props: NodeProps);
  // @ts-ignore
  componentDidMount(): void;
  // @ts-ignore
  componentWillUnmount(): void;
  // @ts-ignore
  render(): JSX.Element;
  // @ts-ignore
  private handlePrevent;
  // @ts-ignore
  private handleMouseDown;
  // @ts-ignore
  private handleSelect;
  // @ts-ignore
  private handleDeselect;
  // @ts-ignore
  private addEndPoints;
  // @ts-ignore
  private makeNodeDraggable;
  // @ts-ignore
  private handleDrag;
  // @ts-ignore
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
  // @ts-ignore
  private static defaultProps: NodeContentProps;
  // @ts-ignore
  render(): JSX.Element;
  // @ts-ignore
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
  // @ts-ignore
  render(): JSX.Element;
}
