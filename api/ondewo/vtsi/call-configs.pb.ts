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
import * as googleApi000 from '../../google/api/annotations.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu004 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/operations.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t009 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s010 from '../../ondewo/t2s/text-to-speech.pb';
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
          const messageInitializer7 = new ondewoNlu004.Context();
          _reader.readMessage(
            messageInitializer7,
            ondewoNlu004.Context.deserializeBinaryFromReader
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
        ondewoNlu004.Context.serializeBinaryToWriter
      );
    }
    if (_instance.httpBasicAuthToken) {
      _writer.writeString(8, _instance.httpBasicAuthToken);
    }
    if (_instance.platform !== undefined && _instance.platform !== null) {
      _writer.writeEnum(9, _instance.platform);
    }
  }

  private _nluBaseConfig?: BaseServiceConfig;
  private _credentials?: Credentials;
  private _authToken: string;
  private _agentName: string;
  private _languageCode: string;
  private _initialIntent: string;
  private _contexts?: ondewoNlu004.Context[];
  private _httpBasicAuthToken: string;
  private _platform: ondewoNlu008.Intent.Message.Platform;

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
      m => new ondewoNlu004.Context(m)
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
  get contexts(): ondewoNlu004.Context[] | undefined {
    return this._contexts;
  }
  set contexts(value: ondewoNlu004.Context[] | undefined) {
    this._contexts = value;
  }
  get httpBasicAuthToken(): string {
    return this._httpBasicAuthToken;
  }
  set httpBasicAuthToken(value: string) {
    this._httpBasicAuthToken = value;
  }
  get platform(): ondewoNlu008.Intent.Message.Platform {
    return this._platform;
  }
  set platform(value: ondewoNlu008.Intent.Message.Platform) {
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
        ondewoNlu008.Intent.Message.Platform[
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
    contexts?: ondewoNlu004.Context.AsObject[];
    httpBasicAuthToken: string;
    platform: ondewoNlu008.Intent.Message.Platform;
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
    contexts: ondewoNlu004.Context.AsProtobufJSON[] | null;
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
          _instance.t2sRequestConfig = new ondewoT2s010.RequestConfig();
          _reader.readMessage(
            _instance.t2sRequestConfig,
            ondewoT2s010.RequestConfig.deserializeBinaryFromReader
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
        ondewoT2s010.RequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _t2sBaseConfig?: BaseServiceConfig;
  private _t2sRequestConfig?: ondewoT2s010.RequestConfig;

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
      ? new ondewoT2s010.RequestConfig(_value.t2sRequestConfig)
      : undefined;
    T2sVtsiConfig.refineValues(this);
  }
  get t2sBaseConfig(): BaseServiceConfig | undefined {
    return this._t2sBaseConfig;
  }
  set t2sBaseConfig(value: BaseServiceConfig | undefined) {
    this._t2sBaseConfig = value;
  }
  get t2sRequestConfig(): ondewoT2s010.RequestConfig | undefined {
    return this._t2sRequestConfig;
  }
  set t2sRequestConfig(value: ondewoT2s010.RequestConfig | undefined) {
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
    t2sRequestConfig?: ondewoT2s010.RequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for T2sVtsiConfig
   */
  export interface AsProtobufJSON {
    t2sBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    t2sRequestConfig: ondewoT2s010.RequestConfig.AsProtobufJSON | null;
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
          _instance.s2tTranscribeRequestConfig = new ondewoS2t009.TranscribeRequestConfig();
          _reader.readMessage(
            _instance.s2tTranscribeRequestConfig,
            ondewoS2t009.TranscribeRequestConfig.deserializeBinaryFromReader
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
        ondewoS2t009.TranscribeRequestConfig.serializeBinaryToWriter
      );
    }
  }

  private _s2tBaseConfig?: BaseServiceConfig;
  private _s2tTranscribeRequestConfig?: ondewoS2t009.TranscribeRequestConfig;

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
      ? new ondewoS2t009.TranscribeRequestConfig(
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
    | ondewoS2t009.TranscribeRequestConfig
    | undefined {
    return this._s2tTranscribeRequestConfig;
  }
  set s2tTranscribeRequestConfig(
    value: ondewoS2t009.TranscribeRequestConfig | undefined
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
    s2tTranscribeRequestConfig?: ondewoS2t009.TranscribeRequestConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for S2tVtsiConfig
   */
  export interface AsProtobufJSON {
    s2tBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    s2tTranscribeRequestConfig: ondewoS2t009.TranscribeRequestConfig.AsProtobufJSON | null;
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
    _instance.voiceInteractionConfig =
      _instance.voiceInteractionConfig || undefined;
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
        case 5:
          _instance.voiceInteractionConfig = new VoiceInteractionConfig();
          _reader.readMessage(
            _instance.voiceInteractionConfig,
            VoiceInteractionConfig.deserializeBinaryFromReader
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
    if (_instance.voiceInteractionConfig) {
      _writer.writeMessage(
        5,
        _instance.voiceInteractionConfig as any,
        VoiceInteractionConfig.serializeBinaryToWriter
      );
    }
  }

  private _s2tVtsiConfig?: S2tVtsiConfig;
  private _nluVtsiConfig?: NluVtsiConfig;
  private _t2sVtsiConfig?: T2sVtsiConfig;
  private _csiVtsiConfig?: CsiVtsiConfig;
  private _voiceInteractionConfig?: VoiceInteractionConfig;

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
    this.voiceInteractionConfig = _value.voiceInteractionConfig
      ? new VoiceInteractionConfig(_value.voiceInteractionConfig)
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
  get voiceInteractionConfig(): VoiceInteractionConfig | undefined {
    return this._voiceInteractionConfig;
  }
  set voiceInteractionConfig(value: VoiceInteractionConfig | undefined) {
    this._voiceInteractionConfig = value;
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
        : undefined,
      voiceInteractionConfig: this.voiceInteractionConfig
        ? this.voiceInteractionConfig.toObject()
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
        : null,
      voiceInteractionConfig: this.voiceInteractionConfig
        ? this.voiceInteractionConfig.toProtobufJSON(options)
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
    voiceInteractionConfig?: VoiceInteractionConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for CommonServicesConfig
   */
  export interface AsProtobufJSON {
    s2tVtsiConfig: S2tVtsiConfig.AsProtobufJSON | null;
    nluVtsiConfig: NluVtsiConfig.AsProtobufJSON | null;
    t2sVtsiConfig: T2sVtsiConfig.AsProtobufJSON | null;
    csiVtsiConfig: CsiVtsiConfig.AsProtobufJSON | null;
    voiceInteractionConfig: VoiceInteractionConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.VoiceInteractionConfig
 */
export class VoiceInteractionConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.VoiceInteractionConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VoiceInteractionConfig();
    VoiceInteractionConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VoiceInteractionConfig) {
    _instance.turnDetectionConfig = _instance.turnDetectionConfig || undefined;
    _instance.interruptionHandlingConfig =
      _instance.interruptionHandlingConfig || undefined;
    _instance.responseTimingConfig =
      _instance.responseTimingConfig || undefined;
    _instance.answeringMachineDetectionConfig =
      _instance.answeringMachineDetectionConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VoiceInteractionConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.turnDetectionConfig = new TurnDetectionConfig();
          _reader.readMessage(
            _instance.turnDetectionConfig,
            TurnDetectionConfig.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.interruptionHandlingConfig = new InterruptionHandlingConfig();
          _reader.readMessage(
            _instance.interruptionHandlingConfig,
            InterruptionHandlingConfig.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.responseTimingConfig = new ResponseTimingConfig();
          _reader.readMessage(
            _instance.responseTimingConfig,
            ResponseTimingConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.answeringMachineDetectionConfig = new AnsweringMachineDetectionConfig();
          _reader.readMessage(
            _instance.answeringMachineDetectionConfig,
            AnsweringMachineDetectionConfig.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    VoiceInteractionConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VoiceInteractionConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.turnDetectionConfig) {
      _writer.writeMessage(
        1,
        _instance.turnDetectionConfig as any,
        TurnDetectionConfig.serializeBinaryToWriter
      );
    }
    if (_instance.interruptionHandlingConfig) {
      _writer.writeMessage(
        2,
        _instance.interruptionHandlingConfig as any,
        InterruptionHandlingConfig.serializeBinaryToWriter
      );
    }
    if (_instance.responseTimingConfig) {
      _writer.writeMessage(
        3,
        _instance.responseTimingConfig as any,
        ResponseTimingConfig.serializeBinaryToWriter
      );
    }
    if (_instance.answeringMachineDetectionConfig) {
      _writer.writeMessage(
        4,
        _instance.answeringMachineDetectionConfig as any,
        AnsweringMachineDetectionConfig.serializeBinaryToWriter
      );
    }
  }

  private _turnDetectionConfig?: TurnDetectionConfig;
  private _interruptionHandlingConfig?: InterruptionHandlingConfig;
  private _responseTimingConfig?: ResponseTimingConfig;
  private _answeringMachineDetectionConfig?: AnsweringMachineDetectionConfig;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VoiceInteractionConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<VoiceInteractionConfig.AsObject>) {
    _value = _value || {};
    this.turnDetectionConfig = _value.turnDetectionConfig
      ? new TurnDetectionConfig(_value.turnDetectionConfig)
      : undefined;
    this.interruptionHandlingConfig = _value.interruptionHandlingConfig
      ? new InterruptionHandlingConfig(_value.interruptionHandlingConfig)
      : undefined;
    this.responseTimingConfig = _value.responseTimingConfig
      ? new ResponseTimingConfig(_value.responseTimingConfig)
      : undefined;
    this.answeringMachineDetectionConfig = _value.answeringMachineDetectionConfig
      ? new AnsweringMachineDetectionConfig(
          _value.answeringMachineDetectionConfig
        )
      : undefined;
    VoiceInteractionConfig.refineValues(this);
  }
  get turnDetectionConfig(): TurnDetectionConfig | undefined {
    return this._turnDetectionConfig;
  }
  set turnDetectionConfig(value: TurnDetectionConfig | undefined) {
    this._turnDetectionConfig = value;
  }
  get interruptionHandlingConfig(): InterruptionHandlingConfig | undefined {
    return this._interruptionHandlingConfig;
  }
  set interruptionHandlingConfig(
    value: InterruptionHandlingConfig | undefined
  ) {
    this._interruptionHandlingConfig = value;
  }
  get responseTimingConfig(): ResponseTimingConfig | undefined {
    return this._responseTimingConfig;
  }
  set responseTimingConfig(value: ResponseTimingConfig | undefined) {
    this._responseTimingConfig = value;
  }
  get answeringMachineDetectionConfig():
    | AnsweringMachineDetectionConfig
    | undefined {
    return this._answeringMachineDetectionConfig;
  }
  set answeringMachineDetectionConfig(
    value: AnsweringMachineDetectionConfig | undefined
  ) {
    this._answeringMachineDetectionConfig = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VoiceInteractionConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VoiceInteractionConfig.AsObject {
    return {
      turnDetectionConfig: this.turnDetectionConfig
        ? this.turnDetectionConfig.toObject()
        : undefined,
      interruptionHandlingConfig: this.interruptionHandlingConfig
        ? this.interruptionHandlingConfig.toObject()
        : undefined,
      responseTimingConfig: this.responseTimingConfig
        ? this.responseTimingConfig.toObject()
        : undefined,
      answeringMachineDetectionConfig: this.answeringMachineDetectionConfig
        ? this.answeringMachineDetectionConfig.toObject()
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
  ): VoiceInteractionConfig.AsProtobufJSON {
    return {
      turnDetectionConfig: this.turnDetectionConfig
        ? this.turnDetectionConfig.toProtobufJSON(options)
        : null,
      interruptionHandlingConfig: this.interruptionHandlingConfig
        ? this.interruptionHandlingConfig.toProtobufJSON(options)
        : null,
      responseTimingConfig: this.responseTimingConfig
        ? this.responseTimingConfig.toProtobufJSON(options)
        : null,
      answeringMachineDetectionConfig: this.answeringMachineDetectionConfig
        ? this.answeringMachineDetectionConfig.toProtobufJSON(options)
        : null
    };
  }
}
export module VoiceInteractionConfig {
  /**
   * Standard JavaScript object representation for VoiceInteractionConfig
   */
  export interface AsObject {
    turnDetectionConfig?: TurnDetectionConfig.AsObject;
    interruptionHandlingConfig?: InterruptionHandlingConfig.AsObject;
    responseTimingConfig?: ResponseTimingConfig.AsObject;
    answeringMachineDetectionConfig?: AnsweringMachineDetectionConfig.AsObject;
  }

  /**
   * Protobuf JSON representation for VoiceInteractionConfig
   */
  export interface AsProtobufJSON {
    turnDetectionConfig: TurnDetectionConfig.AsProtobufJSON | null;
    interruptionHandlingConfig: InterruptionHandlingConfig.AsProtobufJSON | null;
    responseTimingConfig: ResponseTimingConfig.AsProtobufJSON | null;
    answeringMachineDetectionConfig: AnsweringMachineDetectionConfig.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.TurnDetectionConfig
 */
export class TurnDetectionConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.TurnDetectionConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TurnDetectionConfig();
    TurnDetectionConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TurnDetectionConfig) {
    _instance.mode = _instance.mode || 0;
    _instance.turnEagerness = _instance.turnEagerness || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TurnDetectionConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.mode = _reader.readEnum();
          break;
        case 2:
          _instance.minEndpointingDelaySeconds = _reader.readFloat();
          break;
        case 3:
          _instance.maxEndpointingDelaySeconds = _reader.readFloat();
          break;
        case 4:
          _instance.turnEagerness = _reader.readEnum();
          break;
        case 5:
          _instance.turnDetectionSystemPrompt = _reader.readString();
          break;
        case 6:
          _instance.turnDetectionUserPrompt = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TurnDetectionConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TurnDetectionConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.mode) {
      _writer.writeEnum(1, _instance.mode);
    }
    if (
      _instance.minEndpointingDelaySeconds !== undefined &&
      _instance.minEndpointingDelaySeconds !== null
    ) {
      _writer.writeFloat(2, _instance.minEndpointingDelaySeconds);
    }
    if (
      _instance.maxEndpointingDelaySeconds !== undefined &&
      _instance.maxEndpointingDelaySeconds !== null
    ) {
      _writer.writeFloat(3, _instance.maxEndpointingDelaySeconds);
    }
    if (_instance.turnEagerness) {
      _writer.writeEnum(4, _instance.turnEagerness);
    }
    if (
      _instance.turnDetectionSystemPrompt !== undefined &&
      _instance.turnDetectionSystemPrompt !== null
    ) {
      _writer.writeString(5, _instance.turnDetectionSystemPrompt);
    }
    if (
      _instance.turnDetectionUserPrompt !== undefined &&
      _instance.turnDetectionUserPrompt !== null
    ) {
      _writer.writeString(6, _instance.turnDetectionUserPrompt);
    }
  }

  private _mode: TurnDetectionConfig.TurnDetectionMode;
  private _minEndpointingDelaySeconds: number;
  private _maxEndpointingDelaySeconds: number;
  private _turnEagerness: TurnDetectionConfig.TurnEagerness;
  private _turnDetectionSystemPrompt: string;
  private _turnDetectionUserPrompt: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TurnDetectionConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<TurnDetectionConfig.AsObject>) {
    _value = _value || {};
    this.mode = _value.mode;
    this.minEndpointingDelaySeconds = _value.minEndpointingDelaySeconds;
    this.maxEndpointingDelaySeconds = _value.maxEndpointingDelaySeconds;
    this.turnEagerness = _value.turnEagerness;
    this.turnDetectionSystemPrompt = _value.turnDetectionSystemPrompt;
    this.turnDetectionUserPrompt = _value.turnDetectionUserPrompt;
    TurnDetectionConfig.refineValues(this);
  }
  get mode(): TurnDetectionConfig.TurnDetectionMode {
    return this._mode;
  }
  set mode(value: TurnDetectionConfig.TurnDetectionMode) {
    this._mode = value;
  }
  get minEndpointingDelaySeconds(): number {
    return this._minEndpointingDelaySeconds;
  }
  set minEndpointingDelaySeconds(value: number) {
    this._minEndpointingDelaySeconds = value;
  }
  get maxEndpointingDelaySeconds(): number {
    return this._maxEndpointingDelaySeconds;
  }
  set maxEndpointingDelaySeconds(value: number) {
    this._maxEndpointingDelaySeconds = value;
  }
  get turnEagerness(): TurnDetectionConfig.TurnEagerness {
    return this._turnEagerness;
  }
  set turnEagerness(value: TurnDetectionConfig.TurnEagerness) {
    this._turnEagerness = value;
  }
  get turnDetectionSystemPrompt(): string {
    return this._turnDetectionSystemPrompt;
  }
  set turnDetectionSystemPrompt(value: string) {
    this._turnDetectionSystemPrompt = value;
  }
  get turnDetectionUserPrompt(): string {
    return this._turnDetectionUserPrompt;
  }
  set turnDetectionUserPrompt(value: string) {
    this._turnDetectionUserPrompt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TurnDetectionConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TurnDetectionConfig.AsObject {
    return {
      mode: this.mode,
      minEndpointingDelaySeconds: this.minEndpointingDelaySeconds,
      maxEndpointingDelaySeconds: this.maxEndpointingDelaySeconds,
      turnEagerness: this.turnEagerness,
      turnDetectionSystemPrompt: this.turnDetectionSystemPrompt,
      turnDetectionUserPrompt: this.turnDetectionUserPrompt
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TurnDetectionConfig.AsProtobufJSON {
    return {
      mode:
        TurnDetectionConfig.TurnDetectionMode[
          this.mode === null || this.mode === undefined ? 0 : this.mode
        ],
      minEndpointingDelaySeconds: this.minEndpointingDelaySeconds,
      maxEndpointingDelaySeconds: this.maxEndpointingDelaySeconds,
      turnEagerness:
        TurnDetectionConfig.TurnEagerness[
          this.turnEagerness === null || this.turnEagerness === undefined
            ? 0
            : this.turnEagerness
        ],
      turnDetectionSystemPrompt: this.turnDetectionSystemPrompt,
      turnDetectionUserPrompt: this.turnDetectionUserPrompt
    };
  }
}
export module TurnDetectionConfig {
  /**
   * Standard JavaScript object representation for TurnDetectionConfig
   */
  export interface AsObject {
    mode: TurnDetectionConfig.TurnDetectionMode;
    minEndpointingDelaySeconds: number;
    maxEndpointingDelaySeconds: number;
    turnEagerness: TurnDetectionConfig.TurnEagerness;
    turnDetectionSystemPrompt: string;
    turnDetectionUserPrompt: string;
  }

  /**
   * Protobuf JSON representation for TurnDetectionConfig
   */
  export interface AsProtobufJSON {
    mode: string;
    minEndpointingDelaySeconds: number;
    maxEndpointingDelaySeconds: number;
    turnEagerness: string;
    turnDetectionSystemPrompt: string;
    turnDetectionUserPrompt: string;
  }
  export enum TurnDetectionMode {
    TURN_DETECTION_MODE_UNSPECIFIED = 0,
    VAD = 1,
    SEMANTIC_MODEL = 2,
    AUDIO_MODEL = 3
  }
  export enum TurnEagerness {
    TURN_EAGERNESS_UNSPECIFIED = 0,
    PATIENT = 1,
    NORMAL = 2,
    EAGER = 3
  }
}

/**
 * Message implementation for ondewo.vtsi.InterruptionHandlingConfig
 */
export class InterruptionHandlingConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.InterruptionHandlingConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InterruptionHandlingConfig();
    InterruptionHandlingConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InterruptionHandlingConfig) {
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InterruptionHandlingConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.enabled = _reader.readBool();
          break;
        case 2:
          _instance.minInterruptionDurationSeconds = _reader.readFloat();
          break;
        case 3:
          _instance.minInterruptionWords = _reader.readInt32();
          break;
        case 4:
          _instance.falseInterruptionTimeoutSeconds = _reader.readFloat();
          break;
        case 5:
          _instance.resumeAfterFalseInterruption = _reader.readBool();
          break;
        case 6:
          _instance.backoffSeconds = _reader.readFloat();
          break;
        case 7:
          _instance.firstMessageProtectedSeconds = _reader.readFloat();
          break;
        case 8:
          _instance.transcribeOnDisabledInterruptions = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    InterruptionHandlingConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InterruptionHandlingConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.enabled !== undefined && _instance.enabled !== null) {
      _writer.writeBool(1, _instance.enabled);
    }
    if (
      _instance.minInterruptionDurationSeconds !== undefined &&
      _instance.minInterruptionDurationSeconds !== null
    ) {
      _writer.writeFloat(2, _instance.minInterruptionDurationSeconds);
    }
    if (
      _instance.minInterruptionWords !== undefined &&
      _instance.minInterruptionWords !== null
    ) {
      _writer.writeInt32(3, _instance.minInterruptionWords);
    }
    if (
      _instance.falseInterruptionTimeoutSeconds !== undefined &&
      _instance.falseInterruptionTimeoutSeconds !== null
    ) {
      _writer.writeFloat(4, _instance.falseInterruptionTimeoutSeconds);
    }
    if (
      _instance.resumeAfterFalseInterruption !== undefined &&
      _instance.resumeAfterFalseInterruption !== null
    ) {
      _writer.writeBool(5, _instance.resumeAfterFalseInterruption);
    }
    if (
      _instance.backoffSeconds !== undefined &&
      _instance.backoffSeconds !== null
    ) {
      _writer.writeFloat(6, _instance.backoffSeconds);
    }
    if (
      _instance.firstMessageProtectedSeconds !== undefined &&
      _instance.firstMessageProtectedSeconds !== null
    ) {
      _writer.writeFloat(7, _instance.firstMessageProtectedSeconds);
    }
    if (
      _instance.transcribeOnDisabledInterruptions !== undefined &&
      _instance.transcribeOnDisabledInterruptions !== null
    ) {
      _writer.writeBool(8, _instance.transcribeOnDisabledInterruptions);
    }
  }

  private _enabled: boolean;
  private _minInterruptionDurationSeconds: number;
  private _minInterruptionWords: number;
  private _falseInterruptionTimeoutSeconds: number;
  private _resumeAfterFalseInterruption: boolean;
  private _backoffSeconds: number;
  private _firstMessageProtectedSeconds: number;
  private _transcribeOnDisabledInterruptions: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InterruptionHandlingConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<InterruptionHandlingConfig.AsObject>) {
    _value = _value || {};
    this.enabled = _value.enabled;
    this.minInterruptionDurationSeconds = _value.minInterruptionDurationSeconds;
    this.minInterruptionWords = _value.minInterruptionWords;
    this.falseInterruptionTimeoutSeconds =
      _value.falseInterruptionTimeoutSeconds;
    this.resumeAfterFalseInterruption = _value.resumeAfterFalseInterruption;
    this.backoffSeconds = _value.backoffSeconds;
    this.firstMessageProtectedSeconds = _value.firstMessageProtectedSeconds;
    this.transcribeOnDisabledInterruptions =
      _value.transcribeOnDisabledInterruptions;
    InterruptionHandlingConfig.refineValues(this);
  }
  get enabled(): boolean {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
  get minInterruptionDurationSeconds(): number {
    return this._minInterruptionDurationSeconds;
  }
  set minInterruptionDurationSeconds(value: number) {
    this._minInterruptionDurationSeconds = value;
  }
  get minInterruptionWords(): number {
    return this._minInterruptionWords;
  }
  set minInterruptionWords(value: number) {
    this._minInterruptionWords = value;
  }
  get falseInterruptionTimeoutSeconds(): number {
    return this._falseInterruptionTimeoutSeconds;
  }
  set falseInterruptionTimeoutSeconds(value: number) {
    this._falseInterruptionTimeoutSeconds = value;
  }
  get resumeAfterFalseInterruption(): boolean {
    return this._resumeAfterFalseInterruption;
  }
  set resumeAfterFalseInterruption(value: boolean) {
    this._resumeAfterFalseInterruption = value;
  }
  get backoffSeconds(): number {
    return this._backoffSeconds;
  }
  set backoffSeconds(value: number) {
    this._backoffSeconds = value;
  }
  get firstMessageProtectedSeconds(): number {
    return this._firstMessageProtectedSeconds;
  }
  set firstMessageProtectedSeconds(value: number) {
    this._firstMessageProtectedSeconds = value;
  }
  get transcribeOnDisabledInterruptions(): boolean {
    return this._transcribeOnDisabledInterruptions;
  }
  set transcribeOnDisabledInterruptions(value: boolean) {
    this._transcribeOnDisabledInterruptions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InterruptionHandlingConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InterruptionHandlingConfig.AsObject {
    return {
      enabled: this.enabled,
      minInterruptionDurationSeconds: this.minInterruptionDurationSeconds,
      minInterruptionWords: this.minInterruptionWords,
      falseInterruptionTimeoutSeconds: this.falseInterruptionTimeoutSeconds,
      resumeAfterFalseInterruption: this.resumeAfterFalseInterruption,
      backoffSeconds: this.backoffSeconds,
      firstMessageProtectedSeconds: this.firstMessageProtectedSeconds,
      transcribeOnDisabledInterruptions: this.transcribeOnDisabledInterruptions
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): InterruptionHandlingConfig.AsProtobufJSON {
    return {
      enabled: this.enabled,
      minInterruptionDurationSeconds: this.minInterruptionDurationSeconds,
      minInterruptionWords: this.minInterruptionWords,
      falseInterruptionTimeoutSeconds: this.falseInterruptionTimeoutSeconds,
      resumeAfterFalseInterruption: this.resumeAfterFalseInterruption,
      backoffSeconds: this.backoffSeconds,
      firstMessageProtectedSeconds: this.firstMessageProtectedSeconds,
      transcribeOnDisabledInterruptions: this.transcribeOnDisabledInterruptions
    };
  }
}
export module InterruptionHandlingConfig {
  /**
   * Standard JavaScript object representation for InterruptionHandlingConfig
   */
  export interface AsObject {
    enabled: boolean;
    minInterruptionDurationSeconds: number;
    minInterruptionWords: number;
    falseInterruptionTimeoutSeconds: number;
    resumeAfterFalseInterruption: boolean;
    backoffSeconds: number;
    firstMessageProtectedSeconds: number;
    transcribeOnDisabledInterruptions: boolean;
  }

  /**
   * Protobuf JSON representation for InterruptionHandlingConfig
   */
  export interface AsProtobufJSON {
    enabled: boolean;
    minInterruptionDurationSeconds: number;
    minInterruptionWords: number;
    falseInterruptionTimeoutSeconds: number;
    resumeAfterFalseInterruption: boolean;
    backoffSeconds: number;
    firstMessageProtectedSeconds: number;
    transcribeOnDisabledInterruptions: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.ResponseTimingConfig
 */
export class ResponseTimingConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.ResponseTimingConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResponseTimingConfig();
    ResponseTimingConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResponseTimingConfig) {
    _instance.softTimeoutConfig = _instance.softTimeoutConfig || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResponseTimingConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.turnTimeoutSeconds = _reader.readFloat();
          break;
        case 2:
          _instance.silenceEndCallTimeoutSeconds = _reader.readFloat();
          break;
        case 3:
          _instance.softTimeoutConfig = new SoftTimeoutConfig();
          _reader.readMessage(
            _instance.softTimeoutConfig,
            SoftTimeoutConfig.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.preemptiveGenerationEnabled = _reader.readBool();
          break;
        case 5:
          _instance.t2sChunkedStreamingEnabled = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    ResponseTimingConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResponseTimingConfig,
    _writer: BinaryWriter
  ) {
    if (
      _instance.turnTimeoutSeconds !== undefined &&
      _instance.turnTimeoutSeconds !== null
    ) {
      _writer.writeFloat(1, _instance.turnTimeoutSeconds);
    }
    if (
      _instance.silenceEndCallTimeoutSeconds !== undefined &&
      _instance.silenceEndCallTimeoutSeconds !== null
    ) {
      _writer.writeFloat(2, _instance.silenceEndCallTimeoutSeconds);
    }
    if (_instance.softTimeoutConfig) {
      _writer.writeMessage(
        3,
        _instance.softTimeoutConfig as any,
        SoftTimeoutConfig.serializeBinaryToWriter
      );
    }
    if (
      _instance.preemptiveGenerationEnabled !== undefined &&
      _instance.preemptiveGenerationEnabled !== null
    ) {
      _writer.writeBool(4, _instance.preemptiveGenerationEnabled);
    }
    if (
      _instance.t2sChunkedStreamingEnabled !== undefined &&
      _instance.t2sChunkedStreamingEnabled !== null
    ) {
      _writer.writeBool(5, _instance.t2sChunkedStreamingEnabled);
    }
  }

  private _turnTimeoutSeconds: number;
  private _silenceEndCallTimeoutSeconds: number;
  private _softTimeoutConfig?: SoftTimeoutConfig;
  private _preemptiveGenerationEnabled: boolean;
  private _t2sChunkedStreamingEnabled: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResponseTimingConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResponseTimingConfig.AsObject>) {
    _value = _value || {};
    this.turnTimeoutSeconds = _value.turnTimeoutSeconds;
    this.silenceEndCallTimeoutSeconds = _value.silenceEndCallTimeoutSeconds;
    this.softTimeoutConfig = _value.softTimeoutConfig
      ? new SoftTimeoutConfig(_value.softTimeoutConfig)
      : undefined;
    this.preemptiveGenerationEnabled = _value.preemptiveGenerationEnabled;
    this.t2sChunkedStreamingEnabled = _value.t2sChunkedStreamingEnabled;
    ResponseTimingConfig.refineValues(this);
  }
  get turnTimeoutSeconds(): number {
    return this._turnTimeoutSeconds;
  }
  set turnTimeoutSeconds(value: number) {
    this._turnTimeoutSeconds = value;
  }
  get silenceEndCallTimeoutSeconds(): number {
    return this._silenceEndCallTimeoutSeconds;
  }
  set silenceEndCallTimeoutSeconds(value: number) {
    this._silenceEndCallTimeoutSeconds = value;
  }
  get softTimeoutConfig(): SoftTimeoutConfig | undefined {
    return this._softTimeoutConfig;
  }
  set softTimeoutConfig(value: SoftTimeoutConfig | undefined) {
    this._softTimeoutConfig = value;
  }
  get preemptiveGenerationEnabled(): boolean {
    return this._preemptiveGenerationEnabled;
  }
  set preemptiveGenerationEnabled(value: boolean) {
    this._preemptiveGenerationEnabled = value;
  }
  get t2sChunkedStreamingEnabled(): boolean {
    return this._t2sChunkedStreamingEnabled;
  }
  set t2sChunkedStreamingEnabled(value: boolean) {
    this._t2sChunkedStreamingEnabled = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResponseTimingConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResponseTimingConfig.AsObject {
    return {
      turnTimeoutSeconds: this.turnTimeoutSeconds,
      silenceEndCallTimeoutSeconds: this.silenceEndCallTimeoutSeconds,
      softTimeoutConfig: this.softTimeoutConfig
        ? this.softTimeoutConfig.toObject()
        : undefined,
      preemptiveGenerationEnabled: this.preemptiveGenerationEnabled,
      t2sChunkedStreamingEnabled: this.t2sChunkedStreamingEnabled
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ResponseTimingConfig.AsProtobufJSON {
    return {
      turnTimeoutSeconds: this.turnTimeoutSeconds,
      silenceEndCallTimeoutSeconds: this.silenceEndCallTimeoutSeconds,
      softTimeoutConfig: this.softTimeoutConfig
        ? this.softTimeoutConfig.toProtobufJSON(options)
        : null,
      preemptiveGenerationEnabled: this.preemptiveGenerationEnabled,
      t2sChunkedStreamingEnabled: this.t2sChunkedStreamingEnabled
    };
  }
}
export module ResponseTimingConfig {
  /**
   * Standard JavaScript object representation for ResponseTimingConfig
   */
  export interface AsObject {
    turnTimeoutSeconds: number;
    silenceEndCallTimeoutSeconds: number;
    softTimeoutConfig?: SoftTimeoutConfig.AsObject;
    preemptiveGenerationEnabled: boolean;
    t2sChunkedStreamingEnabled: boolean;
  }

  /**
   * Protobuf JSON representation for ResponseTimingConfig
   */
  export interface AsProtobufJSON {
    turnTimeoutSeconds: number;
    silenceEndCallTimeoutSeconds: number;
    softTimeoutConfig: SoftTimeoutConfig.AsProtobufJSON | null;
    preemptiveGenerationEnabled: boolean;
    t2sChunkedStreamingEnabled: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.SoftTimeoutConfig
 */
export class SoftTimeoutConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftTimeoutConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftTimeoutConfig();
    SoftTimeoutConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftTimeoutConfig) {
    _instance.messages = _instance.messages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftTimeoutConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timeoutSeconds = _reader.readFloat();
          break;
        case 2:
          (_instance.messages = _instance.messages || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.maxPerGeneration = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    SoftTimeoutConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftTimeoutConfig,
    _writer: BinaryWriter
  ) {
    if (
      _instance.timeoutSeconds !== undefined &&
      _instance.timeoutSeconds !== null
    ) {
      _writer.writeFloat(1, _instance.timeoutSeconds);
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedString(2, _instance.messages);
    }
    if (
      _instance.maxPerGeneration !== undefined &&
      _instance.maxPerGeneration !== null
    ) {
      _writer.writeInt32(3, _instance.maxPerGeneration);
    }
  }

  private _timeoutSeconds: number;
  private _messages: string[];
  private _maxPerGeneration: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftTimeoutConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftTimeoutConfig.AsObject>) {
    _value = _value || {};
    this.timeoutSeconds = _value.timeoutSeconds;
    this.messages = (_value.messages || []).slice();
    this.maxPerGeneration = _value.maxPerGeneration;
    SoftTimeoutConfig.refineValues(this);
  }
  get timeoutSeconds(): number {
    return this._timeoutSeconds;
  }
  set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  get messages(): string[] {
    return this._messages;
  }
  set messages(value: string[]) {
    this._messages = value;
  }
  get maxPerGeneration(): number {
    return this._maxPerGeneration;
  }
  set maxPerGeneration(value: number) {
    this._maxPerGeneration = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftTimeoutConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftTimeoutConfig.AsObject {
    return {
      timeoutSeconds: this.timeoutSeconds,
      messages: (this.messages || []).slice(),
      maxPerGeneration: this.maxPerGeneration
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftTimeoutConfig.AsProtobufJSON {
    return {
      timeoutSeconds: this.timeoutSeconds,
      messages: (this.messages || []).slice(),
      maxPerGeneration: this.maxPerGeneration
    };
  }
}
export module SoftTimeoutConfig {
  /**
   * Standard JavaScript object representation for SoftTimeoutConfig
   */
  export interface AsObject {
    timeoutSeconds: number;
    messages: string[];
    maxPerGeneration: number;
  }

  /**
   * Protobuf JSON representation for SoftTimeoutConfig
   */
  export interface AsProtobufJSON {
    timeoutSeconds: number;
    messages: string[];
    maxPerGeneration: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.AnsweringMachineDetectionConfig
 */
export class AnsweringMachineDetectionConfig implements GrpcMessage {
  static id = 'ondewo.vtsi.AnsweringMachineDetectionConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnsweringMachineDetectionConfig();
    AnsweringMachineDetectionConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnsweringMachineDetectionConfig) {
    _instance.additionalMachinePhrases =
      _instance.additionalMachinePhrases || [];
    _instance.additionalHumanPhrases = _instance.additionalHumanPhrases || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnsweringMachineDetectionConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.active = _reader.readBool();
          break;
        case 2:
          _instance.action = _reader.readEnum();
          break;
        case 3:
          _instance.sensitivity = _reader.readEnum();
          break;
        case 4:
          _instance.maxDecisionTimeMs = _reader.readInt32();
          break;
        case 5:
          _instance.maxMachineWaitMs = _reader.readInt32();
          break;
        case 6:
          _instance.beepWaitAfterGreetingMs = _reader.readInt32();
          break;
        case 7:
          _instance.initialSilenceMs = _reader.readInt32();
          break;
        case 8:
          _instance.maxHumanGreetingMs = _reader.readInt32();
          break;
        case 9:
          _instance.greetingEndSilenceMs = _reader.readInt32();
          break;
        case 10:
          _instance.beepDetectionActive = _reader.readBool();
          break;
        case 11:
          (_instance.additionalMachinePhrases =
            _instance.additionalMachinePhrases || []).push(
            _reader.readString()
          );
          break;
        case 12:
          (_instance.additionalHumanPhrases =
            _instance.additionalHumanPhrases || []).push(_reader.readString());
          break;
        case 13:
          _instance.hangUpOnFax = _reader.readBool();
          break;
        case 14:
          _instance.hangUpOnNetworkAnnouncement = _reader.readBool();
          break;
        case 15:
          _instance.hangUpOnIvr = _reader.readBool();
          break;
        case 16:
          _instance.hangUpOnCallScreening = _reader.readBool();
          break;
        case 17:
          _instance.voiceMessageIntent = _reader.readString();
          break;
        case 18:
          _instance.voiceMessageMaxBeepWaitMs = _reader.readInt32();
          break;
        case 19:
          _instance.voiceMessageTimeoutMs = _reader.readInt32();
          break;
        case 20:
          _instance.keywordDetectionActive = _reader.readBool();
          break;
        case 21:
          _instance.cadenceDetectionActive = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    AnsweringMachineDetectionConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnsweringMachineDetectionConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.active !== undefined && _instance.active !== null) {
      _writer.writeBool(1, _instance.active);
    }
    if (_instance.action !== undefined && _instance.action !== null) {
      _writer.writeEnum(2, _instance.action);
    }
    if (_instance.sensitivity !== undefined && _instance.sensitivity !== null) {
      _writer.writeEnum(3, _instance.sensitivity);
    }
    if (
      _instance.maxDecisionTimeMs !== undefined &&
      _instance.maxDecisionTimeMs !== null
    ) {
      _writer.writeInt32(4, _instance.maxDecisionTimeMs);
    }
    if (
      _instance.maxMachineWaitMs !== undefined &&
      _instance.maxMachineWaitMs !== null
    ) {
      _writer.writeInt32(5, _instance.maxMachineWaitMs);
    }
    if (
      _instance.beepWaitAfterGreetingMs !== undefined &&
      _instance.beepWaitAfterGreetingMs !== null
    ) {
      _writer.writeInt32(6, _instance.beepWaitAfterGreetingMs);
    }
    if (
      _instance.initialSilenceMs !== undefined &&
      _instance.initialSilenceMs !== null
    ) {
      _writer.writeInt32(7, _instance.initialSilenceMs);
    }
    if (
      _instance.maxHumanGreetingMs !== undefined &&
      _instance.maxHumanGreetingMs !== null
    ) {
      _writer.writeInt32(8, _instance.maxHumanGreetingMs);
    }
    if (
      _instance.greetingEndSilenceMs !== undefined &&
      _instance.greetingEndSilenceMs !== null
    ) {
      _writer.writeInt32(9, _instance.greetingEndSilenceMs);
    }
    if (
      _instance.beepDetectionActive !== undefined &&
      _instance.beepDetectionActive !== null
    ) {
      _writer.writeBool(10, _instance.beepDetectionActive);
    }
    if (
      _instance.additionalMachinePhrases &&
      _instance.additionalMachinePhrases.length
    ) {
      _writer.writeRepeatedString(11, _instance.additionalMachinePhrases);
    }
    if (
      _instance.additionalHumanPhrases &&
      _instance.additionalHumanPhrases.length
    ) {
      _writer.writeRepeatedString(12, _instance.additionalHumanPhrases);
    }
    if (_instance.hangUpOnFax !== undefined && _instance.hangUpOnFax !== null) {
      _writer.writeBool(13, _instance.hangUpOnFax);
    }
    if (
      _instance.hangUpOnNetworkAnnouncement !== undefined &&
      _instance.hangUpOnNetworkAnnouncement !== null
    ) {
      _writer.writeBool(14, _instance.hangUpOnNetworkAnnouncement);
    }
    if (_instance.hangUpOnIvr !== undefined && _instance.hangUpOnIvr !== null) {
      _writer.writeBool(15, _instance.hangUpOnIvr);
    }
    if (
      _instance.hangUpOnCallScreening !== undefined &&
      _instance.hangUpOnCallScreening !== null
    ) {
      _writer.writeBool(16, _instance.hangUpOnCallScreening);
    }
    if (
      _instance.voiceMessageIntent !== undefined &&
      _instance.voiceMessageIntent !== null
    ) {
      _writer.writeString(17, _instance.voiceMessageIntent);
    }
    if (
      _instance.voiceMessageMaxBeepWaitMs !== undefined &&
      _instance.voiceMessageMaxBeepWaitMs !== null
    ) {
      _writer.writeInt32(18, _instance.voiceMessageMaxBeepWaitMs);
    }
    if (
      _instance.voiceMessageTimeoutMs !== undefined &&
      _instance.voiceMessageTimeoutMs !== null
    ) {
      _writer.writeInt32(19, _instance.voiceMessageTimeoutMs);
    }
    if (
      _instance.keywordDetectionActive !== undefined &&
      _instance.keywordDetectionActive !== null
    ) {
      _writer.writeBool(20, _instance.keywordDetectionActive);
    }
    if (
      _instance.cadenceDetectionActive !== undefined &&
      _instance.cadenceDetectionActive !== null
    ) {
      _writer.writeBool(21, _instance.cadenceDetectionActive);
    }
  }

  private _active: boolean;
  private _action: AnsweringMachineDetectionConfig.AmdAction;
  private _sensitivity: AnsweringMachineDetectionConfig.AmdSensitivity;
  private _maxDecisionTimeMs: number;
  private _maxMachineWaitMs: number;
  private _beepWaitAfterGreetingMs: number;
  private _initialSilenceMs: number;
  private _maxHumanGreetingMs: number;
  private _greetingEndSilenceMs: number;
  private _beepDetectionActive: boolean;
  private _additionalMachinePhrases: string[];
  private _additionalHumanPhrases: string[];
  private _hangUpOnFax: boolean;
  private _hangUpOnNetworkAnnouncement: boolean;
  private _hangUpOnIvr: boolean;
  private _hangUpOnCallScreening: boolean;
  private _voiceMessageIntent: string;
  private _voiceMessageMaxBeepWaitMs: number;
  private _voiceMessageTimeoutMs: number;
  private _keywordDetectionActive: boolean;
  private _cadenceDetectionActive: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AnsweringMachineDetectionConfig to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AnsweringMachineDetectionConfig.AsObject>
  ) {
    _value = _value || {};
    this.active = _value.active;
    this.action = _value.action;
    this.sensitivity = _value.sensitivity;
    this.maxDecisionTimeMs = _value.maxDecisionTimeMs;
    this.maxMachineWaitMs = _value.maxMachineWaitMs;
    this.beepWaitAfterGreetingMs = _value.beepWaitAfterGreetingMs;
    this.initialSilenceMs = _value.initialSilenceMs;
    this.maxHumanGreetingMs = _value.maxHumanGreetingMs;
    this.greetingEndSilenceMs = _value.greetingEndSilenceMs;
    this.beepDetectionActive = _value.beepDetectionActive;
    this.additionalMachinePhrases = (
      _value.additionalMachinePhrases || []
    ).slice();
    this.additionalHumanPhrases = (_value.additionalHumanPhrases || []).slice();
    this.hangUpOnFax = _value.hangUpOnFax;
    this.hangUpOnNetworkAnnouncement = _value.hangUpOnNetworkAnnouncement;
    this.hangUpOnIvr = _value.hangUpOnIvr;
    this.hangUpOnCallScreening = _value.hangUpOnCallScreening;
    this.voiceMessageIntent = _value.voiceMessageIntent;
    this.voiceMessageMaxBeepWaitMs = _value.voiceMessageMaxBeepWaitMs;
    this.voiceMessageTimeoutMs = _value.voiceMessageTimeoutMs;
    this.keywordDetectionActive = _value.keywordDetectionActive;
    this.cadenceDetectionActive = _value.cadenceDetectionActive;
    AnsweringMachineDetectionConfig.refineValues(this);
  }
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }
  get action(): AnsweringMachineDetectionConfig.AmdAction {
    return this._action;
  }
  set action(value: AnsweringMachineDetectionConfig.AmdAction) {
    this._action = value;
  }
  get sensitivity(): AnsweringMachineDetectionConfig.AmdSensitivity {
    return this._sensitivity;
  }
  set sensitivity(value: AnsweringMachineDetectionConfig.AmdSensitivity) {
    this._sensitivity = value;
  }
  get maxDecisionTimeMs(): number {
    return this._maxDecisionTimeMs;
  }
  set maxDecisionTimeMs(value: number) {
    this._maxDecisionTimeMs = value;
  }
  get maxMachineWaitMs(): number {
    return this._maxMachineWaitMs;
  }
  set maxMachineWaitMs(value: number) {
    this._maxMachineWaitMs = value;
  }
  get beepWaitAfterGreetingMs(): number {
    return this._beepWaitAfterGreetingMs;
  }
  set beepWaitAfterGreetingMs(value: number) {
    this._beepWaitAfterGreetingMs = value;
  }
  get initialSilenceMs(): number {
    return this._initialSilenceMs;
  }
  set initialSilenceMs(value: number) {
    this._initialSilenceMs = value;
  }
  get maxHumanGreetingMs(): number {
    return this._maxHumanGreetingMs;
  }
  set maxHumanGreetingMs(value: number) {
    this._maxHumanGreetingMs = value;
  }
  get greetingEndSilenceMs(): number {
    return this._greetingEndSilenceMs;
  }
  set greetingEndSilenceMs(value: number) {
    this._greetingEndSilenceMs = value;
  }
  get beepDetectionActive(): boolean {
    return this._beepDetectionActive;
  }
  set beepDetectionActive(value: boolean) {
    this._beepDetectionActive = value;
  }
  get additionalMachinePhrases(): string[] {
    return this._additionalMachinePhrases;
  }
  set additionalMachinePhrases(value: string[]) {
    this._additionalMachinePhrases = value;
  }
  get additionalHumanPhrases(): string[] {
    return this._additionalHumanPhrases;
  }
  set additionalHumanPhrases(value: string[]) {
    this._additionalHumanPhrases = value;
  }
  get hangUpOnFax(): boolean {
    return this._hangUpOnFax;
  }
  set hangUpOnFax(value: boolean) {
    this._hangUpOnFax = value;
  }
  get hangUpOnNetworkAnnouncement(): boolean {
    return this._hangUpOnNetworkAnnouncement;
  }
  set hangUpOnNetworkAnnouncement(value: boolean) {
    this._hangUpOnNetworkAnnouncement = value;
  }
  get hangUpOnIvr(): boolean {
    return this._hangUpOnIvr;
  }
  set hangUpOnIvr(value: boolean) {
    this._hangUpOnIvr = value;
  }
  get hangUpOnCallScreening(): boolean {
    return this._hangUpOnCallScreening;
  }
  set hangUpOnCallScreening(value: boolean) {
    this._hangUpOnCallScreening = value;
  }
  get voiceMessageIntent(): string {
    return this._voiceMessageIntent;
  }
  set voiceMessageIntent(value: string) {
    this._voiceMessageIntent = value;
  }
  get voiceMessageMaxBeepWaitMs(): number {
    return this._voiceMessageMaxBeepWaitMs;
  }
  set voiceMessageMaxBeepWaitMs(value: number) {
    this._voiceMessageMaxBeepWaitMs = value;
  }
  get voiceMessageTimeoutMs(): number {
    return this._voiceMessageTimeoutMs;
  }
  set voiceMessageTimeoutMs(value: number) {
    this._voiceMessageTimeoutMs = value;
  }
  get keywordDetectionActive(): boolean {
    return this._keywordDetectionActive;
  }
  set keywordDetectionActive(value: boolean) {
    this._keywordDetectionActive = value;
  }
  get cadenceDetectionActive(): boolean {
    return this._cadenceDetectionActive;
  }
  set cadenceDetectionActive(value: boolean) {
    this._cadenceDetectionActive = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AnsweringMachineDetectionConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnsweringMachineDetectionConfig.AsObject {
    return {
      active: this.active,
      action: this.action,
      sensitivity: this.sensitivity,
      maxDecisionTimeMs: this.maxDecisionTimeMs,
      maxMachineWaitMs: this.maxMachineWaitMs,
      beepWaitAfterGreetingMs: this.beepWaitAfterGreetingMs,
      initialSilenceMs: this.initialSilenceMs,
      maxHumanGreetingMs: this.maxHumanGreetingMs,
      greetingEndSilenceMs: this.greetingEndSilenceMs,
      beepDetectionActive: this.beepDetectionActive,
      additionalMachinePhrases: (this.additionalMachinePhrases || []).slice(),
      additionalHumanPhrases: (this.additionalHumanPhrases || []).slice(),
      hangUpOnFax: this.hangUpOnFax,
      hangUpOnNetworkAnnouncement: this.hangUpOnNetworkAnnouncement,
      hangUpOnIvr: this.hangUpOnIvr,
      hangUpOnCallScreening: this.hangUpOnCallScreening,
      voiceMessageIntent: this.voiceMessageIntent,
      voiceMessageMaxBeepWaitMs: this.voiceMessageMaxBeepWaitMs,
      voiceMessageTimeoutMs: this.voiceMessageTimeoutMs,
      keywordDetectionActive: this.keywordDetectionActive,
      cadenceDetectionActive: this.cadenceDetectionActive
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AnsweringMachineDetectionConfig.AsProtobufJSON {
    return {
      active: this.active,
      action:
        AnsweringMachineDetectionConfig.AmdAction[
          this.action === null || this.action === undefined ? 0 : this.action
        ],
      sensitivity:
        AnsweringMachineDetectionConfig.AmdSensitivity[
          this.sensitivity === null || this.sensitivity === undefined
            ? 0
            : this.sensitivity
        ],
      maxDecisionTimeMs: this.maxDecisionTimeMs,
      maxMachineWaitMs: this.maxMachineWaitMs,
      beepWaitAfterGreetingMs: this.beepWaitAfterGreetingMs,
      initialSilenceMs: this.initialSilenceMs,
      maxHumanGreetingMs: this.maxHumanGreetingMs,
      greetingEndSilenceMs: this.greetingEndSilenceMs,
      beepDetectionActive: this.beepDetectionActive,
      additionalMachinePhrases: (this.additionalMachinePhrases || []).slice(),
      additionalHumanPhrases: (this.additionalHumanPhrases || []).slice(),
      hangUpOnFax: this.hangUpOnFax,
      hangUpOnNetworkAnnouncement: this.hangUpOnNetworkAnnouncement,
      hangUpOnIvr: this.hangUpOnIvr,
      hangUpOnCallScreening: this.hangUpOnCallScreening,
      voiceMessageIntent: this.voiceMessageIntent,
      voiceMessageMaxBeepWaitMs: this.voiceMessageMaxBeepWaitMs,
      voiceMessageTimeoutMs: this.voiceMessageTimeoutMs,
      keywordDetectionActive: this.keywordDetectionActive,
      cadenceDetectionActive: this.cadenceDetectionActive
    };
  }
}
export module AnsweringMachineDetectionConfig {
  /**
   * Standard JavaScript object representation for AnsweringMachineDetectionConfig
   */
  export interface AsObject {
    active: boolean;
    action: AnsweringMachineDetectionConfig.AmdAction;
    sensitivity: AnsweringMachineDetectionConfig.AmdSensitivity;
    maxDecisionTimeMs: number;
    maxMachineWaitMs: number;
    beepWaitAfterGreetingMs: number;
    initialSilenceMs: number;
    maxHumanGreetingMs: number;
    greetingEndSilenceMs: number;
    beepDetectionActive: boolean;
    additionalMachinePhrases: string[];
    additionalHumanPhrases: string[];
    hangUpOnFax: boolean;
    hangUpOnNetworkAnnouncement: boolean;
    hangUpOnIvr: boolean;
    hangUpOnCallScreening: boolean;
    voiceMessageIntent: string;
    voiceMessageMaxBeepWaitMs: number;
    voiceMessageTimeoutMs: number;
    keywordDetectionActive: boolean;
    cadenceDetectionActive: boolean;
  }

  /**
   * Protobuf JSON representation for AnsweringMachineDetectionConfig
   */
  export interface AsProtobufJSON {
    active: boolean;
    action: string;
    sensitivity: string;
    maxDecisionTimeMs: number;
    maxMachineWaitMs: number;
    beepWaitAfterGreetingMs: number;
    initialSilenceMs: number;
    maxHumanGreetingMs: number;
    greetingEndSilenceMs: number;
    beepDetectionActive: boolean;
    additionalMachinePhrases: string[];
    additionalHumanPhrases: string[];
    hangUpOnFax: boolean;
    hangUpOnNetworkAnnouncement: boolean;
    hangUpOnIvr: boolean;
    hangUpOnCallScreening: boolean;
    voiceMessageIntent: string;
    voiceMessageMaxBeepWaitMs: number;
    voiceMessageTimeoutMs: number;
    keywordDetectionActive: boolean;
    cadenceDetectionActive: boolean;
  }
  export enum AmdAction {
    AMD_ACTION_UNSPECIFIED = 0,
    HANG_UP = 1,
    DETECT_ONLY = 2,
    LEAVE_VOICE_MESSAGE = 3
  }
  export enum AmdSensitivity {
    AMD_SENSITIVITY_UNSPECIFIED = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
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
    if (
      _instance.activateControlMessages !== undefined &&
      _instance.activateControlMessages !== null
    ) {
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
    if (
      _instance.activateAudioObjectStorage !== undefined &&
      _instance.activateAudioObjectStorage !== null
    ) {
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
    if (_instance.activateS2t !== undefined && _instance.activateS2t !== null) {
      _writer.writeBool(1, _instance.activateS2t);
    }
    if (_instance.activateT2s !== undefined && _instance.activateT2s !== null) {
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
    if (
      _instance.activateMessageBroker !== undefined &&
      _instance.activateMessageBroker !== null
    ) {
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
    if (_instance.activateS2t !== undefined && _instance.activateS2t !== null) {
      _writer.writeBool(1, _instance.activateS2t);
    }
    if (_instance.activateNlu !== undefined && _instance.activateNlu !== null) {
      _writer.writeBool(2, _instance.activateNlu);
    }
    if (_instance.activateT2s !== undefined && _instance.activateT2s !== null) {
      _writer.writeBool(3, _instance.activateT2s);
    }
    if (_instance.activateSip !== undefined && _instance.activateSip !== null) {
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
