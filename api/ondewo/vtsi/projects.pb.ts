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
export enum VtsiProjectStatus {
  UNSPECIFIED = 0,
  UNDEPLOYED = 1,
  UPDATING = 2,
  DEPLOYING = 3,
  DEPLOYED = 4,
  UNDEPLOYING = 5,
  DELETING = 6,
  DELETED = 7
}
export enum VtsiProjectSortingMode {
  ASCENDING = 0,
  DESCENDING = 1
}
export enum VtsiProjectView {
  VTSI_PROJECT_VIEW_UNSPECIFIED = 0,
  VTSI_PROJECT_VIEW_FULL = 1,
  VTSI_PROJECT_VIEW_SHALLOW = 2,
  VTSI_PROJECT_VIEW_MINIMUM = 3
}
/**
 * Message implementation for ondewo.vtsi.VtsiProject
 */
export class VtsiProject implements GrpcMessage {
  static id = 'ondewo.vtsi.VtsiProject';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VtsiProject();
    VtsiProject.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VtsiProject) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.maxCallers = _instance.maxCallers || 0;
    _instance.maxListeners = _instance.maxListeners || 0;
    _instance.asteriskConfigs = _instance.asteriskConfigs || undefined;
    _instance.vtsiProjectStatus = _instance.vtsiProjectStatus || 0;
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.activeCallers = _instance.activeCallers || 0;
    _instance.activeListeners = _instance.activeListeners || 0;
    _instance.asteriskPort = _instance.asteriskPort || 0;
    _instance.nluAgentNames = _instance.nluAgentNames || [];
    _instance.deployedCallers = _instance.deployedCallers || 0;
    _instance.deployedListeners = _instance.deployedListeners || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VtsiProject,
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
          _instance.maxCallers = _reader.readInt32();
          break;
        case 4:
          _instance.maxListeners = _reader.readInt32();
          break;
        case 5:
          _instance.asteriskConfigs = new AsteriskConfigs();
          _reader.readMessage(
            _instance.asteriskConfigs,
            AsteriskConfigs.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.vtsiProjectStatus = _reader.readEnum();
          break;
        case 7:
          _instance.createdBy = _reader.readString();
          break;
        case 8:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.modifiedBy = _reader.readString();
          break;
        case 10:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.activeCallers = _reader.readInt32();
          break;
        case 12:
          _instance.activeListeners = _reader.readInt32();
          break;
        case 13:
          _instance.asteriskPort = _reader.readInt32();
          break;
        case 14:
          (_instance.nluAgentNames = _instance.nluAgentNames || []).push(
            _reader.readString()
          );
          break;
        case 15:
          _instance.deployedCallers = _reader.readInt32();
          break;
        case 16:
          _instance.deployedListeners = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    VtsiProject.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VtsiProject,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.maxCallers) {
      _writer.writeInt32(3, _instance.maxCallers);
    }
    if (_instance.maxListeners) {
      _writer.writeInt32(4, _instance.maxListeners);
    }
    if (_instance.asteriskConfigs) {
      _writer.writeMessage(
        5,
        _instance.asteriskConfigs as any,
        AsteriskConfigs.serializeBinaryToWriter
      );
    }
    if (_instance.vtsiProjectStatus) {
      _writer.writeEnum(6, _instance.vtsiProjectStatus);
    }
    if (_instance.createdBy) {
      _writer.writeString(7, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(9, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        10,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.activeCallers) {
      _writer.writeInt32(11, _instance.activeCallers);
    }
    if (_instance.activeListeners) {
      _writer.writeInt32(12, _instance.activeListeners);
    }
    if (_instance.asteriskPort) {
      _writer.writeInt32(13, _instance.asteriskPort);
    }
    if (_instance.nluAgentNames && _instance.nluAgentNames.length) {
      _writer.writeRepeatedString(14, _instance.nluAgentNames);
    }
    if (_instance.deployedCallers) {
      _writer.writeInt32(15, _instance.deployedCallers);
    }
    if (_instance.deployedListeners) {
      _writer.writeInt32(16, _instance.deployedListeners);
    }
  }

  private _name: string;
  private _displayName: string;
  private _maxCallers: number;
  private _maxListeners: number;
  private _asteriskConfigs?: AsteriskConfigs;
  private _vtsiProjectStatus: VtsiProjectStatus;
  private _createdBy: string;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _activeCallers: number;
  private _activeListeners: number;
  private _asteriskPort: number;
  private _nluAgentNames: string[];
  private _deployedCallers: number;
  private _deployedListeners: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VtsiProject to deeply clone from
   */
  constructor(_value?: RecursivePartial<VtsiProject.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.maxCallers = _value.maxCallers;
    this.maxListeners = _value.maxListeners;
    this.asteriskConfigs = _value.asteriskConfigs
      ? new AsteriskConfigs(_value.asteriskConfigs)
      : undefined;
    this.vtsiProjectStatus = _value.vtsiProjectStatus;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.activeCallers = _value.activeCallers;
    this.activeListeners = _value.activeListeners;
    this.asteriskPort = _value.asteriskPort;
    this.nluAgentNames = (_value.nluAgentNames || []).slice();
    this.deployedCallers = _value.deployedCallers;
    this.deployedListeners = _value.deployedListeners;
    VtsiProject.refineValues(this);
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
  get maxCallers(): number {
    return this._maxCallers;
  }
  set maxCallers(value: number) {
    this._maxCallers = value;
  }
  get maxListeners(): number {
    return this._maxListeners;
  }
  set maxListeners(value: number) {
    this._maxListeners = value;
  }
  get asteriskConfigs(): AsteriskConfigs | undefined {
    return this._asteriskConfigs;
  }
  set asteriskConfigs(value: AsteriskConfigs | undefined) {
    this._asteriskConfigs = value;
  }
  get vtsiProjectStatus(): VtsiProjectStatus {
    return this._vtsiProjectStatus;
  }
  set vtsiProjectStatus(value: VtsiProjectStatus) {
    this._vtsiProjectStatus = value;
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
  get activeCallers(): number {
    return this._activeCallers;
  }
  set activeCallers(value: number) {
    this._activeCallers = value;
  }
  get activeListeners(): number {
    return this._activeListeners;
  }
  set activeListeners(value: number) {
    this._activeListeners = value;
  }
  get asteriskPort(): number {
    return this._asteriskPort;
  }
  set asteriskPort(value: number) {
    this._asteriskPort = value;
  }
  get nluAgentNames(): string[] {
    return this._nluAgentNames;
  }
  set nluAgentNames(value: string[]) {
    this._nluAgentNames = value;
  }
  get deployedCallers(): number {
    return this._deployedCallers;
  }
  set deployedCallers(value: number) {
    this._deployedCallers = value;
  }
  get deployedListeners(): number {
    return this._deployedListeners;
  }
  set deployedListeners(value: number) {
    this._deployedListeners = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VtsiProject.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VtsiProject.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      maxCallers: this.maxCallers,
      maxListeners: this.maxListeners,
      asteriskConfigs: this.asteriskConfigs
        ? this.asteriskConfigs.toObject()
        : undefined,
      vtsiProjectStatus: this.vtsiProjectStatus,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      activeCallers: this.activeCallers,
      activeListeners: this.activeListeners,
      asteriskPort: this.asteriskPort,
      nluAgentNames: (this.nluAgentNames || []).slice(),
      deployedCallers: this.deployedCallers,
      deployedListeners: this.deployedListeners
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VtsiProject.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      maxCallers: this.maxCallers,
      maxListeners: this.maxListeners,
      asteriskConfigs: this.asteriskConfigs
        ? this.asteriskConfigs.toProtobufJSON(options)
        : null,
      vtsiProjectStatus:
        VtsiProjectStatus[
          this.vtsiProjectStatus === null ||
          this.vtsiProjectStatus === undefined
            ? 0
            : this.vtsiProjectStatus
        ],
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      activeCallers: this.activeCallers,
      activeListeners: this.activeListeners,
      asteriskPort: this.asteriskPort,
      nluAgentNames: (this.nluAgentNames || []).slice(),
      deployedCallers: this.deployedCallers,
      deployedListeners: this.deployedListeners
    };
  }
}
export module VtsiProject {
  /**
   * Standard JavaScript object representation for VtsiProject
   */
  export interface AsObject {
    name: string;
    displayName: string;
    maxCallers: number;
    maxListeners: number;
    asteriskConfigs?: AsteriskConfigs.AsObject;
    vtsiProjectStatus: VtsiProjectStatus;
    createdBy: string;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    activeCallers: number;
    activeListeners: number;
    asteriskPort: number;
    nluAgentNames: string[];
    deployedCallers: number;
    deployedListeners: number;
  }

  /**
   * Protobuf JSON representation for VtsiProject
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    maxCallers: number;
    maxListeners: number;
    asteriskConfigs: AsteriskConfigs.AsProtobufJSON | null;
    vtsiProjectStatus: string;
    createdBy: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    activeCallers: number;
    activeListeners: number;
    asteriskPort: number;
    nluAgentNames: string[];
    deployedCallers: number;
    deployedListeners: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.AsteriskConfigsVariables
 */
export class AsteriskConfigsVariables implements GrpcMessage {
  static id = 'ondewo.vtsi.AsteriskConfigsVariables';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AsteriskConfigsVariables();
    AsteriskConfigsVariables.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AsteriskConfigsVariables) {
    _instance.sipTrunkUsername = _instance.sipTrunkUsername || '';
    _instance.sipTrunkPassword = _instance.sipTrunkPassword || '';
    _instance.sipTrunkHost = _instance.sipTrunkHost || '';
    _instance.transferNumber = _instance.transferNumber || '';
    _instance.transferNumberHost = _instance.transferNumberHost || '';
    _instance.sipTrunkPhoneNumber = _instance.sipTrunkPhoneNumber || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AsteriskConfigsVariables,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipTrunkUsername = _reader.readString();
          break;
        case 2:
          _instance.sipTrunkPassword = _reader.readString();
          break;
        case 3:
          _instance.sipTrunkHost = _reader.readString();
          break;
        case 4:
          _instance.transferNumber = _reader.readString();
          break;
        case 5:
          _instance.transferNumberHost = _reader.readString();
          break;
        case 6:
          _instance.sipTrunkPhoneNumber = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AsteriskConfigsVariables.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AsteriskConfigsVariables,
    _writer: BinaryWriter
  ) {
    if (_instance.sipTrunkUsername) {
      _writer.writeString(1, _instance.sipTrunkUsername);
    }
    if (_instance.sipTrunkPassword) {
      _writer.writeString(2, _instance.sipTrunkPassword);
    }
    if (_instance.sipTrunkHost) {
      _writer.writeString(3, _instance.sipTrunkHost);
    }
    if (_instance.transferNumber) {
      _writer.writeString(4, _instance.transferNumber);
    }
    if (_instance.transferNumberHost) {
      _writer.writeString(5, _instance.transferNumberHost);
    }
    if (_instance.sipTrunkPhoneNumber) {
      _writer.writeString(6, _instance.sipTrunkPhoneNumber);
    }
  }

  private _sipTrunkUsername: string;
  private _sipTrunkPassword: string;
  private _sipTrunkHost: string;
  private _transferNumber: string;
  private _transferNumberHost: string;
  private _sipTrunkPhoneNumber: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AsteriskConfigsVariables to deeply clone from
   */
  constructor(_value?: RecursivePartial<AsteriskConfigsVariables.AsObject>) {
    _value = _value || {};
    this.sipTrunkUsername = _value.sipTrunkUsername;
    this.sipTrunkPassword = _value.sipTrunkPassword;
    this.sipTrunkHost = _value.sipTrunkHost;
    this.transferNumber = _value.transferNumber;
    this.transferNumberHost = _value.transferNumberHost;
    this.sipTrunkPhoneNumber = _value.sipTrunkPhoneNumber;
    AsteriskConfigsVariables.refineValues(this);
  }
  get sipTrunkUsername(): string {
    return this._sipTrunkUsername;
  }
  set sipTrunkUsername(value: string) {
    this._sipTrunkUsername = value;
  }
  get sipTrunkPassword(): string {
    return this._sipTrunkPassword;
  }
  set sipTrunkPassword(value: string) {
    this._sipTrunkPassword = value;
  }
  get sipTrunkHost(): string {
    return this._sipTrunkHost;
  }
  set sipTrunkHost(value: string) {
    this._sipTrunkHost = value;
  }
  get transferNumber(): string {
    return this._transferNumber;
  }
  set transferNumber(value: string) {
    this._transferNumber = value;
  }
  get transferNumberHost(): string {
    return this._transferNumberHost;
  }
  set transferNumberHost(value: string) {
    this._transferNumberHost = value;
  }
  get sipTrunkPhoneNumber(): string {
    return this._sipTrunkPhoneNumber;
  }
  set sipTrunkPhoneNumber(value: string) {
    this._sipTrunkPhoneNumber = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AsteriskConfigsVariables.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AsteriskConfigsVariables.AsObject {
    return {
      sipTrunkUsername: this.sipTrunkUsername,
      sipTrunkPassword: this.sipTrunkPassword,
      sipTrunkHost: this.sipTrunkHost,
      transferNumber: this.transferNumber,
      transferNumberHost: this.transferNumberHost,
      sipTrunkPhoneNumber: this.sipTrunkPhoneNumber
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AsteriskConfigsVariables.AsProtobufJSON {
    return {
      sipTrunkUsername: this.sipTrunkUsername,
      sipTrunkPassword: this.sipTrunkPassword,
      sipTrunkHost: this.sipTrunkHost,
      transferNumber: this.transferNumber,
      transferNumberHost: this.transferNumberHost,
      sipTrunkPhoneNumber: this.sipTrunkPhoneNumber
    };
  }
}
export module AsteriskConfigsVariables {
  /**
   * Standard JavaScript object representation for AsteriskConfigsVariables
   */
  export interface AsObject {
    sipTrunkUsername: string;
    sipTrunkPassword: string;
    sipTrunkHost: string;
    transferNumber: string;
    transferNumberHost: string;
    sipTrunkPhoneNumber: string;
  }

  /**
   * Protobuf JSON representation for AsteriskConfigsVariables
   */
  export interface AsProtobufJSON {
    sipTrunkUsername: string;
    sipTrunkPassword: string;
    sipTrunkHost: string;
    transferNumber: string;
    transferNumberHost: string;
    sipTrunkPhoneNumber: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.AsteriskConfigsFiles
 */
export class AsteriskConfigsFiles implements GrpcMessage {
  static id = 'ondewo.vtsi.AsteriskConfigsFiles';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AsteriskConfigsFiles();
    AsteriskConfigsFiles.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AsteriskConfigsFiles) {
    _instance.sipConfFileString = _instance.sipConfFileString || '';
    _instance.extensionsConfFileString =
      _instance.extensionsConfFileString || '';
    _instance.queuesConfFileString = _instance.queuesConfFileString || '';
    _instance.modulesConfFileString = _instance.modulesConfFileString || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AsteriskConfigsFiles,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipConfFileString = _reader.readString();
          break;
        case 2:
          _instance.extensionsConfFileString = _reader.readString();
          break;
        case 3:
          _instance.queuesConfFileString = _reader.readString();
          break;
        case 4:
          _instance.modulesConfFileString = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AsteriskConfigsFiles.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AsteriskConfigsFiles,
    _writer: BinaryWriter
  ) {
    if (_instance.sipConfFileString) {
      _writer.writeString(1, _instance.sipConfFileString);
    }
    if (_instance.extensionsConfFileString) {
      _writer.writeString(2, _instance.extensionsConfFileString);
    }
    if (_instance.queuesConfFileString) {
      _writer.writeString(3, _instance.queuesConfFileString);
    }
    if (_instance.modulesConfFileString) {
      _writer.writeString(4, _instance.modulesConfFileString);
    }
  }

  private _sipConfFileString: string;
  private _extensionsConfFileString: string;
  private _queuesConfFileString: string;
  private _modulesConfFileString: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AsteriskConfigsFiles to deeply clone from
   */
  constructor(_value?: RecursivePartial<AsteriskConfigsFiles.AsObject>) {
    _value = _value || {};
    this.sipConfFileString = _value.sipConfFileString;
    this.extensionsConfFileString = _value.extensionsConfFileString;
    this.queuesConfFileString = _value.queuesConfFileString;
    this.modulesConfFileString = _value.modulesConfFileString;
    AsteriskConfigsFiles.refineValues(this);
  }
  get sipConfFileString(): string {
    return this._sipConfFileString;
  }
  set sipConfFileString(value: string) {
    this._sipConfFileString = value;
  }
  get extensionsConfFileString(): string {
    return this._extensionsConfFileString;
  }
  set extensionsConfFileString(value: string) {
    this._extensionsConfFileString = value;
  }
  get queuesConfFileString(): string {
    return this._queuesConfFileString;
  }
  set queuesConfFileString(value: string) {
    this._queuesConfFileString = value;
  }
  get modulesConfFileString(): string {
    return this._modulesConfFileString;
  }
  set modulesConfFileString(value: string) {
    this._modulesConfFileString = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AsteriskConfigsFiles.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AsteriskConfigsFiles.AsObject {
    return {
      sipConfFileString: this.sipConfFileString,
      extensionsConfFileString: this.extensionsConfFileString,
      queuesConfFileString: this.queuesConfFileString,
      modulesConfFileString: this.modulesConfFileString
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AsteriskConfigsFiles.AsProtobufJSON {
    return {
      sipConfFileString: this.sipConfFileString,
      extensionsConfFileString: this.extensionsConfFileString,
      queuesConfFileString: this.queuesConfFileString,
      modulesConfFileString: this.modulesConfFileString
    };
  }
}
export module AsteriskConfigsFiles {
  /**
   * Standard JavaScript object representation for AsteriskConfigsFiles
   */
  export interface AsObject {
    sipConfFileString: string;
    extensionsConfFileString: string;
    queuesConfFileString: string;
    modulesConfFileString: string;
  }

  /**
   * Protobuf JSON representation for AsteriskConfigsFiles
   */
  export interface AsProtobufJSON {
    sipConfFileString: string;
    extensionsConfFileString: string;
    queuesConfFileString: string;
    modulesConfFileString: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.AsteriskConfigs
 */
export class AsteriskConfigs implements GrpcMessage {
  static id = 'ondewo.vtsi.AsteriskConfigs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AsteriskConfigs();
    AsteriskConfigs.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AsteriskConfigs) {
    _instance.asteriskPort = _instance.asteriskPort || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AsteriskConfigs,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.asteriskConfigsVariables = new AsteriskConfigsVariables();
          _reader.readMessage(
            _instance.asteriskConfigsVariables,
            AsteriskConfigsVariables.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.asteriskConfigsFiles = new AsteriskConfigsFiles();
          _reader.readMessage(
            _instance.asteriskConfigsFiles,
            AsteriskConfigsFiles.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.asteriskConfigsTargetDirectoryName = _reader.readString();
          break;
        case 4:
          _instance.asteriskPort = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    AsteriskConfigs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AsteriskConfigs,
    _writer: BinaryWriter
  ) {
    if (_instance.asteriskConfigsVariables) {
      _writer.writeMessage(
        1,
        _instance.asteriskConfigsVariables as any,
        AsteriskConfigsVariables.serializeBinaryToWriter
      );
    }
    if (_instance.asteriskConfigsFiles) {
      _writer.writeMessage(
        2,
        _instance.asteriskConfigsFiles as any,
        AsteriskConfigsFiles.serializeBinaryToWriter
      );
    }
    if (
      _instance.asteriskConfigsTargetDirectoryName ||
      _instance.asteriskConfigsTargetDirectoryName === ''
    ) {
      _writer.writeString(3, _instance.asteriskConfigsTargetDirectoryName);
    }
    if (_instance.asteriskPort) {
      _writer.writeInt32(4, _instance.asteriskPort);
    }
  }

  private _asteriskConfigsVariables?: AsteriskConfigsVariables;
  private _asteriskConfigsFiles?: AsteriskConfigsFiles;
  private _asteriskConfigsTargetDirectoryName: string;
  private _asteriskPort: number;

  private _asteriskConfigsOneof: AsteriskConfigs.AsteriskConfigsOneofCase =
    AsteriskConfigs.AsteriskConfigsOneofCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AsteriskConfigs to deeply clone from
   */
  constructor(_value?: RecursivePartial<AsteriskConfigs.AsObject>) {
    _value = _value || {};
    this.asteriskConfigsVariables = _value.asteriskConfigsVariables
      ? new AsteriskConfigsVariables(_value.asteriskConfigsVariables)
      : undefined;
    this.asteriskConfigsFiles = _value.asteriskConfigsFiles
      ? new AsteriskConfigsFiles(_value.asteriskConfigsFiles)
      : undefined;
    this.asteriskConfigsTargetDirectoryName =
      _value.asteriskConfigsTargetDirectoryName;
    this.asteriskPort = _value.asteriskPort;
    AsteriskConfigs.refineValues(this);
  }
  get asteriskConfigsVariables(): AsteriskConfigsVariables | undefined {
    return this._asteriskConfigsVariables;
  }
  set asteriskConfigsVariables(value: AsteriskConfigsVariables | undefined) {
    if (value !== undefined && value !== null) {
      this._asteriskConfigsFiles = this._asteriskConfigsTargetDirectoryName = undefined;
      this._asteriskConfigsOneof =
        AsteriskConfigs.AsteriskConfigsOneofCase.asteriskConfigsVariables;
    }
    this._asteriskConfigsVariables = value;
  }
  get asteriskConfigsFiles(): AsteriskConfigsFiles | undefined {
    return this._asteriskConfigsFiles;
  }
  set asteriskConfigsFiles(value: AsteriskConfigsFiles | undefined) {
    if (value !== undefined && value !== null) {
      this._asteriskConfigsVariables = this._asteriskConfigsTargetDirectoryName = undefined;
      this._asteriskConfigsOneof =
        AsteriskConfigs.AsteriskConfigsOneofCase.asteriskConfigsFiles;
    }
    this._asteriskConfigsFiles = value;
  }
  get asteriskConfigsTargetDirectoryName(): string {
    return this._asteriskConfigsTargetDirectoryName;
  }
  set asteriskConfigsTargetDirectoryName(value: string) {
    if (value !== undefined && value !== null) {
      this._asteriskConfigsVariables = this._asteriskConfigsFiles = undefined;
      this._asteriskConfigsOneof =
        AsteriskConfigs.AsteriskConfigsOneofCase.asteriskConfigsTargetDirectoryName;
    }
    this._asteriskConfigsTargetDirectoryName = value;
  }
  get asteriskPort(): number {
    return this._asteriskPort;
  }
  set asteriskPort(value: number) {
    this._asteriskPort = value;
  }
  get asteriskConfigsOneof() {
    return this._asteriskConfigsOneof;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AsteriskConfigs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AsteriskConfigs.AsObject {
    return {
      asteriskConfigsVariables: this.asteriskConfigsVariables
        ? this.asteriskConfigsVariables.toObject()
        : undefined,
      asteriskConfigsFiles: this.asteriskConfigsFiles
        ? this.asteriskConfigsFiles.toObject()
        : undefined,
      asteriskConfigsTargetDirectoryName: this
        .asteriskConfigsTargetDirectoryName,
      asteriskPort: this.asteriskPort
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AsteriskConfigs.AsProtobufJSON {
    return {
      asteriskConfigsVariables: this.asteriskConfigsVariables
        ? this.asteriskConfigsVariables.toProtobufJSON(options)
        : null,
      asteriskConfigsFiles: this.asteriskConfigsFiles
        ? this.asteriskConfigsFiles.toProtobufJSON(options)
        : null,
      asteriskConfigsTargetDirectoryName:
        this.asteriskConfigsTargetDirectoryName === null ||
        this.asteriskConfigsTargetDirectoryName === undefined
          ? null
          : this.asteriskConfigsTargetDirectoryName,
      asteriskPort: this.asteriskPort
    };
  }
}
export module AsteriskConfigs {
  /**
   * Standard JavaScript object representation for AsteriskConfigs
   */
  export interface AsObject {
    asteriskConfigsVariables?: AsteriskConfigsVariables.AsObject;
    asteriskConfigsFiles?: AsteriskConfigsFiles.AsObject;
    asteriskConfigsTargetDirectoryName: string;
    asteriskPort: number;
  }

  /**
   * Protobuf JSON representation for AsteriskConfigs
   */
  export interface AsProtobufJSON {
    asteriskConfigsVariables: AsteriskConfigsVariables.AsProtobufJSON | null;
    asteriskConfigsFiles: AsteriskConfigsFiles.AsProtobufJSON | null;
    asteriskConfigsTargetDirectoryName: string | null;
    asteriskPort: number;
  }
  export enum AsteriskConfigsOneofCase {
    none = 0,
    asteriskConfigsVariables = 1,
    asteriskConfigsFiles = 2,
    asteriskConfigsTargetDirectoryName = 3
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateVtsiProjectRequest
 */
export class CreateVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateVtsiProjectRequest();
    CreateVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateVtsiProjectRequest) {
    _instance.vtsiProject = _instance.vtsiProject || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateVtsiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProject = new VtsiProject();
          _reader.readMessage(
            _instance.vtsiProject,
            VtsiProject.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProject) {
      _writer.writeMessage(
        1,
        _instance.vtsiProject as any,
        VtsiProject.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _vtsiProject?: VtsiProject;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProject = _value.vtsiProject
      ? new VtsiProject(_value.vtsiProject)
      : undefined;
    this.errorMessage = _value.errorMessage;
    CreateVtsiProjectRequest.refineValues(this);
  }
  get vtsiProject(): VtsiProject | undefined {
    return this._vtsiProject;
  }
  set vtsiProject(value: VtsiProject | undefined) {
    this._vtsiProject = value;
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
    CreateVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateVtsiProjectRequest.AsObject {
    return {
      vtsiProject: this.vtsiProject ? this.vtsiProject.toObject() : undefined,
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
  ): CreateVtsiProjectRequest.AsProtobufJSON {
    return {
      vtsiProject: this.vtsiProject
        ? this.vtsiProject.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module CreateVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for CreateVtsiProjectRequest
   */
  export interface AsObject {
    vtsiProject?: VtsiProject.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CreateVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    vtsiProject: VtsiProject.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateVtsiProjectResponse
 */
export class CreateVtsiProjectResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateVtsiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateVtsiProjectResponse();
    CreateVtsiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateVtsiProjectResponse) {
    _instance.vtsiProject = _instance.vtsiProject || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateVtsiProjectResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProject = new VtsiProject();
          _reader.readMessage(
            _instance.vtsiProject,
            VtsiProject.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.errorMessage = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateVtsiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateVtsiProjectResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProject) {
      _writer.writeMessage(
        1,
        _instance.vtsiProject as any,
        VtsiProject.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(2, _instance.errorMessage);
    }
  }

  private _vtsiProject?: VtsiProject;
  private _errorMessage: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateVtsiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateVtsiProjectResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProject = _value.vtsiProject
      ? new VtsiProject(_value.vtsiProject)
      : undefined;
    this.errorMessage = _value.errorMessage;
    CreateVtsiProjectResponse.refineValues(this);
  }
  get vtsiProject(): VtsiProject | undefined {
    return this._vtsiProject;
  }
  set vtsiProject(value: VtsiProject | undefined) {
    this._vtsiProject = value;
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
    CreateVtsiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateVtsiProjectResponse.AsObject {
    return {
      vtsiProject: this.vtsiProject ? this.vtsiProject.toObject() : undefined,
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
  ): CreateVtsiProjectResponse.AsProtobufJSON {
    return {
      vtsiProject: this.vtsiProject
        ? this.vtsiProject.toProtobufJSON(options)
        : null,
      errorMessage: this.errorMessage
    };
  }
}
export module CreateVtsiProjectResponse {
  /**
   * Standard JavaScript object representation for CreateVtsiProjectResponse
   */
  export interface AsObject {
    vtsiProject?: VtsiProject.AsObject;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for CreateVtsiProjectResponse
   */
  export interface AsProtobufJSON {
    vtsiProject: VtsiProject.AsProtobufJSON | null;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetVtsiProjectRequest
 */
export class GetVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetVtsiProjectRequest();
    GetVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetVtsiProjectRequest) {
    _instance.name = _instance.name || '';
    _instance.vtsiProjectView = _instance.vtsiProjectView || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetVtsiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.vtsiProjectView = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    GetVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.vtsiProjectView) {
      _writer.writeEnum(2, _instance.vtsiProjectView);
    }
  }

  private _name: string;
  private _vtsiProjectView: VtsiProjectView;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.vtsiProjectView = _value.vtsiProjectView;
    GetVtsiProjectRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get vtsiProjectView(): VtsiProjectView {
    return this._vtsiProjectView;
  }
  set vtsiProjectView(value: VtsiProjectView) {
    this._vtsiProjectView = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetVtsiProjectRequest.AsObject {
    return {
      name: this.name,
      vtsiProjectView: this.vtsiProjectView
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetVtsiProjectRequest.AsProtobufJSON {
    return {
      name: this.name,
      vtsiProjectView:
        VtsiProjectView[
          this.vtsiProjectView === null || this.vtsiProjectView === undefined
            ? 0
            : this.vtsiProjectView
        ]
    };
  }
}
export module GetVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for GetVtsiProjectRequest
   */
  export interface AsObject {
    name: string;
    vtsiProjectView: VtsiProjectView;
  }

  /**
   * Protobuf JSON representation for GetVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
    vtsiProjectView: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListVtsiProjectsRequest
 */
export class ListVtsiProjectsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListVtsiProjectsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListVtsiProjectsRequest();
    ListVtsiProjectsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListVtsiProjectsRequest) {
    _instance.vtsiProjectView = _instance.vtsiProjectView || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.vtsiProjectSorting = _instance.vtsiProjectSorting || undefined;
    _instance.nluAgentNames = _instance.nluAgentNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListVtsiProjectsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectView = _reader.readEnum();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectSorting = new VtsiProjectSorting();
          _reader.readMessage(
            _instance.vtsiProjectSorting,
            VtsiProjectSorting.deserializeBinaryFromReader
          );
          break;
        case 4:
          (_instance.nluAgentNames = _instance.nluAgentNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListVtsiProjectsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListVtsiProjectsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectView) {
      _writer.writeEnum(1, _instance.vtsiProjectView);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.vtsiProjectSorting) {
      _writer.writeMessage(
        3,
        _instance.vtsiProjectSorting as any,
        VtsiProjectSorting.serializeBinaryToWriter
      );
    }
    if (_instance.nluAgentNames && _instance.nluAgentNames.length) {
      _writer.writeRepeatedString(4, _instance.nluAgentNames);
    }
  }

  private _vtsiProjectView: VtsiProjectView;
  private _pageToken: string;
  private _vtsiProjectSorting?: VtsiProjectSorting;
  private _nluAgentNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListVtsiProjectsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListVtsiProjectsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectView = _value.vtsiProjectView;
    this.pageToken = _value.pageToken;
    this.vtsiProjectSorting = _value.vtsiProjectSorting
      ? new VtsiProjectSorting(_value.vtsiProjectSorting)
      : undefined;
    this.nluAgentNames = (_value.nluAgentNames || []).slice();
    ListVtsiProjectsRequest.refineValues(this);
  }
  get vtsiProjectView(): VtsiProjectView {
    return this._vtsiProjectView;
  }
  set vtsiProjectView(value: VtsiProjectView) {
    this._vtsiProjectView = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get vtsiProjectSorting(): VtsiProjectSorting | undefined {
    return this._vtsiProjectSorting;
  }
  set vtsiProjectSorting(value: VtsiProjectSorting | undefined) {
    this._vtsiProjectSorting = value;
  }
  get nluAgentNames(): string[] {
    return this._nluAgentNames;
  }
  set nluAgentNames(value: string[]) {
    this._nluAgentNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListVtsiProjectsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListVtsiProjectsRequest.AsObject {
    return {
      vtsiProjectView: this.vtsiProjectView,
      pageToken: this.pageToken,
      vtsiProjectSorting: this.vtsiProjectSorting
        ? this.vtsiProjectSorting.toObject()
        : undefined,
      nluAgentNames: (this.nluAgentNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListVtsiProjectsRequest.AsProtobufJSON {
    return {
      vtsiProjectView:
        VtsiProjectView[
          this.vtsiProjectView === null || this.vtsiProjectView === undefined
            ? 0
            : this.vtsiProjectView
        ],
      pageToken: this.pageToken,
      vtsiProjectSorting: this.vtsiProjectSorting
        ? this.vtsiProjectSorting.toProtobufJSON(options)
        : null,
      nluAgentNames: (this.nluAgentNames || []).slice()
    };
  }
}
export module ListVtsiProjectsRequest {
  /**
   * Standard JavaScript object representation for ListVtsiProjectsRequest
   */
  export interface AsObject {
    vtsiProjectView: VtsiProjectView;
    pageToken: string;
    vtsiProjectSorting?: VtsiProjectSorting.AsObject;
    nluAgentNames: string[];
  }

  /**
   * Protobuf JSON representation for ListVtsiProjectsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectView: string;
    pageToken: string;
    vtsiProjectSorting: VtsiProjectSorting.AsProtobufJSON | null;
    nluAgentNames: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.ListVtsiProjectsResponse
 */
export class ListVtsiProjectsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListVtsiProjectsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListVtsiProjectsResponse();
    ListVtsiProjectsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListVtsiProjectsResponse) {
    _instance.vtsiProjects = _instance.vtsiProjects || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListVtsiProjectsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new VtsiProject();
          _reader.readMessage(
            messageInitializer1,
            VtsiProject.deserializeBinaryFromReader
          );
          (_instance.vtsiProjects = _instance.vtsiProjects || []).push(
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

    ListVtsiProjectsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListVtsiProjectsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjects && _instance.vtsiProjects.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.vtsiProjects as any,
        VtsiProject.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _vtsiProjects?: VtsiProject[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListVtsiProjectsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListVtsiProjectsResponse.AsObject>) {
    _value = _value || {};
    this.vtsiProjects = (_value.vtsiProjects || []).map(
      m => new VtsiProject(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListVtsiProjectsResponse.refineValues(this);
  }
  get vtsiProjects(): VtsiProject[] | undefined {
    return this._vtsiProjects;
  }
  set vtsiProjects(value: VtsiProject[] | undefined) {
    this._vtsiProjects = value;
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
    ListVtsiProjectsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListVtsiProjectsResponse.AsObject {
    return {
      vtsiProjects: (this.vtsiProjects || []).map(m => m.toObject()),
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
  ): ListVtsiProjectsResponse.AsProtobufJSON {
    return {
      vtsiProjects: (this.vtsiProjects || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListVtsiProjectsResponse {
  /**
   * Standard JavaScript object representation for ListVtsiProjectsResponse
   */
  export interface AsObject {
    vtsiProjects?: VtsiProject.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListVtsiProjectsResponse
   */
  export interface AsProtobufJSON {
    vtsiProjects: VtsiProject.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.VtsiProjectSorting
 */
export class VtsiProjectSorting implements GrpcMessage {
  static id = 'ondewo.vtsi.VtsiProjectSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VtsiProjectSorting();
    VtsiProjectSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VtsiProjectSorting) {
    _instance.sortingField = _instance.sortingField || 0;
    _instance.sortingMode = _instance.sortingMode || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VtsiProjectSorting,
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

    VtsiProjectSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VtsiProjectSorting,
    _writer: BinaryWriter
  ) {
    if (_instance.sortingField) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: VtsiProjectSorting.VtsiProjectSortingField;
  private _sortingMode: VtsiProjectSortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VtsiProjectSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<VtsiProjectSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    VtsiProjectSorting.refineValues(this);
  }
  get sortingField(): VtsiProjectSorting.VtsiProjectSortingField {
    return this._sortingField;
  }
  set sortingField(value: VtsiProjectSorting.VtsiProjectSortingField) {
    this._sortingField = value;
  }
  get sortingMode(): VtsiProjectSortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: VtsiProjectSortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VtsiProjectSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VtsiProjectSorting.AsObject {
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
  ): VtsiProjectSorting.AsProtobufJSON {
    return {
      sortingField:
        VtsiProjectSorting.VtsiProjectSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        VtsiProjectSortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module VtsiProjectSorting {
  /**
   * Standard JavaScript object representation for VtsiProjectSorting
   */
  export interface AsObject {
    sortingField: VtsiProjectSorting.VtsiProjectSortingField;
    sortingMode: VtsiProjectSortingMode;
  }

  /**
   * Protobuf JSON representation for VtsiProjectSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum VtsiProjectSortingField {
    NO_VTSI_PROJECT_SORTING = 0,
    SORT_VTSI_PROJECT_BY_NAME = 1,
    SORT_VTSI_PROJECT_BY_DISPLAY_NAME = 2,
    SORT_VTSI_PROJECT_BY_CREATION_DATE = 3,
    SORT_VTSI_PROJECT_BY_LAST_MODIFIED = 4
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateVtsiProjectRequest
 */
export class UpdateVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateVtsiProjectRequest();
    UpdateVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateVtsiProjectRequest) {
    _instance.vtsiProject = _instance.vtsiProject || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateVtsiProjectRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProject = new VtsiProject();
          _reader.readMessage(
            _instance.vtsiProject,
            VtsiProject.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProject) {
      _writer.writeMessage(
        1,
        _instance.vtsiProject as any,
        VtsiProject.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProject?: VtsiProject;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProject = _value.vtsiProject
      ? new VtsiProject(_value.vtsiProject)
      : undefined;
    UpdateVtsiProjectRequest.refineValues(this);
  }
  get vtsiProject(): VtsiProject | undefined {
    return this._vtsiProject;
  }
  set vtsiProject(value: VtsiProject | undefined) {
    this._vtsiProject = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateVtsiProjectRequest.AsObject {
    return {
      vtsiProject: this.vtsiProject ? this.vtsiProject.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateVtsiProjectRequest.AsProtobufJSON {
    return {
      vtsiProject: this.vtsiProject
        ? this.vtsiProject.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for UpdateVtsiProjectRequest
   */
  export interface AsObject {
    vtsiProject?: VtsiProject.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    vtsiProject: VtsiProject.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateVtsiProjectResponse
 */
export class UpdateVtsiProjectResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateVtsiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateVtsiProjectResponse();
    UpdateVtsiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateVtsiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateVtsiProjectResponse,
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

    UpdateVtsiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateVtsiProjectResponse,
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
   * @param _value initial values object or instance of UpdateVtsiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateVtsiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    UpdateVtsiProjectResponse.refineValues(this);
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
    UpdateVtsiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateVtsiProjectResponse.AsObject {
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
  ): UpdateVtsiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module UpdateVtsiProjectResponse {
  /**
   * Standard JavaScript object representation for UpdateVtsiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UpdateVtsiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteVtsiProjectRequest
 */
export class DeleteVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteVtsiProjectRequest();
    DeleteVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteVtsiProjectRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteVtsiProjectRequest,
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

    DeleteVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteVtsiProjectRequest.refineValues(this);
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
    DeleteVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteVtsiProjectRequest.AsObject {
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
  ): DeleteVtsiProjectRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for DeleteVtsiProjectRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteVtsiProjectResponse
 */
export class DeleteVtsiProjectResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteVtsiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteVtsiProjectResponse();
    DeleteVtsiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteVtsiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteVtsiProjectResponse,
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

    DeleteVtsiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteVtsiProjectResponse,
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
   * @param _value initial values object or instance of DeleteVtsiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteVtsiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    DeleteVtsiProjectResponse.refineValues(this);
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
    DeleteVtsiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteVtsiProjectResponse.AsObject {
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
  ): DeleteVtsiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module DeleteVtsiProjectResponse {
  /**
   * Standard JavaScript object representation for DeleteVtsiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeleteVtsiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeployVtsiProjectRequest
 */
export class DeployVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeployVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeployVtsiProjectRequest();
    DeployVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeployVtsiProjectRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeployVtsiProjectRequest,
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

    DeployVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeployVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeployVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeployVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeployVtsiProjectRequest.refineValues(this);
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
    DeployVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeployVtsiProjectRequest.AsObject {
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
  ): DeployVtsiProjectRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeployVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for DeployVtsiProjectRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeployVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeployVtsiProjectResponse
 */
export class DeployVtsiProjectResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeployVtsiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeployVtsiProjectResponse();
    DeployVtsiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeployVtsiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeployVtsiProjectResponse,
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

    DeployVtsiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeployVtsiProjectResponse,
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
   * @param _value initial values object or instance of DeployVtsiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeployVtsiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    DeployVtsiProjectResponse.refineValues(this);
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
    DeployVtsiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeployVtsiProjectResponse.AsObject {
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
  ): DeployVtsiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module DeployVtsiProjectResponse {
  /**
   * Standard JavaScript object representation for DeployVtsiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for DeployVtsiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UndeployVtsiProjectRequest
 */
export class UndeployVtsiProjectRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UndeployVtsiProjectRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UndeployVtsiProjectRequest();
    UndeployVtsiProjectRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UndeployVtsiProjectRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UndeployVtsiProjectRequest,
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

    UndeployVtsiProjectRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UndeployVtsiProjectRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UndeployVtsiProjectRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UndeployVtsiProjectRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    UndeployVtsiProjectRequest.refineValues(this);
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
    UndeployVtsiProjectRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UndeployVtsiProjectRequest.AsObject {
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
  ): UndeployVtsiProjectRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module UndeployVtsiProjectRequest {
  /**
   * Standard JavaScript object representation for UndeployVtsiProjectRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for UndeployVtsiProjectRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UndeployVtsiProjectResponse
 */
export class UndeployVtsiProjectResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.UndeployVtsiProjectResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UndeployVtsiProjectResponse();
    UndeployVtsiProjectResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UndeployVtsiProjectResponse) {
    _instance.name = _instance.name || '';
    _instance.errorMessage = _instance.errorMessage || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UndeployVtsiProjectResponse,
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

    UndeployVtsiProjectResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UndeployVtsiProjectResponse,
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
   * @param _value initial values object or instance of UndeployVtsiProjectResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UndeployVtsiProjectResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.errorMessage = _value.errorMessage;
    UndeployVtsiProjectResponse.refineValues(this);
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
    UndeployVtsiProjectResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UndeployVtsiProjectResponse.AsObject {
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
  ): UndeployVtsiProjectResponse.AsProtobufJSON {
    return {
      name: this.name,
      errorMessage: this.errorMessage
    };
  }
}
export module UndeployVtsiProjectResponse {
  /**
   * Standard JavaScript object representation for UndeployVtsiProjectResponse
   */
  export interface AsObject {
    name: string;
    errorMessage: string;
  }

  /**
   * Protobuf JSON representation for UndeployVtsiProjectResponse
   */
  export interface AsProtobufJSON {
    name: string;
    errorMessage: string;
  }
}
