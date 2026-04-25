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
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t011 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s012 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoSip013 from '../../ondewo/sip/sip.pb';
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
 * Message implementation for ondewo.vtsi.BaseServiceConfig
 */
export class BaseServiceConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.BaseServiceConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BaseServiceConfig();
    BaseServiceConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BaseServiceConfig) {
    _instance.host = _instance.host || '';
    _instance.port = _instance.port || 0;
    _instance.grpcCert = _instance.grpcCert || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BaseServiceConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.host = _reader.readString();
          break;
        case 2:
          _instance.port = _reader.readInt32();
          break;
        case 3:
          _instance.grpcCert = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    BaseServiceConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BaseServiceConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.host) {
      _writer.writeString(1, _instance.host);
    }
    if (_instance.port) {
      _writer.writeInt32(2, _instance.port);
    }
    if (_instance.grpcCert) {
      _writer.writeString(3, _instance.grpcCert);
    }
  }

  private _host: string;
  private _port: number;
  private _grpcCert: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BaseServiceConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<BaseServiceConfig.AsObject>) {
    _value = _value || {};
    this.host = _value.host;
    this.port = _value.port;
    this.grpcCert = _value.grpcCert;
    BaseServiceConfig.refineValues(this);
  }
  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }
  get port(): number {
    return this._port;
  }
  set port(value: number) {
    this._port = value;
  }
  get grpcCert(): string {
    return this._grpcCert;
  }
  set grpcCert(value: string) {
    this._grpcCert = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BaseServiceConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BaseServiceConfig.AsObject {
    return {
      host: this.host,
      port: this.port,
      grpcCert: this.grpcCert
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
  ): BaseServiceConfig.AsProtobufJSON {
    return {
      host: this.host,
      port: this.port,
      grpcCert: this.grpcCert
    };
  }
}
export module BaseServiceConfig {
  /**
   * Standard JavaScript object representation for BaseServiceConfig
   */
  export interface AsObject {
    host: string;
    port: number;
    grpcCert: string;
  }

  /**
   * Protobuf JSON representation for BaseServiceConfig
   */
  export interface AsProtobufJSON {
    host: string;
    port: number;
    grpcCert: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.Credentials
 */
export class Credentials implements GrpcMessage {
  static id = 'ondewo.vtsi.Credentials';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Credentials();
    Credentials.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Credentials) {
    _instance.accountName = _instance.accountName || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Credentials,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.accountName = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Credentials.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Credentials,
    _writer: BinaryWriter
  ) {
    if (_instance.accountName) {
      _writer.writeString(1, _instance.accountName);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _accountName: string;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Credentials to deeply clone from
   */
  constructor(_value?: RecursivePartial<Credentials.AsObject>) {
    _value = _value || {};
    this.accountName = _value.accountName;
    this.password = _value.password;
    Credentials.refineValues(this);
  }
  get accountName(): string {
    return this._accountName;
  }
  set accountName(value: string) {
    this._accountName = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Credentials.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Credentials.AsObject {
    return {
      accountName: this.accountName,
      password: this.password
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
  ): Credentials.AsProtobufJSON {
    return {
      accountName: this.accountName,
      password: this.password
    };
  }
}
export module Credentials {
  /**
   * Standard JavaScript object representation for Credentials
   */
  export interface AsObject {
    accountName: string;
    password: string;
  }

  /**
   * Protobuf JSON representation for Credentials
   */
  export interface AsProtobufJSON {
    accountName: string;
    password: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.NluVtsiConfig
 */
export class NluVtsiConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.NluVtsiConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NluVtsiConfig();
    NluVtsiConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NluVtsiConfig) {
    _instance.nluBaseConfig = _instance.nluBaseConfig || undefined;

    _instance.agentName = _instance.agentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.initialIntent = _instance.initialIntent || '';
    _instance.contexts = _instance.contexts || [];
    _instance.httpBasicAuthToken = _instance.httpBasicAuthToken || '';
    _instance.platform = _instance.platform || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NluVtsiConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nluBaseConfig = new BaseServiceConfig();
          _reader.readMessage(
            _instance.nluBaseConfig,
            BaseServiceConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.credentials = new Credentials();
          _reader.readMessage(
            _instance.credentials,
            Credentials.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.authToken = _reader.readString();
          break;
        case 4:
          _instance.agentName = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        case 6:
          _instance.initialIntent = _reader.readString();
          break;
        case 7:
          const messageInitializer7 = new ondewoNlu006.Context();
          _reader.readMessage(
            messageInitializer7,
            ondewoNlu006.Context.deserializeBinaryFromReader
          );
          (_instance.contexts = _instance.contexts || []).push(
            messageInitializer7
          );
          break;
        case 8:
          _instance.httpBasicAuthToken = _reader.readString();
          break;
        case 9:
          _instance.platform = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    NluVtsiConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NluVtsiConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.nluBaseConfig) {
      _writer.writeMessage(
        1,
        _instance.nluBaseConfig as any,
        BaseServiceConfig.serializeBinaryToWriter
      );
    }
    if (_instance.credentials) {
      _writer.writeMessage(
        2,
        _instance.credentials as any,
        Credentials.serializeBinaryToWriter
      );
    }
    if (_instance.authToken || _instance.authToken === '') {
      _writer.writeString(3, _instance.authToken);
    }
    if (_instance.agentName) {
      _writer.writeString(4, _instance.agentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
    if (_instance.initialIntent) {
      _writer.writeString(6, _instance.initialIntent);
    }
    if (_instance.contexts && _instance.contexts.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.contexts as any,
        ondewoNlu006.Context.serializeBinaryToWriter
      );
    }
    if (_instance.httpBasicAuthToken) {
      _writer.writeString(8, _instance.httpBasicAuthToken);
    }
    if (_instance.platform) {
      _writer.writeEnum(9, _instance.platform);
    }
  }

  private _nluBaseConfig?: BaseServiceConfig;
  private _credentials?: Credentials;
  private _authToken: string;
  private _agentName: string;
  private _languageCode: string;
  private _initialIntent: string;
  private _contexts?: ondewoNlu006.Context[];
  private _httpBasicAuthToken: string;
  private _platform: ondewoNlu010.Intent.Message.Platform;

  private _authentication: NluVtsiConfig.AuthenticationCase =
    NluVtsiConfig.AuthenticationCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NluVtsiConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<NluVtsiConfig.AsObject>) {
    _value = _value || {};
    this.nluBaseConfig = _value.nluBaseConfig
      ? new BaseServiceConfig(_value.nluBaseConfig)
      : undefined;
    this.credentials = _value.credentials
      ? new Credentials(_value.credentials)
      : undefined;
    this.authToken = _value.authToken;
    this.agentName = _value.agentName;
    this.languageCode = _value.languageCode;
    this.initialIntent = _value.initialIntent;
    this.contexts = (_value.contexts || []).map(
      m => new ondewoNlu006.Context(m)
    );
    this.httpBasicAuthToken = _value.httpBasicAuthToken;
    this.platform = _value.platform;
    NluVtsiConfig.refineValues(this);
  }
  get nluBaseConfig(): BaseServiceConfig | undefined {
    return this._nluBaseConfig;
  }
  set nluBaseConfig(value: BaseServiceConfig | undefined) {
    this._nluBaseConfig = value;
  }
  get credentials(): Credentials | undefined {
    return this._credentials;
  }
  set credentials(value: Credentials | undefined) {
    if (value !== undefined && value !== null) {
      this._authToken = undefined;
      this._authentication = NluVtsiConfig.AuthenticationCase.credentials;
    }
    this._credentials = value;
  }
  get authToken(): string {
    return this._authToken;
  }
  set authToken(value: string) {
    if (value !== undefined && value !== null) {
      this._credentials = undefined;
      this._authentication = NluVtsiConfig.AuthenticationCase.authToken;
    }
    this._authToken = value;
  }
  get agentName(): string {
    return this._agentName;
  }
  set agentName(value: string) {
    this._agentName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get initialIntent(): string {
    return this._initialIntent;
  }
  set initialIntent(value: string) {
    this._initialIntent = value;
  }
  get contexts(): ondewoNlu006.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu006.Context[] | undefined) {
    this._contexts = value;
  }
  get httpBasicAuthToken(): string {
    return this._httpBasicAuthToken;
  }
  set httpBasicAuthToken(value: string) {
    this._httpBasicAuthToken = value;
  }
  get platform(): ondewoNlu010.Intent.Message.Platform {
    return this._platform;
  }
  set platform(value: ondewoNlu010.Intent.Message.Platform) {
    this._platform = value;
  }
  get authentication() {
    return this._authentication;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NluVtsiConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NluVtsiConfig.AsObject {
    return {
      nluBaseConfig: this.nluBaseConfig
        ? this.nluBaseConfig.toObject()
        : undefined,
      credentials: this.credentials ? this.credentials.toObject() : undefined,
      authToken: this.authToken,
      agentName: this.agentName,
      languageCode: this.languageCode,
      initialIntent: this.initialIntent,
      contexts: (this.contexts || []).map(m => m.toObject()),
      httpBasicAuthToken: this.httpBasicAuthToken,
      platform: this.platform
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
  ): NluVtsiConfig.AsProtobufJSON {
    return {
      nluBaseConfig: this.nluBaseConfig
        ? this.nluBaseConfig.toProtobufJSON(options)
        : null,
      credentials: this.credentials
        ? this.credentials.toProtobufJSON(options)
        : null,
      authToken:
        this.authToken === null || this.authToken === undefined
          ? null
          : this.authToken,
      agentName: this.agentName,
      languageCode: this.languageCode,
      initialIntent: this.initialIntent,
      contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
      httpBasicAuthToken: this.httpBasicAuthToken,
      platform:
        ondewoNlu010.Intent.Message.Platform[
          this.platform === null || this.platform === undefined
            ? 0
            : this.platform
        ]
    };
  }
}
export module NluVtsiConfig {
  /**
   * Standard JavaScript object representation for NluVtsiConfig
   */
  export interface AsObject {
    nluBaseConfig?: BaseServiceConfig.AsObject;
    credentials?: Credentials.AsObject;
    authToken: string;
    agentName: string;
    languageCode: string;
    initialIntent: string;
    contexts?: ondewoNlu006.Context.AsObject[];
    httpBasicAuthToken: string;
    platform: ondewoNlu010.Intent.Message.Platform;
  }

  /**
   * Protobuf JSON representation for NluVtsiConfig
   */
  export interface AsProtobufJSON {
    nluBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    credentials: Credentials.AsProtobufJSON | null;
    authToken: string | null;
    agentName: string;
    languageCode: string;
    initialIntent: string;
    contexts: ondewoNlu006.Context.AsProtobufJSON[] | null;
    httpBasicAuthToken: string;
    platform: string;
  }
  export enum AuthenticationCase {
    none = 0,
    credentials = 1,
    authToken = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.T2sVtsiConfig
 */
export class T2sVtsiConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.T2sVtsiConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sVtsiConfig();
    T2sVtsiConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sVtsiConfig) {
    _instance.t2sBaseConfig = _instance.t2sBaseConfig || undefined;
    _instance.t2sRequestConfig = _instance.t2sRequestConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sVtsiConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.t2sBaseConfig = new BaseServiceConfig();
          _reader.readMessage(
            _instance.t2sBaseConfig,
            BaseServiceConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.t2sRequestConfig = new ondewoT2s012.RequestConfig();
          _reader.readMessage(
            _instance.t2sRequestConfig,
            ondewoT2s012.RequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    T2sVtsiConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sVtsiConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.t2sBaseConfig) {
      _writer.writeMessage(
        1,
        _instance.t2sBaseConfig as any,
        BaseServiceConfig.serializeBinaryToWriter
      );
    }
    if (_instance.t2sRequestConfig) {
      _writer.writeMessage(
        2,
        _instance.t2sRequestConfig as any,
        ondewoT2s012.RequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _t2sBaseConfig?: BaseServiceConfig;
  private _t2sRequestConfig?: ondewoT2s012.RequestConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sVtsiConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sVtsiConfig.AsObject>) {
    _value = _value || {};
    this.t2sBaseConfig = _value.t2sBaseConfig
      ? new BaseServiceConfig(_value.t2sBaseConfig)
      : undefined;
    this.t2sRequestConfig = _value.t2sRequestConfig
      ? new ondewoT2s012.RequestConfig(_value.t2sRequestConfig)
      : undefined;
    T2sVtsiConfig.refineValues(this);
  }
  get t2sBaseConfig(): BaseServiceConfig | undefined {
    return this._t2sBaseConfig;
  }
  set t2sBaseConfig(value: BaseServiceConfig | undefined) {
    this._t2sBaseConfig = value;
  }
  get t2sRequestConfig(): ondewoT2s012.RequestConfig | undefined {
    return this._t2sRequestConfig;
  }
  set t2sRequestConfig(value: ondewoT2s012.RequestConfig | undefined) {
    this._t2sRequestConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sVtsiConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sVtsiConfig.AsObject {
    return {
      t2sBaseConfig: this.t2sBaseConfig
        ? this.t2sBaseConfig.toObject()
        : undefined,
      t2sRequestConfig: this.t2sRequestConfig
        ? this.t2sRequestConfig.toObject()
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
  ): T2sVtsiConfig.AsProtobufJSON {
    return {
      t2sBaseConfig: this.t2sBaseConfig
        ? this.t2sBaseConfig.toProtobufJSON(options)
        : null,
      t2sRequestConfig: this.t2sRequestConfig
        ? this.t2sRequestConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module T2sVtsiConfig {
  /**
   * Standard JavaScript object representation for T2sVtsiConfig
   */
  export interface AsObject {
    t2sBaseConfig?: BaseServiceConfig.AsObject;
    t2sRequestConfig?: ondewoT2s012.RequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for T2sVtsiConfig
   */
  export interface AsProtobufJSON {
    t2sBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    t2sRequestConfig: ondewoT2s012.RequestConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.S2tVtsiConfig
 */
export class S2tVtsiConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.S2tVtsiConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tVtsiConfig();
    S2tVtsiConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tVtsiConfig) {
    _instance.s2tBaseConfig = _instance.s2tBaseConfig || undefined;
    _instance.s2tTranscribeRequestConfig =
      _instance.s2tTranscribeRequestConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tVtsiConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tBaseConfig = new BaseServiceConfig();
          _reader.readMessage(
            _instance.s2tBaseConfig,
            BaseServiceConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.s2tTranscribeRequestConfig = new ondewoS2t011.TranscribeRequestConfig();
          _reader.readMessage(
            _instance.s2tTranscribeRequestConfig,
            ondewoS2t011.TranscribeRequestConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    S2tVtsiConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tVtsiConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tBaseConfig) {
      _writer.writeMessage(
        1,
        _instance.s2tBaseConfig as any,
        BaseServiceConfig.serializeBinaryToWriter
      );
    }
    if (_instance.s2tTranscribeRequestConfig) {
      _writer.writeMessage(
        2,
        _instance.s2tTranscribeRequestConfig as any,
        ondewoS2t011.TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _s2tBaseConfig?: BaseServiceConfig;
  private _s2tTranscribeRequestConfig?: ondewoS2t011.TranscribeRequestConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tVtsiConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tVtsiConfig.AsObject>) {
    _value = _value || {};
    this.s2tBaseConfig = _value.s2tBaseConfig
      ? new BaseServiceConfig(_value.s2tBaseConfig)
      : undefined;
    this.s2tTranscribeRequestConfig = _value.s2tTranscribeRequestConfig
      ? new ondewoS2t011.TranscribeRequestConfig(
          _value.s2tTranscribeRequestConfig
        )
      : undefined;
    S2tVtsiConfig.refineValues(this);
  }
  get s2tBaseConfig(): BaseServiceConfig | undefined {
    return this._s2tBaseConfig;
  }
  set s2tBaseConfig(value: BaseServiceConfig | undefined) {
    this._s2tBaseConfig = value;
  }
  get s2tTranscribeRequestConfig():
    | ondewoS2t011.TranscribeRequestConfig
    | undefined {
    return this._s2tTranscribeRequestConfig;
  }
  set s2tTranscribeRequestConfig(
    value: ondewoS2t011.TranscribeRequestConfig | undefined
  ) {
    this._s2tTranscribeRequestConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tVtsiConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tVtsiConfig.AsObject {
    return {
      s2tBaseConfig: this.s2tBaseConfig
        ? this.s2tBaseConfig.toObject()
        : undefined,
      s2tTranscribeRequestConfig: this.s2tTranscribeRequestConfig
        ? this.s2tTranscribeRequestConfig.toObject()
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
  ): S2tVtsiConfig.AsProtobufJSON {
    return {
      s2tBaseConfig: this.s2tBaseConfig
        ? this.s2tBaseConfig.toProtobufJSON(options)
        : null,
      s2tTranscribeRequestConfig: this.s2tTranscribeRequestConfig
        ? this.s2tTranscribeRequestConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module S2tVtsiConfig {
  /**
   * Standard JavaScript object representation for S2tVtsiConfig
   */
  export interface AsObject {
    s2tBaseConfig?: BaseServiceConfig.AsObject;
    s2tTranscribeRequestConfig?: ondewoS2t011.TranscribeRequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for S2tVtsiConfig
   */
  export interface AsProtobufJSON {
    s2tBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    s2tTranscribeRequestConfig: ondewoS2t011.TranscribeRequestConfig.AsProtobufJSON | null;
  }
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
          _instance.asteriskBaseConfig = new BaseServiceConfig();
          _reader.readMessage(
            _instance.asteriskBaseConfig,
            BaseServiceConfig.deserializeBinaryFromReader
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
        BaseServiceConfig.serializeBinaryToWriter
      );
    }
  }

  private _asteriskBaseConfig?: BaseServiceConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AsteriskConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<AsteriskConfig.AsObject>) {
    _value = _value || {};
    this.asteriskBaseConfig = _value.asteriskBaseConfig
      ? new BaseServiceConfig(_value.asteriskBaseConfig)
      : undefined;
    AsteriskConfig.refineValues(this);
  }
  get asteriskBaseConfig(): BaseServiceConfig | undefined {
    return this._asteriskBaseConfig;
  }
  set asteriskBaseConfig(value: BaseServiceConfig | undefined) {
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
    asteriskBaseConfig?: BaseServiceConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for AsteriskConfig
   */
  export interface AsProtobufJSON {
    asteriskBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CommonServicesConfig
 */
export class CommonServicesConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.CommonServicesConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CommonServicesConfig();
    CommonServicesConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CommonServicesConfig) {
    _instance.s2tVtsiConfig = _instance.s2tVtsiConfig || undefined;
    _instance.nluVtsiConfig = _instance.nluVtsiConfig || undefined;
    _instance.t2sVtsiConfig = _instance.t2sVtsiConfig || undefined;
    _instance.csiVtsiConfig = _instance.csiVtsiConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CommonServicesConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tVtsiConfig = new S2tVtsiConfig();
          _reader.readMessage(
            _instance.s2tVtsiConfig,
            S2tVtsiConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.nluVtsiConfig = new NluVtsiConfig();
          _reader.readMessage(
            _instance.nluVtsiConfig,
            NluVtsiConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.t2sVtsiConfig = new T2sVtsiConfig();
          _reader.readMessage(
            _instance.t2sVtsiConfig,
            T2sVtsiConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.csiVtsiConfig = new CsiVtsiConfig();
          _reader.readMessage(
            _instance.csiVtsiConfig,
            CsiVtsiConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CommonServicesConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CommonServicesConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tVtsiConfig) {
      _writer.writeMessage(
        1,
        _instance.s2tVtsiConfig as any,
        S2tVtsiConfig.serializeBinaryToWriter
      );
    }
    if (_instance.nluVtsiConfig) {
      _writer.writeMessage(
        2,
        _instance.nluVtsiConfig as any,
        NluVtsiConfig.serializeBinaryToWriter
      );
    }
    if (_instance.t2sVtsiConfig) {
      _writer.writeMessage(
        3,
        _instance.t2sVtsiConfig as any,
        T2sVtsiConfig.serializeBinaryToWriter
      );
    }
    if (_instance.csiVtsiConfig) {
      _writer.writeMessage(
        4,
        _instance.csiVtsiConfig as any,
        CsiVtsiConfig.serializeBinaryToWriter
      );
    }
  }

  private _s2tVtsiConfig?: S2tVtsiConfig;
  private _nluVtsiConfig?: NluVtsiConfig;
  private _t2sVtsiConfig?: T2sVtsiConfig;
  private _csiVtsiConfig?: CsiVtsiConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CommonServicesConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<CommonServicesConfig.AsObject>) {
    _value = _value || {};
    this.s2tVtsiConfig = _value.s2tVtsiConfig
      ? new S2tVtsiConfig(_value.s2tVtsiConfig)
      : undefined;
    this.nluVtsiConfig = _value.nluVtsiConfig
      ? new NluVtsiConfig(_value.nluVtsiConfig)
      : undefined;
    this.t2sVtsiConfig = _value.t2sVtsiConfig
      ? new T2sVtsiConfig(_value.t2sVtsiConfig)
      : undefined;
    this.csiVtsiConfig = _value.csiVtsiConfig
      ? new CsiVtsiConfig(_value.csiVtsiConfig)
      : undefined;
    CommonServicesConfig.refineValues(this);
  }
  get s2tVtsiConfig(): S2tVtsiConfig | undefined {
    return this._s2tVtsiConfig;
  }
  set s2tVtsiConfig(value: S2tVtsiConfig | undefined) {
    this._s2tVtsiConfig = value;
  }
  get nluVtsiConfig(): NluVtsiConfig | undefined {
    return this._nluVtsiConfig;
  }
  set nluVtsiConfig(value: NluVtsiConfig | undefined) {
    this._nluVtsiConfig = value;
  }
  get t2sVtsiConfig(): T2sVtsiConfig | undefined {
    return this._t2sVtsiConfig;
  }
  set t2sVtsiConfig(value: T2sVtsiConfig | undefined) {
    this._t2sVtsiConfig = value;
  }
  get csiVtsiConfig(): CsiVtsiConfig | undefined {
    return this._csiVtsiConfig;
  }
  set csiVtsiConfig(value: CsiVtsiConfig | undefined) {
    this._csiVtsiConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CommonServicesConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CommonServicesConfig.AsObject {
    return {
      s2tVtsiConfig: this.s2tVtsiConfig
        ? this.s2tVtsiConfig.toObject()
        : undefined,
      nluVtsiConfig: this.nluVtsiConfig
        ? this.nluVtsiConfig.toObject()
        : undefined,
      t2sVtsiConfig: this.t2sVtsiConfig
        ? this.t2sVtsiConfig.toObject()
        : undefined,
      csiVtsiConfig: this.csiVtsiConfig
        ? this.csiVtsiConfig.toObject()
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
  ): CommonServicesConfig.AsProtobufJSON {
    return {
      s2tVtsiConfig: this.s2tVtsiConfig
        ? this.s2tVtsiConfig.toProtobufJSON(options)
        : null,
      nluVtsiConfig: this.nluVtsiConfig
        ? this.nluVtsiConfig.toProtobufJSON(options)
        : null,
      t2sVtsiConfig: this.t2sVtsiConfig
        ? this.t2sVtsiConfig.toProtobufJSON(options)
        : null,
      csiVtsiConfig: this.csiVtsiConfig
        ? this.csiVtsiConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module CommonServicesConfig {
  /**
   * Standard JavaScript object representation for CommonServicesConfig
   */
  export interface AsObject {
    s2tVtsiConfig?: S2tVtsiConfig.AsObject;
    nluVtsiConfig?: NluVtsiConfig.AsObject;
    t2sVtsiConfig?: T2sVtsiConfig.AsObject;
    csiVtsiConfig?: CsiVtsiConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for CommonServicesConfig
   */
  export interface AsProtobufJSON {
    s2tVtsiConfig: S2tVtsiConfig.AsProtobufJSON | null;
    nluVtsiConfig: NluVtsiConfig.AsProtobufJSON | null;
    t2sVtsiConfig: T2sVtsiConfig.AsProtobufJSON | null;
    csiVtsiConfig: CsiVtsiConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.SipBaseConfig
 */
export class SipBaseConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.SipBaseConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SipBaseConfig();
    SipBaseConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SipBaseConfig) {
    _instance.sipSimVersion = _instance.sipSimVersion || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SipBaseConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipSimVersion = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SipBaseConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SipBaseConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.sipSimVersion) {
      _writer.writeString(1, _instance.sipSimVersion);
    }
  }

  private _sipSimVersion: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SipBaseConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<SipBaseConfig.AsObject>) {
    _value = _value || {};
    this.sipSimVersion = _value.sipSimVersion;
    SipBaseConfig.refineValues(this);
  }
  get sipSimVersion(): string {
    return this._sipSimVersion;
  }
  set sipSimVersion(value: string) {
    this._sipSimVersion = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SipBaseConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SipBaseConfig.AsObject {
    return {
      sipSimVersion: this.sipSimVersion
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
  ): SipBaseConfig.AsProtobufJSON {
    return {
      sipSimVersion: this.sipSimVersion
    };
  }
}
export module SipBaseConfig {
  /**
   * Standard JavaScript object representation for SipBaseConfig
   */
  export interface AsObject {
    sipSimVersion: string;
  }

  /**
   * Protobuf JSON representation for SipBaseConfig
   */
  export interface AsProtobufJSON {
    sipSimVersion: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SipCallerConfig
 */
export class SipCallerConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.SipCallerConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SipCallerConfig();
    SipCallerConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SipCallerConfig) {
    _instance.sipBaseConfig = _instance.sipBaseConfig || undefined;
    _instance.calleeId = _instance.calleeId || '';
    _instance.sipHeaders = _instance.sipHeaders || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SipCallerConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipBaseConfig = new SipBaseConfig();
          _reader.readMessage(
            _instance.sipBaseConfig,
            SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.calleeId = _reader.readString();
          break;
        case 3:
          const msg_3 = {} as any;
          _reader.readMessage(
            msg_3,
            SipCallerConfig.SipHeadersEntry.deserializeBinaryFromReader
          );
          _instance.sipHeaders = _instance.sipHeaders || {};
          _instance.sipHeaders[msg_3.key] = msg_3.value;
          break;
        default:
          _reader.skipField();
      }
    }

    SipCallerConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SipCallerConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.sipBaseConfig) {
      _writer.writeMessage(
        1,
        _instance.sipBaseConfig as any,
        SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.calleeId) {
      _writer.writeString(2, _instance.calleeId);
    }
    if (!!_instance.sipHeaders) {
      const keys_3 = Object.keys(_instance.sipHeaders as any);

      if (keys_3.length) {
        const repeated_3 = keys_3
          .map(key => ({ key: key, value: (_instance.sipHeaders as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          3,
          repeated_3,
          SipCallerConfig.SipHeadersEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _sipBaseConfig?: SipBaseConfig;
  private _calleeId: string;
  private _sipHeaders: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SipCallerConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<SipCallerConfig.AsObject>) {
    _value = _value || {};
    this.sipBaseConfig = _value.sipBaseConfig
      ? new SipBaseConfig(_value.sipBaseConfig)
      : undefined;
    this.calleeId = _value.calleeId;
    (this.sipHeaders = _value!.sipHeaders
      ? Object.keys(_value!.sipHeaders).reduce(
          (r, k) => ({ ...r, [k]: _value!.sipHeaders![k] }),
          {}
        )
      : {}),
      SipCallerConfig.refineValues(this);
  }
  get sipBaseConfig(): SipBaseConfig | undefined {
    return this._sipBaseConfig;
  }
  set sipBaseConfig(value: SipBaseConfig | undefined) {
    this._sipBaseConfig = value;
  }
  get calleeId(): string {
    return this._calleeId;
  }
  set calleeId(value: string) {
    this._calleeId = value;
  }
  get sipHeaders(): { [prop: string]: string } {
    return this._sipHeaders;
  }
  set sipHeaders(value: { [prop: string]: string }) {
    this._sipHeaders = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SipCallerConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SipCallerConfig.AsObject {
    return {
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toObject()
        : undefined,
      calleeId: this.calleeId,
      sipHeaders: this.sipHeaders
        ? Object.keys(this.sipHeaders).reduce(
            (r, k) => ({ ...r, [k]: this.sipHeaders![k] }),
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
  ): SipCallerConfig.AsProtobufJSON {
    return {
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toProtobufJSON(options)
        : null,
      calleeId: this.calleeId,
      sipHeaders: this.sipHeaders
        ? Object.keys(this.sipHeaders).reduce(
            (r, k) => ({ ...r, [k]: this.sipHeaders![k] }),
            {}
          )
        : {}
    };
  }
}
export module SipCallerConfig {
  /**
   * Standard JavaScript object representation for SipCallerConfig
   */
  export interface AsObject {
    sipBaseConfig?: SipBaseConfig.AsObject;
    calleeId: string;
    sipHeaders: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for SipCallerConfig
   */
  export interface AsProtobufJSON {
    sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
    calleeId: string;
    sipHeaders: { [prop: string]: string };
  }

  /**
   * Message implementation for ondewo.vtsi.SipCallerConfig.SipHeadersEntry
   */
  export class SipHeadersEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.SipCallerConfig.SipHeadersEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new SipHeadersEntry();
      SipHeadersEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SipHeadersEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: SipHeadersEntry,
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

      SipHeadersEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: SipHeadersEntry,
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
     * @param _value initial values object or instance of SipHeadersEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<SipHeadersEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      SipHeadersEntry.refineValues(this);
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
      SipHeadersEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SipHeadersEntry.AsObject {
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
    ): SipHeadersEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module SipHeadersEntry {
    /**
     * Standard JavaScript object representation for SipHeadersEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for SipHeadersEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.CsiVtsiConfig
 */
export class CsiVtsiConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.CsiVtsiConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CsiVtsiConfig();
    CsiVtsiConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CsiVtsiConfig) {
    _instance.s2tVtsiCallbacks = _instance.s2tVtsiCallbacks || undefined;
    _instance.nluVtsiCallbacks = _instance.nluVtsiCallbacks || undefined;
    _instance.t2sVtsiCallbacks = _instance.t2sVtsiCallbacks || undefined;
    _instance.audioObjectStoreConfig =
      _instance.audioObjectStoreConfig || undefined;
    _instance.messageBrokerConfig = _instance.messageBrokerConfig || undefined;
    _instance.activateControlMessages =
      _instance.activateControlMessages || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CsiVtsiConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.s2tVtsiCallbacks = new S2tVtsiCallbacks();
          _reader.readMessage(
            _instance.s2tVtsiCallbacks,
            S2tVtsiCallbacks.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.nluVtsiCallbacks = new NluVtsiCallbacks();
          _reader.readMessage(
            _instance.nluVtsiCallbacks,
            NluVtsiCallbacks.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.t2sVtsiCallbacks = new T2sVtsiCallbacks();
          _reader.readMessage(
            _instance.t2sVtsiCallbacks,
            T2sVtsiCallbacks.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.audioObjectStoreConfig = new AudioObjectStorageConfig();
          _reader.readMessage(
            _instance.audioObjectStoreConfig,
            AudioObjectStorageConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.messageBrokerConfig = new MessageBrokerConfig();
          _reader.readMessage(
            _instance.messageBrokerConfig,
            MessageBrokerConfig.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.activateControlMessages = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    CsiVtsiConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CsiVtsiConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.s2tVtsiCallbacks) {
      _writer.writeMessage(
        1,
        _instance.s2tVtsiCallbacks as any,
        S2tVtsiCallbacks.serializeBinaryToWriter
      );
    }
    if (_instance.nluVtsiCallbacks) {
      _writer.writeMessage(
        2,
        _instance.nluVtsiCallbacks as any,
        NluVtsiCallbacks.serializeBinaryToWriter
      );
    }
    if (_instance.t2sVtsiCallbacks) {
      _writer.writeMessage(
        3,
        _instance.t2sVtsiCallbacks as any,
        T2sVtsiCallbacks.serializeBinaryToWriter
      );
    }
    if (_instance.audioObjectStoreConfig) {
      _writer.writeMessage(
        4,
        _instance.audioObjectStoreConfig as any,
        AudioObjectStorageConfig.serializeBinaryToWriter
      );
    }
    if (_instance.messageBrokerConfig) {
      _writer.writeMessage(
        5,
        _instance.messageBrokerConfig as any,
        MessageBrokerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.activateControlMessages) {
      _writer.writeBool(6, _instance.activateControlMessages);
    }
  }

  private _s2tVtsiCallbacks?: S2tVtsiCallbacks;
  private _nluVtsiCallbacks?: NluVtsiCallbacks;
  private _t2sVtsiCallbacks?: T2sVtsiCallbacks;
  private _audioObjectStoreConfig?: AudioObjectStorageConfig;
  private _messageBrokerConfig?: MessageBrokerConfig;
  private _activateControlMessages: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CsiVtsiConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<CsiVtsiConfig.AsObject>) {
    _value = _value || {};
    this.s2tVtsiCallbacks = _value.s2tVtsiCallbacks
      ? new S2tVtsiCallbacks(_value.s2tVtsiCallbacks)
      : undefined;
    this.nluVtsiCallbacks = _value.nluVtsiCallbacks
      ? new NluVtsiCallbacks(_value.nluVtsiCallbacks)
      : undefined;
    this.t2sVtsiCallbacks = _value.t2sVtsiCallbacks
      ? new T2sVtsiCallbacks(_value.t2sVtsiCallbacks)
      : undefined;
    this.audioObjectStoreConfig = _value.audioObjectStoreConfig
      ? new AudioObjectStorageConfig(_value.audioObjectStoreConfig)
      : undefined;
    this.messageBrokerConfig = _value.messageBrokerConfig
      ? new MessageBrokerConfig(_value.messageBrokerConfig)
      : undefined;
    this.activateControlMessages = _value.activateControlMessages;
    CsiVtsiConfig.refineValues(this);
  }
  get s2tVtsiCallbacks(): S2tVtsiCallbacks | undefined {
    return this._s2tVtsiCallbacks;
  }
  set s2tVtsiCallbacks(value: S2tVtsiCallbacks | undefined) {
    this._s2tVtsiCallbacks = value;
  }
  get nluVtsiCallbacks(): NluVtsiCallbacks | undefined {
    return this._nluVtsiCallbacks;
  }
  set nluVtsiCallbacks(value: NluVtsiCallbacks | undefined) {
    this._nluVtsiCallbacks = value;
  }
  get t2sVtsiCallbacks(): T2sVtsiCallbacks | undefined {
    return this._t2sVtsiCallbacks;
  }
  set t2sVtsiCallbacks(value: T2sVtsiCallbacks | undefined) {
    this._t2sVtsiCallbacks = value;
  }
  get audioObjectStoreConfig(): AudioObjectStorageConfig | undefined {
    return this._audioObjectStoreConfig;
  }
  set audioObjectStoreConfig(value: AudioObjectStorageConfig | undefined) {
    this._audioObjectStoreConfig = value;
  }
  get messageBrokerConfig(): MessageBrokerConfig | undefined {
    return this._messageBrokerConfig;
  }
  set messageBrokerConfig(value: MessageBrokerConfig | undefined) {
    this._messageBrokerConfig = value;
  }
  get activateControlMessages(): boolean {
    return this._activateControlMessages;
  }
  set activateControlMessages(value: boolean) {
    this._activateControlMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CsiVtsiConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CsiVtsiConfig.AsObject {
    return {
      s2tVtsiCallbacks: this.s2tVtsiCallbacks
        ? this.s2tVtsiCallbacks.toObject()
        : undefined,
      nluVtsiCallbacks: this.nluVtsiCallbacks
        ? this.nluVtsiCallbacks.toObject()
        : undefined,
      t2sVtsiCallbacks: this.t2sVtsiCallbacks
        ? this.t2sVtsiCallbacks.toObject()
        : undefined,
      audioObjectStoreConfig: this.audioObjectStoreConfig
        ? this.audioObjectStoreConfig.toObject()
        : undefined,
      messageBrokerConfig: this.messageBrokerConfig
        ? this.messageBrokerConfig.toObject()
        : undefined,
      activateControlMessages: this.activateControlMessages
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
  ): CsiVtsiConfig.AsProtobufJSON {
    return {
      s2tVtsiCallbacks: this.s2tVtsiCallbacks
        ? this.s2tVtsiCallbacks.toProtobufJSON(options)
        : null,
      nluVtsiCallbacks: this.nluVtsiCallbacks
        ? this.nluVtsiCallbacks.toProtobufJSON(options)
        : null,
      t2sVtsiCallbacks: this.t2sVtsiCallbacks
        ? this.t2sVtsiCallbacks.toProtobufJSON(options)
        : null,
      audioObjectStoreConfig: this.audioObjectStoreConfig
        ? this.audioObjectStoreConfig.toProtobufJSON(options)
        : null,
      messageBrokerConfig: this.messageBrokerConfig
        ? this.messageBrokerConfig.toProtobufJSON(options)
        : null,
      activateControlMessages: this.activateControlMessages
    };
  }
}
export module CsiVtsiConfig {
  /**
   * Standard JavaScript object representation for CsiVtsiConfig
   */
  export interface AsObject {
    s2tVtsiCallbacks?: S2tVtsiCallbacks.AsObject;
    nluVtsiCallbacks?: NluVtsiCallbacks.AsObject;
    t2sVtsiCallbacks?: T2sVtsiCallbacks.AsObject;
    audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject;
    messageBrokerConfig?: MessageBrokerConfig.AsObject;
    activateControlMessages: boolean;
  }

  /**
   * Protobuf JSON representation for CsiVtsiConfig
   */
  export interface AsProtobufJSON {
    s2tVtsiCallbacks: S2tVtsiCallbacks.AsProtobufJSON | null;
    nluVtsiCallbacks: NluVtsiCallbacks.AsProtobufJSON | null;
    t2sVtsiCallbacks: T2sVtsiCallbacks.AsProtobufJSON | null;
    audioObjectStoreConfig: AudioObjectStorageConfig.AsProtobufJSON | null;
    messageBrokerConfig: MessageBrokerConfig.AsProtobufJSON | null;
    activateControlMessages: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.AudioObjectStorageConfig
 */
export class AudioObjectStorageConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.AudioObjectStorageConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AudioObjectStorageConfig();
    AudioObjectStorageConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AudioObjectStorageConfig) {
    _instance.activateAudioObjectStorage =
      _instance.activateAudioObjectStorage || false;
    _instance.audioObjectStorageServicesActivationConfig =
      _instance.audioObjectStorageServicesActivationConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AudioObjectStorageConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.activateAudioObjectStorage = _reader.readBool();
          break;
        case 2:
          _instance.audioObjectStorageServicesActivationConfig = new AudioObjectStorageServicesActivationConfig();
          _reader.readMessage(
            _instance.audioObjectStorageServicesActivationConfig,
            AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AudioObjectStorageConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AudioObjectStorageConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.activateAudioObjectStorage) {
      _writer.writeBool(1, _instance.activateAudioObjectStorage);
    }
    if (_instance.audioObjectStorageServicesActivationConfig) {
      _writer.writeMessage(
        2,
        _instance.audioObjectStorageServicesActivationConfig as any,
        AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter
      );
    }
  }

  private _activateAudioObjectStorage: boolean;
  private _audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AudioObjectStorageConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<AudioObjectStorageConfig.AsObject>) {
    _value = _value || {};
    this.activateAudioObjectStorage = _value.activateAudioObjectStorage;
    this.audioObjectStorageServicesActivationConfig = _value.audioObjectStorageServicesActivationConfig
      ? new AudioObjectStorageServicesActivationConfig(
          _value.audioObjectStorageServicesActivationConfig
        )
      : undefined;
    AudioObjectStorageConfig.refineValues(this);
  }
  get activateAudioObjectStorage(): boolean {
    return this._activateAudioObjectStorage;
  }
  set activateAudioObjectStorage(value: boolean) {
    this._activateAudioObjectStorage = value;
  }
  get audioObjectStorageServicesActivationConfig():
    | AudioObjectStorageServicesActivationConfig
    | undefined {
    return this._audioObjectStorageServicesActivationConfig;
  }
  set audioObjectStorageServicesActivationConfig(
    value: AudioObjectStorageServicesActivationConfig | undefined
  ) {
    this._audioObjectStorageServicesActivationConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AudioObjectStorageConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AudioObjectStorageConfig.AsObject {
    return {
      activateAudioObjectStorage: this.activateAudioObjectStorage,
      audioObjectStorageServicesActivationConfig: this
        .audioObjectStorageServicesActivationConfig
        ? this.audioObjectStorageServicesActivationConfig.toObject()
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
  ): AudioObjectStorageConfig.AsProtobufJSON {
    return {
      activateAudioObjectStorage: this.activateAudioObjectStorage,
      audioObjectStorageServicesActivationConfig: this
        .audioObjectStorageServicesActivationConfig
        ? this.audioObjectStorageServicesActivationConfig.toProtobufJSON(
            options
          )
        : null
    };
  }
}
export module AudioObjectStorageConfig {
  /**
   * Standard JavaScript object representation for AudioObjectStorageConfig
   */
  export interface AsObject {
    activateAudioObjectStorage: boolean;
    audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for AudioObjectStorageConfig
   */
  export interface AsProtobufJSON {
    activateAudioObjectStorage: boolean;
    audioObjectStorageServicesActivationConfig: AudioObjectStorageServicesActivationConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.AudioObjectStorageServicesActivationConfig
 */
export class AudioObjectStorageServicesActivationConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.AudioObjectStorageServicesActivationConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AudioObjectStorageServicesActivationConfig();
    AudioObjectStorageServicesActivationConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AudioObjectStorageServicesActivationConfig) {
    _instance.activateS2t = _instance.activateS2t || false;
    _instance.activateT2s = _instance.activateT2s || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AudioObjectStorageServicesActivationConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.activateS2t = _reader.readBool();
          break;
        case 2:
          _instance.activateT2s = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AudioObjectStorageServicesActivationConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AudioObjectStorageServicesActivationConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.activateS2t) {
      _writer.writeBool(1, _instance.activateS2t);
    }
    if (_instance.activateT2s) {
      _writer.writeBool(2, _instance.activateT2s);
    }
  }

  private _activateS2t: boolean;
  private _activateT2s: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AudioObjectStorageServicesActivationConfig to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      AudioObjectStorageServicesActivationConfig.AsObject
    >
  ) {
    _value = _value || {};
    this.activateS2t = _value.activateS2t;
    this.activateT2s = _value.activateT2s;
    AudioObjectStorageServicesActivationConfig.refineValues(this);
  }
  get activateS2t(): boolean {
    return this._activateS2t;
  }
  set activateS2t(value: boolean) {
    this._activateS2t = value;
  }
  get activateT2s(): boolean {
    return this._activateT2s;
  }
  set activateT2s(value: boolean) {
    this._activateT2s = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AudioObjectStorageServicesActivationConfig.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AudioObjectStorageServicesActivationConfig.AsObject {
    return {
      activateS2t: this.activateS2t,
      activateT2s: this.activateT2s
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
  ): AudioObjectStorageServicesActivationConfig.AsProtobufJSON {
    return {
      activateS2t: this.activateS2t,
      activateT2s: this.activateT2s
    };
  }
}
export module AudioObjectStorageServicesActivationConfig {
  /**
   * Standard JavaScript object representation for AudioObjectStorageServicesActivationConfig
   */
  export interface AsObject {
    activateS2t: boolean;
    activateT2s: boolean;
  }

  /**
   * Protobuf JSON representation for AudioObjectStorageServicesActivationConfig
   */
  export interface AsProtobufJSON {
    activateS2t: boolean;
    activateT2s: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.MessageBrokerConfig
 */
export class MessageBrokerConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.MessageBrokerConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MessageBrokerConfig();
    MessageBrokerConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MessageBrokerConfig) {
    _instance.activateMessageBroker = _instance.activateMessageBroker || false;
    _instance.messageBrokerServicesActivationConfig =
      _instance.messageBrokerServicesActivationConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MessageBrokerConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.activateMessageBroker = _reader.readBool();
          break;
        case 2:
          _instance.messageBrokerServicesActivationConfig = new MessageBrokerServicesActivationConfig();
          _reader.readMessage(
            _instance.messageBrokerServicesActivationConfig,
            MessageBrokerServicesActivationConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.rabbitMqConfig = new RabbitMqConfig();
          _reader.readMessage(
            _instance.rabbitMqConfig,
            RabbitMqConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    MessageBrokerConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MessageBrokerConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.activateMessageBroker) {
      _writer.writeBool(1, _instance.activateMessageBroker);
    }
    if (_instance.messageBrokerServicesActivationConfig) {
      _writer.writeMessage(
        2,
        _instance.messageBrokerServicesActivationConfig as any,
        MessageBrokerServicesActivationConfig.serializeBinaryToWriter
      );
    }
    if (_instance.rabbitMqConfig) {
      _writer.writeMessage(
        3,
        _instance.rabbitMqConfig as any,
        RabbitMqConfig.serializeBinaryToWriter
      );
    }
  }

  private _activateMessageBroker: boolean;
  private _messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig;
  private _rabbitMqConfig?: RabbitMqConfig;

  private _messageBrokerConfig: MessageBrokerConfig.MessageBrokerConfigCase =
    MessageBrokerConfig.MessageBrokerConfigCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MessageBrokerConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<MessageBrokerConfig.AsObject>) {
    _value = _value || {};
    this.activateMessageBroker = _value.activateMessageBroker;
    this.messageBrokerServicesActivationConfig = _value.messageBrokerServicesActivationConfig
      ? new MessageBrokerServicesActivationConfig(
          _value.messageBrokerServicesActivationConfig
        )
      : undefined;
    this.rabbitMqConfig = _value.rabbitMqConfig
      ? new RabbitMqConfig(_value.rabbitMqConfig)
      : undefined;
    MessageBrokerConfig.refineValues(this);
  }
  get activateMessageBroker(): boolean {
    return this._activateMessageBroker;
  }
  set activateMessageBroker(value: boolean) {
    this._activateMessageBroker = value;
  }
  get messageBrokerServicesActivationConfig():
    | MessageBrokerServicesActivationConfig
    | undefined {
    return this._messageBrokerServicesActivationConfig;
  }
  set messageBrokerServicesActivationConfig(
    value: MessageBrokerServicesActivationConfig | undefined
  ) {
    this._messageBrokerServicesActivationConfig = value;
  }
  get rabbitMqConfig(): RabbitMqConfig | undefined {
    return this._rabbitMqConfig;
  }
  set rabbitMqConfig(value: RabbitMqConfig | undefined) {
    if (value !== undefined && value !== null) {
      this._messageBrokerConfig =
        MessageBrokerConfig.MessageBrokerConfigCase.rabbitMqConfig;
    }
    this._rabbitMqConfig = value;
  }
  get messageBrokerConfig() {
    return this._messageBrokerConfig;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MessageBrokerConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MessageBrokerConfig.AsObject {
    return {
      activateMessageBroker: this.activateMessageBroker,
      messageBrokerServicesActivationConfig: this
        .messageBrokerServicesActivationConfig
        ? this.messageBrokerServicesActivationConfig.toObject()
        : undefined,
      rabbitMqConfig: this.rabbitMqConfig
        ? this.rabbitMqConfig.toObject()
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
  ): MessageBrokerConfig.AsProtobufJSON {
    return {
      activateMessageBroker: this.activateMessageBroker,
      messageBrokerServicesActivationConfig: this
        .messageBrokerServicesActivationConfig
        ? this.messageBrokerServicesActivationConfig.toProtobufJSON(options)
        : null,
      rabbitMqConfig: this.rabbitMqConfig
        ? this.rabbitMqConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module MessageBrokerConfig {
  /**
   * Standard JavaScript object representation for MessageBrokerConfig
   */
  export interface AsObject {
    activateMessageBroker: boolean;
    messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject;
    rabbitMqConfig?: RabbitMqConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for MessageBrokerConfig
   */
  export interface AsProtobufJSON {
    activateMessageBroker: boolean;
    messageBrokerServicesActivationConfig: MessageBrokerServicesActivationConfig.AsProtobufJSON | null;
    rabbitMqConfig: RabbitMqConfig.AsProtobufJSON | null;
  }
  export enum MessageBrokerConfigCase {
    none = 0,
    rabbitMqConfig = 1
  }
}

/**
 * Message implementation for ondewo.vtsi.MessageBrokerServicesActivationConfig
 */
export class MessageBrokerServicesActivationConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.MessageBrokerServicesActivationConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MessageBrokerServicesActivationConfig();
    MessageBrokerServicesActivationConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MessageBrokerServicesActivationConfig) {
    _instance.activateS2t = _instance.activateS2t || false;
    _instance.activateNlu = _instance.activateNlu || false;
    _instance.activateT2s = _instance.activateT2s || false;
    _instance.activateSip = _instance.activateSip || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MessageBrokerServicesActivationConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.activateS2t = _reader.readBool();
          break;
        case 2:
          _instance.activateNlu = _reader.readBool();
          break;
        case 3:
          _instance.activateT2s = _reader.readBool();
          break;
        case 4:
          _instance.activateSip = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    MessageBrokerServicesActivationConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MessageBrokerServicesActivationConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.activateS2t) {
      _writer.writeBool(1, _instance.activateS2t);
    }
    if (_instance.activateNlu) {
      _writer.writeBool(2, _instance.activateNlu);
    }
    if (_instance.activateT2s) {
      _writer.writeBool(3, _instance.activateT2s);
    }
    if (_instance.activateSip) {
      _writer.writeBool(4, _instance.activateSip);
    }
  }

  private _activateS2t: boolean;
  private _activateNlu: boolean;
  private _activateT2s: boolean;
  private _activateSip: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MessageBrokerServicesActivationConfig to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<MessageBrokerServicesActivationConfig.AsObject>
  ) {
    _value = _value || {};
    this.activateS2t = _value.activateS2t;
    this.activateNlu = _value.activateNlu;
    this.activateT2s = _value.activateT2s;
    this.activateSip = _value.activateSip;
    MessageBrokerServicesActivationConfig.refineValues(this);
  }
  get activateS2t(): boolean {
    return this._activateS2t;
  }
  set activateS2t(value: boolean) {
    this._activateS2t = value;
  }
  get activateNlu(): boolean {
    return this._activateNlu;
  }
  set activateNlu(value: boolean) {
    this._activateNlu = value;
  }
  get activateT2s(): boolean {
    return this._activateT2s;
  }
  set activateT2s(value: boolean) {
    this._activateT2s = value;
  }
  get activateSip(): boolean {
    return this._activateSip;
  }
  set activateSip(value: boolean) {
    this._activateSip = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MessageBrokerServicesActivationConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MessageBrokerServicesActivationConfig.AsObject {
    return {
      activateS2t: this.activateS2t,
      activateNlu: this.activateNlu,
      activateT2s: this.activateT2s,
      activateSip: this.activateSip
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
  ): MessageBrokerServicesActivationConfig.AsProtobufJSON {
    return {
      activateS2t: this.activateS2t,
      activateNlu: this.activateNlu,
      activateT2s: this.activateT2s,
      activateSip: this.activateSip
    };
  }
}
export module MessageBrokerServicesActivationConfig {
  /**
   * Standard JavaScript object representation for MessageBrokerServicesActivationConfig
   */
  export interface AsObject {
    activateS2t: boolean;
    activateNlu: boolean;
    activateT2s: boolean;
    activateSip: boolean;
  }

  /**
   * Protobuf JSON representation for MessageBrokerServicesActivationConfig
   */
  export interface AsProtobufJSON {
    activateS2t: boolean;
    activateNlu: boolean;
    activateT2s: boolean;
    activateSip: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.RabbitMqConfig
 */
export class RabbitMqConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.RabbitMqConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RabbitMqConfig();
    RabbitMqConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RabbitMqConfig) {
    _instance.host = _instance.host || '';
    _instance.port = _instance.port || 0;
    _instance.port2 = _instance.port2 || 0;
    _instance.user = _instance.user || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RabbitMqConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.host = _reader.readString();
          break;
        case 2:
          _instance.port = _reader.readInt32();
          break;
        case 3:
          _instance.port2 = _reader.readInt32();
          break;
        case 4:
          _instance.user = _reader.readString();
          break;
        case 5:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RabbitMqConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RabbitMqConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.host) {
      _writer.writeString(1, _instance.host);
    }
    if (_instance.port) {
      _writer.writeInt32(2, _instance.port);
    }
    if (_instance.port2) {
      _writer.writeInt32(3, _instance.port2);
    }
    if (_instance.user) {
      _writer.writeString(4, _instance.user);
    }
    if (_instance.password) {
      _writer.writeString(5, _instance.password);
    }
  }

  private _host: string;
  private _port: number;
  private _port2: number;
  private _user: string;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RabbitMqConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RabbitMqConfig.AsObject>) {
    _value = _value || {};
    this.host = _value.host;
    this.port = _value.port;
    this.port2 = _value.port2;
    this.user = _value.user;
    this.password = _value.password;
    RabbitMqConfig.refineValues(this);
  }
  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }
  get port(): number {
    return this._port;
  }
  set port(value: number) {
    this._port = value;
  }
  get port2(): number {
    return this._port2;
  }
  set port2(value: number) {
    this._port2 = value;
  }
  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RabbitMqConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RabbitMqConfig.AsObject {
    return {
      host: this.host,
      port: this.port,
      port2: this.port2,
      user: this.user,
      password: this.password
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
  ): RabbitMqConfig.AsProtobufJSON {
    return {
      host: this.host,
      port: this.port,
      port2: this.port2,
      user: this.user,
      password: this.password
    };
  }
}
export module RabbitMqConfig {
  /**
   * Standard JavaScript object representation for RabbitMqConfig
   */
  export interface AsObject {
    host: string;
    port: number;
    port2: number;
    user: string;
    password: string;
  }

  /**
   * Protobuf JSON representation for RabbitMqConfig
   */
  export interface AsProtobufJSON {
    host: string;
    port: number;
    port2: number;
    user: string;
    password: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.S2tVtsiCallbacks
 */
export class S2tVtsiCallbacks implements GrpcMessage {
  static id = 'ondewo.vtsi.S2tVtsiCallbacks';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new S2tVtsiCallbacks();
    S2tVtsiCallbacks.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: S2tVtsiCallbacks) {
    _instance.preS2tCallbacks = _instance.preS2tCallbacks || [];
    _instance.postS2tCallbacks = _instance.postS2tCallbacks || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: S2tVtsiCallbacks,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.preS2tCallbacks = _instance.preS2tCallbacks || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.postS2tCallbacks = _instance.postS2tCallbacks || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    S2tVtsiCallbacks.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: S2tVtsiCallbacks,
    _writer: BinaryWriter
  ) {
    if (_instance.preS2tCallbacks && _instance.preS2tCallbacks.length) {
      _writer.writeRepeatedString(1, _instance.preS2tCallbacks);
    }
    if (_instance.postS2tCallbacks && _instance.postS2tCallbacks.length) {
      _writer.writeRepeatedString(2, _instance.postS2tCallbacks);
    }
  }

  private _preS2tCallbacks: string[];
  private _postS2tCallbacks: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of S2tVtsiCallbacks to deeply clone from
   */
  constructor(_value?: RecursivePartial<S2tVtsiCallbacks.AsObject>) {
    _value = _value || {};
    this.preS2tCallbacks = (_value.preS2tCallbacks || []).slice();
    this.postS2tCallbacks = (_value.postS2tCallbacks || []).slice();
    S2tVtsiCallbacks.refineValues(this);
  }
  get preS2tCallbacks(): string[] {
    return this._preS2tCallbacks;
  }
  set preS2tCallbacks(value: string[]) {
    this._preS2tCallbacks = value;
  }
  get postS2tCallbacks(): string[] {
    return this._postS2tCallbacks;
  }
  set postS2tCallbacks(value: string[]) {
    this._postS2tCallbacks = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    S2tVtsiCallbacks.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): S2tVtsiCallbacks.AsObject {
    return {
      preS2tCallbacks: (this.preS2tCallbacks || []).slice(),
      postS2tCallbacks: (this.postS2tCallbacks || []).slice()
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
  ): S2tVtsiCallbacks.AsProtobufJSON {
    return {
      preS2tCallbacks: (this.preS2tCallbacks || []).slice(),
      postS2tCallbacks: (this.postS2tCallbacks || []).slice()
    };
  }
}
export module S2tVtsiCallbacks {
  /**
   * Standard JavaScript object representation for S2tVtsiCallbacks
   */
  export interface AsObject {
    preS2tCallbacks: string[];
    postS2tCallbacks: string[];
  }

  /**
   * Protobuf JSON representation for S2tVtsiCallbacks
   */
  export interface AsProtobufJSON {
    preS2tCallbacks: string[];
    postS2tCallbacks: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.NluVtsiCallbacks
 */
export class NluVtsiCallbacks implements GrpcMessage {
  static id = 'ondewo.vtsi.NluVtsiCallbacks';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new NluVtsiCallbacks();
    NluVtsiCallbacks.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: NluVtsiCallbacks) {
    _instance.preNluCallbacks = _instance.preNluCallbacks || [];
    _instance.postNluCallbacks = _instance.postNluCallbacks || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: NluVtsiCallbacks,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.preNluCallbacks = _instance.preNluCallbacks || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.postNluCallbacks = _instance.postNluCallbacks || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    NluVtsiCallbacks.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: NluVtsiCallbacks,
    _writer: BinaryWriter
  ) {
    if (_instance.preNluCallbacks && _instance.preNluCallbacks.length) {
      _writer.writeRepeatedString(1, _instance.preNluCallbacks);
    }
    if (_instance.postNluCallbacks && _instance.postNluCallbacks.length) {
      _writer.writeRepeatedString(2, _instance.postNluCallbacks);
    }
  }

  private _preNluCallbacks: string[];
  private _postNluCallbacks: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of NluVtsiCallbacks to deeply clone from
   */
  constructor(_value?: RecursivePartial<NluVtsiCallbacks.AsObject>) {
    _value = _value || {};
    this.preNluCallbacks = (_value.preNluCallbacks || []).slice();
    this.postNluCallbacks = (_value.postNluCallbacks || []).slice();
    NluVtsiCallbacks.refineValues(this);
  }
  get preNluCallbacks(): string[] {
    return this._preNluCallbacks;
  }
  set preNluCallbacks(value: string[]) {
    this._preNluCallbacks = value;
  }
  get postNluCallbacks(): string[] {
    return this._postNluCallbacks;
  }
  set postNluCallbacks(value: string[]) {
    this._postNluCallbacks = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    NluVtsiCallbacks.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): NluVtsiCallbacks.AsObject {
    return {
      preNluCallbacks: (this.preNluCallbacks || []).slice(),
      postNluCallbacks: (this.postNluCallbacks || []).slice()
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
  ): NluVtsiCallbacks.AsProtobufJSON {
    return {
      preNluCallbacks: (this.preNluCallbacks || []).slice(),
      postNluCallbacks: (this.postNluCallbacks || []).slice()
    };
  }
}
export module NluVtsiCallbacks {
  /**
   * Standard JavaScript object representation for NluVtsiCallbacks
   */
  export interface AsObject {
    preNluCallbacks: string[];
    postNluCallbacks: string[];
  }

  /**
   * Protobuf JSON representation for NluVtsiCallbacks
   */
  export interface AsProtobufJSON {
    preNluCallbacks: string[];
    postNluCallbacks: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.T2sVtsiCallbacks
 */
export class T2sVtsiCallbacks implements GrpcMessage {
  static id = 'ondewo.vtsi.T2sVtsiCallbacks';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new T2sVtsiCallbacks();
    T2sVtsiCallbacks.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: T2sVtsiCallbacks) {
    _instance.preT2sCallbacks = _instance.preT2sCallbacks || [];
    _instance.postT2sCallbacks = _instance.postT2sCallbacks || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: T2sVtsiCallbacks,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.preT2sCallbacks = _instance.preT2sCallbacks || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.postT2sCallbacks = _instance.postT2sCallbacks || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    T2sVtsiCallbacks.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: T2sVtsiCallbacks,
    _writer: BinaryWriter
  ) {
    if (_instance.preT2sCallbacks && _instance.preT2sCallbacks.length) {
      _writer.writeRepeatedString(1, _instance.preT2sCallbacks);
    }
    if (_instance.postT2sCallbacks && _instance.postT2sCallbacks.length) {
      _writer.writeRepeatedString(2, _instance.postT2sCallbacks);
    }
  }

  private _preT2sCallbacks: string[];
  private _postT2sCallbacks: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of T2sVtsiCallbacks to deeply clone from
   */
  constructor(_value?: RecursivePartial<T2sVtsiCallbacks.AsObject>) {
    _value = _value || {};
    this.preT2sCallbacks = (_value.preT2sCallbacks || []).slice();
    this.postT2sCallbacks = (_value.postT2sCallbacks || []).slice();
    T2sVtsiCallbacks.refineValues(this);
  }
  get preT2sCallbacks(): string[] {
    return this._preT2sCallbacks;
  }
  set preT2sCallbacks(value: string[]) {
    this._preT2sCallbacks = value;
  }
  get postT2sCallbacks(): string[] {
    return this._postT2sCallbacks;
  }
  set postT2sCallbacks(value: string[]) {
    this._postT2sCallbacks = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    T2sVtsiCallbacks.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): T2sVtsiCallbacks.AsObject {
    return {
      preT2sCallbacks: (this.preT2sCallbacks || []).slice(),
      postT2sCallbacks: (this.postT2sCallbacks || []).slice()
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
  ): T2sVtsiCallbacks.AsProtobufJSON {
    return {
      preT2sCallbacks: (this.preT2sCallbacks || []).slice(),
      postT2sCallbacks: (this.postT2sCallbacks || []).slice()
    };
  }
}
export module T2sVtsiCallbacks {
  /**
   * Standard JavaScript object representation for T2sVtsiCallbacks
   */
  export interface AsObject {
    preT2sCallbacks: string[];
    postT2sCallbacks: string[];
  }

  /**
   * Protobuf JSON representation for T2sVtsiCallbacks
   */
  export interface AsProtobufJSON {
    preT2sCallbacks: string[];
    postT2sCallbacks: string[];
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
          _instance.sipBaseConfig = new SipBaseConfig();
          _reader.readMessage(
            _instance.sipBaseConfig,
            SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
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
        SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _callName: string;
  private _sipBaseConfig?: SipBaseConfig;
  private _commonServicesConfig?: CommonServicesConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Listener to deeply clone from
   */
  constructor(_value?: RecursivePartial<Listener.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipBaseConfig = _value.sipBaseConfig
      ? new SipBaseConfig(_value.sipBaseConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
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
  get sipBaseConfig(): SipBaseConfig | undefined {
    return this._sipBaseConfig;
  }
  set sipBaseConfig(value: SipBaseConfig | undefined) {
    this._sipBaseConfig = value;
  }
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
    this._commonServicesConfig = value;
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
  ): Listener.AsProtobufJSON {
    return {
      name: this.name,
      callName: this.callName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null
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
    sipBaseConfig?: SipBaseConfig.AsObject;
    commonServicesConfig?: CommonServicesConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for Listener
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
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
          _instance.sipCallerConfig = new SipCallerConfig();
          _reader.readMessage(
            _instance.sipCallerConfig,
            SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
          );
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
        SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _callName: string;
  private _sipCallerConfig?: SipCallerConfig;
  private _commonServicesConfig?: CommonServicesConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Caller to deeply clone from
   */
  constructor(_value?: RecursivePartial<Caller.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipCallerConfig = _value.sipCallerConfig
      ? new SipCallerConfig(_value.sipCallerConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
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
  get sipCallerConfig(): SipCallerConfig | undefined {
    return this._sipCallerConfig;
  }
  set sipCallerConfig(value: SipCallerConfig | undefined) {
    this._sipCallerConfig = value;
  }
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
    this._commonServicesConfig = value;
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
  ): Caller.AsProtobufJSON {
    return {
      name: this.name,
      callName: this.callName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null
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
    sipCallerConfig?: SipCallerConfig.AsObject;
    commonServicesConfig?: CommonServicesConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for Caller
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipCallerConfig: SipCallerConfig.AsProtobufJSON | null;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
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
          _instance.sipBaseConfig = new SipBaseConfig();
          _reader.readMessage(
            _instance.sipBaseConfig,
            SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
          );
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
        SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        3,
        _instance.commonServicesConfig as any,
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _sipBaseConfig?: SipBaseConfig;
  private _commonServicesConfig?: CommonServicesConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartListenerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.sipBaseConfig = _value.sipBaseConfig
      ? new SipBaseConfig(_value.sipBaseConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    StartListenerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get sipBaseConfig(): SipBaseConfig | undefined {
    return this._sipBaseConfig;
  }
  set sipBaseConfig(value: SipBaseConfig | undefined) {
    this._sipBaseConfig = value;
  }
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
    this._commonServicesConfig = value;
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
  ): StartListenerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipBaseConfig: this.sipBaseConfig
        ? this.sipBaseConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module StartListenerRequest {
  /**
   * Standard JavaScript object representation for StartListenerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    sipBaseConfig?: SipBaseConfig.AsObject;
    commonServicesConfig?: CommonServicesConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for StartListenerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
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
  }

  private _vtsiProjectName: string;
  private _listenerRequests?: StartListenerRequest[];

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
      listenerRequests: (this.listenerRequests || []).map(m => m.toObject())
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
      )
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
  }

  /**
   * Protobuf JSON representation for StartListenersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    listenerRequests: StartListenerRequest.AsProtobufJSON[] | null;
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
          _instance.sipCallerConfig = new SipCallerConfig();
          _reader.readMessage(
            _instance.sipCallerConfig,
            SipCallerConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
          );
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
        SipCallerConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        3,
        _instance.commonServicesConfig as any,
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _sipCallerConfig?: SipCallerConfig;
  private _commonServicesConfig?: CommonServicesConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StartCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StartCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.sipCallerConfig = _value.sipCallerConfig
      ? new SipCallerConfig(_value.sipCallerConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    StartCallerRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get sipCallerConfig(): SipCallerConfig | undefined {
    return this._sipCallerConfig;
  }
  set sipCallerConfig(value: SipCallerConfig | undefined) {
    this._sipCallerConfig = value;
  }
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
    this._commonServicesConfig = value;
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
  ): StartCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      sipCallerConfig: this.sipCallerConfig
        ? this.sipCallerConfig.toProtobufJSON(options)
        : null,
      commonServicesConfig: this.commonServicesConfig
        ? this.commonServicesConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module StartCallerRequest {
  /**
   * Standard JavaScript object representation for StartCallerRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    sipCallerConfig?: SipCallerConfig.AsObject;
    commonServicesConfig?: CommonServicesConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for StartCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    sipCallerConfig: SipCallerConfig.AsProtobufJSON | null;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
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
  }

  private _vtsiProjectName: string;
  private _callerRequests?: StartCallerRequest[];

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
      callerRequests: (this.callerRequests || []).map(m => m.toObject())
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
      )
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
  }

  /**
   * Protobuf JSON representation for StartCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callerRequests: StartCallerRequest.AsProtobufJSON[] | null;
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
    _instance.pageToken = _instance.pageToken || '';
    _instance.callView = _instance.callView || 0;
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
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.callView) {
      _writer.writeEnum(3, _instance.callView);
    }
  }

  private _vtsiProjectName: string;
  private _pageToken: string;
  private _callView: CallView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageToken = _value.pageToken;
    this.callView = _value.callView;
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
      callView: this.callView
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
        ]
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
  }

  /**
   * Protobuf JSON representation for ListCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageToken: string;
    callView: string;
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
  }

  private _callers?: Caller[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallersResponse.AsObject>) {
    _value = _value || {};
    this.callers = (_value.callers || []).map(m => new Caller(m));
    ListCallersResponse.refineValues(this);
  }
  get callers(): Caller[] | undefined {
    return this._callers;
  }
  set callers(value: Caller[] | undefined) {
    this._callers = value;
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
      callers: (this.callers || []).map(m => m.toObject())
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
      callers: (this.callers || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCallersResponse {
  /**
   * Standard JavaScript object representation for ListCallersResponse
   */
  export interface AsObject {
    callers?: Caller.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCallersResponse
   */
  export interface AsProtobufJSON {
    callers: Caller.AsProtobufJSON[] | null;
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
    _instance.callView = _instance.callView || 0;
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
    if (_instance.callView) {
      _writer.writeEnum(3, _instance.callView);
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _callView: CallView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.callView = _value.callView;
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
      callView: this.callView
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
        ]
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
  }

  /**
   * Protobuf JSON representation for GetCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    callView: string;
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
    _instance.pageToken = _instance.pageToken || '';
    _instance.callView = _instance.callView || 0;
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
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.callView) {
      _writer.writeEnum(3, _instance.callView);
    }
  }

  private _vtsiProjectName: string;
  private _pageToken: string;
  private _callView: CallView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListListenersRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageToken = _value.pageToken;
    this.callView = _value.callView;
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
      callView: this.callView
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
        ]
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
  }

  /**
   * Protobuf JSON representation for ListListenersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageToken: string;
    callView: string;
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
  }

  private _listeners?: Listener[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListListenersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListListenersResponse.AsObject>) {
    _value = _value || {};
    this.listeners = (_value.listeners || []).map(m => new Listener(m));
    this.nextPageToken = _value.nextPageToken;
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
  ): ListListenersResponse.AsProtobufJSON {
    return {
      listeners: (this.listeners || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
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
  }

  /**
   * Protobuf JSON representation for ListListenersResponse
   */
  export interface AsProtobufJSON {
    listeners: Listener.AsProtobufJSON[] | null;
    nextPageToken: string;
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
    _instance.callView = _instance.callView || 0;
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
    if (_instance.callView) {
      _writer.writeEnum(3, _instance.callView);
    }
  }

  private _vtsiProjectName: string;
  private _name: string;
  private _callView: CallView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetListenerRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.name = _value.name;
    this.callView = _value.callView;
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
      callView: this.callView
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
        ]
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
  }

  /**
   * Protobuf JSON representation for GetListenerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    name: string;
    callView: string;
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
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    StopListenerRequest.refineValues(this);
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
    StopListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopListenerRequest.AsObject {
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
  ): StopListenerRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module StopListenerRequest {
  /**
   * Standard JavaScript object representation for StopListenerRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for StopListenerRequest
   */
  export interface AsProtobufJSON {
    name: string;
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
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopListenersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    StopListenersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
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
      names: (this.names || []).slice()
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
      names: (this.names || []).slice()
    };
  }
}
export module StopListenersRequest {
  /**
   * Standard JavaScript object representation for StopListenersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for StopListenersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
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
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    StopCallerRequest.refineValues(this);
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
    StopCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopCallerRequest.AsObject {
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
  ): StopCallerRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module StopCallerRequest {
  /**
   * Standard JavaScript object representation for StopCallerRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for StopCallerRequest
   */
  export interface AsProtobufJSON {
    name: string;
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
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    StopCallersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
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
      names: (this.names || []).slice()
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
      names: (this.names || []).slice()
    };
  }
}
export module StopCallersRequest {
  /**
   * Standard JavaScript object representation for StopCallersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for StopCallersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
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
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteListenerRequest.refineValues(this);
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
    DeleteListenerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteListenerRequest.AsObject {
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
  ): DeleteListenerRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteListenerRequest {
  /**
   * Standard JavaScript object representation for DeleteListenerRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteListenerRequest
   */
  export interface AsProtobufJSON {
    name: string;
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
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteListenersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteListenersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    DeleteListenersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
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
      names: (this.names || []).slice()
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
      names: (this.names || []).slice()
    };
  }
}
export module DeleteListenersRequest {
  /**
   * Standard JavaScript object representation for DeleteListenersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for DeleteListenersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
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
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallerRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteCallerRequest.refineValues(this);
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
    DeleteCallerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCallerRequest.AsObject {
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
  ): DeleteCallerRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteCallerRequest {
  /**
   * Standard JavaScript object representation for DeleteCallerRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteCallerRequest
   */
  export interface AsProtobufJSON {
    name: string;
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
  }

  private _names: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCallersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCallersRequest.AsObject>) {
    _value = _value || {};
    this.names = (_value.names || []).slice();
    DeleteCallersRequest.refineValues(this);
  }
  get names(): string[] {
    return this._names;
  }
  set names(value: string[]) {
    this._names = value;
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
      names: (this.names || []).slice()
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
      names: (this.names || []).slice()
    };
  }
}
export module DeleteCallersRequest {
  /**
   * Standard JavaScript object representation for DeleteCallersRequest
   */
  export interface AsObject {
    names: string[];
  }

  /**
   * Protobuf JSON representation for DeleteCallersRequest
   */
  export interface AsProtobufJSON {
    names: string[];
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
  }

  private _vtsiProjectName: string;
  private _request?: StartCallerRequest;
  private _scheduledTime?: googleProtobuf005.Timestamp;

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
  ): StartScheduledCallerRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      request: this.request ? this.request.toProtobufJSON(options) : null,
      scheduledTime: this.scheduledTime
        ? this.scheduledTime.toProtobufJSON(options)
        : null
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
  }

  /**
   * Protobuf JSON representation for StartScheduledCallerRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    request: StartCallerRequest.AsProtobufJSON | null;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
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
  }

  private _vtsiProjectName: string;
  private _scheduledCallerRequests?: StartScheduledCallerRequest[];

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
  ): StartScheduledCallersRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      scheduledCallerRequests: (this.scheduledCallerRequests || []).map(m =>
        m.toProtobufJSON(options)
      )
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
  }

  /**
   * Protobuf JSON representation for StartScheduledCallersRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    scheduledCallerRequests:
      | StartScheduledCallerRequest.AsProtobufJSON[]
      | null;
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
          _instance.sipConfig = new SipBaseConfig();
          _reader.readMessage(
            _instance.sipConfig,
            SipBaseConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.scheduledTime = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.scheduledTime,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
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
        SipBaseConfig.serializeBinaryToWriter
      );
    }
    if (_instance.commonServicesConfig) {
      _writer.writeMessage(
        4,
        _instance.commonServicesConfig as any,
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.scheduledTime) {
      _writer.writeMessage(
        5,
        _instance.scheduledTime as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _callName: string;
  private _sipConfig?: SipBaseConfig;
  private _commonServicesConfig?: CommonServicesConfig;
  private _scheduledTime?: googleProtobuf005.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ScheduledCaller to deeply clone from
   */
  constructor(_value?: RecursivePartial<ScheduledCaller.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.callName = _value.callName;
    this.sipConfig = _value.sipConfig
      ? new SipBaseConfig(_value.sipConfig)
      : undefined;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.scheduledTime = _value.scheduledTime
      ? new googleProtobuf005.Timestamp(_value.scheduledTime)
      : undefined;
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
  get sipConfig(): SipBaseConfig | undefined {
    return this._sipConfig;
  }
  set sipConfig(value: SipBaseConfig | undefined) {
    this._sipConfig = value;
  }
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
    this._commonServicesConfig = value;
  }
  get scheduledTime(): googleProtobuf005.Timestamp | undefined {
    return this._scheduledTime;
  }
  set scheduledTime(value: googleProtobuf005.Timestamp | undefined) {
    this._scheduledTime = value;
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
        : null
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
    sipConfig?: SipBaseConfig.AsObject;
    commonServicesConfig?: CommonServicesConfig.AsObject;
    scheduledTime?: googleProtobuf005.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ScheduledCaller
   */
  export interface AsProtobufJSON {
    name: string;
    callName: string;
    sipConfig: SipBaseConfig.AsProtobufJSON | null;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
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
  }

  private _vtsiProjectName: string;
  private _callName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
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
      callName: this.callName
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
      callName: this.callName
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
  }

  /**
   * Protobuf JSON representation for StopCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
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
  }

  private _vtsiProjectName: string;
  private _callNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callNames = (_value.callNames || []).slice();
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
      callNames: (this.callNames || []).slice()
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
      callNames: (this.callNames || []).slice()
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
  }

  /**
   * Protobuf JSON representation for StopCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callNames: string[];
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
  }

  private _vtsiProjectName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StopAllCallsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StopAllCallsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    StopAllCallsRequest.refineValues(this);
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
    StopAllCallsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StopAllCallsRequest.AsObject {
    return {
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
  ): StopAllCallsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName
    };
  }
}
export module StopAllCallsRequest {
  /**
   * Standard JavaScript object representation for StopAllCallsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
  }

  /**
   * Protobuf JSON representation for StopAllCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
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
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _transferId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TransferCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TransferCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.transferId = _value.transferId;
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
      transferId: this.transferId
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
      transferId: this.transferId
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
  }

  /**
   * Protobuf JSON representation for TransferCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
  }
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
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _transferId: string;
  private _errorMessage: string;

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
  ): TransferCallResponse.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      callName: this.callName,
      transferId: this.transferId,
      errorMessage: this.errorMessage
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
  }

  /**
   * Protobuf JSON representation for TransferCallResponse
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    transferId: string;
    errorMessage: string;
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
    _instance.callView = _instance.callView || 0;
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
    if (_instance.callView) {
      _writer.writeEnum(3, _instance.callView);
    }
  }

  private _vtsiProjectName: string;
  private _callName: string;
  private _callView: CallView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCallRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCallRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.callName = _value.callName;
    this.callView = _value.callView;
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
      callView: this.callView
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
        ]
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
  }

  /**
   * Protobuf JSON representation for GetCallRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callName: string;
    callView: string;
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
    _instance.sipPort = _instance.sipPort || 0;
    _instance.csiPort = _instance.csiPort || 0;
    _instance.nluSessionName = _instance.nluSessionName || '';
    _instance.platforms = _instance.platforms || 0;
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
          _instance.sipStatus = new ondewoSip013.SipStatus();
          _reader.readMessage(
            _instance.sipStatus,
            ondewoSip013.SipStatus.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.sipStatusHistory = new ondewoSip013.SipStatusHistoryResponse();
          _reader.readMessage(
            _instance.sipStatusHistory,
            ondewoSip013.SipStatusHistoryResponse.deserializeBinaryFromReader
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
          _instance.commonServicesConfig = new CommonServicesConfig();
          _reader.readMessage(
            _instance.commonServicesConfig,
            CommonServicesConfig.deserializeBinaryFromReader
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
        ondewoSip013.SipStatus.serializeBinaryToWriter
      );
    }
    if (_instance.sipStatusHistory) {
      _writer.writeMessage(
        10,
        _instance.sipStatusHistory as any,
        ondewoSip013.SipStatusHistoryResponse.serializeBinaryToWriter
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
        CommonServicesConfig.serializeBinaryToWriter
      );
    }
    if (_instance.sipPort) {
      _writer.writeInt32(15, _instance.sipPort);
    }
    if (_instance.csiPort) {
      _writer.writeInt32(16, _instance.csiPort);
    }
    if (_instance.nluSessionName) {
      _writer.writeString(17, _instance.nluSessionName);
    }
    if (_instance.platforms) {
      _writer.writeEnum(18, _instance.platforms);
    }
  }

  private _name: string;
  private _sipAccount: string;
  private _containerName: string;
  private _callType: CallType;
  private _phoneNumber: string;
  private _startTime?: googleProtobuf005.Timestamp;
  private _endTime?: googleProtobuf005.Timestamp;
  private _sipStatusType: ondewoSip013.SipStatus.StatusType;
  private _sipStatus?: ondewoSip013.SipStatus;
  private _sipStatusHistory?: ondewoSip013.SipStatusHistoryResponse;
  private _servicesStatuses?: AllServicesStatuses;
  private _active: boolean;
  private _vtsiProjectName: string;
  private _commonServicesConfig?: CommonServicesConfig;
  private _sipPort: number;
  private _csiPort: number;
  private _nluSessionName: string;
  private _platforms: ondewoNlu010.Intent.Message.Platform;

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
      ? new ondewoSip013.SipStatus(_value.sipStatus)
      : undefined;
    this.sipStatusHistory = _value.sipStatusHistory
      ? new ondewoSip013.SipStatusHistoryResponse(_value.sipStatusHistory)
      : undefined;
    this.servicesStatuses = _value.servicesStatuses
      ? new AllServicesStatuses(_value.servicesStatuses)
      : undefined;
    this.active = _value.active;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.commonServicesConfig = _value.commonServicesConfig
      ? new CommonServicesConfig(_value.commonServicesConfig)
      : undefined;
    this.sipPort = _value.sipPort;
    this.csiPort = _value.csiPort;
    this.nluSessionName = _value.nluSessionName;
    this.platforms = _value.platforms;
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
  get sipStatusType(): ondewoSip013.SipStatus.StatusType {
    return this._sipStatusType;
  }
  set sipStatusType(value: ondewoSip013.SipStatus.StatusType) {
    this._sipStatusType = value;
  }
  get sipStatus(): ondewoSip013.SipStatus | undefined {
    return this._sipStatus;
  }
  set sipStatus(value: ondewoSip013.SipStatus | undefined) {
    this._sipStatus = value;
  }
  get sipStatusHistory(): ondewoSip013.SipStatusHistoryResponse | undefined {
    return this._sipStatusHistory;
  }
  set sipStatusHistory(
    value: ondewoSip013.SipStatusHistoryResponse | undefined
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
  get commonServicesConfig(): CommonServicesConfig | undefined {
    return this._commonServicesConfig;
  }
  set commonServicesConfig(value: CommonServicesConfig | undefined) {
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
  get platforms(): ondewoNlu010.Intent.Message.Platform {
    return this._platforms;
  }
  set platforms(value: ondewoNlu010.Intent.Message.Platform) {
    this._platforms = value;
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
      platforms: this.platforms
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
        ondewoSip013.SipStatus.StatusType[
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
        ondewoNlu010.Intent.Message.Platform[
          this.platforms === null || this.platforms === undefined
            ? 0
            : this.platforms
        ]
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
    sipStatusType: ondewoSip013.SipStatus.StatusType;
    sipStatus?: ondewoSip013.SipStatus.AsObject;
    sipStatusHistory?: ondewoSip013.SipStatusHistoryResponse.AsObject;
    servicesStatuses?: AllServicesStatuses.AsObject;
    active: boolean;
    vtsiProjectName: string;
    commonServicesConfig?: CommonServicesConfig.AsObject;
    sipPort: number;
    csiPort: number;
    nluSessionName: string;
    platforms: ondewoNlu010.Intent.Message.Platform;
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
    sipStatus: ondewoSip013.SipStatus.AsProtobufJSON | null;
    sipStatusHistory: ondewoSip013.SipStatusHistoryResponse.AsProtobufJSON | null;
    servicesStatuses: AllServicesStatuses.AsProtobufJSON | null;
    active: boolean;
    vtsiProjectName: string;
    commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    sipPort: number;
    csiPort: number;
    nluSessionName: string;
    platforms: string;
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
    _instance.callStatus = _instance.callStatus || 0;
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.durationInSMin = _instance.durationInSMin || 0;
    _instance.durationInSMax = _instance.durationInSMax || 0;
    _instance.platforms = _instance.platforms || [];
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
    if (_instance.callStatus) {
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
    if (_instance.durationInSMin) {
      _writer.writeFloat(13, _instance.durationInSMin);
    }
    if (_instance.durationInSMax) {
      _writer.writeFloat(14, _instance.durationInSMax);
    }
    if (_instance.platforms && _instance.platforms.length) {
      _writer.writePackedEnum(15, _instance.platforms);
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
  private _sipStatusTypes: ondewoSip013.SipStatus.StatusType[];
  private _callStatus: CallStatus;
  private _startTime?: googleProtobuf005.Timestamp;
  private _endTime?: googleProtobuf005.Timestamp;
  private _durationInSMin: number;
  private _durationInSMax: number;
  private _platforms: ondewoNlu010.Intent.Message.Platform[];

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
  get sipStatusTypes(): ondewoSip013.SipStatus.StatusType[] {
    return this._sipStatusTypes;
  }
  set sipStatusTypes(value: ondewoSip013.SipStatus.StatusType[]) {
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
  get platforms(): ondewoNlu010.Intent.Message.Platform[] {
    return this._platforms;
  }
  set platforms(value: ondewoNlu010.Intent.Message.Platform[]) {
    this._platforms = value;
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
      platforms: (this.platforms || []).slice()
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
        v => ondewoSip013.SipStatus.StatusType[v]
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
        v => ondewoNlu010.Intent.Message.Platform[v]
      )
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
    sipStatusTypes: ondewoSip013.SipStatus.StatusType[];
    callStatus: CallStatus;
    startTime?: googleProtobuf005.Timestamp.AsObject;
    endTime?: googleProtobuf005.Timestamp.AsObject;
    durationInSMin: number;
    durationInSMax: number;
    platforms: ondewoNlu010.Intent.Message.Platform[];
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
    _instance.callView = _instance.callView || 0;
    _instance.callFilter = _instance.callFilter || undefined;
    _instance.pageToken = _instance.pageToken || '';
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
    if (_instance.callView) {
      _writer.writeEnum(2, _instance.callView);
    }
    if (_instance.callFilter) {
      _writer.writeMessage(
        3,
        _instance.callFilter as any,
        CallFilter.serializeBinaryToWriter
      );
    }
    if (_instance.pageToken) {
      _writer.writeString(4, _instance.pageToken);
    }
  }

  private _vtsiProjectName: string;
  private _callView: CallView;
  private _callFilter?: CallFilter;
  private _pageToken: string;

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
      pageToken: this.pageToken
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
  }

  /**
   * Protobuf JSON representation for ListCallsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    callView: string;
    callFilter: CallFilter.AsProtobufJSON | null;
    pageToken: string;
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
  }

  private _calls?: Call[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCallsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCallsResponse.AsObject>) {
    _value = _value || {};
    this.calls = (_value.calls || []).map(m => new Call(m));
    this.nextPageToken = _value.nextPageToken;
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
  ): ListCallsResponse.AsProtobufJSON {
    return {
      calls: (this.calls || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
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
  }

  /**
   * Protobuf JSON representation for ListCallsResponse
   */
  export interface AsProtobufJSON {
    calls: Call.AsProtobufJSON[] | null;
    nextPageToken: string;
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
