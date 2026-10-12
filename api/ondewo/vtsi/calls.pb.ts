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
import * as googleApi000 from '../../google/api/annotations.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
import * as googleProtobuf011 from '@ngx-grpc/well-known-types';
import * as ondewoSip012 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi013 from '../../ondewo/vtsi/call-configs.pb';
import * as ondewoVtsi014 from '../../ondewo/vtsi/campaigns.pb';
import * as ondewoVtsi015 from '../../ondewo/vtsi/projects.pb';
export enum ScheduledCallerStatus {
  SCHEDULED_CALLER_STATUS_UNSPECIFIED = 0,
  SCHEDULED_CALLER_STATUS_PENDING = 1,
  SCHEDULED_CALLER_STATUS_FIRING = 2,
  SCHEDULED_CALLER_STATUS_DONE = 3,
  SCHEDULED_CALLER_STATUS_FAILED = 4,
  SCHEDULED_CALLER_STATUS_CANCELLED = 5
}
export enum TransferMode {
  TRANSFER_MODE_UNSPECIFIED = 0,
  TRANSFER_MODE_BLIND = 1,
  TRANSFER_MODE_WARM = 2
}
export enum TransferOutcome {
  TRANSFER_OUTCOME_UNSPECIFIED = 0,
  TRANSFER_OUTCOME_ACCEPTED = 1,
  TRANSFER_OUTCOME_PENDING = 2,
  TRANSFER_OUTCOME_TARGET_INVALID = 3,
  TRANSFER_OUTCOME_REFER_REJECTED = 4,
  TRANSFER_OUTCOME_TIMEOUT = 5,
  TRANSFER_OUTCOME_CALL_ENDED = 6,
  TRANSFER_OUTCOME_CALL_SCOPE_MISMATCH = 7,
  TRANSFER_OUTCOME_SIP_UNREACHABLE = 8
}
export enum CallMediaSetting {
  CALL_MEDIA_SETTING_UNCHANGED = 0,
  CALL_MEDIA_SETTING_ON = 1,
  CALL_MEDIA_SETTING_OFF = 2
}
export enum ParticipantMode {
  PARTICIPANT_MODE_UNSPECIFIED = 0,
  PARTICIPANT_MODE_CONFERENCE = 1,
  PARTICIPANT_MODE_MONITOR = 2
}
export enum BotPolicyOnJoin {
  BOT_POLICY_ON_JOIN_UNSPECIFIED = 0,
  BOT_POLICY_ON_JOIN_PAUSE = 1,
  BOT_POLICY_ON_JOIN_PAUSE_LISTENING = 2,
  BOT_POLICY_ON_JOIN_KEEP = 3
}
export enum ParticipantState {
  PARTICIPANT_STATE_UNSPECIFIED = 0,
  PARTICIPANT_STATE_RINGING = 1,
  PARTICIPANT_STATE_JOINED = 2,
  PARTICIPANT_STATE_FAILED = 3,
  PARTICIPANT_STATE_LEFT = 4
}
export enum ParticipantEndReason {
  PARTICIPANT_END_REASON_UNSPECIFIED = 0,
  PARTICIPANT_END_REASON_NO_ANSWER = 1,
  PARTICIPANT_END_REASON_BUSY = 2,
  PARTICIPANT_END_REASON_CHANNEL_UNAVAILABLE = 3,
  PARTICIPANT_END_REASON_CALL_ENDED = 4,
  PARTICIPANT_END_REASON_REMOVED = 5,
  PARTICIPANT_END_REASON_HANGUP = 6,
  PARTICIPANT_END_REASON_HANDED_OVER = 7,
  PARTICIPANT_END_REASON_JOIN_FAILED = 8,
  PARTICIPANT_END_REASON_TIMEOUT = 9
}
export enum CallAudioMode {
  CALL_AUDIO_MODE_UNSPECIFIED = 0,
  CALL_AUDIO_MODE_LISTEN = 1,
  CALL_AUDIO_MODE_TALK = 2
}
export enum CallAudioEndReason {
  CALL_AUDIO_END_REASON_UNSPECIFIED = 0,
  CALL_AUDIO_END_REASON_CLIENT_CLOSED = 1,
  CALL_AUDIO_END_REASON_CALL_ENDED = 2,
  CALL_AUDIO_END_REASON_CALL_TRANSFERRED = 3,
  CALL_AUDIO_END_REASON_MAX_DURATION = 4,
  CALL_AUDIO_END_REASON_STALLED = 5,
  CALL_AUDIO_END_REASON_INTERNAL = 6
}
export enum CallView {
  MINIMUM = 0,
  SHALLOW = 1,
  FULL = 2
}
export enum CallStatus {
  CALL_STATUS_UNSPECIFIED = 0,
  CALL_STATUS_ACTIVE = 1,
  CALL_STATUS_INACTIVE = 2
}
export enum CallType {
  BOTH = 0,
  LISTENER = 1,
  CALLER = 2,
  SCHEDULED_CALLER = 3
}
/**
 * Message implementation for ondewo.vtsi.AsteriskConfig
 */
