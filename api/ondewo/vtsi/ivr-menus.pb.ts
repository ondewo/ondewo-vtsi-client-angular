/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as ondewoNlu002 from '../../ondewo/nlu/intent.pb';
import * as ondewoSip003 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi004 from '../../ondewo/vtsi/call-configs.pb';
import * as ondewoVtsi005 from '../../ondewo/vtsi/campaigns.pb';
import * as ondewoVtsi006 from '../../ondewo/vtsi/projects.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoVtsi011 from '../../ondewo/vtsi/calls.pb';
export enum IvrNodeType {
  IVR_NODE_TYPE_UNSPECIFIED = 0,
  IVR_NODE_TYPE_MENU = 1,
  IVR_NODE_TYPE_PLAY = 2,
  IVR_NODE_TYPE_ROUTE = 3,
  IVR_NODE_TYPE_HANGUP = 4,
  IVR_NODE_TYPE_SCHEDULE = 5,
  IVR_NODE_TYPE_GOTO_MENU = 6
}
export enum IvrMenuState {
  IVR_MENU_STATE_UNSPECIFIED = 0,
  IVR_MENU_STATE_DRAFT = 1,
  IVR_MENU_STATE_PUBLISHED = 2,
  IVR_MENU_STATE_PUBLISH_FAILED = 3
}
export enum IvrMenuOrderBy {
  IVR_MENU_ORDER_BY_UNSPECIFIED = 0,
  IVR_MENU_ORDER_BY_DISPLAY_NAME = 1,
  IVR_MENU_ORDER_BY_MODIFIED_AT_DESC = 2
}
export enum IvrMenuIssueSeverity {
  IVR_MENU_ISSUE_SEVERITY_UNSPECIFIED = 0,
  IVR_MENU_ISSUE_SEVERITY_ERROR = 1,
  IVR_MENU_ISSUE_SEVERITY_WARNING = 2
}
export enum IvrMenuTestState {
  IVR_MENU_TEST_STATE_UNSPECIFIED = 0,
  IVR_MENU_TEST_STATE_RUNNING = 1,
  IVR_MENU_TEST_STATE_SUCCEEDED = 2,
  IVR_MENU_TEST_STATE_TIMED_OUT = 3,
  IVR_MENU_TEST_STATE_FAILED = 4
}
/**
 * Message implementation for ondewo.vtsi.IvrMenu
 */
