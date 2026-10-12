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
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as ondewoNlu003 from '../../ondewo/nlu/intent.pb';
import * as ondewoSip004 from '../../ondewo/sip/sip.pb';
import * as ondewoVtsi005 from '../../ondewo/vtsi/call-configs.pb';
import * as ondewoVtsi006 from '../../ondewo/vtsi/campaigns.pb';
import * as ondewoVtsi007 from '../../ondewo/vtsi/projects.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/context.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/common.pb';
import * as ondewoVtsi012 from '../../ondewo/vtsi/calls.pb';
export enum LogSource {
  LOG_SOURCE_UNSPECIFIED = 0,
  LOG_SOURCE_SIP = 1,
  LOG_SOURCE_CSI = 2,
  LOG_SOURCE_ASTERISK = 3,
  LOG_SOURCE_PULSEAUDIO = 4,
  LOG_SOURCE_SYSTEM = 5
}
export enum LogStreamChannel {
  LOG_STREAM_CHANNEL_UNSPECIFIED = 0,
  LOG_STREAM_CHANNEL_STDOUT = 1,
  LOG_STREAM_CHANNEL_STDERR = 2
}
export enum LogCaptureState {
  LOG_CAPTURE_STATE_UNSPECIFIED = 0,
  LOG_CAPTURE_STATE_CAPTURING = 1,
  LOG_CAPTURE_STATE_STOPPED = 2,
  LOG_CAPTURE_STATE_FAILED = 3,
  LOG_CAPTURE_STATE_DETACHED = 4
}
export enum CallLogFilterField {
  CALL_LOG_FILTER_FIELD_UNSPECIFIED = 0,
  CALL_LOG_FILTER_FIELD_TEXT = 1,
  CALL_LOG_FILTER_FIELD_REGEX = 2,
  CALL_LOG_FILTER_FIELD_LOG_SOURCES = 3,
  CALL_LOG_FILTER_FIELD_CHANNELS = 4,
  CALL_LOG_FILTER_FIELD_EMITTER_PREFIXES = 5,
  CALL_LOG_FILTER_FIELD_THREAD_NAMES = 6,
  CALL_LOG_FILTER_FIELD_SIP_HEADERS = 7
}
export enum LogStreamEndReason {
  LOG_STREAM_END_REASON_UNSPECIFIED = 0,
  LOG_STREAM_END_REASON_ALL_CAPTURES_TERMINATED = 1,
  LOG_STREAM_END_REASON_MAX_DURATION = 2,
  LOG_STREAM_END_REASON_SERVER_SHUTDOWN = 3,
  LOG_STREAM_END_REASON_PERMISSION_REVOKED = 4,
  LOG_STREAM_END_REASON_CREDENTIALS_EXPIRED = 5
}
export enum LogExportFormat {
  LOG_EXPORT_FORMAT_UNSPECIFIED = 0,
  LOG_EXPORT_FORMAT_TEXT = 1,
  LOG_EXPORT_FORMAT_NDJSON = 2,
  LOG_EXPORT_FORMAT_CSV = 3
}
/**
 * Message implementation for ondewo.vtsi.CallLogEntry
 */