export class AsteriskConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.AsteriskConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AsteriskConfig();
    AsteriskConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AsteriskConfig) {
    _instance.asteriskBaseConfig = _instance.asteriskBaseConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AsteriskConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.asteriskBaseConfig = new ondewoVtsi013.BaseServiceConfig();
          _reader.readMessage(
            _instance.asteriskBaseConfig,
            ondewoVtsi013.BaseServiceConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AsteriskConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AsteriskConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.asteriskBaseConfig) {
      _writer.writeMessage(
        1,
        _instance.asteriskBaseConfig as any,
        ondewoVtsi013.BaseServiceConfig.serializeBinaryToWriter
      );
    }
  }

  private _asteriskBaseConfig?: ondewoVtsi013.BaseServiceConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AsteriskConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<AsteriskConfig.AsObject>) {
    _value = _value || {};
    this.asteriskBaseConfig = _value.asteriskBaseConfig
      ? new ondewoVtsi013.BaseServiceConfig(_value.asteriskBaseConfig)
      : undefined;
    AsteriskConfig.refineValues(this);
  }
  get asteriskBaseConfig(): ondewoVtsi013.BaseServiceConfig | undefined {
    return this._asteriskBaseConfig;
  }
  set asteriskBaseConfig(value: ondewoVtsi013.BaseServiceConfig | undefined) {
    this._asteriskBaseConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AsteriskConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AsteriskConfig.AsObject {
    return {
      asteriskBaseConfig: this.asteriskBaseConfig
        ? this.asteriskBaseConfig.toObject()
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
  ): AsteriskConfig.AsProtobufJSON {
    return {
      asteriskBaseConfig: this.asteriskBaseConfig
        ? this.asteriskBaseConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module AsteriskConfig {
  /**
   * Standard JavaScript object representation for AsteriskConfig
   */
  export interface AsObject {
    asteriskBaseConfig?: ondewoVtsi013.BaseServiceConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for AsteriskConfig
   */
  export interface AsProtobufJSON {
    asteriskBaseConfig: ondewoVtsi013.BaseServiceConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.Listener
 */
export class Listener implements GrpcMessage {
  static id = 'ondewo.vtsi.Listener';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Listener();
    Listener.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Listener) {
    _instance.name = _instance.name || '';
    _instance.callName = _instance.callName || '';
    _instance.sipBaseConfig = _instance.sipBaseConfig || undefined;
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.active = _instance.active || false;
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.createdAt = _instance.createdAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Listener,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.sipBaseConfig = new ondewoVtsi013.SipBaseConfig();
          _reader.readMessage(
            _instance.sipBaseConfig,
            ondewoVtsi013.SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 6:
          _instance.active = _reader.readBool();
          break;
        case 7:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 8:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Listener.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Listener, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.sipBaseConfig) {
      _writer.writeMessage(
        3,
        _instance.sipBaseConfig as any,
        ondewoVtsi013.SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(5, _instance.vtsiProjectName);
    }
    if (_instance.active) {
      _writer.writeBool(6, _instance.active);
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(7, _instance.sipStatusType);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _callName: string;
  private _sipBaseConfig?: ondewoVtsi013.SipBaseConfig;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _vtsiProjectName: string;
  private _active: boolean;
  private _sipStatusType: ondewoSip012.SipStatus.StatusType;
  private _createdAt?: googleProtobuf005.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Listener to deeply clone from
   */
  constructor(_value?: RecursivePartial<Listener.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipBaseConfig = _value.sipBaseConfig
      ? new ondewoVtsi013.SipBaseConfig(_value.sipBaseConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.active = _value.active;
    this.sipStatusType = _value.sipStatusType;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    Listener.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get sipBaseConfig(): ondewoVtsi013.SipBaseConfig | undefined {
    return this._sipBaseConfig;
  }
  set sipBaseConfig(value: ondewoVtsi013.SipBaseConfig | undefined) {
    this._sipBaseConfig = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get sipStatusType(): ondewoSip012.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip012.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Listener.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Listener.AsObject {
    return {
      name: this.name,
      callName: this.callName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toObject()
        : undefined,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      vtsiProjectName: this.vtsiProjectName,
      active: this.active,
      sipStatusType: this.sipStatusType,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined
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
  ): Listener.AsProtobufJSON {
    return {
      name: this.name,
      callName: this.callName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      vtsiProjectName: this.vtsiProjectName,
      active: this.active,
      sipStatusType:
        ondewoSip012.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module Listener {
  /**
   * Standard JavaScript object representation for Listener
   */
  export interface AsObject {
    name: string;
    callName: string;
    sipBaseConfig?: ondewoVtsi013.SipBaseConfig.AsObject;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    vtsiProjectName: string;
    active: boolean;
    sipStatusType: ondewoSip012.SipStatus.StatusType;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for Listener
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipBaseConfig: ondewoVtsi013.SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    vtsiProjectName: string;
    active: boolean;
    sipStatusType: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.Caller
 */
export class Caller implements GrpcMessage {
  static id = 'ondewo.vtsi.Caller';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Caller();
    Caller.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Caller) {
    _instance.name = _instance.name || '';
    _instance.callName = _instance.callName || '';
    _instance.sipCallerConfig = _instance.sipCallerConfig || undefined;
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.active = _instance.active || false;
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.pooled = _instance.pooled || false;
    _instance.campaignName = _instance.campaignName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Caller, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.sipCallerConfig = new ondewoVtsi013.SipCallerConfig();
          _reader.readMessage(
            _instance.sipCallerConfig,
            ondewoVtsi013.SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 6:
          _instance.active = _reader.readBool();
          break;
        case 7:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 8:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.pooled = _reader.readBool();
          break;
        case 10:
          _instance.campaignName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Caller.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Caller, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.sipCallerConfig) {
      _writer.writeMessage(
        3,
        _instance.sipCallerConfig as any,
        ondewoVtsi013.SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(5, _instance.vtsiProjectName);
    }
    if (_instance.active) {
      _writer.writeBool(6, _instance.active);
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(7, _instance.sipStatusType);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.pooled) {
      _writer.writeBool(9, _instance.pooled);
    }
    if (_instance.campaignName) {
      _writer.writeString(10, _instance.campaignName);
    }
  }

  private _name: string;
  private _callName: string;
  private _sipCallerConfig?: ondewoVtsi013.SipCallerConfig;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _vtsiProjectName: string;
  private _active: boolean;
  private _sipStatusType: ondewoSip012.SipStatus.StatusType;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _pooled: boolean;
  private _campaignName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Caller to deeply clone from
   */
  constructor(_value?: RecursivePartial<Caller.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipCallerConfig = _value.sipCallerConfig
      ? new ondewoVtsi013.SipCallerConfig(_value.sipCallerConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.active = _value.active;
    this.sipStatusType = _value.sipStatusType;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.pooled = _value.pooled;
    this.campaignName = _value.campaignName;
    Caller.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get sipCallerConfig(): ondewoVtsi013.SipCallerConfig | undefined {
    return this._sipCallerConfig;
  }
  set sipCallerConfig(value: ondewoVtsi013.SipCallerConfig | undefined) {
    this._sipCallerConfig = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get sipStatusType(): ondewoSip012.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip012.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get pooled(): boolean {
    return this._pooled;
  }
  set pooled(value: boolean) {
    this._pooled = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Caller.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Caller.AsObject {
    return {
      name: this.name,
      callName: this.callName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toObject()
        : undefined,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      vtsiProjectName: this.vtsiProjectName,
      active: this.active,
      sipStatusType: this.sipStatusType,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      pooled: this.pooled,
      campaignName: this.campaignName
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
  ): Caller.AsProtobufJSON {
    return {
      name: this.name,
      callName: this.callName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      vtsiProjectName: this.vtsiProjectName,
      active: this.active,
      sipStatusType:
        ondewoSip012.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      pooled: this.pooled,
      campaignName: this.campaignName
    };
  }
}
export module Caller {
  /**
   * Standard JavaScript object representation for Caller
   */
  export interface AsObject {
    name: string;
    callName: string;
    sipCallerConfig?: ondewoVtsi013.SipCallerConfig.AsObject;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    vtsiProjectName: string;
    active: boolean;
    sipStatusType: ondewoSip012.SipStatus.StatusType;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    pooled: boolean;
    campaignName: string;
  }

  /**
   * Protobuf JSON representation for Caller
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipCallerConfig: ondewoVtsi013.SipCallerConfig.AsProtobufJSON | null;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    vtsiProjectName: string;
    active: boolean;
    sipStatusType: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    pooled: boolean;
    campaignName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartListenerRequest
 */
export class StartListenerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartListenerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartListenerRequest();
    StartListenerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartListenerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.sipBaseConfig = _instance.sipBaseConfig || undefined;
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartListenerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.sipBaseConfig = new ondewoVtsi013.SipBaseConfig();
          _reader.readMessage(
            _instance.sipBaseConfig,
            ondewoVtsi013.SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StartListenerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartListenerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.sipBaseConfig) {
      _writer.writeMessage(
        2,
        _instance.sipBaseConfig as any,
        ondewoVtsi013.SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        3,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(5, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _sipBaseConfig?: ondewoVtsi013.SipBaseConfig;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartListenerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.sipBaseConfig = _value.sipBaseConfig
      ? new ondewoVtsi013.SipBaseConfig(_value.sipBaseConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    StartListenerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get sipBaseConfig(): ondewoVtsi013.SipBaseConfig | undefined {
    return this._sipBaseConfig;
  }
  set sipBaseConfig(value: ondewoVtsi013.SipBaseConfig | undefined) {
    this._sipBaseConfig = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    StartListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartListenerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toObject()
        : undefined,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StartListenerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module StartListenerRequest {
  /**
   * Standard JavaScript object representation for StartListenerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    sipBaseConfig?: ondewoVtsi013.SipBaseConfig.AsObject;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StartListenerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    sipBaseConfig: ondewoVtsi013.SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartListenerResponse
 */
export class StartListenerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartListenerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartListenerResponse();
    StartListenerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartListenerResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.listener = _instance.listener || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartListenerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.listener = new Listener();
          _reader.readMessage(
            _instance.listener,
            Listener.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StartListenerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartListenerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.listener) {
      _writer.writeMessage(
        2,
        _instance.listener as any,
        Listener.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _listener?: Listener;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartListenerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartListenerResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.listener = _value.listener ? new Listener(_value.listener) : undefined;
    this.errorMessage = _value.errorMessage;
    StartListenerResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get listener(): Listener | undefined {
    return this._listener;
  }
  set listener(value: Listener | undefined) {
    this._listener = value;
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
    StartListenerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartListenerResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listener: this.listener ? this.listener.toObject() : undefined,
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
  ): StartListenerResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listener: this.listener ? this.listener.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage
    };
  }
}
export module StartListenerResponse {
  /**
   * Standard JavaScript object representation for StartListenerResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    listener?: Listener.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StartListenerResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    listener: Listener.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartListenersRequest
 */
export class StartListenersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartListenersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartListenersRequest();
    StartListenersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartListenersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.listenerRequests = _instance.listenerRequests || [];
    _instance.idempotencyKey = _instance.idempotencyKey || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartListenersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartListenerRequest();
          _reader.readMessage(
            messageInitializer2,
            StartListenerRequest.deserializeBinaryFromReader
          );
          (_instance.listenerRequests = _instance.listenerRequests || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.idempotencyKey = _reader.readString();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StartListenersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartListenersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.listenerRequests && _instance.listenerRequests.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.listenerRequests as any,
        StartListenerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(3, _instance.idempotencyKey);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(5, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _listenerRequests?: StartListenerRequest[];
  private _idempotencyKey: string;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartListenersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.listenerRequests = (_value.listenerRequests || []).map(
      m => new StartListenerRequest(m)
    );
    this.idempotencyKey = _value.idempotencyKey;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    StartListenersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get listenerRequests(): StartListenerRequest[] | undefined {
    return this._listenerRequests;
  }
  set listenerRequests(value: StartListenerRequest[] | undefined) {
    this._listenerRequests = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    StartListenersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartListenersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerRequests: (this.listenerRequests || []).map(m => m.toObject()),
      idempotencyKey: this.idempotencyKey,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StartListenersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerRequests: (this.listenerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      idempotencyKey: this.idempotencyKey,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module StartListenersRequest {
  /**
   * Standard JavaScript object representation for StartListenersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    listenerRequests?: StartListenerRequest.AsObject[];
    idempotencyKey: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StartListenersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    listenerRequests: StartListenerRequest.AsProtobufJSON[] | null;
    idempotencyKey: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartListenersResponse
 */
export class StartListenersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartListenersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartListenersResponse();
    StartListenersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartListenersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.listenerResponses = _instance.listenerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartListenersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartListenerResponse();
          _reader.readMessage(
            messageInitializer2,
            StartListenerResponse.deserializeBinaryFromReader
          );
          (_instance.listenerResponses =
            _instance.listenerResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StartListenersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartListenersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.listenerResponses && _instance.listenerResponses.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.listenerResponses as any,
        StartListenerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _listenerResponses?: StartListenerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartListenersResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.listenerResponses = (_value.listenerResponses || []).map(
      m => new StartListenerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    StartListenersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get listenerResponses(): StartListenerResponse[] | undefined {
    return this._listenerResponses;
  }
  set listenerResponses(value: StartListenerResponse[] | undefined) {
    this._listenerResponses = value;
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
    StartListenersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartListenersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerResponses: (this.listenerResponses || []).map(m => m.toObject()),
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
  ): StartListenersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerResponses: (this.listenerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module StartListenersResponse {
  /**
   * Standard JavaScript object representation for StartListenersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    listenerResponses?: StartListenerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StartListenersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    listenerResponses: StartListenerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartCallerRequest
 */
export class StartCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartCallerRequest();
    StartCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.sipCallerConfig = _instance.sipCallerConfig || undefined;
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.sipCallerConfig = new ondewoVtsi013.SipCallerConfig();
          _reader.readMessage(
            _instance.sipCallerConfig,
            ondewoVtsi013.SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StartCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.sipCallerConfig) {
      _writer.writeMessage(
        2,
        _instance.sipCallerConfig as any,
        ondewoVtsi013.SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        3,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(5, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _sipCallerConfig?: ondewoVtsi013.SipCallerConfig;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.sipCallerConfig = _value.sipCallerConfig
      ? new ondewoVtsi013.SipCallerConfig(_value.sipCallerConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    StartCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get sipCallerConfig(): ondewoVtsi013.SipCallerConfig | undefined {
    return this._sipCallerConfig;
  }
  set sipCallerConfig(value: ondewoVtsi013.SipCallerConfig | undefined) {
    this._sipCallerConfig = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    StartCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toObject()
        : undefined,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StartCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module StartCallerRequest {
  /**
   * Standard JavaScript object representation for StartCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    sipCallerConfig?: ondewoVtsi013.SipCallerConfig.AsObject;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StartCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    sipCallerConfig: ondewoVtsi013.SipCallerConfig.AsProtobufJSON | null;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartCallerResponse
 */
export class StartCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartCallerResponse();
    StartCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartCallerResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.caller = _instance.caller || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.caller = new Caller();
          _reader.readMessage(
            _instance.caller,
            Caller.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StartCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.caller) {
      _writer.writeMessage(
        2,
        _instance.caller as any,
        Caller.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _caller?: Caller;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCallerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCallerResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.caller = _value.caller ? new Caller(_value.caller) : undefined;
    this.errorMessage = _value.errorMessage;
    StartCallerResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get caller(): Caller | undefined {
    return this._caller;
  }
  set caller(value: Caller | undefined) {
    this._caller = value;
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
    StartCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartCallerResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      caller: this.caller ? this.caller.toObject() : undefined,
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
  ): StartCallerResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      caller: this.caller ? this.caller.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage
    };
  }
}
export module StartCallerResponse {
  /**
   * Standard JavaScript object representation for StartCallerResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    caller?: Caller.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StartCallerResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    caller: Caller.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartCallersRequest
 */
export class StartCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartCallersRequest();
    StartCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callerRequests = _instance.callerRequests || [];
    _instance.idempotencyKey = _instance.idempotencyKey || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartCallerRequest();
          _reader.readMessage(
            messageInitializer2,
            StartCallerRequest.deserializeBinaryFromReader
          );
          (_instance.callerRequests = _instance.callerRequests || []).push(
            messageInitializer2
          );
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StartCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callerRequests && _instance.callerRequests.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.callerRequests as any,
        StartCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(6, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _callerRequests?: StartCallerRequest[];
  private _idempotencyKey: string;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCallersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callerRequests = (_value.callerRequests || []).map(
      m => new StartCallerRequest(m)
    );
    this.idempotencyKey = _value.idempotencyKey;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    StartCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callerRequests(): StartCallerRequest[] | undefined {
    return this._callerRequests;
  }
  set callerRequests(value: StartCallerRequest[] | undefined) {
    this._callerRequests = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    StartCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerRequests: (this.callerRequests || []).map(m => m.toObject()),
      idempotencyKey: this.idempotencyKey,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StartCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerRequests: (this.callerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      idempotencyKey: this.idempotencyKey,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module StartCallersRequest {
  /**
   * Standard JavaScript object representation for StartCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callerRequests?: StartCallerRequest.AsObject[];
    idempotencyKey: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StartCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callerRequests: StartCallerRequest.AsProtobufJSON[] | null;
    idempotencyKey: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartCallersResponse
 */
export class StartCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartCallersResponse();
    StartCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartCallersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callerResponses = _instance.callerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartCallerResponse();
          _reader.readMessage(
            messageInitializer2,
            StartCallerResponse.deserializeBinaryFromReader
          );
          (_instance.callerResponses = _instance.callerResponses || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StartCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callerResponses && _instance.callerResponses.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.callerResponses as any,
        StartCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _callerResponses?: StartCallerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCallersResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callerResponses = (_value.callerResponses || []).map(
      m => new StartCallerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    StartCallersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callerResponses(): StartCallerResponse[] | undefined {
    return this._callerResponses;
  }
  set callerResponses(value: StartCallerResponse[] | undefined) {
    this._callerResponses = value;
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
    StartCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartCallersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerResponses: (this.callerResponses || []).map(m => m.toObject()),
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
  ): StartCallersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerResponses: (this.callerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module StartCallersResponse {
  /**
   * Standard JavaScript object representation for StartCallersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callerResponses?: StartCallerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StartCallersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callerResponses: StartCallerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallersRequest
 */
export class ListCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallersRequest();
    ListCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;

    _instance.pageSize = _instance.pageSize || 0;
    _instance.activeOnly = _instance.activeOnly || false;
    _instance.sipStatusTypes = _instance.sipStatusTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.campaignName = _reader.readString();
          break;
        case 6:
          _instance.campaignDisplayName = _reader.readString();
          break;
        case 7:
          _instance.pageSize = _reader.readInt32();
          break;
        case 8:
          _instance.activeOnly = _reader.readBool();
          break;
        case 9:
          _reader.readPackableEnumInto(
            (_instance.sipStatusTypes = _instance.sipStatusTypes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.campaignName || _instance.campaignName === '') {
      _writer.writeString(5, _instance.campaignName);
    }
    if (_instance.campaignDisplayName || _instance.campaignDisplayName === '') {
      _writer.writeString(6, _instance.campaignDisplayName);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(7, _instance.pageSize);
    }
    if (_instance.activeOnly) {
      _writer.writeBool(8, _instance.activeOnly);
    }
    if (_instance.sipStatusTypes && _instance.sipStatusTypes.length) {
      _writer.writePackedEnum(9, _instance.sipStatusTypes);
    }
  }

  private _vtsiProjectName: string;
  private _pageToken: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _campaignName: string;
  private _campaignDisplayName: string;
  private _pageSize: number;
  private _activeOnly: boolean;
  private _sipStatusTypes: ondewoSip012.SipStatus.StatusType[];

  private _campaign: ListCallersRequest.CampaignCase =
    ListCallersRequest.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageToken = _value.pageToken;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.campaignName = _value.campaignName;
    this.campaignDisplayName = _value.campaignDisplayName;
    this.pageSize = _value.pageSize;
    this.activeOnly = _value.activeOnly;
    this.sipStatusTypes = (_value.sipStatusTypes || []).slice();
    ListCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignDisplayName = undefined;
      this._campaign = ListCallersRequest.CampaignCase.campaignName;
    }
    this._campaignName = value;
  }
  get campaignDisplayName(): string {
    return this._campaignDisplayName;
  }
  set campaignDisplayName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignName = undefined;
      this._campaign = ListCallersRequest.CampaignCase.campaignDisplayName;
    }
    this._campaignDisplayName = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get activeOnly(): boolean {
    return this._activeOnly;
  }
  set activeOnly(value: boolean) {
    this._activeOnly = value;
  }
  get sipStatusTypes(): ondewoSip012.SipStatus.StatusType[] {
    return this._sipStatusTypes;
  }
  set sipStatusTypes(value: ondewoSip012.SipStatus.StatusType[]) {
    this._sipStatusTypes = value;
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
    ListCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView: this.callView,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      campaignName: this.campaignName,
      campaignDisplayName: this.campaignDisplayName,
      pageSize: this.pageSize,
      activeOnly: this.activeOnly,
      sipStatusTypes: (this.sipStatusTypes || []).slice()
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
  ): ListCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      campaignName:
        this.campaignName === null || this.campaignName === undefined
          ? null
          : this.campaignName,
      campaignDisplayName:
        this.campaignDisplayName === null ||
        this.campaignDisplayName === undefined
          ? null
          : this.campaignDisplayName,
      pageSize: this.pageSize,
      activeOnly: this.activeOnly,
      sipStatusTypes: (this.sipStatusTypes || []).map(
        v => ondewoSip012.SipStatus.StatusType[v]
      )
    };
  }
}
export module ListCallersRequest {
  /**
   * Standard JavaScript object representation for ListCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    pageToken: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    campaignName: string;
    campaignDisplayName: string;
    pageSize: number;
    activeOnly: boolean;
    sipStatusTypes: ondewoSip012.SipStatus.StatusType[];
  }

  /**
   * Protobuf JSON representation for ListCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageToken: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    campaignName: string | null;
    campaignDisplayName: string | null;
    pageSize: number;
    activeOnly: boolean;
    sipStatusTypes: string[];
  }
  export enum CampaignCase {
    none = 0,
    campaignName = 1,
    campaignDisplayName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallersResponse
 */
export class ListCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallersResponse();
    ListCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallersResponse) {
    _instance.callers = _instance.callers || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalSize = _instance.totalSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Caller();
          _reader.readMessage(
            messageInitializer1,
            Caller.deserializeBinaryFromReader
          );
          (_instance.callers = _instance.callers || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.totalSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.callers && _instance.callers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.callers as any,
        Caller.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.totalSize) {
      _writer.writeInt32(3, _instance.totalSize);
    }
  }

  private _callers?: Caller[];
  private _nextPageToken: string;
  private _totalSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallersResponse.AsObject>) {
    _value = _value || {};
    this.callers = (_value.callers || []).map(m => new Caller(m));
    this.nextPageToken = _value.nextPageToken;
    this.totalSize = _value.totalSize;
    ListCallersResponse.refineValues(this);
  }
  get callers(): Caller[] | undefined {
    return this._callers;
  }
  set callers(value: Caller[] | undefined) {
    this._callers = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalSize(): number {
    return this._totalSize;
  }
  set totalSize(value: number) {
    this._totalSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallersResponse.AsObject {
    return {
      callers: (this.callers || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
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
  ): ListCallersResponse.AsProtobufJSON {
    return {
      callers: (this.callers || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
    };
  }
}
export module ListCallersResponse {
  /**
   * Standard JavaScript object representation for ListCallersResponse
   */
  export interface AsObject {
    callers?: Caller.AsObject[];
    nextPageToken: string;
    totalSize: number;
  }

  /**
   * Protobuf JSON representation for ListCallersResponse
   */
  export interface AsProtobufJSON {
    callers: Caller.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalSize: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCallerRequest
 */
export class GetCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCallerRequest();
    GetCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    GetCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView: this.callView,
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
  ): GetCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetCallerRequest {
  /**
   * Standard JavaScript object representation for GetCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListListenersRequest
 */
export class ListListenersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListListenersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListListenersRequest();
    ListListenersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListListenersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.activeOnly = _instance.activeOnly || false;
    _instance.sipStatusTypes = _instance.sipStatusTypes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListListenersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.pageSize = _reader.readInt32();
          break;
        case 6:
          _instance.activeOnly = _reader.readBool();
          break;
        case 7:
          _reader.readPackableEnumInto(
            (_instance.sipStatusTypes = _instance.sipStatusTypes || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListListenersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListListenersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(5, _instance.pageSize);
    }
    if (_instance.activeOnly) {
      _writer.writeBool(6, _instance.activeOnly);
    }
    if (_instance.sipStatusTypes && _instance.sipStatusTypes.length) {
      _writer.writePackedEnum(7, _instance.sipStatusTypes);
    }
  }

  private _vtsiProjectName: string;
  private _pageToken: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _pageSize: number;
  private _activeOnly: boolean;
  private _sipStatusTypes: ondewoSip012.SipStatus.StatusType[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListListenersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageToken = _value.pageToken;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.activeOnly = _value.activeOnly;
    this.sipStatusTypes = (_value.sipStatusTypes || []).slice();
    ListListenersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get activeOnly(): boolean {
    return this._activeOnly;
  }
  set activeOnly(value: boolean) {
    this._activeOnly = value;
  }
  get sipStatusTypes(): ondewoSip012.SipStatus.StatusType[] {
    return this._sipStatusTypes;
  }
  set sipStatusTypes(value: ondewoSip012.SipStatus.StatusType[]) {
    this._sipStatusTypes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListListenersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListListenersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView: this.callView,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      pageSize: this.pageSize,
      activeOnly: this.activeOnly,
      sipStatusTypes: (this.sipStatusTypes || []).slice()
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
  ): ListListenersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      activeOnly: this.activeOnly,
      sipStatusTypes: (this.sipStatusTypes || []).map(
        v => ondewoSip012.SipStatus.StatusType[v]
      )
    };
  }
}
export module ListListenersRequest {
  /**
   * Standard JavaScript object representation for ListListenersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    pageToken: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    pageSize: number;
    activeOnly: boolean;
    sipStatusTypes: ondewoSip012.SipStatus.StatusType[];
  }

  /**
   * Protobuf JSON representation for ListListenersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageToken: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    activeOnly: boolean;
    sipStatusTypes: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.ListListenersResponse
 */
export class ListListenersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListListenersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListListenersResponse();
    ListListenersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListListenersResponse) {
    _instance.listeners = _instance.listeners || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalSize = _instance.totalSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListListenersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Listener();
          _reader.readMessage(
            messageInitializer1,
            Listener.deserializeBinaryFromReader
          );
          (_instance.listeners = _instance.listeners || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.totalSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ListListenersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListListenersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.listeners && _instance.listeners.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.listeners as any,
        Listener.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.totalSize) {
      _writer.writeInt32(3, _instance.totalSize);
    }
  }

  private _listeners?: Listener[];
  private _nextPageToken: string;
  private _totalSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListListenersResponse.AsObject>) {
    _value = _value || {};
    this.listeners = (_value.listeners || []).map(m => new Listener(m));
    this.nextPageToken = _value.nextPageToken;
    this.totalSize = _value.totalSize;
    ListListenersResponse.refineValues(this);
  }
  get listeners(): Listener[] | undefined {
    return this._listeners;
  }
  set listeners(value: Listener[] | undefined) {
    this._listeners = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalSize(): number {
    return this._totalSize;
  }
  set totalSize(value: number) {
    this._totalSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListListenersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListListenersResponse.AsObject {
    return {
      listeners: (this.listeners || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
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
  ): ListListenersResponse.AsProtobufJSON {
    return {
      listeners: (this.listeners || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
    };
  }
}
export module ListListenersResponse {
  /**
   * Standard JavaScript object representation for ListListenersResponse
   */
  export interface AsObject {
    listeners?: Listener.AsObject[];
    nextPageToken: string;
    totalSize: number;
  }

  /**
   * Protobuf JSON representation for ListListenersResponse
   */
  export interface AsProtobufJSON {
    listeners: Listener.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalSize: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetListenerRequest
 */
export class GetListenerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetListenerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetListenerRequest();
    GetListenerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetListenerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetListenerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetListenerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetListenerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetListenerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    GetListenerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetListenerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView: this.callView,
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
  ): GetListenerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetListenerRequest {
  /**
   * Standard JavaScript object representation for GetListenerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetListenerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopListenerRequest
 */
export class StopListenerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopListenerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopListenerRequest();
    StopListenerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopListenerRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopListenerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopListenerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopListenerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StopListenerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopListenerRequest.AsObject {
    return {
      name: this.name,
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
  ): StopListenerRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StopListenerRequest {
  /**
   * Standard JavaScript object representation for StopListenerRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StopListenerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopListenerResponse
 */
export class StopListenerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopListenerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopListenerResponse();
    StopListenerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopListenerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopListenerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopListenerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopListenerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    StopListenerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    StopListenerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopListenerResponse.AsObject {
    return {
      name: this.name,
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
  ): StopListenerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module StopListenerResponse {
  /**
   * Standard JavaScript object representation for StopListenerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopListenerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopListenersRequest
 */
export class StopListenersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopListenersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopListenersRequest();
    StopListenersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopListenersRequest) {
    _instance.names = _instance.names || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopListenersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopListenersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopListenersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
  }

  private _names: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    StopListenersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopListenersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopListenersRequest.AsObject {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StopListenersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module StopListenersRequest {
  /**
   * Standard JavaScript object representation for StopListenersRequest
   */
  export interface AsObject {
    names: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for StopListenersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    vtsiProjectName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopListenersResponse
 */
export class StopListenersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopListenersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopListenersResponse();
    StopListenersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopListenersResponse) {
    _instance.stopListenerResponses = _instance.stopListenerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopListenersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new StopListenerResponse();
          _reader.readMessage(
            messageInitializer1,
            StopListenerResponse.deserializeBinaryFromReader
          );
          (_instance.stopListenerResponses =
            _instance.stopListenerResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopListenersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopListenersResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.stopListenerResponses &&
      _instance.stopListenerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.stopListenerResponses as any,
        StopListenerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _stopListenerResponses?: StopListenerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenersResponse.AsObject>) {
    _value = _value || {};
    this.stopListenerResponses = (_value.stopListenerResponses || []).map(
      m => new StopListenerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    StopListenersResponse.refineValues(this);
  }
  get stopListenerResponses(): StopListenerResponse[] | undefined {
    return this._stopListenerResponses;
  }
  set stopListenerResponses(value: StopListenerResponse[] | undefined) {
    this._stopListenerResponses = value;
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
    StopListenersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopListenersResponse.AsObject {
    return {
      stopListenerResponses: (this.stopListenerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): StopListenersResponse.AsProtobufJSON {
    return {
      stopListenerResponses: (this.stopListenerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module StopListenersResponse {
  /**
   * Standard JavaScript object representation for StopListenersResponse
   */
  export interface AsObject {
    stopListenerResponses?: StopListenerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopListenersResponse
   */
  export interface AsProtobufJSON {
    stopListenerResponses: StopListenerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallerRequest
 */
export class StopCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallerRequest();
    StopCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallerRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StopCallerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallerRequest.AsObject {
    return {
      name: this.name,
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
  ): StopCallerRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StopCallerRequest {
  /**
   * Standard JavaScript object representation for StopCallerRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StopCallerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallerResponse
 */
export class StopCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallerResponse();
    StopCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    StopCallerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    StopCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallerResponse.AsObject {
    return {
      name: this.name,
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
  ): StopCallerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module StopCallerResponse {
  /**
   * Standard JavaScript object representation for StopCallerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopCallerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallersRequest
 */
export class StopCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallersRequest();
    StopCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallersRequest) {
    _instance.names = _instance.names || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
  }

  private _names: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    StopCallersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallersRequest.AsObject {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): StopCallersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module StopCallersRequest {
  /**
   * Standard JavaScript object representation for StopCallersRequest
   */
  export interface AsObject {
    names: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for StopCallersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    vtsiProjectName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallersResponse
 */
export class StopCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallersResponse();
    StopCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallersResponse) {
    _instance.stopCallerResponses = _instance.stopCallerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new StopCallerResponse();
          _reader.readMessage(
            messageInitializer1,
            StopCallerResponse.deserializeBinaryFromReader
          );
          (_instance.stopCallerResponses =
            _instance.stopCallerResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.stopCallerResponses && _instance.stopCallerResponses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.stopCallerResponses as any,
        StopCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _stopCallerResponses?: StopCallerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallersResponse.AsObject>) {
    _value = _value || {};
    this.stopCallerResponses = (_value.stopCallerResponses || []).map(
      m => new StopCallerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    StopCallersResponse.refineValues(this);
  }
  get stopCallerResponses(): StopCallerResponse[] | undefined {
    return this._stopCallerResponses;
  }
  set stopCallerResponses(value: StopCallerResponse[] | undefined) {
    this._stopCallerResponses = value;
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
    StopCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallersResponse.AsObject {
    return {
      stopCallerResponses: (this.stopCallerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): StopCallersResponse.AsProtobufJSON {
    return {
      stopCallerResponses: (this.stopCallerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module StopCallersResponse {
  /**
   * Standard JavaScript object representation for StopCallersResponse
   */
  export interface AsObject {
    stopCallerResponses?: StopCallerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopCallersResponse
   */
  export interface AsProtobufJSON {
    stopCallerResponses: StopCallerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteListenerRequest
 */
export class DeleteListenerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteListenerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteListenerRequest();
    DeleteListenerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteListenerRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteListenerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteListenerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteListenerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    DeleteListenerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteListenerRequest.AsObject {
    return {
      name: this.name,
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
  ): DeleteListenerRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module DeleteListenerRequest {
  /**
   * Standard JavaScript object representation for DeleteListenerRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for DeleteListenerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteListenerResponse
 */
export class DeleteListenerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteListenerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteListenerResponse();
    DeleteListenerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteListenerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteListenerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteListenerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteListenerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    DeleteListenerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    DeleteListenerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteListenerResponse.AsObject {
    return {
      name: this.name,
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
  ): DeleteListenerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteListenerResponse {
  /**
   * Standard JavaScript object representation for DeleteListenerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteListenerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteListenersRequest
 */
export class DeleteListenersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteListenersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteListenersRequest();
    DeleteListenersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteListenersRequest) {
    _instance.names = _instance.names || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteListenersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteListenersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteListenersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
  }

  private _names: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    DeleteListenersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteListenersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteListenersRequest.AsObject {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): DeleteListenersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module DeleteListenersRequest {
  /**
   * Standard JavaScript object representation for DeleteListenersRequest
   */
  export interface AsObject {
    names: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for DeleteListenersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    vtsiProjectName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteListenersResponse
 */
export class DeleteListenersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteListenersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteListenersResponse();
    DeleteListenersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteListenersResponse) {
    _instance.deleteListenerResponses = _instance.deleteListenerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteListenersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new DeleteListenerResponse();
          _reader.readMessage(
            messageInitializer1,
            DeleteListenerResponse.deserializeBinaryFromReader
          );
          (_instance.deleteListenerResponses =
            _instance.deleteListenerResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteListenersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteListenersResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.deleteListenerResponses &&
      _instance.deleteListenerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteListenerResponses as any,
        DeleteListenerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _deleteListenerResponses?: DeleteListenerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenersResponse.AsObject>) {
    _value = _value || {};
    this.deleteListenerResponses = (_value.deleteListenerResponses || []).map(
      m => new DeleteListenerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    DeleteListenersResponse.refineValues(this);
  }
  get deleteListenerResponses(): DeleteListenerResponse[] | undefined {
    return this._deleteListenerResponses;
  }
  set deleteListenerResponses(value: DeleteListenerResponse[] | undefined) {
    this._deleteListenerResponses = value;
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
    DeleteListenersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteListenersResponse.AsObject {
    return {
      deleteListenerResponses: (this.deleteListenerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): DeleteListenersResponse.AsProtobufJSON {
    return {
      deleteListenerResponses: (this.deleteListenerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteListenersResponse {
  /**
   * Standard JavaScript object representation for DeleteListenersResponse
   */
  export interface AsObject {
    deleteListenerResponses?: DeleteListenerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteListenersResponse
   */
  export interface AsProtobufJSON {
    deleteListenerResponses: DeleteListenerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallerRequest
 */
export class DeleteCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallerRequest();
    DeleteCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallerRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    DeleteCallerRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallerRequest.AsObject {
    return {
      name: this.name,
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
  ): DeleteCallerRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module DeleteCallerRequest {
  /**
   * Standard JavaScript object representation for DeleteCallerRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for DeleteCallerRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallerResponse
 */
export class DeleteCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallerResponse();
    DeleteCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallerResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _name: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    DeleteCallerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    DeleteCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallerResponse.AsObject {
    return {
      name: this.name,
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
  ): DeleteCallerResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteCallerResponse {
  /**
   * Standard JavaScript object representation for DeleteCallerResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteCallerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallersRequest
 */
export class DeleteCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallersRequest();
    DeleteCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallersRequest) {
    _instance.names = _instance.names || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(1, _instance.names);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
  }

  private _names: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.vtsiProjectName = _value.vtsiProjectName;
    DeleteCallersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallersRequest.AsObject {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): DeleteCallersRequest.AsProtobufJSON {
    return {
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module DeleteCallersRequest {
  /**
   * Standard JavaScript object representation for DeleteCallersRequest
   */
  export interface AsObject {
    names: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for DeleteCallersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    vtsiProjectName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallersResponse
 */
export class DeleteCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallersResponse();
    DeleteCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallersResponse) {
    _instance.deleteCallerResponses = _instance.deleteCallerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new DeleteCallerResponse();
          _reader.readMessage(
            messageInitializer1,
            DeleteCallerResponse.deserializeBinaryFromReader
          );
          (_instance.deleteCallerResponses =
            _instance.deleteCallerResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallersResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.deleteCallerResponses &&
      _instance.deleteCallerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.deleteCallerResponses as any,
        DeleteCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _deleteCallerResponses?: DeleteCallerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallersResponse.AsObject>) {
    _value = _value || {};
    this.deleteCallerResponses = (_value.deleteCallerResponses || []).map(
      m => new DeleteCallerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    DeleteCallersResponse.refineValues(this);
  }
  get deleteCallerResponses(): DeleteCallerResponse[] | undefined {
    return this._deleteCallerResponses;
  }
  set deleteCallerResponses(value: DeleteCallerResponse[] | undefined) {
    this._deleteCallerResponses = value;
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
    DeleteCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallersResponse.AsObject {
    return {
      deleteCallerResponses: (this.deleteCallerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): DeleteCallersResponse.AsProtobufJSON {
    return {
      deleteCallerResponses: (this.deleteCallerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteCallersResponse {
  /**
   * Standard JavaScript object representation for DeleteCallersResponse
   */
  export interface AsObject {
    deleteCallerResponses?: DeleteCallerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteCallersResponse
   */
  export interface AsProtobufJSON {
    deleteCallerResponses: DeleteCallerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallerRequest
 */
export class UpdateCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallerRequest();
    UpdateCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallerRequest) {
    _instance.caller = _instance.caller || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.caller = new Caller();
          _reader.readMessage(
            _instance.caller,
            Caller.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.caller) {
      _writer.writeMessage(
        1,
        _instance.caller as any,
        Caller.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(4, _instance.validateOnly);
    }
  }

  private _caller?: Caller;
  private _updateMask?: googleProtobuf006.FieldMask;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallerRequest.AsObject>) {
    _value = _value || {};
    this.caller = _value.caller ? new Caller(_value.caller) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf006.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    UpdateCallerRequest.refineValues(this);
  }
  get caller(): Caller | undefined {
    return this._caller;
  }
  set caller(value: Caller | undefined) {
    this._caller = value;
  }
  get updateMask(): googleProtobuf006.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf006.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    UpdateCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallerRequest.AsObject {
    return {
      caller: this.caller ? this.caller.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): UpdateCallerRequest.AsProtobufJSON {
    return {
      caller: this.caller ? this.caller.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module UpdateCallerRequest {
  /**
   * Standard JavaScript object representation for UpdateCallerRequest
   */
  export interface AsObject {
    caller?: Caller.AsObject;
    updateMask?: googleProtobuf006.FieldMask.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for UpdateCallerRequest
   */
  export interface AsProtobufJSON {
    caller: Caller.AsProtobufJSON | null;
    updateMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallerResponse
 */
export class UpdateCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallerResponse();
    UpdateCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallerResponse) {
    _instance.name = _instance.name || '';
    _instance.caller = _instance.caller || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.caller = new Caller();
          _reader.readMessage(
            _instance.caller,
            Caller.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.caller) {
      _writer.writeMessage(
        2,
        _instance.caller as any,
        Caller.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _name: string;
  private _caller?: Caller;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.caller = _value.caller ? new Caller(_value.caller) : undefined;
    this.errorMessage = _value.errorMessage;
    UpdateCallerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get caller(): Caller | undefined {
    return this._caller;
  }
  set caller(value: Caller | undefined) {
    this._caller = value;
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
    UpdateCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallerResponse.AsObject {
    return {
      name: this.name,
      caller: this.caller ? this.caller.toObject() : undefined,
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
  ): UpdateCallerResponse.AsProtobufJSON {
    return {
      name: this.name,
      caller: this.caller ? this.caller.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateCallerResponse {
  /**
   * Standard JavaScript object representation for UpdateCallerResponse
   */
  export interface AsObject {
    name: string;
    caller?: Caller.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateCallerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    caller: Caller.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallersRequest
 */
export class UpdateCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallersRequest();
    UpdateCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateCallerRequests = _instance.updateCallerRequests || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateCallerRequest();
          _reader.readMessage(
            messageInitializer2,
            UpdateCallerRequest.deserializeBinaryFromReader
          );
          (_instance.updateCallerRequests =
            _instance.updateCallerRequests || []).push(messageInitializer2);
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.updateCallerRequests &&
      _instance.updateCallerRequests.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateCallerRequests as any,
        UpdateCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(4, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _updateCallerRequests?: UpdateCallerRequest[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateCallerRequests = (_value.updateCallerRequests || []).map(
      m => new UpdateCallerRequest(m)
    );
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    UpdateCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateCallerRequests(): UpdateCallerRequest[] | undefined {
    return this._updateCallerRequests;
  }
  set updateCallerRequests(value: UpdateCallerRequest[] | undefined) {
    this._updateCallerRequests = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    UpdateCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallerRequests: (this.updateCallerRequests || []).map(m =>
        m.toObject()
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): UpdateCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallerRequests: (this.updateCallerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module UpdateCallersRequest {
  /**
   * Standard JavaScript object representation for UpdateCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateCallerRequests?: UpdateCallerRequest.AsObject[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for UpdateCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateCallerRequests: UpdateCallerRequest.AsProtobufJSON[] | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallersResponse
 */
export class UpdateCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallersResponse();
    UpdateCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateCallerResponses = _instance.updateCallerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateCallerResponse();
          _reader.readMessage(
            messageInitializer2,
            UpdateCallerResponse.deserializeBinaryFromReader
          );
          (_instance.updateCallerResponses =
            _instance.updateCallerResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.updateCallerResponses &&
      _instance.updateCallerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateCallerResponses as any,
        UpdateCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _updateCallerResponses?: UpdateCallerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallersResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateCallerResponses = (_value.updateCallerResponses || []).map(
      m => new UpdateCallerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    UpdateCallersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateCallerResponses(): UpdateCallerResponse[] | undefined {
    return this._updateCallerResponses;
  }
  set updateCallerResponses(value: UpdateCallerResponse[] | undefined) {
    this._updateCallerResponses = value;
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
    UpdateCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallerResponses: (this.updateCallerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): UpdateCallersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallerResponses: (this.updateCallerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateCallersResponse {
  /**
   * Standard JavaScript object representation for UpdateCallersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateCallerResponses?: UpdateCallerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateCallersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateCallerResponses: UpdateCallerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateListenerRequest
 */
export class UpdateListenerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateListenerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateListenerRequest();
    UpdateListenerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateListenerRequest) {
    _instance.listener = _instance.listener || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateListenerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.listener = new Listener();
          _reader.readMessage(
            _instance.listener,
            Listener.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateListenerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateListenerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.listener) {
      _writer.writeMessage(
        1,
        _instance.listener as any,
        Listener.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(4, _instance.validateOnly);
    }
  }

  private _listener?: Listener;
  private _updateMask?: googleProtobuf006.FieldMask;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateListenerRequest.AsObject>) {
    _value = _value || {};
    this.listener = _value.listener ? new Listener(_value.listener) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf006.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    UpdateListenerRequest.refineValues(this);
  }
  get listener(): Listener | undefined {
    return this._listener;
  }
  set listener(value: Listener | undefined) {
    this._listener = value;
  }
  get updateMask(): googleProtobuf006.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf006.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    UpdateListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateListenerRequest.AsObject {
    return {
      listener: this.listener ? this.listener.toObject() : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): UpdateListenerRequest.AsProtobufJSON {
    return {
      listener: this.listener ? this.listener.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module UpdateListenerRequest {
  /**
   * Standard JavaScript object representation for UpdateListenerRequest
   */
  export interface AsObject {
    listener?: Listener.AsObject;
    updateMask?: googleProtobuf006.FieldMask.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for UpdateListenerRequest
   */
  export interface AsProtobufJSON {
    listener: Listener.AsProtobufJSON | null;
    updateMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateListenerResponse
 */
export class UpdateListenerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateListenerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateListenerResponse();
    UpdateListenerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateListenerResponse) {
    _instance.name = _instance.name || '';
    _instance.listener = _instance.listener || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateListenerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.listener = new Listener();
          _reader.readMessage(
            _instance.listener,
            Listener.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateListenerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateListenerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.listener) {
      _writer.writeMessage(
        2,
        _instance.listener as any,
        Listener.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _name: string;
  private _listener?: Listener;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateListenerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateListenerResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.listener = _value.listener ? new Listener(_value.listener) : undefined;
    this.errorMessage = _value.errorMessage;
    UpdateListenerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get listener(): Listener | undefined {
    return this._listener;
  }
  set listener(value: Listener | undefined) {
    this._listener = value;
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
    UpdateListenerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateListenerResponse.AsObject {
    return {
      name: this.name,
      listener: this.listener ? this.listener.toObject() : undefined,
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
  ): UpdateListenerResponse.AsProtobufJSON {
    return {
      name: this.name,
      listener: this.listener ? this.listener.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateListenerResponse {
  /**
   * Standard JavaScript object representation for UpdateListenerResponse
   */
  export interface AsObject {
    name: string;
    listener?: Listener.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateListenerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    listener: Listener.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateListenersRequest
 */
export class UpdateListenersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateListenersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateListenersRequest();
    UpdateListenersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateListenersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateListenerRequests = _instance.updateListenerRequests || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateListenersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateListenerRequest();
          _reader.readMessage(
            messageInitializer2,
            UpdateListenerRequest.deserializeBinaryFromReader
          );
          (_instance.updateListenerRequests =
            _instance.updateListenerRequests || []).push(messageInitializer2);
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateListenersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateListenersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.updateListenerRequests &&
      _instance.updateListenerRequests.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateListenerRequests as any,
        UpdateListenerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(4, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _updateListenerRequests?: UpdateListenerRequest[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateListenersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateListenerRequests = (_value.updateListenerRequests || []).map(
      m => new UpdateListenerRequest(m)
    );
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.validateOnly = _value.validateOnly;
    UpdateListenersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateListenerRequests(): UpdateListenerRequest[] | undefined {
    return this._updateListenerRequests;
  }
  set updateListenerRequests(value: UpdateListenerRequest[] | undefined) {
    this._updateListenerRequests = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
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
    UpdateListenersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateListenersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateListenerRequests: (this.updateListenerRequests || []).map(m =>
        m.toObject()
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): UpdateListenersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateListenerRequests: (this.updateListenerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module UpdateListenersRequest {
  /**
   * Standard JavaScript object representation for UpdateListenersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateListenerRequests?: UpdateListenerRequest.AsObject[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for UpdateListenersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateListenerRequests: UpdateListenerRequest.AsProtobufJSON[] | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateListenersResponse
 */
export class UpdateListenersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateListenersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateListenersResponse();
    UpdateListenersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateListenersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateListenerResponses = _instance.updateListenerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateListenersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateListenerResponse();
          _reader.readMessage(
            messageInitializer2,
            UpdateListenerResponse.deserializeBinaryFromReader
          );
          (_instance.updateListenerResponses =
            _instance.updateListenerResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateListenersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateListenersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.updateListenerResponses &&
      _instance.updateListenerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateListenerResponses as any,
        UpdateListenerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _updateListenerResponses?: UpdateListenerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateListenersResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateListenerResponses = (_value.updateListenerResponses || []).map(
      m => new UpdateListenerResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    UpdateListenersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateListenerResponses(): UpdateListenerResponse[] | undefined {
    return this._updateListenerResponses;
  }
  set updateListenerResponses(value: UpdateListenerResponse[] | undefined) {
    this._updateListenerResponses = value;
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
    UpdateListenersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateListenersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateListenerResponses: (this.updateListenerResponses || []).map(m =>
        m.toObject()
      ),
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
  ): UpdateListenersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateListenerResponses: (this.updateListenerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateListenersResponse {
  /**
   * Standard JavaScript object representation for UpdateListenersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateListenerResponses?: UpdateListenerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateListenersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateListenerResponses: UpdateListenerResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartScheduledCallerRequest
 */
export class StartScheduledCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartScheduledCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartScheduledCallerRequest();
    StartScheduledCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartScheduledCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.request = _instance.request || undefined;
    _instance.scheduledTime = _instance.scheduledTime || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartScheduledCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.request = new StartCallerRequest();
          _reader.readMessage(
            _instance.request,
            StartCallerRequest.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.scheduledTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StartScheduledCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartScheduledCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.request) {
      _writer.writeMessage(
        2,
        _instance.request as any,
        StartCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        3,
        _instance.scheduledTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _request?: StartCallerRequest;
  private _scheduledTime?: googleProtobuf005.Timestamp;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartScheduledCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartScheduledCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.request = _value.request
      ? new StartCallerRequest(_value.request)
      : undefined;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf005.Timestamp(_value.scheduledTime)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StartScheduledCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get request(): StartCallerRequest | undefined {
    return this._request;
  }
  set request(value: StartCallerRequest | undefined) {
    this._request = value;
  }
  get scheduledTime(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledTime = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StartScheduledCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartScheduledCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      request: this.request ? this.request.toObject() : undefined,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toObject()
        : undefined,
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
  ): StartScheduledCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      request: this.request ? this.request.toProtobufJSON(options) : null,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StartScheduledCallerRequest {
  /**
   * Standard JavaScript object representation for StartScheduledCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    request?: StartCallerRequest.AsObject;
    scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StartScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    request: StartCallerRequest.AsProtobufJSON | null;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartScheduledCallersRequest
 */
export class StartScheduledCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StartScheduledCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartScheduledCallersRequest();
    StartScheduledCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartScheduledCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCallerRequests = _instance.scheduledCallerRequests || [];
    _instance.idempotencyKey = _instance.idempotencyKey || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartScheduledCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartScheduledCallerRequest();
          _reader.readMessage(
            messageInitializer2,
            StartScheduledCallerRequest.deserializeBinaryFromReader
          );
          (_instance.scheduledCallerRequests =
            _instance.scheduledCallerRequests || []).push(messageInitializer2);
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StartScheduledCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartScheduledCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.scheduledCallerRequests &&
      _instance.scheduledCallerRequests.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.scheduledCallerRequests as any,
        StartScheduledCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCallerRequests?: StartScheduledCallerRequest[];
  private _idempotencyKey: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartScheduledCallersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StartScheduledCallersRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCallerRequests = (_value.scheduledCallerRequests || []).map(
      m => new StartScheduledCallerRequest(m)
    );
    this.idempotencyKey = _value.idempotencyKey;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StartScheduledCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCallerRequests(): StartScheduledCallerRequest[] | undefined {
    return this._scheduledCallerRequests;
  }
  set scheduledCallerRequests(
    value: StartScheduledCallerRequest[] | undefined
  ) {
    this._scheduledCallerRequests = value;
  }
  get idempotencyKey(): string {
    return this._idempotencyKey;
  }
  set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StartScheduledCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartScheduledCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerRequests: (this.scheduledCallerRequests || []).map(m =>
        m.toObject()
      ),
      idempotencyKey: this.idempotencyKey,
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
  ): StartScheduledCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerRequests: (this.scheduledCallerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      idempotencyKey: this.idempotencyKey,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StartScheduledCallersRequest {
  /**
   * Standard JavaScript object representation for StartScheduledCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCallerRequests?: StartScheduledCallerRequest.AsObject[];
    idempotencyKey: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StartScheduledCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerRequests:
      | StartScheduledCallerRequest.AsProtobufJSON[]
      | null;
    idempotencyKey: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StartScheduledCallersResponse
 */
export class StartScheduledCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartScheduledCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartScheduledCallersResponse();
    StartScheduledCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartScheduledCallersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCallerResponses =
      _instance.scheduledCallerResponses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartScheduledCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartScheduledCallerResponse();
          _reader.readMessage(
            messageInitializer2,
            StartScheduledCallerResponse.deserializeBinaryFromReader
          );
          (_instance.scheduledCallerResponses =
            _instance.scheduledCallerResponses || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    StartScheduledCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartScheduledCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.scheduledCallerResponses &&
      _instance.scheduledCallerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.scheduledCallerResponses as any,
        StartScheduledCallerResponse.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCallerResponses?: StartScheduledCallerResponse[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartScheduledCallersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StartScheduledCallersResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCallerResponses = (_value.scheduledCallerResponses || []).map(
      m => new StartScheduledCallerResponse(m)
    );
    StartScheduledCallersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCallerResponses(): StartScheduledCallerResponse[] | undefined {
    return this._scheduledCallerResponses;
  }
  set scheduledCallerResponses(
    value: StartScheduledCallerResponse[] | undefined
  ) {
    this._scheduledCallerResponses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StartScheduledCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartScheduledCallersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerResponses: (this.scheduledCallerResponses || []).map(m =>
        m.toObject()
      )
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
  ): StartScheduledCallersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerResponses: (this.scheduledCallerResponses || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module StartScheduledCallersResponse {
  /**
   * Standard JavaScript object representation for StartScheduledCallersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCallerResponses?: StartScheduledCallerResponse.AsObject[];
  }

  /**
   * Protobuf JSON representation for StartScheduledCallersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerResponses:
      | StartScheduledCallerResponse.AsProtobufJSON[]
      | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.AddCallersToCampaignRequest
 */
export class AddCallersToCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.AddCallersToCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddCallersToCampaignRequest();
    AddCallersToCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddCallersToCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callerRequests = _instance.callerRequests || [];
    _instance.campaignAssignment = _instance.campaignAssignment || undefined;
    _instance.idempotencyKey = _instance.idempotencyKey || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddCallersToCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartCallerRequest();
          _reader.readMessage(
            messageInitializer2,
            StartCallerRequest.deserializeBinaryFromReader
          );
          (_instance.callerRequests = _instance.callerRequests || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.campaignAssignment = new ondewoVtsi014.CampaignAssignment();
          _reader.readMessage(
            _instance.campaignAssignment,
            ondewoVtsi014.CampaignAssignment.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddCallersToCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddCallersToCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callerRequests && _instance.callerRequests.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.callerRequests as any,
        StartCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.campaignAssignment) {
      _writer.writeMessage(
        3,
        _instance.campaignAssignment as any,
        ondewoVtsi014.CampaignAssignment.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
  }

  private _vtsiProjectName: string;
  private _callerRequests?: StartCallerRequest[];
  private _campaignAssignment?: ondewoVtsi014.CampaignAssignment;
  private _idempotencyKey: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddCallersToCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddCallersToCampaignRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callerRequests = (_value.callerRequests || []).map(
      m => new StartCallerRequest(m)
    );
    this.campaignAssignment = _value.campaignAssignment
      ? new ondewoVtsi014.CampaignAssignment(_value.campaignAssignment)
      : undefined;
    this.idempotencyKey = _value.idempotencyKey;
    AddCallersToCampaignRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callerRequests(): StartCallerRequest[] | undefined {
    return this._callerRequests;
  }
  set callerRequests(value: StartCallerRequest[] | undefined) {
    this._callerRequests = value;
  }
  get campaignAssignment(): ondewoVtsi014.CampaignAssignment | undefined {
    return this._campaignAssignment;
  }
  set campaignAssignment(value: ondewoVtsi014.CampaignAssignment | undefined) {
    this._campaignAssignment = value;
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
    AddCallersToCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddCallersToCampaignRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerRequests: (this.callerRequests || []).map(m => m.toObject()),
      campaignAssignment: this.campaignAssignment
        ? this.campaignAssignment.toObject()
        : undefined,
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
  ): AddCallersToCampaignRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerRequests: (this.callerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      campaignAssignment: this.campaignAssignment
        ? this.campaignAssignment.toProtobufJSON(options)
        : null,
      idempotencyKey: this.idempotencyKey
    };
  }
}
export module AddCallersToCampaignRequest {
  /**
   * Standard JavaScript object representation for AddCallersToCampaignRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callerRequests?: StartCallerRequest.AsObject[];
    campaignAssignment?: ondewoVtsi014.CampaignAssignment.AsObject;
    idempotencyKey: string;
  }

  /**
   * Protobuf JSON representation for AddCallersToCampaignRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callerRequests: StartCallerRequest.AsProtobufJSON[] | null;
    campaignAssignment: ondewoVtsi014.CampaignAssignment.AsProtobufJSON | null;
    idempotencyKey: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.AddCallersToCampaignResponse
 */
export class AddCallersToCampaignResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.AddCallersToCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddCallersToCampaignResponse();
    AddCallersToCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddCallersToCampaignResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.campaign = _instance.campaign || undefined;
    _instance.campaignCallNames = _instance.campaignCallNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddCallersToCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.campaign = new ondewoVtsi014.Campaign();
          _reader.readMessage(
            _instance.campaign,
            ondewoVtsi014.Campaign.deserializeBinaryFromReader
          );
          break;
        case 3:
          (_instance.campaignCallNames =
            _instance.campaignCallNames || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    AddCallersToCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddCallersToCampaignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.campaign) {
      _writer.writeMessage(
        2,
        _instance.campaign as any,
        ondewoVtsi014.Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.campaignCallNames && _instance.campaignCallNames.length) {
      _writer.writeRepeatedString(3, _instance.campaignCallNames);
    }
  }

  private _vtsiProjectName: string;
  private _campaign?: ondewoVtsi014.Campaign;
  private _campaignCallNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddCallersToCampaignResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddCallersToCampaignResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.campaign = _value.campaign
      ? new ondewoVtsi014.Campaign(_value.campaign)
      : undefined;
    this.campaignCallNames = (_value.campaignCallNames || []).slice();
    AddCallersToCampaignResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get campaign(): ondewoVtsi014.Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: ondewoVtsi014.Campaign | undefined) {
    this._campaign = value;
  }
  get campaignCallNames(): string[] {
    return this._campaignCallNames;
  }
  set campaignCallNames(value: string[]) {
    this._campaignCallNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddCallersToCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddCallersToCampaignResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaign: this.campaign ? this.campaign.toObject() : undefined,
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
  ): AddCallersToCampaignResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null,
      campaignCallNames: (this.campaignCallNames || []).slice()
    };
  }
}
export module AddCallersToCampaignResponse {
  /**
   * Standard JavaScript object representation for AddCallersToCampaignResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    campaign?: ondewoVtsi014.Campaign.AsObject;
    campaignCallNames: string[];
  }

  /**
   * Protobuf JSON representation for AddCallersToCampaignResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    campaign: ondewoVtsi014.Campaign.AsProtobufJSON | null;
    campaignCallNames: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.AddScheduledCallersToCampaignRequest
 */
export class AddScheduledCallersToCampaignRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.AddScheduledCallersToCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddScheduledCallersToCampaignRequest();
    AddScheduledCallersToCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddScheduledCallersToCampaignRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCallerRequests = _instance.scheduledCallerRequests || [];
    _instance.campaignAssignment = _instance.campaignAssignment || undefined;
    _instance.idempotencyKey = _instance.idempotencyKey || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddScheduledCallersToCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartScheduledCallerRequest();
          _reader.readMessage(
            messageInitializer2,
            StartScheduledCallerRequest.deserializeBinaryFromReader
          );
          (_instance.scheduledCallerRequests =
            _instance.scheduledCallerRequests || []).push(messageInitializer2);
          break;
        case 3:
          _instance.campaignAssignment = new ondewoVtsi014.CampaignAssignment();
          _reader.readMessage(
            _instance.campaignAssignment,
            ondewoVtsi014.CampaignAssignment.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.idempotencyKey = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddScheduledCallersToCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddScheduledCallersToCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.scheduledCallerRequests &&
      _instance.scheduledCallerRequests.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.scheduledCallerRequests as any,
        StartScheduledCallerRequest.serializeBinaryToWriter
      );
    }
    if (_instance.campaignAssignment) {
      _writer.writeMessage(
        3,
        _instance.campaignAssignment as any,
        ondewoVtsi014.CampaignAssignment.serializeBinaryToWriter
      );
    }
    if (_instance.idempotencyKey) {
      _writer.writeString(4, _instance.idempotencyKey);
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCallerRequests?: StartScheduledCallerRequest[];
  private _campaignAssignment?: ondewoVtsi014.CampaignAssignment;
  private _idempotencyKey: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddScheduledCallersToCampaignRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddScheduledCallersToCampaignRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCallerRequests = (_value.scheduledCallerRequests || []).map(
      m => new StartScheduledCallerRequest(m)
    );
    this.campaignAssignment = _value.campaignAssignment
      ? new ondewoVtsi014.CampaignAssignment(_value.campaignAssignment)
      : undefined;
    this.idempotencyKey = _value.idempotencyKey;
    AddScheduledCallersToCampaignRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCallerRequests(): StartScheduledCallerRequest[] | undefined {
    return this._scheduledCallerRequests;
  }
  set scheduledCallerRequests(
    value: StartScheduledCallerRequest[] | undefined
  ) {
    this._scheduledCallerRequests = value;
  }
  get campaignAssignment(): ondewoVtsi014.CampaignAssignment | undefined {
    return this._campaignAssignment;
  }
  set campaignAssignment(value: ondewoVtsi014.CampaignAssignment | undefined) {
    this._campaignAssignment = value;
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
    AddScheduledCallersToCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddScheduledCallersToCampaignRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerRequests: (this.scheduledCallerRequests || []).map(m =>
        m.toObject()
      ),
      campaignAssignment: this.campaignAssignment
        ? this.campaignAssignment.toObject()
        : undefined,
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
  ): AddScheduledCallersToCampaignRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerRequests: (this.scheduledCallerRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      campaignAssignment: this.campaignAssignment
        ? this.campaignAssignment.toProtobufJSON(options)
        : null,
      idempotencyKey: this.idempotencyKey
    };
  }
}
export module AddScheduledCallersToCampaignRequest {
  /**
   * Standard JavaScript object representation for AddScheduledCallersToCampaignRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCallerRequests?: StartScheduledCallerRequest.AsObject[];
    campaignAssignment?: ondewoVtsi014.CampaignAssignment.AsObject;
    idempotencyKey: string;
  }

  /**
   * Protobuf JSON representation for AddScheduledCallersToCampaignRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerRequests:
      | StartScheduledCallerRequest.AsProtobufJSON[]
      | null;
    campaignAssignment: ondewoVtsi014.CampaignAssignment.AsProtobufJSON | null;
    idempotencyKey: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.AddScheduledCallersToCampaignResponse
 */
export class AddScheduledCallersToCampaignResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.AddScheduledCallersToCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddScheduledCallersToCampaignResponse();
    AddScheduledCallersToCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddScheduledCallersToCampaignResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCallerResponses =
      _instance.scheduledCallerResponses || [];
    _instance.campaign = _instance.campaign || undefined;
    _instance.campaignCallNames = _instance.campaignCallNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddScheduledCallersToCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new StartScheduledCallerResponse();
          _reader.readMessage(
            messageInitializer2,
            StartScheduledCallerResponse.deserializeBinaryFromReader
          );
          (_instance.scheduledCallerResponses =
            _instance.scheduledCallerResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.campaign = new ondewoVtsi014.Campaign();
          _reader.readMessage(
            _instance.campaign,
            ondewoVtsi014.Campaign.deserializeBinaryFromReader
          );
          break;
        case 4:
          (_instance.campaignCallNames =
            _instance.campaignCallNames || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    AddScheduledCallersToCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddScheduledCallersToCampaignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.scheduledCallerResponses &&
      _instance.scheduledCallerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.scheduledCallerResponses as any,
        StartScheduledCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.campaign) {
      _writer.writeMessage(
        3,
        _instance.campaign as any,
        ondewoVtsi014.Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.campaignCallNames && _instance.campaignCallNames.length) {
      _writer.writeRepeatedString(4, _instance.campaignCallNames);
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCallerResponses?: StartScheduledCallerResponse[];
  private _campaign?: ondewoVtsi014.Campaign;
  private _campaignCallNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddScheduledCallersToCampaignResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddScheduledCallersToCampaignResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCallerResponses = (_value.scheduledCallerResponses || []).map(
      m => new StartScheduledCallerResponse(m)
    );
    this.campaign = _value.campaign
      ? new ondewoVtsi014.Campaign(_value.campaign)
      : undefined;
    this.campaignCallNames = (_value.campaignCallNames || []).slice();
    AddScheduledCallersToCampaignResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCallerResponses(): StartScheduledCallerResponse[] | undefined {
    return this._scheduledCallerResponses;
  }
  set scheduledCallerResponses(
    value: StartScheduledCallerResponse[] | undefined
  ) {
    this._scheduledCallerResponses = value;
  }
  get campaign(): ondewoVtsi014.Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: ondewoVtsi014.Campaign | undefined) {
    this._campaign = value;
  }
  get campaignCallNames(): string[] {
    return this._campaignCallNames;
  }
  set campaignCallNames(value: string[]) {
    this._campaignCallNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddScheduledCallersToCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddScheduledCallersToCampaignResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerResponses: (this.scheduledCallerResponses || []).map(m =>
        m.toObject()
      ),
      campaign: this.campaign ? this.campaign.toObject() : undefined,
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
  ): AddScheduledCallersToCampaignResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerResponses: (this.scheduledCallerResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null,
      campaignCallNames: (this.campaignCallNames || []).slice()
    };
  }
}
export module AddScheduledCallersToCampaignResponse {
  /**
   * Standard JavaScript object representation for AddScheduledCallersToCampaignResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCallerResponses?: StartScheduledCallerResponse.AsObject[];
    campaign?: ondewoVtsi014.Campaign.AsObject;
    campaignCallNames: string[];
  }

  /**
   * Protobuf JSON representation for AddScheduledCallersToCampaignResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerResponses:
      | StartScheduledCallerResponse.AsProtobufJSON[]
      | null;
    campaign: ondewoVtsi014.Campaign.AsProtobufJSON | null;
    campaignCallNames: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.StartScheduledCallerResponse
 */
export class StartScheduledCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StartScheduledCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StartScheduledCallerResponse();
    StartScheduledCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StartScheduledCallerResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCaller = _instance.scheduledCaller || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StartScheduledCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.scheduledCaller = new ScheduledCaller();
          _reader.readMessage(
            _instance.scheduledCaller,
            ScheduledCaller.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StartScheduledCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StartScheduledCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.scheduledCaller) {
      _writer.writeMessage(
        2,
        _instance.scheduledCaller as any,
        ScheduledCaller.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCaller?: ScheduledCaller;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartScheduledCallerResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StartScheduledCallerResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCaller = _value.scheduledCaller
      ? new ScheduledCaller(_value.scheduledCaller)
      : undefined;
    this.errorMessage = _value.errorMessage;
    StartScheduledCallerResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCaller(): ScheduledCaller | undefined {
    return this._scheduledCaller;
  }
  set scheduledCaller(value: ScheduledCaller | undefined) {
    this._scheduledCaller = value;
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
    StartScheduledCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StartScheduledCallerResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCaller: this.scheduledCaller
        ? this.scheduledCaller.toObject()
        : undefined,
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
  ): StartScheduledCallerResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCaller: this.scheduledCaller
        ? this.scheduledCaller.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module StartScheduledCallerResponse {
  /**
   * Standard JavaScript object representation for StartScheduledCallerResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCaller?: ScheduledCaller.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StartScheduledCallerResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCaller: ScheduledCaller.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ScheduledCaller
 */
export class ScheduledCaller implements GrpcMessage {
  static id = 'ondewo.vtsi.ScheduledCaller';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ScheduledCaller();
    ScheduledCaller.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ScheduledCaller) {
    _instance.name = _instance.name || '';
    _instance.callName = _instance.callName || '';
    _instance.sipConfig = _instance.sipConfig || undefined;
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.scheduledTime = _instance.scheduledTime || undefined;
    _instance.sipCallerConfig = _instance.sipCallerConfig || undefined;
    _instance.status = _instance.status || 0;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.firedAt = _instance.firedAt || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.campaignName = _instance.campaignName || '';
    _instance.retryOfScheduledCallerName =
      _instance.retryOfScheduledCallerName || '';
    _instance.retriedByScheduledCallerName =
      _instance.retriedByScheduledCallerName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ScheduledCaller,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.sipConfig = new ondewoVtsi013.SipBaseConfig();
          _reader.readMessage(
            _instance.sipConfig,
            ondewoVtsi013.SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.scheduledTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.sipCallerConfig = new ondewoVtsi013.SipCallerConfig();
          _reader.readMessage(
            _instance.sipCallerConfig,
            ondewoVtsi013.SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.status = _reader.readEnum();
          break;
        case 8:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 9:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.firedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.firedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.errorMessage = _reader.readString();
          break;
        case 12:
          _instance.campaignName = _reader.readString();
          break;
        case 13:
          _instance.retryOfScheduledCallerName = _reader.readString();
          break;
        case 14:
          _instance.retriedByScheduledCallerName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ScheduledCaller.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ScheduledCaller,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.sipConfig) {
      _writer.writeMessage(
        3,
        _instance.sipConfig as any,
        ondewoVtsi013.SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        5,
        _instance.scheduledTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.sipCallerConfig) {
      _writer.writeMessage(
        6,
        _instance.sipCallerConfig as any,
        ondewoVtsi013.SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.status) {
      _writer.writeEnum(7, _instance.status);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(8, _instance.vtsiProjectName);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        9,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.firedAt) {
      _writer.writeMessage(
        10,
        _instance.firedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(11, _instance.errorMessage);
    }
    if (_instance.campaignName) {
      _writer.writeString(12, _instance.campaignName);
    }
    if (_instance.retryOfScheduledCallerName) {
      _writer.writeString(13, _instance.retryOfScheduledCallerName);
    }
    if (_instance.retriedByScheduledCallerName) {
      _writer.writeString(14, _instance.retriedByScheduledCallerName);
    }
  }

  private _name: string;
  private _callName: string;
  private _sipConfig?: ondewoVtsi013.SipBaseConfig;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _scheduledTime?: googleProtobuf005.Timestamp;
  private _sipCallerConfig?: ondewoVtsi013.SipCallerConfig;
  private _status: ScheduledCallerStatus;
  private _vtsiProjectName: string;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _firedAt?: googleProtobuf005.Timestamp;
  private _errorMessage: string;
  private _campaignName: string;
  private _retryOfScheduledCallerName: string;
  private _retriedByScheduledCallerName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ScheduledCaller to deeply clone from
   */
  constructor(_value?: RecursivePartial<ScheduledCaller.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipConfig = _value.sipConfig
      ? new ondewoVtsi013.SipBaseConfig(_value.sipConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf005.Timestamp(_value.scheduledTime)
      : undefined;
    this.sipCallerConfig = _value.sipCallerConfig
      ? new ondewoVtsi013.SipCallerConfig(_value.sipCallerConfig)
      : undefined;
    this.status = _value.status;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.firedAt = _value.firedAt
      ? new googleProtobuf005.Timestamp(_value.firedAt)
      : undefined;
    this.errorMessage = _value.errorMessage;
    this.campaignName = _value.campaignName;
    this.retryOfScheduledCallerName = _value.retryOfScheduledCallerName;
    this.retriedByScheduledCallerName = _value.retriedByScheduledCallerName;
    ScheduledCaller.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get sipConfig(): ondewoVtsi013.SipBaseConfig | undefined {
    return this._sipConfig;
  }
  set sipConfig(value: ondewoVtsi013.SipBaseConfig | undefined) {
    this._sipConfig = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get scheduledTime(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledTime = value;
  }
  get sipCallerConfig(): ondewoVtsi013.SipCallerConfig | undefined {
    return this._sipCallerConfig;
  }
  set sipCallerConfig(value: ondewoVtsi013.SipCallerConfig | undefined) {
    this._sipCallerConfig = value;
  }
  get status(): ScheduledCallerStatus {
    return this._status;
  }
  set status(value: ScheduledCallerStatus) {
    this._status = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get firedAt(): googleProtobuf005.Timestamp | undefined {
    return this._firedAt;
  }
  set firedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._firedAt = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get retryOfScheduledCallerName(): string {
    return this._retryOfScheduledCallerName;
  }
  set retryOfScheduledCallerName(value: string) {
    this._retryOfScheduledCallerName = value;
  }
  get retriedByScheduledCallerName(): string {
    return this._retriedByScheduledCallerName;
  }
  set retriedByScheduledCallerName(value: string) {
    this._retriedByScheduledCallerName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ScheduledCaller.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ScheduledCaller.AsObject {
    return {
      name: this.name,
      callName: this.callName,
      sipConfig: this.sipConfig ? this.sipConfig.toObject() : undefined,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toObject()
        : undefined,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toObject()
        : undefined,
      status: this.status,
      vtsiProjectName: this.vtsiProjectName,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      firedAt: this.firedAt ? this.firedAt.toObject() : undefined,
      errorMessage: this.errorMessage,
      campaignName: this.campaignName,
      retryOfScheduledCallerName: this.retryOfScheduledCallerName,
      retriedByScheduledCallerName: this.retriedByScheduledCallerName
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
  ): ScheduledCaller.AsProtobufJSON {
    return {
      name: this.name,
      callName: this.callName,
      sipConfig: this.sipConfig ? this.sipConfig.toProtobufJSON(options) : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toProtobufJSON(options)
        : null,
      status:
        ScheduledCallerStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      vtsiProjectName: this.vtsiProjectName,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      firedAt: this.firedAt ? this.firedAt.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage,
      campaignName: this.campaignName,
      retryOfScheduledCallerName: this.retryOfScheduledCallerName,
      retriedByScheduledCallerName: this.retriedByScheduledCallerName
    };
  }
}
export module ScheduledCaller {
  /**
   * Standard JavaScript object representation for ScheduledCaller
   */
  export interface AsObject {
    name: string;
    callName: string;
    sipConfig?: ondewoVtsi013.SipBaseConfig.AsObject;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    sipCallerConfig?: ondewoVtsi013.SipCallerConfig.AsObject;
    status: ScheduledCallerStatus;
    vtsiProjectName: string;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    firedAt?: googleProtobuf005.Timestamp.AsObject;
    errorMessage: string;
    campaignName: string;
    retryOfScheduledCallerName: string;
    retriedByScheduledCallerName: string;
  }

  /**
   * Protobuf JSON representation for ScheduledCaller
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipConfig: ondewoVtsi013.SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    sipCallerConfig: ondewoVtsi013.SipCallerConfig.AsProtobufJSON | null;
    status: string;
    vtsiProjectName: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    firedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    errorMessage: string;
    campaignName: string;
    retryOfScheduledCallerName: string;
    retriedByScheduledCallerName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetScheduledCallerRequest
 */
export class GetScheduledCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetScheduledCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetScheduledCallerRequest();
    GetScheduledCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetScheduledCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetScheduledCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetScheduledCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetScheduledCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetScheduledCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetScheduledCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    GetScheduledCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetScheduledCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetScheduledCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView: this.callView,
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
  ): GetScheduledCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetScheduledCallerRequest {
  /**
   * Standard JavaScript object representation for GetScheduledCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListScheduledCallersRequest
 */
export class ListScheduledCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListScheduledCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListScheduledCallersRequest();
    ListScheduledCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListScheduledCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.statuses = _instance.statuses || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.campaignName = _instance.campaignName || '';
    _instance.scheduledAfter = _instance.scheduledAfter || undefined;
    _instance.scheduledBefore = _instance.scheduledBefore || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListScheduledCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _reader.readPackableEnumInto(
            (_instance.statuses = _instance.statuses || [])
          );
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.pageSize = _reader.readInt32();
          break;
        case 7:
          _instance.campaignName = _reader.readString();
          break;
        case 8:
          _instance.scheduledAfter = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledAfter,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.scheduledBefore = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledBefore,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListScheduledCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListScheduledCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedEnum(4, _instance.statuses);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(6, _instance.pageSize);
    }
    if (_instance.campaignName) {
      _writer.writeString(7, _instance.campaignName);
    }
    if (_instance.scheduledAfter) {
      _writer.writeMessage(
        8,
        _instance.scheduledAfter as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.scheduledBefore) {
      _writer.writeMessage(
        9,
        _instance.scheduledBefore as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _pageToken: string;
  private _callView: CallView;
  private _statuses: ScheduledCallerStatus[];
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _pageSize: number;
  private _campaignName: string;
  private _scheduledAfter?: googleProtobuf005.Timestamp;
  private _scheduledBefore?: googleProtobuf005.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListScheduledCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListScheduledCallersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageToken = _value.pageToken;
    this.callView = _value.callView;
    this.statuses = (_value.statuses || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.campaignName = _value.campaignName;
    this.scheduledAfter = _value.scheduledAfter
      ? new googleProtobuf005.Timestamp(_value.scheduledAfter)
      : undefined;
    this.scheduledBefore = _value.scheduledBefore
      ? new googleProtobuf005.Timestamp(_value.scheduledBefore)
      : undefined;
    ListScheduledCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get statuses(): ScheduledCallerStatus[] {
    return this._statuses;
  }
  set statuses(value: ScheduledCallerStatus[]) {
    this._statuses = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get scheduledAfter(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledAfter;
  }
  set scheduledAfter(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledAfter = value;
  }
  get scheduledBefore(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledBefore;
  }
  set scheduledBefore(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledBefore = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListScheduledCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListScheduledCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView: this.callView,
      statuses: (this.statuses || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      pageSize: this.pageSize,
      campaignName: this.campaignName,
      scheduledAfter: this.scheduledAfter
        ? this.scheduledAfter.toObject()
        : undefined,
      scheduledBefore: this.scheduledBefore
        ? this.scheduledBefore.toObject()
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
  ): ListScheduledCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageToken: this.pageToken,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      statuses: (this.statuses || []).map(v => ScheduledCallerStatus[v]),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      campaignName: this.campaignName,
      scheduledAfter: this.scheduledAfter
        ? this.scheduledAfter.toProtobufJSON(options)
        : null,
      scheduledBefore: this.scheduledBefore
        ? this.scheduledBefore.toProtobufJSON(options)
        : null
    };
  }
}
export module ListScheduledCallersRequest {
  /**
   * Standard JavaScript object representation for ListScheduledCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    pageToken: string;
    callView: CallView;
    statuses: ScheduledCallerStatus[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    pageSize: number;
    campaignName: string;
    scheduledAfter?: googleProtobuf005.Timestamp.AsObject;
    scheduledBefore?: googleProtobuf005.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ListScheduledCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageToken: string;
    callView: string;
    statuses: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    campaignName: string;
    scheduledAfter: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    scheduledBefore: googleProtobuf005.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListScheduledCallersResponse
 */
export class ListScheduledCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListScheduledCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListScheduledCallersResponse();
    ListScheduledCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListScheduledCallersResponse) {
    _instance.scheduledCallers = _instance.scheduledCallers || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalSize = _instance.totalSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListScheduledCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ScheduledCaller();
          _reader.readMessage(
            messageInitializer1,
            ScheduledCaller.deserializeBinaryFromReader
          );
          (_instance.scheduledCallers = _instance.scheduledCallers || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.totalSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ListScheduledCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListScheduledCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.scheduledCallers && _instance.scheduledCallers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.scheduledCallers as any,
        ScheduledCaller.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.totalSize) {
      _writer.writeInt32(3, _instance.totalSize);
    }
  }

  private _scheduledCallers?: ScheduledCaller[];
  private _nextPageToken: string;
  private _totalSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListScheduledCallersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListScheduledCallersResponse.AsObject>
  ) {
    _value = _value || {};
    this.scheduledCallers = (_value.scheduledCallers || []).map(
      m => new ScheduledCaller(m)
    );
    this.nextPageToken = _value.nextPageToken;
    this.totalSize = _value.totalSize;
    ListScheduledCallersResponse.refineValues(this);
  }
  get scheduledCallers(): ScheduledCaller[] | undefined {
    return this._scheduledCallers;
  }
  set scheduledCallers(value: ScheduledCaller[] | undefined) {
    this._scheduledCallers = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalSize(): number {
    return this._totalSize;
  }
  set totalSize(value: number) {
    this._totalSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListScheduledCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListScheduledCallersResponse.AsObject {
    return {
      scheduledCallers: (this.scheduledCallers || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
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
  ): ListScheduledCallersResponse.AsProtobufJSON {
    return {
      scheduledCallers: (this.scheduledCallers || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
    };
  }
}
export module ListScheduledCallersResponse {
  /**
   * Standard JavaScript object representation for ListScheduledCallersResponse
   */
  export interface AsObject {
    scheduledCallers?: ScheduledCaller.AsObject[];
    nextPageToken: string;
    totalSize: number;
  }

  /**
   * Protobuf JSON representation for ListScheduledCallersResponse
   */
  export interface AsProtobufJSON {
    scheduledCallers: ScheduledCaller.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalSize: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelScheduledCallerRequest
 */
export class CancelScheduledCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelScheduledCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelScheduledCallerRequest();
    CancelScheduledCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelScheduledCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelScheduledCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CancelScheduledCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelScheduledCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelScheduledCallerRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelScheduledCallerRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    CancelScheduledCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelScheduledCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelScheduledCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
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
  ): CancelScheduledCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module CancelScheduledCallerRequest {
  /**
   * Standard JavaScript object representation for CancelScheduledCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for CancelScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelScheduledCallerResponse
 */
export class CancelScheduledCallerResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelScheduledCallerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelScheduledCallerResponse();
    CancelScheduledCallerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelScheduledCallerResponse) {
    _instance.name = _instance.name || '';
    _instance.status = _instance.status || 0;
    _instance.cancelled = _instance.cancelled || false;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelScheduledCallerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readEnum();
          break;
        case 3:
          _instance.cancelled = _reader.readBool();
          break;
        case 4:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelScheduledCallerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelScheduledCallerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.status) {
      _writer.writeEnum(2, _instance.status);
    }
    if (_instance.cancelled) {
      _writer.writeBool(3, _instance.cancelled);
    }
    if (_instance.errorMessage) {
      _writer.writeString(4, _instance.errorMessage);
    }
  }

  private _name: string;
  private _status: ScheduledCallerStatus;
  private _cancelled: boolean;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelScheduledCallerResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelScheduledCallerResponse.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.status = _value.status;
    this.cancelled = _value.cancelled;
    this.errorMessage = _value.errorMessage;
    CancelScheduledCallerResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get status(): ScheduledCallerStatus {
    return this._status;
  }
  set status(value: ScheduledCallerStatus) {
    this._status = value;
  }
  get cancelled(): boolean {
    return this._cancelled;
  }
  set cancelled(value: boolean) {
    this._cancelled = value;
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
    CancelScheduledCallerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelScheduledCallerResponse.AsObject {
    return {
      name: this.name,
      status: this.status,
      cancelled: this.cancelled,
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
  ): CancelScheduledCallerResponse.AsProtobufJSON {
    return {
      name: this.name,
      status:
        ScheduledCallerStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      cancelled: this.cancelled,
      errorMessage: this.errorMessage
    };
  }
}
export module CancelScheduledCallerResponse {
  /**
   * Standard JavaScript object representation for CancelScheduledCallerResponse
   */
  export interface AsObject {
    name: string;
    status: ScheduledCallerStatus;
    cancelled: boolean;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CancelScheduledCallerResponse
   */
  export interface AsProtobufJSON {
    name: string;
    status: string;
    cancelled: boolean;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelScheduledCallersRequest
 */
export class CancelScheduledCallersRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelScheduledCallersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelScheduledCallersRequest();
    CancelScheduledCallersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelScheduledCallersRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.names = _instance.names || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelScheduledCallersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.names = _instance.names || []).push(_reader.readString());
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CancelScheduledCallersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelScheduledCallersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.names && _instance.names.length) {
      _writer.writeRepeatedString(2, _instance.names);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _names: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelScheduledCallersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelScheduledCallersRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.names = (_value.names || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    CancelScheduledCallersRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelScheduledCallersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelScheduledCallersRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      names: (this.names || []).slice(),
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
  ): CancelScheduledCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      names: (this.names || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module CancelScheduledCallersRequest {
  /**
   * Standard JavaScript object representation for CancelScheduledCallersRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    names: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for CancelScheduledCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    names: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CancelScheduledCallersResponse
 */
export class CancelScheduledCallersResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.CancelScheduledCallersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelScheduledCallersResponse();
    CancelScheduledCallersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelScheduledCallersResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.cancelScheduledCallerResponses =
      _instance.cancelScheduledCallerResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelScheduledCallersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new CancelScheduledCallerResponse();
          _reader.readMessage(
            messageInitializer2,
            CancelScheduledCallerResponse.deserializeBinaryFromReader
          );
          (_instance.cancelScheduledCallerResponses =
            _instance.cancelScheduledCallerResponses || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelScheduledCallersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelScheduledCallersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.cancelScheduledCallerResponses &&
      _instance.cancelScheduledCallerResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.cancelScheduledCallerResponses as any,
        CancelScheduledCallerResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _cancelScheduledCallerResponses?: CancelScheduledCallerResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelScheduledCallersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelScheduledCallersResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.cancelScheduledCallerResponses = (
      _value.cancelScheduledCallerResponses || []
    ).map(m => new CancelScheduledCallerResponse(m));
    this.errorMessage = _value.errorMessage;
    CancelScheduledCallersResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get cancelScheduledCallerResponses():
    | CancelScheduledCallerResponse[]
    | undefined {
    return this._cancelScheduledCallerResponses;
  }
  set cancelScheduledCallerResponses(
    value: CancelScheduledCallerResponse[] | undefined
  ) {
    this._cancelScheduledCallerResponses = value;
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
    CancelScheduledCallersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelScheduledCallersResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      cancelScheduledCallerResponses: (
        this.cancelScheduledCallerResponses || []
      ).map(m => m.toObject()),
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
  ): CancelScheduledCallersResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      cancelScheduledCallerResponses: (
        this.cancelScheduledCallerResponses || []
      ).map(m => m.toProtobufJSON(options)),
      errorMessage: this.errorMessage
    };
  }
}
export module CancelScheduledCallersResponse {
  /**
   * Standard JavaScript object representation for CancelScheduledCallersResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    cancelScheduledCallerResponses?: CancelScheduledCallerResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CancelScheduledCallersResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    cancelScheduledCallerResponses:
      | CancelScheduledCallerResponse.AsProtobufJSON[]
      | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateScheduledCallerRequest
 */
export class UpdateScheduledCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateScheduledCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateScheduledCallerRequest();
    UpdateScheduledCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateScheduledCallerRequest) {
    _instance.scheduledCaller = _instance.scheduledCaller || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateScheduledCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.scheduledCaller = new ScheduledCaller();
          _reader.readMessage(
            _instance.scheduledCaller,
            ScheduledCaller.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateScheduledCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateScheduledCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.scheduledCaller) {
      _writer.writeMessage(
        1,
        _instance.scheduledCaller as any,
        ScheduledCaller.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _scheduledCaller?: ScheduledCaller;
  private _updateMask?: googleProtobuf006.FieldMask;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateScheduledCallerRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateScheduledCallerRequest.AsObject>
  ) {
    _value = _value || {};
    this.scheduledCaller = _value.scheduledCaller
      ? new ScheduledCaller(_value.scheduledCaller)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf006.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    UpdateScheduledCallerRequest.refineValues(this);
  }
  get scheduledCaller(): ScheduledCaller | undefined {
    return this._scheduledCaller;
  }
  set scheduledCaller(value: ScheduledCaller | undefined) {
    this._scheduledCaller = value;
  }
  get updateMask(): googleProtobuf006.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf006.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateScheduledCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateScheduledCallerRequest.AsObject {
    return {
      scheduledCaller: this.scheduledCaller
        ? this.scheduledCaller.toObject()
        : undefined,
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
  ): UpdateScheduledCallerRequest.AsProtobufJSON {
    return {
      scheduledCaller: this.scheduledCaller
        ? this.scheduledCaller.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateScheduledCallerRequest {
  /**
   * Standard JavaScript object representation for UpdateScheduledCallerRequest
   */
  export interface AsObject {
    scheduledCaller?: ScheduledCaller.AsObject;
    updateMask?: googleProtobuf006.FieldMask.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    scheduledCaller: ScheduledCaller.AsProtobufJSON | null;
    updateMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.RetryScheduledCallerRequest
 */
export class RetryScheduledCallerRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.RetryScheduledCallerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RetryScheduledCallerRequest();
    RetryScheduledCallerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RetryScheduledCallerRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.name = _instance.name || '';
    _instance.scheduledTime = _instance.scheduledTime || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RetryScheduledCallerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.scheduledTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RetryScheduledCallerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RetryScheduledCallerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        3,
        _instance.scheduledTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _scheduledTime?: googleProtobuf005.Timestamp;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RetryScheduledCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RetryScheduledCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf005.Timestamp(_value.scheduledTime)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    RetryScheduledCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get scheduledTime(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledTime = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RetryScheduledCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RetryScheduledCallerRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toObject()
        : undefined,
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
  ): RetryScheduledCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module RetryScheduledCallerRequest {
  /**
   * Standard JavaScript object representation for RetryScheduledCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for RetryScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallRequest
 */
export class StopCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallRequest();
    StopCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StopCallRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
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
  ): StopCallRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StopCallRequest {
  /**
   * Standard JavaScript object representation for StopCallRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StopCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallResponse
 */
export class StopCallResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallResponse();
    StopCallResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.errorMessage = _value.errorMessage;
    StopCallResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
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
    StopCallResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
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
  ): StopCallResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      errorMessage: this.errorMessage
    };
  }
}
export module StopCallResponse {
  /**
   * Standard JavaScript object representation for StopCallResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopCallResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallsRequest
 */
export class StopCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallsRequest();
    StopCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callNames = _instance.callNames || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.callNames = _instance.callNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callNames && _instance.callNames.length) {
      _writer.writeRepeatedString(2, _instance.callNames);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _callNames: string[];
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callNames = (_value.callNames || []).slice();
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    StopCallsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callNames(): string[] {
    return this._callNames;
  }
  set callNames(value: string[]) {
    this._callNames = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callNames: (this.callNames || []).slice(),
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
  ): StopCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callNames: (this.callNames || []).slice(),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module StopCallsRequest {
  /**
   * Standard JavaScript object representation for StopCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callNames: string[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for StopCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callNames: string[];
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopCallsResponse
 */
export class StopCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StopCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopCallsResponse();
    StopCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopCallsResponse) {
    _instance.stopCallResponses = _instance.stopCallResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new StopCallResponse();
          _reader.readMessage(
            messageInitializer1,
            StopCallResponse.deserializeBinaryFromReader
          );
          (_instance.stopCallResponses =
            _instance.stopCallResponses || []).push(messageInitializer1);
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StopCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.stopCallResponses && _instance.stopCallResponses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.stopCallResponses as any,
        StopCallResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _stopCallResponses?: StopCallResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallsResponse.AsObject>) {
    _value = _value || {};
    this.stopCallResponses = (_value.stopCallResponses || []).map(
      m => new StopCallResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    StopCallsResponse.refineValues(this);
  }
  get stopCallResponses(): StopCallResponse[] | undefined {
    return this._stopCallResponses;
  }
  set stopCallResponses(value: StopCallResponse[] | undefined) {
    this._stopCallResponses = value;
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
    StopCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallsResponse.AsObject {
    return {
      stopCallResponses: (this.stopCallResponses || []).map(m => m.toObject()),
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
  ): StopCallsResponse.AsProtobufJSON {
    return {
      stopCallResponses: (this.stopCallResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module StopCallsResponse {
  /**
   * Standard JavaScript object representation for StopCallsResponse
   */
  export interface AsObject {
    stopCallResponses?: StopCallResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for StopCallsResponse
   */
  export interface AsProtobufJSON {
    stopCallResponses: StopCallResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StopAllCallsRequest
 */
export class StopAllCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StopAllCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StopAllCallsRequest();
    StopAllCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StopAllCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.callFilter = _instance.callFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StopAllCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.callFilter = new CallFilter();
          _reader.readMessage(
            _instance.callFilter,
            CallFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StopAllCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StopAllCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.callFilter) {
      _writer.writeMessage(
        3,
        _instance.callFilter as any,
        CallFilter.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _callFilter?: CallFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopAllCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopAllCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.callFilter = _value.callFilter
      ? new CallFilter(_value.callFilter)
      : undefined;
    StopAllCallsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get callFilter(): CallFilter | undefined {
    return this._callFilter;
  }
  set callFilter(value: CallFilter | undefined) {
    this._callFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StopAllCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopAllCallsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      callFilter: this.callFilter ? this.callFilter.toObject() : undefined
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
  ): StopAllCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      callFilter: this.callFilter
        ? this.callFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module StopAllCallsRequest {
  /**
   * Standard JavaScript object representation for StopAllCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    callFilter?: CallFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for StopAllCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    callFilter: CallFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.TransferCallRequest
 */
export class TransferCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.TransferCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransferCallRequest();
    TransferCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransferCallRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.transferId = _instance.transferId || '';
    _instance.target = _instance.target || undefined;
    _instance.mode = _instance.mode || 0;
    _instance.headers = _instance.headers || {};
    _instance.ringTimeoutS = _instance.ringTimeoutS || 0;
    _instance.requestId = _instance.requestId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransferCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.transferId = _reader.readString();
          break;
        case 4:
          _instance.target = new CallTarget();
          _reader.readMessage(
            _instance.target,
            CallTarget.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.mode = _reader.readEnum();
          break;
        case 6:
          const msg_6 = {} as any;
          _reader.readMessage(
            msg_6,
            TransferCallRequest.HeadersEntry.deserializeBinaryFromReader
          );
          _instance.headers = _instance.headers || {};
          _instance.headers[msg_6.key] = msg_6.value;
          break;
        case 7:
          _instance.ringTimeoutS = _reader.readInt32();
          break;
        case 8:
          _instance.requestId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TransferCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransferCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.transferId) {
      _writer.writeString(3, _instance.transferId);
    }
    if (_instance.target) {
      _writer.writeMessage(
        4,
        _instance.target as any,
        CallTarget.serializeBinaryToWriter
      );
    }
    if (_instance.mode) {
      _writer.writeEnum(5, _instance.mode);
    }
    if (!!_instance.headers) {
      const keys_6 = Object.keys(_instance.headers as any);

      if (keys_6.length) {
        const repeated_6 = keys_6
          .map(key => ({ key: key, value: (_instance.headers as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          6,
          repeated_6,
          TransferCallRequest.HeadersEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.ringTimeoutS) {
      _writer.writeInt32(7, _instance.ringTimeoutS);
    }
    if (_instance.requestId) {
      _writer.writeString(8, _instance.requestId);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _transferId: string;
  private _target?: CallTarget;
  private _mode: TransferMode;
  private _headers: { [prop: string]: string };
  private _ringTimeoutS: number;
  private _requestId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.transferId = _value.transferId;
    this.target = _value.target ? new CallTarget(_value.target) : undefined;
    this.mode = _value.mode;
    (this.headers = _value!.headers
      ? Object.keys(_value!.headers).reduce(
          (r, k) => ({ ...r, [k]: _value!.headers![k] }),
          {}
        )
      : {}),
      (this.ringTimeoutS = _value.ringTimeoutS);
    this.requestId = _value.requestId;
    TransferCallRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get transferId(): string {
    return this._transferId;
  }
  set transferId(value: string) {
    this._transferId = value;
  }
  get target(): CallTarget | undefined {
    return this._target;
  }
  set target(value: CallTarget | undefined) {
    this._target = value;
  }
  get mode(): TransferMode {
    return this._mode;
  }
  set mode(value: TransferMode) {
    this._mode = value;
  }
  get headers(): { [prop: string]: string } {
    return this._headers;
  }
  set headers(value: { [prop: string]: string }) {
    this._headers = value;
  }
  get ringTimeoutS(): number {
    return this._ringTimeoutS;
  }
  set ringTimeoutS(value: number) {
    this._ringTimeoutS = value;
  }
  get requestId(): string {
    return this._requestId;
  }
  set requestId(value: string) {
    this._requestId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransferCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransferCallRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      transferId: this.transferId,
      target: this.target ? this.target.toObject() : undefined,
      mode: this.mode,
      headers: this.headers
        ? Object.keys(this.headers).reduce(
            (r, k) => ({ ...r, [k]: this.headers![k] }),
            {}
          )
        : {},
      ringTimeoutS: this.ringTimeoutS,
      requestId: this.requestId
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
  ): TransferCallRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      transferId: this.transferId,
      target: this.target ? this.target.toProtobufJSON(options) : null,
      mode:
        TransferMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      headers: this.headers
        ? Object.keys(this.headers).reduce(
            (r, k) => ({ ...r, [k]: this.headers![k] }),
            {}
          )
        : {},
      ringTimeoutS: this.ringTimeoutS,
      requestId: this.requestId
    };
  }
}
export module TransferCallRequest {
  /**
   * Standard JavaScript object representation for TransferCallRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
    target?: CallTarget.AsObject;
    mode: TransferMode;
    headers: { [prop: string]: string };
    ringTimeoutS: number;
    requestId: string;
  }

  /**
   * Protobuf JSON representation for TransferCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
    target: CallTarget.AsProtobufJSON | null;
    mode: string;
    headers: { [prop: string]: string };
    ringTimeoutS: number;
    requestId: string;
  }

  /**
   * Message implementation for ondewo.vtsi.TransferCallRequest.HeadersEntry
   */
  export class HeadersEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.TransferCallRequest.HeadersEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new HeadersEntry();
      HeadersEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: HeadersEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: HeadersEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      HeadersEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: HeadersEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HeadersEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<HeadersEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      HeadersEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      HeadersEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): HeadersEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): HeadersEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module HeadersEntry {
    /**
     * Standard JavaScript object representation for HeadersEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for HeadersEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.CallTarget
 */
export class CallTarget implements GrpcMessage {
  static id = 'ondewo.vtsi.CallTarget';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallTarget();
    CallTarget.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallTarget) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallTarget,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.phoneNumber = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 3:
          _instance.listenerName = _reader.readString();
          break;
        case 4:
          _instance.listenerQueue = new ListenerQueueTarget();
          _reader.readMessage(
            _instance.listenerQueue,
            ListenerQueueTarget.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CallTarget.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CallTarget, _writer: BinaryWriter) {
    if (_instance.phoneNumber || _instance.phoneNumber === '') {
      _writer.writeString(1, _instance.phoneNumber);
    }
    if (
      _instance.softphoneAccountName ||
      _instance.softphoneAccountName === ''
    ) {
      _writer.writeString(2, _instance.softphoneAccountName);
    }
    if (_instance.listenerName || _instance.listenerName === '') {
      _writer.writeString(3, _instance.listenerName);
    }
    if (_instance.listenerQueue) {
      _writer.writeMessage(
        4,
        _instance.listenerQueue as any,
        ListenerQueueTarget.serializeBinaryToWriter
      );
    }
  }

  private _phoneNumber: string;
  private _softphoneAccountName: string;
  private _listenerName: string;
  private _listenerQueue?: ListenerQueueTarget;

  private _target: CallTarget.TargetCase = CallTarget.TargetCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallTarget to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallTarget.AsObject>) {
    _value = _value || {};
    this.phoneNumber = _value.phoneNumber;
    this.softphoneAccountName = _value.softphoneAccountName;
    this.listenerName = _value.listenerName;
    this.listenerQueue = _value.listenerQueue
      ? new ListenerQueueTarget(_value.listenerQueue)
      : undefined;
    CallTarget.refineValues(this);
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    if (value !== undefined && value !== null) {
      this._softphoneAccountName = this._listenerName = this._listenerQueue = undefined;
      this._target = CallTarget.TargetCase.phoneNumber;
    }
    this._phoneNumber = value;
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    if (value !== undefined && value !== null) {
      this._phoneNumber = this._listenerName = this._listenerQueue = undefined;
      this._target = CallTarget.TargetCase.softphoneAccountName;
    }
    this._softphoneAccountName = value;
  }
  get listenerName(): string {
    return this._listenerName;
  }
  set listenerName(value: string) {
    if (value !== undefined && value !== null) {
      this._phoneNumber = this._softphoneAccountName = this._listenerQueue = undefined;
      this._target = CallTarget.TargetCase.listenerName;
    }
    this._listenerName = value;
  }
  get listenerQueue(): ListenerQueueTarget | undefined {
    return this._listenerQueue;
  }
  set listenerQueue(value: ListenerQueueTarget | undefined) {
    if (value !== undefined && value !== null) {
      this._phoneNumber = this._softphoneAccountName = this._listenerName = undefined;
      this._target = CallTarget.TargetCase.listenerQueue;
    }
    this._listenerQueue = value;
  }
  get target() {
    return this._target;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallTarget.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallTarget.AsObject {
    return {
      phoneNumber: this.phoneNumber,
      softphoneAccountName: this.softphoneAccountName,
      listenerName: this.listenerName,
      listenerQueue: this.listenerQueue
        ? this.listenerQueue.toObject()
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
  ): CallTarget.AsProtobufJSON {
    return {
      phoneNumber:
        this.phoneNumber === null || this.phoneNumber === undefined
          ? null
          : this.phoneNumber,
      softphoneAccountName:
        this.softphoneAccountName === null ||
        this.softphoneAccountName === undefined
          ? null
          : this.softphoneAccountName,
      listenerName:
        this.listenerName === null || this.listenerName === undefined
          ? null
          : this.listenerName,
      listenerQueue: this.listenerQueue
        ? this.listenerQueue.toProtobufJSON(options)
        : null
    };
  }
}
export module CallTarget {
  /**
   * Standard JavaScript object representation for CallTarget
   */
  export interface AsObject {
    phoneNumber: string;
    softphoneAccountName: string;
    listenerName: string;
    listenerQueue?: ListenerQueueTarget.AsObject;
  }

  /**
   * Protobuf JSON representation for CallTarget
   */
  export interface AsProtobufJSON {
    phoneNumber: string | null;
    softphoneAccountName: string | null;
    listenerName: string | null;
    listenerQueue: ListenerQueueTarget.AsProtobufJSON | null;
  }
  export enum TargetCase {
    none = 0,
    phoneNumber = 1,
    softphoneAccountName = 2,
    listenerName = 3,
    listenerQueue = 4
  }
}

/**
 * Message implementation for ondewo.vtsi.ListenerQueueTarget
 */
export class ListenerQueueTarget implements GrpcMessage {
  static id = 'ondewo.vtsi.ListenerQueueTarget';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListenerQueueTarget();
    ListenerQueueTarget.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListenerQueueTarget) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListenerQueueTarget,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ListenerQueueTarget.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListenerQueueTarget,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListenerQueueTarget to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListenerQueueTarget.AsObject>) {
    _value = _value || {};
    ListenerQueueTarget.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListenerQueueTarget.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListenerQueueTarget.AsObject {
    return {};
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
  ): ListenerQueueTarget.AsProtobufJSON {
    return {};
  }
}
export module ListenerQueueTarget {
  /**
   * Standard JavaScript object representation for ListenerQueueTarget
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ListenerQueueTarget
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for ondewo.vtsi.TransferCallResponse
 */
export class TransferCallResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.TransferCallResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransferCallResponse();
    TransferCallResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransferCallResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.transferId = _instance.transferId || '';
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.outcome = _instance.outcome || 0;
    _instance.resolvedTarget = _instance.resolvedTarget || '';
    _instance.sipResponseCode = _instance.sipResponseCode || 0;
    _instance.errorReason = _instance.errorReason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransferCallResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.transferId = _reader.readString();
          break;
        case 4:
          _instance.errorMessage = _reader.readString();
          break;
        case 5:
          _instance.outcome = _reader.readEnum();
          break;
        case 6:
          _instance.resolvedTarget = _reader.readString();
          break;
        case 7:
          _instance.sipResponseCode = _reader.readInt32();
          break;
        case 8:
          _instance.errorReason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TransferCallResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransferCallResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.transferId) {
      _writer.writeString(3, _instance.transferId);
    }
    if (_instance.errorMessage) {
      _writer.writeString(4, _instance.errorMessage);
    }
    if (_instance.outcome) {
      _writer.writeEnum(5, _instance.outcome);
    }
    if (_instance.resolvedTarget) {
      _writer.writeString(6, _instance.resolvedTarget);
    }
    if (_instance.sipResponseCode) {
      _writer.writeInt32(7, _instance.sipResponseCode);
    }
    if (_instance.errorReason) {
      _writer.writeString(8, _instance.errorReason);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _transferId: string;
  private _errorMessage: string;
  private _outcome: TransferOutcome;
  private _resolvedTarget: string;
  private _sipResponseCode: number;
  private _errorReason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferCallResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferCallResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.transferId = _value.transferId;
    this.errorMessage = _value.errorMessage;
    this.outcome = _value.outcome;
    this.resolvedTarget = _value.resolvedTarget;
    this.sipResponseCode = _value.sipResponseCode;
    this.errorReason = _value.errorReason;
    TransferCallResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get transferId(): string {
    return this._transferId;
  }
  set transferId(value: string) {
    this._transferId = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  get outcome(): TransferOutcome {
    return this._outcome;
  }
  set outcome(value: TransferOutcome) {
    this._outcome = value;
  }
  get resolvedTarget(): string {
    return this._resolvedTarget;
  }
  set resolvedTarget(value: string) {
    this._resolvedTarget = value;
  }
  get sipResponseCode(): number {
    return this._sipResponseCode;
  }
  set sipResponseCode(value: number) {
    this._sipResponseCode = value;
  }
  get errorReason(): string {
    return this._errorReason;
  }
  set errorReason(value: string) {
    this._errorReason = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransferCallResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransferCallResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      transferId: this.transferId,
      errorMessage: this.errorMessage,
      outcome: this.outcome,
      resolvedTarget: this.resolvedTarget,
      sipResponseCode: this.sipResponseCode,
      errorReason: this.errorReason
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
  ): TransferCallResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      transferId: this.transferId,
      errorMessage: this.errorMessage,
      outcome:
        TransferOutcome[
          this.outcome === null || this.outcome === undefined ? 0 : this.outcome
        ],
      resolvedTarget: this.resolvedTarget,
      sipResponseCode: this.sipResponseCode,
      errorReason: this.errorReason
    };
  }
}
export module TransferCallResponse {
  /**
   * Standard JavaScript object representation for TransferCallResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
    errorMessage: string;
    outcome: TransferOutcome;
    resolvedTarget: string;
    sipResponseCode: number;
    errorReason: string;
  }

  /**
   * Protobuf JSON representation for TransferCallResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
    errorMessage: string;
    outcome: string;
    resolvedTarget: string;
    sipResponseCode: number;
    errorReason: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallTransferRecord
 */
export class CallTransferRecord implements GrpcMessage {
  static id = 'ondewo.vtsi.CallTransferRecord';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallTransferRecord();
    CallTransferRecord.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallTransferRecord) {
    _instance.target = _instance.target || undefined;
    _instance.resolvedTarget = _instance.resolvedTarget || '';
    _instance.mode = _instance.mode || 0;
    _instance.outcome = _instance.outcome || 0;
    _instance.sipResponseCode = _instance.sipResponseCode || 0;
    _instance.time = _instance.time || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallTransferRecord,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.target = new CallTarget();
          _reader.readMessage(
            _instance.target,
            CallTarget.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.resolvedTarget = _reader.readString();
          break;
        case 3:
          _instance.mode = _reader.readEnum();
          break;
        case 4:
          _instance.outcome = _reader.readEnum();
          break;
        case 5:
          _instance.sipResponseCode = _reader.readInt32();
          break;
        case 6:
          _instance.time = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.time,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CallTransferRecord.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallTransferRecord,
    _writer: BinaryWriter
  ) {
    if (_instance.target) {
      _writer.writeMessage(
        1,
        _instance.target as any,
        CallTarget.serializeBinaryToWriter
      );
    }
    if (_instance.resolvedTarget) {
      _writer.writeString(2, _instance.resolvedTarget);
    }
    if (_instance.mode) {
      _writer.writeEnum(3, _instance.mode);
    }
    if (_instance.outcome) {
      _writer.writeEnum(4, _instance.outcome);
    }
    if (_instance.sipResponseCode) {
      _writer.writeInt32(5, _instance.sipResponseCode);
    }
    if (_instance.time) {
      _writer.writeMessage(
        6,
        _instance.time as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _target?: CallTarget;
  private _resolvedTarget: string;
  private _mode: TransferMode;
  private _outcome: TransferOutcome;
  private _sipResponseCode: number;
  private _time?: googleProtobuf005.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallTransferRecord to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallTransferRecord.AsObject>) {
    _value = _value || {};
    this.target = _value.target ? new CallTarget(_value.target) : undefined;
    this.resolvedTarget = _value.resolvedTarget;
    this.mode = _value.mode;
    this.outcome = _value.outcome;
    this.sipResponseCode = _value.sipResponseCode;
    this.time = _value.time
      ? new googleProtobuf005.Timestamp(_value.time)
      : undefined;
    CallTransferRecord.refineValues(this);
  }
  get target(): CallTarget | undefined {
    return this._target;
  }
  set target(value: CallTarget | undefined) {
    this._target = value;
  }
  get resolvedTarget(): string {
    return this._resolvedTarget;
  }
  set resolvedTarget(value: string) {
    this._resolvedTarget = value;
  }
  get mode(): TransferMode {
    return this._mode;
  }
  set mode(value: TransferMode) {
    this._mode = value;
  }
  get outcome(): TransferOutcome {
    return this._outcome;
  }
  set outcome(value: TransferOutcome) {
    this._outcome = value;
  }
  get sipResponseCode(): number {
    return this._sipResponseCode;
  }
  set sipResponseCode(value: number) {
    this._sipResponseCode = value;
  }
  get time(): googleProtobuf005.Timestamp | undefined {
    return this._time;
  }
  set time(value: googleProtobuf005.Timestamp | undefined) {
    this._time = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallTransferRecord.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallTransferRecord.AsObject {
    return {
      target: this.target ? this.target.toObject() : undefined,
      resolvedTarget: this.resolvedTarget,
      mode: this.mode,
      outcome: this.outcome,
      sipResponseCode: this.sipResponseCode,
      time: this.time ? this.time.toObject() : undefined
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
  ): CallTransferRecord.AsProtobufJSON {
    return {
      target: this.target ? this.target.toProtobufJSON(options) : null,
      resolvedTarget: this.resolvedTarget,
      mode:
        TransferMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      outcome:
        TransferOutcome[
          this.outcome === null || this.outcome === undefined ? 0 : this.outcome
        ],
      sipResponseCode: this.sipResponseCode,
      time: this.time ? this.time.toProtobufJSON(options) : null
    };
  }
}
export module CallTransferRecord {
  /**
   * Standard JavaScript object representation for CallTransferRecord
   */
  export interface AsObject {
    target?: CallTarget.AsObject;
    resolvedTarget: string;
    mode: TransferMode;
    outcome: TransferOutcome;
    sipResponseCode: number;
    time?: googleProtobuf005.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for CallTransferRecord
   */
  export interface AsProtobufJSON {
    target: CallTarget.AsProtobufJSON | null;
    resolvedTarget: string;
    mode: string;
    outcome: string;
    sipResponseCode: number;
    time: googleProtobuf005.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallMediaControlState
 */
export class CallMediaControlState implements GrpcMessage {
  static id = 'ondewo.vtsi.CallMediaControlState';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallMediaControlState();
    CallMediaControlState.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallMediaControlState) {
    _instance.botMuted = _instance.botMuted || false;
    _instance.listeningPaused = _instance.listeningPaused || false;
    _instance.connectedAudioStreams = _instance.connectedAudioStreams || 0;
    _instance.joinedParticipants = _instance.joinedParticipants || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallMediaControlState,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.botMuted = _reader.readBool();
          break;
        case 2:
          _instance.listeningPaused = _reader.readBool();
          break;
        case 3:
          _instance.connectedAudioStreams = _reader.readInt32();
          break;
        case 4:
          _instance.joinedParticipants = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CallMediaControlState.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallMediaControlState,
    _writer: BinaryWriter
  ) {
    if (_instance.botMuted) {
      _writer.writeBool(1, _instance.botMuted);
    }
    if (_instance.listeningPaused) {
      _writer.writeBool(2, _instance.listeningPaused);
    }
    if (_instance.connectedAudioStreams) {
      _writer.writeInt32(3, _instance.connectedAudioStreams);
    }
    if (_instance.joinedParticipants) {
      _writer.writeInt32(4, _instance.joinedParticipants);
    }
  }

  private _botMuted: boolean;
  private _listeningPaused: boolean;
  private _connectedAudioStreams: number;
  private _joinedParticipants: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallMediaControlState to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallMediaControlState.AsObject>) {
    _value = _value || {};
    this.botMuted = _value.botMuted;
    this.listeningPaused = _value.listeningPaused;
    this.connectedAudioStreams = _value.connectedAudioStreams;
    this.joinedParticipants = _value.joinedParticipants;
    CallMediaControlState.refineValues(this);
  }
  get botMuted(): boolean {
    return this._botMuted;
  }
  set botMuted(value: boolean) {
    this._botMuted = value;
  }
  get listeningPaused(): boolean {
    return this._listeningPaused;
  }
  set listeningPaused(value: boolean) {
    this._listeningPaused = value;
  }
  get connectedAudioStreams(): number {
    return this._connectedAudioStreams;
  }
  set connectedAudioStreams(value: number) {
    this._connectedAudioStreams = value;
  }
  get joinedParticipants(): number {
    return this._joinedParticipants;
  }
  set joinedParticipants(value: number) {
    this._joinedParticipants = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallMediaControlState.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallMediaControlState.AsObject {
    return {
      botMuted: this.botMuted,
      listeningPaused: this.listeningPaused,
      connectedAudioStreams: this.connectedAudioStreams,
      joinedParticipants: this.joinedParticipants
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
  ): CallMediaControlState.AsProtobufJSON {
    return {
      botMuted: this.botMuted,
      listeningPaused: this.listeningPaused,
      connectedAudioStreams: this.connectedAudioStreams,
      joinedParticipants: this.joinedParticipants
    };
  }
}
export module CallMediaControlState {
  /**
   * Standard JavaScript object representation for CallMediaControlState
   */
  export interface AsObject {
    botMuted: boolean;
    listeningPaused: boolean;
    connectedAudioStreams: number;
    joinedParticipants: number;
  }

  /**
   * Protobuf JSON representation for CallMediaControlState
   */
  export interface AsProtobufJSON {
    botMuted: boolean;
    listeningPaused: boolean;
    connectedAudioStreams: number;
    joinedParticipants: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallParticipant
 */
export class CallParticipant implements GrpcMessage {
  static id = 'ondewo.vtsi.CallParticipant';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallParticipant();
    CallParticipant.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallParticipant) {
    _instance.participantId = _instance.participantId || '';
    _instance.softphoneAccountName = _instance.softphoneAccountName || '';
    _instance.mode = _instance.mode || 0;
    _instance.state = _instance.state || 0;
    _instance.invitedAt = _instance.invitedAt || undefined;
    _instance.joinedAt = _instance.joinedAt || undefined;
    _instance.leftAt = _instance.leftAt || undefined;
    _instance.endReason = _instance.endReason || '';
    _instance.invitedBy = _instance.invitedBy || '';
    _instance.botPolicy = _instance.botPolicy || 0;
    _instance.endReasonType = _instance.endReasonType || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallParticipant,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.participantId = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 3:
          _instance.mode = _reader.readEnum();
          break;
        case 4:
          _instance.state = _reader.readEnum();
          break;
        case 5:
          _instance.invitedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.invitedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.joinedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.joinedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.leftAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.leftAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.endReason = _reader.readString();
          break;
        case 9:
          _instance.invitedBy = _reader.readString();
          break;
        case 10:
          _instance.botPolicy = _reader.readEnum();
          break;
        case 11:
          _instance.endReasonType = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CallParticipant.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallParticipant,
    _writer: BinaryWriter
  ) {
    if (_instance.participantId) {
      _writer.writeString(1, _instance.participantId);
    }
    if (_instance.softphoneAccountName) {
      _writer.writeString(2, _instance.softphoneAccountName);
    }
    if (_instance.mode) {
      _writer.writeEnum(3, _instance.mode);
    }
    if (_instance.state) {
      _writer.writeEnum(4, _instance.state);
    }
    if (_instance.invitedAt) {
      _writer.writeMessage(
        5,
        _instance.invitedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.joinedAt) {
      _writer.writeMessage(
        6,
        _instance.joinedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.leftAt) {
      _writer.writeMessage(
        7,
        _instance.leftAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endReason) {
      _writer.writeString(8, _instance.endReason);
    }
    if (_instance.invitedBy) {
      _writer.writeString(9, _instance.invitedBy);
    }
    if (_instance.botPolicy) {
      _writer.writeEnum(10, _instance.botPolicy);
    }
    if (_instance.endReasonType) {
      _writer.writeEnum(11, _instance.endReasonType);
    }
  }

  private _participantId: string;
  private _softphoneAccountName: string;
  private _mode: ParticipantMode;
  private _state: ParticipantState;
  private _invitedAt?: googleProtobuf005.Timestamp;
  private _joinedAt?: googleProtobuf005.Timestamp;
  private _leftAt?: googleProtobuf005.Timestamp;
  private _endReason: string;
  private _invitedBy: string;
  private _botPolicy: BotPolicyOnJoin;
  private _endReasonType: ParticipantEndReason;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallParticipant to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallParticipant.AsObject>) {
    _value = _value || {};
    this.participantId = _value.participantId;
    this.softphoneAccountName = _value.softphoneAccountName;
    this.mode = _value.mode;
    this.state = _value.state;
    this.invitedAt = _value.invitedAt
      ? new googleProtobuf005.Timestamp(_value.invitedAt)
      : undefined;
    this.joinedAt = _value.joinedAt
      ? new googleProtobuf005.Timestamp(_value.joinedAt)
      : undefined;
    this.leftAt = _value.leftAt
      ? new googleProtobuf005.Timestamp(_value.leftAt)
      : undefined;
    this.endReason = _value.endReason;
    this.invitedBy = _value.invitedBy;
    this.botPolicy = _value.botPolicy;
    this.endReasonType = _value.endReasonType;
    CallParticipant.refineValues(this);
  }
  get participantId(): string {
    return this._participantId;
  }
  set participantId(value: string) {
    this._participantId = value;
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    this._softphoneAccountName = value;
  }
  get mode(): ParticipantMode {
    return this._mode;
  }
  set mode(value: ParticipantMode) {
    this._mode = value;
  }
  get state(): ParticipantState {
    return this._state;
  }
  set state(value: ParticipantState) {
    this._state = value;
  }
  get invitedAt(): googleProtobuf005.Timestamp | undefined {
    return this._invitedAt;
  }
  set invitedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._invitedAt = value;
  }
  get joinedAt(): googleProtobuf005.Timestamp | undefined {
    return this._joinedAt;
  }
  set joinedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._joinedAt = value;
  }
  get leftAt(): googleProtobuf005.Timestamp | undefined {
    return this._leftAt;
  }
  set leftAt(value: googleProtobuf005.Timestamp | undefined) {
    this._leftAt = value;
  }
  get endReason(): string {
    return this._endReason;
  }
  set endReason(value: string) {
    this._endReason = value;
  }
  get invitedBy(): string {
    return this._invitedBy;
  }
  set invitedBy(value: string) {
    this._invitedBy = value;
  }
  get botPolicy(): BotPolicyOnJoin {
    return this._botPolicy;
  }
  set botPolicy(value: BotPolicyOnJoin) {
    this._botPolicy = value;
  }
  get endReasonType(): ParticipantEndReason {
    return this._endReasonType;
  }
  set endReasonType(value: ParticipantEndReason) {
    this._endReasonType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallParticipant.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallParticipant.AsObject {
    return {
      participantId: this.participantId,
      softphoneAccountName: this.softphoneAccountName,
      mode: this.mode,
      state: this.state,
      invitedAt: this.invitedAt ? this.invitedAt.toObject() : undefined,
      joinedAt: this.joinedAt ? this.joinedAt.toObject() : undefined,
      leftAt: this.leftAt ? this.leftAt.toObject() : undefined,
      endReason: this.endReason,
      invitedBy: this.invitedBy,
      botPolicy: this.botPolicy,
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
  ): CallParticipant.AsProtobufJSON {
    return {
      participantId: this.participantId,
      softphoneAccountName: this.softphoneAccountName,
      mode:
        ParticipantMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      state:
        ParticipantState[
          this.state === null || this.state === undefined ? 0 : this.state
        ],
      invitedAt: this.invitedAt ? this.invitedAt.toProtobufJSON(options) : null,
      joinedAt: this.joinedAt ? this.joinedAt.toProtobufJSON(options) : null,
      leftAt: this.leftAt ? this.leftAt.toProtobufJSON(options) : null,
      endReason: this.endReason,
      invitedBy: this.invitedBy,
      botPolicy:
        BotPolicyOnJoin[
          this.botPolicy === null || this.botPolicy === undefined
            ? 0
            : this.botPolicy
        ],
      endReasonType:
        ParticipantEndReason[
          this.endReasonType === null || this.endReasonType === undefined
            ? 0
            : this.endReasonType
        ]
    };
  }
}
export module CallParticipant {
  /**
   * Standard JavaScript object representation for CallParticipant
   */
  export interface AsObject {
    participantId: string;
    softphoneAccountName: string;
    mode: ParticipantMode;
    state: ParticipantState;
    invitedAt?: googleProtobuf005.Timestamp.AsObject;
    joinedAt?: googleProtobuf005.Timestamp.AsObject;
    leftAt?: googleProtobuf005.Timestamp.AsObject;
    endReason: string;
    invitedBy: string;
    botPolicy: BotPolicyOnJoin;
    endReasonType: ParticipantEndReason;
  }

  /**
   * Protobuf JSON representation for CallParticipant
   */
  export interface AsProtobufJSON {
    participantId: string;
    softphoneAccountName: string;
    mode: string;
    state: string;
    invitedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    joinedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    leftAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    endReason: string;
    invitedBy: string;
    botPolicy: string;
    endReasonType: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.InviteToCallRequest
 */
export class InviteToCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.InviteToCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InviteToCallRequest();
    InviteToCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InviteToCallRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.softphoneAccountName = _instance.softphoneAccountName || '';
    _instance.mode = _instance.mode || 0;
    _instance.ringTimeoutS = _instance.ringTimeoutS || 0;
    _instance.botPolicy = _instance.botPolicy || 0;
    _instance.callerIdDisplayName = _instance.callerIdDisplayName || '';
    _instance.requestId = _instance.requestId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InviteToCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 4:
          _instance.mode = _reader.readEnum();
          break;
        case 5:
          _instance.ringTimeoutS = _reader.readInt32();
          break;
        case 6:
          _instance.botPolicy = _reader.readEnum();
          break;
        case 7:
          _instance.callerIdDisplayName = _reader.readString();
          break;
        case 8:
          _instance.requestId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    InviteToCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InviteToCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.softphoneAccountName) {
      _writer.writeString(3, _instance.softphoneAccountName);
    }
    if (_instance.mode) {
      _writer.writeEnum(4, _instance.mode);
    }
    if (_instance.ringTimeoutS) {
      _writer.writeInt32(5, _instance.ringTimeoutS);
    }
    if (_instance.botPolicy) {
      _writer.writeEnum(6, _instance.botPolicy);
    }
    if (_instance.callerIdDisplayName) {
      _writer.writeString(7, _instance.callerIdDisplayName);
    }
    if (_instance.requestId) {
      _writer.writeString(8, _instance.requestId);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _softphoneAccountName: string;
  private _mode: ParticipantMode;
  private _ringTimeoutS: number;
  private _botPolicy: BotPolicyOnJoin;
  private _callerIdDisplayName: string;
  private _requestId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InviteToCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<InviteToCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.softphoneAccountName = _value.softphoneAccountName;
    this.mode = _value.mode;
    this.ringTimeoutS = _value.ringTimeoutS;
    this.botPolicy = _value.botPolicy;
    this.callerIdDisplayName = _value.callerIdDisplayName;
    this.requestId = _value.requestId;
    InviteToCallRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    this._softphoneAccountName = value;
  }
  get mode(): ParticipantMode {
    return this._mode;
  }
  set mode(value: ParticipantMode) {
    this._mode = value;
  }
  get ringTimeoutS(): number {
    return this._ringTimeoutS;
  }
  set ringTimeoutS(value: number) {
    this._ringTimeoutS = value;
  }
  get botPolicy(): BotPolicyOnJoin {
    return this._botPolicy;
  }
  set botPolicy(value: BotPolicyOnJoin) {
    this._botPolicy = value;
  }
  get callerIdDisplayName(): string {
    return this._callerIdDisplayName;
  }
  set callerIdDisplayName(value: string) {
    this._callerIdDisplayName = value;
  }
  get requestId(): string {
    return this._requestId;
  }
  set requestId(value: string) {
    this._requestId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InviteToCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InviteToCallRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      softphoneAccountName: this.softphoneAccountName,
      mode: this.mode,
      ringTimeoutS: this.ringTimeoutS,
      botPolicy: this.botPolicy,
      callerIdDisplayName: this.callerIdDisplayName,
      requestId: this.requestId
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
  ): InviteToCallRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      softphoneAccountName: this.softphoneAccountName,
      mode:
        ParticipantMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      ringTimeoutS: this.ringTimeoutS,
      botPolicy:
        BotPolicyOnJoin[
          this.botPolicy === null || this.botPolicy === undefined
            ? 0
            : this.botPolicy
        ],
      callerIdDisplayName: this.callerIdDisplayName,
      requestId: this.requestId
    };
  }
}
export module InviteToCallRequest {
  /**
   * Standard JavaScript object representation for InviteToCallRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    softphoneAccountName: string;
    mode: ParticipantMode;
    ringTimeoutS: number;
    botPolicy: BotPolicyOnJoin;
    callerIdDisplayName: string;
    requestId: string;
  }

  /**
   * Protobuf JSON representation for InviteToCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    softphoneAccountName: string;
    mode: string;
    ringTimeoutS: number;
    botPolicy: string;
    callerIdDisplayName: string;
    requestId: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.InviteToCallResponse
 */
export class InviteToCallResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.InviteToCallResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InviteToCallResponse();
    InviteToCallResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InviteToCallResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.participant = _instance.participant || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InviteToCallResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.participant = new CallParticipant();
          _reader.readMessage(
            _instance.participant,
            CallParticipant.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    InviteToCallResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InviteToCallResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.participant) {
      _writer.writeMessage(
        3,
        _instance.participant as any,
        CallParticipant.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(4, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _participant?: CallParticipant;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InviteToCallResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<InviteToCallResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.participant = _value.participant
      ? new CallParticipant(_value.participant)
      : undefined;
    this.errorMessage = _value.errorMessage;
    InviteToCallResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get participant(): CallParticipant | undefined {
    return this._participant;
  }
  set participant(value: CallParticipant | undefined) {
    this._participant = value;
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
    InviteToCallResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InviteToCallResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participant: this.participant ? this.participant.toObject() : undefined,
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
  ): InviteToCallResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participant: this.participant
        ? this.participant.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module InviteToCallResponse {
  /**
   * Standard JavaScript object representation for InviteToCallResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    participant?: CallParticipant.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for InviteToCallResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    participant: CallParticipant.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.RemoveCallParticipantRequest
 */
export class RemoveCallParticipantRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.RemoveCallParticipantRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoveCallParticipantRequest();
    RemoveCallParticipantRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoveCallParticipantRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.participantId = _instance.participantId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoveCallParticipantRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.participantId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoveCallParticipantRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoveCallParticipantRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.participantId) {
      _writer.writeString(3, _instance.participantId);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _participantId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoveCallParticipantRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoveCallParticipantRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.participantId = _value.participantId;
    RemoveCallParticipantRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get participantId(): string {
    return this._participantId;
  }
  set participantId(value: string) {
    this._participantId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoveCallParticipantRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoveCallParticipantRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participantId: this.participantId
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
  ): RemoveCallParticipantRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participantId: this.participantId
    };
  }
}
export module RemoveCallParticipantRequest {
  /**
   * Standard JavaScript object representation for RemoveCallParticipantRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    participantId: string;
  }

  /**
   * Protobuf JSON representation for RemoveCallParticipantRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    participantId: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.RemoveCallParticipantResponse
 */
export class RemoveCallParticipantResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.RemoveCallParticipantResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoveCallParticipantResponse();
    RemoveCallParticipantResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoveCallParticipantResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.participant = _instance.participant || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoveCallParticipantResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.participant = new CallParticipant();
          _reader.readMessage(
            _instance.participant,
            CallParticipant.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoveCallParticipantResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoveCallParticipantResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.participant) {
      _writer.writeMessage(
        3,
        _instance.participant as any,
        CallParticipant.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(4, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _participant?: CallParticipant;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoveCallParticipantResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoveCallParticipantResponse.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.participant = _value.participant
      ? new CallParticipant(_value.participant)
      : undefined;
    this.errorMessage = _value.errorMessage;
    RemoveCallParticipantResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get participant(): CallParticipant | undefined {
    return this._participant;
  }
  set participant(value: CallParticipant | undefined) {
    this._participant = value;
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
    RemoveCallParticipantResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoveCallParticipantResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participant: this.participant ? this.participant.toObject() : undefined,
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
  ): RemoveCallParticipantResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      participant: this.participant
        ? this.participant.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module RemoveCallParticipantResponse {
  /**
   * Standard JavaScript object representation for RemoveCallParticipantResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    participant?: CallParticipant.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for RemoveCallParticipantResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    participant: CallParticipant.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SetCallMediaControlRequest
 */
export class SetCallMediaControlRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.SetCallMediaControlRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetCallMediaControlRequest();
    SetCallMediaControlRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetCallMediaControlRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.botVoice = _instance.botVoice || 0;
    _instance.botListening = _instance.botListening || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetCallMediaControlRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.botVoice = _reader.readEnum();
          break;
        case 4:
          _instance.botListening = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    SetCallMediaControlRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetCallMediaControlRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.botVoice) {
      _writer.writeEnum(3, _instance.botVoice);
    }
    if (_instance.botListening) {
      _writer.writeEnum(4, _instance.botListening);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _botVoice: CallMediaSetting;
  private _botListening: CallMediaSetting;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetCallMediaControlRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetCallMediaControlRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.botVoice = _value.botVoice;
    this.botListening = _value.botListening;
    SetCallMediaControlRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get botVoice(): CallMediaSetting {
    return this._botVoice;
  }
  set botVoice(value: CallMediaSetting) {
    this._botVoice = value;
  }
  get botListening(): CallMediaSetting {
    return this._botListening;
  }
  set botListening(value: CallMediaSetting) {
    this._botListening = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SetCallMediaControlRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetCallMediaControlRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      botVoice: this.botVoice,
      botListening: this.botListening
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
  ): SetCallMediaControlRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      botVoice:
        CallMediaSetting[
          this.botVoice === null || this.botVoice === undefined
            ? 0
            : this.botVoice
        ],
      botListening:
        CallMediaSetting[
          this.botListening === null || this.botListening === undefined
            ? 0
            : this.botListening
        ]
    };
  }
}
export module SetCallMediaControlRequest {
  /**
   * Standard JavaScript object representation for SetCallMediaControlRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    botVoice: CallMediaSetting;
    botListening: CallMediaSetting;
  }

  /**
   * Protobuf JSON representation for SetCallMediaControlRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    botVoice: string;
    botListening: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SetCallMediaControlResponse
 */
export class SetCallMediaControlResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.SetCallMediaControlResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SetCallMediaControlResponse();
    SetCallMediaControlResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SetCallMediaControlResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.state = _instance.state || undefined;
    _instance.changed = _instance.changed || false;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SetCallMediaControlResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.state = new CallMediaControlState();
          _reader.readMessage(
            _instance.state,
            CallMediaControlState.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.changed = _reader.readBool();
          break;
        case 5:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SetCallMediaControlResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SetCallMediaControlResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.state) {
      _writer.writeMessage(
        3,
        _instance.state as any,
        CallMediaControlState.serializeBinaryToWriter
      );
    }
    if (_instance.changed) {
      _writer.writeBool(4, _instance.changed);
    }
    if (_instance.errorMessage) {
      _writer.writeString(5, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _state?: CallMediaControlState;
  private _changed: boolean;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SetCallMediaControlResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SetCallMediaControlResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.state = _value.state
      ? new CallMediaControlState(_value.state)
      : undefined;
    this.changed = _value.changed;
    this.errorMessage = _value.errorMessage;
    SetCallMediaControlResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get state(): CallMediaControlState | undefined {
    return this._state;
  }
  set state(value: CallMediaControlState | undefined) {
    this._state = value;
  }
  get changed(): boolean {
    return this._changed;
  }
  set changed(value: boolean) {
    this._changed = value;
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
    SetCallMediaControlResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SetCallMediaControlResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      state: this.state ? this.state.toObject() : undefined,
      changed: this.changed,
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
  ): SetCallMediaControlResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      state: this.state ? this.state.toProtobufJSON(options) : null,
      changed: this.changed,
      errorMessage: this.errorMessage
    };
  }
}
export module SetCallMediaControlResponse {
  /**
   * Standard JavaScript object representation for SetCallMediaControlResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    state?: CallMediaControlState.AsObject;
    changed: boolean;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for SetCallMediaControlResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    state: CallMediaControlState.AsProtobufJSON | null;
    changed: boolean;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallAudioConfig
 */
export class StreamCallAudioConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallAudioConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallAudioConfig();
    StreamCallAudioConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallAudioConfig) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.mode = _instance.mode || 0;
    _instance.sampleRateHz = _instance.sampleRateHz || 0;
    _instance.takeOver = _instance.takeOver || false;
    _instance.maxDurationS = _instance.maxDurationS || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallAudioConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.mode = _reader.readEnum();
          break;
        case 4:
          _instance.sampleRateHz = _reader.readInt32();
          break;
        case 5:
          _instance.takeOver = _reader.readBool();
          break;
        case 6:
          _instance.maxDurationS = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallAudioConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallAudioConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.mode) {
      _writer.writeEnum(3, _instance.mode);
    }
    if (_instance.sampleRateHz) {
      _writer.writeInt32(4, _instance.sampleRateHz);
    }
    if (_instance.takeOver) {
      _writer.writeBool(5, _instance.takeOver);
    }
    if (_instance.maxDurationS) {
      _writer.writeInt32(6, _instance.maxDurationS);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _mode: CallAudioMode;
  private _sampleRateHz: number;
  private _takeOver: boolean;
  private _maxDurationS: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallAudioConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallAudioConfig.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.mode = _value.mode;
    this.sampleRateHz = _value.sampleRateHz;
    this.takeOver = _value.takeOver;
    this.maxDurationS = _value.maxDurationS;
    StreamCallAudioConfig.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get mode(): CallAudioMode {
    return this._mode;
  }
  set mode(value: CallAudioMode) {
    this._mode = value;
  }
  get sampleRateHz(): number {
    return this._sampleRateHz;
  }
  set sampleRateHz(value: number) {
    this._sampleRateHz = value;
  }
  get takeOver(): boolean {
    return this._takeOver;
  }
  set takeOver(value: boolean) {
    this._takeOver = value;
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
    StreamCallAudioConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallAudioConfig.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      mode: this.mode,
      sampleRateHz: this.sampleRateHz,
      takeOver: this.takeOver,
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
  ): StreamCallAudioConfig.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      mode:
        CallAudioMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      sampleRateHz: this.sampleRateHz,
      takeOver: this.takeOver,
      maxDurationS: this.maxDurationS
    };
  }
}
export module StreamCallAudioConfig {
  /**
   * Standard JavaScript object representation for StreamCallAudioConfig
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    mode: CallAudioMode;
    sampleRateHz: number;
    takeOver: boolean;
    maxDurationS: number;
  }

  /**
   * Protobuf JSON representation for StreamCallAudioConfig
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    mode: string;
    sampleRateHz: number;
    takeOver: boolean;
    maxDurationS: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallAudioFrame
 */
export class CallAudioFrame implements GrpcMessage {
  static id = 'ondewo.vtsi.CallAudioFrame';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallAudioFrame();
    CallAudioFrame.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallAudioFrame) {
    _instance.pcmS16le = _instance.pcmS16le || new Uint8Array();
    _instance.sequence = _instance.sequence || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallAudioFrame,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pcmS16le = _reader.readBytes();
          break;
        case 2:
          _instance.sequence = _reader.readUint64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CallAudioFrame.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallAudioFrame,
    _writer: BinaryWriter
  ) {
    if (_instance.pcmS16le && _instance.pcmS16le.length) {
      _writer.writeBytes(1, _instance.pcmS16le);
    }
    if (_instance.sequence) {
      _writer.writeUint64String(2, _instance.sequence);
    }
  }

  private _pcmS16le: Uint8Array;
  private _sequence: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallAudioFrame to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallAudioFrame.AsObject>) {
    _value = _value || {};
    this.pcmS16le = _value.pcmS16le;
    this.sequence = _value.sequence;
    CallAudioFrame.refineValues(this);
  }
  get pcmS16le(): Uint8Array {
    return this._pcmS16le;
  }
  set pcmS16le(value: Uint8Array) {
    this._pcmS16le = value;
  }
  get sequence(): string {
    return this._sequence;
  }
  set sequence(value: string) {
    this._sequence = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallAudioFrame.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallAudioFrame.AsObject {
    return {
      pcmS16le: this.pcmS16le ? this.pcmS16le.subarray(0) : new Uint8Array(),
      sequence: this.sequence
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
  ): CallAudioFrame.AsProtobufJSON {
    return {
      pcmS16le: this.pcmS16le ? uint8ArrayToBase64(this.pcmS16le) : '',
      sequence: this.sequence
    };
  }
}
export module CallAudioFrame {
  /**
   * Standard JavaScript object representation for CallAudioFrame
   */
  export interface AsObject {
    pcmS16le: Uint8Array;
    sequence: string;
  }

  /**
   * Protobuf JSON representation for CallAudioFrame
   */
  export interface AsProtobufJSON {
    pcmS16le: string;
    sequence: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallAudioRequest
 */
export class StreamCallAudioRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallAudioRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallAudioRequest();
    StreamCallAudioRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallAudioRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallAudioRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.config = new StreamCallAudioConfig();
          _reader.readMessage(
            _instance.config,
            StreamCallAudioConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.audio = new CallAudioFrame();
          _reader.readMessage(
            _instance.audio,
            CallAudioFrame.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.agentMuted = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallAudioRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallAudioRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.config) {
      _writer.writeMessage(
        1,
        _instance.config as any,
        StreamCallAudioConfig.serializeBinaryToWriter
      );
    }
    if (_instance.audio) {
      _writer.writeMessage(
        2,
        _instance.audio as any,
        CallAudioFrame.serializeBinaryToWriter
      );
    }
    if (_instance.agentMuted || _instance.agentMuted === false) {
      _writer.writeBool(3, _instance.agentMuted);
    }
  }

  private _config?: StreamCallAudioConfig;
  private _audio?: CallAudioFrame;
  private _agentMuted: boolean;

  private _request: StreamCallAudioRequest.RequestCase =
    StreamCallAudioRequest.RequestCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallAudioRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallAudioRequest.AsObject>) {
    _value = _value || {};
    this.config = _value.config
      ? new StreamCallAudioConfig(_value.config)
      : undefined;
    this.audio = _value.audio ? new CallAudioFrame(_value.audio) : undefined;
    this.agentMuted = _value.agentMuted;
    StreamCallAudioRequest.refineValues(this);
  }
  get config(): StreamCallAudioConfig | undefined {
    return this._config;
  }
  set config(value: StreamCallAudioConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._audio = this._agentMuted = undefined;
      this._request = StreamCallAudioRequest.RequestCase.config;
    }
    this._config = value;
  }
  get audio(): CallAudioFrame | undefined {
    return this._audio;
  }
  set audio(value: CallAudioFrame | undefined) {
    if (value !== undefined && value !== null) {
      this._config = this._agentMuted = undefined;
      this._request = StreamCallAudioRequest.RequestCase.audio;
    }
    this._audio = value;
  }
  get agentMuted(): boolean {
    return this._agentMuted;
  }
  set agentMuted(value: boolean) {
    if (value !== undefined && value !== null) {
      this._config = this._audio = undefined;
      this._request = StreamCallAudioRequest.RequestCase.agentMuted;
    }
    this._agentMuted = value;
  }
  get request() {
    return this._request;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCallAudioRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallAudioRequest.AsObject {
    return {
      config: this.config ? this.config.toObject() : undefined,
      audio: this.audio ? this.audio.toObject() : undefined,
      agentMuted: this.agentMuted
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
  ): StreamCallAudioRequest.AsProtobufJSON {
    return {
      config: this.config ? this.config.toProtobufJSON(options) : null,
      audio: this.audio ? this.audio.toProtobufJSON(options) : null,
      agentMuted: this.agentMuted
    };
  }
}
export module StreamCallAudioRequest {
  /**
   * Standard JavaScript object representation for StreamCallAudioRequest
   */
  export interface AsObject {
    config?: StreamCallAudioConfig.AsObject;
    audio?: CallAudioFrame.AsObject;
    agentMuted: boolean;
  }

  /**
   * Protobuf JSON representation for StreamCallAudioRequest
   */
  export interface AsProtobufJSON {
    config: StreamCallAudioConfig.AsProtobufJSON | null;
    audio: CallAudioFrame.AsProtobufJSON | null;
    agentMuted: boolean;
  }
  export enum RequestCase {
    none = 0,
    config = 1,
    audio = 2,
    agentMuted = 3
  }
}

/**
 * Message implementation for ondewo.vtsi.CallAudioStarted
 */
export class CallAudioStarted implements GrpcMessage {
  static id = 'ondewo.vtsi.CallAudioStarted';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallAudioStarted();
    CallAudioStarted.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallAudioStarted) {
    _instance.streamId = _instance.streamId || '';
    _instance.sampleRateHz = _instance.sampleRateHz || 0;
    _instance.frameMs = _instance.frameMs || 0;
    _instance.mode = _instance.mode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallAudioStarted,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.streamId = _reader.readString();
          break;
        case 2:
          _instance.sampleRateHz = _reader.readInt32();
          break;
        case 3:
          _instance.frameMs = _reader.readInt32();
          break;
        case 4:
          _instance.mode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CallAudioStarted.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallAudioStarted,
    _writer: BinaryWriter
  ) {
    if (_instance.streamId) {
      _writer.writeString(1, _instance.streamId);
    }
    if (_instance.sampleRateHz) {
      _writer.writeInt32(2, _instance.sampleRateHz);
    }
    if (_instance.frameMs) {
      _writer.writeInt32(3, _instance.frameMs);
    }
    if (_instance.mode) {
      _writer.writeEnum(4, _instance.mode);
    }
  }

  private _streamId: string;
  private _sampleRateHz: number;
  private _frameMs: number;
  private _mode: CallAudioMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallAudioStarted to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallAudioStarted.AsObject>) {
    _value = _value || {};
    this.streamId = _value.streamId;
    this.sampleRateHz = _value.sampleRateHz;
    this.frameMs = _value.frameMs;
    this.mode = _value.mode;
    CallAudioStarted.refineValues(this);
  }
  get streamId(): string {
    return this._streamId;
  }
  set streamId(value: string) {
    this._streamId = value;
  }
  get sampleRateHz(): number {
    return this._sampleRateHz;
  }
  set sampleRateHz(value: number) {
    this._sampleRateHz = value;
  }
  get frameMs(): number {
    return this._frameMs;
  }
  set frameMs(value: number) {
    this._frameMs = value;
  }
  get mode(): CallAudioMode {
    return this._mode;
  }
  set mode(value: CallAudioMode) {
    this._mode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallAudioStarted.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallAudioStarted.AsObject {
    return {
      streamId: this.streamId,
      sampleRateHz: this.sampleRateHz,
      frameMs: this.frameMs,
      mode: this.mode
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
  ): CallAudioStarted.AsProtobufJSON {
    return {
      streamId: this.streamId,
      sampleRateHz: this.sampleRateHz,
      frameMs: this.frameMs,
      mode:
        CallAudioMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ]
    };
  }
}
export module CallAudioStarted {
  /**
   * Standard JavaScript object representation for CallAudioStarted
   */
  export interface AsObject {
    streamId: string;
    sampleRateHz: number;
    frameMs: number;
    mode: CallAudioMode;
  }

  /**
   * Protobuf JSON representation for CallAudioStarted
   */
  export interface AsProtobufJSON {
    streamId: string;
    sampleRateHz: number;
    frameMs: number;
    mode: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallAudioStats
 */
export class CallAudioStats implements GrpcMessage {
  static id = 'ondewo.vtsi.CallAudioStats';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallAudioStats();
    CallAudioStats.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallAudioStats) {
    _instance.framesSent = _instance.framesSent || '0';
    _instance.framesDropped = _instance.framesDropped || '0';
    _instance.framesReceived = _instance.framesReceived || '0';
    _instance.underruns = _instance.underruns || '0';
    _instance.framesDiscarded = _instance.framesDiscarded || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallAudioStats,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.framesSent = _reader.readUint64String();
          break;
        case 2:
          _instance.framesDropped = _reader.readUint64String();
          break;
        case 3:
          _instance.framesReceived = _reader.readUint64String();
          break;
        case 4:
          _instance.underruns = _reader.readUint64String();
          break;
        case 5:
          _instance.framesDiscarded = _reader.readUint64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CallAudioStats.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallAudioStats,
    _writer: BinaryWriter
  ) {
    if (_instance.framesSent) {
      _writer.writeUint64String(1, _instance.framesSent);
    }
    if (_instance.framesDropped) {
      _writer.writeUint64String(2, _instance.framesDropped);
    }
    if (_instance.framesReceived) {
      _writer.writeUint64String(3, _instance.framesReceived);
    }
    if (_instance.underruns) {
      _writer.writeUint64String(4, _instance.underruns);
    }
    if (_instance.framesDiscarded) {
      _writer.writeUint64String(5, _instance.framesDiscarded);
    }
  }

  private _framesSent: string;
  private _framesDropped: string;
  private _framesReceived: string;
  private _underruns: string;
  private _framesDiscarded: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallAudioStats to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallAudioStats.AsObject>) {
    _value = _value || {};
    this.framesSent = _value.framesSent;
    this.framesDropped = _value.framesDropped;
    this.framesReceived = _value.framesReceived;
    this.underruns = _value.underruns;
    this.framesDiscarded = _value.framesDiscarded;
    CallAudioStats.refineValues(this);
  }
  get framesSent(): string {
    return this._framesSent;
  }
  set framesSent(value: string) {
    this._framesSent = value;
  }
  get framesDropped(): string {
    return this._framesDropped;
  }
  set framesDropped(value: string) {
    this._framesDropped = value;
  }
  get framesReceived(): string {
    return this._framesReceived;
  }
  set framesReceived(value: string) {
    this._framesReceived = value;
  }
  get underruns(): string {
    return this._underruns;
  }
  set underruns(value: string) {
    this._underruns = value;
  }
  get framesDiscarded(): string {
    return this._framesDiscarded;
  }
  set framesDiscarded(value: string) {
    this._framesDiscarded = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallAudioStats.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallAudioStats.AsObject {
    return {
      framesSent: this.framesSent,
      framesDropped: this.framesDropped,
      framesReceived: this.framesReceived,
      underruns: this.underruns,
      framesDiscarded: this.framesDiscarded
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
  ): CallAudioStats.AsProtobufJSON {
    return {
      framesSent: this.framesSent,
      framesDropped: this.framesDropped,
      framesReceived: this.framesReceived,
      underruns: this.underruns,
      framesDiscarded: this.framesDiscarded
    };
  }
}
export module CallAudioStats {
  /**
   * Standard JavaScript object representation for CallAudioStats
   */
  export interface AsObject {
    framesSent: string;
    framesDropped: string;
    framesReceived: string;
    underruns: string;
    framesDiscarded: string;
  }

  /**
   * Protobuf JSON representation for CallAudioStats
   */
  export interface AsProtobufJSON {
    framesSent: string;
    framesDropped: string;
    framesReceived: string;
    underruns: string;
    framesDiscarded: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallAudioEnded
 */
export class CallAudioEnded implements GrpcMessage {
  static id = 'ondewo.vtsi.CallAudioEnded';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallAudioEnded();
    CallAudioEnded.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallAudioEnded) {
    _instance.reason = _instance.reason || 0;
    _instance.detail = _instance.detail || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallAudioEnded,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.reason = _reader.readEnum();
          break;
        case 2:
          _instance.detail = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CallAudioEnded.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallAudioEnded,
    _writer: BinaryWriter
  ) {
    if (_instance.reason) {
      _writer.writeEnum(1, _instance.reason);
    }
    if (_instance.detail) {
      _writer.writeString(2, _instance.detail);
    }
  }

  private _reason: CallAudioEndReason;
  private _detail: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallAudioEnded to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallAudioEnded.AsObject>) {
    _value = _value || {};
    this.reason = _value.reason;
    this.detail = _value.detail;
    CallAudioEnded.refineValues(this);
  }
  get reason(): CallAudioEndReason {
    return this._reason;
  }
  set reason(value: CallAudioEndReason) {
    this._reason = value;
  }
  get detail(): string {
    return this._detail;
  }
  set detail(value: string) {
    this._detail = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallAudioEnded.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallAudioEnded.AsObject {
    return {
      reason: this.reason,
      detail: this.detail
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
  ): CallAudioEnded.AsProtobufJSON {
    return {
      reason:
        CallAudioEndReason[
          this.reason === null || this.reason === undefined ? 0 : this.reason
        ],
      detail: this.detail
    };
  }
}
export module CallAudioEnded {
  /**
   * Standard JavaScript object representation for CallAudioEnded
   */
  export interface AsObject {
    reason: CallAudioEndReason;
    detail: string;
  }

  /**
   * Protobuf JSON representation for CallAudioEnded
   */
  export interface AsProtobufJSON {
    reason: string;
    detail: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallAudioResponse
 */
export class StreamCallAudioResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallAudioResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallAudioResponse();
    StreamCallAudioResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallAudioResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallAudioResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.started = new CallAudioStarted();
          _reader.readMessage(
            _instance.started,
            CallAudioStarted.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.audio = new CallAudioFrame();
          _reader.readMessage(
            _instance.audio,
            CallAudioFrame.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.stats = new CallAudioStats();
          _reader.readMessage(
            _instance.stats,
            CallAudioStats.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.ended = new CallAudioEnded();
          _reader.readMessage(
            _instance.ended,
            CallAudioEnded.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallAudioResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallAudioResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.started) {
      _writer.writeMessage(
        1,
        _instance.started as any,
        CallAudioStarted.serializeBinaryToWriter
      );
    }
    if (_instance.audio) {
      _writer.writeMessage(
        2,
        _instance.audio as any,
        CallAudioFrame.serializeBinaryToWriter
      );
    }
    if (_instance.stats) {
      _writer.writeMessage(
        3,
        _instance.stats as any,
        CallAudioStats.serializeBinaryToWriter
      );
    }
    if (_instance.ended) {
      _writer.writeMessage(
        4,
        _instance.ended as any,
        CallAudioEnded.serializeBinaryToWriter
      );
    }
  }

  private _started?: CallAudioStarted;
  private _audio?: CallAudioFrame;
  private _stats?: CallAudioStats;
  private _ended?: CallAudioEnded;

  private _response: StreamCallAudioResponse.ResponseCase =
    StreamCallAudioResponse.ResponseCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallAudioResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallAudioResponse.AsObject>) {
    _value = _value || {};
    this.started = _value.started
      ? new CallAudioStarted(_value.started)
      : undefined;
    this.audio = _value.audio ? new CallAudioFrame(_value.audio) : undefined;
    this.stats = _value.stats ? new CallAudioStats(_value.stats) : undefined;
    this.ended = _value.ended ? new CallAudioEnded(_value.ended) : undefined;
    StreamCallAudioResponse.refineValues(this);
  }
  get started(): CallAudioStarted | undefined {
    return this._started;
  }
  set started(value: CallAudioStarted | undefined) {
    if (value !== undefined && value !== null) {
      this._audio = this._stats = this._ended = undefined;
      this._response = StreamCallAudioResponse.ResponseCase.started;
    }
    this._started = value;
  }
  get audio(): CallAudioFrame | undefined {
    return this._audio;
  }
  set audio(value: CallAudioFrame | undefined) {
    if (value !== undefined && value !== null) {
      this._started = this._stats = this._ended = undefined;
      this._response = StreamCallAudioResponse.ResponseCase.audio;
    }
    this._audio = value;
  }
  get stats(): CallAudioStats | undefined {
    return this._stats;
  }
  set stats(value: CallAudioStats | undefined) {
    if (value !== undefined && value !== null) {
      this._started = this._audio = this._ended = undefined;
      this._response = StreamCallAudioResponse.ResponseCase.stats;
    }
    this._stats = value;
  }
  get ended(): CallAudioEnded | undefined {
    return this._ended;
  }
  set ended(value: CallAudioEnded | undefined) {
    if (value !== undefined && value !== null) {
      this._started = this._audio = this._stats = undefined;
      this._response = StreamCallAudioResponse.ResponseCase.ended;
    }
    this._ended = value;
  }
  get response() {
    return this._response;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCallAudioResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallAudioResponse.AsObject {
    return {
      started: this.started ? this.started.toObject() : undefined,
      audio: this.audio ? this.audio.toObject() : undefined,
      stats: this.stats ? this.stats.toObject() : undefined,
      ended: this.ended ? this.ended.toObject() : undefined
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
  ): StreamCallAudioResponse.AsProtobufJSON {
    return {
      started: this.started ? this.started.toProtobufJSON(options) : null,
      audio: this.audio ? this.audio.toProtobufJSON(options) : null,
      stats: this.stats ? this.stats.toProtobufJSON(options) : null,
      ended: this.ended ? this.ended.toProtobufJSON(options) : null
    };
  }
}
export module StreamCallAudioResponse {
  /**
   * Standard JavaScript object representation for StreamCallAudioResponse
   */
  export interface AsObject {
    started?: CallAudioStarted.AsObject;
    audio?: CallAudioFrame.AsObject;
    stats?: CallAudioStats.AsObject;
    ended?: CallAudioEnded.AsObject;
  }

  /**
   * Protobuf JSON representation for StreamCallAudioResponse
   */
  export interface AsProtobufJSON {
    started: CallAudioStarted.AsProtobufJSON | null;
    audio: CallAudioFrame.AsProtobufJSON | null;
    stats: CallAudioStats.AsProtobufJSON | null;
    ended: CallAudioEnded.AsProtobufJSON | null;
  }
  export enum ResponseCase {
    none = 0,
    started = 1,
    audio = 2,
    stats = 3,
    ended = 4
  }
}

/**
 * Message implementation for ondewo.vtsi.ListenCallAudioRequest
 */
export class ListenCallAudioRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListenCallAudioRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListenCallAudioRequest();
    ListenCallAudioRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListenCallAudioRequest) {
    _instance.config = _instance.config || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListenCallAudioRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.config = new StreamCallAudioConfig();
          _reader.readMessage(
            _instance.config,
            StreamCallAudioConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListenCallAudioRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListenCallAudioRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.config) {
      _writer.writeMessage(
        1,
        _instance.config as any,
        StreamCallAudioConfig.serializeBinaryToWriter
      );
    }
  }

  private _config?: StreamCallAudioConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListenCallAudioRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListenCallAudioRequest.AsObject>) {
    _value = _value || {};
    this.config = _value.config
      ? new StreamCallAudioConfig(_value.config)
      : undefined;
    ListenCallAudioRequest.refineValues(this);
  }
  get config(): StreamCallAudioConfig | undefined {
    return this._config;
  }
  set config(value: StreamCallAudioConfig | undefined) {
    this._config = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListenCallAudioRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListenCallAudioRequest.AsObject {
    return {
      config: this.config ? this.config.toObject() : undefined
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
  ): ListenCallAudioRequest.AsProtobufJSON {
    return {
      config: this.config ? this.config.toProtobufJSON(options) : null
    };
  }
}
export module ListenCallAudioRequest {
  /**
   * Standard JavaScript object representation for ListenCallAudioRequest
   */
  export interface AsObject {
    config?: StreamCallAudioConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for ListenCallAudioRequest
   */
  export interface AsProtobufJSON {
    config: StreamCallAudioConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.TransferCallsRequest
 */
export class TransferCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.TransferCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransferCallsRequest();
    TransferCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransferCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.transferCallRequests = _instance.transferCallRequests || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransferCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new TransferCallRequest();
          _reader.readMessage(
            messageInitializer2,
            TransferCallRequest.deserializeBinaryFromReader
          );
          (_instance.transferCallRequests =
            _instance.transferCallRequests || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    TransferCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransferCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.transferCallRequests &&
      _instance.transferCallRequests.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.transferCallRequests as any,
        TransferCallRequest.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _transferCallRequests?: TransferCallRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.transferCallRequests = (_value.transferCallRequests || []).map(
      m => new TransferCallRequest(m)
    );
    TransferCallsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get transferCallRequests(): TransferCallRequest[] | undefined {
    return this._transferCallRequests;
  }
  set transferCallRequests(value: TransferCallRequest[] | undefined) {
    this._transferCallRequests = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransferCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransferCallsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      transferCallRequests: (this.transferCallRequests || []).map(m =>
        m.toObject()
      )
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
  ): TransferCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      transferCallRequests: (this.transferCallRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module TransferCallsRequest {
  /**
   * Standard JavaScript object representation for TransferCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    transferCallRequests?: TransferCallRequest.AsObject[];
  }

  /**
   * Protobuf JSON representation for TransferCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    transferCallRequests: TransferCallRequest.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.TransferCallsResponse
 */
export class TransferCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.TransferCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransferCallsResponse();
    TransferCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransferCallsResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.transferCallResponses = _instance.transferCallResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransferCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new TransferCallResponse();
          _reader.readMessage(
            messageInitializer2,
            TransferCallResponse.deserializeBinaryFromReader
          );
          (_instance.transferCallResponses =
            _instance.transferCallResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TransferCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransferCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.transferCallResponses &&
      _instance.transferCallResponses.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.transferCallResponses as any,
        TransferCallResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _transferCallResponses?: TransferCallResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferCallsResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.transferCallResponses = (_value.transferCallResponses || []).map(
      m => new TransferCallResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    TransferCallsResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get transferCallResponses(): TransferCallResponse[] | undefined {
    return this._transferCallResponses;
  }
  set transferCallResponses(value: TransferCallResponse[] | undefined) {
    this._transferCallResponses = value;
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
    TransferCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransferCallsResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      transferCallResponses: (this.transferCallResponses || []).map(m =>
        m.toObject()
      ),
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
  ): TransferCallsResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      transferCallResponses: (this.transferCallResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module TransferCallsResponse {
  /**
   * Standard JavaScript object representation for TransferCallsResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    transferCallResponses?: TransferCallResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for TransferCallsResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    transferCallResponses: TransferCallResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCallRequest
 */
export class GetCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCallRequest();
    GetCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCallRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callName = _instance.callName || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callName = _reader.readString();
          break;
        case 3:
          _instance.callView = _reader.readEnum();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callName) {
      _writer.writeString(2, _instance.callName);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(3, _instance.callView);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _callView: CallView;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.callView = _value.callView;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    GetCallRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCallRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      callView: this.callView,
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
  ): GetCallRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetCallRequest {
  /**
   * Standard JavaScript object representation for GetCallRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callName: string;
    callView: CallView;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    callView: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.Call
 */
export class Call implements GrpcMessage {
  static id = 'ondewo.vtsi.Call';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Call();
    Call.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Call) {
    _instance.name = _instance.name || '';
    _instance.sipAccount = _instance.sipAccount || '';
    _instance.containerName = _instance.containerName || '';
    _instance.callType = _instance.callType || 0;
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.sipStatus = _instance.sipStatus || undefined;
    _instance.sipStatusHistory = _instance.sipStatusHistory || undefined;
    _instance.servicesStatuses = _instance.servicesStatuses || undefined;
    _instance.active = _instance.active || false;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.commonServicesConfig =
      _instance.commonServicesConfig || undefined;
    _instance.mediaControl = _instance.mediaControl || undefined;
    _instance.participants = _instance.participants || [];
    _instance.lastTransfer = _instance.lastTransfer || undefined;
    _instance.sipCallId = _instance.sipCallId || '';
    _instance.labels = _instance.labels || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Call, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.sipAccount = _reader.readString();
          break;
        case 3:
          _instance.containerName = _reader.readString();
          break;
        case 4:
          _instance.callType = _reader.readEnum();
          break;
        case 5:
          _instance.phoneNumber = _reader.readString();
          break;
        case 6:
          _instance.startTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.endTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 9:
          _instance.sipStatus = new ondewoSip012.SipStatus();
          _reader.readMessage(
            _instance.sipStatus,
            ondewoSip012.SipStatus.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.sipStatusHistory = new ondewoSip012.SipStatusHistoryResponse();
          _reader.readMessage(
            _instance.sipStatusHistory,
            ondewoSip012.SipStatusHistoryResponse.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.servicesStatuses = new AllServicesStatuses();
          _reader.readMessage(
            _instance.servicesStatuses,
            AllServicesStatuses.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.active = _reader.readBool();
          break;
        case 13:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 14:
          _instance.commonServicesConfig = new ondewoVtsi013.CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            ondewoVtsi013.CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.sipPort = _reader.readInt32();
          break;
        case 16:
          _instance.csiPort = _reader.readInt32();
          break;
        case 17:
          _instance.nluSessionName = _reader.readString();
          break;
        case 18:
          _instance.platforms = _reader.readEnum();
          break;
        case 19:
          _instance.redialRecommended = _reader.readBool();
          break;
        case 20:
          _instance.redialReason = _reader.readString();
          break;
        case 21:
          _instance.answeringMachineDetectionEndDescription = _reader.readString();
          break;
        case 22:
          _instance.mediaControl = new CallMediaControlState();
          _reader.readMessage(
            _instance.mediaControl,
            CallMediaControlState.deserializeBinaryFromReader
          );
          break;
        case 23:
          const messageInitializer23 = new CallParticipant();
          _reader.readMessage(
            messageInitializer23,
            CallParticipant.deserializeBinaryFromReader
          );
          (_instance.participants = _instance.participants || []).push(
            messageInitializer23
          );
          break;
        case 24:
          _instance.lastTransfer = new CallTransferRecord();
          _reader.readMessage(
            _instance.lastTransfer,
            CallTransferRecord.deserializeBinaryFromReader
          );
          break;
        case 25:
          _instance.sipCallId = _reader.readString();
          break;
        case 26:
          const msg_26 = {} as any;
          _reader.readMessage(
            msg_26,
            Call.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_26.key] = msg_26.value;
          break;
        default:
          _reader.skipField();
      }
    }

    Call.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Call, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.sipAccount) {
      _writer.writeString(2, _instance.sipAccount);
    }
    if (_instance.containerName) {
      _writer.writeString(3, _instance.containerName);
    }
    if (_instance.callType) {
      _writer.writeEnum(4, _instance.callType);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(5, _instance.phoneNumber);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        6,
        _instance.startTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        7,
        _instance.endTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(8, _instance.sipStatusType);
    }
    if (_instance.sipStatus) {
      _writer.writeMessage(
        9,
        _instance.sipStatus as any,
        ondewoSip012.SipStatus.serializeBinaryToWriter
      );
    }
    if (_instance.sipStatusHistory) {
      _writer.writeMessage(
        10,
        _instance.sipStatusHistory as any,
        ondewoSip012.SipStatusHistoryResponse.serializeBinaryToWriter
      );
    }
    if (_instance.servicesStatuses) {
      _writer.writeMessage(
        11,
        _instance.servicesStatuses as any,
        AllServicesStatuses.serializeBinaryToWriter
      );
    }
    if (_instance.active) {
      _writer.writeBool(12, _instance.active);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(13, _instance.vtsiProjectName);
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        14,
        _instance.commonServicesConfig as any,
        ondewoVtsi013.CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.sipPort !== undefined && _instance.sipPort !== null) {
      _writer.writeInt32(15, _instance.sipPort);
    }
    if (_instance.csiPort !== undefined && _instance.csiPort !== null) {
      _writer.writeInt32(16, _instance.csiPort);
    }
    if (
      _instance.nluSessionName !== undefined &&
      _instance.nluSessionName !== null
    ) {
      _writer.writeString(17, _instance.nluSessionName);
    }
    if (_instance.platforms !== undefined && _instance.platforms !== null) {
      _writer.writeEnum(18, _instance.platforms);
    }
    if (
      _instance.redialRecommended !== undefined &&
      _instance.redialRecommended !== null
    ) {
      _writer.writeBool(19, _instance.redialRecommended);
    }
    if (
      _instance.redialReason !== undefined &&
      _instance.redialReason !== null
    ) {
      _writer.writeString(20, _instance.redialReason);
    }
    if (
      _instance.answeringMachineDetectionEndDescription !== undefined &&
      _instance.answeringMachineDetectionEndDescription !== null
    ) {
      _writer.writeString(
        21,
        _instance.answeringMachineDetectionEndDescription
      );
    }
    if (_instance.mediaControl) {
      _writer.writeMessage(
        22,
        _instance.mediaControl as any,
        CallMediaControlState.serializeBinaryToWriter
      );
    }
    if (_instance.participants && _instance.participants.length) {
      _writer.writeRepeatedMessage(
        23,
        _instance.participants as any,
        CallParticipant.serializeBinaryToWriter
      );
    }
    if (_instance.lastTransfer) {
      _writer.writeMessage(
        24,
        _instance.lastTransfer as any,
        CallTransferRecord.serializeBinaryToWriter
      );
    }
    if (_instance.sipCallId) {
      _writer.writeString(25, _instance.sipCallId);
    }
    if (!!_instance.labels) {
      const keys_26 = Object.keys(_instance.labels as any);

      if (keys_26.length) {
        const repeated_26 = keys_26
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          26,
          repeated_26,
          Call.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _name: string;
  private _sipAccount: string;
  private _containerName: string;
  private _callType: CallType;
  private _phoneNumber: string;
  private _startTime?: googleProtobuf005.Timestamp;
  private _endTime?: googleProtobuf005.Timestamp;
  private _sipStatusType: ondewoSip012.SipStatus.StatusType;
  private _sipStatus?: ondewoSip012.SipStatus;
  private _sipStatusHistory?: ondewoSip012.SipStatusHistoryResponse;
  private _servicesStatuses?: AllServicesStatuses;
  private _active: boolean;
  private _vtsiProjectName: string;
  private _commonServicesConfig?: ondewoVtsi013.CommonServicesConfig;
  private _sipPort: number;
  private _csiPort: number;
  private _nluSessionName: string;
  private _platforms: ondewoNlu008.Intent.Message.Platform;
  private _redialRecommended: boolean;
  private _redialReason: string;
  private _answeringMachineDetectionEndDescription: string;
  private _mediaControl?: CallMediaControlState;
  private _participants?: CallParticipant[];
  private _lastTransfer?: CallTransferRecord;
  private _sipCallId: string;
  private _labels: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Call to deeply clone from
   */
  constructor(_value?: RecursivePartial<Call.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.sipAccount = _value.sipAccount;
    this.containerName = _value.containerName;
    this.callType = _value.callType;
    this.phoneNumber = _value.phoneNumber;
    this.startTime = _value.startTime
      ? new googleProtobuf005.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf005.Timestamp(_value.endTime)
      : undefined;
    this.sipStatusType = _value.sipStatusType;
    this.sipStatus = _value.sipStatus
      ? new ondewoSip012.SipStatus(_value.sipStatus)
      : undefined;
    this.sipStatusHistory = _value.sipStatusHistory
      ? new ondewoSip012.SipStatusHistoryResponse(_value.sipStatusHistory)
      : undefined;
    this.servicesStatuses = _value.servicesStatuses
      ? new AllServicesStatuses(_value.servicesStatuses)
      : undefined;
    this.active = _value.active;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new ondewoVtsi013.CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.sipPort = _value.sipPort;
    this.csiPort = _value.csiPort;
    this.nluSessionName = _value.nluSessionName;
    this.platforms = _value.platforms;
    this.redialRecommended = _value.redialRecommended;
    this.redialReason = _value.redialReason;
    this.answeringMachineDetectionEndDescription =
      _value.answeringMachineDetectionEndDescription;
    this.mediaControl = _value.mediaControl
      ? new CallMediaControlState(_value.mediaControl)
      : undefined;
    this.participants = (_value.participants || []).map(
      m => new CallParticipant(m)
    );
    this.lastTransfer = _value.lastTransfer
      ? new CallTransferRecord(_value.lastTransfer)
      : undefined;
    this.sipCallId = _value.sipCallId;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      Call.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get sipAccount(): string {
    return this._sipAccount;
  }
  set sipAccount(value: string) {
    this._sipAccount = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get callType(): CallType {
    return this._callType;
  }
  set callType(value: CallType) {
    this._callType = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  get startTime(): googleProtobuf005.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf005.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf005.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf005.Timestamp | undefined) {
    this._endTime = value;
  }
  get sipStatusType(): ondewoSip012.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip012.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get sipStatus(): ondewoSip012.SipStatus | undefined {
    return this._sipStatus;
  }
  set sipStatus(value: ondewoSip012.SipStatus | undefined) {
    this._sipStatus = value;
  }
  get sipStatusHistory(): ondewoSip012.SipStatusHistoryResponse | undefined {
    return this._sipStatusHistory;
  }
  set sipStatusHistory(
    value: ondewoSip012.SipStatusHistoryResponse | undefined
  ) {
    this._sipStatusHistory = value;
  }
  get servicesStatuses(): AllServicesStatuses | undefined {
    return this._servicesStatuses;
  }
  set servicesStatuses(value: AllServicesStatuses | undefined) {
    this._servicesStatuses = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get commonServicesConfig(): ondewoVtsi013.CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(
    value: ondewoVtsi013.CommonServicesConfig | undefined
  ) {
    this._commonServicesConfig = value;
  }
  get sipPort(): number {
    return this._sipPort;
  }
  set sipPort(value: number) {
    this._sipPort = value;
  }
  get csiPort(): number {
    return this._csiPort;
  }
  set csiPort(value: number) {
    this._csiPort = value;
  }
  get nluSessionName(): string {
    return this._nluSessionName;
  }
  set nluSessionName(value: string) {
    this._nluSessionName = value;
  }
  get platforms(): ondewoNlu008.Intent.Message.Platform {
    return this._platforms;
  }
  set platforms(value: ondewoNlu008.Intent.Message.Platform) {
    this._platforms = value;
  }
  get redialRecommended(): boolean {
    return this._redialRecommended;
  }
  set redialRecommended(value: boolean) {
    this._redialRecommended = value;
  }
  get redialReason(): string {
    return this._redialReason;
  }
  set redialReason(value: string) {
    this._redialReason = value;
  }
  get answeringMachineDetectionEndDescription(): string {
    return this._answeringMachineDetectionEndDescription;
  }
  set answeringMachineDetectionEndDescription(value: string) {
    this._answeringMachineDetectionEndDescription = value;
  }
  get mediaControl(): CallMediaControlState | undefined {
    return this._mediaControl;
  }
  set mediaControl(value: CallMediaControlState | undefined) {
    this._mediaControl = value;
  }
  get participants(): CallParticipant[] | undefined {
    return this._participants;
  }
  set participants(value: CallParticipant[] | undefined) {
    this._participants = value;
  }
  get lastTransfer(): CallTransferRecord | undefined {
    return this._lastTransfer;
  }
  set lastTransfer(value: CallTransferRecord | undefined) {
    this._lastTransfer = value;
  }
  get sipCallId(): string {
    return this._sipCallId;
  }
  set sipCallId(value: string) {
    this._sipCallId = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Call.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Call.AsObject {
    return {
      name: this.name,
      sipAccount: this.sipAccount,
      containerName: this.containerName,
      callType: this.callType,
      phoneNumber: this.phoneNumber,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      sipStatusType: this.sipStatusType,
      sipStatus: this.sipStatus ? this.sipStatus.toObject() : undefined,
      sipStatusHistory: this.sipStatusHistory
        ? this.sipStatusHistory.toObject()
        : undefined,
      servicesStatuses: this.servicesStatuses
        ? this.servicesStatuses.toObject()
        : undefined,
      active: this.active,
      vtsiProjectName: this.vtsiProjectName,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toObject()
        : undefined,
      sipPort: this.sipPort,
      csiPort: this.csiPort,
      nluSessionName: this.nluSessionName,
      platforms: this.platforms,
      redialRecommended: this.redialRecommended,
      redialReason: this.redialReason,
      answeringMachineDetectionEndDescription: this
        .answeringMachineDetectionEndDescription,
      mediaControl: this.mediaControl
        ? this.mediaControl.toObject()
        : undefined,
      participants: (this.participants || []).map(m => m.toObject()),
      lastTransfer: this.lastTransfer
        ? this.lastTransfer.toObject()
        : undefined,
      sipCallId: this.sipCallId,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {}
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
  ): Call.AsProtobufJSON {
    return {
      name: this.name,
      sipAccount: this.sipAccount,
      containerName: this.containerName,
      callType:
        CallType[
          this.callType === null || this.callType === undefined
            ? 0
            : this.callType
        ],
      phoneNumber: this.phoneNumber,
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      sipStatusType:
        ondewoSip012.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      sipStatus: this.sipStatus ? this.sipStatus.toProtobufJSON(options) : null,
      sipStatusHistory: this.sipStatusHistory
        ? this.sipStatusHistory.toProtobufJSON(options)
        : null,
      servicesStatuses: this.servicesStatuses
        ? this.servicesStatuses.toProtobufJSON(options)
        : null,
      active: this.active,
      vtsiProjectName: this.vtsiProjectName,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null,
      sipPort: this.sipPort,
      csiPort: this.csiPort,
      nluSessionName: this.nluSessionName,
      platforms:
        ondewoNlu008.Intent.Message.Platform[
          this.platforms === null || this.platforms === undefined
            ? 0
            : this.platforms
        ],
      redialRecommended: this.redialRecommended,
      redialReason: this.redialReason,
      answeringMachineDetectionEndDescription: this
        .answeringMachineDetectionEndDescription,
      mediaControl: this.mediaControl
        ? this.mediaControl.toProtobufJSON(options)
        : null,
      participants: (this.participants || []).map(m =>
        m.toProtobufJSON(options)
      ),
      lastTransfer: this.lastTransfer
        ? this.lastTransfer.toProtobufJSON(options)
        : null,
      sipCallId: this.sipCallId,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {}
    };
  }
}
export module Call {
  /**
   * Standard JavaScript object representation for Call
   */
  export interface AsObject {
    name: string;
    sipAccount: string;
    containerName: string;
    callType: CallType;
    phoneNumber: string;
    startTime?: googleProtobuf005.Timestamp.AsObject;
    endTime?: googleProtobuf005.Timestamp.AsObject;
    sipStatusType: ondewoSip012.SipStatus.StatusType;
    sipStatus?: ondewoSip012.SipStatus.AsObject;
    sipStatusHistory?: ondewoSip012.SipStatusHistoryResponse.AsObject;
    servicesStatuses?: AllServicesStatuses.AsObject;
    active: boolean;
    vtsiProjectName: string;
    commonServicesConfig?: ondewoVtsi013.CommonServicesConfig.AsObject;
    sipPort: number;
    csiPort: number;
    nluSessionName: string;
    platforms: ondewoNlu008.Intent.Message.Platform;
    redialRecommended: boolean;
    redialReason: string;
    answeringMachineDetectionEndDescription: string;
    mediaControl?: CallMediaControlState.AsObject;
    participants?: CallParticipant.AsObject[];
    lastTransfer?: CallTransferRecord.AsObject;
    sipCallId: string;
    labels: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for Call
   */
  export interface AsProtobufJSON {
    name: string;
    sipAccount: string;
    containerName: string;
    callType: string;
    phoneNumber: string;
    startTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    sipStatusType: string;
    sipStatus: ondewoSip012.SipStatus.AsProtobufJSON | null;
    sipStatusHistory: ondewoSip012.SipStatusHistoryResponse.AsProtobufJSON | null;
    servicesStatuses: AllServicesStatuses.AsProtobufJSON | null;
    active: boolean;
    vtsiProjectName: string;
    commonServicesConfig: ondewoVtsi013.CommonServicesConfig.AsProtobufJSON | null;
    sipPort: number;
    csiPort: number;
    nluSessionName: string;
    platforms: string;
    redialRecommended: boolean;
    redialReason: string;
    answeringMachineDetectionEndDescription: string;
    mediaControl: CallMediaControlState.AsProtobufJSON | null;
    participants: CallParticipant.AsProtobufJSON[] | null;
    lastTransfer: CallTransferRecord.AsProtobufJSON | null;
    sipCallId: string;
    labels: { [prop: string]: string };
  }

  /**
   * Message implementation for ondewo.vtsi.Call.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.Call.LabelsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new LabelsEntry();
      LabelsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LabelsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: LabelsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      LabelsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: LabelsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LabelsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LabelsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      LabelsEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      LabelsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LabelsEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): LabelsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module LabelsEntry {
    /**
     * Standard JavaScript object representation for LabelsEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for LabelsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.CallFilter
 */
export class CallFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.CallFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallFilter();
    CallFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallFilter) {
    _instance.callNames = _instance.callNames || [];
    _instance.nluSessionNames = _instance.nluSessionNames || [];
    _instance.sipAccounts = _instance.sipAccounts || [];
    _instance.phoneNumbers = _instance.phoneNumbers || [];
    _instance.containerNames = _instance.containerNames || [];
    _instance.sipPorts = _instance.sipPorts || [];
    _instance.csiPorts = _instance.csiPorts || [];
    _instance.callTypes = _instance.callTypes || [];
    _instance.sipStatusTypes = _instance.sipStatusTypes || [];
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.platforms = _instance.platforms || [];

    _instance.labels = _instance.labels || {};
    _instance.callerNames = _instance.callerNames || [];
    _instance.listenerNames = _instance.listenerNames || [];
    _instance.transferOutcomes = _instance.transferOutcomes || [];
    _instance.sipPortNumbers = _instance.sipPortNumbers || [];
    _instance.csiPortNumbers = _instance.csiPortNumbers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.callNames = _instance.callNames || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.nluSessionNames = _instance.nluSessionNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.sipAccounts = _instance.sipAccounts || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.phoneNumbers = _instance.phoneNumbers || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.containerNames = _instance.containerNames || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.sipPorts = _instance.sipPorts || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.csiPorts = _instance.csiPorts || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _reader.readPackableEnumInto(
            (_instance.callTypes = _instance.callTypes || [])
          );
          break;
        case 9:
          _reader.readPackableEnumInto(
            (_instance.sipStatusTypes = _instance.sipStatusTypes || [])
          );
          break;
        case 10:
          _instance.callStatus = _reader.readEnum();
          break;
        case 11:
          _instance.startTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.endTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.durationInSMin = _reader.readFloat();
          break;
        case 14:
          _instance.durationInSMax = _reader.readFloat();
          break;
        case 15:
          _reader.readPackableEnumInto(
            (_instance.platforms = _instance.platforms || [])
          );
          break;
        case 16:
          _instance.campaignName = _reader.readString();
          break;
        case 17:
          _instance.campaignDisplayName = _reader.readString();
          break;
        case 18:
          const msg_18 = {} as any;
          _reader.readMessage(
            msg_18,
            CallFilter.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_18.key] = msg_18.value;
          break;
        case 19:
          (_instance.callerNames = _instance.callerNames || []).push(
            _reader.readString()
          );
          break;
        case 20:
          (_instance.listenerNames = _instance.listenerNames || []).push(
            _reader.readString()
          );
          break;
        case 21:
          _instance.redialRecommended = _reader.readBool();
          break;
        case 22:
          _reader.readPackableEnumInto(
            (_instance.transferOutcomes = _instance.transferOutcomes || [])
          );
          break;
        case 23:
          _reader.readPackableInt32Into(
            (_instance.sipPortNumbers = _instance.sipPortNumbers || [])
          );
          break;
        case 24:
          _reader.readPackableInt32Into(
            (_instance.csiPortNumbers = _instance.csiPortNumbers || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CallFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CallFilter, _writer: BinaryWriter) {
    if (_instance.callNames && _instance.callNames.length) {
      _writer.writeRepeatedString(1, _instance.callNames);
    }
    if (_instance.nluSessionNames && _instance.nluSessionNames.length) {
      _writer.writeRepeatedString(2, _instance.nluSessionNames);
    }
    if (_instance.sipAccounts && _instance.sipAccounts.length) {
      _writer.writeRepeatedString(3, _instance.sipAccounts);
    }
    if (_instance.phoneNumbers && _instance.phoneNumbers.length) {
      _writer.writeRepeatedString(4, _instance.phoneNumbers);
    }
    if (_instance.containerNames && _instance.containerNames.length) {
      _writer.writeRepeatedString(5, _instance.containerNames);
    }
    if (_instance.sipPorts && _instance.sipPorts.length) {
      _writer.writeRepeatedString(6, _instance.sipPorts);
    }
    if (_instance.csiPorts && _instance.csiPorts.length) {
      _writer.writeRepeatedString(7, _instance.csiPorts);
    }
    if (_instance.callTypes && _instance.callTypes.length) {
      _writer.writePackedEnum(8, _instance.callTypes);
    }
    if (_instance.sipStatusTypes && _instance.sipStatusTypes.length) {
      _writer.writePackedEnum(9, _instance.sipStatusTypes);
    }
    if (_instance.callStatus !== undefined && _instance.callStatus !== null) {
      _writer.writeEnum(10, _instance.callStatus);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        11,
        _instance.startTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        12,
        _instance.endTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (
      _instance.durationInSMin !== undefined &&
      _instance.durationInSMin !== null
    ) {
      _writer.writeFloat(13, _instance.durationInSMin);
    }
    if (
      _instance.durationInSMax !== undefined &&
      _instance.durationInSMax !== null
    ) {
      _writer.writeFloat(14, _instance.durationInSMax);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(15, _instance.platforms);
    }
    if (_instance.campaignName || _instance.campaignName === '') {
      _writer.writeString(16, _instance.campaignName);
    }
    if (_instance.campaignDisplayName || _instance.campaignDisplayName === '') {
      _writer.writeString(17, _instance.campaignDisplayName);
    }
    if (!!_instance.labels) {
      const keys_18 = Object.keys(_instance.labels as any);

      if (keys_18.length) {
        const repeated_18 = keys_18
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          18,
          repeated_18,
          CallFilter.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.callerNames && _instance.callerNames.length) {
      _writer.writeRepeatedString(19, _instance.callerNames);
    }
    if (_instance.listenerNames && _instance.listenerNames.length) {
      _writer.writeRepeatedString(20, _instance.listenerNames);
    }
    if (
      _instance.redialRecommended !== undefined &&
      _instance.redialRecommended !== null
    ) {
      _writer.writeBool(21, _instance.redialRecommended);
    }
    if (_instance.transferOutcomes && _instance.transferOutcomes.length) {
      _writer.writePackedEnum(22, _instance.transferOutcomes);
    }
    if (_instance.sipPortNumbers && _instance.sipPortNumbers.length) {
      _writer.writePackedInt32(23, _instance.sipPortNumbers);
    }
    if (_instance.csiPortNumbers && _instance.csiPortNumbers.length) {
      _writer.writePackedInt32(24, _instance.csiPortNumbers);
    }
  }

  private _callNames: string[];
  private _nluSessionNames: string[];
  private _sipAccounts: string[];
  private _phoneNumbers: string[];
  private _containerNames: string[];
  private _sipPorts: string[];
  private _csiPorts: string[];
  private _callTypes: CallType[];
  private _sipStatusTypes: ondewoSip012.SipStatus.StatusType[];
  private _callStatus: CallStatus;
  private _startTime?: googleProtobuf005.Timestamp;
  private _endTime?: googleProtobuf005.Timestamp;
  private _durationInSMin: number;
  private _durationInSMax: number;
  private _platforms: ondewoNlu008.Intent.Message.Platform[];
  private _campaignName: string;
  private _campaignDisplayName: string;
  private _labels: { [prop: string]: string };
  private _callerNames: string[];
  private _listenerNames: string[];
  private _redialRecommended: boolean;
  private _transferOutcomes: TransferOutcome[];
  private _sipPortNumbers: number[];
  private _csiPortNumbers: number[];

  private _campaign: CallFilter.CampaignCase = CallFilter.CampaignCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallFilter.AsObject>) {
    _value = _value || {};
    this.callNames = (_value.callNames || []).slice();
    this.nluSessionNames = (_value.nluSessionNames || []).slice();
    this.sipAccounts = (_value.sipAccounts || []).slice();
    this.phoneNumbers = (_value.phoneNumbers || []).slice();
    this.containerNames = (_value.containerNames || []).slice();
    this.sipPorts = (_value.sipPorts || []).slice();
    this.csiPorts = (_value.csiPorts || []).slice();
    this.callTypes = (_value.callTypes || []).slice();
    this.sipStatusTypes = (_value.sipStatusTypes || []).slice();
    this.callStatus = _value.callStatus;
    this.startTime = _value.startTime
      ? new googleProtobuf005.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf005.Timestamp(_value.endTime)
      : undefined;
    this.durationInSMin = _value.durationInSMin;
    this.durationInSMax = _value.durationInSMax;
    this.platforms = (_value.platforms || []).slice();
    this.campaignName = _value.campaignName;
    this.campaignDisplayName = _value.campaignDisplayName;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      (this.callerNames = (_value.callerNames || []).slice());
    this.listenerNames = (_value.listenerNames || []).slice();
    this.redialRecommended = _value.redialRecommended;
    this.transferOutcomes = (_value.transferOutcomes || []).slice();
    this.sipPortNumbers = (_value.sipPortNumbers || []).slice();
    this.csiPortNumbers = (_value.csiPortNumbers || []).slice();
    CallFilter.refineValues(this);
  }
  get callNames(): string[] {
    return this._callNames;
  }
  set callNames(value: string[]) {
    this._callNames = value;
  }
  get nluSessionNames(): string[] {
    return this._nluSessionNames;
  }
  set nluSessionNames(value: string[]) {
    this._nluSessionNames = value;
  }
  get sipAccounts(): string[] {
    return this._sipAccounts;
  }
  set sipAccounts(value: string[]) {
    this._sipAccounts = value;
  }
  get phoneNumbers(): string[] {
    return this._phoneNumbers;
  }
  set phoneNumbers(value: string[]) {
    this._phoneNumbers = value;
  }
  get containerNames(): string[] {
    return this._containerNames;
  }
  set containerNames(value: string[]) {
    this._containerNames = value;
  }
  get sipPorts(): string[] {
    return this._sipPorts;
  }
  set sipPorts(value: string[]) {
    this._sipPorts = value;
  }
  get csiPorts(): string[] {
    return this._csiPorts;
  }
  set csiPorts(value: string[]) {
    this._csiPorts = value;
  }
  get callTypes(): CallType[] {
    return this._callTypes;
  }
  set callTypes(value: CallType[]) {
    this._callTypes = value;
  }
  get sipStatusTypes(): ondewoSip012.SipStatus.StatusType[] {
    return this._sipStatusTypes;
  }
  set sipStatusTypes(value: ondewoSip012.SipStatus.StatusType[]) {
    this._sipStatusTypes = value;
  }
  get callStatus(): CallStatus {
    return this._callStatus;
  }
  set callStatus(value: CallStatus) {
    this._callStatus = value;
  }
  get startTime(): googleProtobuf005.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf005.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf005.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf005.Timestamp | undefined) {
    this._endTime = value;
  }
  get durationInSMin(): number {
    return this._durationInSMin;
  }
  set durationInSMin(value: number) {
    this._durationInSMin = value;
  }
  get durationInSMax(): number {
    return this._durationInSMax;
  }
  set durationInSMax(value: number) {
    this._durationInSMax = value;
  }
  get platforms(): ondewoNlu008.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu008.Intent.Message.Platform[]) {
    this._platforms = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignDisplayName = undefined;
      this._campaign = CallFilter.CampaignCase.campaignName;
    }
    this._campaignName = value;
  }
  get campaignDisplayName(): string {
    return this._campaignDisplayName;
  }
  set campaignDisplayName(value: string) {
    if (value !== undefined && value !== null) {
      this._campaignName = undefined;
      this._campaign = CallFilter.CampaignCase.campaignDisplayName;
    }
    this._campaignDisplayName = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }
  get callerNames(): string[] {
    return this._callerNames;
  }
  set callerNames(value: string[]) {
    this._callerNames = value;
  }
  get listenerNames(): string[] {
    return this._listenerNames;
  }
  set listenerNames(value: string[]) {
    this._listenerNames = value;
  }
  get redialRecommended(): boolean {
    return this._redialRecommended;
  }
  set redialRecommended(value: boolean) {
    this._redialRecommended = value;
  }
  get transferOutcomes(): TransferOutcome[] {
    return this._transferOutcomes;
  }
  set transferOutcomes(value: TransferOutcome[]) {
    this._transferOutcomes = value;
  }
  get sipPortNumbers(): number[] {
    return this._sipPortNumbers;
  }
  set sipPortNumbers(value: number[]) {
    this._sipPortNumbers = value;
  }
  get csiPortNumbers(): number[] {
    return this._csiPortNumbers;
  }
  set csiPortNumbers(value: number[]) {
    this._csiPortNumbers = value;
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
    CallFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallFilter.AsObject {
    return {
      callNames: (this.callNames || []).slice(),
      nluSessionNames: (this.nluSessionNames || []).slice(),
      sipAccounts: (this.sipAccounts || []).slice(),
      phoneNumbers: (this.phoneNumbers || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      sipPorts: (this.sipPorts || []).slice(),
      csiPorts: (this.csiPorts || []).slice(),
      callTypes: (this.callTypes || []).slice(),
      sipStatusTypes: (this.sipStatusTypes || []).slice(),
      callStatus: this.callStatus,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      durationInSMin: this.durationInSMin,
      durationInSMax: this.durationInSMax,
      platforms: (this.platforms || []).slice(),
      campaignName: this.campaignName,
      campaignDisplayName: this.campaignDisplayName,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      callerNames: (this.callerNames || []).slice(),
      listenerNames: (this.listenerNames || []).slice(),
      redialRecommended: this.redialRecommended,
      transferOutcomes: (this.transferOutcomes || []).slice(),
      sipPortNumbers: (this.sipPortNumbers || []).slice(),
      csiPortNumbers: (this.csiPortNumbers || []).slice()
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
  ): CallFilter.AsProtobufJSON {
    return {
      callNames: (this.callNames || []).slice(),
      nluSessionNames: (this.nluSessionNames || []).slice(),
      sipAccounts: (this.sipAccounts || []).slice(),
      phoneNumbers: (this.phoneNumbers || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      sipPorts: (this.sipPorts || []).slice(),
      csiPorts: (this.csiPorts || []).slice(),
      callTypes: (this.callTypes || []).map(v => CallType[v]),
      sipStatusTypes: (this.sipStatusTypes || []).map(
        v => ondewoSip012.SipStatus.StatusType[v]
      ),
      callStatus:
        CallStatus[
          this.callStatus === null || this.callStatus === undefined
            ? 0
            : this.callStatus
        ],
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      durationInSMin: this.durationInSMin,
      durationInSMax: this.durationInSMax,
      platforms: (this.platforms || []).map(
        v => ondewoNlu008.Intent.Message.Platform[v]
      ),
      campaignName:
        this.campaignName === null || this.campaignName === undefined
          ? null
          : this.campaignName,
      campaignDisplayName:
        this.campaignDisplayName === null ||
        this.campaignDisplayName === undefined
          ? null
          : this.campaignDisplayName,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      callerNames: (this.callerNames || []).slice(),
      listenerNames: (this.listenerNames || []).slice(),
      redialRecommended: this.redialRecommended,
      transferOutcomes: (this.transferOutcomes || []).map(
        v => TransferOutcome[v]
      ),
      sipPortNumbers: (this.sipPortNumbers || []).slice(),
      csiPortNumbers: (this.csiPortNumbers || []).slice()
    };
  }
}
export module CallFilter {
  /**
   * Standard JavaScript object representation for CallFilter
   */
  export interface AsObject {
    callNames: string[];
    nluSessionNames: string[];
    sipAccounts: string[];
    phoneNumbers: string[];
    containerNames: string[];
    sipPorts: string[];
    csiPorts: string[];
    callTypes: CallType[];
    sipStatusTypes: ondewoSip012.SipStatus.StatusType[];
    callStatus: CallStatus;
    startTime?: googleProtobuf005.Timestamp.AsObject;
    endTime?: googleProtobuf005.Timestamp.AsObject;
    durationInSMin: number;
    durationInSMax: number;
    platforms: ondewoNlu008.Intent.Message.Platform[];
    campaignName: string;
    campaignDisplayName: string;
    labels: { [prop: string]: string };
    callerNames: string[];
    listenerNames: string[];
    redialRecommended: boolean;
    transferOutcomes: TransferOutcome[];
    sipPortNumbers: number[];
    csiPortNumbers: number[];
  }

  /**
   * Protobuf JSON representation for CallFilter
   */
  export interface AsProtobufJSON {
    callNames: string[];
    nluSessionNames: string[];
    sipAccounts: string[];
    phoneNumbers: string[];
    containerNames: string[];
    sipPorts: string[];
    csiPorts: string[];
    callTypes: string[];
    sipStatusTypes: string[];
    callStatus: string;
    startTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    durationInSMin: number;
    durationInSMax: number;
    platforms: string[];
    campaignName: string | null;
    campaignDisplayName: string | null;
    labels: { [prop: string]: string };
    callerNames: string[];
    listenerNames: string[];
    redialRecommended: boolean;
    transferOutcomes: string[];
    sipPortNumbers: number[];
    csiPortNumbers: number[];
  }
  export enum CampaignCase {
    none = 0,
    campaignName = 1,
    campaignDisplayName = 2
  }
  /**
   * Message implementation for ondewo.vtsi.CallFilter.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.CallFilter.LabelsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new LabelsEntry();
      LabelsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LabelsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: LabelsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      LabelsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: LabelsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LabelsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LabelsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      LabelsEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      LabelsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LabelsEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): LabelsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module LabelsEntry {
    /**
     * Standard JavaScript object representation for LabelsEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for LabelsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.CallSorting
 */
export class CallSorting implements GrpcMessage {
  static id = 'ondewo.vtsi.CallSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallSorting();
    CallSorting.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallSorting,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sortingField = _reader.readEnum();
          break;
        case 2:
          _instance.sortingMode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    CallSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: CallSorting.CallSortingField;
  private _sortingMode: ondewoVtsi015.VtsiProjectSortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    CallSorting.refineValues(this);
  }
  get sortingField(): CallSorting.CallSortingField {
    return this._sortingField;
  }
  set sortingField(value: CallSorting.CallSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoVtsi015.VtsiProjectSortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoVtsi015.VtsiProjectSortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallSorting.AsObject {
    return {
      sortingField: this.sortingField,
      sortingMode: this.sortingMode
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
  ): CallSorting.AsProtobufJSON {
    return {
      sortingField:
        CallSorting.CallSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoVtsi015.VtsiProjectSortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module CallSorting {
  /**
   * Standard JavaScript object representation for CallSorting
   */
  export interface AsObject {
    sortingField: CallSorting.CallSortingField;
    sortingMode: ondewoVtsi015.VtsiProjectSortingMode;
  }

  /**
   * Protobuf JSON representation for CallSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum CallSortingField {
    NO_CALL_SORTING = 0,
    SORT_CALL_BY_START_TIME = 1
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallsRequest
 */
export class ListCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallsRequest();
    ListCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callFilter = _instance.callFilter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.callSorting = _instance.callSorting || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callView = _reader.readEnum();
          break;
        case 3:
          _instance.callFilter = new CallFilter();
          _reader.readMessage(
            _instance.callFilter,
            CallFilter.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.pageSize = _reader.readInt32();
          break;
        case 7:
          _instance.callSorting = new CallSorting();
          _reader.readMessage(
            _instance.callSorting,
            CallSorting.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callView !== undefined && _instance.callView !== null) {
      _writer.writeEnum(2, _instance.callView);
    }
    if (_instance.callFilter) {
      _writer.writeMessage(
        3,
        _instance.callFilter as any,
        CallFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(4, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        5,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(6, _instance.pageSize);
    }
    if (_instance.callSorting) {
      _writer.writeMessage(
        7,
        _instance.callSorting as any,
        CallSorting.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _callView: CallView;
  private _callFilter?: CallFilter;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _pageSize: number;
  private _callSorting?: CallSorting;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callView = _value.callView;
    this.callFilter = _value.callFilter
      ? new CallFilter(_value.callFilter)
      : undefined;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.callSorting = _value.callSorting
      ? new CallSorting(_value.callSorting)
      : undefined;
    ListCallsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callView(): CallView {
    return this._callView;
  }
  set callView(value: CallView) {
    this._callView = value;
  }
  get callFilter(): CallFilter | undefined {
    return this._callFilter;
  }
  set callFilter(value: CallFilter | undefined) {
    this._callFilter = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get callSorting(): CallSorting | undefined {
    return this._callSorting;
  }
  set callSorting(value: CallSorting | undefined) {
    this._callSorting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callView: this.callView,
      callFilter: this.callFilter ? this.callFilter.toObject() : undefined,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      pageSize: this.pageSize,
      callSorting: this.callSorting ? this.callSorting.toObject() : undefined
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
  ): ListCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callView:
        CallView[
          this.callView === null || this.callView === undefined
            ? 0
            : this.callView
        ],
      callFilter: this.callFilter
        ? this.callFilter.toProtobufJSON(options)
        : null,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      callSorting: this.callSorting
        ? this.callSorting.toProtobufJSON(options)
        : null
    };
  }
}
export module ListCallsRequest {
  /**
   * Standard JavaScript object representation for ListCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callView: CallView;
    callFilter?: CallFilter.AsObject;
    pageToken: string;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
    pageSize: number;
    callSorting?: CallSorting.AsObject;
  }

  /**
   * Protobuf JSON representation for ListCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callView: string;
    callFilter: CallFilter.AsProtobufJSON | null;
    pageToken: string;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    callSorting: CallSorting.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallsResponse
 */
export class ListCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallsResponse();
    ListCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallsResponse) {
    _instance.calls = _instance.calls || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
    _instance.totalSize = _instance.totalSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Call();
          _reader.readMessage(
            messageInitializer1,
            Call.deserializeBinaryFromReader
          );
          (_instance.calls = _instance.calls || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        case 3:
          _instance.totalSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.calls && _instance.calls.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.calls as any,
        Call.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
    if (_instance.totalSize) {
      _writer.writeInt32(3, _instance.totalSize);
    }
  }

  private _calls?: Call[];
  private _nextPageToken: string;
  private _totalSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallsResponse.AsObject>) {
    _value = _value || {};
    this.calls = (_value.calls || []).map(m => new Call(m));
    this.nextPageToken = _value.nextPageToken;
    this.totalSize = _value.totalSize;
    ListCallsResponse.refineValues(this);
  }
  get calls(): Call[] | undefined {
    return this._calls;
  }
  set calls(value: Call[] | undefined) {
    this._calls = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }
  get totalSize(): number {
    return this._totalSize;
  }
  set totalSize(value: number) {
    this._totalSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallsResponse.AsObject {
    return {
      calls: (this.calls || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
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
  ): ListCallsResponse.AsProtobufJSON {
    return {
      calls: (this.calls || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken,
      totalSize: this.totalSize
    };
  }
}
export module ListCallsResponse {
  /**
   * Standard JavaScript object representation for ListCallsResponse
   */
  export interface AsObject {
    calls?: Call.AsObject[];
    nextPageToken: string;
    totalSize: number;
  }

  /**
   * Protobuf JSON representation for ListCallsResponse
   */
  export interface AsProtobufJSON {
    calls: Call.AsProtobufJSON[] | null;
    nextPageToken: string;
    totalSize: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallRequest
 */
export class UpdateCallRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallRequest();
    UpdateCallRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallRequest) {
    _instance.call = _instance.call || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.call = new Call();
          _reader.readMessage(_instance.call, Call.deserializeBinaryFromReader);
          break;
        case 2:
          _instance.updateMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.call) {
      _writer.writeMessage(
        1,
        _instance.call as any,
        Call.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _call?: Call;
  private _updateMask?: googleProtobuf006.FieldMask;
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallRequest.AsObject>) {
    _value = _value || {};
    this.call = _value.call ? new Call(_value.call) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf006.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    UpdateCallRequest.refineValues(this);
  }
  get call(): Call | undefined {
    return this._call;
  }
  set call(value: Call | undefined) {
    this._call = value;
  }
  get updateMask(): googleProtobuf006.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf006.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCallRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallRequest.AsObject {
    return {
      call: this.call ? this.call.toObject() : undefined,
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
  ): UpdateCallRequest.AsProtobufJSON {
    return {
      call: this.call ? this.call.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateCallRequest {
  /**
   * Standard JavaScript object representation for UpdateCallRequest
   */
  export interface AsObject {
    call?: Call.AsObject;
    updateMask?: googleProtobuf006.FieldMask.AsObject;
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCallRequest
   */
  export interface AsProtobufJSON {
    call: Call.AsProtobufJSON | null;
    updateMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallResponse
 */
export class UpdateCallResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallResponse();
    UpdateCallResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallResponse) {
    _instance.name = _instance.name || '';
    _instance.call = _instance.call || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.call = new Call();
          _reader.readMessage(_instance.call, Call.deserializeBinaryFromReader);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.call) {
      _writer.writeMessage(
        2,
        _instance.call as any,
        Call.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _name: string;
  private _call?: Call;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.call = _value.call ? new Call(_value.call) : undefined;
    this.errorMessage = _value.errorMessage;
    UpdateCallResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get call(): Call | undefined {
    return this._call;
  }
  set call(value: Call | undefined) {
    this._call = value;
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
    UpdateCallResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallResponse.AsObject {
    return {
      name: this.name,
      call: this.call ? this.call.toObject() : undefined,
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
  ): UpdateCallResponse.AsProtobufJSON {
    return {
      name: this.name,
      call: this.call ? this.call.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateCallResponse {
  /**
   * Standard JavaScript object representation for UpdateCallResponse
   */
  export interface AsObject {
    name: string;
    call?: Call.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateCallResponse
   */
  export interface AsProtobufJSON {
    name: string;
    call: Call.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallsRequest
 */
export class UpdateCallsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallsRequest();
    UpdateCallsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateCallRequests = _instance.updateCallRequests || [];
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateCallRequest();
          _reader.readMessage(
            messageInitializer2,
            UpdateCallRequest.deserializeBinaryFromReader
          );
          (_instance.updateCallRequests =
            _instance.updateCallRequests || []).push(messageInitializer2);
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.updateCallRequests && _instance.updateCallRequests.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateCallRequests as any,
        UpdateCallRequest.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _updateCallRequests?: UpdateCallRequest[];
  private _fieldMask?: googleProtobuf006.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateCallRequests = (_value.updateCallRequests || []).map(
      m => new UpdateCallRequest(m)
    );
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    UpdateCallsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateCallRequests(): UpdateCallRequest[] | undefined {
    return this._updateCallRequests;
  }
  set updateCallRequests(value: UpdateCallRequest[] | undefined) {
    this._updateCallRequests = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallRequests: (this.updateCallRequests || []).map(m =>
        m.toObject()
      ),
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
  ): UpdateCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallRequests: (this.updateCallRequests || []).map(m =>
        m.toProtobufJSON(options)
      ),
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateCallsRequest {
  /**
   * Standard JavaScript object representation for UpdateCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateCallRequests?: UpdateCallRequest.AsObject[];
    fieldMask?: googleProtobuf006.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateCallRequests: UpdateCallRequest.AsProtobufJSON[] | null;
    fieldMask: googleProtobuf006.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateCallsResponse
 */
export class UpdateCallsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateCallsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCallsResponse();
    UpdateCallsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCallsResponse) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.updateCallResponses = _instance.updateCallResponses || [];
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCallsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new UpdateCallResponse();
          _reader.readMessage(
            messageInitializer2,
            UpdateCallResponse.deserializeBinaryFromReader
          );
          (_instance.updateCallResponses =
            _instance.updateCallResponses || []).push(messageInitializer2);
          break;
        case 3:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCallsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCallsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.updateCallResponses && _instance.updateCallResponses.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.updateCallResponses as any,
        UpdateCallResponse.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(3, _instance.errorMessage);
    }
  }

  private _vtsiProjectName: string;
  private _updateCallResponses?: UpdateCallResponse[];
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCallsResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.updateCallResponses = (_value.updateCallResponses || []).map(
      m => new UpdateCallResponse(m)
    );
    this.errorMessage = _value.errorMessage;
    UpdateCallsResponse.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get updateCallResponses(): UpdateCallResponse[] | undefined {
    return this._updateCallResponses;
  }
  set updateCallResponses(value: UpdateCallResponse[] | undefined) {
    this._updateCallResponses = value;
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
    UpdateCallsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCallsResponse.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallResponses: (this.updateCallResponses || []).map(m =>
        m.toObject()
      ),
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
  ): UpdateCallsResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      updateCallResponses: (this.updateCallResponses || []).map(m =>
        m.toProtobufJSON(options)
      ),
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateCallsResponse {
  /**
   * Standard JavaScript object representation for UpdateCallsResponse
   */
  export interface AsObject {
    vtsiProjectName: string;
    updateCallResponses?: UpdateCallResponse.AsObject[];
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateCallsResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    updateCallResponses: UpdateCallResponse.AsProtobufJSON[] | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCallStatisticsRequest
 */
export class GetCallStatisticsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCallStatisticsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCallStatisticsRequest();
    GetCallStatisticsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCallStatisticsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callFilter = _instance.callFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCallStatisticsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.callFilter = new CallFilter();
          _reader.readMessage(
            _instance.callFilter,
            CallFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCallStatisticsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCallStatisticsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callFilter) {
      _writer.writeMessage(
        2,
        _instance.callFilter as any,
        CallFilter.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _callFilter?: CallFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallStatisticsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallStatisticsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callFilter = _value.callFilter
      ? new CallFilter(_value.callFilter)
      : undefined;
    GetCallStatisticsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callFilter(): CallFilter | undefined {
    return this._callFilter;
  }
  set callFilter(value: CallFilter | undefined) {
    this._callFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCallStatisticsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCallStatisticsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callFilter: this.callFilter ? this.callFilter.toObject() : undefined
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
  ): GetCallStatisticsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callFilter: this.callFilter
        ? this.callFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module GetCallStatisticsRequest {
  /**
   * Standard JavaScript object representation for GetCallStatisticsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callFilter?: CallFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCallStatisticsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callFilter: CallFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.SipStatusTypeCount
 */
export class SipStatusTypeCount implements GrpcMessage {
  static id = 'ondewo.vtsi.SipStatusTypeCount';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SipStatusTypeCount();
    SipStatusTypeCount.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SipStatusTypeCount) {
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SipStatusTypeCount,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 2:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    SipStatusTypeCount.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SipStatusTypeCount,
    _writer: BinaryWriter
  ) {
    if (_instance.sipStatusType) {
      _writer.writeEnum(1, _instance.sipStatusType);
    }
    if (_instance.count) {
      _writer.writeInt32(2, _instance.count);
    }
  }

  private _sipStatusType: ondewoSip012.SipStatus.StatusType;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SipStatusTypeCount to deeply clone from
   */
  constructor(_value?: RecursivePartial<SipStatusTypeCount.AsObject>) {
    _value = _value || {};
    this.sipStatusType = _value.sipStatusType;
    this.count = _value.count;
    SipStatusTypeCount.refineValues(this);
  }
  get sipStatusType(): ondewoSip012.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip012.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SipStatusTypeCount.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SipStatusTypeCount.AsObject {
    return {
      sipStatusType: this.sipStatusType,
      count: this.count
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
  ): SipStatusTypeCount.AsProtobufJSON {
    return {
      sipStatusType:
        ondewoSip012.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      count: this.count
    };
  }
}
export module SipStatusTypeCount {
  /**
   * Standard JavaScript object representation for SipStatusTypeCount
   */
  export interface AsObject {
    sipStatusType: ondewoSip012.SipStatus.StatusType;
    count: number;
  }

  /**
   * Protobuf JSON representation for SipStatusTypeCount
   */
  export interface AsProtobufJSON {
    sipStatusType: string;
    count: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallTypeCount
 */
export class CallTypeCount implements GrpcMessage {
  static id = 'ondewo.vtsi.CallTypeCount';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallTypeCount();
    CallTypeCount.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallTypeCount) {
    _instance.callType = _instance.callType || 0;
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallTypeCount,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.callType = _reader.readEnum();
          break;
        case 2:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CallTypeCount.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallTypeCount,
    _writer: BinaryWriter
  ) {
    if (_instance.callType) {
      _writer.writeEnum(1, _instance.callType);
    }
    if (_instance.count) {
      _writer.writeInt32(2, _instance.count);
    }
  }

  private _callType: CallType;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallTypeCount to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallTypeCount.AsObject>) {
    _value = _value || {};
    this.callType = _value.callType;
    this.count = _value.count;
    CallTypeCount.refineValues(this);
  }
  get callType(): CallType {
    return this._callType;
  }
  set callType(value: CallType) {
    this._callType = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallTypeCount.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallTypeCount.AsObject {
    return {
      callType: this.callType,
      count: this.count
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
  ): CallTypeCount.AsProtobufJSON {
    return {
      callType:
        CallType[
          this.callType === null || this.callType === undefined
            ? 0
            : this.callType
        ],
      count: this.count
    };
  }
}
export module CallTypeCount {
  /**
   * Standard JavaScript object representation for CallTypeCount
   */
  export interface AsObject {
    callType: CallType;
    count: number;
  }

  /**
   * Protobuf JSON representation for CallTypeCount
   */
  export interface AsProtobufJSON {
    callType: string;
    count: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.AmdVerdictCount
 */
export class AmdVerdictCount implements GrpcMessage {
  static id = 'ondewo.vtsi.AmdVerdictCount';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AmdVerdictCount();
    AmdVerdictCount.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AmdVerdictCount) {
    _instance.verdict = _instance.verdict || 0;
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AmdVerdictCount,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.verdict = _reader.readEnum();
          break;
        case 2:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    AmdVerdictCount.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AmdVerdictCount,
    _writer: BinaryWriter
  ) {
    if (_instance.verdict) {
      _writer.writeEnum(1, _instance.verdict);
    }
    if (_instance.count) {
      _writer.writeInt32(2, _instance.count);
    }
  }

  private _verdict: ondewoSip012.AnsweringMachineDetectionResult.Verdict;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AmdVerdictCount to deeply clone from
   */
  constructor(_value?: RecursivePartial<AmdVerdictCount.AsObject>) {
    _value = _value || {};
    this.verdict = _value.verdict;
    this.count = _value.count;
    AmdVerdictCount.refineValues(this);
  }
  get verdict(): ondewoSip012.AnsweringMachineDetectionResult.Verdict {
    return this._verdict;
  }
  set verdict(value: ondewoSip012.AnsweringMachineDetectionResult.Verdict) {
    this._verdict = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AmdVerdictCount.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AmdVerdictCount.AsObject {
    return {
      verdict: this.verdict,
      count: this.count
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
  ): AmdVerdictCount.AsProtobufJSON {
    return {
      verdict:
        ondewoSip012.AnsweringMachineDetectionResult.Verdict[
          this.verdict === null || this.verdict === undefined ? 0 : this.verdict
        ],
      count: this.count
    };
  }
}
export module AmdVerdictCount {
  /**
   * Standard JavaScript object representation for AmdVerdictCount
   */
  export interface AsObject {
    verdict: ondewoSip012.AnsweringMachineDetectionResult.Verdict;
    count: number;
  }

  /**
   * Protobuf JSON representation for AmdVerdictCount
   */
  export interface AsProtobufJSON {
    verdict: string;
    count: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.TransferOutcomeCount
 */
export class TransferOutcomeCount implements GrpcMessage {
  static id = 'ondewo.vtsi.TransferOutcomeCount';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TransferOutcomeCount();
    TransferOutcomeCount.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TransferOutcomeCount) {
    _instance.outcome = _instance.outcome || 0;
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TransferOutcomeCount,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.outcome = _reader.readEnum();
          break;
        case 2:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    TransferOutcomeCount.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TransferOutcomeCount,
    _writer: BinaryWriter
  ) {
    if (_instance.outcome) {
      _writer.writeEnum(1, _instance.outcome);
    }
    if (_instance.count) {
      _writer.writeInt32(2, _instance.count);
    }
  }

  private _outcome: TransferOutcome;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferOutcomeCount to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferOutcomeCount.AsObject>) {
    _value = _value || {};
    this.outcome = _value.outcome;
    this.count = _value.count;
    TransferOutcomeCount.refineValues(this);
  }
  get outcome(): TransferOutcome {
    return this._outcome;
  }
  set outcome(value: TransferOutcome) {
    this._outcome = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TransferOutcomeCount.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TransferOutcomeCount.AsObject {
    return {
      outcome: this.outcome,
      count: this.count
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
  ): TransferOutcomeCount.AsProtobufJSON {
    return {
      outcome:
        TransferOutcome[
          this.outcome === null || this.outcome === undefined ? 0 : this.outcome
        ],
      count: this.count
    };
  }
}
export module TransferOutcomeCount {
  /**
   * Standard JavaScript object representation for TransferOutcomeCount
   */
  export interface AsObject {
    outcome: TransferOutcome;
    count: number;
  }

  /**
   * Protobuf JSON representation for TransferOutcomeCount
   */
  export interface AsProtobufJSON {
    outcome: string;
    count: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallStatistics
 */
export class CallStatistics implements GrpcMessage {
  static id = 'ondewo.vtsi.CallStatistics';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallStatistics();
    CallStatistics.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallStatistics) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.total = _instance.total || 0;
    _instance.active = _instance.active || 0;
    _instance.sipStatusTypeCounts = _instance.sipStatusTypeCounts || [];
    _instance.callTypeCounts = _instance.callTypeCounts || [];
    _instance.endedCalls = _instance.endedCalls || 0;
    _instance.totalDurationS = _instance.totalDurationS || 0;
    _instance.averageDurationS = _instance.averageDurationS || 0;
    _instance.redialRecommended = _instance.redialRecommended || 0;
    _instance.amdVerdictCounts = _instance.amdVerdictCounts || [];
    _instance.transferOutcomeCounts = _instance.transferOutcomeCounts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallStatistics,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        case 3:
          _instance.active = _reader.readInt32();
          break;
        case 4:
          const messageInitializer4 = new SipStatusTypeCount();
          _reader.readMessage(
            messageInitializer4,
            SipStatusTypeCount.deserializeBinaryFromReader
          );
          (_instance.sipStatusTypeCounts =
            _instance.sipStatusTypeCounts || []).push(messageInitializer4);
          break;
        case 5:
          const messageInitializer5 = new CallTypeCount();
          _reader.readMessage(
            messageInitializer5,
            CallTypeCount.deserializeBinaryFromReader
          );
          (_instance.callTypeCounts = _instance.callTypeCounts || []).push(
            messageInitializer5
          );
          break;
        case 6:
          _instance.endedCalls = _reader.readInt32();
          break;
        case 7:
          _instance.totalDurationS = _reader.readDouble();
          break;
        case 8:
          _instance.averageDurationS = _reader.readDouble();
          break;
        case 9:
          _instance.redialRecommended = _reader.readInt32();
          break;
        case 10:
          const messageInitializer10 = new AmdVerdictCount();
          _reader.readMessage(
            messageInitializer10,
            AmdVerdictCount.deserializeBinaryFromReader
          );
          (_instance.amdVerdictCounts = _instance.amdVerdictCounts || []).push(
            messageInitializer10
          );
          break;
        case 11:
          const messageInitializer11 = new TransferOutcomeCount();
          _reader.readMessage(
            messageInitializer11,
            TransferOutcomeCount.deserializeBinaryFromReader
          );
          (_instance.transferOutcomeCounts =
            _instance.transferOutcomeCounts || []).push(messageInitializer11);
          break;
        default:
          _reader.skipField();
      }
    }

    CallStatistics.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallStatistics,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
    if (_instance.active) {
      _writer.writeInt32(3, _instance.active);
    }
    if (_instance.sipStatusTypeCounts && _instance.sipStatusTypeCounts.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.sipStatusTypeCounts as any,
        SipStatusTypeCount.serializeBinaryToWriter
      );
    }
    if (_instance.callTypeCounts && _instance.callTypeCounts.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.callTypeCounts as any,
        CallTypeCount.serializeBinaryToWriter
      );
    }
    if (_instance.endedCalls) {
      _writer.writeInt32(6, _instance.endedCalls);
    }
    if (_instance.totalDurationS) {
      _writer.writeDouble(7, _instance.totalDurationS);
    }
    if (_instance.averageDurationS) {
      _writer.writeDouble(8, _instance.averageDurationS);
    }
    if (_instance.redialRecommended) {
      _writer.writeInt32(9, _instance.redialRecommended);
    }
    if (_instance.amdVerdictCounts && _instance.amdVerdictCounts.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.amdVerdictCounts as any,
        AmdVerdictCount.serializeBinaryToWriter
      );
    }
    if (
      _instance.transferOutcomeCounts &&
      _instance.transferOutcomeCounts.length
    ) {
      _writer.writeRepeatedMessage(
        11,
        _instance.transferOutcomeCounts as any,
        TransferOutcomeCount.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _total: number;
  private _active: number;
  private _sipStatusTypeCounts?: SipStatusTypeCount[];
  private _callTypeCounts?: CallTypeCount[];
  private _endedCalls: number;
  private _totalDurationS: number;
  private _averageDurationS: number;
  private _redialRecommended: number;
  private _amdVerdictCounts?: AmdVerdictCount[];
  private _transferOutcomeCounts?: TransferOutcomeCount[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallStatistics to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallStatistics.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.total = _value.total;
    this.active = _value.active;
    this.sipStatusTypeCounts = (_value.sipStatusTypeCounts || []).map(
      m => new SipStatusTypeCount(m)
    );
    this.callTypeCounts = (_value.callTypeCounts || []).map(
      m => new CallTypeCount(m)
    );
    this.endedCalls = _value.endedCalls;
    this.totalDurationS = _value.totalDurationS;
    this.averageDurationS = _value.averageDurationS;
    this.redialRecommended = _value.redialRecommended;
    this.amdVerdictCounts = (_value.amdVerdictCounts || []).map(
      m => new AmdVerdictCount(m)
    );
    this.transferOutcomeCounts = (_value.transferOutcomeCounts || []).map(
      m => new TransferOutcomeCount(m)
    );
    CallStatistics.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get active(): number {
    return this._active;
  }
  set active(value: number) {
    this._active = value;
  }
  get sipStatusTypeCounts(): SipStatusTypeCount[] | undefined {
    return this._sipStatusTypeCounts;
  }
  set sipStatusTypeCounts(value: SipStatusTypeCount[] | undefined) {
    this._sipStatusTypeCounts = value;
  }
  get callTypeCounts(): CallTypeCount[] | undefined {
    return this._callTypeCounts;
  }
  set callTypeCounts(value: CallTypeCount[] | undefined) {
    this._callTypeCounts = value;
  }
  get endedCalls(): number {
    return this._endedCalls;
  }
  set endedCalls(value: number) {
    this._endedCalls = value;
  }
  get totalDurationS(): number {
    return this._totalDurationS;
  }
  set totalDurationS(value: number) {
    this._totalDurationS = value;
  }
  get averageDurationS(): number {
    return this._averageDurationS;
  }
  set averageDurationS(value: number) {
    this._averageDurationS = value;
  }
  get redialRecommended(): number {
    return this._redialRecommended;
  }
  set redialRecommended(value: number) {
    this._redialRecommended = value;
  }
  get amdVerdictCounts(): AmdVerdictCount[] | undefined {
    return this._amdVerdictCounts;
  }
  set amdVerdictCounts(value: AmdVerdictCount[] | undefined) {
    this._amdVerdictCounts = value;
  }
  get transferOutcomeCounts(): TransferOutcomeCount[] | undefined {
    return this._transferOutcomeCounts;
  }
  set transferOutcomeCounts(value: TransferOutcomeCount[] | undefined) {
    this._transferOutcomeCounts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallStatistics.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallStatistics.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      total: this.total,
      active: this.active,
      sipStatusTypeCounts: (this.sipStatusTypeCounts || []).map(m =>
        m.toObject()
      ),
      callTypeCounts: (this.callTypeCounts || []).map(m => m.toObject()),
      endedCalls: this.endedCalls,
      totalDurationS: this.totalDurationS,
      averageDurationS: this.averageDurationS,
      redialRecommended: this.redialRecommended,
      amdVerdictCounts: (this.amdVerdictCounts || []).map(m => m.toObject()),
      transferOutcomeCounts: (this.transferOutcomeCounts || []).map(m =>
        m.toObject()
      )
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
  ): CallStatistics.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      total: this.total,
      active: this.active,
      sipStatusTypeCounts: (this.sipStatusTypeCounts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      callTypeCounts: (this.callTypeCounts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      endedCalls: this.endedCalls,
      totalDurationS: this.totalDurationS,
      averageDurationS: this.averageDurationS,
      redialRecommended: this.redialRecommended,
      amdVerdictCounts: (this.amdVerdictCounts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      transferOutcomeCounts: (this.transferOutcomeCounts || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CallStatistics {
  /**
   * Standard JavaScript object representation for CallStatistics
   */
  export interface AsObject {
    vtsiProjectName: string;
    total: number;
    active: number;
    sipStatusTypeCounts?: SipStatusTypeCount.AsObject[];
    callTypeCounts?: CallTypeCount.AsObject[];
    endedCalls: number;
    totalDurationS: number;
    averageDurationS: number;
    redialRecommended: number;
    amdVerdictCounts?: AmdVerdictCount.AsObject[];
    transferOutcomeCounts?: TransferOutcomeCount.AsObject[];
  }

  /**
   * Protobuf JSON representation for CallStatistics
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    total: number;
    active: number;
    sipStatusTypeCounts: SipStatusTypeCount.AsProtobufJSON[] | null;
    callTypeCounts: CallTypeCount.AsProtobufJSON[] | null;
    endedCalls: number;
    totalDurationS: number;
    averageDurationS: number;
    redialRecommended: number;
    amdVerdictCounts: AmdVerdictCount.AsProtobufJSON[] | null;
    transferOutcomeCounts: TransferOutcomeCount.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.AllServicesStatuses
 */
export class AllServicesStatuses implements GrpcMessage {
  static id = 'ondewo.vtsi.AllServicesStatuses';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AllServicesStatuses();
    AllServicesStatuses.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AllServicesStatuses) {
    _instance.statusSip = _instance.statusSip || undefined;
    _instance.statusAsterisk = _instance.statusAsterisk || undefined;
    _instance.statusNlu = _instance.statusNlu || undefined;
    _instance.statusStt = _instance.statusStt || undefined;
    _instance.statusTts = _instance.statusTts || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AllServicesStatuses,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.statusSip = new ServiceStatus();
          _reader.readMessage(
            _instance.statusSip,
            ServiceStatus.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.statusAsterisk = new ServiceStatus();
          _reader.readMessage(
            _instance.statusAsterisk,
            ServiceStatus.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.statusNlu = new ServiceStatus();
          _reader.readMessage(
            _instance.statusNlu,
            ServiceStatus.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.statusStt = new ServiceStatus();
          _reader.readMessage(
            _instance.statusStt,
            ServiceStatus.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.statusTts = new ServiceStatus();
          _reader.readMessage(
            _instance.statusTts,
            ServiceStatus.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AllServicesStatuses.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AllServicesStatuses,
    _writer: BinaryWriter
  ) {
    if (_instance.statusSip) {
      _writer.writeMessage(
        1,
        _instance.statusSip as any,
        ServiceStatus.serializeBinaryToWriter
      );
    }
    if (_instance.statusAsterisk) {
      _writer.writeMessage(
        2,
        _instance.statusAsterisk as any,
        ServiceStatus.serializeBinaryToWriter
      );
    }
    if (_instance.statusNlu) {
      _writer.writeMessage(
        3,
        _instance.statusNlu as any,
        ServiceStatus.serializeBinaryToWriter
      );
    }
    if (_instance.statusStt) {
      _writer.writeMessage(
        4,
        _instance.statusStt as any,
        ServiceStatus.serializeBinaryToWriter
      );
    }
    if (_instance.statusTts) {
      _writer.writeMessage(
        5,
        _instance.statusTts as any,
        ServiceStatus.serializeBinaryToWriter
      );
    }
  }

  private _statusSip?: ServiceStatus;
  private _statusAsterisk?: ServiceStatus;
  private _statusNlu?: ServiceStatus;
  private _statusStt?: ServiceStatus;
  private _statusTts?: ServiceStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AllServicesStatuses to deeply clone from
   */
  constructor(_value?: RecursivePartial<AllServicesStatuses.AsObject>) {
    _value = _value || {};
    this.statusSip = _value.statusSip
      ? new ServiceStatus(_value.statusSip)
      : undefined;
    this.statusAsterisk = _value.statusAsterisk
      ? new ServiceStatus(_value.statusAsterisk)
      : undefined;
    this.statusNlu = _value.statusNlu
      ? new ServiceStatus(_value.statusNlu)
      : undefined;
    this.statusStt = _value.statusStt
      ? new ServiceStatus(_value.statusStt)
      : undefined;
    this.statusTts = _value.statusTts
      ? new ServiceStatus(_value.statusTts)
      : undefined;
    AllServicesStatuses.refineValues(this);
  }
  get statusSip(): ServiceStatus | undefined {
    return this._statusSip;
  }
  set statusSip(value: ServiceStatus | undefined) {
    this._statusSip = value;
  }
  get statusAsterisk(): ServiceStatus | undefined {
    return this._statusAsterisk;
  }
  set statusAsterisk(value: ServiceStatus | undefined) {
    this._statusAsterisk = value;
  }
  get statusNlu(): ServiceStatus | undefined {
    return this._statusNlu;
  }
  set statusNlu(value: ServiceStatus | undefined) {
    this._statusNlu = value;
  }
  get statusStt(): ServiceStatus | undefined {
    return this._statusStt;
  }
  set statusStt(value: ServiceStatus | undefined) {
    this._statusStt = value;
  }
  get statusTts(): ServiceStatus | undefined {
    return this._statusTts;
  }
  set statusTts(value: ServiceStatus | undefined) {
    this._statusTts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AllServicesStatuses.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AllServicesStatuses.AsObject {
    return {
      statusSip: this.statusSip ? this.statusSip.toObject() : undefined,
      statusAsterisk: this.statusAsterisk
        ? this.statusAsterisk.toObject()
        : undefined,
      statusNlu: this.statusNlu ? this.statusNlu.toObject() : undefined,
      statusStt: this.statusStt ? this.statusStt.toObject() : undefined,
      statusTts: this.statusTts ? this.statusTts.toObject() : undefined
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
  ): AllServicesStatuses.AsProtobufJSON {
    return {
      statusSip: this.statusSip ? this.statusSip.toProtobufJSON(options) : null,
      statusAsterisk: this.statusAsterisk
        ? this.statusAsterisk.toProtobufJSON(options)
        : null,
      statusNlu: this.statusNlu ? this.statusNlu.toProtobufJSON(options) : null,
      statusStt: this.statusStt ? this.statusStt.toProtobufJSON(options) : null,
      statusTts: this.statusTts ? this.statusTts.toProtobufJSON(options) : null
    };
  }
}
export module AllServicesStatuses {
  /**
   * Standard JavaScript object representation for AllServicesStatuses
   */
  export interface AsObject {
    statusSip?: ServiceStatus.AsObject;
    statusAsterisk?: ServiceStatus.AsObject;
    statusNlu?: ServiceStatus.AsObject;
    statusStt?: ServiceStatus.AsObject;
    statusTts?: ServiceStatus.AsObject;
  }

  /**
   * Protobuf JSON representation for AllServicesStatuses
   */
  export interface AsProtobufJSON {
    statusSip: ServiceStatus.AsProtobufJSON | null;
    statusAsterisk: ServiceStatus.AsProtobufJSON | null;
    statusNlu: ServiceStatus.AsProtobufJSON | null;
    statusStt: ServiceStatus.AsProtobufJSON | null;
    statusTts: ServiceStatus.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ServiceStatus
 */
export class ServiceStatus implements GrpcMessage {
  static id = 'ondewo.vtsi.ServiceStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ServiceStatus();
    ServiceStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ServiceStatus) {
    _instance.healthy = _instance.healthy || false;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ServiceStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.healthy = _reader.readBool();
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ServiceStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ServiceStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.healthy) {
      _writer.writeBool(1, _instance.healthy);
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _healthy: boolean;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ServiceStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<ServiceStatus.AsObject>) {
    _value = _value || {};
    this.healthy = _value.healthy;
    this.errorMessage = _value.errorMessage;
    ServiceStatus.refineValues(this);
  }
  get healthy(): boolean {
    return this._healthy;
  }
  set healthy(value: boolean) {
    this._healthy = value;
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
    ServiceStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ServiceStatus.AsObject {
    return {
      healthy: this.healthy,
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
  ): ServiceStatus.AsProtobufJSON {
    return {
      healthy: this.healthy,
      errorMessage: this.errorMessage
    };
  }
}
export module ServiceStatus {
  /**
   * Standard JavaScript object representation for ServiceStatus
   */
  export interface AsObject {
    healthy: boolean;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for ServiceStatus
   */
  export interface AsProtobufJSON {
    healthy: boolean;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallResourceStatus
 */
export class CallResourceStatus implements GrpcMessage {
  static id = 'ondewo.vtsi.CallResourceStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallResourceStatus();
    CallResourceStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallResourceStatus) {
    _instance.resourceName = _instance.resourceName || '';
    _instance.callType = _instance.callType || 0;
    _instance.callName = _instance.callName || '';
    _instance.active = _instance.active || false;
    _instance.sipStatusType = _instance.sipStatusType || 0;
    _instance.sipStatusDescription = _instance.sipStatusDescription || '';
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.scheduledCallerStatus = _instance.scheduledCallerStatus || 0;
    _instance.scheduledTime = _instance.scheduledTime || undefined;
    _instance.campaignName = _instance.campaignName || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallResourceStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.resourceName = _reader.readString();
          break;
        case 2:
          _instance.callType = _reader.readEnum();
          break;
        case 3:
          _instance.callName = _reader.readString();
          break;
        case 4:
          _instance.active = _reader.readBool();
          break;
        case 5:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 6:
          _instance.sipStatusDescription = _reader.readString();
          break;
        case 7:
          _instance.startTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.endTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.phoneNumber = _reader.readString();
          break;
        case 10:
          _instance.scheduledCallerStatus = _reader.readEnum();
          break;
        case 11:
          _instance.scheduledTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.campaignName = _reader.readString();
          break;
        case 13:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CallResourceStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallResourceStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.resourceName) {
      _writer.writeString(1, _instance.resourceName);
    }
    if (_instance.callType) {
      _writer.writeEnum(2, _instance.callType);
    }
    if (_instance.callName) {
      _writer.writeString(3, _instance.callName);
    }
    if (_instance.active) {
      _writer.writeBool(4, _instance.active);
    }
    if (_instance.sipStatusType) {
      _writer.writeEnum(5, _instance.sipStatusType);
    }
    if (_instance.sipStatusDescription) {
      _writer.writeString(6, _instance.sipStatusDescription);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        7,
        _instance.startTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        8,
        _instance.endTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.phoneNumber) {
      _writer.writeString(9, _instance.phoneNumber);
    }
    if (_instance.scheduledCallerStatus) {
      _writer.writeEnum(10, _instance.scheduledCallerStatus);
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        11,
        _instance.scheduledTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.campaignName) {
      _writer.writeString(12, _instance.campaignName);
    }
    if (_instance.errorMessage) {
      _writer.writeString(13, _instance.errorMessage);
    }
  }

  private _resourceName: string;
  private _callType: CallType;
  private _callName: string;
  private _active: boolean;
  private _sipStatusType: ondewoSip012.SipStatus.StatusType;
  private _sipStatusDescription: string;
  private _startTime?: googleProtobuf005.Timestamp;
  private _endTime?: googleProtobuf005.Timestamp;
  private _phoneNumber: string;
  private _scheduledCallerStatus: ScheduledCallerStatus;
  private _scheduledTime?: googleProtobuf005.Timestamp;
  private _campaignName: string;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallResourceStatus to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallResourceStatus.AsObject>) {
    _value = _value || {};
    this.resourceName = _value.resourceName;
    this.callType = _value.callType;
    this.callName = _value.callName;
    this.active = _value.active;
    this.sipStatusType = _value.sipStatusType;
    this.sipStatusDescription = _value.sipStatusDescription;
    this.startTime = _value.startTime
      ? new googleProtobuf005.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf005.Timestamp(_value.endTime)
      : undefined;
    this.phoneNumber = _value.phoneNumber;
    this.scheduledCallerStatus = _value.scheduledCallerStatus;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf005.Timestamp(_value.scheduledTime)
      : undefined;
    this.campaignName = _value.campaignName;
    this.errorMessage = _value.errorMessage;
    CallResourceStatus.refineValues(this);
  }
  get resourceName(): string {
    return this._resourceName;
  }
  set resourceName(value: string) {
    this._resourceName = value;
  }
  get callType(): CallType {
    return this._callType;
  }
  set callType(value: CallType) {
    this._callType = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get sipStatusType(): ondewoSip012.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip012.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get sipStatusDescription(): string {
    return this._sipStatusDescription;
  }
  set sipStatusDescription(value: string) {
    this._sipStatusDescription = value;
  }
  get startTime(): googleProtobuf005.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf005.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf005.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf005.Timestamp | undefined) {
    this._endTime = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  get scheduledCallerStatus(): ScheduledCallerStatus {
    return this._scheduledCallerStatus;
  }
  set scheduledCallerStatus(value: ScheduledCallerStatus) {
    this._scheduledCallerStatus = value;
  }
  get scheduledTime(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledTime = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
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
    CallResourceStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallResourceStatus.AsObject {
    return {
      resourceName: this.resourceName,
      callType: this.callType,
      callName: this.callName,
      active: this.active,
      sipStatusType: this.sipStatusType,
      sipStatusDescription: this.sipStatusDescription,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      phoneNumber: this.phoneNumber,
      scheduledCallerStatus: this.scheduledCallerStatus,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toObject()
        : undefined,
      campaignName: this.campaignName,
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
  ): CallResourceStatus.AsProtobufJSON {
    return {
      resourceName: this.resourceName,
      callType:
        CallType[
          this.callType === null || this.callType === undefined
            ? 0
            : this.callType
        ],
      callName: this.callName,
      active: this.active,
      sipStatusType:
        ondewoSip012.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      sipStatusDescription: this.sipStatusDescription,
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      phoneNumber: this.phoneNumber,
      scheduledCallerStatus:
        ScheduledCallerStatus[
          this.scheduledCallerStatus === null ||
          this.scheduledCallerStatus === undefined
            ? 0
            : this.scheduledCallerStatus
        ],
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null,
      campaignName: this.campaignName,
      errorMessage: this.errorMessage
    };
  }
}
export module CallResourceStatus {
  /**
   * Standard JavaScript object representation for CallResourceStatus
   */
  export interface AsObject {
    resourceName: string;
    callType: CallType;
    callName: string;
    active: boolean;
    sipStatusType: ondewoSip012.SipStatus.StatusType;
    sipStatusDescription: string;
    startTime?: googleProtobuf005.Timestamp.AsObject;
    endTime?: googleProtobuf005.Timestamp.AsObject;
    phoneNumber: string;
    scheduledCallerStatus: ScheduledCallerStatus;
    scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    campaignName: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CallResourceStatus
   */
  export interface AsProtobufJSON {
    resourceName: string;
    callType: string;
    callName: string;
    active: boolean;
    sipStatusType: string;
    sipStatusDescription: string;
    startTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    phoneNumber: string;
    scheduledCallerStatus: string;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    campaignName: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallerStatusRequest
 */
export class StreamCallerStatusRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallerStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallerStatusRequest();
    StreamCallerStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallerStatusRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.callerNames = _instance.callerNames || [];
    _instance.activeOnly = _instance.activeOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallerStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.callerNames = _instance.callerNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.activeOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallerStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallerStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.callerNames && _instance.callerNames.length) {
      _writer.writeRepeatedString(2, _instance.callerNames);
    }
    if (_instance.activeOnly) {
      _writer.writeBool(3, _instance.activeOnly);
    }
  }

  private _vtsiProjectName: string;
  private _callerNames: string[];
  private _activeOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallerStatusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallerStatusRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callerNames = (_value.callerNames || []).slice();
    this.activeOnly = _value.activeOnly;
    StreamCallerStatusRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get callerNames(): string[] {
    return this._callerNames;
  }
  set callerNames(value: string[]) {
    this._callerNames = value;
  }
  get activeOnly(): boolean {
    return this._activeOnly;
  }
  set activeOnly(value: boolean) {
    this._activeOnly = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCallerStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallerStatusRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerNames: (this.callerNames || []).slice(),
      activeOnly: this.activeOnly
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
  ): StreamCallerStatusRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callerNames: (this.callerNames || []).slice(),
      activeOnly: this.activeOnly
    };
  }
}
export module StreamCallerStatusRequest {
  /**
   * Standard JavaScript object representation for StreamCallerStatusRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    callerNames: string[];
    activeOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StreamCallerStatusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callerNames: string[];
    activeOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamListenerStatusRequest
 */
export class StreamListenerStatusRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamListenerStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamListenerStatusRequest();
    StreamListenerStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamListenerStatusRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.listenerNames = _instance.listenerNames || [];
    _instance.activeOnly = _instance.activeOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamListenerStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.listenerNames = _instance.listenerNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.activeOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamListenerStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamListenerStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.listenerNames && _instance.listenerNames.length) {
      _writer.writeRepeatedString(2, _instance.listenerNames);
    }
    if (_instance.activeOnly) {
      _writer.writeBool(3, _instance.activeOnly);
    }
  }

  private _vtsiProjectName: string;
  private _listenerNames: string[];
  private _activeOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamListenerStatusRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamListenerStatusRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.listenerNames = (_value.listenerNames || []).slice();
    this.activeOnly = _value.activeOnly;
    StreamListenerStatusRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get listenerNames(): string[] {
    return this._listenerNames;
  }
  set listenerNames(value: string[]) {
    this._listenerNames = value;
  }
  get activeOnly(): boolean {
    return this._activeOnly;
  }
  set activeOnly(value: boolean) {
    this._activeOnly = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamListenerStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamListenerStatusRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerNames: (this.listenerNames || []).slice(),
      activeOnly: this.activeOnly
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
  ): StreamListenerStatusRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      listenerNames: (this.listenerNames || []).slice(),
      activeOnly: this.activeOnly
    };
  }
}
export module StreamListenerStatusRequest {
  /**
   * Standard JavaScript object representation for StreamListenerStatusRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    listenerNames: string[];
    activeOnly: boolean;
  }

  /**
   * Protobuf JSON representation for StreamListenerStatusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    listenerNames: string[];
    activeOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamScheduledCallerStatusRequest
 */
export class StreamScheduledCallerStatusRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamScheduledCallerStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamScheduledCallerStatusRequest();
    StreamScheduledCallerStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamScheduledCallerStatusRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.scheduledCallerNames = _instance.scheduledCallerNames || [];
    _instance.statuses = _instance.statuses || [];
    _instance.campaignName = _instance.campaignName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamScheduledCallerStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          (_instance.scheduledCallerNames =
            _instance.scheduledCallerNames || []).push(_reader.readString());
          break;
        case 3:
          _reader.readPackableEnumInto(
            (_instance.statuses = _instance.statuses || [])
          );
          break;
        case 4:
          _instance.campaignName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamScheduledCallerStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamScheduledCallerStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.scheduledCallerNames &&
      _instance.scheduledCallerNames.length
    ) {
      _writer.writeRepeatedString(2, _instance.scheduledCallerNames);
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedEnum(3, _instance.statuses);
    }
    if (_instance.campaignName) {
      _writer.writeString(4, _instance.campaignName);
    }
  }

  private _vtsiProjectName: string;
  private _scheduledCallerNames: string[];
  private _statuses: ScheduledCallerStatus[];
  private _campaignName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamScheduledCallerStatusRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamScheduledCallerStatusRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.scheduledCallerNames = (_value.scheduledCallerNames || []).slice();
    this.statuses = (_value.statuses || []).slice();
    this.campaignName = _value.campaignName;
    StreamScheduledCallerStatusRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get scheduledCallerNames(): string[] {
    return this._scheduledCallerNames;
  }
  set scheduledCallerNames(value: string[]) {
    this._scheduledCallerNames = value;
  }
  get statuses(): ScheduledCallerStatus[] {
    return this._statuses;
  }
  set statuses(value: ScheduledCallerStatus[]) {
    this._statuses = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamScheduledCallerStatusRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamScheduledCallerStatusRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerNames: (this.scheduledCallerNames || []).slice(),
      statuses: (this.statuses || []).slice(),
      campaignName: this.campaignName
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
  ): StreamScheduledCallerStatusRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerNames: (this.scheduledCallerNames || []).slice(),
      statuses: (this.statuses || []).map(v => ScheduledCallerStatus[v]),
      campaignName: this.campaignName
    };
  }
}
export module StreamScheduledCallerStatusRequest {
  /**
   * Standard JavaScript object representation for StreamScheduledCallerStatusRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    scheduledCallerNames: string[];
    statuses: ScheduledCallerStatus[];
    campaignName: string;
  }

  /**
   * Protobuf JSON representation for StreamScheduledCallerStatusRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerNames: string[];
    statuses: string[];
    campaignName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallResourceStatusResponse
 */
export class StreamCallResourceStatusResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallResourceStatusResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallResourceStatusResponse();
    StreamCallResourceStatusResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallResourceStatusResponse) {
    _instance.statuses = _instance.statuses || [];
    _instance.removedResourceNames = _instance.removedResourceNames || [];
    _instance.snapshot = _instance.snapshot || false;
    _instance.snapshotTruncated = _instance.snapshotTruncated || false;
    _instance.endReason = _instance.endReason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallResourceStatusResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CallResourceStatus();
          _reader.readMessage(
            messageInitializer1,
            CallResourceStatus.deserializeBinaryFromReader
          );
          (_instance.statuses = _instance.statuses || []).push(
            messageInitializer1
          );
          break;
        case 2:
          (_instance.removedResourceNames =
            _instance.removedResourceNames || []).push(_reader.readString());
          break;
        case 3:
          _instance.snapshot = _reader.readBool();
          break;
        case 4:
          _instance.snapshotTruncated = _reader.readBool();
          break;
        case 5:
          _instance.endReason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallResourceStatusResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallResourceStatusResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.statuses as any,
        CallResourceStatus.serializeBinaryToWriter
      );
    }
    if (
      _instance.removedResourceNames &&
      _instance.removedResourceNames.length
    ) {
      _writer.writeRepeatedString(2, _instance.removedResourceNames);
    }
    if (_instance.snapshot) {
      _writer.writeBool(3, _instance.snapshot);
    }
    if (_instance.snapshotTruncated) {
      _writer.writeBool(4, _instance.snapshotTruncated);
    }
    if (_instance.endReason) {
      _writer.writeString(5, _instance.endReason);
    }
  }

  private _statuses?: CallResourceStatus[];
  private _removedResourceNames: string[];
  private _snapshot: boolean;
  private _snapshotTruncated: boolean;
  private _endReason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallResourceStatusResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<StreamCallResourceStatusResponse.AsObject>
  ) {
    _value = _value || {};
    this.statuses = (_value.statuses || []).map(m => new CallResourceStatus(m));
    this.removedResourceNames = (_value.removedResourceNames || []).slice();
    this.snapshot = _value.snapshot;
    this.snapshotTruncated = _value.snapshotTruncated;
    this.endReason = _value.endReason;
    StreamCallResourceStatusResponse.refineValues(this);
  }
  get statuses(): CallResourceStatus[] | undefined {
    return this._statuses;
  }
  set statuses(value: CallResourceStatus[] | undefined) {
    this._statuses = value;
  }
  get removedResourceNames(): string[] {
    return this._removedResourceNames;
  }
  set removedResourceNames(value: string[]) {
    this._removedResourceNames = value;
  }
  get snapshot(): boolean {
    return this._snapshot;
  }
  set snapshot(value: boolean) {
    this._snapshot = value;
  }
  get snapshotTruncated(): boolean {
    return this._snapshotTruncated;
  }
  set snapshotTruncated(value: boolean) {
    this._snapshotTruncated = value;
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
    StreamCallResourceStatusResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallResourceStatusResponse.AsObject {
    return {
      statuses: (this.statuses || []).map(m => m.toObject()),
      removedResourceNames: (this.removedResourceNames || []).slice(),
      snapshot: this.snapshot,
      snapshotTruncated: this.snapshotTruncated,
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
  ): StreamCallResourceStatusResponse.AsProtobufJSON {
    return {
      statuses: (this.statuses || []).map(m => m.toProtobufJSON(options)),
      removedResourceNames: (this.removedResourceNames || []).slice(),
      snapshot: this.snapshot,
      snapshotTruncated: this.snapshotTruncated,
      endReason: this.endReason
    };
  }
}
export module StreamCallResourceStatusResponse {
  /**
   * Standard JavaScript object representation for StreamCallResourceStatusResponse
   */
  export interface AsObject {
    statuses?: CallResourceStatus.AsObject[];
    removedResourceNames: string[];
    snapshot: boolean;
    snapshotTruncated: boolean;
    endReason: string;
  }

  /**
   * Protobuf JSON representation for StreamCallResourceStatusResponse
   */
  export interface AsProtobufJSON {
    statuses: CallResourceStatus.AsProtobufJSON[] | null;
    removedResourceNames: string[];
    snapshot: boolean;
    snapshotTruncated: boolean;
    endReason: string;
  }
}