export class IvrMenu implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrMenu';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrMenu();
    IvrMenu.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrMenu) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.entryNodeId = _instance.entryNodeId || '';
    _instance.nodes = _instance.nodes || [];
    _instance.languageCode = _instance.languageCode || '';
    _instance.t2sPipelineId = _instance.t2sPipelineId || '';
    _instance.inboundPhoneNumbers = _instance.inboundPhoneNumbers || [];
    _instance.defaultInbound = _instance.defaultInbound || false;
    _instance.disabled = _instance.disabled || false;
    _instance.state = _instance.state || 0;
    _instance.revision = _instance.revision || '0';
    _instance.publishedRevision = _instance.publishedRevision || '0';
    _instance.stateMessage = _instance.stateMessage || '';
    _instance.layout = _instance.layout || {};
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.publishedAt = _instance.publishedAt || undefined;
    _instance.publishedBy = _instance.publishedBy || '';
    _instance.nodeStats = _instance.nodeStats || {};
    _instance.nodeStatsUpdatedAt = _instance.nodeStatsUpdatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrMenu,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.entryNodeId = _reader.readString();
          break;
        case 5:
          const messageInitializer5 = new IvrNode();
          _reader.readMessage(
            messageInitializer5,
            IvrNode.deserializeBinaryFromReader
          );
          (_instance.nodes = _instance.nodes || []).push(messageInitializer5);
          break;
        case 6:
          _instance.languageCode = _reader.readString();
          break;
        case 7:
          _instance.t2sPipelineId = _reader.readString();
          break;
        case 8:
          (_instance.inboundPhoneNumbers =
            _instance.inboundPhoneNumbers || []).push(_reader.readString());
          break;
        case 9:
          _instance.defaultInbound = _reader.readBool();
          break;
        case 10:
          _instance.disabled = _reader.readBool();
          break;
        case 11:
          _instance.state = _reader.readEnum();
          break;
        case 12:
          _instance.revision = _reader.readInt64String();
          break;
        case 13:
          _instance.publishedRevision = _reader.readInt64String();
          break;
        case 14:
          _instance.stateMessage = _reader.readString();
          break;
        case 15:
          const msg_15 = {} as any;
          _reader.readMessage(
            msg_15,
            IvrMenu.LayoutEntry.deserializeBinaryFromReader
          );
          _instance.layout = _instance.layout || {};
          _instance.layout[msg_15.key] = msg_15.value;
          break;
        case 16:
          _instance.createdBy = _reader.readString();
          break;
        case 17:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.modifiedBy = _reader.readString();
          break;
        case 19:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.publishedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.publishedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.publishedBy = _reader.readString();
          break;
        case 22:
          const msg_22 = {} as any;
          _reader.readMessage(
            msg_22,
            IvrMenu.NodeStatsEntry.deserializeBinaryFromReader
          );
          _instance.nodeStats = _instance.nodeStats || {};
          _instance.nodeStats[msg_22.key] = msg_22.value;
          break;
        case 23:
          _instance.nodeStatsUpdatedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.nodeStatsUpdatedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    IvrMenu.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: IvrMenu, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.entryNodeId) {
      _writer.writeString(4, _instance.entryNodeId);
    }
    if (_instance.nodes && _instance.nodes.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.nodes as any,
        IvrNode.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(6, _instance.languageCode);
    }
    if (_instance.t2sPipelineId) {
      _writer.writeString(7, _instance.t2sPipelineId);
    }
    if (_instance.inboundPhoneNumbers && _instance.inboundPhoneNumbers.length) {
      _writer.writeRepeatedString(8, _instance.inboundPhoneNumbers);
    }
    if (_instance.defaultInbound) {
      _writer.writeBool(9, _instance.defaultInbound);
    }
    if (_instance.disabled) {
      _writer.writeBool(10, _instance.disabled);
    }
    if (_instance.state) {
      _writer.writeEnum(11, _instance.state);
    }
    if (_instance.revision) {
      _writer.writeInt64String(12, _instance.revision);
    }
    if (_instance.publishedRevision) {
      _writer.writeInt64String(13, _instance.publishedRevision);
    }
    if (_instance.stateMessage) {
      _writer.writeString(14, _instance.stateMessage);
    }
    if (!!_instance.layout) {
      const keys_15 = Object.keys(_instance.layout as any);

      if (keys_15.length) {
        const repeated_15 = keys_15
          .map(key => ({ key: key, value: (_instance.layout as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          15,
          repeated_15,
          IvrMenu.LayoutEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.createdBy) {
      _writer.writeString(16, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        17,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(18, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        19,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.publishedAt) {
      _writer.writeMessage(
        20,
        _instance.publishedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.publishedBy) {
      _writer.writeString(21, _instance.publishedBy);
    }
    if (!!_instance.nodeStats) {
      const keys_22 = Object.keys(_instance.nodeStats as any);

      if (keys_22.length) {
        const repeated_22 = keys_22
          .map(key => ({ key: key, value: (_instance.nodeStats as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          22,
          repeated_22,
          IvrMenu.NodeStatsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.nodeStatsUpdatedAt) {
      _writer.writeMessage(
        23,
        _instance.nodeStatsUpdatedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _description: string;
  private _entryNodeId: string;
  private _nodes?: IvrNode[];
  private _languageCode: string;
  private _t2sPipelineId: string;
  private _inboundPhoneNumbers: string[];
  private _defaultInbound: boolean;
  private _disabled: boolean;
  private _state: IvrMenuState;
  private _revision: string;
  private _publishedRevision: string;
  private _stateMessage: string;
  private _layout: { [prop: string]: IvrNodePosition };
  private _createdBy: string;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _publishedAt?: googleProtobuf001.Timestamp;
  private _publishedBy: string;
  private _nodeStats: { [prop: string]: IvrNodeStats };
  private _nodeStatsUpdatedAt?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrMenu to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrMenu.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.entryNodeId = _value.entryNodeId;
    this.nodes = (_value.nodes || []).map(m => new IvrNode(m));
    this.languageCode = _value.languageCode;
    this.t2sPipelineId = _value.t2sPipelineId;
    this.inboundPhoneNumbers = (_value.inboundPhoneNumbers || []).slice();
    this.defaultInbound = _value.defaultInbound;
    this.disabled = _value.disabled;
    this.state = _value.state;
    this.revision = _value.revision;
    this.publishedRevision = _value.publishedRevision;
    this.stateMessage = _value.stateMessage;
    (this.layout = _value!.layout
      ? Object.keys(_value!.layout).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.layout![k]
              ? new IvrNodePosition(_value!.layout![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.createdBy = _value.createdBy);
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.publishedAt = _value.publishedAt
      ? new googleProtobuf001.Timestamp(_value.publishedAt)
      : undefined;
    this.publishedBy = _value.publishedBy;
    (this.nodeStats = _value!.nodeStats
      ? Object.keys(_value!.nodeStats).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.nodeStats![k]
              ? new IvrNodeStats(_value!.nodeStats![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.nodeStatsUpdatedAt = _value.nodeStatsUpdatedAt
        ? new googleProtobuf001.Timestamp(_value.nodeStatsUpdatedAt)
        : undefined);
    IvrMenu.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get entryNodeId(): string {
    return this._entryNodeId;
  }
  set entryNodeId(value: string) {
    this._entryNodeId = value;
  }
  get nodes(): IvrNode[] | undefined {
    return this._nodes;
  }
  set nodes(value: IvrNode[] | undefined) {
    this._nodes = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get t2sPipelineId(): string {
    return this._t2sPipelineId;
  }
  set t2sPipelineId(value: string) {
    this._t2sPipelineId = value;
  }
  get inboundPhoneNumbers(): string[] {
    return this._inboundPhoneNumbers;
  }
  set inboundPhoneNumbers(value: string[]) {
    this._inboundPhoneNumbers = value;
  }
  get defaultInbound(): boolean {
    return this._defaultInbound;
  }
  set defaultInbound(value: boolean) {
    this._defaultInbound = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get state(): IvrMenuState {
    return this._state;
  }
  set state(value: IvrMenuState) {
    this._state = value;
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }
  get publishedRevision(): string {
    return this._publishedRevision;
  }
  set publishedRevision(value: string) {
    this._publishedRevision = value;
  }
  get stateMessage(): string {
    return this._stateMessage;
  }
  set stateMessage(value: string) {
    this._stateMessage = value;
  }
  get layout(): { [prop: string]: IvrNodePosition } {
    return this._layout;
  }
  set layout(value: { [prop: string]: IvrNodePosition }) {
    this._layout = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get createdAt(): googleProtobuf001.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf001.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get modifiedAt(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get publishedAt(): googleProtobuf001.Timestamp | undefined {
    return this._publishedAt;
  }
  set publishedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._publishedAt = value;
  }
  get publishedBy(): string {
    return this._publishedBy;
  }
  set publishedBy(value: string) {
    this._publishedBy = value;
  }
  get nodeStats(): { [prop: string]: IvrNodeStats } {
    return this._nodeStats;
  }
  set nodeStats(value: { [prop: string]: IvrNodeStats }) {
    this._nodeStats = value;
  }
  get nodeStatsUpdatedAt(): googleProtobuf001.Timestamp | undefined {
    return this._nodeStatsUpdatedAt;
  }
  set nodeStatsUpdatedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._nodeStatsUpdatedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrMenu.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrMenu.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      entryNodeId: this.entryNodeId,
      nodes: (this.nodes || []).map(m => m.toObject()),
      languageCode: this.languageCode,
      t2sPipelineId: this.t2sPipelineId,
      inboundPhoneNumbers: (this.inboundPhoneNumbers || []).slice(),
      defaultInbound: this.defaultInbound,
      disabled: this.disabled,
      state: this.state,
      revision: this.revision,
      publishedRevision: this.publishedRevision,
      stateMessage: this.stateMessage,
      layout: this.layout
        ? Object.keys(this.layout).reduce(
            (r, k) => ({
              ...r,
              [k]: this.layout![k] ? this.layout![k].toObject() : undefined
            }),
            {}
          )
        : {},
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      publishedAt: this.publishedAt ? this.publishedAt.toObject() : undefined,
      publishedBy: this.publishedBy,
      nodeStats: this.nodeStats
        ? Object.keys(this.nodeStats).reduce(
            (r, k) => ({
              ...r,
              [k]: this.nodeStats![k]
                ? this.nodeStats![k].toObject()
                : undefined
            }),
            {}
          )
        : {},
      nodeStatsUpdatedAt: this.nodeStatsUpdatedAt
        ? this.nodeStatsUpdatedAt.toObject()
        : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrMenu.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      entryNodeId: this.entryNodeId,
      nodes: (this.nodes || []).map(m => m.toProtobufJSON(options)),
      languageCode: this.languageCode,
      t2sPipelineId: this.t2sPipelineId,
      inboundPhoneNumbers: (this.inboundPhoneNumbers || []).slice(),
      defaultInbound: this.defaultInbound,
      disabled: this.disabled,
      state:
        IvrMenuState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      revision: this.revision,
      publishedRevision: this.publishedRevision,
      stateMessage: this.stateMessage,
      layout: this.layout
        ? Object.keys(this.layout).reduce(
            (r, k) => ({
              ...r,
              [k]: this.layout![k] ? this.layout![k].toJSON() : null
            }),
            {}
          )
        : {},
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      publishedAt: this.publishedAt
        ? this.publishedAt.toProtobufJSON(options)
        : null,
      publishedBy: this.publishedBy,
      nodeStats: this.nodeStats
        ? Object.keys(this.nodeStats).reduce(
            (r, k) => ({
              ...r,
              [k]: this.nodeStats![k] ? this.nodeStats![k].toJSON() : null
            }),
            {}
          )
        : {},
      nodeStatsUpdatedAt: this.nodeStatsUpdatedAt
        ? this.nodeStatsUpdatedAt.toProtobufJSON(options)
        : null
    };
  }
}
export module IvrMenu {
  /**
   * Standard JavaScript object representation for IvrMenu
   */
  export interface AsObject {
    name: string;
    displayName: string;
    description: string;
    entryNodeId: string;
    nodes?: IvrNode.AsObject[];
    languageCode: string;
    t2sPipelineId: string;
    inboundPhoneNumbers: string[];
    defaultInbound: boolean;
    disabled: boolean;
    state: IvrMenuState;
    revision: string;
    publishedRevision: string;
    stateMessage: string;
    layout: { [prop: string]: IvrNodePosition };
    createdBy: string;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    publishedAt?: googleProtobuf001.Timestamp.AsObject;
    publishedBy: string;
    nodeStats: { [prop: string]: IvrNodeStats };
    nodeStatsUpdatedAt?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for IvrMenu
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    description: string;
    entryNodeId: string;
    nodes: IvrNode.AsProtobufJSON[] | null;
    languageCode: string;
    t2sPipelineId: string;
    inboundPhoneNumbers: string[];
    defaultInbound: boolean;
    disabled: boolean;
    state: string;
    revision: string;
    publishedRevision: string;
    stateMessage: string;
    layout: { [prop: string]: IvrNodePosition };
    createdBy: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    publishedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    publishedBy: string;
    nodeStats: { [prop: string]: IvrNodeStats };
    nodeStatsUpdatedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }

  /**
   * Message implementation for ondewo.vtsi.IvrMenu.LayoutEntry
   */
  export class LayoutEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.IvrMenu.LayoutEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new LayoutEntry();
      LayoutEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LayoutEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: LayoutEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new IvrNodePosition();
            _reader.readMessage(
              _instance.value,
              IvrNodePosition.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      LayoutEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: LayoutEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          IvrNodePosition.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: IvrNodePosition;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LayoutEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LayoutEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value ? new IvrNodePosition(_value.value) : undefined;
      LayoutEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): IvrNodePosition | undefined {
      return this._value;
    }
    set value(value: IvrNodePosition | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      LayoutEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LayoutEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): LayoutEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module LayoutEntry {
    /**
     * Standard JavaScript object representation for LayoutEntry
     */
    export interface AsObject {
      key: string;
      value?: IvrNodePosition.AsObject;
    }

    /**
     * Protobuf JSON representation for LayoutEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: IvrNodePosition.AsProtobufJSON | null;
    }
  }

  /**
   * Message implementation for ondewo.vtsi.IvrMenu.NodeStatsEntry
   */
  export class NodeStatsEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.IvrMenu.NodeStatsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new NodeStatsEntry();
      NodeStatsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NodeStatsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: NodeStatsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new IvrNodeStats();
            _reader.readMessage(
              _instance.value,
              IvrNodeStats.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      NodeStatsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: NodeStatsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          IvrNodeStats.serializeBinaryToWriter
        );
      }
    }

    private _key: string;
    private _value?: IvrNodeStats;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NodeStatsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<NodeStatsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value ? new IvrNodeStats(_value.value) : undefined;
      NodeStatsEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): IvrNodeStats | undefined {
      return this._value;
    }
    set value(value: IvrNodeStats | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      NodeStatsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NodeStatsEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
      };
    }

    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
      return this.toObject();
    }

    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): NodeStatsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module NodeStatsEntry {
    /**
     * Standard JavaScript object representation for NodeStatsEntry
     */
    export interface AsObject {
      key: string;
      value?: IvrNodeStats.AsObject;
    }

    /**
     * Protobuf JSON representation for NodeStatsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: IvrNodeStats.AsProtobufJSON | null;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrNode
 */
export class IvrNode implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrNode';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrNode();
    IvrNode.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrNode) {
    _instance.nodeId = _instance.nodeId || '';
    _instance.displayName = _instance.displayName || '';
    _instance.type = _instance.type || 0;
    _instance.prompt = _instance.prompt || undefined;
    _instance.options = _instance.options || [];
    _instance.timeoutS = _instance.timeoutS || 0;
    _instance.maxRetries = _instance.maxRetries || 0;
    _instance.timeoutNextNodeId = _instance.timeoutNextNodeId || '';
    _instance.invalidNextNodeId = _instance.invalidNextNodeId || '';
    _instance.nextNodeId = _instance.nextNodeId || '';
    _instance.routeTarget = _instance.routeTarget || undefined;
    _instance.schedule = _instance.schedule || undefined;
    _instance.closedNextNodeId = _instance.closedNextNodeId || '';
    _instance.busyNextNodeId = _instance.busyNextNodeId || '';
    _instance.reprompt = _instance.reprompt || undefined;
    _instance.gotoMenuName = _instance.gotoMenuName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrNode,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nodeId = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readEnum();
          break;
        case 4:
          _instance.prompt = new IvrPrompt();
          _reader.readMessage(
            _instance.prompt,
            IvrPrompt.deserializeBinaryFromReader
          );
          break;
        case 5:
          const messageInitializer5 = new IvrOption();
          _reader.readMessage(
            messageInitializer5,
            IvrOption.deserializeBinaryFromReader
          );
          (_instance.options = _instance.options || []).push(
            messageInitializer5
          );
          break;
        case 6:
          _instance.timeoutS = _reader.readUint32();
          break;
        case 7:
          _instance.maxRetries = _reader.readUint32();
          break;
        case 8:
          _instance.timeoutNextNodeId = _reader.readString();
          break;
        case 9:
          _instance.invalidNextNodeId = _reader.readString();
          break;
        case 10:
          _instance.nextNodeId = _reader.readString();
          break;
        case 11:
          _instance.routeTarget = new ondewoVtsi011.CallTarget();
          _reader.readMessage(
            _instance.routeTarget,
            ondewoVtsi011.CallTarget.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.schedule = new ondewoVtsi005.CampaignCallingWindow();
          _reader.readMessage(
            _instance.schedule,
            ondewoVtsi005.CampaignCallingWindow.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.closedNextNodeId = _reader.readString();
          break;
        case 14:
          _instance.busyNextNodeId = _reader.readString();
          break;
        case 15:
          _instance.reprompt = new IvrPrompt();
          _reader.readMessage(
            _instance.reprompt,
            IvrPrompt.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.gotoMenuName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrNode.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: IvrNode, _writer: BinaryWriter) {
    if (_instance.nodeId) {
      _writer.writeString(1, _instance.nodeId);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.type) {
      _writer.writeEnum(3, _instance.type);
    }
    if (_instance.prompt) {
      _writer.writeMessage(
        4,
        _instance.prompt as any,
        IvrPrompt.serializeBinaryToWriter
      );
    }
    if (_instance.options && _instance.options.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.options as any,
        IvrOption.serializeBinaryToWriter
      );
    }
    if (_instance.timeoutS) {
      _writer.writeUint32(6, _instance.timeoutS);
    }
    if (_instance.maxRetries) {
      _writer.writeUint32(7, _instance.maxRetries);
    }
    if (_instance.timeoutNextNodeId) {
      _writer.writeString(8, _instance.timeoutNextNodeId);
    }
    if (_instance.invalidNextNodeId) {
      _writer.writeString(9, _instance.invalidNextNodeId);
    }
    if (_instance.nextNodeId) {
      _writer.writeString(10, _instance.nextNodeId);
    }
    if (_instance.routeTarget) {
      _writer.writeMessage(
        11,
        _instance.routeTarget as any,
        ondewoVtsi011.CallTarget.serializeBinaryToWriter
      );
    }
    if (_instance.schedule) {
      _writer.writeMessage(
        12,
        _instance.schedule as any,
        ondewoVtsi005.CampaignCallingWindow.serializeBinaryToWriter
      );
    }
    if (_instance.closedNextNodeId) {
      _writer.writeString(13, _instance.closedNextNodeId);
    }
    if (_instance.busyNextNodeId) {
      _writer.writeString(14, _instance.busyNextNodeId);
    }
    if (_instance.reprompt) {
      _writer.writeMessage(
        15,
        _instance.reprompt as any,
        IvrPrompt.serializeBinaryToWriter
      );
    }
    if (_instance.gotoMenuName) {
      _writer.writeString(16, _instance.gotoMenuName);
    }
  }

  private _nodeId: string;
  private _displayName: string;
  private _type: IvrNodeType;
  private _prompt?: IvrPrompt;
  private _options?: IvrOption[];
  private _timeoutS: number;
  private _maxRetries: number;
  private _timeoutNextNodeId: string;
  private _invalidNextNodeId: string;
  private _nextNodeId: string;
  private _routeTarget?: ondewoVtsi011.CallTarget;
  private _schedule?: ondewoVtsi005.CampaignCallingWindow;
  private _closedNextNodeId: string;
  private _busyNextNodeId: string;
  private _reprompt?: IvrPrompt;
  private _gotoMenuName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrNode to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrNode.AsObject>) {
    _value = _value || {};
    this.nodeId = _value.nodeId;
    this.displayName = _value.displayName;
    this.type = _value.type;
    this.prompt = _value.prompt ? new IvrPrompt(_value.prompt) : undefined;
    this.options = (_value.options || []).map(m => new IvrOption(m));
    this.timeoutS = _value.timeoutS;
    this.maxRetries = _value.maxRetries;
    this.timeoutNextNodeId = _value.timeoutNextNodeId;
    this.invalidNextNodeId = _value.invalidNextNodeId;
    this.nextNodeId = _value.nextNodeId;
    this.routeTarget = _value.routeTarget
      ? new ondewoVtsi011.CallTarget(_value.routeTarget)
      : undefined;
    this.schedule = _value.schedule
      ? new ondewoVtsi005.CampaignCallingWindow(_value.schedule)
      : undefined;
    this.closedNextNodeId = _value.closedNextNodeId;
    this.busyNextNodeId = _value.busyNextNodeId;
    this.reprompt = _value.reprompt
      ? new IvrPrompt(_value.reprompt)
      : undefined;
    this.gotoMenuName = _value.gotoMenuName;
    IvrNode.refineValues(this);
  }
  get nodeId(): string {
    return this._nodeId;
  }
  set nodeId(value: string) {
    this._nodeId = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get type(): IvrNodeType {
    return this._type;
  }
  set type(value: IvrNodeType) {
    this._type = value;
  }
  get prompt(): IvrPrompt | undefined {
    return this._prompt;
  }
  set prompt(value: IvrPrompt | undefined) {
    this._prompt = value;
  }
  get options(): IvrOption[] | undefined {
    return this._options;
  }
  set options(value: IvrOption[] | undefined) {
    this._options = value;
  }
  get timeoutS(): number {
    return this._timeoutS;
  }
  set timeoutS(value: number) {
    this._timeoutS = value;
  }
  get maxRetries(): number {
    return this._maxRetries;
  }
  set maxRetries(value: number) {
    this._maxRetries = value;
  }
  get timeoutNextNodeId(): string {
    return this._timeoutNextNodeId;
  }
  set timeoutNextNodeId(value: string) {
    this._timeoutNextNodeId = value;
  }
  get invalidNextNodeId(): string {
    return this._invalidNextNodeId;
  }
  set invalidNextNodeId(value: string) {
    this._invalidNextNodeId = value;
  }
  get nextNodeId(): string {
    return this._nextNodeId;
  }
  set nextNodeId(value: string) {
    this._nextNodeId = value;
  }
  get routeTarget(): ondewoVtsi011.CallTarget | undefined {
    return this._routeTarget;
  }
  set routeTarget(value: ondewoVtsi011.CallTarget | undefined) {
    this._routeTarget = value;
  }
  get schedule(): ondewoVtsi005.CampaignCallingWindow | undefined {
    return this._schedule;
  }
  set schedule(value: ondewoVtsi005.CampaignCallingWindow | undefined) {
    this._schedule = value;
  }
  get closedNextNodeId(): string {
    return this._closedNextNodeId;
  }
  set closedNextNodeId(value: string) {
    this._closedNextNodeId = value;
  }
  get busyNextNodeId(): string {
    return this._busyNextNodeId;
  }
  set busyNextNodeId(value: string) {
    this._busyNextNodeId = value;
  }
  get reprompt(): IvrPrompt | undefined {
    return this._reprompt;
  }
  set reprompt(value: IvrPrompt | undefined) {
    this._reprompt = value;
  }
  get gotoMenuName(): string {
    return this._gotoMenuName;
  }
  set gotoMenuName(value: string) {
    this._gotoMenuName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrNode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrNode.AsObject {
    return {
      nodeId: this.nodeId,
      displayName: this.displayName,
      type: this.type,
      prompt: this.prompt ? this.prompt.toObject() : undefined,
      options: (this.options || []).map(m => m.toObject()),
      timeoutS: this.timeoutS,
      maxRetries: this.maxRetries,
      timeoutNextNodeId: this.timeoutNextNodeId,
      invalidNextNodeId: this.invalidNextNodeId,
      nextNodeId: this.nextNodeId,
      routeTarget: this.routeTarget ? this.routeTarget.toObject() : undefined,
      schedule: this.schedule ? this.schedule.toObject() : undefined,
      closedNextNodeId: this.closedNextNodeId,
      busyNextNodeId: this.busyNextNodeId,
      reprompt: this.reprompt ? this.reprompt.toObject() : undefined,
      gotoMenuName: this.gotoMenuName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrNode.AsProtobufJSON {
    return {
      nodeId: this.nodeId,
      displayName: this.displayName,
      type:
        IvrNodeType[
          this.type === null || this.type === undefined ? 0 : this.type
        ],
      prompt: this.prompt ? this.prompt.toProtobufJSON(options) : null,
      options: (this.options || []).map(m => m.toProtobufJSON(options)),
      timeoutS: this.timeoutS,
      maxRetries: this.maxRetries,
      timeoutNextNodeId: this.timeoutNextNodeId,
      invalidNextNodeId: this.invalidNextNodeId,
      nextNodeId: this.nextNodeId,
      routeTarget: this.routeTarget
        ? this.routeTarget.toProtobufJSON(options)
        : null,
      schedule: this.schedule ? this.schedule.toProtobufJSON(options) : null,
      closedNextNodeId: this.closedNextNodeId,
      busyNextNodeId: this.busyNextNodeId,
      reprompt: this.reprompt ? this.reprompt.toProtobufJSON(options) : null,
      gotoMenuName: this.gotoMenuName
    };
  }
}
export module IvrNode {
  /**
   * Standard JavaScript object representation for IvrNode
   */
  export interface AsObject {
    nodeId: string;
    displayName: string;
    type: IvrNodeType;
    prompt?: IvrPrompt.AsObject;
    options?: IvrOption.AsObject[];
    timeoutS: number;
    maxRetries: number;
    timeoutNextNodeId: string;
    invalidNextNodeId: string;
    nextNodeId: string;
    routeTarget?: ondewoVtsi011.CallTarget.AsObject;
    schedule?: ondewoVtsi005.CampaignCallingWindow.AsObject;
    closedNextNodeId: string;
    busyNextNodeId: string;
    reprompt?: IvrPrompt.AsObject;
    gotoMenuName: string;
  }

  /**
   * Protobuf JSON representation for IvrNode
   */
  export interface AsProtobufJSON {
    nodeId: string;
    displayName: string;
    type: string;
    prompt: IvrPrompt.AsProtobufJSON | null;
    options: IvrOption.AsProtobufJSON[] | null;
    timeoutS: number;
    maxRetries: number;
    timeoutNextNodeId: string;
    invalidNextNodeId: string;
    nextNodeId: string;
    routeTarget: ondewoVtsi011.CallTarget.AsProtobufJSON | null;
    schedule: ondewoVtsi005.CampaignCallingWindow.AsProtobufJSON | null;
    closedNextNodeId: string;
    busyNextNodeId: string;
    reprompt: IvrPrompt.AsProtobufJSON | null;
    gotoMenuName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrOption
 */
export class IvrOption implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrOption';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrOption();
    IvrOption.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrOption) {
    _instance.dtmf = _instance.dtmf || '';
    _instance.nextNodeId = _instance.nextNodeId || '';
    _instance.label = _instance.label || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrOption,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.dtmf = _reader.readString();
          break;
        case 2:
          _instance.nextNodeId = _reader.readString();
          break;
        case 3:
          _instance.label = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrOption.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: IvrOption, _writer: BinaryWriter) {
    if (_instance.dtmf) {
      _writer.writeString(1, _instance.dtmf);
    }
    if (_instance.nextNodeId) {
      _writer.writeString(2, _instance.nextNodeId);
    }
    if (_instance.label) {
      _writer.writeString(3, _instance.label);
    }
  }

  private _dtmf: string;
  private _nextNodeId: string;
  private _label: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrOption to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrOption.AsObject>) {
    _value = _value || {};
    this.dtmf = _value.dtmf;
    this.nextNodeId = _value.nextNodeId;
    this.label = _value.label;
    IvrOption.refineValues(this);
  }
  get dtmf(): string {
    return this._dtmf;
  }
  set dtmf(value: string) {
    this._dtmf = value;
  }
  get nextNodeId(): string {
    return this._nextNodeId;
  }
  set nextNodeId(value: string) {
    this._nextNodeId = value;
  }
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrOption.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrOption.AsObject {
    return {
      dtmf: this.dtmf,
      nextNodeId: this.nextNodeId,
      label: this.label
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrOption.AsProtobufJSON {
    return {
      dtmf: this.dtmf,
      nextNodeId: this.nextNodeId,
      label: this.label
    };
  }
}
export module IvrOption {
  /**
   * Standard JavaScript object representation for IvrOption
   */
  export interface AsObject {
    dtmf: string;
    nextNodeId: string;
    label: string;
  }

  /**
   * Protobuf JSON representation for IvrOption
   */
  export interface AsProtobufJSON {
    dtmf: string;
    nextNodeId: string;
    label: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrPrompt
 */
export class IvrPrompt implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrPrompt';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrPrompt();
    IvrPrompt.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrPrompt) {
    _instance.sha256 = _instance.sha256 || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrPrompt,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readString();
          break;
        case 2:
          _instance.wav = _reader.readBytes();
          break;
        case 3:
          _instance.asteriskSound = _reader.readString();
          break;
        case 4:
          _instance.sha256 = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrPrompt.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: IvrPrompt, _writer: BinaryWriter) {
    if (_instance.text || _instance.text === '') {
      _writer.writeString(1, _instance.text);
    }
    if (_instance.wav && _instance.wav.length) {
      _writer.writeBytes(2, _instance.wav);
    }
    if (_instance.asteriskSound || _instance.asteriskSound === '') {
      _writer.writeString(3, _instance.asteriskSound);
    }
    if (_instance.sha256) {
      _writer.writeString(4, _instance.sha256);
    }
  }

  private _text: string;
  private _wav: Uint8Array;
  private _asteriskSound: string;
  private _sha256: string;

  private _source: IvrPrompt.SourceCase = IvrPrompt.SourceCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrPrompt to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrPrompt.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    this.wav = _value.wav;
    this.asteriskSound = _value.asteriskSound;
    this.sha256 = _value.sha256;
    IvrPrompt.refineValues(this);
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    if (value !== undefined && value !== null) {
      this._wav = this._asteriskSound = undefined;
      this._source = IvrPrompt.SourceCase.text;
    }
    this._text = value;
  }
  get wav(): Uint8Array {
    return this._wav;
  }
  set wav(value: Uint8Array) {
    if (value !== undefined && value !== null) {
      this._text = this._asteriskSound = undefined;
      this._source = IvrPrompt.SourceCase.wav;
    }
    this._wav = value;
  }
  get asteriskSound(): string {
    return this._asteriskSound;
  }
  set asteriskSound(value: string) {
    if (value !== undefined && value !== null) {
      this._text = this._wav = undefined;
      this._source = IvrPrompt.SourceCase.asteriskSound;
    }
    this._asteriskSound = value;
  }
  get sha256(): string {
    return this._sha256;
  }
  set sha256(value: string) {
    this._sha256 = value;
  }
  get source() {
    return this._source;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrPrompt.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrPrompt.AsObject {
    return {
      text: this.text,
      wav: this.wav ? this.wav.subarray(0) : new Uint8Array(),
      asteriskSound: this.asteriskSound,
      sha256: this.sha256
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrPrompt.AsProtobufJSON {
    return {
      text: this.text === null || this.text === undefined ? null : this.text,
      wav: this.wav ? uint8ArrayToBase64(this.wav) : '',
      asteriskSound:
        this.asteriskSound === null || this.asteriskSound === undefined
          ? null
          : this.asteriskSound,
      sha256: this.sha256
    };
  }
}
export module IvrPrompt {
  /**
   * Standard JavaScript object representation for IvrPrompt
   */
  export interface AsObject {
    text: string;
    wav: Uint8Array;
    asteriskSound: string;
    sha256: string;
  }

  /**
   * Protobuf JSON representation for IvrPrompt
   */
  export interface AsProtobufJSON {
    text: string | null;
    wav: string;
    asteriskSound: string | null;
    sha256: string;
  }
  export enum SourceCase {
    none = 0,
    text = 1,
    wav = 2,
    asteriskSound = 3
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrNodePosition
 */
export class IvrNodePosition implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrNodePosition';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrNodePosition();
    IvrNodePosition.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrNodePosition) {
    _instance.x = _instance.x || 0;
    _instance.y = _instance.y || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrNodePosition,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.x = _reader.readDouble();
          break;
        case 2:
          _instance.y = _reader.readDouble();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrNodePosition.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrNodePosition,
    _writer: BinaryWriter
  ) {
    if (_instance.x) {
      _writer.writeDouble(1, _instance.x);
    }
    if (_instance.y) {
      _writer.writeDouble(2, _instance.y);
    }
  }

  private _x: number;
  private _y: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrNodePosition to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrNodePosition.AsObject>) {
    _value = _value || {};
    this.x = _value.x;
    this.y = _value.y;
    IvrNodePosition.refineValues(this);
  }
  get x(): number {
    return this._x;
  }
  set x(value: number) {
    this._x = value;
  }
  get y(): number {
    return this._y;
  }
  set y(value: number) {
    this._y = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrNodePosition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrNodePosition.AsObject {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrNodePosition.AsProtobufJSON {
    return {
      x: this.x,
      y: this.y
    };
  }
}
export module IvrNodePosition {
  /**
   * Standard JavaScript object representation for IvrNodePosition
   */
  export interface AsObject {
    x: number;
    y: number;
  }

  /**
   * Protobuf JSON representation for IvrNodePosition
   */
  export interface AsProtobufJSON {
    x: number;
    y: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrNodeStats
 */
export class IvrNodeStats implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrNodeStats';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrNodeStats();
    IvrNodeStats.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrNodeStats) {
    _instance.publishedRevisionEntries =
      _instance.publishedRevisionEntries || '0';
    _instance.totalEntries = _instance.totalEntries || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrNodeStats,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.publishedRevisionEntries = _reader.readInt64String();
          break;
        case 2:
          _instance.totalEntries = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrNodeStats.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrNodeStats,
    _writer: BinaryWriter
  ) {
    if (_instance.publishedRevisionEntries) {
      _writer.writeInt64String(1, _instance.publishedRevisionEntries);
    }
    if (_instance.totalEntries) {
      _writer.writeInt64String(2, _instance.totalEntries);
    }
  }

  private _publishedRevisionEntries: string;
  private _totalEntries: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrNodeStats to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrNodeStats.AsObject>) {
    _value = _value || {};
    this.publishedRevisionEntries = _value.publishedRevisionEntries;
    this.totalEntries = _value.totalEntries;
    IvrNodeStats.refineValues(this);
  }
  get publishedRevisionEntries(): string {
    return this._publishedRevisionEntries;
  }
  set publishedRevisionEntries(value: string) {
    this._publishedRevisionEntries = value;
  }
  get totalEntries(): string {
    return this._totalEntries;
  }
  set totalEntries(value: string) {
    this._totalEntries = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrNodeStats.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrNodeStats.AsObject {
    return {
      publishedRevisionEntries: this.publishedRevisionEntries,
      totalEntries: this.totalEntries
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrNodeStats.AsProtobufJSON {
    return {
      publishedRevisionEntries: this.publishedRevisionEntries,
      totalEntries: this.totalEntries
    };
  }
}
export module IvrNodeStats {
  /**
   * Standard JavaScript object representation for IvrNodeStats
   */
  export interface AsObject {
    publishedRevisionEntries: string;
    totalEntries: string;
  }

  /**
   * Protobuf JSON representation for IvrNodeStats
   */
  export interface AsProtobufJSON {
    publishedRevisionEntries: string;
    totalEntries: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateIvrMenuRequest
 */
export class CreateIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateIvrMenuRequest();
    CreateIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateIvrMenuRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.ivrMenu = _instance.ivrMenu || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.idempotencyKey = _instance.idempotencyKey || '';
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.ivrMenu = new IvrMenu();
          _reader.readMessage(
            _instance.ivrMenu,
            IvrMenu.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        case 5:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.ivrMenu) {
      _writer.writeMessage(
        2,
        _instance.ivrMenu as any,
        IvrMenu.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
    if (_instance.validateOnly) {
      _writer.writeBool(5, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _ivrMenu?: IvrMenu;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _idempotencyKey: string;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.ivrMenu = _value.ivrMenu ? new IvrMenu(_value.ivrMenu) : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.idempotencyKey = _value.idempotencyKey;
    this.validateOnly = _value.validateOnly;
    CreateIvrMenuRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get ivrMenu(): IvrMenu | undefined {
    return this._ivrMenu;
  }
  set ivrMenu(value: IvrMenu | undefined) {
    this._ivrMenu = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }
  get validateOnly(): boolean {
    return this._validateOnly;
  }
  set validateOnly(value: boolean) {
    this._validateOnly = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateIvrMenuRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      ivrMenu: this.ivrMenu ? this.ivrMenu.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      idempotencyKey: this.idempotencyKey,
      validateOnly: this.validateOnly
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateIvrMenuRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      ivrMenu: this.ivrMenu ? this.ivrMenu.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      idempotencyKey: this.idempotencyKey,
      validateOnly: this.validateOnly
    };
  }
}
export module CreateIvrMenuRequest {
  /**
   * Standard JavaScript object representation for CreateIvrMenuRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    ivrMenu?: IvrMenu.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    idempotencyKey: string;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for CreateIvrMenuRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    ivrMenu: IvrMenu.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    idempotencyKey: string;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetIvrMenuRequest
 */
export class GetIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIvrMenuRequest();
    GetIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIvrMenuRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  private _ivrMenu: GetIvrMenuRequest.IvrMenuCase =
    GetIvrMenuRequest.IvrMenuCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetIvrMenuRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._ivrMenu = GetIvrMenuRequest.IvrMenuCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._ivrMenu = GetIvrMenuRequest.IvrMenuCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get ivrMenu() {
    return this._ivrMenu;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIvrMenuRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetIvrMenuRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetIvrMenuRequest {
  /**
   * Standard JavaScript object representation for GetIvrMenuRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetIvrMenuRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
  export enum IvrMenuCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateIvrMenuRequest
 */
export class UpdateIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateIvrMenuRequest();
    UpdateIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateIvrMenuRequest) {
    _instance.ivrMenu = _instance.ivrMenu || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
    _instance.expectedRevision = _instance.expectedRevision || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ivrMenu = new IvrMenu();
          _reader.readMessage(
            _instance.ivrMenu,
            IvrMenu.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.validateOnly = _reader.readBool();
          break;
        case 5:
          _instance.expectedRevision = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.ivrMenu) {
      _writer.writeMessage(
        1,
        _instance.ivrMenu as any,
        IvrMenu.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(4, _instance.validateOnly);
    }
    if (_instance.expectedRevision) {
      _writer.writeInt64String(5, _instance.expectedRevision);
    }
  }

  private _ivrMenu?: IvrMenu;
  private _updateMask?: googleProtobuf000.FieldMask;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _validateOnly: boolean;
  private _expectedRevision: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.ivrMenu = _value.ivrMenu ? new IvrMenu(_value.ivrMenu) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    this.expectedRevision = _value.expectedRevision;
    UpdateIvrMenuRequest.refineValues(this);
  }
  get ivrMenu(): IvrMenu | undefined {
    return this._ivrMenu;
  }
  set ivrMenu(value: IvrMenu | undefined) {
    this._ivrMenu = value;
  }
  get updateMask(): googleProtobuf000.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf000.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get validateOnly(): boolean {
    return this._validateOnly;
  }
  set validateOnly(value: boolean) {
    this._validateOnly = value;
  }
  get expectedRevision(): string {
    return this._expectedRevision;
  }
  set expectedRevision(value: string) {
    this._expectedRevision = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateIvrMenuRequest.AsObject {
    return {
      ivrMenu: this.ivrMenu ? this.ivrMenu.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      validateOnly: this.validateOnly,
      expectedRevision: this.expectedRevision
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateIvrMenuRequest.AsProtobufJSON {
    return {
      ivrMenu: this.ivrMenu ? this.ivrMenu.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly,
      expectedRevision: this.expectedRevision
    };
  }
}
export module UpdateIvrMenuRequest {
  /**
   * Standard JavaScript object representation for UpdateIvrMenuRequest
   */
  export interface AsObject {
    ivrMenu?: IvrMenu.AsObject;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    validateOnly: boolean;
    expectedRevision: string;
  }

  /**
   * Protobuf JSON representation for UpdateIvrMenuRequest
   */
  export interface AsProtobufJSON {
    ivrMenu: IvrMenu.AsProtobufJSON | null;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
    expectedRevision: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteIvrMenuRequest
 */
export class DeleteIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteIvrMenuRequest();
    DeleteIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteIvrMenuRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.force = _instance.force || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.force = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.force) {
      _writer.writeBool(4, _instance.force);
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _force: boolean;

  private _ivrMenu: DeleteIvrMenuRequest.IvrMenuCase =
    DeleteIvrMenuRequest.IvrMenuCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.force = _value.force;
    DeleteIvrMenuRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._ivrMenu = DeleteIvrMenuRequest.IvrMenuCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._ivrMenu = DeleteIvrMenuRequest.IvrMenuCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get force(): boolean {
    return this._force;
  }
  set force(value: boolean) {
    this._force = value;
  }
  get ivrMenu() {
    return this._ivrMenu;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteIvrMenuRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      force: this.force
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteIvrMenuRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      force: this.force
    };
  }
}
export module DeleteIvrMenuRequest {
  /**
   * Standard JavaScript object representation for DeleteIvrMenuRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    force: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteIvrMenuRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    force: boolean;
  }
  export enum IvrMenuCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteIvrMenuResponse
 */
export class DeleteIvrMenuResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteIvrMenuResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteIvrMenuResponse();
    DeleteIvrMenuResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteIvrMenuResponse) {
    _instance.unroutedPhoneNumbers = _instance.unroutedPhoneNumbers || 0;
    _instance.defaultInboundRemoved = _instance.defaultInboundRemoved || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteIvrMenuResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.unroutedPhoneNumbers = _reader.readInt32();
          break;
        case 2:
          _instance.defaultInboundRemoved = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteIvrMenuResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteIvrMenuResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.unroutedPhoneNumbers) {
      _writer.writeInt32(1, _instance.unroutedPhoneNumbers);
    }
    if (_instance.defaultInboundRemoved) {
      _writer.writeBool(2, _instance.defaultInboundRemoved);
    }
  }

  private _unroutedPhoneNumbers: number;
  private _defaultInboundRemoved: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteIvrMenuResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteIvrMenuResponse.AsObject>) {
    _value = _value || {};
    this.unroutedPhoneNumbers = _value.unroutedPhoneNumbers;
    this.defaultInboundRemoved = _value.defaultInboundRemoved;
    DeleteIvrMenuResponse.refineValues(this);
  }
  get unroutedPhoneNumbers(): number {
    return this._unroutedPhoneNumbers;
  }
  set unroutedPhoneNumbers(value: number) {
    this._unroutedPhoneNumbers = value;
  }
  get defaultInboundRemoved(): boolean {
    return this._defaultInboundRemoved;
  }
  set defaultInboundRemoved(value: boolean) {
    this._defaultInboundRemoved = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteIvrMenuResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteIvrMenuResponse.AsObject {
    return {
      unroutedPhoneNumbers: this.unroutedPhoneNumbers,
      defaultInboundRemoved: this.defaultInboundRemoved
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteIvrMenuResponse.AsProtobufJSON {
    return {
      unroutedPhoneNumbers: this.unroutedPhoneNumbers,
      defaultInboundRemoved: this.defaultInboundRemoved
    };
  }
}
export module DeleteIvrMenuResponse {
  /**
   * Standard JavaScript object representation for DeleteIvrMenuResponse
   */
  export interface AsObject {
    unroutedPhoneNumbers: number;
    defaultInboundRemoved: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteIvrMenuResponse
   */
  export interface AsProtobufJSON {
    unroutedPhoneNumbers: number;
    defaultInboundRemoved: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrMenuFilter
 */
export class IvrMenuFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrMenuFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrMenuFilter();
    IvrMenuFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrMenuFilter) {
    _instance.displayNameContains = _instance.displayNameContains || '';
    _instance.state = _instance.state || 0;
    _instance.inboundPhoneNumber = _instance.inboundPhoneNumber || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrMenuFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.displayNameContains = _reader.readString();
          break;
        case 2:
          _instance.state = _reader.readEnum();
          break;
        case 3:
          _instance.inboundPhoneNumber = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrMenuFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrMenuFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.displayNameContains) {
      _writer.writeString(1, _instance.displayNameContains);
    }
    if (_instance.state) {
      _writer.writeEnum(2, _instance.state);
    }
    if (_instance.inboundPhoneNumber) {
      _writer.writeString(3, _instance.inboundPhoneNumber);
    }
  }

  private _displayNameContains: string;
  private _state: IvrMenuState;
  private _inboundPhoneNumber: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrMenuFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrMenuFilter.AsObject>) {
    _value = _value || {};
    this.displayNameContains = _value.displayNameContains;
    this.state = _value.state;
    this.inboundPhoneNumber = _value.inboundPhoneNumber;
    IvrMenuFilter.refineValues(this);
  }
  get displayNameContains(): string {
    return this._displayNameContains;
  }
  set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  get state(): IvrMenuState {
    return this._state;
  }
  set state(value: IvrMenuState) {
    this._state = value;
  }
  get inboundPhoneNumber(): string {
    return this._inboundPhoneNumber;
  }
  set inboundPhoneNumber(value: string) {
    this._inboundPhoneNumber = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrMenuFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrMenuFilter.AsObject {
    return {
      displayNameContains: this.displayNameContains,
      state: this.state,
      inboundPhoneNumber: this.inboundPhoneNumber
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrMenuFilter.AsProtobufJSON {
    return {
      displayNameContains: this.displayNameContains,
      state:
        IvrMenuState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      inboundPhoneNumber: this.inboundPhoneNumber
    };
  }
}
export module IvrMenuFilter {
  /**
   * Standard JavaScript object representation for IvrMenuFilter
   */
  export interface AsObject {
    displayNameContains: string;
    state: IvrMenuState;
    inboundPhoneNumber: string;
  }

  /**
   * Protobuf JSON representation for IvrMenuFilter
   */
  export interface AsProtobufJSON {
    displayNameContains: string;
    state: string;
    inboundPhoneNumber: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListIvrMenusRequest
 */
export class ListIvrMenusRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListIvrMenusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIvrMenusRequest();
    ListIvrMenusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIvrMenusRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.orderBy = _instance.orderBy || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIvrMenusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new IvrMenuFilter();
          _reader.readMessage(
            _instance.filter,
            IvrMenuFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.pageSize = _reader.readInt32();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.orderBy = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ListIvrMenusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIvrMenusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        IvrMenuFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(3, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.orderBy) {
      _writer.writeEnum(6, _instance.orderBy);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: IvrMenuFilter;
  private _pageSize: number;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _orderBy: IvrMenuOrderBy;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIvrMenusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListIvrMenusRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new IvrMenuFilter(_value.filter) : undefined;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.orderBy = _value.orderBy;
    ListIvrMenusRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): IvrMenuFilter | undefined {
    return this._filter;
  }
  set filter(value: IvrMenuFilter | undefined) {
    this._filter = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get orderBy(): IvrMenuOrderBy {
    return this._orderBy;
  }
  set orderBy(value: IvrMenuOrderBy) {
    this._orderBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIvrMenusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIvrMenusRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      orderBy: this.orderBy
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIvrMenusRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      orderBy:
        IvrMenuOrderBy[
          this.orderBy === null || this.orderBy === undefined ? 0 : this.orderBy
        ]
    };
  }
}
export module ListIvrMenusRequest {
  /**
   * Standard JavaScript object representation for ListIvrMenusRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: IvrMenuFilter.AsObject;
    pageSize: number;
    pageToken: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    orderBy: IvrMenuOrderBy;
  }

  /**
   * Protobuf JSON representation for ListIvrMenusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: IvrMenuFilter.AsProtobufJSON | null;
    pageSize: number;
    pageToken: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    orderBy: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListIvrMenusResponse
 */
export class ListIvrMenusResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListIvrMenusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIvrMenusResponse();
    ListIvrMenusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIvrMenusResponse) {
    _instance.ivrMenus = _instance.ivrMenus || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIvrMenusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new IvrMenu();
          _reader.readMessage(
            messageInitializer1,
            IvrMenu.deserializeBinaryFromReader
          );
          (_instance.ivrMenus = _instance.ivrMenus || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListIvrMenusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIvrMenusResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.ivrMenus && _instance.ivrMenus.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.ivrMenus as any,
        IvrMenu.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _ivrMenus?: IvrMenu[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIvrMenusResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListIvrMenusResponse.AsObject>) {
    _value = _value || {};
    this.ivrMenus = (_value.ivrMenus || []).map(m => new IvrMenu(m));
    this.nextPageToken = _value.nextPageToken;
    ListIvrMenusResponse.refineValues(this);
  }
  get ivrMenus(): IvrMenu[] | undefined {
    return this._ivrMenus;
  }
  set ivrMenus(value: IvrMenu[] | undefined) {
    this._ivrMenus = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIvrMenusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIvrMenusResponse.AsObject {
    return {
      ivrMenus: (this.ivrMenus || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIvrMenusResponse.AsProtobufJSON {
    return {
      ivrMenus: (this.ivrMenus || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListIvrMenusResponse {
  /**
   * Standard JavaScript object representation for ListIvrMenusResponse
   */
  export interface AsObject {
    ivrMenus?: IvrMenu.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListIvrMenusResponse
   */
  export interface AsProtobufJSON {
    ivrMenus: IvrMenu.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ValidateIvrMenuRequest
 */
export class ValidateIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ValidateIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateIvrMenuRequest();
    ValidateIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateIvrMenuRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.ivrMenu = _instance.ivrMenu || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.ivrMenu = new IvrMenu();
          _reader.readMessage(
            _instance.ivrMenu,
            IvrMenu.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.ivrMenu) {
      _writer.writeMessage(
        2,
        _instance.ivrMenu as any,
        IvrMenu.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _ivrMenu?: IvrMenu;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ValidateIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.ivrMenu = _value.ivrMenu ? new IvrMenu(_value.ivrMenu) : undefined;
    ValidateIvrMenuRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get ivrMenu(): IvrMenu | undefined {
    return this._ivrMenu;
  }
  set ivrMenu(value: IvrMenu | undefined) {
    this._ivrMenu = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateIvrMenuRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      ivrMenu: this.ivrMenu ? this.ivrMenu.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateIvrMenuRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      ivrMenu: this.ivrMenu ? this.ivrMenu.toProtobufJSON(options) : null
    };
  }
}
export module ValidateIvrMenuRequest {
  /**
   * Standard JavaScript object representation for ValidateIvrMenuRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    ivrMenu?: IvrMenu.AsObject;
  }

  /**
   * Protobuf JSON representation for ValidateIvrMenuRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    ivrMenu: IvrMenu.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrMenuIssue
 */
export class IvrMenuIssue implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrMenuIssue';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrMenuIssue();
    IvrMenuIssue.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrMenuIssue) {
    _instance.severity = _instance.severity || 0;
    _instance.code = _instance.code || '';
    _instance.path = _instance.path || '';
    _instance.nodeId = _instance.nodeId || '';
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrMenuIssue,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.severity = _reader.readEnum();
          break;
        case 2:
          _instance.code = _reader.readString();
          break;
        case 3:
          _instance.path = _reader.readString();
          break;
        case 4:
          _instance.nodeId = _reader.readString();
          break;
        case 5:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrMenuIssue.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrMenuIssue,
    _writer: BinaryWriter
  ) {
    if (_instance.severity) {
      _writer.writeEnum(1, _instance.severity);
    }
    if (_instance.code) {
      _writer.writeString(2, _instance.code);
    }
    if (_instance.path) {
      _writer.writeString(3, _instance.path);
    }
    if (_instance.nodeId) {
      _writer.writeString(4, _instance.nodeId);
    }
    if (_instance.message) {
      _writer.writeString(5, _instance.message);
    }
  }

  private _severity: IvrMenuIssueSeverity;
  private _code: string;
  private _path: string;
  private _nodeId: string;
  private _message: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrMenuIssue to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrMenuIssue.AsObject>) {
    _value = _value || {};
    this.severity = _value.severity;
    this.code = _value.code;
    this.path = _value.path;
    this.nodeId = _value.nodeId;
    this.message = _value.message;
    IvrMenuIssue.refineValues(this);
  }
  get severity(): IvrMenuIssueSeverity {
    return this._severity;
  }
  set severity(value: IvrMenuIssueSeverity) {
    this._severity = value;
  }
  get code(): string {
    return this._code;
  }
  set code(value: string) {
    this._code = value;
  }
  get path(): string {
    return this._path;
  }
  set path(value: string) {
    this._path = value;
  }
  get nodeId(): string {
    return this._nodeId;
  }
  set nodeId(value: string) {
    this._nodeId = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrMenuIssue.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrMenuIssue.AsObject {
    return {
      severity: this.severity,
      code: this.code,
      path: this.path,
      nodeId: this.nodeId,
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrMenuIssue.AsProtobufJSON {
    return {
      severity:
        IvrMenuIssueSeverity[
          this.severity === null || this.severity === undefined
            ? 0
            : this.severity
        ],
      code: this.code,
      path: this.path,
      nodeId: this.nodeId,
      message: this.message
    };
  }
}
export module IvrMenuIssue {
  /**
   * Standard JavaScript object representation for IvrMenuIssue
   */
  export interface AsObject {
    severity: IvrMenuIssueSeverity;
    code: string;
    path: string;
    nodeId: string;
    message: string;
  }

  /**
   * Protobuf JSON representation for IvrMenuIssue
   */
  export interface AsProtobufJSON {
    severity: string;
    code: string;
    path: string;
    nodeId: string;
    message: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ValidateIvrMenuResponse
 */
export class ValidateIvrMenuResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ValidateIvrMenuResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ValidateIvrMenuResponse();
    ValidateIvrMenuResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ValidateIvrMenuResponse) {
    _instance.issues = _instance.issues || [];
    _instance.valid = _instance.valid || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ValidateIvrMenuResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new IvrMenuIssue();
          _reader.readMessage(
            messageInitializer1,
            IvrMenuIssue.deserializeBinaryFromReader
          );
          (_instance.issues = _instance.issues || []).push(messageInitializer1);
          break;
        case 2:
          _instance.valid = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ValidateIvrMenuResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ValidateIvrMenuResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.issues && _instance.issues.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.issues as any,
        IvrMenuIssue.serializeBinaryToWriter
      );
    }
    if (_instance.valid) {
      _writer.writeBool(2, _instance.valid);
    }
  }

  private _issues?: IvrMenuIssue[];
  private _valid: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ValidateIvrMenuResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ValidateIvrMenuResponse.AsObject>) {
    _value = _value || {};
    this.issues = (_value.issues || []).map(m => new IvrMenuIssue(m));
    this.valid = _value.valid;
    ValidateIvrMenuResponse.refineValues(this);
  }
  get issues(): IvrMenuIssue[] | undefined {
    return this._issues;
  }
  set issues(value: IvrMenuIssue[] | undefined) {
    this._issues = value;
  }
  get valid(): boolean {
    return this._valid;
  }
  set valid(value: boolean) {
    this._valid = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ValidateIvrMenuResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ValidateIvrMenuResponse.AsObject {
    return {
      issues: (this.issues || []).map(m => m.toObject()),
      valid: this.valid
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ValidateIvrMenuResponse.AsProtobufJSON {
    return {
      issues: (this.issues || []).map(m => m.toProtobufJSON(options)),
      valid: this.valid
    };
  }
}
export module ValidateIvrMenuResponse {
  /**
   * Standard JavaScript object representation for ValidateIvrMenuResponse
   */
  export interface AsObject {
    issues?: IvrMenuIssue.AsObject[];
    valid: boolean;
  }

  /**
   * Protobuf JSON representation for ValidateIvrMenuResponse
   */
  export interface AsProtobufJSON {
    issues: IvrMenuIssue.AsProtobufJSON[] | null;
    valid: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.PublishIvrMenuRequest
 */
export class PublishIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.PublishIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PublishIvrMenuRequest();
    PublishIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PublishIvrMenuRequest) {
    _instance.name = _instance.name || '';
    _instance.revision = _instance.revision || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PublishIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.revision = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    PublishIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PublishIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.revision) {
      _writer.writeInt64String(2, _instance.revision);
    }
  }

  private _name: string;
  private _revision: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PublishIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PublishIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.revision = _value.revision;
    PublishIvrMenuRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PublishIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PublishIvrMenuRequest.AsObject {
    return {
      name: this.name,
      revision: this.revision
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PublishIvrMenuRequest.AsProtobufJSON {
    return {
      name: this.name,
      revision: this.revision
    };
  }
}
export module PublishIvrMenuRequest {
  /**
   * Standard JavaScript object representation for PublishIvrMenuRequest
   */
  export interface AsObject {
    name: string;
    revision: string;
  }

  /**
   * Protobuf JSON representation for PublishIvrMenuRequest
   */
  export interface AsProtobufJSON {
    name: string;
    revision: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CloneIvrMenuRequest
 */
export class CloneIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CloneIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CloneIvrMenuRequest();
    CloneIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CloneIvrMenuRequest) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.revision = _instance.revision || '0';
    _instance.idempotencyKey = _instance.idempotencyKey || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CloneIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.revision = _reader.readInt64String();
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CloneIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CloneIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.revision) {
      _writer.writeInt64String(3, _instance.revision);
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
  }

  private _name: string;
  private _displayName: string;
  private _revision: string;
  private _idempotencyKey: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CloneIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CloneIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.revision = _value.revision;
    this.idempotencyKey = _value.idempotencyKey;
    CloneIvrMenuRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CloneIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CloneIvrMenuRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      revision: this.revision,
      idempotencyKey: this.idempotencyKey
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CloneIvrMenuRequest.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      revision: this.revision,
      idempotencyKey: this.idempotencyKey
    };
  }
}
export module CloneIvrMenuRequest {
  /**
   * Standard JavaScript object representation for CloneIvrMenuRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    revision: string;
    idempotencyKey: string;
  }

  /**
   * Protobuf JSON representation for CloneIvrMenuRequest
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    revision: string;
    idempotencyKey: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListIvrMenuRevisionsRequest
 */
export class ListIvrMenuRevisionsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListIvrMenuRevisionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIvrMenuRevisionsRequest();
    ListIvrMenuRevisionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIvrMenuRevisionsRequest) {
    _instance.name = _instance.name || '';
    _instance.pageSize = _instance.pageSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIvrMenuRevisionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListIvrMenuRevisionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIvrMenuRevisionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _name: string;
  private _pageSize: number;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIvrMenuRevisionsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListIvrMenuRevisionsRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListIvrMenuRevisionsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIvrMenuRevisionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIvrMenuRevisionsRequest.AsObject {
    return {
      name: this.name,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIvrMenuRevisionsRequest.AsProtobufJSON {
    return {
      name: this.name,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListIvrMenuRevisionsRequest {
  /**
   * Standard JavaScript object representation for ListIvrMenuRevisionsRequest
   */
  export interface AsObject {
    name: string;
    pageSize: number;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListIvrMenuRevisionsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    pageSize: number;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrMenuRevision
 */
export class IvrMenuRevision implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrMenuRevision';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrMenuRevision();
    IvrMenuRevision.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrMenuRevision) {
    _instance.revision = _instance.revision || '0';
    _instance.snapshot = _instance.snapshot || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.published = _instance.published || false;
    _instance.live = _instance.live || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrMenuRevision,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.revision = _reader.readInt64String();
          break;
        case 2:
          _instance.snapshot = new IvrMenu();
          _reader.readMessage(
            _instance.snapshot,
            IvrMenu.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.modifiedBy = _reader.readString();
          break;
        case 4:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.published = _reader.readBool();
          break;
        case 6:
          _instance.live = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrMenuRevision.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrMenuRevision,
    _writer: BinaryWriter
  ) {
    if (_instance.revision) {
      _writer.writeInt64String(1, _instance.revision);
    }
    if (_instance.snapshot) {
      _writer.writeMessage(
        2,
        _instance.snapshot as any,
        IvrMenu.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(3, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        4,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.published) {
      _writer.writeBool(5, _instance.published);
    }
    if (_instance.live) {
      _writer.writeBool(6, _instance.live);
    }
  }

  private _revision: string;
  private _snapshot?: IvrMenu;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _published: boolean;
  private _live: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrMenuRevision to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrMenuRevision.AsObject>) {
    _value = _value || {};
    this.revision = _value.revision;
    this.snapshot = _value.snapshot ? new IvrMenu(_value.snapshot) : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.published = _value.published;
    this.live = _value.live;
    IvrMenuRevision.refineValues(this);
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }
  get snapshot(): IvrMenu | undefined {
    return this._snapshot;
  }
  set snapshot(value: IvrMenu | undefined) {
    this._snapshot = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get modifiedAt(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get published(): boolean {
    return this._published;
  }
  set published(value: boolean) {
    this._published = value;
  }
  get live(): boolean {
    return this._live;
  }
  set live(value: boolean) {
    this._live = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrMenuRevision.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrMenuRevision.AsObject {
    return {
      revision: this.revision,
      snapshot: this.snapshot ? this.snapshot.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      published: this.published,
      live: this.live
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrMenuRevision.AsProtobufJSON {
    return {
      revision: this.revision,
      snapshot: this.snapshot ? this.snapshot.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      published: this.published,
      live: this.live
    };
  }
}
export module IvrMenuRevision {
  /**
   * Standard JavaScript object representation for IvrMenuRevision
   */
  export interface AsObject {
    revision: string;
    snapshot?: IvrMenu.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    published: boolean;
    live: boolean;
  }

  /**
   * Protobuf JSON representation for IvrMenuRevision
   */
  export interface AsProtobufJSON {
    revision: string;
    snapshot: IvrMenu.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    published: boolean;
    live: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListIvrMenuRevisionsResponse
 */
export class ListIvrMenuRevisionsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListIvrMenuRevisionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListIvrMenuRevisionsResponse();
    ListIvrMenuRevisionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListIvrMenuRevisionsResponse) {
    _instance.revisions = _instance.revisions || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListIvrMenuRevisionsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new IvrMenuRevision();
          _reader.readMessage(
            messageInitializer1,
            IvrMenuRevision.deserializeBinaryFromReader
          );
          (_instance.revisions = _instance.revisions || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListIvrMenuRevisionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListIvrMenuRevisionsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.revisions && _instance.revisions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.revisions as any,
        IvrMenuRevision.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _revisions?: IvrMenuRevision[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListIvrMenuRevisionsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListIvrMenuRevisionsResponse.AsObject>
  ) {
    _value = _value || {};
    this.revisions = (_value.revisions || []).map(m => new IvrMenuRevision(m));
    this.nextPageToken = _value.nextPageToken;
    ListIvrMenuRevisionsResponse.refineValues(this);
  }
  get revisions(): IvrMenuRevision[] | undefined {
    return this._revisions;
  }
  set revisions(value: IvrMenuRevision[] | undefined) {
    this._revisions = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListIvrMenuRevisionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListIvrMenuRevisionsResponse.AsObject {
    return {
      revisions: (this.revisions || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListIvrMenuRevisionsResponse.AsProtobufJSON {
    return {
      revisions: (this.revisions || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListIvrMenuRevisionsResponse {
  /**
   * Standard JavaScript object representation for ListIvrMenuRevisionsResponse
   */
  export interface AsObject {
    revisions?: IvrMenuRevision.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListIvrMenuRevisionsResponse
   */
  export interface AsProtobufJSON {
    revisions: IvrMenuRevision.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrTestStep
 */
export class IvrTestStep implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrTestStep';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrTestStep();
    IvrTestStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrTestStep) {
    _instance.waitMs = _instance.waitMs || 0;
    _instance.dtmf = _instance.dtmf || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrTestStep,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.waitMs = _reader.readUint32();
          break;
        case 2:
          _instance.dtmf = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrTestStep.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrTestStep,
    _writer: BinaryWriter
  ) {
    if (_instance.waitMs) {
      _writer.writeUint32(1, _instance.waitMs);
    }
    if (_instance.dtmf) {
      _writer.writeString(2, _instance.dtmf);
    }
  }

  private _waitMs: number;
  private _dtmf: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrTestStep to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrTestStep.AsObject>) {
    _value = _value || {};
    this.waitMs = _value.waitMs;
    this.dtmf = _value.dtmf;
    IvrTestStep.refineValues(this);
  }
  get waitMs(): number {
    return this._waitMs;
  }
  set waitMs(value: number) {
    this._waitMs = value;
  }
  get dtmf(): string {
    return this._dtmf;
  }
  set dtmf(value: string) {
    this._dtmf = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrTestStep.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrTestStep.AsObject {
    return {
      waitMs: this.waitMs,
      dtmf: this.dtmf
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrTestStep.AsProtobufJSON {
    return {
      waitMs: this.waitMs,
      dtmf: this.dtmf
    };
  }
}
export module IvrTestStep {
  /**
   * Standard JavaScript object representation for IvrTestStep
   */
  export interface AsObject {
    waitMs: number;
    dtmf: string;
  }

  /**
   * Protobuf JSON representation for IvrTestStep
   */
  export interface AsProtobufJSON {
    waitMs: number;
    dtmf: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.TestIvrMenuRequest
 */
export class TestIvrMenuRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.TestIvrMenuRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TestIvrMenuRequest();
    TestIvrMenuRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TestIvrMenuRequest) {
    _instance.name = _instance.name || '';
    _instance.steps = _instance.steps || [];
    _instance.maxDurationS = _instance.maxDurationS || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TestIvrMenuRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new IvrTestStep();
          _reader.readMessage(
            messageInitializer2,
            IvrTestStep.deserializeBinaryFromReader
          );
          (_instance.steps = _instance.steps || []).push(messageInitializer2);
          break;
        case 3:
          _instance.maxDurationS = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    TestIvrMenuRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TestIvrMenuRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.steps && _instance.steps.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.steps as any,
        IvrTestStep.serializeBinaryToWriter
      );
    }
    if (_instance.maxDurationS) {
      _writer.writeUint32(3, _instance.maxDurationS);
    }
  }

  private _name: string;
  private _steps?: IvrTestStep[];
  private _maxDurationS: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TestIvrMenuRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TestIvrMenuRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.steps = (_value.steps || []).map(m => new IvrTestStep(m));
    this.maxDurationS = _value.maxDurationS;
    TestIvrMenuRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get steps(): IvrTestStep[] | undefined {
    return this._steps;
  }
  set steps(value: IvrTestStep[] | undefined) {
    this._steps = value;
  }
  get maxDurationS(): number {
    return this._maxDurationS;
  }
  set maxDurationS(value: number) {
    this._maxDurationS = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TestIvrMenuRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TestIvrMenuRequest.AsObject {
    return {
      name: this.name,
      steps: (this.steps || []).map(m => m.toObject()),
      maxDurationS: this.maxDurationS
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TestIvrMenuRequest.AsProtobufJSON {
    return {
      name: this.name,
      steps: (this.steps || []).map(m => m.toProtobufJSON(options)),
      maxDurationS: this.maxDurationS
    };
  }
}
export module TestIvrMenuRequest {
  /**
   * Standard JavaScript object representation for TestIvrMenuRequest
   */
  export interface AsObject {
    name: string;
    steps?: IvrTestStep.AsObject[];
    maxDurationS: number;
  }

  /**
   * Protobuf JSON representation for TestIvrMenuRequest
   */
  export interface AsProtobufJSON {
    name: string;
    steps: IvrTestStep.AsProtobufJSON[] | null;
    maxDurationS: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetIvrMenuTestRequest
 */
export class GetIvrMenuTestRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetIvrMenuTestRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIvrMenuTestRequest();
    GetIvrMenuTestRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIvrMenuTestRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIvrMenuTestRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetIvrMenuTestRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIvrMenuTestRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIvrMenuTestRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIvrMenuTestRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetIvrMenuTestRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIvrMenuTestRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIvrMenuTestRequest.AsObject {
    return {
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetIvrMenuTestRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetIvrMenuTestRequest {
  /**
   * Standard JavaScript object representation for GetIvrMenuTestRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetIvrMenuTestRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrTraversalStep
 */
export class IvrTraversalStep implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrTraversalStep';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrTraversalStep();
    IvrTraversalStep.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrTraversalStep) {
    _instance.nodeId = _instance.nodeId || '';
    _instance.input = _instance.input || '';
    _instance.nextNodeId = _instance.nextNodeId || '';
    _instance.enteredAt = _instance.enteredAt || undefined;
    _instance.ivrMenuName = _instance.ivrMenuName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrTraversalStep,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nodeId = _reader.readString();
          break;
        case 2:
          _instance.input = _reader.readString();
          break;
        case 3:
          _instance.nextNodeId = _reader.readString();
          break;
        case 4:
          _instance.enteredAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.enteredAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.ivrMenuName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    IvrTraversalStep.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrTraversalStep,
    _writer: BinaryWriter
  ) {
    if (_instance.nodeId) {
      _writer.writeString(1, _instance.nodeId);
    }
    if (_instance.input) {
      _writer.writeString(2, _instance.input);
    }
    if (_instance.nextNodeId) {
      _writer.writeString(3, _instance.nextNodeId);
    }
    if (_instance.enteredAt) {
      _writer.writeMessage(
        4,
        _instance.enteredAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.ivrMenuName) {
      _writer.writeString(5, _instance.ivrMenuName);
    }
  }

  private _nodeId: string;
  private _input: string;
  private _nextNodeId: string;
  private _enteredAt?: googleProtobuf001.Timestamp;
  private _ivrMenuName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrTraversalStep to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrTraversalStep.AsObject>) {
    _value = _value || {};
    this.nodeId = _value.nodeId;
    this.input = _value.input;
    this.nextNodeId = _value.nextNodeId;
    this.enteredAt = _value.enteredAt
      ? new googleProtobuf001.Timestamp(_value.enteredAt)
      : undefined;
    this.ivrMenuName = _value.ivrMenuName;
    IvrTraversalStep.refineValues(this);
  }
  get nodeId(): string {
    return this._nodeId;
  }
  set nodeId(value: string) {
    this._nodeId = value;
  }
  get input(): string {
    return this._input;
  }
  set input(value: string) {
    this._input = value;
  }
  get nextNodeId(): string {
    return this._nextNodeId;
  }
  set nextNodeId(value: string) {
    this._nextNodeId = value;
  }
  get enteredAt(): googleProtobuf001.Timestamp | undefined {
    return this._enteredAt;
  }
  set enteredAt(value: googleProtobuf001.Timestamp | undefined) {
    this._enteredAt = value;
  }
  get ivrMenuName(): string {
    return this._ivrMenuName;
  }
  set ivrMenuName(value: string) {
    this._ivrMenuName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrTraversalStep.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrTraversalStep.AsObject {
    return {
      nodeId: this.nodeId,
      input: this.input,
      nextNodeId: this.nextNodeId,
      enteredAt: this.enteredAt ? this.enteredAt.toObject() : undefined,
      ivrMenuName: this.ivrMenuName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrTraversalStep.AsProtobufJSON {
    return {
      nodeId: this.nodeId,
      input: this.input,
      nextNodeId: this.nextNodeId,
      enteredAt: this.enteredAt ? this.enteredAt.toProtobufJSON(options) : null,
      ivrMenuName: this.ivrMenuName
    };
  }
}
export module IvrTraversalStep {
  /**
   * Standard JavaScript object representation for IvrTraversalStep
   */
  export interface AsObject {
    nodeId: string;
    input: string;
    nextNodeId: string;
    enteredAt?: googleProtobuf001.Timestamp.AsObject;
    ivrMenuName: string;
  }

  /**
   * Protobuf JSON representation for IvrTraversalStep
   */
  export interface AsProtobufJSON {
    nodeId: string;
    input: string;
    nextNodeId: string;
    enteredAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    ivrMenuName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.IvrMenuTest
 */
export class IvrMenuTest implements GrpcMessage {
  static id = 'ondewo.vtsi.IvrMenuTest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new IvrMenuTest();
    IvrMenuTest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: IvrMenuTest) {
    _instance.name = _instance.name || '';
    _instance.testId = _instance.testId || '';
    _instance.state = _instance.state || 0;
    _instance.revision = _instance.revision || '0';
    _instance.path = _instance.path || [];
    _instance.finalNodeId = _instance.finalNodeId || '';
    _instance.route = _instance.route || '';
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: IvrMenuTest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.testId = _reader.readString();
          break;
        case 3:
          _instance.state = _reader.readEnum();
          break;
        case 4:
          _instance.revision = _reader.readInt64String();
          break;
        case 5:
          const messageInitializer5 = new IvrTraversalStep();
          _reader.readMessage(
            messageInitializer5,
            IvrTraversalStep.deserializeBinaryFromReader
          );
          (_instance.path = _instance.path || []).push(messageInitializer5);
          break;
        case 6:
          _instance.finalNodeId = _reader.readString();
          break;
        case 7:
          _instance.route = _reader.readString();
          break;
        case 8:
          _instance.errorMessage = _reader.readString();
          break;
        case 9:
          _instance.startedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.finishedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    IvrMenuTest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: IvrMenuTest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.testId) {
      _writer.writeString(2, _instance.testId);
    }
    if (_instance.state) {
      _writer.writeEnum(3, _instance.state);
    }
    if (_instance.revision) {
      _writer.writeInt64String(4, _instance.revision);
    }
    if (_instance.path && _instance.path.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.path as any,
        IvrTraversalStep.serializeBinaryToWriter
      );
    }
    if (_instance.finalNodeId) {
      _writer.writeString(6, _instance.finalNodeId);
    }
    if (_instance.route) {
      _writer.writeString(7, _instance.route);
    }
    if (_instance.errorMessage) {
      _writer.writeString(8, _instance.errorMessage);
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        9,
        _instance.startedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        10,
        _instance.finishedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _testId: string;
  private _state: IvrMenuTestState;
  private _revision: string;
  private _path?: IvrTraversalStep[];
  private _finalNodeId: string;
  private _route: string;
  private _errorMessage: string;
  private _startedAt?: googleProtobuf001.Timestamp;
  private _finishedAt?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of IvrMenuTest to deeply clone from
   */
  constructor(_value?: RecursivePartial<IvrMenuTest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.testId = _value.testId;
    this.state = _value.state;
    this.revision = _value.revision;
    this.path = (_value.path || []).map(m => new IvrTraversalStep(m));
    this.finalNodeId = _value.finalNodeId;
    this.route = _value.route;
    this.errorMessage = _value.errorMessage;
    this.startedAt = _value.startedAt
      ? new googleProtobuf001.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf001.Timestamp(_value.finishedAt)
      : undefined;
    IvrMenuTest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get testId(): string {
    return this._testId;
  }
  set testId(value: string) {
    this._testId = value;
  }
  get state(): IvrMenuTestState {
    return this._state;
  }
  set state(value: IvrMenuTestState) {
    this._state = value;
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }
  get path(): IvrTraversalStep[] | undefined {
    return this._path;
  }
  set path(value: IvrTraversalStep[] | undefined) {
    this._path = value;
  }
  get finalNodeId(): string {
    return this._finalNodeId;
  }
  set finalNodeId(value: string) {
    this._finalNodeId = value;
  }
  get route(): string {
    return this._route;
  }
  set route(value: string) {
    this._route = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  get startedAt(): googleProtobuf001.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf001.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._finishedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    IvrMenuTest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): IvrMenuTest.AsObject {
    return {
      name: this.name,
      testId: this.testId,
      state: this.state,
      revision: this.revision,
      path: (this.path || []).map(m => m.toObject()),
      finalNodeId: this.finalNodeId,
      route: this.route,
      errorMessage: this.errorMessage,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): IvrMenuTest.AsProtobufJSON {
    return {
      name: this.name,
      testId: this.testId,
      state:
        IvrMenuTestState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      revision: this.revision,
      path: (this.path || []).map(m => m.toProtobufJSON(options)),
      finalNodeId: this.finalNodeId,
      route: this.route,
      errorMessage: this.errorMessage,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null
    };
  }
}
export module IvrMenuTest {
  /**
   * Standard JavaScript object representation for IvrMenuTest
   */
  export interface AsObject {
    name: string;
    testId: string;
    state: IvrMenuTestState;
    revision: string;
    path?: IvrTraversalStep.AsObject[];
    finalNodeId: string;
    route: string;
    errorMessage: string;
    startedAt?: googleProtobuf001.Timestamp.AsObject;
    finishedAt?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for IvrMenuTest
   */
  export interface AsProtobufJSON {
    name: string;
    testId: string;
    state: string;
    revision: string;
    path: IvrTraversalStep.AsProtobufJSON[] | null;
    finalNodeId: string;
    route: string;
    errorMessage: string;
    startedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetIvrMenuDialplanRequest
 */
export class GetIvrMenuDialplanRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetIvrMenuDialplanRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIvrMenuDialplanRequest();
    GetIvrMenuDialplanRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIvrMenuDialplanRequest) {
    _instance.name = _instance.name || '';
    _instance.revision = _instance.revision || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIvrMenuDialplanRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.revision = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetIvrMenuDialplanRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIvrMenuDialplanRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.revision) {
      _writer.writeInt64String(2, _instance.revision);
    }
  }

  private _name: string;
  private _revision: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIvrMenuDialplanRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIvrMenuDialplanRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.revision = _value.revision;
    GetIvrMenuDialplanRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get revision(): string {
    return this._revision;
  }
  set revision(value: string) {
    this._revision = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIvrMenuDialplanRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIvrMenuDialplanRequest.AsObject {
    return {
      name: this.name,
      revision: this.revision
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetIvrMenuDialplanRequest.AsProtobufJSON {
    return {
      name: this.name,
      revision: this.revision
    };
  }
}
export module GetIvrMenuDialplanRequest {
  /**
   * Standard JavaScript object representation for GetIvrMenuDialplanRequest
   */
  export interface AsObject {
    name: string;
    revision: string;
  }

  /**
   * Protobuf JSON representation for GetIvrMenuDialplanRequest
   */
  export interface AsProtobufJSON {
    name: string;
    revision: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetIvrMenuDialplanResponse
 */
export class GetIvrMenuDialplanResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.GetIvrMenuDialplanResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetIvrMenuDialplanResponse();
    GetIvrMenuDialplanResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetIvrMenuDialplanResponse) {
    _instance.dialplan = _instance.dialplan || '';
    _instance.promptFiles = _instance.promptFiles || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetIvrMenuDialplanResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.dialplan = _reader.readString();
          break;
        case 2:
          (_instance.promptFiles = _instance.promptFiles || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetIvrMenuDialplanResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetIvrMenuDialplanResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.dialplan) {
      _writer.writeString(1, _instance.dialplan);
    }
    if (_instance.promptFiles && _instance.promptFiles.length) {
      _writer.writeRepeatedString(2, _instance.promptFiles);
    }
  }

  private _dialplan: string;
  private _promptFiles: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetIvrMenuDialplanResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetIvrMenuDialplanResponse.AsObject>) {
    _value = _value || {};
    this.dialplan = _value.dialplan;
    this.promptFiles = (_value.promptFiles || []).slice();
    GetIvrMenuDialplanResponse.refineValues(this);
  }
  get dialplan(): string {
    return this._dialplan;
  }
  set dialplan(value: string) {
    this._dialplan = value;
  }
  get promptFiles(): string[] {
    return this._promptFiles;
  }
  set promptFiles(value: string[]) {
    this._promptFiles = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetIvrMenuDialplanResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetIvrMenuDialplanResponse.AsObject {
    return {
      dialplan: this.dialplan,
      promptFiles: (this.promptFiles || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetIvrMenuDialplanResponse.AsProtobufJSON {
    return {
      dialplan: this.dialplan,
      promptFiles: (this.promptFiles || []).slice()
    };
  }
}
export module GetIvrMenuDialplanResponse {
  /**
   * Standard JavaScript object representation for GetIvrMenuDialplanResponse
   */
  export interface AsObject {
    dialplan: string;
    promptFiles: string[];
  }

  /**
   * Protobuf JSON representation for GetIvrMenuDialplanResponse
   */
  export interface AsProtobufJSON {
    dialplan: string;
    promptFiles: string[];
  }
}
