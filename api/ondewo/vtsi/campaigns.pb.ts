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
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoSip004 from '../../ondewo/sip/sip.pb';
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
          _instance.retryDelay = new googleProtobuf002.Duration();
          _reader.readMessage(
            _instance.retryDelay,
            googleProtobuf002.Duration.deserializeBinaryFromReader
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
        googleProtobuf002.Duration.serializeBinaryToWriter
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
  }

  private _name: string;
  private _campaignId: string;
  private _vtsiProjectName: string;
  private _displayName: string;
  private _maxParallelCalls: number;
  private _maxAttempts: number;
  private _retryDelay?: googleProtobuf002.Duration;
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
      ? new googleProtobuf002.Duration(_value.retryDelay)
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
  get retryDelay(): googleProtobuf002.Duration | undefined {
    return this._retryDelay;
  }
  set retryDelay(value: googleProtobuf002.Duration | undefined) {
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
      completedAt: this.completedAt ? this.completedAt.toObject() : undefined
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
        : null
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
    retryDelay?: googleProtobuf002.Duration.AsObject;
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
    retryDelay: googleProtobuf002.Duration.AsProtobufJSON | null;
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
      callsRetried: this.callsRetried
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
      callsRetried: this.callsRetried
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
  private _sipStatusType: ondewoSip004.SipStatus.StatusType;
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
  get sipStatusType(): ondewoSip004.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip004.SipStatus.StatusType) {
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
        ondewoSip004.SipStatus.StatusType[
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
    sipStatusType: ondewoSip004.SipStatus.StatusType;
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
  private _sipStatusType: ondewoSip004.SipStatus.StatusType;
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
  get sipStatusType(): ondewoSip004.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip004.SipStatus.StatusType) {
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
        ondewoSip004.SipStatus.StatusType[
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
    sipStatusType: ondewoSip004.SipStatus.StatusType;
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
 * Message implementation for ondewo.vtsi.CampaignDisplayName
 */
export class CampaignDisplayName implements GrpcMessage {
  static id = 'ondewo.vtsi.CampaignDisplayName';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignDisplayName();
    CampaignDisplayName.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignDisplayName) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.displayName = _instance.displayName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignDisplayName,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CampaignDisplayName.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CampaignDisplayName,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
  }

  private _vtsiProjectName: string;
  private _displayName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignDisplayName to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignDisplayName.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.displayName = _value.displayName;
    CampaignDisplayName.refineValues(this);
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignDisplayName.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignDisplayName.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName
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
  ): CampaignDisplayName.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName
    };
  }
}
export module CampaignDisplayName {
  /**
   * Standard JavaScript object representation for CampaignDisplayName
   */
  export interface AsObject {
    vtsiProjectName: string;
    displayName: string;
  }

  /**
   * Protobuf JSON representation for CampaignDisplayName
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    displayName: string;
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
        case 4:
          _instance.campaignDisplayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.campaignDisplayName,
            CampaignDisplayName.deserializeBinaryFromReader
          );
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
    if (_instance.campaignDisplayName) {
      _writer.writeMessage(
        4,
        _instance.campaignDisplayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
    if (_instance.startMode) {
      _writer.writeEnum(3, _instance.startMode);
    }
  }

  private _campaignName: string;
  private _newCampaign?: Campaign;
  private _campaignDisplayName?: CampaignDisplayName;
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
    this.campaignDisplayName = _value.campaignDisplayName
      ? new CampaignDisplayName(_value.campaignDisplayName)
      : undefined;
    this.startMode = _value.startMode;
    CampaignAssignment.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._newCampaign = this._campaignDisplayName = undefined;
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
      this._campaignName = this._campaignDisplayName = undefined;
      this._campaignSelector =
        CampaignAssignment.CampaignSelectorCase.newCampaign;
    }
    this._newCampaign = value;
  }
  get campaignDisplayName(): CampaignDisplayName | undefined {
    return this._campaignDisplayName;
  }
  set campaignDisplayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._campaignName = this._newCampaign = undefined;
      this._campaignSelector =
        CampaignAssignment.CampaignSelectorCase.campaignDisplayName;
    }
    this._campaignDisplayName = value;
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
      campaignDisplayName: this.campaignDisplayName
        ? this.campaignDisplayName.toObject()
        : undefined,
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
      campaignDisplayName: this.campaignDisplayName
        ? this.campaignDisplayName.toProtobufJSON(options)
        : null,
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
    campaignDisplayName?: CampaignDisplayName.AsObject;
    startMode: CampaignStartMode;
  }

  /**
   * Protobuf JSON representation for CampaignAssignment
   */
  export interface AsProtobufJSON {
    campaignName: string | null;
    newCampaign: Campaign.AsProtobufJSON | null;
    campaignDisplayName: CampaignDisplayName.AsProtobufJSON | null;
    startMode: string;
  }
  export enum CampaignSelectorCase {
    none = 0,
    campaignName = 1,
    newCampaign = 2,
    campaignDisplayName = 3
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
  }

