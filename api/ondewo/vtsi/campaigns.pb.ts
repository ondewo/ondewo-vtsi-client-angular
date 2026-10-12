/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as ondewoNlu002 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t004 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s005 from '../../ondewo/t2s/text-to-speech.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoSip008 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi009 from '../../ondewo/vtsi/call-configs.pb';
export enum CampaignState {
  CAMPAIGN_STATE_UNSPECIFIED = 0,
  CAMPAIGN_STATE_CREATED = 1,
  CAMPAIGN_STATE_RUNNING = 2,
  CAMPAIGN_STATE_STOPPING = 3,
  CAMPAIGN_STATE_STOPPED = 4,
  CAMPAIGN_STATE_HARD_STOPPING = 5,
  CAMPAIGN_STATE_HARD_STOPPED = 6,
  CAMPAIGN_STATE_COMPLETED = 7
}
export enum CampaignCallState {
  CAMPAIGN_CALL_STATE_UNSPECIFIED = 0,
  CAMPAIGN_CALL_STATE_NOT_STARTED = 1,
  CAMPAIGN_CALL_STATE_DISPATCHING = 2,
  CAMPAIGN_CALL_STATE_IN_PROGRESS = 3,
  CAMPAIGN_CALL_STATE_RETRY_PENDING = 4,
  CAMPAIGN_CALL_STATE_COMPLETED = 5,
  CAMPAIGN_CALL_STATE_FAILED = 6,
  CAMPAIGN_CALL_STATE_CANCELLED = 7
}
export enum CampaignStartMode {
  CAMPAIGN_START_MODE_UNSPECIFIED = 0,
  CAMPAIGN_START_MODE_START = 1,
  CAMPAIGN_START_MODE_DO_NOT_START = 2
}
export enum CampaignCallSource {
  CAMPAIGN_CALL_SOURCE_UNSPECIFIED = 0,
  CAMPAIGN_CALL_SOURCE_CALLER = 1,
  CAMPAIGN_CALL_SOURCE_SCHEDULED_CALLER = 2
}
export enum CampaignCallAttemptOutcome {
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_UNSPECIFIED = 0,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_IN_PROGRESS = 1,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_COMPLETED = 2,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_FAILED = 3,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_CANCELLED = 4
}
export enum CallingWindowDayOfWeek {
  CALLING_WINDOW_DAY_OF_WEEK_UNSPECIFIED = 0,
  CALLING_WINDOW_DAY_OF_WEEK_MONDAY = 1,
  CALLING_WINDOW_DAY_OF_WEEK_TUESDAY = 2,
  CALLING_WINDOW_DAY_OF_WEEK_WEDNESDAY = 3,
  CALLING_WINDOW_DAY_OF_WEEK_THURSDAY = 4,
  CALLING_WINDOW_DAY_OF_WEEK_FRIDAY = 5,
  CALLING_WINDOW_DAY_OF_WEEK_SATURDAY = 6,
  CALLING_WINDOW_DAY_OF_WEEK_SUNDAY = 7
}
export enum CampaignOrderBy {
  CAMPAIGN_ORDER_BY_UNSPECIFIED = 0,
  CAMPAIGN_ORDER_BY_CREATED_AT_DESC = 1,
  CAMPAIGN_ORDER_BY_MODIFIED_AT_DESC = 2,
  CAMPAIGN_ORDER_BY_DISPLAY_NAME_ASC = 3
}
export enum StreamEndReason {
  STREAM_END_REASON_UNSPECIFIED = 0,
  STREAM_END_REASON_MAX_DURATION = 1,
  STREAM_END_REASON_CLIENT_TOO_SLOW = 2,
  STREAM_END_REASON_SUBSCRIPTION_DELETED = 3,
  STREAM_END_REASON_SUBSCRIPTION_DISABLED = 4,
  STREAM_END_REASON_PROJECT_DELETED = 5,
  STREAM_END_REASON_SERVER_SHUTDOWN = 6
}
/**
 * Message implementation for ondewo.vtsi.Campaign
 */