export class CallLogEntry implements GrpcMessage {
  static id = 'ondewo.vtsi.CallLogEntry';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallLogEntry();
    CallLogEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallLogEntry) {
    _instance.seq = _instance.seq || '0';
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.timestampIsExact = _instance.timestampIsExact || false;
    _instance.level = _instance.level || 0;
    _instance.message = _instance.message || '';
    _instance.containerId = _instance.containerId || '';
    _instance.containerName = _instance.containerName || '';
    _instance.logSource = _instance.logSource || 0;
    _instance.channel = _instance.channel || 0;
    _instance.emitter = _instance.emitter || '';
    _instance.threadName = _instance.threadName || '';
    _instance.logStream = _instance.logStream || '';
    _instance.call = _instance.call || '';
    _instance.nluSessionName = _instance.nluSessionName || '';
    _instance.physicalLineCount = _instance.physicalLineCount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallLogEntry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.seq = _reader.readInt64String();
          break;
        case 2:
          _instance.timestamp = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.timestampIsExact = _reader.readBool();
          break;
        case 4:
          _instance.level = _reader.readEnum();
          break;
        case 5:
          _instance.message = _reader.readString();
          break;
        case 6:
          _instance.containerId = _reader.readString();
          break;
        case 7:
          _instance.containerName = _reader.readString();
          break;
        case 8:
          _instance.logSource = _reader.readEnum();
          break;
        case 9:
          _instance.channel = _reader.readEnum();
          break;
        case 10:
          _instance.emitter = _reader.readString();
          break;
        case 11:
          _instance.threadName = _reader.readString();
          break;
        case 12:
          _instance.logStream = _reader.readString();
          break;
        case 13:
          _instance.call = _reader.readString();
          break;
        case 14:
          _instance.nluSessionName = _reader.readString();
          break;
        case 15:
          _instance.physicalLineCount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    CallLogEntry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallLogEntry,
    _writer: BinaryWriter
  ) {
    if (_instance.seq) {
      _writer.writeInt64String(1, _instance.seq);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        2,
        _instance.timestamp as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.timestampIsExact) {
      _writer.writeBool(3, _instance.timestampIsExact);
    }
    if (_instance.level) {
      _writer.writeEnum(4, _instance.level);
    }
    if (_instance.message) {
      _writer.writeString(5, _instance.message);
    }
    if (_instance.containerId) {
      _writer.writeString(6, _instance.containerId);
    }
    if (_instance.containerName) {
      _writer.writeString(7, _instance.containerName);
    }
    if (_instance.logSource) {
      _writer.writeEnum(8, _instance.logSource);
    }
    if (_instance.channel) {
      _writer.writeEnum(9, _instance.channel);
    }
    if (_instance.emitter) {
      _writer.writeString(10, _instance.emitter);
    }
    if (_instance.threadName) {
      _writer.writeString(11, _instance.threadName);
    }
    if (_instance.logStream) {
      _writer.writeString(12, _instance.logStream);
    }
    if (_instance.call) {
      _writer.writeString(13, _instance.call);
    }
    if (_instance.nluSessionName) {
      _writer.writeString(14, _instance.nluSessionName);
    }
    if (_instance.physicalLineCount) {
      _writer.writeInt32(15, _instance.physicalLineCount);
    }
  }

  private _seq: string;
  private _timestamp?: googleProtobuf002.Timestamp;
  private _timestampIsExact: boolean;
  private _level: ondewoNlu011.LogSeverity;
  private _message: string;
  private _containerId: string;
  private _containerName: string;
  private _logSource: LogSource;
  private _channel: LogStreamChannel;
  private _emitter: string;
  private _threadName: string;
  private _logStream: string;
  private _call: string;
  private _nluSessionName: string;
  private _physicalLineCount: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallLogEntry to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallLogEntry.AsObject>) {
    _value = _value || {};
    this.seq = _value.seq;
    this.timestamp = _value.timestamp
      ? new googleProtobuf002.Timestamp(_value.timestamp)
      : undefined;
    this.timestampIsExact = _value.timestampIsExact;
    this.level = _value.level;
    this.message = _value.message;
    this.containerId = _value.containerId;
    this.containerName = _value.containerName;
    this.logSource = _value.logSource;
    this.channel = _value.channel;
    this.emitter = _value.emitter;
    this.threadName = _value.threadName;
    this.logStream = _value.logStream;
    this.call = _value.call;
    this.nluSessionName = _value.nluSessionName;
    this.physicalLineCount = _value.physicalLineCount;
    CallLogEntry.refineValues(this);
  }
  get seq(): string {
    return this._seq;
  }
  set seq(value: string) {
    this._seq = value;
  }
  get timestamp(): googleProtobuf002.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf002.Timestamp | undefined) {
    this._timestamp = value;
  }
  get timestampIsExact(): boolean {
    return this._timestampIsExact;
  }
  set timestampIsExact(value: boolean) {
    this._timestampIsExact = value;
  }
  get level(): ondewoNlu011.LogSeverity {
    return this._level;
  }
  set level(value: ondewoNlu011.LogSeverity) {
    this._level = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get logSource(): LogSource {
    return this._logSource;
  }
  set logSource(value: LogSource) {
    this._logSource = value;
  }
  get channel(): LogStreamChannel {
    return this._channel;
  }
  set channel(value: LogStreamChannel) {
    this._channel = value;
  }
  get emitter(): string {
    return this._emitter;
  }
  set emitter(value: string) {
    this._emitter = value;
  }
  get threadName(): string {
    return this._threadName;
  }
  set threadName(value: string) {
    this._threadName = value;
  }
  get logStream(): string {
    return this._logStream;
  }
  set logStream(value: string) {
    this._logStream = value;
  }
  get call(): string {
    return this._call;
  }
  set call(value: string) {
    this._call = value;
  }
  get nluSessionName(): string {
    return this._nluSessionName;
  }
  set nluSessionName(value: string) {
    this._nluSessionName = value;
  }
  get physicalLineCount(): number {
    return this._physicalLineCount;
  }
  set physicalLineCount(value: number) {
    this._physicalLineCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallLogEntry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallLogEntry.AsObject {
    return {
      seq: this.seq,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      timestampIsExact: this.timestampIsExact,
      level: this.level,
      message: this.message,
      containerId: this.containerId,
      containerName: this.containerName,
      logSource: this.logSource,
      channel: this.channel,
      emitter: this.emitter,
      threadName: this.threadName,
      logStream: this.logStream,
      call: this.call,
      nluSessionName: this.nluSessionName,
      physicalLineCount: this.physicalLineCount
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
  ): CallLogEntry.AsProtobufJSON {
    return {
      seq: this.seq,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      timestampIsExact: this.timestampIsExact,
      level:
        ondewoNlu011.LogSeverity[
          this.level === null || this.level === undefined ? 0 : this.level
        ],
      message: this.message,
      containerId: this.containerId,
      containerName: this.containerName,
      logSource:
        LogSource[
          this.logSource === null || this.logSource === undefined
            ? 0
            : this.logSource
        ],
      channel:
        LogStreamChannel[
          this.channel === null || this.channel === undefined ? 0 : this.channel
        ],
      emitter: this.emitter,
      threadName: this.threadName,
      logStream: this.logStream,
      call: this.call,
      nluSessionName: this.nluSessionName,
      physicalLineCount: this.physicalLineCount
    };
  }
}
export module CallLogEntry {
  /**
   * Standard JavaScript object representation for CallLogEntry
   */
  export interface AsObject {
    seq: string;
    timestamp?: googleProtobuf002.Timestamp.AsObject;
    timestampIsExact: boolean;
    level: ondewoNlu011.LogSeverity;
    message: string;
    containerId: string;
    containerName: string;
    logSource: LogSource;
    channel: LogStreamChannel;
    emitter: string;
    threadName: string;
    logStream: string;
    call: string;
    nluSessionName: string;
    physicalLineCount: number;
  }

  /**
   * Protobuf JSON representation for CallLogEntry
   */
  export interface AsProtobufJSON {
    seq: string;
    timestamp: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    timestampIsExact: boolean;
    level: string;
    message: string;
    containerId: string;
    containerName: string;
    logSource: string;
    channel: string;
    emitter: string;
    threadName: string;
    logStream: string;
    call: string;
    nluSessionName: string;
    physicalLineCount: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.SipHeaderFilter
 */
export class SipHeaderFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.SipHeaderFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SipHeaderFilter();
    SipHeaderFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SipHeaderFilter) {
    _instance.key = _instance.key || '';
    _instance.value = _instance.value || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SipHeaderFilter,
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

    SipHeaderFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SipHeaderFilter,
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
   * @param _value initial values object or instance of SipHeaderFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<SipHeaderFilter.AsObject>) {
    _value = _value || {};
    this.key = _value.key;
    this.value = _value.value;
    SipHeaderFilter.refineValues(this);
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
    SipHeaderFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SipHeaderFilter.AsObject {
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
  ): SipHeaderFilter.AsProtobufJSON {
    return {
      key: this.key,
      value: this.value
    };
  }
}
export module SipHeaderFilter {
  /**
   * Standard JavaScript object representation for SipHeaderFilter
   */
  export interface AsObject {
    key: string;
    value: string;
  }

  /**
   * Protobuf JSON representation for SipHeaderFilter
   */
  export interface AsProtobufJSON {
    key: string;
    value: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CallLogFilter
 */
export class CallLogFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.CallLogFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallLogFilter();
    CallLogFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallLogFilter) {
    _instance.callNames = _instance.callNames || [];
    _instance.callerNames = _instance.callerNames || [];
    _instance.listenerNames = _instance.listenerNames || [];
    _instance.callerIds = _instance.callerIds || [];
    _instance.listenerIds = _instance.listenerIds || [];
    _instance.callIds = _instance.callIds || [];
    _instance.containerNames = _instance.containerNames || [];
    _instance.containerIds = _instance.containerIds || [];
    _instance.logStreamNames = _instance.logStreamNames || [];
    _instance.sipAccounts = _instance.sipAccounts || [];
    _instance.sipPorts = _instance.sipPorts || [];
    _instance.csiPorts = _instance.csiPorts || [];
    _instance.asteriskPorts = _instance.asteriskPorts || [];
    _instance.phoneNumbers = _instance.phoneNumbers || [];
    _instance.calleeIds = _instance.calleeIds || [];
    _instance.nluSessionNames = _instance.nluSessionNames || [];
    _instance.nluSessionUuids = _instance.nluSessionUuids || [];
    _instance.nluProjectUuids = _instance.nluProjectUuids || [];
    _instance.callTypes = _instance.callTypes || [];
    _instance.sipHeaders = _instance.sipHeaders || [];
    _instance.logSources = _instance.logSources || [];
    _instance.channels = _instance.channels || [];
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.logLevels = _instance.logLevels || [];
    _instance.emitterPrefixes = _instance.emitterPrefixes || [];
    _instance.threadNames = _instance.threadNames || [];
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.sipPortNumbers = _instance.sipPortNumbers || [];
    _instance.csiPortNumbers = _instance.csiPortNumbers || [];
    _instance.asteriskPortNumbers = _instance.asteriskPortNumbers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallLogFilter,
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
          (_instance.callerNames = _instance.callerNames || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.listenerNames = _instance.listenerNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          (_instance.callerIds = _instance.callerIds || []).push(
            _reader.readString()
          );
          break;
        case 5:
          (_instance.listenerIds = _instance.listenerIds || []).push(
            _reader.readString()
          );
          break;
        case 6:
          (_instance.callIds = _instance.callIds || []).push(
            _reader.readString()
          );
          break;
        case 7:
          (_instance.containerNames = _instance.containerNames || []).push(
            _reader.readString()
          );
          break;
        case 8:
          (_instance.containerIds = _instance.containerIds || []).push(
            _reader.readString()
          );
          break;
        case 9:
          (_instance.logStreamNames = _instance.logStreamNames || []).push(
            _reader.readString()
          );
          break;
        case 10:
          (_instance.sipAccounts = _instance.sipAccounts || []).push(
            _reader.readString()
          );
          break;
        case 11:
          (_instance.sipPorts = _instance.sipPorts || []).push(
            _reader.readString()
          );
          break;
        case 12:
          (_instance.csiPorts = _instance.csiPorts || []).push(
            _reader.readString()
          );
          break;
        case 13:
          (_instance.asteriskPorts = _instance.asteriskPorts || []).push(
            _reader.readString()
          );
          break;
        case 14:
          (_instance.phoneNumbers = _instance.phoneNumbers || []).push(
            _reader.readString()
          );
          break;
        case 15:
          (_instance.calleeIds = _instance.calleeIds || []).push(
            _reader.readString()
          );
          break;
        case 16:
          (_instance.nluSessionNames = _instance.nluSessionNames || []).push(
            _reader.readString()
          );
          break;
        case 17:
          (_instance.nluSessionUuids = _instance.nluSessionUuids || []).push(
            _reader.readString()
          );
          break;
        case 18:
          (_instance.nluProjectUuids = _instance.nluProjectUuids || []).push(
            _reader.readString()
          );
          break;
        case 19:
          _reader.readPackableEnumInto(
            (_instance.callTypes = _instance.callTypes || [])
          );
          break;
        case 20:
          const messageInitializer20 = new SipHeaderFilter();
          _reader.readMessage(
            messageInitializer20,
            SipHeaderFilter.deserializeBinaryFromReader
          );
          (_instance.sipHeaders = _instance.sipHeaders || []).push(
            messageInitializer20
          );
          break;
        case 21:
          _reader.readPackableEnumInto(
            (_instance.logSources = _instance.logSources || [])
          );
          break;
        case 22:
          _reader.readPackableEnumInto(
            (_instance.channels = _instance.channels || [])
          );
          break;
        case 23:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 24:
          _reader.readPackableEnumInto(
            (_instance.logLevels = _instance.logLevels || [])
          );
          break;
        case 25:
          _instance.includeUnleveledLines = _reader.readBool();
          break;
        case 26:
          _instance.text = _reader.readString();
          break;
        case 27:
          _instance.regex = _reader.readString();
          break;
        case 28:
          (_instance.emitterPrefixes = _instance.emitterPrefixes || []).push(
            _reader.readString()
          );
          break;
        case 29:
          (_instance.threadNames = _instance.threadNames || []).push(
            _reader.readString()
          );
          break;
        case 30:
          _instance.startTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 31:
          _instance.endTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 32:
          _reader.readPackableInt32Into(
            (_instance.sipPortNumbers = _instance.sipPortNumbers || [])
          );
          break;
        case 33:
          _reader.readPackableInt32Into(
            (_instance.csiPortNumbers = _instance.csiPortNumbers || [])
          );
          break;
        case 34:
          _reader.readPackableInt32Into(
            (_instance.asteriskPortNumbers =
              _instance.asteriskPortNumbers || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CallLogFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallLogFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.callNames && _instance.callNames.length) {
      _writer.writeRepeatedString(1, _instance.callNames);
    }
    if (_instance.callerNames && _instance.callerNames.length) {
      _writer.writeRepeatedString(2, _instance.callerNames);
    }
    if (_instance.listenerNames && _instance.listenerNames.length) {
      _writer.writeRepeatedString(3, _instance.listenerNames);
    }
    if (_instance.callerIds && _instance.callerIds.length) {
      _writer.writeRepeatedString(4, _instance.callerIds);
    }
    if (_instance.listenerIds && _instance.listenerIds.length) {
      _writer.writeRepeatedString(5, _instance.listenerIds);
    }
    if (_instance.callIds && _instance.callIds.length) {
      _writer.writeRepeatedString(6, _instance.callIds);
    }
    if (_instance.containerNames && _instance.containerNames.length) {
      _writer.writeRepeatedString(7, _instance.containerNames);
    }
    if (_instance.containerIds && _instance.containerIds.length) {
      _writer.writeRepeatedString(8, _instance.containerIds);
    }
    if (_instance.logStreamNames && _instance.logStreamNames.length) {
      _writer.writeRepeatedString(9, _instance.logStreamNames);
    }
    if (_instance.sipAccounts && _instance.sipAccounts.length) {
      _writer.writeRepeatedString(10, _instance.sipAccounts);
    }
    if (_instance.sipPorts && _instance.sipPorts.length) {
      _writer.writeRepeatedString(11, _instance.sipPorts);
    }
    if (_instance.csiPorts && _instance.csiPorts.length) {
      _writer.writeRepeatedString(12, _instance.csiPorts);
    }
    if (_instance.asteriskPorts && _instance.asteriskPorts.length) {
      _writer.writeRepeatedString(13, _instance.asteriskPorts);
    }
    if (_instance.phoneNumbers && _instance.phoneNumbers.length) {
      _writer.writeRepeatedString(14, _instance.phoneNumbers);
    }
    if (_instance.calleeIds && _instance.calleeIds.length) {
      _writer.writeRepeatedString(15, _instance.calleeIds);
    }
    if (_instance.nluSessionNames && _instance.nluSessionNames.length) {
      _writer.writeRepeatedString(16, _instance.nluSessionNames);
    }
    if (_instance.nluSessionUuids && _instance.nluSessionUuids.length) {
      _writer.writeRepeatedString(17, _instance.nluSessionUuids);
    }
    if (_instance.nluProjectUuids && _instance.nluProjectUuids.length) {
      _writer.writeRepeatedString(18, _instance.nluProjectUuids);
    }
    if (_instance.callTypes && _instance.callTypes.length) {
      _writer.writePackedEnum(19, _instance.callTypes);
    }
    if (_instance.sipHeaders && _instance.sipHeaders.length) {
      _writer.writeRepeatedMessage(
        20,
        _instance.sipHeaders as any,
        SipHeaderFilter.serializeBinaryToWriter
      );
    }
    if (_instance.logSources && _instance.logSources.length) {
      _writer.writePackedEnum(21, _instance.logSources);
    }
    if (_instance.channels && _instance.channels.length) {
      _writer.writePackedEnum(22, _instance.channels);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(23, _instance.minLogLevel);
    }
    if (_instance.logLevels && _instance.logLevels.length) {
      _writer.writePackedEnum(24, _instance.logLevels);
    }
    if (
      _instance.includeUnleveledLines !== undefined &&
      _instance.includeUnleveledLines !== null
    ) {
      _writer.writeBool(25, _instance.includeUnleveledLines);
    }
    if (_instance.text !== undefined && _instance.text !== null) {
      _writer.writeString(26, _instance.text);
    }
    if (_instance.regex !== undefined && _instance.regex !== null) {
      _writer.writeString(27, _instance.regex);
    }
    if (_instance.emitterPrefixes && _instance.emitterPrefixes.length) {
      _writer.writeRepeatedString(28, _instance.emitterPrefixes);
    }
    if (_instance.threadNames && _instance.threadNames.length) {
      _writer.writeRepeatedString(29, _instance.threadNames);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        30,
        _instance.startTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        31,
        _instance.endTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.sipPortNumbers && _instance.sipPortNumbers.length) {
      _writer.writePackedInt32(32, _instance.sipPortNumbers);
    }
    if (_instance.csiPortNumbers && _instance.csiPortNumbers.length) {
      _writer.writePackedInt32(33, _instance.csiPortNumbers);
    }
    if (_instance.asteriskPortNumbers && _instance.asteriskPortNumbers.length) {
      _writer.writePackedInt32(34, _instance.asteriskPortNumbers);
    }
  }

  private _callNames: string[];
  private _callerNames: string[];
  private _listenerNames: string[];
  private _callerIds: string[];
  private _listenerIds: string[];
  private _callIds: string[];
  private _containerNames: string[];
  private _containerIds: string[];
  private _logStreamNames: string[];
  private _sipAccounts: string[];
  private _sipPorts: string[];
  private _csiPorts: string[];
  private _asteriskPorts: string[];
  private _phoneNumbers: string[];
  private _calleeIds: string[];
  private _nluSessionNames: string[];
  private _nluSessionUuids: string[];
  private _nluProjectUuids: string[];
  private _callTypes: ondewoVtsi012.CallType[];
  private _sipHeaders?: SipHeaderFilter[];
  private _logSources: LogSource[];
  private _channels: LogStreamChannel[];
  private _minLogLevel: ondewoNlu011.LogSeverity;
  private _logLevels: ondewoNlu011.LogSeverity[];
  private _includeUnleveledLines: boolean;
  private _text: string;
  private _regex: string;
  private _emitterPrefixes: string[];
  private _threadNames: string[];
  private _startTime?: googleProtobuf002.Timestamp;
  private _endTime?: googleProtobuf002.Timestamp;
  private _sipPortNumbers: number[];
  private _csiPortNumbers: number[];
  private _asteriskPortNumbers: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallLogFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallLogFilter.AsObject>) {
    _value = _value || {};
    this.callNames = (_value.callNames || []).slice();
    this.callerNames = (_value.callerNames || []).slice();
    this.listenerNames = (_value.listenerNames || []).slice();
    this.callerIds = (_value.callerIds || []).slice();
    this.listenerIds = (_value.listenerIds || []).slice();
    this.callIds = (_value.callIds || []).slice();
    this.containerNames = (_value.containerNames || []).slice();
    this.containerIds = (_value.containerIds || []).slice();
    this.logStreamNames = (_value.logStreamNames || []).slice();
    this.sipAccounts = (_value.sipAccounts || []).slice();
    this.sipPorts = (_value.sipPorts || []).slice();
    this.csiPorts = (_value.csiPorts || []).slice();
    this.asteriskPorts = (_value.asteriskPorts || []).slice();
    this.phoneNumbers = (_value.phoneNumbers || []).slice();
    this.calleeIds = (_value.calleeIds || []).slice();
    this.nluSessionNames = (_value.nluSessionNames || []).slice();
    this.nluSessionUuids = (_value.nluSessionUuids || []).slice();
    this.nluProjectUuids = (_value.nluProjectUuids || []).slice();
    this.callTypes = (_value.callTypes || []).slice();
    this.sipHeaders = (_value.sipHeaders || []).map(
      m => new SipHeaderFilter(m)
    );
    this.logSources = (_value.logSources || []).slice();
    this.channels = (_value.channels || []).slice();
    this.minLogLevel = _value.minLogLevel;
    this.logLevels = (_value.logLevels || []).slice();
    this.includeUnleveledLines = _value.includeUnleveledLines;
    this.text = _value.text;
    this.regex = _value.regex;
    this.emitterPrefixes = (_value.emitterPrefixes || []).slice();
    this.threadNames = (_value.threadNames || []).slice();
    this.startTime = _value.startTime
      ? new googleProtobuf002.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf002.Timestamp(_value.endTime)
      : undefined;
    this.sipPortNumbers = (_value.sipPortNumbers || []).slice();
    this.csiPortNumbers = (_value.csiPortNumbers || []).slice();
    this.asteriskPortNumbers = (_value.asteriskPortNumbers || []).slice();
    CallLogFilter.refineValues(this);
  }
  get callNames(): string[] {
    return this._callNames;
  }
  set callNames(value: string[]) {
    this._callNames = value;
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
  get callerIds(): string[] {
    return this._callerIds;
  }
  set callerIds(value: string[]) {
    this._callerIds = value;
  }
  get listenerIds(): string[] {
    return this._listenerIds;
  }
  set listenerIds(value: string[]) {
    this._listenerIds = value;
  }
  get callIds(): string[] {
    return this._callIds;
  }
  set callIds(value: string[]) {
    this._callIds = value;
  }
  get containerNames(): string[] {
    return this._containerNames;
  }
  set containerNames(value: string[]) {
    this._containerNames = value;
  }
  get containerIds(): string[] {
    return this._containerIds;
  }
  set containerIds(value: string[]) {
    this._containerIds = value;
  }
  get logStreamNames(): string[] {
    return this._logStreamNames;
  }
  set logStreamNames(value: string[]) {
    this._logStreamNames = value;
  }
  get sipAccounts(): string[] {
    return this._sipAccounts;
  }
  set sipAccounts(value: string[]) {
    this._sipAccounts = value;
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
  get asteriskPorts(): string[] {
    return this._asteriskPorts;
  }
  set asteriskPorts(value: string[]) {
    this._asteriskPorts = value;
  }
  get phoneNumbers(): string[] {
    return this._phoneNumbers;
  }
  set phoneNumbers(value: string[]) {
    this._phoneNumbers = value;
  }
  get calleeIds(): string[] {
    return this._calleeIds;
  }
  set calleeIds(value: string[]) {
    this._calleeIds = value;
  }
  get nluSessionNames(): string[] {
    return this._nluSessionNames;
  }
  set nluSessionNames(value: string[]) {
    this._nluSessionNames = value;
  }
  get nluSessionUuids(): string[] {
    return this._nluSessionUuids;
  }
  set nluSessionUuids(value: string[]) {
    this._nluSessionUuids = value;
  }
  get nluProjectUuids(): string[] {
    return this._nluProjectUuids;
  }
  set nluProjectUuids(value: string[]) {
    this._nluProjectUuids = value;
  }
  get callTypes(): ondewoVtsi012.CallType[] {
    return this._callTypes;
  }
  set callTypes(value: ondewoVtsi012.CallType[]) {
    this._callTypes = value;
  }
  get sipHeaders(): SipHeaderFilter[] | undefined {
    return this._sipHeaders;
  }
  set sipHeaders(value: SipHeaderFilter[] | undefined) {
    this._sipHeaders = value;
  }
  get logSources(): LogSource[] {
    return this._logSources;
  }
  set logSources(value: LogSource[]) {
    this._logSources = value;
  }
  get channels(): LogStreamChannel[] {
    return this._channels;
  }
  set channels(value: LogStreamChannel[]) {
    this._channels = value;
  }
  get minLogLevel(): ondewoNlu011.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu011.LogSeverity) {
    this._minLogLevel = value;
  }
  get logLevels(): ondewoNlu011.LogSeverity[] {
    return this._logLevels;
  }
  set logLevels(value: ondewoNlu011.LogSeverity[]) {
    this._logLevels = value;
  }
  get includeUnleveledLines(): boolean {
    return this._includeUnleveledLines;
  }
  set includeUnleveledLines(value: boolean) {
    this._includeUnleveledLines = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get regex(): string {
    return this._regex;
  }
  set regex(value: string) {
    this._regex = value;
  }
  get emitterPrefixes(): string[] {
    return this._emitterPrefixes;
  }
  set emitterPrefixes(value: string[]) {
    this._emitterPrefixes = value;
  }
  get threadNames(): string[] {
    return this._threadNames;
  }
  set threadNames(value: string[]) {
    this._threadNames = value;
  }
  get startTime(): googleProtobuf002.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf002.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf002.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf002.Timestamp | undefined) {
    this._endTime = value;
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
  get asteriskPortNumbers(): number[] {
    return this._asteriskPortNumbers;
  }
  set asteriskPortNumbers(value: number[]) {
    this._asteriskPortNumbers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CallLogFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallLogFilter.AsObject {
    return {
      callNames: (this.callNames || []).slice(),
      callerNames: (this.callerNames || []).slice(),
      listenerNames: (this.listenerNames || []).slice(),
      callerIds: (this.callerIds || []).slice(),
      listenerIds: (this.listenerIds || []).slice(),
      callIds: (this.callIds || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      containerIds: (this.containerIds || []).slice(),
      logStreamNames: (this.logStreamNames || []).slice(),
      sipAccounts: (this.sipAccounts || []).slice(),
      sipPorts: (this.sipPorts || []).slice(),
      csiPorts: (this.csiPorts || []).slice(),
      asteriskPorts: (this.asteriskPorts || []).slice(),
      phoneNumbers: (this.phoneNumbers || []).slice(),
      calleeIds: (this.calleeIds || []).slice(),
      nluSessionNames: (this.nluSessionNames || []).slice(),
      nluSessionUuids: (this.nluSessionUuids || []).slice(),
      nluProjectUuids: (this.nluProjectUuids || []).slice(),
      callTypes: (this.callTypes || []).slice(),
      sipHeaders: (this.sipHeaders || []).map(m => m.toObject()),
      logSources: (this.logSources || []).slice(),
      channels: (this.channels || []).slice(),
      minLogLevel: this.minLogLevel,
      logLevels: (this.logLevels || []).slice(),
      includeUnleveledLines: this.includeUnleveledLines,
      text: this.text,
      regex: this.regex,
      emitterPrefixes: (this.emitterPrefixes || []).slice(),
      threadNames: (this.threadNames || []).slice(),
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      sipPortNumbers: (this.sipPortNumbers || []).slice(),
      csiPortNumbers: (this.csiPortNumbers || []).slice(),
      asteriskPortNumbers: (this.asteriskPortNumbers || []).slice()
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
  ): CallLogFilter.AsProtobufJSON {
    return {
      callNames: (this.callNames || []).slice(),
      callerNames: (this.callerNames || []).slice(),
      listenerNames: (this.listenerNames || []).slice(),
      callerIds: (this.callerIds || []).slice(),
      listenerIds: (this.listenerIds || []).slice(),
      callIds: (this.callIds || []).slice(),
      containerNames: (this.containerNames || []).slice(),
      containerIds: (this.containerIds || []).slice(),
      logStreamNames: (this.logStreamNames || []).slice(),
      sipAccounts: (this.sipAccounts || []).slice(),
      sipPorts: (this.sipPorts || []).slice(),
      csiPorts: (this.csiPorts || []).slice(),
      asteriskPorts: (this.asteriskPorts || []).slice(),
      phoneNumbers: (this.phoneNumbers || []).slice(),
      calleeIds: (this.calleeIds || []).slice(),
      nluSessionNames: (this.nluSessionNames || []).slice(),
      nluSessionUuids: (this.nluSessionUuids || []).slice(),
      nluProjectUuids: (this.nluProjectUuids || []).slice(),
      callTypes: (this.callTypes || []).map(v => ondewoVtsi012.CallType[v]),
      sipHeaders: (this.sipHeaders || []).map(m => m.toProtobufJSON(options)),
      logSources: (this.logSources || []).map(v => LogSource[v]),
      channels: (this.channels || []).map(v => LogStreamChannel[v]),
      minLogLevel:
        ondewoNlu011.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      logLevels: (this.logLevels || []).map(v => ondewoNlu011.LogSeverity[v]),
      includeUnleveledLines: this.includeUnleveledLines,
      text: this.text,
      regex: this.regex,
      emitterPrefixes: (this.emitterPrefixes || []).slice(),
      threadNames: (this.threadNames || []).slice(),
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      sipPortNumbers: (this.sipPortNumbers || []).slice(),
      csiPortNumbers: (this.csiPortNumbers || []).slice(),
      asteriskPortNumbers: (this.asteriskPortNumbers || []).slice()
    };
  }
}
export module CallLogFilter {
  /**
   * Standard JavaScript object representation for CallLogFilter
   */
  export interface AsObject {
    callNames: string[];
    callerNames: string[];
    listenerNames: string[];
    callerIds: string[];
    listenerIds: string[];
    callIds: string[];
    containerNames: string[];
    containerIds: string[];
    logStreamNames: string[];
    sipAccounts: string[];
    sipPorts: string[];
    csiPorts: string[];
    asteriskPorts: string[];
    phoneNumbers: string[];
    calleeIds: string[];
    nluSessionNames: string[];
    nluSessionUuids: string[];
    nluProjectUuids: string[];
    callTypes: ondewoVtsi012.CallType[];
    sipHeaders?: SipHeaderFilter.AsObject[];
    logSources: LogSource[];
    channels: LogStreamChannel[];
    minLogLevel: ondewoNlu011.LogSeverity;
    logLevels: ondewoNlu011.LogSeverity[];
    includeUnleveledLines: boolean;
    text: string;
    regex: string;
    emitterPrefixes: string[];
    threadNames: string[];
    startTime?: googleProtobuf002.Timestamp.AsObject;
    endTime?: googleProtobuf002.Timestamp.AsObject;
    sipPortNumbers: number[];
    csiPortNumbers: number[];
    asteriskPortNumbers: number[];
  }

  /**
   * Protobuf JSON representation for CallLogFilter
   */
  export interface AsProtobufJSON {
    callNames: string[];
    callerNames: string[];
    listenerNames: string[];
    callerIds: string[];
    listenerIds: string[];
    callIds: string[];
    containerNames: string[];
    containerIds: string[];
    logStreamNames: string[];
    sipAccounts: string[];
    sipPorts: string[];
    csiPorts: string[];
    asteriskPorts: string[];
    phoneNumbers: string[];
    calleeIds: string[];
    nluSessionNames: string[];
    nluSessionUuids: string[];
    nluProjectUuids: string[];
    callTypes: string[];
    sipHeaders: SipHeaderFilter.AsProtobufJSON[] | null;
    logSources: string[];
    channels: string[];
    minLogLevel: string;
    logLevels: string[];
    includeUnleveledLines: boolean;
    text: string;
    regex: string;
    emitterPrefixes: string[];
    threadNames: string[];
    startTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    sipPortNumbers: number[];
    csiPortNumbers: number[];
    asteriskPortNumbers: number[];
  }
}

/**
 * Message implementation for ondewo.vtsi.CallLogStream
 */
export class CallLogStream implements GrpcMessage {
  static id = 'ondewo.vtsi.CallLogStream';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CallLogStream();
    CallLogStream.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CallLogStream) {
    _instance.name = _instance.name || '';
    _instance.containerName = _instance.containerName || '';
    _instance.containerId = _instance.containerId || '';
    _instance.channel = _instance.channel || 0;
    _instance.projectId = _instance.projectId || '';
    _instance.voipCallName = _instance.voipCallName || '';
    _instance.callType = _instance.callType || 0;
    _instance.sipAccount = _instance.sipAccount || '';
    _instance.sipPort = _instance.sipPort || 0;
    _instance.csiPort = _instance.csiPort || 0;
    _instance.asteriskPort = _instance.asteriskPort || 0;
    _instance.image = _instance.image || '';
    _instance.captureState = _instance.captureState || 0;
    _instance.captureError = _instance.captureError || '';
    _instance.captureStartedAt = _instance.captureStartedAt || undefined;
    _instance.captureFinishedAt = _instance.captureFinishedAt || undefined;
    _instance.partialCapture = _instance.partialCapture || false;
    _instance.minAvailableSeq = _instance.minAvailableSeq || '0';
    _instance.maxAvailableSeq = _instance.maxAvailableSeq || '0';
    _instance.lineCount = _instance.lineCount || '0';
    _instance.droppedLineCount = _instance.droppedLineCount || '0';
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CallLogStream,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.containerName = _reader.readString();
          break;
        case 3:
          _instance.containerId = _reader.readString();
          break;
        case 4:
          _instance.channel = _reader.readEnum();
          break;
        case 5:
          _instance.projectId = _reader.readString();
          break;
        case 6:
          _instance.voipCallName = _reader.readString();
          break;
        case 7:
          _instance.callType = _reader.readEnum();
          break;
        case 8:
          _instance.sipAccount = _reader.readString();
          break;
        case 9:
          _instance.sipPort = _reader.readInt32();
          break;
        case 10:
          _instance.csiPort = _reader.readInt32();
          break;
        case 11:
          _instance.asteriskPort = _reader.readInt32();
          break;
        case 12:
          _instance.image = _reader.readString();
          break;
        case 13:
          _instance.captureState = _reader.readEnum();
          break;
        case 14:
          _instance.captureError = _reader.readString();
          break;
        case 15:
          _instance.captureStartedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.captureStartedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.captureFinishedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.captureFinishedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.partialCapture = _reader.readBool();
          break;
        case 18:
          _instance.minAvailableSeq = _reader.readInt64String();
          break;
        case 19:
          _instance.maxAvailableSeq = _reader.readInt64String();
          break;
        case 20:
          _instance.lineCount = _reader.readInt64String();
          break;
        case 21:
          _instance.droppedLineCount = _reader.readInt64String();
          break;
        case 22:
          _instance.vtsiProjectName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CallLogStream.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CallLogStream,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.containerName) {
      _writer.writeString(2, _instance.containerName);
    }
    if (_instance.containerId) {
      _writer.writeString(3, _instance.containerId);
    }
    if (_instance.channel) {
      _writer.writeEnum(4, _instance.channel);
    }
    if (_instance.projectId) {
      _writer.writeString(5, _instance.projectId);
    }
    if (_instance.voipCallName) {
      _writer.writeString(6, _instance.voipCallName);
    }
    if (_instance.callType) {
      _writer.writeEnum(7, _instance.callType);
    }
    if (_instance.sipAccount) {
      _writer.writeString(8, _instance.sipAccount);
    }
    if (_instance.sipPort) {
      _writer.writeInt32(9, _instance.sipPort);
    }
    if (_instance.csiPort) {
      _writer.writeInt32(10, _instance.csiPort);
    }
    if (_instance.asteriskPort) {
      _writer.writeInt32(11, _instance.asteriskPort);
    }
    if (_instance.image) {
      _writer.writeString(12, _instance.image);
    }
    if (_instance.captureState) {
      _writer.writeEnum(13, _instance.captureState);
    }
    if (_instance.captureError) {
      _writer.writeString(14, _instance.captureError);
    }
    if (_instance.captureStartedAt) {
      _writer.writeMessage(
        15,
        _instance.captureStartedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.captureFinishedAt) {
      _writer.writeMessage(
        16,
        _instance.captureFinishedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.partialCapture) {
      _writer.writeBool(17, _instance.partialCapture);
    }
    if (_instance.minAvailableSeq) {
      _writer.writeInt64String(18, _instance.minAvailableSeq);
    }
    if (_instance.maxAvailableSeq) {
      _writer.writeInt64String(19, _instance.maxAvailableSeq);
    }
    if (_instance.lineCount) {
      _writer.writeInt64String(20, _instance.lineCount);
    }
    if (_instance.droppedLineCount) {
      _writer.writeInt64String(21, _instance.droppedLineCount);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(22, _instance.vtsiProjectName);
    }
  }

  private _name: string;
  private _containerName: string;
  private _containerId: string;
  private _channel: LogStreamChannel;
  private _projectId: string;
  private _voipCallName: string;
  private _callType: ondewoVtsi012.CallType;
  private _sipAccount: string;
  private _sipPort: number;
  private _csiPort: number;
  private _asteriskPort: number;
  private _image: string;
  private _captureState: LogCaptureState;
  private _captureError: string;
  private _captureStartedAt?: googleProtobuf002.Timestamp;
  private _captureFinishedAt?: googleProtobuf002.Timestamp;
  private _partialCapture: boolean;
  private _minAvailableSeq: string;
  private _maxAvailableSeq: string;
  private _lineCount: string;
  private _droppedLineCount: string;
  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CallLogStream to deeply clone from
   */
  constructor(_value?: RecursivePartial<CallLogStream.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.containerName = _value.containerName;
    this.containerId = _value.containerId;
    this.channel = _value.channel;
    this.projectId = _value.projectId;
    this.voipCallName = _value.voipCallName;
    this.callType = _value.callType;
    this.sipAccount = _value.sipAccount;
    this.sipPort = _value.sipPort;
    this.csiPort = _value.csiPort;
    this.asteriskPort = _value.asteriskPort;
    this.image = _value.image;
    this.captureState = _value.captureState;
    this.captureError = _value.captureError;
    this.captureStartedAt = _value.captureStartedAt
      ? new googleProtobuf002.Timestamp(_value.captureStartedAt)
      : undefined;
    this.captureFinishedAt = _value.captureFinishedAt
      ? new googleProtobuf002.Timestamp(_value.captureFinishedAt)
      : undefined;
    this.partialCapture = _value.partialCapture;
    this.minAvailableSeq = _value.minAvailableSeq;
    this.maxAvailableSeq = _value.maxAvailableSeq;
    this.lineCount = _value.lineCount;
    this.droppedLineCount = _value.droppedLineCount;
    this.vtsiProjectName = _value.vtsiProjectName;
    CallLogStream.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get containerId(): string {
    return this._containerId;
  }
  set containerId(value: string) {
    this._containerId = value;
  }
  get channel(): LogStreamChannel {
    return this._channel;
  }
  set channel(value: LogStreamChannel) {
    this._channel = value;
  }
  get projectId(): string {
    return this._projectId;
  }
  set projectId(value: string) {
    this._projectId = value;
  }
  get voipCallName(): string {
    return this._voipCallName;
  }
  set voipCallName(value: string) {
    this._voipCallName = value;
  }
  get callType(): ondewoVtsi012.CallType {
    return this._callType;
  }
  set callType(value: ondewoVtsi012.CallType) {
    this._callType = value;
  }
  get sipAccount(): string {
    return this._sipAccount;
  }
  set sipAccount(value: string) {
    this._sipAccount = value;
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
  get asteriskPort(): number {
    return this._asteriskPort;
  }
  set asteriskPort(value: number) {
    this._asteriskPort = value;
  }
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }
  get captureState(): LogCaptureState {
    return this._captureState;
  }
  set captureState(value: LogCaptureState) {
    this._captureState = value;
  }
  get captureError(): string {
    return this._captureError;
  }
  set captureError(value: string) {
    this._captureError = value;
  }
  get captureStartedAt(): googleProtobuf002.Timestamp | undefined {
    return this._captureStartedAt;
  }
  set captureStartedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._captureStartedAt = value;
  }
  get captureFinishedAt(): googleProtobuf002.Timestamp | undefined {
    return this._captureFinishedAt;
  }
  set captureFinishedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._captureFinishedAt = value;
  }
  get partialCapture(): boolean {
    return this._partialCapture;
  }
  set partialCapture(value: boolean) {
    this._partialCapture = value;
  }
  get minAvailableSeq(): string {
    return this._minAvailableSeq;
  }
  set minAvailableSeq(value: string) {
    this._minAvailableSeq = value;
  }
  get maxAvailableSeq(): string {
    return this._maxAvailableSeq;
  }
  set maxAvailableSeq(value: string) {
    this._maxAvailableSeq = value;
  }
  get lineCount(): string {
    return this._lineCount;
  }
  set lineCount(value: string) {
    this._lineCount = value;
  }
  get droppedLineCount(): string {
    return this._droppedLineCount;
  }
  set droppedLineCount(value: string) {
    this._droppedLineCount = value;
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
    CallLogStream.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CallLogStream.AsObject {
    return {
      name: this.name,
      containerName: this.containerName,
      containerId: this.containerId,
      channel: this.channel,
      projectId: this.projectId,
      voipCallName: this.voipCallName,
      callType: this.callType,
      sipAccount: this.sipAccount,
      sipPort: this.sipPort,
      csiPort: this.csiPort,
      asteriskPort: this.asteriskPort,
      image: this.image,
      captureState: this.captureState,
      captureError: this.captureError,
      captureStartedAt: this.captureStartedAt
        ? this.captureStartedAt.toObject()
        : undefined,
      captureFinishedAt: this.captureFinishedAt
        ? this.captureFinishedAt.toObject()
        : undefined,
      partialCapture: this.partialCapture,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      lineCount: this.lineCount,
      droppedLineCount: this.droppedLineCount,
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
  ): CallLogStream.AsProtobufJSON {
    return {
      name: this.name,
      containerName: this.containerName,
      containerId: this.containerId,
      channel:
        LogStreamChannel[
          this.channel === null || this.channel === undefined ? 0 : this.channel
        ],
      projectId: this.projectId,
      voipCallName: this.voipCallName,
      callType:
        ondewoVtsi012.CallType[
          this.callType === null || this.callType === undefined
            ? 0
            : this.callType
        ],
      sipAccount: this.sipAccount,
      sipPort: this.sipPort,
      csiPort: this.csiPort,
      asteriskPort: this.asteriskPort,
      image: this.image,
      captureState:
        LogCaptureState[
          this.captureState === null || this.captureState === undefined
            ? 0
            : this.captureState
        ],
      captureError: this.captureError,
      captureStartedAt: this.captureStartedAt
        ? this.captureStartedAt.toProtobufJSON(options)
        : null,
      captureFinishedAt: this.captureFinishedAt
        ? this.captureFinishedAt.toProtobufJSON(options)
        : null,
      partialCapture: this.partialCapture,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      lineCount: this.lineCount,
      droppedLineCount: this.droppedLineCount,
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module CallLogStream {
  /**
   * Standard JavaScript object representation for CallLogStream
   */
  export interface AsObject {
    name: string;
    containerName: string;
    containerId: string;
    channel: LogStreamChannel;
    projectId: string;
    voipCallName: string;
    callType: ondewoVtsi012.CallType;
    sipAccount: string;
    sipPort: number;
    csiPort: number;
    asteriskPort: number;
    image: string;
    captureState: LogCaptureState;
    captureError: string;
    captureStartedAt?: googleProtobuf002.Timestamp.AsObject;
    captureFinishedAt?: googleProtobuf002.Timestamp.AsObject;
    partialCapture: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    lineCount: string;
    droppedLineCount: string;
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for CallLogStream
   */
  export interface AsProtobufJSON {
    name: string;
    containerName: string;
    containerId: string;
    channel: string;
    projectId: string;
    voipCallName: string;
    callType: string;
    sipAccount: string;
    sipPort: number;
    csiPort: number;
    asteriskPort: number;
    image: string;
    captureState: string;
    captureError: string;
    captureStartedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    captureFinishedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    partialCapture: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    lineCount: string;
    droppedLineCount: string;
    vtsiProjectName: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallLogsRequest
 */
export class StreamCallLogsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallLogsRequest();
    StreamCallLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallLogsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CallLogFilter();
          _reader.readMessage(
            _instance.filter,
            CallLogFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.tailLines = _reader.readInt32();
          break;
        case 4:
          _instance.resumeToken = _reader.readString();
          break;
        case 5:
          _instance.afterSeq = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CallLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.tailLines !== undefined && _instance.tailLines !== null) {
      _writer.writeInt32(3, _instance.tailLines);
    }
    if (_instance.resumeToken !== undefined && _instance.resumeToken !== null) {
      _writer.writeString(4, _instance.resumeToken);
    }
    if (_instance.afterSeq !== undefined && _instance.afterSeq !== null) {
      _writer.writeInt64String(5, _instance.afterSeq);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CallLogFilter;
  private _tailLines: number;
  private _resumeToken: string;
  private _afterSeq: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallLogsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CallLogFilter(_value.filter) : undefined;
    this.tailLines = _value.tailLines;
    this.resumeToken = _value.resumeToken;
    this.afterSeq = _value.afterSeq;
    StreamCallLogsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CallLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CallLogFilter | undefined) {
    this._filter = value;
  }
  get tailLines(): number {
    return this._tailLines;
  }
  set tailLines(value: number) {
    this._tailLines = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get afterSeq(): string {
    return this._afterSeq;
  }
  set afterSeq(value: string) {
    this._afterSeq = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCallLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallLogsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      tailLines: this.tailLines,
      resumeToken: this.resumeToken,
      afterSeq: this.afterSeq
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
  ): StreamCallLogsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      tailLines: this.tailLines,
      resumeToken: this.resumeToken,
      afterSeq: this.afterSeq
    };
  }
}
export module StreamCallLogsRequest {
  /**
   * Standard JavaScript object representation for StreamCallLogsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CallLogFilter.AsObject;
    tailLines: number;
    resumeToken: string;
    afterSeq: string;
  }

  /**
   * Protobuf JSON representation for StreamCallLogsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CallLogFilter.AsProtobufJSON | null;
    tailLines: number;
    resumeToken: string;
    afterSeq: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.StreamCallLogsResponse
 */
export class StreamCallLogsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.StreamCallLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamCallLogsResponse();
    StreamCallLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamCallLogsResponse) {
    _instance.logEntries = _instance.logEntries || [];
    _instance.captureState = _instance.captureState || 0;
    _instance.captureError = _instance.captureError || '';
    _instance.droppedLineCount = _instance.droppedLineCount || '0';
    _instance.resumeToken = _instance.resumeToken || '';
    _instance.endReason = _instance.endReason || '';
    _instance.endReasonCode = _instance.endReasonCode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamCallLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CallLogEntry();
          _reader.readMessage(
            messageInitializer1,
            CallLogEntry.deserializeBinaryFromReader
          );
          (_instance.logEntries = _instance.logEntries || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.captureState = _reader.readEnum();
          break;
        case 3:
          _instance.captureError = _reader.readString();
          break;
        case 4:
          _instance.droppedLineCount = _reader.readInt64String();
          break;
        case 5:
          _instance.resumeToken = _reader.readString();
          break;
        case 6:
          _instance.endReason = _reader.readString();
          break;
        case 7:
          _instance.endReasonCode = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamCallLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamCallLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logEntries && _instance.logEntries.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logEntries as any,
        CallLogEntry.serializeBinaryToWriter
      );
    }
    if (_instance.captureState) {
      _writer.writeEnum(2, _instance.captureState);
    }
    if (_instance.captureError) {
      _writer.writeString(3, _instance.captureError);
    }
    if (_instance.droppedLineCount) {
      _writer.writeInt64String(4, _instance.droppedLineCount);
    }
    if (_instance.resumeToken) {
      _writer.writeString(5, _instance.resumeToken);
    }
    if (_instance.endReason) {
      _writer.writeString(6, _instance.endReason);
    }
    if (_instance.endReasonCode) {
      _writer.writeEnum(7, _instance.endReasonCode);
    }
  }

  private _logEntries?: CallLogEntry[];
  private _captureState: LogCaptureState;
  private _captureError: string;
  private _droppedLineCount: string;
  private _resumeToken: string;
  private _endReason: string;
  private _endReasonCode: LogStreamEndReason;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamCallLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamCallLogsResponse.AsObject>) {
    _value = _value || {};
    this.logEntries = (_value.logEntries || []).map(m => new CallLogEntry(m));
    this.captureState = _value.captureState;
    this.captureError = _value.captureError;
    this.droppedLineCount = _value.droppedLineCount;
    this.resumeToken = _value.resumeToken;
    this.endReason = _value.endReason;
    this.endReasonCode = _value.endReasonCode;
    StreamCallLogsResponse.refineValues(this);
  }
  get logEntries(): CallLogEntry[] | undefined {
    return this._logEntries;
  }
  set logEntries(value: CallLogEntry[] | undefined) {
    this._logEntries = value;
  }
  get captureState(): LogCaptureState {
    return this._captureState;
  }
  set captureState(value: LogCaptureState) {
    this._captureState = value;
  }
  get captureError(): string {
    return this._captureError;
  }
  set captureError(value: string) {
    this._captureError = value;
  }
  get droppedLineCount(): string {
    return this._droppedLineCount;
  }
  set droppedLineCount(value: string) {
    this._droppedLineCount = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get endReason(): string {
    return this._endReason;
  }
  set endReason(value: string) {
    this._endReason = value;
  }
  get endReasonCode(): LogStreamEndReason {
    return this._endReasonCode;
  }
  set endReasonCode(value: LogStreamEndReason) {
    this._endReasonCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamCallLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamCallLogsResponse.AsObject {
    return {
      logEntries: (this.logEntries || []).map(m => m.toObject()),
      captureState: this.captureState,
      captureError: this.captureError,
      droppedLineCount: this.droppedLineCount,
      resumeToken: this.resumeToken,
      endReason: this.endReason,
      endReasonCode: this.endReasonCode
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
  ): StreamCallLogsResponse.AsProtobufJSON {
    return {
      logEntries: (this.logEntries || []).map(m => m.toProtobufJSON(options)),
      captureState:
        LogCaptureState[
          this.captureState === null || this.captureState === undefined
            ? 0
            : this.captureState
        ],
      captureError: this.captureError,
      droppedLineCount: this.droppedLineCount,
      resumeToken: this.resumeToken,
      endReason: this.endReason,
      endReasonCode:
        LogStreamEndReason[
          this.endReasonCode === null || this.endReasonCode === undefined
            ? 0
            : this.endReasonCode
        ]
    };
  }
}
export module StreamCallLogsResponse {
  /**
   * Standard JavaScript object representation for StreamCallLogsResponse
   */
  export interface AsObject {
    logEntries?: CallLogEntry.AsObject[];
    captureState: LogCaptureState;
    captureError: string;
    droppedLineCount: string;
    resumeToken: string;
    endReason: string;
    endReasonCode: LogStreamEndReason;
  }

  /**
   * Protobuf JSON representation for StreamCallLogsResponse
   */
  export interface AsProtobufJSON {
    logEntries: CallLogEntry.AsProtobufJSON[] | null;
    captureState: string;
    captureError: string;
    droppedLineCount: string;
    resumeToken: string;
    endReason: string;
    endReasonCode: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallLogsRequest
 */
export class ListCallLogsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallLogsRequest();
    ListCallLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallLogsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.includeCounts = _instance.includeCounts || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CallLogFilter();
          _reader.readMessage(
            _instance.filter,
            CallLogFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.maxLines = _reader.readInt32();
          break;
        case 4:
          _instance.beforeSeq = _reader.readInt64String();
          break;
        case 5:
          _instance.afterSeq = _reader.readInt64String();
          break;
        case 6:
          _instance.resumeToken = _reader.readString();
          break;
        case 7:
          _instance.oldestFirst = _reader.readBool();
          break;
        case 8:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.includeCounts = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CallLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.maxLines !== undefined && _instance.maxLines !== null) {
      _writer.writeInt32(3, _instance.maxLines);
    }
    if (_instance.beforeSeq !== undefined && _instance.beforeSeq !== null) {
      _writer.writeInt64String(4, _instance.beforeSeq);
    }
    if (_instance.afterSeq !== undefined && _instance.afterSeq !== null) {
      _writer.writeInt64String(5, _instance.afterSeq);
    }
    if (_instance.resumeToken !== undefined && _instance.resumeToken !== null) {
      _writer.writeString(6, _instance.resumeToken);
    }
    if (_instance.oldestFirst !== undefined && _instance.oldestFirst !== null) {
      _writer.writeBool(7, _instance.oldestFirst);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        8,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.includeCounts) {
      _writer.writeBool(9, _instance.includeCounts);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CallLogFilter;
  private _maxLines: number;
  private _beforeSeq: string;
  private _afterSeq: string;
  private _resumeToken: string;
  private _oldestFirst: boolean;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _includeCounts: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallLogsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CallLogFilter(_value.filter) : undefined;
    this.maxLines = _value.maxLines;
    this.beforeSeq = _value.beforeSeq;
    this.afterSeq = _value.afterSeq;
    this.resumeToken = _value.resumeToken;
    this.oldestFirst = _value.oldestFirst;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.includeCounts = _value.includeCounts;
    ListCallLogsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CallLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CallLogFilter | undefined) {
    this._filter = value;
  }
  get maxLines(): number {
    return this._maxLines;
  }
  set maxLines(value: number) {
    this._maxLines = value;
  }
  get beforeSeq(): string {
    return this._beforeSeq;
  }
  set beforeSeq(value: string) {
    this._beforeSeq = value;
  }
  get afterSeq(): string {
    return this._afterSeq;
  }
  set afterSeq(value: string) {
    this._afterSeq = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get oldestFirst(): boolean {
    return this._oldestFirst;
  }
  set oldestFirst(value: boolean) {
    this._oldestFirst = value;
  }
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get includeCounts(): boolean {
    return this._includeCounts;
  }
  set includeCounts(value: boolean) {
    this._includeCounts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallLogsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      maxLines: this.maxLines,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq,
      resumeToken: this.resumeToken,
      oldestFirst: this.oldestFirst,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      includeCounts: this.includeCounts
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
  ): ListCallLogsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      maxLines: this.maxLines,
      beforeSeq: this.beforeSeq,
      afterSeq: this.afterSeq,
      resumeToken: this.resumeToken,
      oldestFirst: this.oldestFirst,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      includeCounts: this.includeCounts
    };
  }
}
export module ListCallLogsRequest {
  /**
   * Standard JavaScript object representation for ListCallLogsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CallLogFilter.AsObject;
    maxLines: number;
    beforeSeq: string;
    afterSeq: string;
    resumeToken: string;
    oldestFirst: boolean;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    includeCounts: boolean;
  }

  /**
   * Protobuf JSON representation for ListCallLogsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CallLogFilter.AsProtobufJSON | null;
    maxLines: number;
    beforeSeq: string;
    afterSeq: string;
    resumeToken: string;
    oldestFirst: boolean;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    includeCounts: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallLogsResponse
 */
export class ListCallLogsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallLogsResponse();
    ListCallLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallLogsResponse) {
    _instance.logEntries = _instance.logEntries || [];
    _instance.truncated = _instance.truncated || false;
    _instance.minAvailableSeq = _instance.minAvailableSeq || '0';
    _instance.maxAvailableSeq = _instance.maxAvailableSeq || '0';
    _instance.hasMoreOlder = _instance.hasMoreOlder || false;
    _instance.hasMoreNewer = _instance.hasMoreNewer || false;
    _instance.nextResumeToken = _instance.nextResumeToken || '';
    _instance.scopeLimitedFilters = _instance.scopeLimitedFilters || [];
    _instance.countByLevel = _instance.countByLevel || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CallLogEntry();
          _reader.readMessage(
            messageInitializer1,
            CallLogEntry.deserializeBinaryFromReader
          );
          (_instance.logEntries = _instance.logEntries || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.truncated = _reader.readBool();
          break;
        case 3:
          _instance.minAvailableSeq = _reader.readInt64String();
          break;
        case 4:
          _instance.maxAvailableSeq = _reader.readInt64String();
          break;
        case 5:
          _instance.hasMoreOlder = _reader.readBool();
          break;
        case 6:
          _instance.hasMoreNewer = _reader.readBool();
          break;
        case 7:
          _instance.nextResumeToken = _reader.readString();
          break;
        case 8:
          _reader.readPackableEnumInto(
            (_instance.scopeLimitedFilters =
              _instance.scopeLimitedFilters || [])
          );
          break;
        case 9:
          _instance.totalMatchingCount = _reader.readInt64String();
          break;
        case 10:
          const msg_10 = {} as any;
          _reader.readMessage(
            msg_10,
            ListCallLogsResponse.CountByLevelEntry.deserializeBinaryFromReader
          );
          _instance.countByLevel = _instance.countByLevel || {};
          _instance.countByLevel[msg_10.key] = msg_10.value;
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logEntries && _instance.logEntries.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logEntries as any,
        CallLogEntry.serializeBinaryToWriter
      );
    }
    if (_instance.truncated) {
      _writer.writeBool(2, _instance.truncated);
    }
    if (_instance.minAvailableSeq) {
      _writer.writeInt64String(3, _instance.minAvailableSeq);
    }
    if (_instance.maxAvailableSeq) {
      _writer.writeInt64String(4, _instance.maxAvailableSeq);
    }
    if (_instance.hasMoreOlder) {
      _writer.writeBool(5, _instance.hasMoreOlder);
    }
    if (_instance.hasMoreNewer) {
      _writer.writeBool(6, _instance.hasMoreNewer);
    }
    if (_instance.nextResumeToken) {
      _writer.writeString(7, _instance.nextResumeToken);
    }
    if (_instance.scopeLimitedFilters && _instance.scopeLimitedFilters.length) {
      _writer.writePackedEnum(8, _instance.scopeLimitedFilters);
    }
    if (
      _instance.totalMatchingCount !== undefined &&
      _instance.totalMatchingCount !== null
    ) {
      _writer.writeInt64String(9, _instance.totalMatchingCount);
    }
    if (!!_instance.countByLevel) {
      const keys_10 = Object.keys(_instance.countByLevel as any);

      if (keys_10.length) {
        const repeated_10 = keys_10
          .map(key => ({
            key: key,
            value: (_instance.countByLevel as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          10,
          repeated_10,
          ListCallLogsResponse.CountByLevelEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _logEntries?: CallLogEntry[];
  private _truncated: boolean;
  private _minAvailableSeq: string;
  private _maxAvailableSeq: string;
  private _hasMoreOlder: boolean;
  private _hasMoreNewer: boolean;
  private _nextResumeToken: string;
  private _scopeLimitedFilters: CallLogFilterField[];
  private _totalMatchingCount: string;
  private _countByLevel: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallLogsResponse.AsObject>) {
    _value = _value || {};
    this.logEntries = (_value.logEntries || []).map(m => new CallLogEntry(m));
    this.truncated = _value.truncated;
    this.minAvailableSeq = _value.minAvailableSeq;
    this.maxAvailableSeq = _value.maxAvailableSeq;
    this.hasMoreOlder = _value.hasMoreOlder;
    this.hasMoreNewer = _value.hasMoreNewer;
    this.nextResumeToken = _value.nextResumeToken;
    this.scopeLimitedFilters = (_value.scopeLimitedFilters || []).slice();
    this.totalMatchingCount = _value.totalMatchingCount;
    (this.countByLevel = _value!.countByLevel
      ? Object.keys(_value!.countByLevel).reduce(
          (r, k) => ({ ...r, [k]: _value!.countByLevel![k] }),
          {}
        )
      : {}),
      ListCallLogsResponse.refineValues(this);
  }
  get logEntries(): CallLogEntry[] | undefined {
    return this._logEntries;
  }
  set logEntries(value: CallLogEntry[] | undefined) {
    this._logEntries = value;
  }
  get truncated(): boolean {
    return this._truncated;
  }
  set truncated(value: boolean) {
    this._truncated = value;
  }
  get minAvailableSeq(): string {
    return this._minAvailableSeq;
  }
  set minAvailableSeq(value: string) {
    this._minAvailableSeq = value;
  }
  get maxAvailableSeq(): string {
    return this._maxAvailableSeq;
  }
  set maxAvailableSeq(value: string) {
    this._maxAvailableSeq = value;
  }
  get hasMoreOlder(): boolean {
    return this._hasMoreOlder;
  }
  set hasMoreOlder(value: boolean) {
    this._hasMoreOlder = value;
  }
  get hasMoreNewer(): boolean {
    return this._hasMoreNewer;
  }
  set hasMoreNewer(value: boolean) {
    this._hasMoreNewer = value;
  }
  get nextResumeToken(): string {
    return this._nextResumeToken;
  }
  set nextResumeToken(value: string) {
    this._nextResumeToken = value;
  }
  get scopeLimitedFilters(): CallLogFilterField[] {
    return this._scopeLimitedFilters;
  }
  set scopeLimitedFilters(value: CallLogFilterField[]) {
    this._scopeLimitedFilters = value;
  }
  get totalMatchingCount(): string {
    return this._totalMatchingCount;
  }
  set totalMatchingCount(value: string) {
    this._totalMatchingCount = value;
  }
  get countByLevel(): { [prop: string]: string } {
    return this._countByLevel;
  }
  set countByLevel(value: { [prop: string]: string }) {
    this._countByLevel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallLogsResponse.AsObject {
    return {
      logEntries: (this.logEntries || []).map(m => m.toObject()),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder,
      hasMoreNewer: this.hasMoreNewer,
      nextResumeToken: this.nextResumeToken,
      scopeLimitedFilters: (this.scopeLimitedFilters || []).slice(),
      totalMatchingCount: this.totalMatchingCount,
      countByLevel: this.countByLevel
        ? Object.keys(this.countByLevel).reduce(
            (r, k) => ({ ...r, [k]: this.countByLevel![k] }),
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
  ): ListCallLogsResponse.AsProtobufJSON {
    return {
      logEntries: (this.logEntries || []).map(m => m.toProtobufJSON(options)),
      truncated: this.truncated,
      minAvailableSeq: this.minAvailableSeq,
      maxAvailableSeq: this.maxAvailableSeq,
      hasMoreOlder: this.hasMoreOlder,
      hasMoreNewer: this.hasMoreNewer,
      nextResumeToken: this.nextResumeToken,
      scopeLimitedFilters: (this.scopeLimitedFilters || []).map(
        v => CallLogFilterField[v]
      ),
      totalMatchingCount: this.totalMatchingCount,
      countByLevel: this.countByLevel
        ? Object.keys(this.countByLevel).reduce(
            (r, k) => ({ ...r, [k]: this.countByLevel![k] }),
            {}
          )
        : {}
    };
  }
}
export module ListCallLogsResponse {
  /**
   * Standard JavaScript object representation for ListCallLogsResponse
   */
  export interface AsObject {
    logEntries?: CallLogEntry.AsObject[];
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
    hasMoreNewer: boolean;
    nextResumeToken: string;
    scopeLimitedFilters: CallLogFilterField[];
    totalMatchingCount: string;
    countByLevel: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for ListCallLogsResponse
   */
  export interface AsProtobufJSON {
    logEntries: CallLogEntry.AsProtobufJSON[] | null;
    truncated: boolean;
    minAvailableSeq: string;
    maxAvailableSeq: string;
    hasMoreOlder: boolean;
    hasMoreNewer: boolean;
    nextResumeToken: string;
    scopeLimitedFilters: string[];
    totalMatchingCount: string;
    countByLevel: { [prop: string]: string };
  }

  /**
   * Message implementation for ondewo.vtsi.ListCallLogsResponse.CountByLevelEntry
   */
  export class CountByLevelEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.ListCallLogsResponse.CountByLevelEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CountByLevelEntry();
      CountByLevelEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CountByLevelEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '0';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CountByLevelEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readInt64String();
            break;
          default:
            _reader.skipField();
        }
      }

      CountByLevelEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CountByLevelEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeInt64String(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CountByLevelEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<CountByLevelEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      CountByLevelEntry.refineValues(this);
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
      CountByLevelEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CountByLevelEntry.AsObject {
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
    ): CountByLevelEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module CountByLevelEntry {
    /**
     * Standard JavaScript object representation for CountByLevelEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for CountByLevelEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.GetCallLogStreamRequest
 */
export class GetCallLogStreamRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetCallLogStreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCallLogStreamRequest();
    GetCallLogStreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCallLogStreamRequest) {
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
    _instance: GetCallLogStreamRequest,
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

    GetCallLogStreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCallLogStreamRequest,
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
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallLogStreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallLogStreamRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetCallLogStreamRequest.refineValues(this);
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
  get fieldMask(): googleProtobuf000.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf000.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCallLogStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCallLogStreamRequest.AsObject {
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
  ): GetCallLogStreamRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetCallLogStreamRequest {
  /**
   * Standard JavaScript object representation for GetCallLogStreamRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    name: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCallLogStreamRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallLogStreamsRequest
 */
export class ListCallLogStreamsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallLogStreamsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallLogStreamsRequest();
    ListCallLogStreamsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallLogStreamsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.captureStates = _instance.captureStates || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallLogStreamsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CallLogFilter();
          _reader.readMessage(
            _instance.filter,
            CallLogFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        case 4:
          _instance.fieldMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.pageSize = _reader.readInt32();
          break;
        case 6:
          _reader.readPackableEnumInto(
            (_instance.captureStates = _instance.captureStates || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCallLogStreamsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallLogStreamsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CallLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        4,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(5, _instance.pageSize);
    }
    if (_instance.captureStates && _instance.captureStates.length) {
      _writer.writePackedEnum(6, _instance.captureStates);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CallLogFilter;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _pageSize: number;
  private _captureStates: LogCaptureState[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallLogStreamsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallLogStreamsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CallLogFilter(_value.filter) : undefined;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.captureStates = (_value.captureStates || []).slice();
    ListCallLogStreamsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CallLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CallLogFilter | undefined) {
    this._filter = value;
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
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get captureStates(): LogCaptureState[] {
    return this._captureStates;
  }
  set captureStates(value: LogCaptureState[]) {
    this._captureStates = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCallLogStreamsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallLogStreamsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      pageSize: this.pageSize,
      captureStates: (this.captureStates || []).slice()
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
  ): ListCallLogStreamsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      captureStates: (this.captureStates || []).map(v => LogCaptureState[v])
    };
  }
}
export module ListCallLogStreamsRequest {
  /**
   * Standard JavaScript object representation for ListCallLogStreamsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CallLogFilter.AsObject;
    pageToken: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    pageSize: number;
    captureStates: LogCaptureState[];
  }

  /**
   * Protobuf JSON representation for ListCallLogStreamsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CallLogFilter.AsProtobufJSON | null;
    pageToken: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    captureStates: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.ListCallLogStreamsResponse
 */
export class ListCallLogStreamsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListCallLogStreamsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCallLogStreamsResponse();
    ListCallLogStreamsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCallLogStreamsResponse) {
    _instance.logStreams = _instance.logStreams || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCallLogStreamsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CallLogStream();
          _reader.readMessage(
            messageInitializer1,
            CallLogStream.deserializeBinaryFromReader
          );
          (_instance.logStreams = _instance.logStreams || []).push(
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

    ListCallLogStreamsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCallLogStreamsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logStreams && _instance.logStreams.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logStreams as any,
        CallLogStream.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _logStreams?: CallLogStream[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallLogStreamsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallLogStreamsResponse.AsObject>) {
    _value = _value || {};
    this.logStreams = (_value.logStreams || []).map(m => new CallLogStream(m));
    this.nextPageToken = _value.nextPageToken;
    ListCallLogStreamsResponse.refineValues(this);
  }
  get logStreams(): CallLogStream[] | undefined {
    return this._logStreams;
  }
  set logStreams(value: CallLogStream[] | undefined) {
    this._logStreams = value;
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
    ListCallLogStreamsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCallLogStreamsResponse.AsObject {
    return {
      logStreams: (this.logStreams || []).map(m => m.toObject()),
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
  ): ListCallLogStreamsResponse.AsProtobufJSON {
    return {
      logStreams: (this.logStreams || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListCallLogStreamsResponse {
  /**
   * Standard JavaScript object representation for ListCallLogStreamsResponse
   */
  export interface AsObject {
    logStreams?: CallLogStream.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListCallLogStreamsResponse
   */
  export interface AsProtobufJSON {
    logStreams: CallLogStream.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallLogsRequest
 */
export class DeleteCallLogsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallLogsRequest();
    DeleteCallLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallLogsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.validateOnly = _instance.validateOnly || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CallLogFilter();
          _reader.readMessage(
            _instance.filter,
            CallLogFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.validateOnly = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CallLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.validateOnly) {
      _writer.writeBool(3, _instance.validateOnly);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CallLogFilter;
  private _validateOnly: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallLogsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CallLogFilter(_value.filter) : undefined;
    this.validateOnly = _value.validateOnly;
    DeleteCallLogsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CallLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CallLogFilter | undefined) {
    this._filter = value;
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
    DeleteCallLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallLogsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
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
  ): DeleteCallLogsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      validateOnly: this.validateOnly
    };
  }
}
export module DeleteCallLogsRequest {
  /**
   * Standard JavaScript object representation for DeleteCallLogsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CallLogFilter.AsObject;
    validateOnly: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteCallLogsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CallLogFilter.AsProtobufJSON | null;
    validateOnly: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteCallLogsResponse
 */
export class DeleteCallLogsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteCallLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCallLogsResponse();
    DeleteCallLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCallLogsResponse) {
    _instance.deletedLogEntryCount = _instance.deletedLogEntryCount || '0';
    _instance.deletedLogStreamCount = _instance.deletedLogStreamCount || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCallLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deletedLogEntryCount = _reader.readInt64String();
          break;
        case 2:
          _instance.deletedLogStreamCount = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCallLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCallLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.deletedLogEntryCount) {
      _writer.writeInt64String(1, _instance.deletedLogEntryCount);
    }
    if (_instance.deletedLogStreamCount) {
      _writer.writeInt64String(2, _instance.deletedLogStreamCount);
    }
  }

  private _deletedLogEntryCount: string;
  private _deletedLogStreamCount: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallLogsResponse.AsObject>) {
    _value = _value || {};
    this.deletedLogEntryCount = _value.deletedLogEntryCount;
    this.deletedLogStreamCount = _value.deletedLogStreamCount;
    DeleteCallLogsResponse.refineValues(this);
  }
  get deletedLogEntryCount(): string {
    return this._deletedLogEntryCount;
  }
  set deletedLogEntryCount(value: string) {
    this._deletedLogEntryCount = value;
  }
  get deletedLogStreamCount(): string {
    return this._deletedLogStreamCount;
  }
  set deletedLogStreamCount(value: string) {
    this._deletedLogStreamCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCallLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallLogsResponse.AsObject {
    return {
      deletedLogEntryCount: this.deletedLogEntryCount,
      deletedLogStreamCount: this.deletedLogStreamCount
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
  ): DeleteCallLogsResponse.AsProtobufJSON {
    return {
      deletedLogEntryCount: this.deletedLogEntryCount,
      deletedLogStreamCount: this.deletedLogStreamCount
    };
  }
}
export module DeleteCallLogsResponse {
  /**
   * Standard JavaScript object representation for DeleteCallLogsResponse
   */
  export interface AsObject {
    deletedLogEntryCount: string;
    deletedLogStreamCount: string;
  }

  /**
   * Protobuf JSON representation for DeleteCallLogsResponse
   */
  export interface AsProtobufJSON {
    deletedLogEntryCount: string;
    deletedLogStreamCount: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ExportCallLogsRequest
 */
export class ExportCallLogsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ExportCallLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportCallLogsRequest();
    ExportCallLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportCallLogsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.format = _instance.format || 0;
    _instance.includeMetadata = _instance.includeMetadata || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportCallLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new CallLogFilter();
          _reader.readMessage(
            _instance.filter,
            CallLogFilter.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.format = _reader.readEnum();
          break;
        case 4:
          _instance.includeMetadata = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportCallLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportCallLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        CallLogFilter.serializeBinaryToWriter
      );
    }
    if (_instance.format) {
      _writer.writeEnum(3, _instance.format);
    }
    if (_instance.includeMetadata) {
      _writer.writeBool(4, _instance.includeMetadata);
    }
  }

  private _vtsiProjectName: string;
  private _filter?: CallLogFilter;
  private _format: LogExportFormat;
  private _includeMetadata: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportCallLogsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportCallLogsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter ? new CallLogFilter(_value.filter) : undefined;
    this.format = _value.format;
    this.includeMetadata = _value.includeMetadata;
    ExportCallLogsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): CallLogFilter | undefined {
    return this._filter;
  }
  set filter(value: CallLogFilter | undefined) {
    this._filter = value;
  }
  get format(): LogExportFormat {
    return this._format;
  }
  set format(value: LogExportFormat) {
    this._format = value;
  }
  get includeMetadata(): boolean {
    return this._includeMetadata;
  }
  set includeMetadata(value: boolean) {
    this._includeMetadata = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportCallLogsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportCallLogsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      format: this.format,
      includeMetadata: this.includeMetadata
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
  ): ExportCallLogsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      format:
        LogExportFormat[
          this.format === null || this.format === undefined ? 0 : this.format
        ],
      includeMetadata: this.includeMetadata
    };
  }
}
export module ExportCallLogsRequest {
  /**
   * Standard JavaScript object representation for ExportCallLogsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: CallLogFilter.AsObject;
    format: LogExportFormat;
    includeMetadata: boolean;
  }

  /**
   * Protobuf JSON representation for ExportCallLogsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: CallLogFilter.AsProtobufJSON | null;
    format: string;
    includeMetadata: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.ExportCallLogsResponse
 */
export class ExportCallLogsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ExportCallLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExportCallLogsResponse();
    ExportCallLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExportCallLogsResponse) {
    _instance.chunk = _instance.chunk || new Uint8Array();
    _instance.entryCount = _instance.entryCount || '0';
    _instance.last = _instance.last || false;
    _instance.truncated = _instance.truncated || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExportCallLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chunk = _reader.readBytes();
          break;
        case 2:
          _instance.entryCount = _reader.readInt64String();
          break;
        case 3:
          _instance.last = _reader.readBool();
          break;
        case 4:
          _instance.truncated = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ExportCallLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExportCallLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunk && _instance.chunk.length) {
      _writer.writeBytes(1, _instance.chunk);
    }
    if (_instance.entryCount) {
      _writer.writeInt64String(2, _instance.entryCount);
    }
    if (_instance.last) {
      _writer.writeBool(3, _instance.last);
    }
    if (_instance.truncated) {
      _writer.writeBool(4, _instance.truncated);
    }
  }

  private _chunk: Uint8Array;
  private _entryCount: string;
  private _last: boolean;
  private _truncated: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExportCallLogsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExportCallLogsResponse.AsObject>) {
    _value = _value || {};
    this.chunk = _value.chunk;
    this.entryCount = _value.entryCount;
    this.last = _value.last;
    this.truncated = _value.truncated;
    ExportCallLogsResponse.refineValues(this);
  }
  get chunk(): Uint8Array {
    return this._chunk;
  }
  set chunk(value: Uint8Array) {
    this._chunk = value;
  }
  get entryCount(): string {
    return this._entryCount;
  }
  set entryCount(value: string) {
    this._entryCount = value;
  }
  get last(): boolean {
    return this._last;
  }
  set last(value: boolean) {
    this._last = value;
  }
  get truncated(): boolean {
    return this._truncated;
  }
  set truncated(value: boolean) {
    this._truncated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExportCallLogsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExportCallLogsResponse.AsObject {
    return {
      chunk: this.chunk ? this.chunk.subarray(0) : new Uint8Array(),
      entryCount: this.entryCount,
      last: this.last,
      truncated: this.truncated
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
  ): ExportCallLogsResponse.AsProtobufJSON {
    return {
      chunk: this.chunk ? uint8ArrayToBase64(this.chunk) : '',
      entryCount: this.entryCount,
      last: this.last,
      truncated: this.truncated
    };
  }
}
export module ExportCallLogsResponse {
  /**
   * Standard JavaScript object representation for ExportCallLogsResponse
   */
  export interface AsObject {
    chunk: Uint8Array;
    entryCount: string;
    last: boolean;
    truncated: boolean;
  }

  /**
   * Protobuf JSON representation for ExportCallLogsResponse
   */
  export interface AsProtobufJSON {
    chunk: string;
    entryCount: string;
    last: boolean;
    truncated: boolean;
  }
}