  private _vtsiProjectName: string;
  private _campaign?: Campaign;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaign = _value.campaign ? new Campaign(_value.campaign) : undefined;
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
      campaign: this.campaign ? this.campaign.toObject() : undefined
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
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null
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
  }

  /**
   * Protobuf JSON representation for CreateCampaignRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    campaign: Campaign.AsProtobufJSON | null;
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
  static refineValues(_instance: GetCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: GetCampaignRequest.CampaignCase =
    GetCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = GetCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module GetCampaignRequest {
  /**
   * Standard JavaScript object representation for GetCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
          _instance.updateMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
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
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _campaign?: Campaign;
  private _updateMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.campaign = _value.campaign ? new Campaign(_value.campaign) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    UpdateCampaignRequest.refineValues(this);
  }
  get campaign(): Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: Campaign | undefined) {
    this._campaign = value;
  }
  get updateMask(): googleProtobuf003.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf003.FieldMask | undefined) {
    this._updateMask = value;
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
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined
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
        : null
    };
  }
}
export module UpdateCampaignRequest {
  /**
   * Standard JavaScript object representation for UpdateCampaignRequest
   */
  export interface AsObject {
    campaign?: Campaign.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCampaignRequest
   */
  export interface AsProtobufJSON {
    campaign: Campaign.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
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
  static refineValues(_instance: DeleteCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
          );
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: DeleteCampaignRequest.CampaignCase =
    DeleteCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
      : undefined;
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = DeleteCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module DeleteCampaignRequest {
  /**
   * Standard JavaScript object representation for DeleteCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for DeleteCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
  }

  private _states: CampaignState[];
  private _displayNameContains: string;
  private _displayName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignFilter.AsObject>) {
    _value = _value || {};
    this.states = (_value.states || []).slice();
    this.displayNameContains = _value.displayNameContains;
    this.displayName = _value.displayName;
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
      displayName: this.displayName
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
      displayName: this.displayName
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
  }

  /**
   * Protobuf JSON representation for CampaignFilter
   */
  export interface AsProtobufJSON {
    states: string[];
    displayNameContains: string;
    displayName: string;
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
  }

  private _vtsiProjectName: string;
  private _filter?: CampaignFilter;
  private _pageSize: number;
  private _pageToken: string;

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
  ): ListCampaignsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      pageToken: this.pageToken
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
  }

  /**
   * Protobuf JSON representation for ListCampaignsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CampaignFilter.AsProtobufJSON | null;
    pageSize: number;
    pageToken: string;
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
  static refineValues(_instance: GetCampaignStatisticsRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
          );
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

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
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
      : undefined;
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = GetCampaignStatisticsRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module GetCampaignStatisticsRequest {
  /**
   * Standard JavaScript object representation for GetCampaignStatisticsRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCampaignStatisticsRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
    _instance.states = _instance.states || [];
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.includeAttempts = _instance.includeAttempts || false;
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
        case 7:
          _instance.campaignDisplayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.campaignDisplayName,
            CampaignDisplayName.deserializeBinaryFromReader
          );
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
    if (_instance.campaignDisplayName) {
      _writer.writeMessage(
        7,
        _instance.campaignDisplayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
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
  }

  private _campaignName: string;
  private _campaignDisplayName?: CampaignDisplayName;
  private _states: CampaignCallState[];
  private _phoneNumber: string;
  private _pageSize: number;
  private _pageToken: string;
  private _includeAttempts: boolean;

  private _campaign: ListCampaignCallsRequest.CampaignCase =
    ListCampaignCallsRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignCallsRequest.AsObject>) {
    _value = _value || {};
    this.campaignName = _value.campaignName;
    this.campaignDisplayName = _value.campaignDisplayName
      ? new CampaignDisplayName(_value.campaignDisplayName)
      : undefined;
    this.states = (_value.states || []).slice();
    this.phoneNumber = _value.phoneNumber;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.includeAttempts = _value.includeAttempts;
    ListCampaignCallsRequest.refineValues(this);
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignDisplayName = undefined;
      this._campaign = ListCampaignCallsRequest.CampaignCase.campaignName;
    }
    this._campaignName = value;
  }
  get campaignDisplayName(): CampaignDisplayName | undefined {
    return this._campaignDisplayName;
  }
  set campaignDisplayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._campaignName = undefined;
      this._campaign =
        ListCampaignCallsRequest.CampaignCase.campaignDisplayName;
    }
    this._campaignDisplayName = value;
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
      campaignDisplayName: this.campaignDisplayName
        ? this.campaignDisplayName.toObject()
        : undefined,
      states: (this.states || []).slice(),
      phoneNumber: this.phoneNumber,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      includeAttempts: this.includeAttempts
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
      campaignDisplayName: this.campaignDisplayName
        ? this.campaignDisplayName.toProtobufJSON(options)
        : null,
      states: (this.states || []).map(v => CampaignCallState[v]),
      phoneNumber: this.phoneNumber,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      includeAttempts: this.includeAttempts
    };
  }
}
export module ListCampaignCallsRequest {
  /**
   * Standard JavaScript object representation for ListCampaignCallsRequest
   */
  export interface AsObject {
    campaignName: string;
    campaignDisplayName?: CampaignDisplayName.AsObject;
    states: CampaignCallState[];
    phoneNumber: string;
    pageSize: number;
    pageToken: string;
    includeAttempts: boolean;
  }

  /**
   * Protobuf JSON representation for ListCampaignCallsRequest
   */
  export interface AsProtobufJSON {
    campaignName: string | null;
    campaignDisplayName: CampaignDisplayName.AsProtobufJSON | null;
    states: string[];
    phoneNumber: string;
    pageSize: number;
    pageToken: string;
    includeAttempts: boolean;
  }
  export enum CampaignCase {
    none = 0,
    campaignName = 1,
    campaignDisplayName = 2
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
  static refineValues(_instance: StartCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: StartCampaignRequest.CampaignCase =
    StartCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = StartCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module StartCampaignRequest {
  /**
   * Standard JavaScript object representation for StartCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for StartCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
  static refineValues(_instance: StopCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: StopCampaignRequest.CampaignCase =
    StopCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = StopCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module StopCampaignRequest {
  /**
   * Standard JavaScript object representation for StopCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for StopCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
  static refineValues(_instance: HardStopCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: HardStopCampaignRequest.CampaignCase =
    HardStopCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HardStopCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HardStopCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = HardStopCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module HardStopCampaignRequest {
  /**
   * Standard JavaScript object representation for HardStopCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for HardStopCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
  static refineValues(_instance: ResumeCampaignRequest) {}

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
        case 2:
          _instance.displayName = new CampaignDisplayName();
          _reader.readMessage(
            _instance.displayName,
            CampaignDisplayName.deserializeBinaryFromReader
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
    if (_instance.displayName) {
      _writer.writeMessage(
        2,
        _instance.displayName as any,
        CampaignDisplayName.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _displayName?: CampaignDisplayName;

  private _campaign: ResumeCampaignRequest.CampaignCase =
    ResumeCampaignRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResumeCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResumeCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName
      ? new CampaignDisplayName(_value.displayName)
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
  get displayName(): CampaignDisplayName | undefined {
    return this._displayName;
  }
  set displayName(value: CampaignDisplayName | undefined) {
    if (value !== undefined && value !== null) {
      this._name = undefined;
      this._campaign = ResumeCampaignRequest.CampaignCase.displayName;
    }
    this._displayName = value;
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
      displayName: this.displayName ? this.displayName.toObject() : undefined
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
      displayName: this.displayName
        ? this.displayName.toProtobufJSON(options)
        : null
    };
  }
}
export module ResumeCampaignRequest {
  /**
   * Standard JavaScript object representation for ResumeCampaignRequest
   */
  export interface AsObject {
    name: string;
    displayName?: CampaignDisplayName.AsObject;
  }

  /**
   * Protobuf JSON representation for ResumeCampaignRequest
   */
  export interface AsProtobufJSON {
    name: string | null;
    displayName: CampaignDisplayName.AsProtobufJSON | null;
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
  }

  private _vtsiProjectName: string;
  private _campaignNames: string[];
  private _campaignDisplayNames: string[];
  private _includeCalls: boolean;

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
      includeCalls: this.includeCalls
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
      includeCalls: this.includeCalls
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
  }

  /**
   * Protobuf JSON representation for StreamCampaignStatusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    campaignNames: string[];
    campaignDisplayNames: string[];
    includeCalls: boolean;
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
  }

  private _campaigns?: Campaign[];
  private _campaignCalls?: CampaignCall[];
  private _deletedCampaignNames: string[];
  private _snapshot: boolean;
  private _endReason: string;

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
      endReason: this.endReason
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
      endReason: this.endReason
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
  }
}