export class Campaign implements GrpcMessage {
  static id = 'ondewo.vtsi.Campaign';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Campaign();
    Campaign.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Campaign) {
    _instance.name = _instance.name || '';
    _instance.campaignId = _instance.campaignId || '';
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.maxParallelCalls = _instance.maxParallelCalls || 0;
    _instance.maxAttempts = _instance.maxAttempts || 0;
    _instance.retryDelay = _instance.retryDelay || undefined;
    _instance.state = _instance.state || 0;
    _instance.stateReason = _instance.stateReason || '';
    _instance.statistics = _instance.statistics || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.stoppedAt = _instance.stoppedAt || undefined;
    _instance.completedAt = _instance.completedAt || undefined;
    _instance.campaignCommonServicesConfig =
      _instance.campaignCommonServicesConfig || undefined;
    _instance.campaignSipCallerConfig =
      _instance.campaignSipCallerConfig || undefined;
    _instance.campaignCallers = _instance.campaignCallers || [];
    _instance.campaignCallersTruncated =
      _instance.campaignCallersTruncated || false;
    _instance.callingWindow = _instance.callingWindow || undefined;
    _instance.outsideCallingWindow = _instance.outsideCallingWindow || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Campaign,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.campaignId = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.displayName = _reader.readString();
          break;
        case 5:
          _instance.maxParallelCalls = _reader.readInt32();
          break;
        case 6:
          _instance.maxAttempts = _reader.readInt32();
          break;
        case 7:
          _instance.retryDelay = new googleProtobuf006.Duration();
          _reader.readMessage(
            _instance.retryDelay,
            googleProtobuf006.Duration.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.state = _reader.readEnum();
          break;
        case 9:
          _instance.stateReason = _reader.readString();
          break;
        case 10:
          _instance.statistics = new CampaignStatistics();
          _reader.readMessage(
            _instance.statistics,
            CampaignStatistics.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.createdBy = _reader.readString();
          break;
        case 12:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.modifiedBy = _reader.readString();
          break;
        case 14:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.startedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.stoppedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.stoppedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.completedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.completedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.campaignCommonServicesConfig = new ondewoVtsi009.CommonServicesConfig();
          _reader.readMessage(
            _instance.campaignCommonServicesConfig,
            ondewoVtsi009.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.campaignSipCallerConfig = new ondewoVtsi009.SipCallerConfig();
          _reader.readMessage(
            _instance.campaignSipCallerConfig,
            ondewoVtsi009.SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 20:
          (_instance.campaignCallers = _instance.campaignCallers || []).push(
            _reader.readString()
          );
          break;
        case 21:
          _instance.campaignCallersTruncated = _reader.readBool();
          break;
        case 22:
          _instance.callingWindow = new CampaignCallingWindow();
          _reader.readMessage(
            _instance.callingWindow,
            CampaignCallingWindow.deserializeBinaryFromReader
          );
          break;
        case 23:
          _instance.outsideCallingWindow = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    Campaign.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Campaign, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.campaignId) {
      _writer.writeString(2, _instance.campaignId);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.displayName) {
      _writer.writeString(4, _instance.displayName);
    }
    if (_instance.maxParallelCalls) {
      _writer.writeInt32(5, _instance.maxParallelCalls);
    }
    if (_instance.maxAttempts) {
      _writer.writeInt32(6, _instance.maxAttempts);
    }
    if (_instance.retryDelay) {
      _writer.writeMessage(
        7,
        _instance.retryDelay as any,
        googleProtobuf006.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.state) {
      _writer.writeEnum(8, _instance.state);
    }
    if (_instance.stateReason) {
      _writer.writeString(9, _instance.stateReason);
    }
    if (_instance.statistics) {
      _writer.writeMessage(
        10,
        _instance.statistics as any,
        CampaignStatistics.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(11, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        12,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(13, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        14,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        15,
        _instance.startedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.stoppedAt) {
      _writer.writeMessage(
        16,
        _instance.stoppedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.completedAt) {
      _writer.writeMessage(
        17,
        _instance.completedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.campaignCommonServicesConfig) {
      _writer.writeMessage(
        18,
        _instance.campaignCommonServicesConfig as any,
        ondewoVtsi009.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.campaignSipCallerConfig) {
      _writer.writeMessage(
        19,
        _instance.campaignSipCallerConfig as any,
        ondewoVtsi009.SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.campaignCallers && _instance.campaignCallers.length) {
      _writer.writeRepeatedString(20, _instance.campaignCallers);
    }
    if (_instance.campaignCallersTruncated) {
      _writer.writeBool(21, _instance.campaignCallersTruncated);
    }
    if (_instance.callingWindow) {
      _writer.writeMessage(
        22,
        _instance.callingWindow as any,
        CampaignCallingWindow.serializeBinaryToWriter
      );
    }
    if (_instance.outsideCallingWindow) {
      _writer.writeBool(23, _instance.outsideCallingWindow);
    }
  }

  private _name: string;
  private _campaignId: string;
  private _vtsiProjectName: string;
  private _displayName: string;
  private _maxParallelCalls: number;
  private _maxAttempts: number;
  private _retryDelay?: googleProtobuf006.Duration;
  private _state: CampaignState;
  private _stateReason: string;
  private _statistics?: CampaignStatistics;
  private _createdBy: string;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _startedAt?: googleProtobuf001.Timestamp;
  private _stoppedAt?: googleProtobuf001.Timestamp;
  private _completedAt?: googleProtobuf001.Timestamp;
  private _campaignCommonServicesConfig?: ondewoVtsi009.CommonServicesConfig;
  private _campaignSipCallerConfig?: ondewoVtsi009.SipCallerConfig;
  private _campaignCallers: string[];
  private _campaignCallersTruncated: boolean;
  private _callingWindow?: CampaignCallingWindow;
  private _outsideCallingWindow: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Campaign to deeply clone from
   */
  constructor(_value?: RecursivePartial<Campaign.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.campaignId = _value.campaignId;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.displayName = _value.displayName;
    this.maxParallelCalls = _value.maxParallelCalls;
    this.maxAttempts = _value.maxAttempts;
    this.retryDelay = _value.retryDelay
      ? new googleProtobuf006.Duration(_value.retryDelay)
      : undefined;
    this.state = _value.state;
    this.stateReason = _value.stateReason;
    this.statistics = _value.statistics
      ? new CampaignStatistics(_value.statistics)
      : undefined;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.startedAt = _value.startedAt
      ? new googleProtobuf001.Timestamp(_value.startedAt)
      : undefined;
    this.stoppedAt = _value.stoppedAt
      ? new googleProtobuf001.Timestamp(_value.stoppedAt)
      : undefined;
    this.completedAt = _value.completedAt
      ? new googleProtobuf001.Timestamp(_value.completedAt)
      : undefined;
    this.campaignCommonServicesConfig = _value.campaignCommonServicesConfig
      ? new ondewoVtsi009.CommonServicesConfig(
          _value.campaignCommonServicesConfig
        )
      : undefined;
    this.campaignSipCallerConfig = _value.campaignSipCallerConfig
      ? new ondewoVtsi009.SipCallerConfig(_value.campaignSipCallerConfig)
      : undefined;
    this.campaignCallers = (_value.campaignCallers || []).slice();
    this.campaignCallersTruncated = _value.campaignCallersTruncated;
    this.callingWindow = _value.callingWindow
      ? new CampaignCallingWindow(_value.callingWindow)
      : undefined;
    this.outsideCallingWindow = _value.outsideCallingWindow;
    Campaign.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get campaignId(): string {
    return this._campaignId;
  }
  set campaignId(value: string) {
    this._campaignId = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get maxParallelCalls(): number {
    return this._maxParallelCalls;
  }
  set maxParallelCalls(value: number) {
    this._maxParallelCalls = value;
  }
  get maxAttempts(): number {
    return this._maxAttempts;
  }
  set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  get retryDelay(): googleProtobuf006.Duration | undefined {
    return this._retryDelay;
  }
  set retryDelay(value: googleProtobuf006.Duration | undefined) {
    this._retryDelay = value;
  }
  get state(): CampaignState {
    return this._state;
  }
  set state(value: CampaignState) {
    this._state = value;
  }
  get stateReason(): string {
    return this._stateReason;
  }
  set stateReason(value: string) {
    this._stateReason = value;
  }
  get statistics(): CampaignStatistics | undefined {
    return this._statistics;
  }
  set statistics(value: CampaignStatistics | undefined) {
    this._statistics = value;
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
  get startedAt(): googleProtobuf001.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._startedAt = value;
  }
  get stoppedAt(): googleProtobuf001.Timestamp | undefined {
    return this._stoppedAt;
  }
  set stoppedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._stoppedAt = value;
  }
  get completedAt(): googleProtobuf001.Timestamp | undefined {
    return this._completedAt;
  }
  set completedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._completedAt = value;
  }
  get campaignCommonServicesConfig():
    | ondewoVtsi009.CommonServicesConfig
    | undefined {
    return this._campaignCommonServicesConfig;
  }
  set campaignCommonServicesConfig(
    value: ondewoVtsi009.CommonServicesConfig | undefined
  ) {
    this._campaignCommonServicesConfig = value;
  }
  get campaignSipCallerConfig(): ondewoVtsi009.SipCallerConfig | undefined {
    return this._campaignSipCallerConfig;
  }
  set campaignSipCallerConfig(
    value: ondewoVtsi009.SipCallerConfig | undefined
  ) {
    this._campaignSipCallerConfig = value;
  }
  get campaignCallers(): string[] {
    return this._campaignCallers;
  }
  set campaignCallers(value: string[]) {
    this._campaignCallers = value;
  }
  get campaignCallersTruncated(): boolean {
    return this._campaignCallersTruncated;
  }
  set campaignCallersTruncated(value: boolean) {
    this._campaignCallersTruncated = value;
  }
  get callingWindow(): CampaignCallingWindow | undefined {
    return this._callingWindow;
  }
  set callingWindow(value: CampaignCallingWindow | undefined) {
    this._callingWindow = value;
  }
  get outsideCallingWindow(): boolean {
    return this._outsideCallingWindow;
  }
  set outsideCallingWindow(value: boolean) {
    this._outsideCallingWindow = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Campaign.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Campaign.AsObject {
    return {
      name: this.name,
      campaignId: this.campaignId,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      maxParallelCalls: this.maxParallelCalls,
      maxAttempts: this.maxAttempts,
      retryDelay: this.retryDelay ? this.retryDelay.toObject() : undefined,
      state: this.state,
      stateReason: this.stateReason,
      statistics: this.statistics ? this.statistics.toObject() : undefined,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      stoppedAt: this.stoppedAt ? this.stoppedAt.toObject() : undefined,
      completedAt: this.completedAt ? this.completedAt.toObject() : undefined,
      campaignCommonServicesConfig: this.campaignCommonServicesConfig
        ? this.campaignCommonServicesConfig.toObject()
        : undefined,
      campaignSipCallerConfig: this.campaignSipCallerConfig
        ? this.campaignSipCallerConfig.toObject()
        : undefined,
      campaignCallers: (this.campaignCallers || []).slice(),
      campaignCallersTruncated: this.campaignCallersTruncated,
      callingWindow: this.callingWindow
        ? this.callingWindow.toObject()
        : undefined,
      outsideCallingWindow: this.outsideCallingWindow
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
  ): Campaign.AsProtobufJSON {
    return {
      name: this.name,
      campaignId: this.campaignId,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      maxParallelCalls: this.maxParallelCalls,
      maxAttempts: this.maxAttempts,
      retryDelay: this.retryDelay
        ? this.retryDelay.toProtobufJSON(options)
        : null,
      state:
        CampaignState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      stateReason: this.stateReason,
      statistics: this.statistics
        ? this.statistics.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      stoppedAt: this.stoppedAt ? this.stoppedAt.toProtobufJSON(options) : null,
      completedAt: this.completedAt
        ? this.completedAt.toProtobufJSON(options)
        : null,
      campaignCommonServicesConfig: this.campaignCommonServicesConfig
        ? this.campaignCommonServicesConfig.toProtobufJSON(options)
        : null,
      campaignSipCallerConfig: this.campaignSipCallerConfig
        ? this.campaignSipCallerConfig.toProtobufJSON(options)
        : null,
      campaignCallers: (this.campaignCallers || []).slice(),
      campaignCallersTruncated: this.campaignCallersTruncated,
      callingWindow: this.callingWindow
        ? this.callingWindow.toProtobufJSON(options)
        : null,
      outsideCallingWindow: this.outsideCallingWindow
    };
  }
}
export module Campaign {
  /**
   * Standard JavaScript object representation for Campaign
   */
  export interface AsObject {
    name: string;
    campaignId: string;
    vtsiProjectName: string;
    displayName: string;
    maxParallelCalls: number;
    maxAttempts: number;
    retryDelay?: googleProtobuf006.Duration.AsObject;
    state: CampaignState;
    stateReason: string;
    statistics?: CampaignStatistics.AsObject;
    createdBy: string;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    startedAt?: googleProtobuf001.Timestamp.AsObject;
    stoppedAt?: googleProtobuf001.Timestamp.AsObject;
    completedAt?: googleProtobuf001.Timestamp.AsObject;
    campaignCommonServicesConfig?: ondewoVtsi009.CommonServicesConfig.AsObject;
    campaignSipCallerConfig?: ondewoVtsi009.SipCallerConfig.AsObject;
    campaignCallers: string[];
    campaignCallersTruncated: boolean;
    callingWindow?: CampaignCallingWindow.AsObject;
    outsideCallingWindow: boolean;
  }

  /**
   * Protobuf JSON representation for Campaign
   */
  export interface AsProtobufJSON {
    name: string;
    campaignId: string;
    vtsiProjectName: string;
    displayName: string;
    maxParallelCalls: number;
    maxAttempts: number;
    retryDelay: googleProtobuf006.Duration.AsProtobufJSON | null;
    state: string;
    stateReason: string;
    statistics: CampaignStatistics.AsProtobufJSON | null;
    createdBy: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    startedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    stoppedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    completedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    campaignCommonServicesConfig: ondewoVtsi009.CommonServicesConfig.AsProtobufJSON | null;
    campaignSipCallerConfig: ondewoVtsi009.SipCallerConfig.AsProtobufJSON | null;
    campaignCallers: string[];
    campaignCallersTruncated: boolean;
    callingWindow: CampaignCallingWindow.AsProtobufJSON | null;
    outsideCallingWindow: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignCallingWindow
 */
export class CampaignCallingWindow implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignCallingWindow';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignCallingWindow();
    CampaignCallingWindow.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignCallingWindow) {
    _instance.timeZone = _instance.timeZone || '';
    _instance.slots = _instance.slots || [];
    _instance.nextWindowStart = _instance.nextWindowStart || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignCallingWindow,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timeZone = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new CallingWindowSlot();
          _reader.readMessage(
            messageInitializer2,
            CallingWindowSlot.deserializeBinaryFromReader
          );
          (_instance.slots = _instance.slots || []).push(messageInitializer2);
          break;
        case 3:
          _instance.nextWindowStart = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.nextWindowStart,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignCallingWindow.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignCallingWindow,
    _writer: BinaryWriter
  ) {
    if (_instance.timeZone) {
      _writer.writeString(1, _instance.timeZone);
    }
    if (_instance.slots && _instance.slots.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.slots as any,
        CallingWindowSlot.serializeBinaryToWriter
      );
    }
    if (_instance.nextWindowStart) {
      _writer.writeMessage(
        3,
        _instance.nextWindowStart as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _timeZone: string;
  private _slots?: CallingWindowSlot[];
  private _nextWindowStart?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignCallingWindow to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignCallingWindow.AsObject>) {
    _value = _value || {};
    this.timeZone = _value.timeZone;
    this.slots = (_value.slots || []).map(m => new CallingWindowSlot(m));
    this.nextWindowStart = _value.nextWindowStart
      ? new googleProtobuf001.Timestamp(_value.nextWindowStart)
      : undefined;
    CampaignCallingWindow.refineValues(this);
  }
  get timeZone(): string {
    return this._timeZone;
  }
  set timeZone(value: string) {
    this._timeZone = value;
  }
  get slots(): CallingWindowSlot[] | undefined {
    return this._slots;
  }
  set slots(value: CallingWindowSlot[] | undefined) {
    this._slots = value;
  }
  get nextWindowStart(): googleProtobuf001.Timestamp | undefined {
    return this._nextWindowStart;
  }
  set nextWindowStart(value: googleProtobuf001.Timestamp | undefined) {
    this._nextWindowStart = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignCallingWindow.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignCallingWindow.AsObject {
    return {
      timeZone: this.timeZone,
      slots: (this.slots || []).map(m => m.toObject()),
      nextWindowStart: this.nextWindowStart
        ? this.nextWindowStart.toObject()
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
  ): CampaignCallingWindow.AsProtobufJSON {
    return {
      timeZone: this.timeZone,
      slots: (this.slots || []).map(m => m.toProtobufJSON(options)),
      nextWindowStart: this.nextWindowStart
        ? this.nextWindowStart.toProtobufJSON(options)
        : null
    };
  }
}
export module CampaignCallingWindow {
  /**
   * Standard JavaScript object representation for CampaignCallingWindow
   */
  export interface AsObject {
    timeZone: string;
    slots?: CallingWindowSlot.AsObject[];
    nextWindowStart?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for CampaignCallingWindow
   */
  export interface AsProtobufJSON {
    timeZone: string;
    slots: CallingWindowSlot.AsProtobufJSON[] | null;
    nextWindowStart: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallingWindowSlot
 */
export class CallingWindowSlot implements GrpcMessage {
  static id = 'ondewo.vtsi.CallingWindowSlot';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallingWindowSlot();
    CallingWindowSlot.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallingWindowSlot) {
    _instance.dayOfWeek = _instance.dayOfWeek || 0;
    _instance.startMinute = _instance.startMinute || 0;
    _instance.endMinute = _instance.endMinute || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallingWindowSlot,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.dayOfWeek = _reader.readEnum();
          break;
        case 2:
          _instance.startMinute = _reader.readInt32();
          break;
        case 3:
          _instance.endMinute = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CallingWindowSlot.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallingWindowSlot,
    _writer: BinaryWriter
  ) {
    if (_instance.dayOfWeek) {
      _writer.writeEnum(1, _instance.dayOfWeek);
    }
    if (_instance.startMinute) {
      _writer.writeInt32(2, _instance.startMinute);
    }
    if (_instance.endMinute) {
      _writer.writeInt32(3, _instance.endMinute);
    }
  }

  private _dayOfWeek: CallingWindowDayOfWeek;
  private _startMinute: number;
  private _endMinute: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallingWindowSlot to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallingWindowSlot.AsObject>) {
    _value = _value || {};
    this.dayOfWeek = _value.dayOfWeek;
    this.startMinute = _value.startMinute;
    this.endMinute = _value.endMinute;
    CallingWindowSlot.refineValues(this);
  }
  get dayOfWeek(): CallingWindowDayOfWeek {
    return this._dayOfWeek;
  }
  set dayOfWeek(value: CallingWindowDayOfWeek) {
    this._dayOfWeek = value;
  }
  get startMinute(): number {
    return this._startMinute;
  }
  set startMinute(value: number) {
    this._startMinute = value;
  }
  get endMinute(): number {
    return this._endMinute;
  }
  set endMinute(value: number) {
    this._endMinute = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallingWindowSlot.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallingWindowSlot.AsObject {
    return {
      dayOfWeek: this.dayOfWeek,
      startMinute: this.startMinute,
      endMinute: this.endMinute
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
  ): CallingWindowSlot.AsProtobufJSON {
    return {
      dayOfWeek:
        CallingWindowDayOfWeek[
          this.dayOfWeek === null || this.dayOfWeek === undefined
            ? 0
            : this.dayOfWeek
        ],
      startMinute: this.startMinute,
      endMinute: this.endMinute
    };
  }
}
export module CallingWindowSlot {
  /**
   * Standard JavaScript object representation for CallingWindowSlot
   */
  export interface AsObject {
    dayOfWeek: CallingWindowDayOfWeek;
    startMinute: number;
    endMinute: number;
  }

  /**
   * Protobuf JSON representation for CallingWindowSlot
   */
  export interface AsProtobufJSON {
    dayOfWeek: string;
    startMinute: number;
    endMinute: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignStatistics
 */
export class CampaignStatistics implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignStatistics';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignStatistics();
    CampaignStatistics.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignStatistics) {
    _instance.campaignName = _instance.campaignName || '';
    _instance.total = _instance.total || 0;
    _instance.notStarted = _instance.notStarted || 0;
    _instance.inProgress = _instance.inProgress || 0;
    _instance.retryPending = _instance.retryPending || 0;
    _instance.completed = _instance.completed || 0;
    _instance.failed = _instance.failed || 0;
    _instance.cancelled = _instance.cancelled || 0;
    _instance.totalAttempts = _instance.totalAttempts || 0;
    _instance.progressPercent = _instance.progressPercent || 0;
    _instance.scheduledNotDue = _instance.scheduledNotDue || 0;
    _instance.callsRetried = _instance.callsRetried || 0;
    _instance.averageConnectedDuration =
      _instance.averageConnectedDuration || undefined;
    _instance.answeringMachineDetected =
      _instance.answeringMachineDetected || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignStatistics,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignName = _reader.readString();
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        case 3:
          _instance.notStarted = _reader.readInt32();
          break;
        case 4:
          _instance.inProgress = _reader.readInt32();
          break;
        case 5:
          _instance.retryPending = _reader.readInt32();
          break;
        case 6:
          _instance.completed = _reader.readInt32();
          break;
        case 7:
          _instance.failed = _reader.readInt32();
          break;
        case 8:
          _instance.cancelled = _reader.readInt32();
          break;
        case 9:
          _instance.totalAttempts = _reader.readInt32();
          break;
        case 10:
          _instance.progressPercent = _reader.readFloat();
          break;
        case 11:
          _instance.scheduledNotDue = _reader.readInt32();
          break;
        case 12:
          _instance.callsRetried = _reader.readInt32();
          break;
        case 13:
          _instance.averageConnectedDuration = new googleProtobuf006.Duration();
          _reader.readMessage(
            _instance.averageConnectedDuration,
            googleProtobuf006.Duration.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.answeringMachineDetected = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignStatistics.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignStatistics,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignName) {
      _writer.writeString(1, _instance.campaignName);
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
    if (_instance.notStarted) {
      _writer.writeInt32(3, _instance.notStarted);
    }
    if (_instance.inProgress) {
      _writer.writeInt32(4, _instance.inProgress);
    }
    if (_instance.retryPending) {
      _writer.writeInt32(5, _instance.retryPending);
    }
    if (_instance.completed) {
      _writer.writeInt32(6, _instance.completed);
    }
    if (_instance.failed) {
      _writer.writeInt32(7, _instance.failed);
    }
    if (_instance.cancelled) {
      _writer.writeInt32(8, _instance.cancelled);
    }
    if (_instance.totalAttempts) {
      _writer.writeInt32(9, _instance.totalAttempts);
    }
    if (_instance.progressPercent) {
      _writer.writeFloat(10, _instance.progressPercent);
    }
    if (_instance.scheduledNotDue) {
      _writer.writeInt32(11, _instance.scheduledNotDue);
    }
    if (_instance.callsRetried) {
      _writer.writeInt32(12, _instance.callsRetried);
    }
    if (_instance.averageConnectedDuration) {
      _writer.writeMessage(
        13,
        _instance.averageConnectedDuration as any,
        googleProtobuf006.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.answeringMachineDetected) {
      _writer.writeInt32(14, _instance.answeringMachineDetected);
    }
  }

  private _campaignName: string;
  private _total: number;
  private _notStarted: number;
  private _inProgress: number;
  private _retryPending: number;
  private _completed: number;
  private _failed: number;
  private _cancelled: number;
  private _totalAttempts: number;
  private _progressPercent: number;
  private _scheduledNotDue: number;
  private _callsRetried: number;
  private _averageConnectedDuration?: googleProtobuf006.Duration;
  private _answeringMachineDetected: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignStatistics to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignStatistics.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.total = _value.total;
    this.notStarted = _value.notStarted;
    this.inProgress = _value.inProgress;
    this.retryPending = _value.retryPending;
    this.completed = _value.completed;
    this.failed = _value.failed;
    this.cancelled = _value.cancelled;
    this.totalAttempts = _value.totalAttempts;
    this.progressPercent = _value.progressPercent;
    this.scheduledNotDue = _value.scheduledNotDue;
    this.callsRetried = _value.callsRetried;
    this.averageConnectedDuration = _value.averageConnectedDuration
      ? new googleProtobuf006.Duration(_value.averageConnectedDuration)
      : undefined;
    this.answeringMachineDetected = _value.answeringMachineDetected;
    CampaignStatistics.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get notStarted(): number {
    return this._notStarted;
  }
  set notStarted(value: number) {
    this._notStarted = value;
  }
  get inProgress(): number {
    return this._inProgress;
  }
  set inProgress(value: number) {
    this._inProgress = value;
  }
  get retryPending(): number {
    return this._retryPending;
  }
  set retryPending(value: number) {
    this._retryPending = value;
  }
  get completed(): number {
    return this._completed;
  }
  set completed(value: number) {
    this._completed = value;
  }
  get failed(): number {
    return this._failed;
  }
  set failed(value: number) {
    this._failed = value;
  }
  get cancelled(): number {
    return this._cancelled;
  }
  set cancelled(value: number) {
    this._cancelled = value;
  }
  get totalAttempts(): number {
    return this._totalAttempts;
  }
  set totalAttempts(value: number) {
    this._totalAttempts = value;
  }
  get progressPercent(): number {
    return this._progressPercent;
  }
  set progressPercent(value: number) {
    this._progressPercent = value;
  }
  get scheduledNotDue(): number {
    return this._scheduledNotDue;
  }
  set scheduledNotDue(value: number) {
    this._scheduledNotDue = value;
  }
  get callsRetried(): number {
    return this._callsRetried;
  }
  set callsRetried(value: number) {
    this._callsRetried = value;
  }
  get averageConnectedDuration(): googleProtobuf006.Duration | undefined {
    return this._averageConnectedDuration;
  }
  set averageConnectedDuration(value: googleProtobuf006.Duration | undefined) {
    this._averageConnectedDuration = value;
  }
  get answeringMachineDetected(): number {
    return this._answeringMachineDetected;
  }
  set answeringMachineDetected(value: number) {
    this._answeringMachineDetected = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignStatistics.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignStatistics.AsObject {
    return {
      campaignName: this.campaignName,
      total: this.total,
      notStarted: this.notStarted,
      inProgress: this.inProgress,
      retryPending: this.retryPending,
      completed: this.completed,
      failed: this.failed,
      cancelled: this.cancelled,
      totalAttempts: this.totalAttempts,
      progressPercent: this.progressPercent,
      scheduledNotDue: this.scheduledNotDue,
      callsRetried: this.callsRetried,
      averageConnectedDuration: this.averageConnectedDuration
        ? this.averageConnectedDuration.toObject()
        : undefined,
      answeringMachineDetected: this.answeringMachineDetected
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
  ): CampaignStatistics.AsProtobufJSON {
    return {
      campaignName: this.campaignName,
      total: this.total,
      notStarted: this.notStarted,
      inProgress: this.inProgress,
      retryPending: this.retryPending,
      completed: this.completed,
      failed: this.failed,
      cancelled: this.cancelled,
      totalAttempts: this.totalAttempts,
      progressPercent: this.progressPercent,
      scheduledNotDue: this.scheduledNotDue,
      callsRetried: this.callsRetried,
      averageConnectedDuration: this.averageConnectedDuration
        ? this.averageConnectedDuration.toProtobufJSON(options)
        : null,
      answeringMachineDetected: this.answeringMachineDetected
    };
  }
}
export module CampaignStatistics {
  /**
   * Standard JavaScript object representation for CampaignStatistics
   */
  export interface AsObject {
    campaignName: string;
    total: number;
    notStarted: number;
    inProgress: number;
    retryPending: number;
    completed: number;
    failed: number;
    cancelled: number;
    totalAttempts: number;
    progressPercent: number;
    scheduledNotDue: number;
    callsRetried: number;
    averageConnectedDuration?: googleProtobuf006.Duration.AsObject;
    answeringMachineDetected: number;
  }

  /**
   * Protobuf JSON representation for CampaignStatistics
   */
  export interface AsProtobufJSON {
    campaignName: string;
    total: number;
    notStarted: number;
    inProgress: number;
    retryPending: number;
    completed: number;
    failed: number;
    cancelled: number;
    totalAttempts: number;
    progressPercent: number;
    scheduledNotDue: number;
    callsRetried: number;
    averageConnectedDuration: googleProtobuf006.Duration.AsProtobufJSON | null;
    answeringMachineDetected: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignCallAttempt
 */
export class CampaignCallAttempt implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignCallAttempt';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignCallAttempt();
    CampaignCallAttempt.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignCallAttempt) {
    _instance.attemptNumber = _instance.attemptNumber || 0;
    _instance.callerName = _instance.callerName || '';
    _instance.callName = _instance.callName || '';
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.outcome = _instance.outcome || 0;
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.sipStatusDescription = _instance.sipStatusDescription || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignCallAttempt,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.attemptNumber = _reader.readInt32();
          break;
        case 2:
          _instance.callerName = _reader.readString();
          break;
        case 3:
          _instance.callName = _reader.readString();
          break;
        case 4:
          _instance.startTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.endTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.outcome = _reader.readEnum();
          break;
        case 7:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 8:
          _instance.sipStatusDescription = _reader.readString();
          break;
        case 9:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignCallAttempt.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignCallAttempt,
    _writer: BinaryWriter
  ) {
    if (_instance.attemptNumber) {
      _writer.writeInt32(1, _instance.attemptNumber);
    }
    if (_instance.callerName) {
      _writer.writeString(2, _instance.callerName);
    }
    if (_instance.callName) {
      _writer.writeString(3, _instance.callName);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        4,
        _instance.startTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        5,
        _instance.endTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.outcome) {
      _writer.writeEnum(6, _instance.outcome);
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(7, _instance.sipStatusType);
    }
    if (_instance.sipStatusDescription) {
      _writer.writeString(8, _instance.sipStatusDescription);
    }
    if (_instance.errorMessage) {
      _writer.writeString(9, _instance.errorMessage);
    }
  }

  private _attemptNumber: number;
  private _callerName: string;
  private _callName: string;
  private _startTime?: googleProtobuf001.Timestamp;
  private _endTime?: googleProtobuf001.Timestamp;
  private _outcome: CampaignCallAttemptOutcome;
  private _sipStatusType: ondewoSip008.SipStatus.StatusType;
  private _sipStatusDescription: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignCallAttempt to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignCallAttempt.AsObject>) {
    _value = _value || {};
    this.attemptNumber = _value.attemptNumber;
    this.callerName = _value.callerName;
    this.callName = _value.callName;
    this.startTime = _value.startTime
      ? new googleProtobuf001.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf001.Timestamp(_value.endTime)
      : undefined;
    this.outcome = _value.outcome;
    this.sipStatusType = _value.sipStatusType;
    this.sipStatusDescription = _value.sipStatusDescription;
    this.errorMessage = _value.errorMessage;
    CampaignCallAttempt.refineValues(this);
  }
  get attemptNumber(): number {
    return this._attemptNumber;
  }
  set attemptNumber(value: number) {
    this._attemptNumber = value;
  }
  get callerName(): string {
    return this._callerName;
  }
  set callerName(value: string) {
    this._callerName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get startTime(): googleProtobuf001.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf001.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf001.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf001.Timestamp | undefined) {
    this._endTime = value;
  }
  get outcome(): CampaignCallAttemptOutcome {
    return this._outcome;
  }
  set outcome(value: CampaignCallAttemptOutcome) {
    this._outcome = value;
  }
  get sipStatusType(): ondewoSip008.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip008.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get sipStatusDescription(): string {
    return this._sipStatusDescription;
  }
  set sipStatusDescription(value: string) {
    this._sipStatusDescription = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignCallAttempt.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignCallAttempt.AsObject {
    return {
      attemptNumber: this.attemptNumber,
      callerName: this.callerName,
      callName: this.callName,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      outcome: this.outcome,
      sipStatusType: this.sipStatusType,
      sipStatusDescription: this.sipStatusDescription,
      errorMessage: this.errorMessage
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
  ): CampaignCallAttempt.AsProtobufJSON {
    return {
      attemptNumber: this.attemptNumber,
      callerName: this.callerName,
      callName: this.callName,
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      outcome:
        CampaignCallAttemptOutcome[
          this.outcome === null || this.outcome === undefined ? 0 : this.outcome
        ],
      sipStatusType:
        ondewoSip008.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      sipStatusDescription: this.sipStatusDescription,
      errorMessage: this.errorMessage
    };
  }
}
export module CampaignCallAttempt {
  /**
   * Standard JavaScript object representation for CampaignCallAttempt
   */
  export interface AsObject {
    attemptNumber: number;
    callerName: string;
    callName: string;
    startTime?: googleProtobuf001.Timestamp.AsObject;
    endTime?: googleProtobuf001.Timestamp.AsObject;
    outcome: CampaignCallAttemptOutcome;
    sipStatusType: ondewoSip008.SipStatus.StatusType;
    sipStatusDescription: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CampaignCallAttempt
   */
  export interface AsProtobufJSON {
    attemptNumber: number;
    callerName: string;
    callName: string;
    startTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    outcome: string;
    sipStatusType: string;
    sipStatusDescription: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignCall
 */
export class CampaignCall implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignCall';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignCall();
    CampaignCall.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignCall) {
    _instance.name = _instance.name || '';
    _instance.campaignName = _instance.campaignName || '';
    _instance.position = _instance.position || 0;
    _instance.state = _instance.state || 0;
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.source = _instance.source || 0;
    _instance.scheduledCallerName = _instance.scheduledCallerName || '';
    _instance.scheduledTime = _instance.scheduledTime || undefined;
    _instance.attempts = _instance.attempts || 0;
    _instance.maxAttempts = _instance.maxAttempts || 0;
    _instance.callerName = _instance.callerName || '';
    _instance.callName = _instance.callName || '';
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.sipStatusDescription = _instance.sipStatusDescription || '';
    _instance.lastError = _instance.lastError || '';
    _instance.nextAttemptTime = _instance.nextAttemptTime || undefined;
    _instance.firstAttemptTime = _instance.firstAttemptTime || undefined;
    _instance.lastAttemptTime = _instance.lastAttemptTime || undefined;
    _instance.finishTime = _instance.finishTime || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.attemptHistory = _instance.attemptHistory || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignCall,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.campaignName = _reader.readString();
          break;
        case 3:
          _instance.position = _reader.readInt32();
          break;
        case 4:
          _instance.state = _reader.readEnum();
          break;
        case 5:
          _instance.phoneNumber = _reader.readString();
          break;
        case 6:
          _instance.source = _reader.readEnum();
          break;
        case 7:
          _instance.scheduledCallerName = _reader.readString();
          break;
        case 8:
          _instance.scheduledTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.attempts = _reader.readInt32();
          break;
        case 10:
          _instance.maxAttempts = _reader.readInt32();
          break;
        case 11:
          _instance.callerName = _reader.readString();
          break;
        case 12:
          _instance.callName = _reader.readString();
          break;
        case 13:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 14:
          _instance.sipStatusDescription = _reader.readString();
          break;
        case 15:
          _instance.lastError = _reader.readString();
          break;
        case 16:
          _instance.nextAttemptTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.nextAttemptTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.firstAttemptTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.firstAttemptTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.lastAttemptTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.lastAttemptTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.finishTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.finishTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 22:
          const messageInitializer22 = new CampaignCallAttempt();
          _reader.readMessage(
            messageInitializer22,
            CampaignCallAttempt.deserializeBinaryFromReader
          );
          (_instance.attemptHistory = _instance.attemptHistory || []).push(
            messageInitializer22
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignCall.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignCall,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.campaignName) {
      _writer.writeString(2, _instance.campaignName);
    }
    if (_instance.position) {
      _writer.writeInt32(3, _instance.position);
    }
    if (_instance.state) {
      _writer.writeEnum(4, _instance.state);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(5, _instance.phoneNumber);
    }
    if (_instance.source) {
      _writer.writeEnum(6, _instance.source);
    }
    if (_instance.scheduledCallerName) {
      _writer.writeString(7, _instance.scheduledCallerName);
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        8,
        _instance.scheduledTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.attempts) {
      _writer.writeInt32(9, _instance.attempts);
    }
    if (_instance.maxAttempts) {
      _writer.writeInt32(10, _instance.maxAttempts);
    }
    if (_instance.callerName) {
      _writer.writeString(11, _instance.callerName);
    }
    if (_instance.callName) {
      _writer.writeString(12, _instance.callName);
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(13, _instance.sipStatusType);
    }
    if (_instance.sipStatusDescription) {
      _writer.writeString(14, _instance.sipStatusDescription);
    }
    if (_instance.lastError) {
      _writer.writeString(15, _instance.lastError);
    }
    if (_instance.nextAttemptTime) {
      _writer.writeMessage(
        16,
        _instance.nextAttemptTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.firstAttemptTime) {
      _writer.writeMessage(
        17,
        _instance.firstAttemptTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.lastAttemptTime) {
      _writer.writeMessage(
        18,
        _instance.lastAttemptTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishTime) {
      _writer.writeMessage(
        19,
        _instance.finishTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        20,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        21,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.attemptHistory && _instance.attemptHistory.length) {
      _writer.writeRepeatedMessage(
        22,
        _instance.attemptHistory as any,
        CampaignCallAttempt.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _campaignName: string;
  private _position: number;
  private _state: CampaignCallState;
  private _phoneNumber: string;
  private _source: CampaignCallSource;
  private _scheduledCallerName: string;
  private _scheduledTime?: googleProtobuf001.Timestamp;
  private _attempts: number;
  private _maxAttempts: number;
  private _callerName: string;
  private _callName: string;
  private _sipStatusType: ondewoSip008.SipStatus.StatusType;
  private _sipStatusDescription: string;
  private _lastError: string;
  private _nextAttemptTime?: googleProtobuf001.Timestamp;
  private _firstAttemptTime?: googleProtobuf001.Timestamp;
  private _lastAttemptTime?: googleProtobuf001.Timestamp;
  private _finishTime?: googleProtobuf001.Timestamp;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _attemptHistory?: CampaignCallAttempt[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignCall to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignCall.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.campaignName = _value.campaignName;
    this.position = _value.position;
    this.state = _value.state;
    this.phoneNumber = _value.phoneNumber;
    this.source = _value.source;
    this.scheduledCallerName = _value.scheduledCallerName;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf001.Timestamp(_value.scheduledTime)
      : undefined;
    this.attempts = _value.attempts;
    this.maxAttempts = _value.maxAttempts;
    this.callerName = _value.callerName;
    this.callName = _value.callName;
    this.sipStatusType = _value.sipStatusType;
    this.sipStatusDescription = _value.sipStatusDescription;
    this.lastError = _value.lastError;
    this.nextAttemptTime = _value.nextAttemptTime
      ? new googleProtobuf001.Timestamp(_value.nextAttemptTime)
      : undefined;
    this.firstAttemptTime = _value.firstAttemptTime
      ? new googleProtobuf001.Timestamp(_value.firstAttemptTime)
      : undefined;
    this.lastAttemptTime = _value.lastAttemptTime
      ? new googleProtobuf001.Timestamp(_value.lastAttemptTime)
      : undefined;
    this.finishTime = _value.finishTime
      ? new googleProtobuf001.Timestamp(_value.finishTime)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.attemptHistory = (_value.attemptHistory || []).map(
      m => new CampaignCallAttempt(m)
    );
    CampaignCall.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get position(): number {
    return this._position;
  }
  set position(value: number) {
    this._position = value;
  }
  get state(): CampaignCallState {
    return this._state;
  }
  set state(value: CampaignCallState) {
    this._state = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  get source(): CampaignCallSource {
    return this._source;
  }
  set source(value: CampaignCallSource) {
    this._source = value;
  }
  get scheduledCallerName(): string {
    return this._scheduledCallerName;
  }
  set scheduledCallerName(value: string) {
    this._scheduledCallerName = value;
  }
  get scheduledTime(): googleProtobuf001.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf001.Timestamp | undefined) {
    this._scheduledTime = value;
  }
  get attempts(): number {
    return this._attempts;
  }
  set attempts(value: number) {
    this._attempts = value;
  }
  get maxAttempts(): number {
    return this._maxAttempts;
  }
  set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  get callerName(): string {
    return this._callerName;
  }
  set callerName(value: string) {
    this._callerName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get sipStatusType(): ondewoSip008.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip008.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get sipStatusDescription(): string {
    return this._sipStatusDescription;
  }
  set sipStatusDescription(value: string) {
    this._sipStatusDescription = value;
  }
  get lastError(): string {
    return this._lastError;
  }
  set lastError(value: string) {
    this._lastError = value;
  }
  get nextAttemptTime(): googleProtobuf001.Timestamp | undefined {
    return this._nextAttemptTime;
  }
  set nextAttemptTime(value: googleProtobuf001.Timestamp | undefined) {
    this._nextAttemptTime = value;
  }
  get firstAttemptTime(): googleProtobuf001.Timestamp | undefined {
    return this._firstAttemptTime;
  }
  set firstAttemptTime(value: googleProtobuf001.Timestamp | undefined) {
    this._firstAttemptTime = value;
  }
  get lastAttemptTime(): googleProtobuf001.Timestamp | undefined {
    return this._lastAttemptTime;
  }
  set lastAttemptTime(value: googleProtobuf001.Timestamp | undefined) {
    this._lastAttemptTime = value;
  }
  get finishTime(): googleProtobuf001.Timestamp | undefined {
    return this._finishTime;
  }
  set finishTime(value: googleProtobuf001.Timestamp | undefined) {
    this._finishTime = value;
  }
  get createdAt(): googleProtobuf001.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf001.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get attemptHistory(): CampaignCallAttempt[] | undefined {
    return this._attemptHistory;
  }
  set attemptHistory(value: CampaignCallAttempt[] | undefined) {
    this._attemptHistory = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignCall.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignCall.AsObject {
    return {
      name: this.name,
      campaignName: this.campaignName,
      position: this.position,
      state: this.state,
      phoneNumber: this.phoneNumber,
      source: this.source,
      scheduledCallerName: this.scheduledCallerName,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toObject()
        : undefined,
      attempts: this.attempts,
      maxAttempts: this.maxAttempts,
      callerName: this.callerName,
      callName: this.callName,
      sipStatusType: this.sipStatusType,
      sipStatusDescription: this.sipStatusDescription,
      lastError: this.lastError,
      nextAttemptTime: this.nextAttemptTime
        ? this.nextAttemptTime.toObject()
        : undefined,
      firstAttemptTime: this.firstAttemptTime
        ? this.firstAttemptTime.toObject()
        : undefined,
      lastAttemptTime: this.lastAttemptTime
        ? this.lastAttemptTime.toObject()
        : undefined,
      finishTime: this.finishTime ? this.finishTime.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      attemptHistory: (this.attemptHistory || []).map(m => m.toObject())
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
  ): CampaignCall.AsProtobufJSON {
    return {
      name: this.name,
      campaignName: this.campaignName,
      position: this.position,
      state:
        CampaignCallState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      phoneNumber: this.phoneNumber,
      source:
        CampaignCallSource[
          this.source === null || this.source === undefined ? 0 : this.source
        ],
      scheduledCallerName: this.scheduledCallerName,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null,
      attempts: this.attempts,
      maxAttempts: this.maxAttempts,
      callerName: this.callerName,
      callName: this.callName,
      sipStatusType:
        ondewoSip008.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      sipStatusDescription: this.sipStatusDescription,
      lastError: this.lastError,
      nextAttemptTime: this.nextAttemptTime
        ? this.nextAttemptTime.toProtobufJSON(options)
        : null,
      firstAttemptTime: this.firstAttemptTime
        ? this.firstAttemptTime.toProtobufJSON(options)
        : null,
      lastAttemptTime: this.lastAttemptTime
        ? this.lastAttemptTime.toProtobufJSON(options)
        : null,
      finishTime: this.finishTime
        ? this.finishTime.toProtobufJSON(options)
        : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      attemptHistory: (this.attemptHistory || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CampaignCall {
  /**
   * Standard JavaScript object representation for CampaignCall
   */
  export interface AsObject {
    name: string;
    campaignName: string;
    position: number;
    state: CampaignCallState;
    phoneNumber: string;
    source: CampaignCallSource;
    scheduledCallerName: string;
    scheduledTime?: googleProtobuf001.Timestamp.AsObject;
    attempts: number;
    maxAttempts: number;
    callerName: string;
    callName: string;
    sipStatusType: ondewoSip008.SipStatus.StatusType;
    sipStatusDescription: string;
    lastError: string;
    nextAttemptTime?: googleProtobuf001.Timestamp.AsObject;
    firstAttemptTime?: googleProtobuf001.Timestamp.AsObject;
    lastAttemptTime?: googleProtobuf001.Timestamp.AsObject;
    finishTime?: googleProtobuf001.Timestamp.AsObject;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    attemptHistory?: CampaignCallAttempt.AsObject[];
  }

  /**
   * Protobuf JSON representation for CampaignCall
   */
  export interface AsProtobufJSON {
    name: string;
    campaignName: string;
    position: number;
    state: string;
    phoneNumber: string;
    source: string;
    scheduledCallerName: string;
    scheduledTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    attempts: number;
    maxAttempts: number;
    callerName: string;
    callName: string;
    sipStatusType: string;
    sipStatusDescription: string;
    lastError: string;
    nextAttemptTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    firstAttemptTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    lastAttemptTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    finishTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    attemptHistory: CampaignCallAttempt.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignAssignment
 */
export class CampaignAssignment implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignAssignment';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignAssignment();
    CampaignAssignment.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignAssignment) {
    _instance.startMode = _instance.startMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignAssignment,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignName = _reader.readString();
          break;
        case 2:
          _instance.newCampaign = new Campaign();
          _reader.readMessage(
            _instance.newCampaign,
            Campaign.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.startMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignAssignment.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignAssignment,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignName || _instance.campaignName === '') {
      _writer.writeString(1, _instance.campaignName);
    }
    if (_instance.newCampaign) {
      _writer.writeMessage(
        2,
        _instance.newCampaign as any,
        Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(5, _instance.displayName);
    }
    if (_instance.startMode) {
      _writer.writeEnum(3, _instance.startMode);
    }
  }

  private _campaignName: string;
  private _newCampaign?: Campaign;
  private _displayName: string;
  private _startMode: CampaignStartMode;

  private _campaignSelector: CampaignAssignment.CampaignSelectorCase =
    CampaignAssignment.CampaignSelectorCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignAssignment to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignAssignment.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.newCampaign = _value.newCampaign
      ? new Campaign(_value.newCampaign)
      : undefined;
    this.displayName = _value.displayName;
    this.startMode = _value.startMode;
    CampaignAssignment.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._newCampaign = this._displayName = undefined;
      this._campaignSelector =
        CampaignAssignment.CampaignSelectorCase.campaignName;
    }
    this._campaignName = value;
  }
  get newCampaign(): Campaign | undefined {
    return this._newCampaign;
  }
  set newCampaign(value: Campaign | undefined) {
    if (value !== undefined && value !== null) {
      this._campaignName = this._displayName = undefined;
      this._campaignSelector =
        CampaignAssignment.CampaignSelectorCase.newCampaign;
    }
    this._newCampaign = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignName = this._newCampaign = undefined;
      this._campaignSelector =
        CampaignAssignment.CampaignSelectorCase.displayName;
    }
    this._displayName = value;
  }
  get startMode(): CampaignStartMode {
    return this._startMode;
  }
  set startMode(value: CampaignStartMode) {
    this._startMode = value;
  }
  get campaignSelector() {
    return this._campaignSelector;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignAssignment.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignAssignment.AsObject {
    return {
      campaignName: this.campaignName,
      newCampaign: this.newCampaign ? this.newCampaign.toObject() : undefined,
      displayName: this.displayName,
      startMode: this.startMode
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
  ): CampaignAssignment.AsProtobufJSON {
    return {
      campaignName:
        this.campaignName === null || this.campaignName === undefined
          ? null
          : this.campaignName,
      newCampaign: this.newCampaign
        ? this.newCampaign.toProtobufJSON(options)
        : null,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      startMode:
        CampaignStartMode[
          this.startMode === null || this.startMode === undefined
            ? 0
            : this.startMode
        ]
    };
  }
}
export module CampaignAssignment {
  /**
   * Standard JavaScript object representation for CampaignAssignment
   */
  export interface AsObject {
    campaignName: string;
    newCampaign?: Campaign.AsObject;
    displayName: string;
    startMode: CampaignStartMode;
  }

  /**
   * Protobuf JSON representation for CampaignAssignment
   */
  export interface AsProtobufJSON {
    campaignName: string | null;
    newCampaign: Campaign.AsProtobufJSON | null;
    displayName: string | null;
    startMode: string;
  }
  export enum CampaignSelectorCase {
    none = 0,
    campaignName = 1,
    newCampaign = 2,
    displayName = 3
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateCampaignRequest
 */
export class CreateCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCampaignRequest();
    CreateCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.campaign = _instance.campaign || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.idempotencyKey = _instance.idempotencyKey || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.campaign = new Campaign();
          _reader.readMessage(
            _instance.campaign,
            Campaign.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.campaign) {
      _writer.writeMessage(
        2,
        _instance.campaign as any,
        Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
  }

  private _vtsiProjectName: string;
  private _campaign?: Campaign;
  private _fieldMask?: googleProtobuf007.FieldMask;
  private _idempotencyKey: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaign = _value.campaign ? new Campaign(_value.campaign) : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    this.idempotencyKey = _value.idempotencyKey;
    CreateCampaignRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaign(): Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: Campaign | undefined) {
    this._campaign = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
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
    CreateCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCampaignRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaign: this.campaign ? this.campaign.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): CreateCampaignRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      idempotencyKey: this.idempotencyKey
    };
  }
}
export module CreateCampaignRequest {
  /**
   * Standard JavaScript object representation for CreateCampaignRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    campaign?: Campaign.AsObject;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
    idempotencyKey: string;
  }

  /**
   * Protobuf JSON representation for CreateCampaignRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    campaign: Campaign.AsProtobufJSON | null;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    idempotencyKey: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCampaignRequest
 */
export class GetCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCampaignRequest();
    GetCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;

  private _campaign: GetCampaignRequest.CampaignCase =
    GetCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    GetCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = GetCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = GetCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCampaignRequest.AsObject {
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
  ): GetCampaignRequest.AsProtobufJSON {
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
export module GetCampaignRequest {
  /**
   * Standard JavaScript object representation for GetCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCampaignRequest
 */
export class UpdateCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCampaignRequest();
    UpdateCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCampaignRequest) {
    _instance.campaign = _instance.campaign || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaign = new Campaign();
          _reader.readMessage(
            _instance.campaign,
            Campaign.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.campaign) {
      _writer.writeMessage(
        1,
        _instance.campaign as any,
        Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _campaign?: Campaign;
  private _updateMask?: googleProtobuf007.FieldMask;
  private _fieldMask?: googleProtobuf007.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.campaign = _value.campaign ? new Campaign(_value.campaign) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf007.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    UpdateCampaignRequest.refineValues(this);
  }
  get campaign(): Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: Campaign | undefined) {
    this._campaign = value;
  }
  get updateMask(): googleProtobuf007.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf007.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCampaignRequest.AsObject {
    return {
      campaign: this.campaign ? this.campaign.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
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
  ): UpdateCampaignRequest.AsProtobufJSON {
    return {
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateCampaignRequest {
  /**
   * Standard JavaScript object representation for UpdateCampaignRequest
   */
  export interface AsObject {
    campaign?: Campaign.AsObject;
    updateMask?: googleProtobuf007.FieldMask.AsObject;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCampaignRequest
   */
  export interface AsProtobufJSON {
    campaign: Campaign.AsProtobufJSON | null;
    updateMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCampaignRequest
 */
export class DeleteCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCampaignRequest();
    DeleteCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.force = _instance.force || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.force = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.force) {
      _writer.writeBool(6, _instance.force);
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;
  private _force: boolean;

  private _campaign: DeleteCampaignRequest.CampaignCase =
    DeleteCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    this.force = _value.force;
    DeleteCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = DeleteCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = DeleteCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get force(): boolean {
    return this._force;
  }
  set force(value: boolean) {
    this._force = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCampaignRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): DeleteCampaignRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      force: this.force
    };
  }
}
export module DeleteCampaignRequest {
  /**
   * Standard JavaScript object representation for DeleteCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
    force: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    force: boolean;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCampaignResponse
 */
export class DeleteCampaignResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCampaignResponse();
    DeleteCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCampaignResponse) {
    _instance.name = _instance.name || '';
    _instance.deletedCampaignCallCount =
      _instance.deletedCampaignCallCount || 0;
    _instance.cancelledScheduledCallerCount =
      _instance.cancelledScheduledCallerCount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.deletedCampaignCallCount = _reader.readInt32();
          break;
        case 3:
          _instance.cancelledScheduledCallerCount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCampaignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.deletedCampaignCallCount) {
      _writer.writeInt32(2, _instance.deletedCampaignCallCount);
    }
    if (_instance.cancelledScheduledCallerCount) {
      _writer.writeInt32(3, _instance.cancelledScheduledCallerCount);
    }
  }

  private _name: string;
  private _deletedCampaignCallCount: number;
  private _cancelledScheduledCallerCount: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCampaignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCampaignResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.deletedCampaignCallCount = _value.deletedCampaignCallCount;
    this.cancelledScheduledCallerCount = _value.cancelledScheduledCallerCount;
    DeleteCampaignResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get deletedCampaignCallCount(): number {
    return this._deletedCampaignCallCount;
  }
  set deletedCampaignCallCount(value: number) {
    this._deletedCampaignCallCount = value;
  }
  get cancelledScheduledCallerCount(): number {
    return this._cancelledScheduledCallerCount;
  }
  set cancelledScheduledCallerCount(value: number) {
    this._cancelledScheduledCallerCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCampaignResponse.AsObject {
    return {
      name: this.name,
      deletedCampaignCallCount: this.deletedCampaignCallCount,
      cancelledScheduledCallerCount: this.cancelledScheduledCallerCount
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
  ): DeleteCampaignResponse.AsProtobufJSON {
    return {
      name: this.name,
      deletedCampaignCallCount: this.deletedCampaignCallCount,
      cancelledScheduledCallerCount: this.cancelledScheduledCallerCount
    };
  }
}
export module DeleteCampaignResponse {
  /**
   * Standard JavaScript object representation for DeleteCampaignResponse
   */
  export interface AsObject {
    name: string;
    deletedCampaignCallCount: number;
    cancelledScheduledCallerCount: number;
  }

  /**
   * Protobuf JSON representation for DeleteCampaignResponse
   */
  export interface AsProtobufJSON {
    name: string;
    deletedCampaignCallCount: number;
    cancelledScheduledCallerCount: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignFilter
 */
export class CampaignFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignFilter();
    CampaignFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignFilter) {
    _instance.states = _instance.states || [];
    _instance.displayNameContains = _instance.displayNameContains || '';
    _instance.displayName = _instance.displayName || '';
    _instance.createdAfter = _instance.createdAfter || undefined;
    _instance.createdBefore = _instance.createdBefore || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedSince = _instance.modifiedSince || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _reader.readPackableEnumInto(
            (_instance.states = _instance.states || [])
          );
          break;
        case 2:
          _instance.displayNameContains = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.createdAfter = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAfter,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.createdBefore = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdBefore,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createdBy = _reader.readString();
          break;
        case 7:
          _instance.modifiedSince = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedSince,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.states && _instance.states.length) {
      _writer.writePackedEnum(1, _instance.states);
    }
    if (_instance.displayNameContains) {
      _writer.writeString(2, _instance.displayNameContains);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.createdAfter) {
      _writer.writeMessage(
        4,
        _instance.createdAfter as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBefore) {
      _writer.writeMessage(
        5,
        _instance.createdBefore as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(6, _instance.createdBy);
    }
    if (_instance.modifiedSince) {
      _writer.writeMessage(
        7,
        _instance.modifiedSince as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _states: CampaignState[];
  private _displayNameContains: string;
  private _displayName: string;
  private _createdAfter?: googleProtobuf001.Timestamp;
  private _createdBefore?: googleProtobuf001.Timestamp;
  private _createdBy: string;
  private _modifiedSince?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignFilter.AsObject>) {
    _value = _value || {};
    this.states = (_value.states || []).slice();
    this.displayNameContains = _value.displayNameContains;
    this.displayName = _value.displayName;
    this.createdAfter = _value.createdAfter
      ? new googleProtobuf001.Timestamp(_value.createdAfter)
      : undefined;
    this.createdBefore = _value.createdBefore
      ? new googleProtobuf001.Timestamp(_value.createdBefore)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedSince = _value.modifiedSince
      ? new googleProtobuf001.Timestamp(_value.modifiedSince)
      : undefined;
    CampaignFilter.refineValues(this);
  }
  get states(): CampaignState[] {
    return this._states;
  }
  set states(value: CampaignState[]) {
    this._states = value;
  }
  get displayNameContains(): string {
    return this._displayNameContains;
  }
  set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get createdAfter(): googleProtobuf001.Timestamp | undefined {
    return this._createdAfter;
  }
  set createdAfter(value: googleProtobuf001.Timestamp | undefined) {
    this._createdAfter = value;
  }
  get createdBefore(): googleProtobuf001.Timestamp | undefined {
    return this._createdBefore;
  }
  set createdBefore(value: googleProtobuf001.Timestamp | undefined) {
    this._createdBefore = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedSince(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedSince;
  }
  set modifiedSince(value: googleProtobuf001.Timestamp | undefined) {
    this._modifiedSince = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignFilter.AsObject {
    return {
      states: (this.states || []).slice(),
      displayNameContains: this.displayNameContains,
      displayName: this.displayName,
      createdAfter: this.createdAfter
        ? this.createdAfter.toObject()
        : undefined,
      createdBefore: this.createdBefore
        ? this.createdBefore.toObject()
        : undefined,
      createdBy: this.createdBy,
      modifiedSince: this.modifiedSince
        ? this.modifiedSince.toObject()
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
  ): CampaignFilter.AsProtobufJSON {
    return {
      states: (this.states || []).map(v => CampaignState[v]),
      displayNameContains: this.displayNameContains,
      displayName: this.displayName,
      createdAfter: this.createdAfter
        ? this.createdAfter.toProtobufJSON(options)
        : null,
      createdBefore: this.createdBefore
        ? this.createdBefore.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedSince: this.modifiedSince
        ? this.modifiedSince.toProtobufJSON(options)
        : null
    };
  }
}
export module CampaignFilter {
  /**
   * Standard JavaScript object representation for CampaignFilter
   */
  export interface AsObject {
    states: CampaignState[];
    displayNameContains: string;
    displayName: string;
    createdAfter?: googleProtobuf001.Timestamp.AsObject;
    createdBefore?: googleProtobuf001.Timestamp.AsObject;
    createdBy: string;
    modifiedSince?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for CampaignFilter
   */
  export interface AsProtobufJSON {
    states: string[];
    displayNameContains: string;
    displayName: string;
    createdAfter: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    createdBefore: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedSince: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCampaignsRequest
 */
export class ListCampaignsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCampaignsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignsRequest();
    ListCampaignsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignsRequest) {
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
    _instance: ListCampaignsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CampaignFilter();
          _reader.readMessage(
            _instance.filter,
            CampaignFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.pageSize = _reader.readInt32();
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.orderBy = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCampaignsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CampaignFilter.serializeBinaryToWriter
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
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.orderBy) {
      _writer.writeEnum(6, _instance.orderBy);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CampaignFilter;
  private _pageSize: number;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf007.FieldMask;
  private _orderBy: CampaignOrderBy;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CampaignFilter(_value.filter) : undefined;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    this.orderBy = _value.orderBy;
    ListCampaignsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CampaignFilter | undefined {
    return this._filter;
  }
  set filter(value: CampaignFilter | undefined) {
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
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get orderBy(): CampaignOrderBy {
    return this._orderBy;
  }
  set orderBy(value: CampaignOrderBy) {
    this._orderBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCampaignsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignsRequest.AsObject {
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
  ): ListCampaignsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      orderBy:
        CampaignOrderBy[
          this.orderBy === null || this.orderBy === undefined ? 0 : this.orderBy
        ]
    };
  }
}
export module ListCampaignsRequest {
  /**
   * Standard JavaScript object representation for ListCampaignsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CampaignFilter.AsObject;
    pageSize: number;
    pageToken: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
    orderBy: CampaignOrderBy;
  }

  /**
   * Protobuf JSON representation for ListCampaignsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CampaignFilter.AsProtobufJSON | null;
    pageSize: number;
    pageToken: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    orderBy: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCampaignsResponse
 */
export class ListCampaignsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCampaignsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignsResponse();
    ListCampaignsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignsResponse) {
    _instance.campaigns = _instance.campaigns || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCampaignsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Campaign();
          _reader.readMessage(
            messageInitializer1,
            Campaign.deserializeBinaryFromReader
          );
          (_instance.campaigns = _instance.campaigns || []).push(
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

    ListCampaignsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaigns && _instance.campaigns.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.campaigns as any,
        Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _campaigns?: Campaign[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsResponse.AsObject>) {
    _value = _value || {};
    this.campaigns = (_value.campaigns || []).map(m => new Campaign(m));
    this.nextPageToken = _value.nextPageToken;
    ListCampaignsResponse.refineValues(this);
  }
  get campaigns(): Campaign[] | undefined {
    return this._campaigns;
  }
  set campaigns(value: Campaign[] | undefined) {
    this._campaigns = value;
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
    ListCampaignsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignsResponse.AsObject {
    return {
      campaigns: (this.campaigns || []).map(m => m.toObject()),
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
  ): ListCampaignsResponse.AsProtobufJSON {
    return {
      campaigns: (this.campaigns || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListCampaignsResponse {
  /**
   * Standard JavaScript object representation for ListCampaignsResponse
   */
  export interface AsObject {
    campaigns?: Campaign.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListCampaignsResponse
   */
  export interface AsProtobufJSON {
    campaigns: Campaign.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCampaignStatisticsRequest
 */
export class GetCampaignStatisticsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCampaignStatisticsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCampaignStatisticsRequest();
    GetCampaignStatisticsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCampaignStatisticsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCampaignStatisticsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetCampaignStatisticsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCampaignStatisticsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;

  private _campaign: GetCampaignStatisticsRequest.CampaignCase =
    GetCampaignStatisticsRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCampaignStatisticsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetCampaignStatisticsRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    GetCampaignStatisticsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = GetCampaignStatisticsRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = GetCampaignStatisticsRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCampaignStatisticsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCampaignStatisticsRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName
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
  ): GetCampaignStatisticsRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module GetCampaignStatisticsRequest {
  /**
   * Standard JavaScript object representation for GetCampaignStatisticsRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for GetCampaignStatisticsRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCampaignCallsRequest
 */
export class ListCampaignCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCampaignCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignCallsRequest();
    ListCampaignCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.states = _instance.states || [];
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.includeAttempts = _instance.includeAttempts || false;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.phoneNumbers = _instance.phoneNumbers || [];
    _instance.sources = _instance.sources || [];
    _instance.finishTimeMin = _instance.finishTimeMin || undefined;
    _instance.finishTimeMax = _instance.finishTimeMax || undefined;
    _instance.modifiedSince = _instance.modifiedSince || undefined;
    _instance.minAttempts = _instance.minAttempts || 0;
    _instance.campaignCallNames = _instance.campaignCallNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCampaignCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignName = _reader.readString();
          break;
        case 8:
          _instance.displayName = _reader.readString();
          break;
        case 9:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _reader.readPackableEnumInto(
            (_instance.states = _instance.states || [])
          );
          break;
        case 3:
          _instance.phoneNumber = _reader.readString();
          break;
        case 4:
          _instance.pageSize = _reader.readInt32();
          break;
        case 5:
          _instance.pageToken = _reader.readString();
          break;
        case 6:
          _instance.includeAttempts = _reader.readBool();
          break;
        case 10:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 11:
          (_instance.phoneNumbers = _instance.phoneNumbers || []).push(
            _reader.readString()
          );
          break;
        case 12:
          _reader.readPackableEnumInto(
            (_instance.sources = _instance.sources || [])
          );
          break;
        case 13:
          _instance.finishTimeMin = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.finishTimeMin,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.finishTimeMax = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.finishTimeMax,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.modifiedSince = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedSince,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.minAttempts = _reader.readInt32();
          break;
        case 17:
          (_instance.campaignCallNames =
            _instance.campaignCallNames || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    ListCampaignCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignName || _instance.campaignName === '') {
      _writer.writeString(1, _instance.campaignName);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(8, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(9, _instance.vtsiProjectName);
    }
    if (_instance.states && _instance.states.length) {
      _writer.writePackedEnum(2, _instance.states);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(3, _instance.phoneNumber);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(4, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(5, _instance.pageToken);
    }
    if (_instance.includeAttempts) {
      _writer.writeBool(6, _instance.includeAttempts);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        10,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.phoneNumbers && _instance.phoneNumbers.length) {
      _writer.writeRepeatedString(11, _instance.phoneNumbers);
    }
    if (_instance.sources && _instance.sources.length) {
      _writer.writePackedEnum(12, _instance.sources);
    }
    if (_instance.finishTimeMin) {
      _writer.writeMessage(
        13,
        _instance.finishTimeMin as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishTimeMax) {
      _writer.writeMessage(
        14,
        _instance.finishTimeMax as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedSince) {
      _writer.writeMessage(
        15,
        _instance.modifiedSince as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.minAttempts) {
      _writer.writeInt32(16, _instance.minAttempts);
    }
    if (_instance.campaignCallNames && _instance.campaignCallNames.length) {
      _writer.writeRepeatedString(17, _instance.campaignCallNames);
    }
  }

  private _campaignName: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _states: CampaignCallState[];
  private _phoneNumber: string;
  private _pageSize: number;
  private _pageToken: string;
  private _includeAttempts: boolean;
  private _fieldMask?: googleProtobuf007.FieldMask;
  private _phoneNumbers: string[];
  private _sources: CampaignCallSource[];
  private _finishTimeMin?: googleProtobuf001.Timestamp;
  private _finishTimeMax?: googleProtobuf001.Timestamp;
  private _modifiedSince?: googleProtobuf001.Timestamp;
  private _minAttempts: number;
  private _campaignCallNames: string[];

  private _campaign: ListCampaignCallsRequest.CampaignCase =
    ListCampaignCallsRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignCallsRequest.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.states = (_value.states || []).slice();
    this.phoneNumber = _value.phoneNumber;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.includeAttempts = _value.includeAttempts;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    this.phoneNumbers = (_value.phoneNumbers || []).slice();
    this.sources = (_value.sources || []).slice();
    this.finishTimeMin = _value.finishTimeMin
      ? new googleProtobuf001.Timestamp(_value.finishTimeMin)
      : undefined;
    this.finishTimeMax = _value.finishTimeMax
      ? new googleProtobuf001.Timestamp(_value.finishTimeMax)
      : undefined;
    this.modifiedSince = _value.modifiedSince
      ? new googleProtobuf001.Timestamp(_value.modifiedSince)
      : undefined;
    this.minAttempts = _value.minAttempts;
    this.campaignCallNames = (_value.campaignCallNames || []).slice();
    ListCampaignCallsRequest.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = ListCampaignCallsRequest.CampaignCase.campaignName;
    }
    this._campaignName = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignName = undefined;
      this._campaign = ListCampaignCallsRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get states(): CampaignCallState[] {
    return this._states;
  }
  set states(value: CampaignCallState[]) {
    this._states = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
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
  get includeAttempts(): boolean {
    return this._includeAttempts;
  }
  set includeAttempts(value: boolean) {
    this._includeAttempts = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get phoneNumbers(): string[] {
    return this._phoneNumbers;
  }
  set phoneNumbers(value: string[]) {
    this._phoneNumbers = value;
  }
  get sources(): CampaignCallSource[] {
    return this._sources;
  }
  set sources(value: CampaignCallSource[]) {
    this._sources = value;
  }
  get finishTimeMin(): googleProtobuf001.Timestamp | undefined {
    return this._finishTimeMin;
  }
  set finishTimeMin(value: googleProtobuf001.Timestamp | undefined) {
    this._finishTimeMin = value;
  }
  get finishTimeMax(): googleProtobuf001.Timestamp | undefined {
    return this._finishTimeMax;
  }
  set finishTimeMax(value: googleProtobuf001.Timestamp | undefined) {
    this._finishTimeMax = value;
  }
  get modifiedSince(): googleProtobuf001.Timestamp | undefined {
    return this._modifiedSince;
  }
  set modifiedSince(value: googleProtobuf001.Timestamp | undefined) {
    this._modifiedSince = value;
  }
  get minAttempts(): number {
    return this._minAttempts;
  }
  set minAttempts(value: number) {
    this._minAttempts = value;
  }
  get campaignCallNames(): string[] {
    return this._campaignCallNames;
  }
  set campaignCallNames(value: string[]) {
    this._campaignCallNames = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCampaignCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignCallsRequest.AsObject {
    return {
      campaignName: this.campaignName,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      states: (this.states || []).slice(),
      phoneNumber: this.phoneNumber,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      includeAttempts: this.includeAttempts,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      phoneNumbers: (this.phoneNumbers || []).slice(),
      sources: (this.sources || []).slice(),
      finishTimeMin: this.finishTimeMin
        ? this.finishTimeMin.toObject()
        : undefined,
      finishTimeMax: this.finishTimeMax
        ? this.finishTimeMax.toObject()
        : undefined,
      modifiedSince: this.modifiedSince
        ? this.modifiedSince.toObject()
        : undefined,
      minAttempts: this.minAttempts,
      campaignCallNames: (this.campaignCallNames || []).slice()
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
  ): ListCampaignCallsRequest.AsProtobufJSON {
    return {
      campaignName:
        this.campaignName === null || this.campaignName === undefined
          ? null
          : this.campaignName,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      states: (this.states || []).map(v => CampaignCallState[v]),
      phoneNumber: this.phoneNumber,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      includeAttempts: this.includeAttempts,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      phoneNumbers: (this.phoneNumbers || []).slice(),
      sources: (this.sources || []).map(v => CampaignCallSource[v]),
      finishTimeMin: this.finishTimeMin
        ? this.finishTimeMin.toProtobufJSON(options)
        : null,
      finishTimeMax: this.finishTimeMax
        ? this.finishTimeMax.toProtobufJSON(options)
        : null,
      modifiedSince: this.modifiedSince
        ? this.modifiedSince.toProtobufJSON(options)
        : null,
      minAttempts: this.minAttempts,
      campaignCallNames: (this.campaignCallNames || []).slice()
    };
  }
}
export module ListCampaignCallsRequest {
  /**
   * Standard JavaScript object representation for ListCampaignCallsRequest
   */
  export interface AsObject {
    campaignName: string;
    displayName: string;
    vtsiProjectName: string;
    states: CampaignCallState[];
    phoneNumber: string;
    pageSize: number;
    pageToken: string;
    includeAttempts: boolean;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
    phoneNumbers: string[];
    sources: CampaignCallSource[];
    finishTimeMin?: googleProtobuf001.Timestamp.AsObject;
    finishTimeMax?: googleProtobuf001.Timestamp.AsObject;
    modifiedSince?: googleProtobuf001.Timestamp.AsObject;
    minAttempts: number;
    campaignCallNames: string[];
  }

  /**
   * Protobuf JSON representation for ListCampaignCallsRequest
   */
  export interface AsProtobufJSON {
    campaignName: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    states: string[];
    phoneNumber: string;
    pageSize: number;
    pageToken: string;
    includeAttempts: boolean;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    phoneNumbers: string[];
    sources: string[];
    finishTimeMin: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    finishTimeMax: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedSince: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    minAttempts: number;
    campaignCallNames: string[];
  }
  export enum CampaignCase {
    none = 0,
    campaignName = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCampaignCallsResponse
 */
export class ListCampaignCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCampaignCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignCallsResponse();
    ListCampaignCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignCallsResponse) {
    _instance.campaignCalls = _instance.campaignCalls || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCampaignCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CampaignCall();
          _reader.readMessage(
            messageInitializer1,
            CampaignCall.deserializeBinaryFromReader
          );
          (_instance.campaignCalls = _instance.campaignCalls || []).push(
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

    ListCampaignCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignCalls && _instance.campaignCalls.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.campaignCalls as any,
        CampaignCall.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _campaignCalls?: CampaignCall[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignCallsResponse.AsObject>) {
    _value = _value || {};
    this.campaignCalls = (_value.campaignCalls || []).map(
      m => new CampaignCall(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListCampaignCallsResponse.refineValues(this);
  }
  get campaignCalls(): CampaignCall[] | undefined {
    return this._campaignCalls;
  }
  set campaignCalls(value: CampaignCall[] | undefined) {
    this._campaignCalls = value;
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
    ListCampaignCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignCallsResponse.AsObject {
    return {
      campaignCalls: (this.campaignCalls || []).map(m => m.toObject()),
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
  ): ListCampaignCallsResponse.AsProtobufJSON {
    return {
      campaignCalls: (this.campaignCalls || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListCampaignCallsResponse {
  /**
   * Standard JavaScript object representation for ListCampaignCallsResponse
   */
  export interface AsObject {
    campaignCalls?: CampaignCall.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListCampaignCallsResponse
   */
  export interface AsProtobufJSON {
    campaignCalls: CampaignCall.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartCampaignRequest
 */
export class StartCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartCampaignRequest();
    StartCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StartCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;

  private _campaign: StartCampaignRequest.CampaignCase =
    StartCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    StartCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = StartCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = StartCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StartCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartCampaignRequest.AsObject {
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
  ): StartCampaignRequest.AsProtobufJSON {
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
export module StartCampaignRequest {
  /**
   * Standard JavaScript object representation for StartCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StartCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCampaignRequest
 */
export class StopCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCampaignRequest();
    StopCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;

  private _campaign: StopCampaignRequest.CampaignCase =
    StopCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    StopCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = StopCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = StopCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCampaignRequest.AsObject {
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
  ): StopCampaignRequest.AsProtobufJSON {
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
export module StopCampaignRequest {
  /**
   * Standard JavaScript object representation for StopCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StopCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.HardStopCampaignRequest
 */
export class HardStopCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.HardStopCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HardStopCampaignRequest();
    HardStopCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HardStopCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HardStopCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    HardStopCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HardStopCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;

  private _campaign: HardStopCampaignRequest.CampaignCase =
    HardStopCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HardStopCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HardStopCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    HardStopCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = HardStopCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = HardStopCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HardStopCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HardStopCampaignRequest.AsObject {
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
  ): HardStopCampaignRequest.AsProtobufJSON {
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
export module HardStopCampaignRequest {
  /**
   * Standard JavaScript object representation for HardStopCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for HardStopCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.ResumeCampaignRequest
 */
export class ResumeCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ResumeCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResumeCampaignRequest();
    ResumeCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResumeCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResumeCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ResumeCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResumeCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name || _instance.name === '') {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName || _instance.displayName === '') {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(4, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf007.FieldMask;

  private _campaign: ResumeCampaignRequest.CampaignCase =
    ResumeCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResumeCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResumeCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    ResumeCampaignRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = ResumeCampaignRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = ResumeCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResumeCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResumeCampaignRequest.AsObject {
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
  ): ResumeCampaignRequest.AsProtobufJSON {
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
export module ResumeCampaignRequest {
  /**
   * Standard JavaScript object representation for ResumeCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ResumeCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCampaignStatusRequest
 */
export class StreamCampaignStatusRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCampaignStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCampaignStatusRequest();
    StreamCampaignStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCampaignStatusRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.campaignNames = _instance.campaignNames || [];
    _instance.campaignDisplayNames = _instance.campaignDisplayNames || [];
    _instance.includeCalls = _instance.includeCalls || false;
    _instance.states = _instance.states || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCampaignStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.campaignNames = _instance.campaignNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.campaignDisplayNames =
            _instance.campaignDisplayNames || []).push(_reader.readString());
          break;
        case 3:
          _instance.includeCalls = _reader.readBool();
          break;
        case 5:
          _reader.readPackableEnumInto(
            (_instance.states = _instance.states || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCampaignStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCampaignStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.campaignNames && _instance.campaignNames.length) {
      _writer.writeRepeatedString(2, _instance.campaignNames);
    }
    if (
      _instance.campaignDisplayNames &&
      _instance.campaignDisplayNames.length
    ) {
      _writer.writeRepeatedString(4, _instance.campaignDisplayNames);
    }
    if (_instance.includeCalls) {
      _writer.writeBool(3, _instance.includeCalls);
    }
    if (_instance.states && _instance.states.length) {
      _writer.writePackedEnum(5, _instance.states);
    }
  }

  private _vtsiProjectName: string;
  private _campaignNames: string[];
  private _campaignDisplayNames: string[];
  private _includeCalls: boolean;
  private _states: CampaignState[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCampaignStatusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCampaignStatusRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaignNames = (_value.campaignNames || []).slice();
    this.campaignDisplayNames = (_value.campaignDisplayNames || []).slice();
    this.includeCalls = _value.includeCalls;
    this.states = (_value.states || []).slice();
    StreamCampaignStatusRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaignNames(): string[] {
    return this._campaignNames;
  }
  set campaignNames(value: string[]) {
    this._campaignNames = value;
  }
  get campaignDisplayNames(): string[] {
    return this._campaignDisplayNames;
  }
  set campaignDisplayNames(value: string[]) {
    this._campaignDisplayNames = value;
  }
  get includeCalls(): boolean {
    return this._includeCalls;
  }
  set includeCalls(value: boolean) {
    this._includeCalls = value;
  }
  get states(): CampaignState[] {
    return this._states;
  }
  set states(value: CampaignState[]) {
    this._states = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCampaignStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCampaignStatusRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaignNames: (this.campaignNames || []).slice(),
      campaignDisplayNames: (this.campaignDisplayNames || []).slice(),
      includeCalls: this.includeCalls,
      states: (this.states || []).slice()
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
  ): StreamCampaignStatusRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaignNames: (this.campaignNames || []).slice(),
      campaignDisplayNames: (this.campaignDisplayNames || []).slice(),
      includeCalls: this.includeCalls,
      states: (this.states || []).map(v => CampaignState[v])
    };
  }
}
export module StreamCampaignStatusRequest {
  /**
   * Standard JavaScript object representation for StreamCampaignStatusRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    campaignNames: string[];
    campaignDisplayNames: string[];
    includeCalls: boolean;
    states: CampaignState[];
  }

  /**
   * Protobuf JSON representation for StreamCampaignStatusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    campaignNames: string[];
    campaignDisplayNames: string[];
    includeCalls: boolean;
    states: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCampaignStatusResponse
 */
export class StreamCampaignStatusResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCampaignStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCampaignStatusResponse();
    StreamCampaignStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCampaignStatusResponse) {
    _instance.campaigns = _instance.campaigns || [];
    _instance.campaignCalls = _instance.campaignCalls || [];
    _instance.deletedCampaignNames = _instance.deletedCampaignNames || [];
    _instance.snapshot = _instance.snapshot || false;
    _instance.endReason = _instance.endReason || '';
    _instance.endReasonType = _instance.endReasonType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCampaignStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Campaign();
          _reader.readMessage(
            messageInitializer1,
            Campaign.deserializeBinaryFromReader
          );
          (_instance.campaigns = _instance.campaigns || []).push(
            messageInitializer1
          );
          break;
        case 2:
          const messageInitializer2 = new CampaignCall();
          _reader.readMessage(
            messageInitializer2,
            CampaignCall.deserializeBinaryFromReader
          );
          (_instance.campaignCalls = _instance.campaignCalls || []).push(
            messageInitializer2
          );
          break;
        case 3:
          (_instance.deletedCampaignNames =
            _instance.deletedCampaignNames || []).push(_reader.readString());
          break;
        case 4:
          _instance.snapshot = _reader.readBool();
          break;
        case 5:
          _instance.endReason = _reader.readString();
          break;
        case 6:
          _instance.endReasonType = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCampaignStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCampaignStatusResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaigns && _instance.campaigns.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.campaigns as any,
        Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.campaignCalls && _instance.campaignCalls.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.campaignCalls as any,
        CampaignCall.serializeBinaryToWriter
      );
    }
    if (
      _instance.deletedCampaignNames &&
      _instance.deletedCampaignNames.length
    ) {
      _writer.writeRepeatedString(3, _instance.deletedCampaignNames);
    }
    if (_instance.snapshot) {
      _writer.writeBool(4, _instance.snapshot);
    }
    if (_instance.endReason) {
      _writer.writeString(5, _instance.endReason);
    }
    if (_instance.endReasonType) {
      _writer.writeEnum(6, _instance.endReasonType);
    }
  }

  private _campaigns?: Campaign[];
  private _campaignCalls?: CampaignCall[];
  private _deletedCampaignNames: string[];
  private _snapshot: boolean;
  private _endReason: string;
  private _endReasonType: StreamEndReason;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCampaignStatusResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamCampaignStatusResponse.AsObject>
  ) {
    _value = _value || {};
    this.campaigns = (_value.campaigns || []).map(m => new Campaign(m));
    this.campaignCalls = (_value.campaignCalls || []).map(
      m => new CampaignCall(m)
    );
    this.deletedCampaignNames = (_value.deletedCampaignNames || []).slice();
    this.snapshot = _value.snapshot;
    this.endReason = _value.endReason;
    this.endReasonType = _value.endReasonType;
    StreamCampaignStatusResponse.refineValues(this);
  }
  get campaigns(): Campaign[] | undefined {
    return this._campaigns;
  }
  set campaigns(value: Campaign[] | undefined) {
    this._campaigns = value;
  }
  get campaignCalls(): CampaignCall[] | undefined {
    return this._campaignCalls;
  }
  set campaignCalls(value: CampaignCall[] | undefined) {
    this._campaignCalls = value;
  }
  get deletedCampaignNames(): string[] {
    return this._deletedCampaignNames;
  }
  set deletedCampaignNames(value: string[]) {
    this._deletedCampaignNames = value;
  }
  get snapshot(): boolean {
    return this._snapshot;
  }
  set snapshot(value: boolean) {
    this._snapshot = value;
  }
  get endReason(): string {
    return this._endReason;
  }
  set endReason(value: string) {
    this._endReason = value;
  }
  get endReasonType(): StreamEndReason {
    return this._endReasonType;
  }
  set endReasonType(value: StreamEndReason) {
    this._endReasonType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCampaignStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCampaignStatusResponse.AsObject {
    return {
      campaigns: (this.campaigns || []).map(m => m.toObject()),
      campaignCalls: (this.campaignCalls || []).map(m => m.toObject()),
      deletedCampaignNames: (this.deletedCampaignNames || []).slice(),
      snapshot: this.snapshot,
      endReason: this.endReason,
      endReasonType: this.endReasonType
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
  ): StreamCampaignStatusResponse.AsProtobufJSON {
    return {
      campaigns: (this.campaigns || []).map(m => m.toProtobufJSON(options)),
      campaignCalls: (this.campaignCalls || []).map(m =>
        m.toProtobufJSON(options)
      ),
      deletedCampaignNames: (this.deletedCampaignNames || []).slice(),
      snapshot: this.snapshot,
      endReason: this.endReason,
      endReasonType:
        StreamEndReason[
          this.endReasonType === null || this.endReasonType === undefined
            ? 0
            : this.endReasonType
        ]
    };
  }
}
export module StreamCampaignStatusResponse {
  /**
   * Standard JavaScript object representation for StreamCampaignStatusResponse
   */
  export interface AsObject {
    campaigns?: Campaign.AsObject[];
    campaignCalls?: CampaignCall.AsObject[];
    deletedCampaignNames: string[];
    snapshot: boolean;
    endReason: string;
    endReasonType: StreamEndReason;
  }

  /**
   * Protobuf JSON representation for StreamCampaignStatusResponse
   */
  export interface AsProtobufJSON {
    campaigns: Campaign.AsProtobufJSON[] | null;
    campaignCalls: CampaignCall.AsProtobufJSON[] | null;
    deletedCampaignNames: string[];
    snapshot: boolean;
    endReason: string;
    endReasonType: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCampaignCallRequest
 */
export class GetCampaignCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCampaignCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCampaignCallRequest();
    GetCampaignCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCampaignCallRequest) {
    _instance.name = _instance.name || '';
    _instance.includeAttempts = _instance.includeAttempts || false;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCampaignCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.includeAttempts = _reader.readBool();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCampaignCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCampaignCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.includeAttempts) {
      _writer.writeBool(2, _instance.includeAttempts);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _includeAttempts: boolean;
  private _fieldMask?: googleProtobuf007.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCampaignCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCampaignCallRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.includeAttempts = _value.includeAttempts;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    GetCampaignCallRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get includeAttempts(): boolean {
    return this._includeAttempts;
  }
  set includeAttempts(value: boolean) {
    this._includeAttempts = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCampaignCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCampaignCallRequest.AsObject {
    return {
      name: this.name,
      includeAttempts: this.includeAttempts,
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
  ): GetCampaignCallRequest.AsProtobufJSON {
    return {
      name: this.name,
      includeAttempts: this.includeAttempts,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetCampaignCallRequest {
  /**
   * Standard JavaScript object representation for GetCampaignCallRequest
   */
  export interface AsObject {
    name: string;
    includeAttempts: boolean;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCampaignCallRequest
   */
  export interface AsProtobufJSON {
    name: string;
    includeAttempts: boolean;
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CampaignCallRefusal
 */
export class CampaignCallRefusal implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignCallRefusal';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignCallRefusal();
    CampaignCallRefusal.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignCallRefusal) {
    _instance.campaignCallName = _instance.campaignCallName || '';
    _instance.state = _instance.state || 0;
    _instance.reason = _instance.reason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignCallRefusal,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignCallName = _reader.readString();
          break;
        case 2:
          _instance.state = _reader.readEnum();
          break;
        case 3:
          _instance.reason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignCallRefusal.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignCallRefusal,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignCallName) {
      _writer.writeString(1, _instance.campaignCallName);
    }
    if (_instance.state) {
      _writer.writeEnum(2, _instance.state);
    }
    if (_instance.reason) {
      _writer.writeString(3, _instance.reason);
    }
  }

  private _campaignCallName: string;
  private _state: CampaignCallState;
  private _reason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignCallRefusal to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignCallRefusal.AsObject>) {
    _value = _value || {};
    this.campaignCallName = _value.campaignCallName;
    this.state = _value.state;
    this.reason = _value.reason;
    CampaignCallRefusal.refineValues(this);
  }
  get campaignCallName(): string {
    return this._campaignCallName;
  }
  set campaignCallName(value: string) {
    this._campaignCallName = value;
  }
  get state(): CampaignCallState {
    return this._state;
  }
  set state(value: CampaignCallState) {
    this._state = value;
  }
  get reason(): string {
    return this._reason;
  }
  set reason(value: string) {
    this._reason = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignCallRefusal.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignCallRefusal.AsObject {
    return {
      campaignCallName: this.campaignCallName,
      state: this.state,
      reason: this.reason
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
  ): CampaignCallRefusal.AsProtobufJSON {
    return {
      campaignCallName: this.campaignCallName,
      state:
        CampaignCallState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      reason: this.reason
    };
  }
}
export module CampaignCallRefusal {
  /**
   * Standard JavaScript object representation for CampaignCallRefusal
   */
  export interface AsObject {
    campaignCallName: string;
    state: CampaignCallState;
    reason: string;
  }

  /**
   * Protobuf JSON representation for CampaignCallRefusal
   */
  export interface AsProtobufJSON {
    campaignCallName: string;
    state: string;
    reason: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelCampaignCallsRequest
 */
export class CancelCampaignCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelCampaignCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelCampaignCallsRequest();
    CancelCampaignCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelCampaignCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.campaignCallNames = _instance.campaignCallNames || [];
    _instance.states = _instance.states || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelCampaignCallsRequest,
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
          (_instance.campaignCallNames =
            _instance.campaignCallNames || []).push(_reader.readString());
          break;
        case 5:
          _reader.readPackableEnumInto(
            (_instance.states = _instance.states || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CancelCampaignCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelCampaignCallsRequest,
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
    if (_instance.campaignCallNames && _instance.campaignCallNames.length) {
      _writer.writeRepeatedString(4, _instance.campaignCallNames);
    }
    if (_instance.states && _instance.states.length) {
      _writer.writePackedEnum(5, _instance.states);
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _campaignCallNames: string[];
  private _states: CampaignCallState[];

  private _campaign: CancelCampaignCallsRequest.CampaignCase =
    CancelCampaignCallsRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelCampaignCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CancelCampaignCallsRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaignCallNames = (_value.campaignCallNames || []).slice();
    this.states = (_value.states || []).slice();
    CancelCampaignCallsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = CancelCampaignCallsRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = CancelCampaignCallsRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaignCallNames(): string[] {
    return this._campaignCallNames;
  }
  set campaignCallNames(value: string[]) {
    this._campaignCallNames = value;
  }
  get states(): CampaignCallState[] {
    return this._states;
  }
  set states(value: CampaignCallState[]) {
    this._states = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelCampaignCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelCampaignCallsRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      campaignCallNames: (this.campaignCallNames || []).slice(),
      states: (this.states || []).slice()
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
  ): CancelCampaignCallsRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      campaignCallNames: (this.campaignCallNames || []).slice(),
      states: (this.states || []).map(v => CampaignCallState[v])
    };
  }
}
export module CancelCampaignCallsRequest {
  /**
   * Standard JavaScript object representation for CancelCampaignCallsRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    campaignCallNames: string[];
    states: CampaignCallState[];
  }

  /**
   * Protobuf JSON representation for CancelCampaignCallsRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    campaignCallNames: string[];
    states: string[];
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelCampaignCallsResponse
 */
export class CancelCampaignCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelCampaignCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelCampaignCallsResponse();
    CancelCampaignCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelCampaignCallsResponse) {
    _instance.campaignName = _instance.campaignName || '';
    _instance.cancelledCampaignCallNames =
      _instance.cancelledCampaignCallNames || [];
    _instance.refused = _instance.refused || [];
    _instance.remainingCount = _instance.remainingCount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelCampaignCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignName = _reader.readString();
          break;
        case 2:
          (_instance.cancelledCampaignCallNames =
            _instance.cancelledCampaignCallNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          const messageInitializer3 = new CampaignCallRefusal();
          _reader.readMessage(
            messageInitializer3,
            CampaignCallRefusal.deserializeBinaryFromReader
          );
          (_instance.refused = _instance.refused || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.remainingCount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelCampaignCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelCampaignCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignName) {
      _writer.writeString(1, _instance.campaignName);
    }
    if (
      _instance.cancelledCampaignCallNames &&
      _instance.cancelledCampaignCallNames.length
    ) {
      _writer.writeRepeatedString(2, _instance.cancelledCampaignCallNames);
    }
    if (_instance.refused && _instance.refused.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.refused as any,
        CampaignCallRefusal.serializeBinaryToWriter
      );
    }
    if (_instance.remainingCount) {
      _writer.writeInt32(4, _instance.remainingCount);
    }
  }

  private _campaignName: string;
  private _cancelledCampaignCallNames: string[];
  private _refused?: CampaignCallRefusal[];
  private _remainingCount: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelCampaignCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CancelCampaignCallsResponse.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.cancelledCampaignCallNames = (
      _value.cancelledCampaignCallNames || []
    ).slice();
    this.refused = (_value.refused || []).map(m => new CampaignCallRefusal(m));
    this.remainingCount = _value.remainingCount;
    CancelCampaignCallsResponse.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get cancelledCampaignCallNames(): string[] {
    return this._cancelledCampaignCallNames;
  }
  set cancelledCampaignCallNames(value: string[]) {
    this._cancelledCampaignCallNames = value;
  }
  get refused(): CampaignCallRefusal[] | undefined {
    return this._refused;
  }
  set refused(value: CampaignCallRefusal[] | undefined) {
    this._refused = value;
  }
  get remainingCount(): number {
    return this._remainingCount;
  }
  set remainingCount(value: number) {
    this._remainingCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelCampaignCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelCampaignCallsResponse.AsObject {
    return {
      campaignName: this.campaignName,
      cancelledCampaignCallNames: (
        this.cancelledCampaignCallNames || []
      ).slice(),
      refused: (this.refused || []).map(m => m.toObject()),
      remainingCount: this.remainingCount
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
  ): CancelCampaignCallsResponse.AsProtobufJSON {
    return {
      campaignName: this.campaignName,
      cancelledCampaignCallNames: (
        this.cancelledCampaignCallNames || []
      ).slice(),
      refused: (this.refused || []).map(m => m.toProtobufJSON(options)),
      remainingCount: this.remainingCount
    };
  }
}
export module CancelCampaignCallsResponse {
  /**
   * Standard JavaScript object representation for CancelCampaignCallsResponse
   */
  export interface AsObject {
    campaignName: string;
    cancelledCampaignCallNames: string[];
    refused?: CampaignCallRefusal.AsObject[];
    remainingCount: number;
  }

  /**
   * Protobuf JSON representation for CancelCampaignCallsResponse
   */
  export interface AsProtobufJSON {
    campaignName: string;
    cancelledCampaignCallNames: string[];
    refused: CampaignCallRefusal.AsProtobufJSON[] | null;
    remainingCount: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.RetryCampaignCallsRequest
 */
export class RetryCampaignCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.RetryCampaignCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RetryCampaignCallsRequest();
    RetryCampaignCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RetryCampaignCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.campaignCallNames = _instance.campaignCallNames || [];
    _instance.states = _instance.states || [];
    _instance.additionalAttempts = _instance.additionalAttempts || 0;
    _instance.notBefore = _instance.notBefore || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RetryCampaignCallsRequest,
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
          (_instance.campaignCallNames =
            _instance.campaignCallNames || []).push(_reader.readString());
          break;
        case 5:
          _reader.readPackableEnumInto(
            (_instance.states = _instance.states || [])
          );
          break;
        case 6:
          _instance.additionalAttempts = _reader.readInt32();
          break;
        case 7:
          _instance.notBefore = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.notBefore,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RetryCampaignCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RetryCampaignCallsRequest,
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
    if (_instance.campaignCallNames && _instance.campaignCallNames.length) {
      _writer.writeRepeatedString(4, _instance.campaignCallNames);
    }
    if (_instance.states && _instance.states.length) {
      _writer.writePackedEnum(5, _instance.states);
    }
    if (_instance.additionalAttempts) {
      _writer.writeInt32(6, _instance.additionalAttempts);
    }
    if (_instance.notBefore) {
      _writer.writeMessage(
        7,
        _instance.notBefore as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName: string;
  private _vtsiProjectName: string;
  private _campaignCallNames: string[];
  private _states: CampaignCallState[];
  private _additionalAttempts: number;
  private _notBefore?: googleProtobuf001.Timestamp;

  private _campaign: RetryCampaignCallsRequest.CampaignCase =
    RetryCampaignCallsRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RetryCampaignCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RetryCampaignCallsRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaignCallNames = (_value.campaignCallNames || []).slice();
    this.states = (_value.states || []).slice();
    this.additionalAttempts = _value.additionalAttempts;
    this.notBefore = _value.notBefore
      ? new googleProtobuf001.Timestamp(_value.notBefore)
      : undefined;
    RetryCampaignCallsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value !== undefined && value !== null) {
      this._displayName = undefined;
      this._campaign = RetryCampaignCallsRequest.CampaignCase.name;
    }
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = RetryCampaignCallsRequest.CampaignCase.displayName;
    }
    this._displayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaignCallNames(): string[] {
    return this._campaignCallNames;
  }
  set campaignCallNames(value: string[]) {
    this._campaignCallNames = value;
  }
  get states(): CampaignCallState[] {
    return this._states;
  }
  set states(value: CampaignCallState[]) {
    this._states = value;
  }
  get additionalAttempts(): number {
    return this._additionalAttempts;
  }
  set additionalAttempts(value: number) {
    this._additionalAttempts = value;
  }
  get notBefore(): googleProtobuf001.Timestamp | undefined {
    return this._notBefore;
  }
  set notBefore(value: googleProtobuf001.Timestamp | undefined) {
    this._notBefore = value;
  }
  get campaign() {
    return this._campaign;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RetryCampaignCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RetryCampaignCallsRequest.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      campaignCallNames: (this.campaignCallNames || []).slice(),
      states: (this.states || []).slice(),
      additionalAttempts: this.additionalAttempts,
      notBefore: this.notBefore ? this.notBefore.toObject() : undefined
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
  ): RetryCampaignCallsRequest.AsProtobufJSON {
    return {
      name: this.name === null || this.name === undefined ? null : this.name,
      displayName:
        this.displayName === null || this.displayName === undefined
          ? null
          : this.displayName,
      vtsiProjectName: this.vtsiProjectName,
      campaignCallNames: (this.campaignCallNames || []).slice(),
      states: (this.states || []).map(v => CampaignCallState[v]),
      additionalAttempts: this.additionalAttempts,
      notBefore: this.notBefore ? this.notBefore.toProtobufJSON(options) : null
    };
  }
}
export module RetryCampaignCallsRequest {
  /**
   * Standard JavaScript object representation for RetryCampaignCallsRequest
   */
  export interface AsObject {
    name: string;
    displayName: string;
    vtsiProjectName: string;
    campaignCallNames: string[];
    states: CampaignCallState[];
    additionalAttempts: number;
    notBefore?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RetryCampaignCallsRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: string | null;
    vtsiProjectName: string;
    campaignCallNames: string[];
    states: string[];
    additionalAttempts: number;
    notBefore: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
  export enum CampaignCase {
    none = 0,
    name = 1,
    displayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.RetryCampaignCallsResponse
 */
export class RetryCampaignCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.RetryCampaignCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RetryCampaignCallsResponse();
    RetryCampaignCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RetryCampaignCallsResponse) {
    _instance.campaignName = _instance.campaignName || '';
    _instance.requeuedCampaignCallNames =
      _instance.requeuedCampaignCallNames || [];
    _instance.refused = _instance.refused || [];
    _instance.remainingCount = _instance.remainingCount || 0;
    _instance.campaignState = _instance.campaignState || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RetryCampaignCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaignName = _reader.readString();
          break;
        case 2:
          (_instance.requeuedCampaignCallNames =
            _instance.requeuedCampaignCallNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          const messageInitializer3 = new CampaignCallRefusal();
          _reader.readMessage(
            messageInitializer3,
            CampaignCallRefusal.deserializeBinaryFromReader
          );
          (_instance.refused = _instance.refused || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.remainingCount = _reader.readInt32();
          break;
        case 5:
          _instance.campaignState = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    RetryCampaignCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RetryCampaignCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaignName) {
      _writer.writeString(1, _instance.campaignName);
    }
    if (
      _instance.requeuedCampaignCallNames &&
      _instance.requeuedCampaignCallNames.length
    ) {
      _writer.writeRepeatedString(2, _instance.requeuedCampaignCallNames);
    }
    if (_instance.refused && _instance.refused.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.refused as any,
        CampaignCallRefusal.serializeBinaryToWriter
      );
    }
    if (_instance.remainingCount) {
      _writer.writeInt32(4, _instance.remainingCount);
    }
    if (_instance.campaignState) {
      _writer.writeEnum(5, _instance.campaignState);
    }
  }

  private _campaignName: string;
  private _requeuedCampaignCallNames: string[];
  private _refused?: CampaignCallRefusal[];
  private _remainingCount: number;
  private _campaignState: CampaignState;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RetryCampaignCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RetryCampaignCallsResponse.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.requeuedCampaignCallNames = (
      _value.requeuedCampaignCallNames || []
    ).slice();
    this.refused = (_value.refused || []).map(m => new CampaignCallRefusal(m));
    this.remainingCount = _value.remainingCount;
    this.campaignState = _value.campaignState;
    RetryCampaignCallsResponse.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get requeuedCampaignCallNames(): string[] {
    return this._requeuedCampaignCallNames;
  }
  set requeuedCampaignCallNames(value: string[]) {
    this._requeuedCampaignCallNames = value;
  }
  get refused(): CampaignCallRefusal[] | undefined {
    return this._refused;
  }
  set refused(value: CampaignCallRefusal[] | undefined) {
    this._refused = value;
  }
  get remainingCount(): number {
    return this._remainingCount;
  }
  set remainingCount(value: number) {
    this._remainingCount = value;
  }
  get campaignState(): CampaignState {
    return this._campaignState;
  }
  set campaignState(value: CampaignState) {
    this._campaignState = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RetryCampaignCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RetryCampaignCallsResponse.AsObject {
    return {
      campaignName: this.campaignName,
      requeuedCampaignCallNames: (this.requeuedCampaignCallNames || []).slice(),
      refused: (this.refused || []).map(m => m.toObject()),
      remainingCount: this.remainingCount,
      campaignState: this.campaignState
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
  ): RetryCampaignCallsResponse.AsProtobufJSON {
    return {
      campaignName: this.campaignName,
      requeuedCampaignCallNames: (this.requeuedCampaignCallNames || []).slice(),
      refused: (this.refused || []).map(m => m.toProtobufJSON(options)),
      remainingCount: this.remainingCount,
      campaignState:
        CampaignState[
          this.campaignState === null || this.campaignState === undefined
            ? 0
            : this.campaignState
        ]
    };
  }
}
export module RetryCampaignCallsResponse {
  /**
   * Standard JavaScript object representation for RetryCampaignCallsResponse
   */
  export interface AsObject {
    campaignName: string;
    requeuedCampaignCallNames: string[];
    refused?: CampaignCallRefusal.AsObject[];
    remainingCount: number;
    campaignState: CampaignState;
  }

  /**
   * Protobuf JSON representation for RetryCampaignCallsResponse
   */
  export interface AsProtobufJSON {
    campaignName: string;
    requeuedCampaignCallNames: string[];
    refused: CampaignCallRefusal.AsProtobufJSON[] | null;
    remainingCount: number;
    campaignState: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CloneCampaignRequest
 */
export class CloneCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CloneCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CloneCampaignRequest();
    CloneCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CloneCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.newDisplayName = _instance.newDisplayName || '';
    _instance.includeCalls = _instance.includeCalls || false;
    _instance.callStates = _instance.callStates || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.idempotencyKey = _instance.idempotencyKey || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CloneCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sourceName = _reader.readString();
          break;
        case 2:
          _instance.sourceDisplayName = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.newDisplayName = _reader.readString();
          break;
        case 5:
          _instance.includeCalls = _reader.readBool();
          break;
        case 6:
          _reader.readPackableEnumInto(
            (_instance.callStates = _instance.callStates || [])
          );
          break;
        case 7:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.idempotencyKey = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CloneCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CloneCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sourceName || _instance.sourceName === '') {
      _writer.writeString(1, _instance.sourceName);
    }
    if (_instance.sourceDisplayName || _instance.sourceDisplayName === '') {
      _writer.writeString(2, _instance.sourceDisplayName);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.newDisplayName) {
      _writer.writeString(4, _instance.newDisplayName);
    }
    if (_instance.includeCalls) {
      _writer.writeBool(5, _instance.includeCalls);
    }
    if (_instance.callStates && _instance.callStates.length) {
      _writer.writePackedEnum(6, _instance.callStates);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        7,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(8, _instance.idempotencyKey);
    }
  }

  private _sourceName: string;
  private _sourceDisplayName: string;
  private _vtsiProjectName: string;
  private _newDisplayName: string;
  private _includeCalls: boolean;
  private _callStates: CampaignCallState[];
  private _fieldMask?: googleProtobuf007.FieldMask;
  private _idempotencyKey: string;

  private _source: CloneCampaignRequest.SourceCase =
    CloneCampaignRequest.SourceCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CloneCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CloneCampaignRequest.AsObject>) {
    _value = _value || {};
    this.sourceName = _value.sourceName;
    this.sourceDisplayName = _value.sourceDisplayName;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.newDisplayName = _value.newDisplayName;
    this.includeCalls = _value.includeCalls;
    this.callStates = (_value.callStates || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    this.idempotencyKey = _value.idempotencyKey;
    CloneCampaignRequest.refineValues(this);
  }
  get sourceName(): string {
    return this._sourceName;
  }
  set sourceName(value: string) {
    if (value !== undefined && value !== null) {
      this._sourceDisplayName = undefined;
      this._source = CloneCampaignRequest.SourceCase.sourceName;
    }
    this._sourceName = value;
  }
  get sourceDisplayName(): string {
    return this._sourceDisplayName;
  }
  set sourceDisplayName(value: string) {
    if (value !== undefined && value !== null) {
      this._sourceName = undefined;
      this._source = CloneCampaignRequest.SourceCase.sourceDisplayName;
    }
    this._sourceDisplayName = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get newDisplayName(): string {
    return this._newDisplayName;
  }
  set newDisplayName(value: string) {
    this._newDisplayName = value;
  }
  get includeCalls(): boolean {
    return this._includeCalls;
  }
  set includeCalls(value: boolean) {
    this._includeCalls = value;
  }
  get callStates(): CampaignCallState[] {
    return this._callStates;
  }
  set callStates(value: CampaignCallState[]) {
    this._callStates = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
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
    CloneCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CloneCampaignRequest.AsObject {
    return {
      sourceName: this.sourceName,
      sourceDisplayName: this.sourceDisplayName,
      vtsiProjectName: this.vtsiProjectName,
      newDisplayName: this.newDisplayName,
      includeCalls: this.includeCalls,
      callStates: (this.callStates || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): CloneCampaignRequest.AsProtobufJSON {
    return {
      sourceName:
        this.sourceName === null || this.sourceName === undefined
          ? null
          : this.sourceName,
      sourceDisplayName:
        this.sourceDisplayName === null || this.sourceDisplayName === undefined
          ? null
          : this.sourceDisplayName,
      vtsiProjectName: this.vtsiProjectName,
      newDisplayName: this.newDisplayName,
      includeCalls: this.includeCalls,
      callStates: (this.callStates || []).map(v => CampaignCallState[v]),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      idempotencyKey: this.idempotencyKey
    };
  }
}
export module CloneCampaignRequest {
  /**
   * Standard JavaScript object representation for CloneCampaignRequest
   */
  export interface AsObject {
    sourceName: string;
    sourceDisplayName: string;
    vtsiProjectName: string;
    newDisplayName: string;
    includeCalls: boolean;
    callStates: CampaignCallState[];
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
    idempotencyKey: string;
  }

  /**
   * Protobuf JSON representation for CloneCampaignRequest
   */
  export interface AsProtobufJSON {
    sourceName: string | null;
    sourceDisplayName: string | null;
    vtsiProjectName: string;
    newDisplayName: string;
    includeCalls: boolean;
    callStates: string[];
    fieldMask: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    idempotencyKey: string;
  }
  export enum SourceCase {
    none = 0,
    sourceName = 1,
    sourceDisplayName = 2
  }
}
