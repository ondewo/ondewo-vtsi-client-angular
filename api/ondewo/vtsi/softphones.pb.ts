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
import * as ondewoVtsi003 from '../../ondewo/vtsi/projects.pb';
export enum SoftphoneTransportSecurity {
  SOFTPHONE_TRANSPORT_SECURITY_UNSPECIFIED = 0,
  SOFTPHONE_TRANSPORT_SECURITY_CLIENT_CERTIFICATE = 1,
  SOFTPHONE_TRANSPORT_SECURITY_SERVER_TLS_ONLY = 2
}
export enum SoftphoneCertificateStatus {
  SOFTPHONE_CERTIFICATE_STATUS_UNSPECIFIED = 0,
  SOFTPHONE_CERTIFICATE_STATUS_ACTIVE = 1,
  SOFTPHONE_CERTIFICATE_STATUS_SUPERSEDED = 2,
  SOFTPHONE_CERTIFICATE_STATUS_REVOKED = 3
}
export enum SoftphoneSrtpMode {
  SOFTPHONE_SRTP_MODE_UNSPECIFIED = 0,
  SOFTPHONE_SRTP_MODE_SDES_MANDATORY = 1
}
/**
 * Message implementation for ondewo.vtsi.SoftphoneAccount
 */
export class SoftphoneAccount implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneAccount';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneAccount();
    SoftphoneAccount.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneAccount) {
    _instance.name = _instance.name || '';
    _instance.softphoneAccountId = _instance.softphoneAccountId || '';
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.sipUsername = _instance.sipUsername || '';
    _instance.transportSecurity = _instance.transportSecurity || 0;
    _instance.maxContacts = _instance.maxContacts || 0;
    _instance.labels = _instance.labels || {};
    _instance.allowedDestinations = _instance.allowedDestinations || [];
    _instance.currentCertificateName = _instance.currentCertificateName || '';
    _instance.currentCertificateSha256Fingerprint =
      _instance.currentCertificateSha256Fingerprint || '';
    _instance.currentCertificateExpireTime =
      _instance.currentCertificateExpireTime || undefined;
    _instance.sipPasswordSetAt = _instance.sipPasswordSetAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneAccount,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccountId = _reader.readString();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.displayName = _reader.readString();
          break;
        case 5:
          _instance.sipUsername = _reader.readString();
          break;
        case 6:
          _instance.transportSecurity = _reader.readEnum();
          break;
        case 7:
          _instance.enabled = _reader.readBool();
          break;
        case 8:
          _instance.maxContacts = _reader.readInt32();
          break;
        case 9:
          const msg_9 = {} as any;
          _reader.readMessage(
            msg_9,
            SoftphoneAccount.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_9.key] = msg_9.value;
          break;
        case 10:
          (_instance.allowedDestinations =
            _instance.allowedDestinations || []).push(_reader.readString());
          break;
        case 11:
          _instance.currentCertificateName = _reader.readString();
          break;
        case 12:
          _instance.currentCertificateSha256Fingerprint = _reader.readString();
          break;
        case 13:
          _instance.currentCertificateExpireTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.currentCertificateExpireTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.sipPasswordSetAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.sipPasswordSetAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.createdBy = _reader.readString();
          break;
        case 16:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.modifiedBy = _reader.readString();
          break;
        case 18:
          _instance.modifiedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneAccount.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneAccount,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.softphoneAccountId) {
      _writer.writeString(2, _instance.softphoneAccountId);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.displayName) {
      _writer.writeString(4, _instance.displayName);
    }
    if (_instance.sipUsername) {
      _writer.writeString(5, _instance.sipUsername);
    }
    if (_instance.transportSecurity) {
      _writer.writeEnum(6, _instance.transportSecurity);
    }
    if (_instance.enabled !== undefined && _instance.enabled !== null) {
      _writer.writeBool(7, _instance.enabled);
    }
    if (_instance.maxContacts) {
      _writer.writeInt32(8, _instance.maxContacts);
    }
    if (!!_instance.labels) {
      const keys_9 = Object.keys(_instance.labels as any);

      if (keys_9.length) {
        const repeated_9 = keys_9
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          9,
          repeated_9,
          SoftphoneAccount.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.allowedDestinations && _instance.allowedDestinations.length) {
      _writer.writeRepeatedString(10, _instance.allowedDestinations);
    }
    if (_instance.currentCertificateName) {
      _writer.writeString(11, _instance.currentCertificateName);
    }
    if (_instance.currentCertificateSha256Fingerprint) {
      _writer.writeString(12, _instance.currentCertificateSha256Fingerprint);
    }
    if (_instance.currentCertificateExpireTime) {
      _writer.writeMessage(
        13,
        _instance.currentCertificateExpireTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.sipPasswordSetAt) {
      _writer.writeMessage(
        14,
        _instance.sipPasswordSetAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(15, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        16,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(17, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        18,
        _instance.modifiedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _softphoneAccountId: string;
  private _vtsiProjectName: string;
  private _displayName: string;
  private _sipUsername: string;
  private _transportSecurity: SoftphoneTransportSecurity;
  private _enabled: boolean;
  private _maxContacts: number;
  private _labels: { [prop: string]: string };
  private _allowedDestinations: string[];
  private _currentCertificateName: string;
  private _currentCertificateSha256Fingerprint: string;
  private _currentCertificateExpireTime?: googleProtobuf002.Timestamp;
  private _sipPasswordSetAt?: googleProtobuf002.Timestamp;
  private _createdBy: string;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneAccount to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneAccount.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.softphoneAccountId = _value.softphoneAccountId;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.displayName = _value.displayName;
    this.sipUsername = _value.sipUsername;
    this.transportSecurity = _value.transportSecurity;
    this.enabled = _value.enabled;
    this.maxContacts = _value.maxContacts;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      (this.allowedDestinations = (_value.allowedDestinations || []).slice());
    this.currentCertificateName = _value.currentCertificateName;
    this.currentCertificateSha256Fingerprint =
      _value.currentCertificateSha256Fingerprint;
    this.currentCertificateExpireTime = _value.currentCertificateExpireTime
      ? new googleProtobuf002.Timestamp(_value.currentCertificateExpireTime)
      : undefined;
    this.sipPasswordSetAt = _value.sipPasswordSetAt
      ? new googleProtobuf002.Timestamp(_value.sipPasswordSetAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf002.Timestamp(_value.modifiedAt)
      : undefined;
    SoftphoneAccount.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get softphoneAccountId(): string {
    return this._softphoneAccountId;
  }
  set softphoneAccountId(value: string) {
    this._softphoneAccountId = value;
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
  get sipUsername(): string {
    return this._sipUsername;
  }
  set sipUsername(value: string) {
    this._sipUsername = value;
  }
  get transportSecurity(): SoftphoneTransportSecurity {
    return this._transportSecurity;
  }
  set transportSecurity(value: SoftphoneTransportSecurity) {
    this._transportSecurity = value;
  }
  get enabled(): boolean {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
  get maxContacts(): number {
    return this._maxContacts;
  }
  set maxContacts(value: number) {
    this._maxContacts = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }
  get allowedDestinations(): string[] {
    return this._allowedDestinations;
  }
  set allowedDestinations(value: string[]) {
    this._allowedDestinations = value;
  }
  get currentCertificateName(): string {
    return this._currentCertificateName;
  }
  set currentCertificateName(value: string) {
    this._currentCertificateName = value;
  }
  get currentCertificateSha256Fingerprint(): string {
    return this._currentCertificateSha256Fingerprint;
  }
  set currentCertificateSha256Fingerprint(value: string) {
    this._currentCertificateSha256Fingerprint = value;
  }
  get currentCertificateExpireTime(): googleProtobuf002.Timestamp | undefined {
    return this._currentCertificateExpireTime;
  }
  set currentCertificateExpireTime(
    value: googleProtobuf002.Timestamp | undefined
  ) {
    this._currentCertificateExpireTime = value;
  }
  get sipPasswordSetAt(): googleProtobuf002.Timestamp | undefined {
    return this._sipPasswordSetAt;
  }
  set sipPasswordSetAt(value: googleProtobuf002.Timestamp | undefined) {
    this._sipPasswordSetAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get modifiedAt(): googleProtobuf002.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._modifiedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneAccount.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneAccount.AsObject {
    return {
      name: this.name,
      softphoneAccountId: this.softphoneAccountId,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      sipUsername: this.sipUsername,
      transportSecurity: this.transportSecurity,
      enabled: this.enabled,
      maxContacts: this.maxContacts,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      allowedDestinations: (this.allowedDestinations || []).slice(),
      currentCertificateName: this.currentCertificateName,
      currentCertificateSha256Fingerprint: this
        .currentCertificateSha256Fingerprint,
      currentCertificateExpireTime: this.currentCertificateExpireTime
        ? this.currentCertificateExpireTime.toObject()
        : undefined,
      sipPasswordSetAt: this.sipPasswordSetAt
        ? this.sipPasswordSetAt.toObject()
        : undefined,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftphoneAccount.AsProtobufJSON {
    return {
      name: this.name,
      softphoneAccountId: this.softphoneAccountId,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      sipUsername: this.sipUsername,
      transportSecurity:
        SoftphoneTransportSecurity[
          this.transportSecurity === null ||
          this.transportSecurity === undefined
            ? 0
            : this.transportSecurity
        ],
      enabled: this.enabled,
      maxContacts: this.maxContacts,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      allowedDestinations: (this.allowedDestinations || []).slice(),
      currentCertificateName: this.currentCertificateName,
      currentCertificateSha256Fingerprint: this
        .currentCertificateSha256Fingerprint,
      currentCertificateExpireTime: this.currentCertificateExpireTime
        ? this.currentCertificateExpireTime.toProtobufJSON(options)
        : null,
      sipPasswordSetAt: this.sipPasswordSetAt
        ? this.sipPasswordSetAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null
    };
  }
}
export module SoftphoneAccount {
  /**
   * Standard JavaScript object representation for SoftphoneAccount
   */
  export interface AsObject {
    name: string;
    softphoneAccountId: string;
    vtsiProjectName: string;
    displayName: string;
    sipUsername: string;
    transportSecurity: SoftphoneTransportSecurity;
    enabled: boolean;
    maxContacts: number;
    labels: { [prop: string]: string };
    allowedDestinations: string[];
    currentCertificateName: string;
    currentCertificateSha256Fingerprint: string;
    currentCertificateExpireTime?: googleProtobuf002.Timestamp.AsObject;
    sipPasswordSetAt?: googleProtobuf002.Timestamp.AsObject;
    createdBy: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for SoftphoneAccount
   */
  export interface AsProtobufJSON {
    name: string;
    softphoneAccountId: string;
    vtsiProjectName: string;
    displayName: string;
    sipUsername: string;
    transportSecurity: string;
    enabled: boolean;
    maxContacts: number;
    labels: { [prop: string]: string };
    allowedDestinations: string[];
    currentCertificateName: string;
    currentCertificateSha256Fingerprint: string;
    currentCertificateExpireTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    sipPasswordSetAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }

  /**
   * Message implementation for ondewo.vtsi.SoftphoneAccount.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.SoftphoneAccount.LabelsEntry';

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
 * Message implementation for ondewo.vtsi.SoftphoneCertificate
 */
export class SoftphoneCertificate implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneCertificate';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneCertificate();
    SoftphoneCertificate.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneCertificate) {
    _instance.name = _instance.name || '';
    _instance.softphoneAccountName = _instance.softphoneAccountName || '';
    _instance.status = _instance.status || 0;
    _instance.certificatePem = _instance.certificatePem || '';
    _instance.issuerCaCertificatePem = _instance.issuerCaCertificatePem || '';
    _instance.sha256Fingerprint = _instance.sha256Fingerprint || '';
    _instance.serialNumber = _instance.serialNumber || '';
    _instance.subject = _instance.subject || '';
    _instance.notBefore = _instance.notBefore || undefined;
    _instance.notAfter = _instance.notAfter || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.supersededAt = _instance.supersededAt || undefined;
    _instance.supersededByCertificateName =
      _instance.supersededByCertificateName || '';
    _instance.revokedAt = _instance.revokedAt || undefined;
    _instance.revokedBy = _instance.revokedBy || '';
    _instance.revocationReason = _instance.revocationReason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneCertificate,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 3:
          _instance.status = _reader.readEnum();
          break;
        case 4:
          _instance.certificatePem = _reader.readString();
          break;
        case 5:
          _instance.issuerCaCertificatePem = _reader.readString();
          break;
        case 6:
          _instance.sha256Fingerprint = _reader.readString();
          break;
        case 7:
          _instance.serialNumber = _reader.readString();
          break;
        case 8:
          _instance.subject = _reader.readString();
          break;
        case 9:
          _instance.notBefore = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.notBefore,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.notAfter = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.notAfter,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.createdBy = _reader.readString();
          break;
        case 12:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.supersededAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.supersededAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.supersededByCertificateName = _reader.readString();
          break;
        case 15:
          _instance.revokedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.revokedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.revokedBy = _reader.readString();
          break;
        case 17:
          _instance.revocationReason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneCertificate.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneCertificate,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.softphoneAccountName) {
      _writer.writeString(2, _instance.softphoneAccountName);
    }
    if (_instance.status) {
      _writer.writeEnum(3, _instance.status);
    }
    if (_instance.certificatePem) {
      _writer.writeString(4, _instance.certificatePem);
    }
    if (_instance.issuerCaCertificatePem) {
      _writer.writeString(5, _instance.issuerCaCertificatePem);
    }
    if (_instance.sha256Fingerprint) {
      _writer.writeString(6, _instance.sha256Fingerprint);
    }
    if (_instance.serialNumber) {
      _writer.writeString(7, _instance.serialNumber);
    }
    if (_instance.subject) {
      _writer.writeString(8, _instance.subject);
    }
    if (_instance.notBefore) {
      _writer.writeMessage(
        9,
        _instance.notBefore as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.notAfter) {
      _writer.writeMessage(
        10,
        _instance.notAfter as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(11, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        12,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.supersededAt) {
      _writer.writeMessage(
        13,
        _instance.supersededAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.supersededByCertificateName) {
      _writer.writeString(14, _instance.supersededByCertificateName);
    }
    if (_instance.revokedAt) {
      _writer.writeMessage(
        15,
        _instance.revokedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.revokedBy) {
      _writer.writeString(16, _instance.revokedBy);
    }
    if (_instance.revocationReason) {
      _writer.writeString(17, _instance.revocationReason);
    }
  }

  private _name: string;
  private _softphoneAccountName: string;
  private _status: SoftphoneCertificateStatus;
  private _certificatePem: string;
  private _issuerCaCertificatePem: string;
  private _sha256Fingerprint: string;
  private _serialNumber: string;
  private _subject: string;
  private _notBefore?: googleProtobuf002.Timestamp;
  private _notAfter?: googleProtobuf002.Timestamp;
  private _createdBy: string;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _supersededAt?: googleProtobuf002.Timestamp;
  private _supersededByCertificateName: string;
  private _revokedAt?: googleProtobuf002.Timestamp;
  private _revokedBy: string;
  private _revocationReason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneCertificate to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneCertificate.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.softphoneAccountName = _value.softphoneAccountName;
    this.status = _value.status;
    this.certificatePem = _value.certificatePem;
    this.issuerCaCertificatePem = _value.issuerCaCertificatePem;
    this.sha256Fingerprint = _value.sha256Fingerprint;
    this.serialNumber = _value.serialNumber;
    this.subject = _value.subject;
    this.notBefore = _value.notBefore
      ? new googleProtobuf002.Timestamp(_value.notBefore)
      : undefined;
    this.notAfter = _value.notAfter
      ? new googleProtobuf002.Timestamp(_value.notAfter)
      : undefined;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.supersededAt = _value.supersededAt
      ? new googleProtobuf002.Timestamp(_value.supersededAt)
      : undefined;
    this.supersededByCertificateName = _value.supersededByCertificateName;
    this.revokedAt = _value.revokedAt
      ? new googleProtobuf002.Timestamp(_value.revokedAt)
      : undefined;
    this.revokedBy = _value.revokedBy;
    this.revocationReason = _value.revocationReason;
    SoftphoneCertificate.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    this._softphoneAccountName = value;
  }
  get status(): SoftphoneCertificateStatus {
    return this._status;
  }
  set status(value: SoftphoneCertificateStatus) {
    this._status = value;
  }
  get certificatePem(): string {
    return this._certificatePem;
  }
  set certificatePem(value: string) {
    this._certificatePem = value;
  }
  get issuerCaCertificatePem(): string {
    return this._issuerCaCertificatePem;
  }
  set issuerCaCertificatePem(value: string) {
    this._issuerCaCertificatePem = value;
  }
  get sha256Fingerprint(): string {
    return this._sha256Fingerprint;
  }
  set sha256Fingerprint(value: string) {
    this._sha256Fingerprint = value;
  }
  get serialNumber(): string {
    return this._serialNumber;
  }
  set serialNumber(value: string) {
    this._serialNumber = value;
  }
  get subject(): string {
    return this._subject;
  }
  set subject(value: string) {
    this._subject = value;
  }
  get notBefore(): googleProtobuf002.Timestamp | undefined {
    return this._notBefore;
  }
  set notBefore(value: googleProtobuf002.Timestamp | undefined) {
    this._notBefore = value;
  }
  get notAfter(): googleProtobuf002.Timestamp | undefined {
    return this._notAfter;
  }
  set notAfter(value: googleProtobuf002.Timestamp | undefined) {
    this._notAfter = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get supersededAt(): googleProtobuf002.Timestamp | undefined {
    return this._supersededAt;
  }
  set supersededAt(value: googleProtobuf002.Timestamp | undefined) {
    this._supersededAt = value;
  }
  get supersededByCertificateName(): string {
    return this._supersededByCertificateName;
  }
  set supersededByCertificateName(value: string) {
    this._supersededByCertificateName = value;
  }
  get revokedAt(): googleProtobuf002.Timestamp | undefined {
    return this._revokedAt;
  }
  set revokedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._revokedAt = value;
  }
  get revokedBy(): string {
    return this._revokedBy;
  }
  set revokedBy(value: string) {
    this._revokedBy = value;
  }
  get revocationReason(): string {
    return this._revocationReason;
  }
  set revocationReason(value: string) {
    this._revocationReason = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneCertificate.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneCertificate.AsObject {
    return {
      name: this.name,
      softphoneAccountName: this.softphoneAccountName,
      status: this.status,
      certificatePem: this.certificatePem,
      issuerCaCertificatePem: this.issuerCaCertificatePem,
      sha256Fingerprint: this.sha256Fingerprint,
      serialNumber: this.serialNumber,
      subject: this.subject,
      notBefore: this.notBefore ? this.notBefore.toObject() : undefined,
      notAfter: this.notAfter ? this.notAfter.toObject() : undefined,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      supersededAt: this.supersededAt
        ? this.supersededAt.toObject()
        : undefined,
      supersededByCertificateName: this.supersededByCertificateName,
      revokedAt: this.revokedAt ? this.revokedAt.toObject() : undefined,
      revokedBy: this.revokedBy,
      revocationReason: this.revocationReason
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftphoneCertificate.AsProtobufJSON {
    return {
      name: this.name,
      softphoneAccountName: this.softphoneAccountName,
      status:
        SoftphoneCertificateStatus[
          this.status === null || this.status === undefined ? 0 : this.status
        ],
      certificatePem: this.certificatePem,
      issuerCaCertificatePem: this.issuerCaCertificatePem,
      sha256Fingerprint: this.sha256Fingerprint,
      serialNumber: this.serialNumber,
      subject: this.subject,
      notBefore: this.notBefore ? this.notBefore.toProtobufJSON(options) : null,
      notAfter: this.notAfter ? this.notAfter.toProtobufJSON(options) : null,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      supersededAt: this.supersededAt
        ? this.supersededAt.toProtobufJSON(options)
        : null,
      supersededByCertificateName: this.supersededByCertificateName,
      revokedAt: this.revokedAt ? this.revokedAt.toProtobufJSON(options) : null,
      revokedBy: this.revokedBy,
      revocationReason: this.revocationReason
    };
  }
}
export module SoftphoneCertificate {
  /**
   * Standard JavaScript object representation for SoftphoneCertificate
   */
  export interface AsObject {
    name: string;
    softphoneAccountName: string;
    status: SoftphoneCertificateStatus;
    certificatePem: string;
    issuerCaCertificatePem: string;
    sha256Fingerprint: string;
    serialNumber: string;
    subject: string;
    notBefore?: googleProtobuf002.Timestamp.AsObject;
    notAfter?: googleProtobuf002.Timestamp.AsObject;
    createdBy: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    supersededAt?: googleProtobuf002.Timestamp.AsObject;
    supersededByCertificateName: string;
    revokedAt?: googleProtobuf002.Timestamp.AsObject;
    revokedBy: string;
    revocationReason: string;
  }

  /**
   * Protobuf JSON representation for SoftphoneCertificate
   */
  export interface AsProtobufJSON {
    name: string;
    softphoneAccountName: string;
    status: string;
    certificatePem: string;
    issuerCaCertificatePem: string;
    sha256Fingerprint: string;
    serialNumber: string;
    subject: string;
    notBefore: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    notAfter: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    createdAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    supersededAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    supersededByCertificateName: string;
    revokedAt: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    revokedBy: string;
    revocationReason: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SoftphoneCredentials
 */
export class SoftphoneCredentials implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneCredentials';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneCredentials();
    SoftphoneCredentials.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneCredentials) {
    _instance.sipPassword = _instance.sipPassword || '';
    _instance.pkcs12Bundle = _instance.pkcs12Bundle || new Uint8Array();
    _instance.pkcs12Password = _instance.pkcs12Password || '';
    _instance.certificate = _instance.certificate || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneCredentials,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sipPassword = _reader.readString();
          break;
        case 2:
          _instance.pkcs12Bundle = _reader.readBytes();
          break;
        case 3:
          _instance.pkcs12Password = _reader.readString();
          break;
        case 4:
          _instance.certificate = new SoftphoneCertificate();
          _reader.readMessage(
            _instance.certificate,
            SoftphoneCertificate.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneCredentials.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneCredentials,
    _writer: BinaryWriter
  ) {
    if (_instance.sipPassword) {
      _writer.writeString(1, _instance.sipPassword);
    }
    if (_instance.pkcs12Bundle && _instance.pkcs12Bundle.length) {
      _writer.writeBytes(2, _instance.pkcs12Bundle);
    }
    if (_instance.pkcs12Password) {
      _writer.writeString(3, _instance.pkcs12Password);
    }
    if (_instance.certificate) {
      _writer.writeMessage(
        4,
        _instance.certificate as any,
        SoftphoneCertificate.serializeBinaryToWriter
      );
    }
  }

  private _sipPassword: string;
  private _pkcs12Bundle: Uint8Array;
  private _pkcs12Password: string;
  private _certificate?: SoftphoneCertificate;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneCredentials to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneCredentials.AsObject>) {
    _value = _value || {};
    this.sipPassword = _value.sipPassword;
    this.pkcs12Bundle = _value.pkcs12Bundle;
    this.pkcs12Password = _value.pkcs12Password;
    this.certificate = _value.certificate
      ? new SoftphoneCertificate(_value.certificate)
      : undefined;
    SoftphoneCredentials.refineValues(this);
  }
  get sipPassword(): string {
    return this._sipPassword;
  }
  set sipPassword(value: string) {
    this._sipPassword = value;
  }
  get pkcs12Bundle(): Uint8Array {
    return this._pkcs12Bundle;
  }
  set pkcs12Bundle(value: Uint8Array) {
    this._pkcs12Bundle = value;
  }
  get pkcs12Password(): string {
    return this._pkcs12Password;
  }
  set pkcs12Password(value: string) {
    this._pkcs12Password = value;
  }
  get certificate(): SoftphoneCertificate | undefined {
    return this._certificate;
  }
  set certificate(value: SoftphoneCertificate | undefined) {
    this._certificate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneCredentials.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneCredentials.AsObject {
    return {
      sipPassword: this.sipPassword,
      pkcs12Bundle: this.pkcs12Bundle
        ? this.pkcs12Bundle.subarray(0)
        : new Uint8Array(),
      pkcs12Password: this.pkcs12Password,
      certificate: this.certificate ? this.certificate.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftphoneCredentials.AsProtobufJSON {
    return {
      sipPassword: this.sipPassword,
      pkcs12Bundle: this.pkcs12Bundle
        ? uint8ArrayToBase64(this.pkcs12Bundle)
        : '',
      pkcs12Password: this.pkcs12Password,
      certificate: this.certificate
        ? this.certificate.toProtobufJSON(options)
        : null
    };
  }
}
export module SoftphoneCredentials {
  /**
   * Standard JavaScript object representation for SoftphoneCredentials
   */
  export interface AsObject {
    sipPassword: string;
    pkcs12Bundle: Uint8Array;
    pkcs12Password: string;
    certificate?: SoftphoneCertificate.AsObject;
  }

  /**
   * Protobuf JSON representation for SoftphoneCredentials
   */
  export interface AsProtobufJSON {
    sipPassword: string;
    pkcs12Bundle: string;
    pkcs12Password: string;
    certificate: SoftphoneCertificate.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.SoftphoneProvisioning
 */
export class SoftphoneProvisioning implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneProvisioning';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneProvisioning();
    SoftphoneProvisioning.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneProvisioning) {
    _instance.softphoneAccountName = _instance.softphoneAccountName || '';
    _instance.transportSecurity = _instance.transportSecurity || 0;
    _instance.sipDomain = _instance.sipDomain || '';
    _instance.sipAddress = _instance.sipAddress || '';
    _instance.sipServerHost = _instance.sipServerHost || '';
    _instance.sipServerPort = _instance.sipServerPort || 0;
    _instance.sipTransport = _instance.sipTransport || '';
    _instance.outboundProxy = _instance.outboundProxy || '';
    _instance.username = _instance.username || '';
    _instance.authUsername = _instance.authUsername || '';
    _instance.realm = _instance.realm || '';
    _instance.srtpMode = _instance.srtpMode || 0;
    _instance.codecs = _instance.codecs || [];
    _instance.serverCaCertificatePem = _instance.serverCaCertificatePem || '';
    _instance.serverCertificateSha256Fingerprint =
      _instance.serverCertificateSha256Fingerprint || '';
    _instance.clientCertificateName = _instance.clientCertificateName || '';
    _instance.clientCertificateSha256Fingerprint =
      _instance.clientCertificateSha256Fingerprint || '';
    _instance.clientCertificateExpireTime =
      _instance.clientCertificateExpireTime || undefined;
    _instance.zoiperInstructions = _instance.zoiperInstructions || '';
    _instance.clientCertificateSupportNote =
      _instance.clientCertificateSupportNote || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneProvisioning,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 2:
          _instance.transportSecurity = _reader.readEnum();
          break;
        case 3:
          _instance.sipDomain = _reader.readString();
          break;
        case 4:
          _instance.sipAddress = _reader.readString();
          break;
        case 5:
          _instance.sipServerHost = _reader.readString();
          break;
        case 6:
          _instance.sipServerPort = _reader.readInt32();
          break;
        case 7:
          _instance.sipTransport = _reader.readString();
          break;
        case 8:
          _instance.outboundProxy = _reader.readString();
          break;
        case 9:
          _instance.username = _reader.readString();
          break;
        case 10:
          _instance.authUsername = _reader.readString();
          break;
        case 11:
          _instance.realm = _reader.readString();
          break;
        case 12:
          _instance.srtpMode = _reader.readEnum();
          break;
        case 13:
          (_instance.codecs = _instance.codecs || []).push(
            _reader.readString()
          );
          break;
        case 14:
          _instance.serverCaCertificatePem = _reader.readString();
          break;
        case 15:
          _instance.serverCertificateSha256Fingerprint = _reader.readString();
          break;
        case 16:
          _instance.clientCertificateName = _reader.readString();
          break;
        case 17:
          _instance.clientCertificateSha256Fingerprint = _reader.readString();
          break;
        case 18:
          _instance.clientCertificateExpireTime = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.clientCertificateExpireTime,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.zoiperInstructions = _reader.readString();
          break;
        case 20:
          _instance.clientCertificateSupportNote = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneProvisioning.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneProvisioning,
    _writer: BinaryWriter
  ) {
    if (_instance.softphoneAccountName) {
      _writer.writeString(1, _instance.softphoneAccountName);
    }
    if (_instance.transportSecurity) {
      _writer.writeEnum(2, _instance.transportSecurity);
    }
    if (_instance.sipDomain) {
      _writer.writeString(3, _instance.sipDomain);
    }
    if (_instance.sipAddress) {
      _writer.writeString(4, _instance.sipAddress);
    }
    if (_instance.sipServerHost) {
      _writer.writeString(5, _instance.sipServerHost);
    }
    if (_instance.sipServerPort) {
      _writer.writeInt32(6, _instance.sipServerPort);
    }
    if (_instance.sipTransport) {
      _writer.writeString(7, _instance.sipTransport);
    }
    if (_instance.outboundProxy) {
      _writer.writeString(8, _instance.outboundProxy);
    }
    if (_instance.username) {
      _writer.writeString(9, _instance.username);
    }
    if (_instance.authUsername) {
      _writer.writeString(10, _instance.authUsername);
    }
    if (_instance.realm) {
      _writer.writeString(11, _instance.realm);
    }
    if (_instance.srtpMode) {
      _writer.writeEnum(12, _instance.srtpMode);
    }
    if (_instance.codecs && _instance.codecs.length) {
      _writer.writeRepeatedString(13, _instance.codecs);
    }
    if (_instance.serverCaCertificatePem) {
      _writer.writeString(14, _instance.serverCaCertificatePem);
    }
    if (_instance.serverCertificateSha256Fingerprint) {
      _writer.writeString(15, _instance.serverCertificateSha256Fingerprint);
    }
    if (_instance.clientCertificateName) {
      _writer.writeString(16, _instance.clientCertificateName);
    }
    if (_instance.clientCertificateSha256Fingerprint) {
      _writer.writeString(17, _instance.clientCertificateSha256Fingerprint);
    }
    if (_instance.clientCertificateExpireTime) {
      _writer.writeMessage(
        18,
        _instance.clientCertificateExpireTime as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.zoiperInstructions) {
      _writer.writeString(19, _instance.zoiperInstructions);
    }
    if (_instance.clientCertificateSupportNote) {
      _writer.writeString(20, _instance.clientCertificateSupportNote);
    }
  }

  private _softphoneAccountName: string;
  private _transportSecurity: SoftphoneTransportSecurity;
  private _sipDomain: string;
  private _sipAddress: string;
  private _sipServerHost: string;
  private _sipServerPort: number;
  private _sipTransport: string;
  private _outboundProxy: string;
  private _username: string;
  private _authUsername: string;
  private _realm: string;
  private _srtpMode: SoftphoneSrtpMode;
  private _codecs: string[];
  private _serverCaCertificatePem: string;
  private _serverCertificateSha256Fingerprint: string;
  private _clientCertificateName: string;
  private _clientCertificateSha256Fingerprint: string;
  private _clientCertificateExpireTime?: googleProtobuf002.Timestamp;
  private _zoiperInstructions: string;
  private _clientCertificateSupportNote: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneProvisioning to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneProvisioning.AsObject>) {
    _value = _value || {};
    this.softphoneAccountName = _value.softphoneAccountName;
    this.transportSecurity = _value.transportSecurity;
    this.sipDomain = _value.sipDomain;
    this.sipAddress = _value.sipAddress;
    this.sipServerHost = _value.sipServerHost;
    this.sipServerPort = _value.sipServerPort;
    this.sipTransport = _value.sipTransport;
    this.outboundProxy = _value.outboundProxy;
    this.username = _value.username;
    this.authUsername = _value.authUsername;
    this.realm = _value.realm;
    this.srtpMode = _value.srtpMode;
    this.codecs = (_value.codecs || []).slice();
    this.serverCaCertificatePem = _value.serverCaCertificatePem;
    this.serverCertificateSha256Fingerprint =
      _value.serverCertificateSha256Fingerprint;
    this.clientCertificateName = _value.clientCertificateName;
    this.clientCertificateSha256Fingerprint =
      _value.clientCertificateSha256Fingerprint;
    this.clientCertificateExpireTime = _value.clientCertificateExpireTime
      ? new googleProtobuf002.Timestamp(_value.clientCertificateExpireTime)
      : undefined;
    this.zoiperInstructions = _value.zoiperInstructions;
    this.clientCertificateSupportNote = _value.clientCertificateSupportNote;
    SoftphoneProvisioning.refineValues(this);
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    this._softphoneAccountName = value;
  }
  get transportSecurity(): SoftphoneTransportSecurity {
    return this._transportSecurity;
  }
  set transportSecurity(value: SoftphoneTransportSecurity) {
    this._transportSecurity = value;
  }
  get sipDomain(): string {
    return this._sipDomain;
  }
  set sipDomain(value: string) {
    this._sipDomain = value;
  }
  get sipAddress(): string {
    return this._sipAddress;
  }
  set sipAddress(value: string) {
    this._sipAddress = value;
  }
  get sipServerHost(): string {
    return this._sipServerHost;
  }
  set sipServerHost(value: string) {
    this._sipServerHost = value;
  }
  get sipServerPort(): number {
    return this._sipServerPort;
  }
  set sipServerPort(value: number) {
    this._sipServerPort = value;
  }
  get sipTransport(): string {
    return this._sipTransport;
  }
  set sipTransport(value: string) {
    this._sipTransport = value;
  }
  get outboundProxy(): string {
    return this._outboundProxy;
  }
  set outboundProxy(value: string) {
    this._outboundProxy = value;
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get authUsername(): string {
    return this._authUsername;
  }
  set authUsername(value: string) {
    this._authUsername = value;
  }
  get realm(): string {
    return this._realm;
  }
  set realm(value: string) {
    this._realm = value;
  }
  get srtpMode(): SoftphoneSrtpMode {
    return this._srtpMode;
  }
  set srtpMode(value: SoftphoneSrtpMode) {
    this._srtpMode = value;
  }
  get codecs(): string[] {
    return this._codecs;
  }
  set codecs(value: string[]) {
    this._codecs = value;
  }
  get serverCaCertificatePem(): string {
    return this._serverCaCertificatePem;
  }
  set serverCaCertificatePem(value: string) {
    this._serverCaCertificatePem = value;
  }
  get serverCertificateSha256Fingerprint(): string {
    return this._serverCertificateSha256Fingerprint;
  }
  set serverCertificateSha256Fingerprint(value: string) {
    this._serverCertificateSha256Fingerprint = value;
  }
  get clientCertificateName(): string {
    return this._clientCertificateName;
  }
  set clientCertificateName(value: string) {
    this._clientCertificateName = value;
  }
  get clientCertificateSha256Fingerprint(): string {
    return this._clientCertificateSha256Fingerprint;
  }
  set clientCertificateSha256Fingerprint(value: string) {
    this._clientCertificateSha256Fingerprint = value;
  }
  get clientCertificateExpireTime(): googleProtobuf002.Timestamp | undefined {
    return this._clientCertificateExpireTime;
  }
  set clientCertificateExpireTime(
    value: googleProtobuf002.Timestamp | undefined
  ) {
    this._clientCertificateExpireTime = value;
  }
  get zoiperInstructions(): string {
    return this._zoiperInstructions;
  }
  set zoiperInstructions(value: string) {
    this._zoiperInstructions = value;
  }
  get clientCertificateSupportNote(): string {
    return this._clientCertificateSupportNote;
  }
  set clientCertificateSupportNote(value: string) {
    this._clientCertificateSupportNote = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneProvisioning.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneProvisioning.AsObject {
    return {
      softphoneAccountName: this.softphoneAccountName,
      transportSecurity: this.transportSecurity,
      sipDomain: this.sipDomain,
      sipAddress: this.sipAddress,
      sipServerHost: this.sipServerHost,
      sipServerPort: this.sipServerPort,
      sipTransport: this.sipTransport,
      outboundProxy: this.outboundProxy,
      username: this.username,
      authUsername: this.authUsername,
      realm: this.realm,
      srtpMode: this.srtpMode,
      codecs: (this.codecs || []).slice(),
      serverCaCertificatePem: this.serverCaCertificatePem,
      serverCertificateSha256Fingerprint: this
        .serverCertificateSha256Fingerprint,
      clientCertificateName: this.clientCertificateName,
      clientCertificateSha256Fingerprint: this
        .clientCertificateSha256Fingerprint,
      clientCertificateExpireTime: this.clientCertificateExpireTime
        ? this.clientCertificateExpireTime.toObject()
        : undefined,
      zoiperInstructions: this.zoiperInstructions,
      clientCertificateSupportNote: this.clientCertificateSupportNote
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftphoneProvisioning.AsProtobufJSON {
    return {
      softphoneAccountName: this.softphoneAccountName,
      transportSecurity:
        SoftphoneTransportSecurity[
          this.transportSecurity === null ||
          this.transportSecurity === undefined
            ? 0
            : this.transportSecurity
        ],
      sipDomain: this.sipDomain,
      sipAddress: this.sipAddress,
      sipServerHost: this.sipServerHost,
      sipServerPort: this.sipServerPort,
      sipTransport: this.sipTransport,
      outboundProxy: this.outboundProxy,
      username: this.username,
      authUsername: this.authUsername,
      realm: this.realm,
      srtpMode:
        SoftphoneSrtpMode[
          this.srtpMode === null || this.srtpMode === undefined
            ? 0
            : this.srtpMode
        ],
      codecs: (this.codecs || []).slice(),
      serverCaCertificatePem: this.serverCaCertificatePem,
      serverCertificateSha256Fingerprint: this
        .serverCertificateSha256Fingerprint,
      clientCertificateName: this.clientCertificateName,
      clientCertificateSha256Fingerprint: this
        .clientCertificateSha256Fingerprint,
      clientCertificateExpireTime: this.clientCertificateExpireTime
        ? this.clientCertificateExpireTime.toProtobufJSON(options)
        : null,
      zoiperInstructions: this.zoiperInstructions,
      clientCertificateSupportNote: this.clientCertificateSupportNote
    };
  }
}
export module SoftphoneProvisioning {
  /**
   * Standard JavaScript object representation for SoftphoneProvisioning
   */
  export interface AsObject {
    softphoneAccountName: string;
    transportSecurity: SoftphoneTransportSecurity;
    sipDomain: string;
    sipAddress: string;
    sipServerHost: string;
    sipServerPort: number;
    sipTransport: string;
    outboundProxy: string;
    username: string;
    authUsername: string;
    realm: string;
    srtpMode: SoftphoneSrtpMode;
    codecs: string[];
    serverCaCertificatePem: string;
    serverCertificateSha256Fingerprint: string;
    clientCertificateName: string;
    clientCertificateSha256Fingerprint: string;
    clientCertificateExpireTime?: googleProtobuf002.Timestamp.AsObject;
    zoiperInstructions: string;
    clientCertificateSupportNote: string;
  }

  /**
   * Protobuf JSON representation for SoftphoneProvisioning
   */
  export interface AsProtobufJSON {
    softphoneAccountName: string;
    transportSecurity: string;
    sipDomain: string;
    sipAddress: string;
    sipServerHost: string;
    sipServerPort: number;
    sipTransport: string;
    outboundProxy: string;
    username: string;
    authUsername: string;
    realm: string;
    srtpMode: string;
    codecs: string[];
    serverCaCertificatePem: string;
    serverCertificateSha256Fingerprint: string;
    clientCertificateName: string;
    clientCertificateSha256Fingerprint: string;
    clientCertificateExpireTime: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    zoiperInstructions: string;
    clientCertificateSupportNote: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SoftphoneAccountFilter
 */
export class SoftphoneAccountFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneAccountFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneAccountFilter();
    SoftphoneAccountFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneAccountFilter) {
    _instance.transportSecurities = _instance.transportSecurities || [];
    _instance.labels = _instance.labels || {};
    _instance.displayNameContains = _instance.displayNameContains || '';
    _instance.sipUsernameContains = _instance.sipUsernameContains || '';
    _instance.certificateExpiresBefore =
      _instance.certificateExpiresBefore || undefined;
    _instance.certificateExpiresAfter =
      _instance.certificateExpiresAfter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneAccountFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _reader.readPackableEnumInto(
            (_instance.transportSecurities =
              _instance.transportSecurities || [])
          );
          break;
        case 2:
          _instance.enabled = _reader.readBool();
          break;
        case 3:
          const msg_3 = {} as any;
          _reader.readMessage(
            msg_3,
            SoftphoneAccountFilter.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_3.key] = msg_3.value;
          break;
        case 4:
          _instance.displayNameContains = _reader.readString();
          break;
        case 5:
          _instance.sipUsernameContains = _reader.readString();
          break;
        case 6:
          _instance.certificateExpiresBefore = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.certificateExpiresBefore,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.certificateExpiresAfter = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.certificateExpiresAfter,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneAccountFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneAccountFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.transportSecurities && _instance.transportSecurities.length) {
      _writer.writePackedEnum(1, _instance.transportSecurities);
    }
    if (_instance.enabled !== undefined && _instance.enabled !== null) {
      _writer.writeBool(2, _instance.enabled);
    }
    if (!!_instance.labels) {
      const keys_3 = Object.keys(_instance.labels as any);

      if (keys_3.length) {
        const repeated_3 = keys_3
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          3,
          repeated_3,
          SoftphoneAccountFilter.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.displayNameContains) {
      _writer.writeString(4, _instance.displayNameContains);
    }
    if (_instance.sipUsernameContains) {
      _writer.writeString(5, _instance.sipUsernameContains);
    }
    if (_instance.certificateExpiresBefore) {
      _writer.writeMessage(
        6,
        _instance.certificateExpiresBefore as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.certificateExpiresAfter) {
      _writer.writeMessage(
        7,
        _instance.certificateExpiresAfter as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _transportSecurities: SoftphoneTransportSecurity[];
  private _enabled: boolean;
  private _labels: { [prop: string]: string };
  private _displayNameContains: string;
  private _sipUsernameContains: string;
  private _certificateExpiresBefore?: googleProtobuf002.Timestamp;
  private _certificateExpiresAfter?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneAccountFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneAccountFilter.AsObject>) {
    _value = _value || {};
    this.transportSecurities = (_value.transportSecurities || []).slice();
    this.enabled = _value.enabled;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      (this.displayNameContains = _value.displayNameContains);
    this.sipUsernameContains = _value.sipUsernameContains;
    this.certificateExpiresBefore = _value.certificateExpiresBefore
      ? new googleProtobuf002.Timestamp(_value.certificateExpiresBefore)
      : undefined;
    this.certificateExpiresAfter = _value.certificateExpiresAfter
      ? new googleProtobuf002.Timestamp(_value.certificateExpiresAfter)
      : undefined;
    SoftphoneAccountFilter.refineValues(this);
  }
  get transportSecurities(): SoftphoneTransportSecurity[] {
    return this._transportSecurities;
  }
  set transportSecurities(value: SoftphoneTransportSecurity[]) {
    this._transportSecurities = value;
  }
  get enabled(): boolean {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }
  get displayNameContains(): string {
    return this._displayNameContains;
  }
  set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  get sipUsernameContains(): string {
    return this._sipUsernameContains;
  }
  set sipUsernameContains(value: string) {
    this._sipUsernameContains = value;
  }
  get certificateExpiresBefore(): googleProtobuf002.Timestamp | undefined {
    return this._certificateExpiresBefore;
  }
  set certificateExpiresBefore(value: googleProtobuf002.Timestamp | undefined) {
    this._certificateExpiresBefore = value;
  }
  get certificateExpiresAfter(): googleProtobuf002.Timestamp | undefined {
    return this._certificateExpiresAfter;
  }
  set certificateExpiresAfter(value: googleProtobuf002.Timestamp | undefined) {
    this._certificateExpiresAfter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneAccountFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneAccountFilter.AsObject {
    return {
      transportSecurities: (this.transportSecurities || []).slice(),
      enabled: this.enabled,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      displayNameContains: this.displayNameContains,
      sipUsernameContains: this.sipUsernameContains,
      certificateExpiresBefore: this.certificateExpiresBefore
        ? this.certificateExpiresBefore.toObject()
        : undefined,
      certificateExpiresAfter: this.certificateExpiresAfter
        ? this.certificateExpiresAfter.toObject()
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
  ): SoftphoneAccountFilter.AsProtobufJSON {
    return {
      transportSecurities: (this.transportSecurities || []).map(
        v => SoftphoneTransportSecurity[v]
      ),
      enabled: this.enabled,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      displayNameContains: this.displayNameContains,
      sipUsernameContains: this.sipUsernameContains,
      certificateExpiresBefore: this.certificateExpiresBefore
        ? this.certificateExpiresBefore.toProtobufJSON(options)
        : null,
      certificateExpiresAfter: this.certificateExpiresAfter
        ? this.certificateExpiresAfter.toProtobufJSON(options)
        : null
    };
  }
}
export module SoftphoneAccountFilter {
  /**
   * Standard JavaScript object representation for SoftphoneAccountFilter
   */
  export interface AsObject {
    transportSecurities: SoftphoneTransportSecurity[];
    enabled: boolean;
    labels: { [prop: string]: string };
    displayNameContains: string;
    sipUsernameContains: string;
    certificateExpiresBefore?: googleProtobuf002.Timestamp.AsObject;
    certificateExpiresAfter?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for SoftphoneAccountFilter
   */
  export interface AsProtobufJSON {
    transportSecurities: string[];
    enabled: boolean;
    labels: { [prop: string]: string };
    displayNameContains: string;
    sipUsernameContains: string;
    certificateExpiresBefore: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    certificateExpiresAfter: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }

  /**
   * Message implementation for ondewo.vtsi.SoftphoneAccountFilter.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.SoftphoneAccountFilter.LabelsEntry';

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
 * Message implementation for ondewo.vtsi.SoftphoneCertificateFilter
 */
export class SoftphoneCertificateFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneCertificateFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneCertificateFilter();
    SoftphoneCertificateFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneCertificateFilter) {
    _instance.statuses = _instance.statuses || [];
    _instance.expiresBefore = _instance.expiresBefore || undefined;
    _instance.expiresAfter = _instance.expiresAfter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneCertificateFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _reader.readPackableEnumInto(
            (_instance.statuses = _instance.statuses || [])
          );
          break;
        case 2:
          _instance.expiresBefore = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.expiresBefore,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.expiresAfter = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.expiresAfter,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SoftphoneCertificateFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneCertificateFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedEnum(1, _instance.statuses);
    }
    if (_instance.expiresBefore) {
      _writer.writeMessage(
        2,
        _instance.expiresBefore as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.expiresAfter) {
      _writer.writeMessage(
        3,
        _instance.expiresAfter as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _statuses: SoftphoneCertificateStatus[];
  private _expiresBefore?: googleProtobuf002.Timestamp;
  private _expiresAfter?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneCertificateFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneCertificateFilter.AsObject>) {
    _value = _value || {};
    this.statuses = (_value.statuses || []).slice();
    this.expiresBefore = _value.expiresBefore
      ? new googleProtobuf002.Timestamp(_value.expiresBefore)
      : undefined;
    this.expiresAfter = _value.expiresAfter
      ? new googleProtobuf002.Timestamp(_value.expiresAfter)
      : undefined;
    SoftphoneCertificateFilter.refineValues(this);
  }
  get statuses(): SoftphoneCertificateStatus[] {
    return this._statuses;
  }
  set statuses(value: SoftphoneCertificateStatus[]) {
    this._statuses = value;
  }
  get expiresBefore(): googleProtobuf002.Timestamp | undefined {
    return this._expiresBefore;
  }
  set expiresBefore(value: googleProtobuf002.Timestamp | undefined) {
    this._expiresBefore = value;
  }
  get expiresAfter(): googleProtobuf002.Timestamp | undefined {
    return this._expiresAfter;
  }
  set expiresAfter(value: googleProtobuf002.Timestamp | undefined) {
    this._expiresAfter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneCertificateFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneCertificateFilter.AsObject {
    return {
      statuses: (this.statuses || []).slice(),
      expiresBefore: this.expiresBefore
        ? this.expiresBefore.toObject()
        : undefined,
      expiresAfter: this.expiresAfter ? this.expiresAfter.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SoftphoneCertificateFilter.AsProtobufJSON {
    return {
      statuses: (this.statuses || []).map(v => SoftphoneCertificateStatus[v]),
      expiresBefore: this.expiresBefore
        ? this.expiresBefore.toProtobufJSON(options)
        : null,
      expiresAfter: this.expiresAfter
        ? this.expiresAfter.toProtobufJSON(options)
        : null
    };
  }
}
export module SoftphoneCertificateFilter {
  /**
   * Standard JavaScript object representation for SoftphoneCertificateFilter
   */
  export interface AsObject {
    statuses: SoftphoneCertificateStatus[];
    expiresBefore?: googleProtobuf002.Timestamp.AsObject;
    expiresAfter?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for SoftphoneCertificateFilter
   */
  export interface AsProtobufJSON {
    statuses: string[];
    expiresBefore: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    expiresAfter: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.SoftphoneAccountSorting
 */
export class SoftphoneAccountSorting implements GrpcMessage {
  static id = 'ondewo.vtsi.SoftphoneAccountSorting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SoftphoneAccountSorting();
    SoftphoneAccountSorting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SoftphoneAccountSorting) {
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SoftphoneAccountSorting,
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

    SoftphoneAccountSorting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SoftphoneAccountSorting,
    _writer: BinaryWriter
  ) {
    if (
      _instance.sortingField !== undefined &&
      _instance.sortingField !== null
    ) {
      _writer.writeEnum(1, _instance.sortingField);
    }
    if (_instance.sortingMode !== undefined && _instance.sortingMode !== null) {
      _writer.writeEnum(2, _instance.sortingMode);
    }
  }

  private _sortingField: SoftphoneAccountSorting.SoftphoneAccountSortingField;
  private _sortingMode: ondewoVtsi003.VtsiProjectSortingMode;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SoftphoneAccountSorting to deeply clone from
   */
  constructor(_value?: RecursivePartial<SoftphoneAccountSorting.AsObject>) {
    _value = _value || {};
    this.sortingField = _value.sortingField;
    this.sortingMode = _value.sortingMode;
    SoftphoneAccountSorting.refineValues(this);
  }
  get sortingField(): SoftphoneAccountSorting.SoftphoneAccountSortingField {
    return this._sortingField;
  }
  set sortingField(
    value: SoftphoneAccountSorting.SoftphoneAccountSortingField
  ) {
    this._sortingField = value;
  }
  get sortingMode(): ondewoVtsi003.VtsiProjectSortingMode {
    return this._sortingMode;
  }
  set sortingMode(value: ondewoVtsi003.VtsiProjectSortingMode) {
    this._sortingMode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SoftphoneAccountSorting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SoftphoneAccountSorting.AsObject {
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
  ): SoftphoneAccountSorting.AsProtobufJSON {
    return {
      sortingField:
        SoftphoneAccountSorting.SoftphoneAccountSortingField[
          this.sortingField === null || this.sortingField === undefined
            ? 0
            : this.sortingField
        ],
      sortingMode:
        ondewoVtsi003.VtsiProjectSortingMode[
          this.sortingMode === null || this.sortingMode === undefined
            ? 0
            : this.sortingMode
        ]
    };
  }
}
export module SoftphoneAccountSorting {
  /**
   * Standard JavaScript object representation for SoftphoneAccountSorting
   */
  export interface AsObject {
    sortingField: SoftphoneAccountSorting.SoftphoneAccountSortingField;
    sortingMode: ondewoVtsi003.VtsiProjectSortingMode;
  }

  /**
   * Protobuf JSON representation for SoftphoneAccountSorting
   */
  export interface AsProtobufJSON {
    sortingField: string;
    sortingMode: string;
  }
  export enum SoftphoneAccountSortingField {
    NO_SOFTPHONE_ACCOUNT_SORTING = 0,
    SORT_SOFTPHONE_ACCOUNT_BY_DISPLAY_NAME = 1,
    SORT_SOFTPHONE_ACCOUNT_BY_SIP_USERNAME = 2,
    SORT_SOFTPHONE_ACCOUNT_BY_CREATION_DATE = 3,
    SORT_SOFTPHONE_ACCOUNT_BY_LAST_MODIFIED = 4,
    SORT_SOFTPHONE_ACCOUNT_BY_CERTIFICATE_EXPIRY = 5
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateSoftphoneAccountRequest
 */
export class CreateSoftphoneAccountRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateSoftphoneAccountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSoftphoneAccountRequest();
    CreateSoftphoneAccountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSoftphoneAccountRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.softphoneAccount = _instance.softphoneAccount || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSoftphoneAccountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccount = new SoftphoneAccount();
          _reader.readMessage(
            _instance.softphoneAccount,
            SoftphoneAccount.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSoftphoneAccountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSoftphoneAccountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.softphoneAccount) {
      _writer.writeMessage(
        2,
        _instance.softphoneAccount as any,
        SoftphoneAccount.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _softphoneAccount?: SoftphoneAccount;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSoftphoneAccountRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateSoftphoneAccountRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.softphoneAccount = _value.softphoneAccount
      ? new SoftphoneAccount(_value.softphoneAccount)
      : undefined;
    CreateSoftphoneAccountRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get softphoneAccount(): SoftphoneAccount | undefined {
    return this._softphoneAccount;
  }
  set softphoneAccount(value: SoftphoneAccount | undefined) {
    this._softphoneAccount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSoftphoneAccountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSoftphoneAccountRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toObject()
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
  ): CreateSoftphoneAccountRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toProtobufJSON(options)
        : null
    };
  }
}
export module CreateSoftphoneAccountRequest {
  /**
   * Standard JavaScript object representation for CreateSoftphoneAccountRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    softphoneAccount?: SoftphoneAccount.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateSoftphoneAccountRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    softphoneAccount: SoftphoneAccount.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateSoftphoneAccountResponse
 */
export class CreateSoftphoneAccountResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateSoftphoneAccountResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateSoftphoneAccountResponse();
    CreateSoftphoneAccountResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateSoftphoneAccountResponse) {
    _instance.softphoneAccount = _instance.softphoneAccount || undefined;
    _instance.credentials = _instance.credentials || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateSoftphoneAccountResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.softphoneAccount = new SoftphoneAccount();
          _reader.readMessage(
            _instance.softphoneAccount,
            SoftphoneAccount.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.credentials = new SoftphoneCredentials();
          _reader.readMessage(
            _instance.credentials,
            SoftphoneCredentials.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateSoftphoneAccountResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateSoftphoneAccountResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.softphoneAccount) {
      _writer.writeMessage(
        1,
        _instance.softphoneAccount as any,
        SoftphoneAccount.serializeBinaryToWriter
      );
    }
    if (_instance.credentials) {
      _writer.writeMessage(
        2,
        _instance.credentials as any,
        SoftphoneCredentials.serializeBinaryToWriter
      );
    }
  }

  private _softphoneAccount?: SoftphoneAccount;
  private _credentials?: SoftphoneCredentials;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateSoftphoneAccountResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateSoftphoneAccountResponse.AsObject>
  ) {
    _value = _value || {};
    this.softphoneAccount = _value.softphoneAccount
      ? new SoftphoneAccount(_value.softphoneAccount)
      : undefined;
    this.credentials = _value.credentials
      ? new SoftphoneCredentials(_value.credentials)
      : undefined;
    CreateSoftphoneAccountResponse.refineValues(this);
  }
  get softphoneAccount(): SoftphoneAccount | undefined {
    return this._softphoneAccount;
  }
  set softphoneAccount(value: SoftphoneAccount | undefined) {
    this._softphoneAccount = value;
  }
  get credentials(): SoftphoneCredentials | undefined {
    return this._credentials;
  }
  set credentials(value: SoftphoneCredentials | undefined) {
    this._credentials = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateSoftphoneAccountResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateSoftphoneAccountResponse.AsObject {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toObject()
        : undefined,
      credentials: this.credentials ? this.credentials.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateSoftphoneAccountResponse.AsProtobufJSON {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toProtobufJSON(options)
        : null,
      credentials: this.credentials
        ? this.credentials.toProtobufJSON(options)
        : null
    };
  }
}
export module CreateSoftphoneAccountResponse {
  /**
   * Standard JavaScript object representation for CreateSoftphoneAccountResponse
   */
  export interface AsObject {
    softphoneAccount?: SoftphoneAccount.AsObject;
    credentials?: SoftphoneCredentials.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateSoftphoneAccountResponse
   */
  export interface AsProtobufJSON {
    softphoneAccount: SoftphoneAccount.AsProtobufJSON | null;
    credentials: SoftphoneCredentials.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetSoftphoneAccountRequest
 */
export class GetSoftphoneAccountRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetSoftphoneAccountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSoftphoneAccountRequest();
    GetSoftphoneAccountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSoftphoneAccountRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSoftphoneAccountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
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

    GetSoftphoneAccountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSoftphoneAccountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSoftphoneAccountRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSoftphoneAccountRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetSoftphoneAccountRequest.refineValues(this);
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
    GetSoftphoneAccountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSoftphoneAccountRequest.AsObject {
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
  ): GetSoftphoneAccountRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetSoftphoneAccountRequest {
  /**
   * Standard JavaScript object representation for GetSoftphoneAccountRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetSoftphoneAccountRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateSoftphoneAccountRequest
 */
export class UpdateSoftphoneAccountRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateSoftphoneAccountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSoftphoneAccountRequest();
    UpdateSoftphoneAccountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSoftphoneAccountRequest) {
    _instance.softphoneAccount = _instance.softphoneAccount || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSoftphoneAccountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.softphoneAccount = new SoftphoneAccount();
          _reader.readMessage(
            _instance.softphoneAccount,
            SoftphoneAccount.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf000.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf000.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateSoftphoneAccountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSoftphoneAccountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.softphoneAccount) {
      _writer.writeMessage(
        1,
        _instance.softphoneAccount as any,
        SoftphoneAccount.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _softphoneAccount?: SoftphoneAccount;
  private _updateMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSoftphoneAccountRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateSoftphoneAccountRequest.AsObject>
  ) {
    _value = _value || {};
    this.softphoneAccount = _value.softphoneAccount
      ? new SoftphoneAccount(_value.softphoneAccount)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf000.FieldMask(_value.updateMask)
      : undefined;
    UpdateSoftphoneAccountRequest.refineValues(this);
  }
  get softphoneAccount(): SoftphoneAccount | undefined {
    return this._softphoneAccount;
  }
  set softphoneAccount(value: SoftphoneAccount | undefined) {
    this._softphoneAccount = value;
  }
  get updateMask(): googleProtobuf000.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf000.FieldMask | undefined) {
    this._updateMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateSoftphoneAccountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSoftphoneAccountRequest.AsObject {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toObject()
        : undefined,
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
  ): UpdateSoftphoneAccountRequest.AsProtobufJSON {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateSoftphoneAccountRequest {
  /**
   * Standard JavaScript object representation for UpdateSoftphoneAccountRequest
   */
  export interface AsObject {
    softphoneAccount?: SoftphoneAccount.AsObject;
    updateMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSoftphoneAccountRequest
   */
  export interface AsProtobufJSON {
    softphoneAccount: SoftphoneAccount.AsProtobufJSON | null;
    updateMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteSoftphoneAccountRequest
 */
export class DeleteSoftphoneAccountRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteSoftphoneAccountRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSoftphoneAccountRequest();
    DeleteSoftphoneAccountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSoftphoneAccountRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSoftphoneAccountRequest,
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

    DeleteSoftphoneAccountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSoftphoneAccountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSoftphoneAccountRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteSoftphoneAccountRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    DeleteSoftphoneAccountRequest.refineValues(this);
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
    DeleteSoftphoneAccountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSoftphoneAccountRequest.AsObject {
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
  ): DeleteSoftphoneAccountRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteSoftphoneAccountRequest {
  /**
   * Standard JavaScript object representation for DeleteSoftphoneAccountRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteSoftphoneAccountRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteSoftphoneAccountResponse
 */
export class DeleteSoftphoneAccountResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteSoftphoneAccountResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteSoftphoneAccountResponse();
    DeleteSoftphoneAccountResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteSoftphoneAccountResponse) {
    _instance.name = _instance.name || '';
    _instance.revokedCertificateCount = _instance.revokedCertificateCount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteSoftphoneAccountResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.revokedCertificateCount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteSoftphoneAccountResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteSoftphoneAccountResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.revokedCertificateCount) {
      _writer.writeInt32(2, _instance.revokedCertificateCount);
    }
  }

  private _name: string;
  private _revokedCertificateCount: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteSoftphoneAccountResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteSoftphoneAccountResponse.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.revokedCertificateCount = _value.revokedCertificateCount;
    DeleteSoftphoneAccountResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get revokedCertificateCount(): number {
    return this._revokedCertificateCount;
  }
  set revokedCertificateCount(value: number) {
    this._revokedCertificateCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteSoftphoneAccountResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteSoftphoneAccountResponse.AsObject {
    return {
      name: this.name,
      revokedCertificateCount: this.revokedCertificateCount
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteSoftphoneAccountResponse.AsProtobufJSON {
    return {
      name: this.name,
      revokedCertificateCount: this.revokedCertificateCount
    };
  }
}
export module DeleteSoftphoneAccountResponse {
  /**
   * Standard JavaScript object representation for DeleteSoftphoneAccountResponse
   */
  export interface AsObject {
    name: string;
    revokedCertificateCount: number;
  }

  /**
   * Protobuf JSON representation for DeleteSoftphoneAccountResponse
   */
  export interface AsProtobufJSON {
    name: string;
    revokedCertificateCount: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListSoftphoneAccountsRequest
 */
export class ListSoftphoneAccountsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListSoftphoneAccountsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSoftphoneAccountsRequest();
    ListSoftphoneAccountsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSoftphoneAccountsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
    _instance.softphoneAccountSorting =
      _instance.softphoneAccountSorting || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSoftphoneAccountsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.filter = new SoftphoneAccountFilter();
          _reader.readMessage(
            _instance.filter,
            SoftphoneAccountFilter.deserializeBinaryFromReader
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
          _instance.pageSize = _reader.readInt32();
          break;
        case 5:
          _instance.pageToken = _reader.readString();
          break;
        case 6:
          _instance.softphoneAccountSorting = new SoftphoneAccountSorting();
          _reader.readMessage(
            _instance.softphoneAccountSorting,
            SoftphoneAccountSorting.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListSoftphoneAccountsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSoftphoneAccountsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        2,
        _instance.filter as any,
        SoftphoneAccountFilter.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.pageSize) {
      _writer.writeInt32(4, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(5, _instance.pageToken);
    }
    if (_instance.softphoneAccountSorting) {
      _writer.writeMessage(
        6,
        _instance.softphoneAccountSorting as any,
        SoftphoneAccountSorting.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _filter?: SoftphoneAccountFilter;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _pageSize: number;
  private _pageToken: string;
  private _softphoneAccountSorting?: SoftphoneAccountSorting;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSoftphoneAccountsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSoftphoneAccountsRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.filter = _value.filter
      ? new SoftphoneAccountFilter(_value.filter)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.softphoneAccountSorting = _value.softphoneAccountSorting
      ? new SoftphoneAccountSorting(_value.softphoneAccountSorting)
      : undefined;
    ListSoftphoneAccountsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get filter(): SoftphoneAccountFilter | undefined {
    return this._filter;
  }
  set filter(value: SoftphoneAccountFilter | undefined) {
    this._filter = value;
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
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get softphoneAccountSorting(): SoftphoneAccountSorting | undefined {
    return this._softphoneAccountSorting;
  }
  set softphoneAccountSorting(value: SoftphoneAccountSorting | undefined) {
    this._softphoneAccountSorting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSoftphoneAccountsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSoftphoneAccountsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      softphoneAccountSorting: this.softphoneAccountSorting
        ? this.softphoneAccountSorting.toObject()
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
  ): ListSoftphoneAccountsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      softphoneAccountSorting: this.softphoneAccountSorting
        ? this.softphoneAccountSorting.toProtobufJSON(options)
        : null
    };
  }
}
export module ListSoftphoneAccountsRequest {
  /**
   * Standard JavaScript object representation for ListSoftphoneAccountsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    filter?: SoftphoneAccountFilter.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    pageSize: number;
    pageToken: string;
    softphoneAccountSorting?: SoftphoneAccountSorting.AsObject;
  }

  /**
   * Protobuf JSON representation for ListSoftphoneAccountsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    filter: SoftphoneAccountFilter.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    pageToken: string;
    softphoneAccountSorting: SoftphoneAccountSorting.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListSoftphoneAccountsResponse
 */
export class ListSoftphoneAccountsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListSoftphoneAccountsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSoftphoneAccountsResponse();
    ListSoftphoneAccountsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSoftphoneAccountsResponse) {
    _instance.softphoneAccounts = _instance.softphoneAccounts || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSoftphoneAccountsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SoftphoneAccount();
          _reader.readMessage(
            messageInitializer1,
            SoftphoneAccount.deserializeBinaryFromReader
          );
          (_instance.softphoneAccounts =
            _instance.softphoneAccounts || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSoftphoneAccountsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSoftphoneAccountsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.softphoneAccounts && _instance.softphoneAccounts.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.softphoneAccounts as any,
        SoftphoneAccount.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _softphoneAccounts?: SoftphoneAccount[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSoftphoneAccountsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSoftphoneAccountsResponse.AsObject>
  ) {
    _value = _value || {};
    this.softphoneAccounts = (_value.softphoneAccounts || []).map(
      m => new SoftphoneAccount(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListSoftphoneAccountsResponse.refineValues(this);
  }
  get softphoneAccounts(): SoftphoneAccount[] | undefined {
    return this._softphoneAccounts;
  }
  set softphoneAccounts(value: SoftphoneAccount[] | undefined) {
    this._softphoneAccounts = value;
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
    ListSoftphoneAccountsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSoftphoneAccountsResponse.AsObject {
    return {
      softphoneAccounts: (this.softphoneAccounts || []).map(m => m.toObject()),
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
  ): ListSoftphoneAccountsResponse.AsProtobufJSON {
    return {
      softphoneAccounts: (this.softphoneAccounts || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSoftphoneAccountsResponse {
  /**
   * Standard JavaScript object representation for ListSoftphoneAccountsResponse
   */
  export interface AsObject {
    softphoneAccounts?: SoftphoneAccount.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSoftphoneAccountsResponse
   */
  export interface AsProtobufJSON {
    softphoneAccounts: SoftphoneAccount.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.RotateSoftphoneCredentialsRequest
 */
export class RotateSoftphoneCredentialsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.RotateSoftphoneCredentialsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RotateSoftphoneCredentialsRequest();
    RotateSoftphoneCredentialsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RotateSoftphoneCredentialsRequest) {
    _instance.name = _instance.name || '';
    _instance.rotateSipPassword = _instance.rotateSipPassword || false;
    _instance.rotateCertificate = _instance.rotateCertificate || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RotateSoftphoneCredentialsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.rotateSipPassword = _reader.readBool();
          break;
        case 3:
          _instance.rotateCertificate = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RotateSoftphoneCredentialsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RotateSoftphoneCredentialsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.rotateSipPassword) {
      _writer.writeBool(2, _instance.rotateSipPassword);
    }
    if (_instance.rotateCertificate) {
      _writer.writeBool(3, _instance.rotateCertificate);
    }
  }

  private _name: string;
  private _rotateSipPassword: boolean;
  private _rotateCertificate: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RotateSoftphoneCredentialsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RotateSoftphoneCredentialsRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.rotateSipPassword = _value.rotateSipPassword;
    this.rotateCertificate = _value.rotateCertificate;
    RotateSoftphoneCredentialsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get rotateSipPassword(): boolean {
    return this._rotateSipPassword;
  }
  set rotateSipPassword(value: boolean) {
    this._rotateSipPassword = value;
  }
  get rotateCertificate(): boolean {
    return this._rotateCertificate;
  }
  set rotateCertificate(value: boolean) {
    this._rotateCertificate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RotateSoftphoneCredentialsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RotateSoftphoneCredentialsRequest.AsObject {
    return {
      name: this.name,
      rotateSipPassword: this.rotateSipPassword,
      rotateCertificate: this.rotateCertificate
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RotateSoftphoneCredentialsRequest.AsProtobufJSON {
    return {
      name: this.name,
      rotateSipPassword: this.rotateSipPassword,
      rotateCertificate: this.rotateCertificate
    };
  }
}
export module RotateSoftphoneCredentialsRequest {
  /**
   * Standard JavaScript object representation for RotateSoftphoneCredentialsRequest
   */
  export interface AsObject {
    name: string;
    rotateSipPassword: boolean;
    rotateCertificate: boolean;
  }

  /**
   * Protobuf JSON representation for RotateSoftphoneCredentialsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    rotateSipPassword: boolean;
    rotateCertificate: boolean;
  }
}

/**
 * Message implementation for ondewo.vtsi.RotateSoftphoneCredentialsResponse
 */
export class RotateSoftphoneCredentialsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.RotateSoftphoneCredentialsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RotateSoftphoneCredentialsResponse();
    RotateSoftphoneCredentialsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RotateSoftphoneCredentialsResponse) {
    _instance.softphoneAccount = _instance.softphoneAccount || undefined;
    _instance.credentials = _instance.credentials || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RotateSoftphoneCredentialsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.softphoneAccount = new SoftphoneAccount();
          _reader.readMessage(
            _instance.softphoneAccount,
            SoftphoneAccount.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.credentials = new SoftphoneCredentials();
          _reader.readMessage(
            _instance.credentials,
            SoftphoneCredentials.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RotateSoftphoneCredentialsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RotateSoftphoneCredentialsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.softphoneAccount) {
      _writer.writeMessage(
        1,
        _instance.softphoneAccount as any,
        SoftphoneAccount.serializeBinaryToWriter
      );
    }
    if (_instance.credentials) {
      _writer.writeMessage(
        2,
        _instance.credentials as any,
        SoftphoneCredentials.serializeBinaryToWriter
      );
    }
  }

  private _softphoneAccount?: SoftphoneAccount;
  private _credentials?: SoftphoneCredentials;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RotateSoftphoneCredentialsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RotateSoftphoneCredentialsResponse.AsObject>
  ) {
    _value = _value || {};
    this.softphoneAccount = _value.softphoneAccount
      ? new SoftphoneAccount(_value.softphoneAccount)
      : undefined;
    this.credentials = _value.credentials
      ? new SoftphoneCredentials(_value.credentials)
      : undefined;
    RotateSoftphoneCredentialsResponse.refineValues(this);
  }
  get softphoneAccount(): SoftphoneAccount | undefined {
    return this._softphoneAccount;
  }
  set softphoneAccount(value: SoftphoneAccount | undefined) {
    this._softphoneAccount = value;
  }
  get credentials(): SoftphoneCredentials | undefined {
    return this._credentials;
  }
  set credentials(value: SoftphoneCredentials | undefined) {
    this._credentials = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RotateSoftphoneCredentialsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RotateSoftphoneCredentialsResponse.AsObject {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toObject()
        : undefined,
      credentials: this.credentials ? this.credentials.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RotateSoftphoneCredentialsResponse.AsProtobufJSON {
    return {
      softphoneAccount: this.softphoneAccount
        ? this.softphoneAccount.toProtobufJSON(options)
        : null,
      credentials: this.credentials
        ? this.credentials.toProtobufJSON(options)
        : null
    };
  }
}
export module RotateSoftphoneCredentialsResponse {
  /**
   * Standard JavaScript object representation for RotateSoftphoneCredentialsResponse
   */
  export interface AsObject {
    softphoneAccount?: SoftphoneAccount.AsObject;
    credentials?: SoftphoneCredentials.AsObject;
  }

  /**
   * Protobuf JSON representation for RotateSoftphoneCredentialsResponse
   */
  export interface AsProtobufJSON {
    softphoneAccount: SoftphoneAccount.AsProtobufJSON | null;
    credentials: SoftphoneCredentials.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListSoftphoneCertificatesRequest
 */
export class ListSoftphoneCertificatesRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListSoftphoneCertificatesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSoftphoneCertificatesRequest();
    ListSoftphoneCertificatesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSoftphoneCertificatesRequest) {
    _instance.filter = _instance.filter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.pageSize = _instance.pageSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSoftphoneCertificatesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.softphoneAccountName = _reader.readString();
          break;
        case 3:
          _instance.filter = new SoftphoneCertificateFilter();
          _reader.readMessage(
            _instance.filter,
            SoftphoneCertificateFilter.deserializeBinaryFromReader
          );
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
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSoftphoneCertificatesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSoftphoneCertificatesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName || _instance.vtsiProjectName === '') {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.softphoneAccountName ||
      _instance.softphoneAccountName === ''
    ) {
      _writer.writeString(2, _instance.softphoneAccountName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        3,
        _instance.filter as any,
        SoftphoneCertificateFilter.serializeBinaryToWriter
      );
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
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(6, _instance.pageToken);
    }
  }

  private _vtsiProjectName: string;
  private _softphoneAccountName: string;
  private _filter?: SoftphoneCertificateFilter;
  private _fieldMask?: googleProtobuf000.FieldMask;
  private _pageSize: number;
  private _pageToken: string;

  private _scope: ListSoftphoneCertificatesRequest.ScopeCase =
    ListSoftphoneCertificatesRequest.ScopeCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSoftphoneCertificatesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSoftphoneCertificatesRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.softphoneAccountName = _value.softphoneAccountName;
    this.filter = _value.filter
      ? new SoftphoneCertificateFilter(_value.filter)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListSoftphoneCertificatesRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    if (value !== undefined && value !== null) {
      this._softphoneAccountName = undefined;
      this._scope = ListSoftphoneCertificatesRequest.ScopeCase.vtsiProjectName;
    }
    this._vtsiProjectName = value;
  }
  get softphoneAccountName(): string {
    return this._softphoneAccountName;
  }
  set softphoneAccountName(value: string) {
    if (value !== undefined && value !== null) {
      this._vtsiProjectName = undefined;
      this._scope =
        ListSoftphoneCertificatesRequest.ScopeCase.softphoneAccountName;
    }
    this._softphoneAccountName = value;
  }
  get filter(): SoftphoneCertificateFilter | undefined {
    return this._filter;
  }
  set filter(value: SoftphoneCertificateFilter | undefined) {
    this._filter = value;
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
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get scope() {
    return this._scope;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListSoftphoneCertificatesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSoftphoneCertificatesRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      softphoneAccountName: this.softphoneAccountName,
      filter: this.filter ? this.filter.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
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
  ): ListSoftphoneCertificatesRequest.AsProtobufJSON {
    return {
      vtsiProjectName:
        this.vtsiProjectName === null || this.vtsiProjectName === undefined
          ? null
          : this.vtsiProjectName,
      softphoneAccountName:
        this.softphoneAccountName === null ||
        this.softphoneAccountName === undefined
          ? null
          : this.softphoneAccountName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListSoftphoneCertificatesRequest {
  /**
   * Standard JavaScript object representation for ListSoftphoneCertificatesRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    softphoneAccountName: string;
    filter?: SoftphoneCertificateFilter.AsObject;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
    pageSize: number;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSoftphoneCertificatesRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string | null;
    softphoneAccountName: string | null;
    filter: SoftphoneCertificateFilter.AsProtobufJSON | null;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
    pageSize: number;
    pageToken: string;
  }
  export enum ScopeCase {
    none = 0,
    vtsiProjectName = 1,
    softphoneAccountName = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.ListSoftphoneCertificatesResponse
 */
export class ListSoftphoneCertificatesResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListSoftphoneCertificatesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListSoftphoneCertificatesResponse();
    ListSoftphoneCertificatesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListSoftphoneCertificatesResponse) {
    _instance.softphoneCertificates = _instance.softphoneCertificates || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListSoftphoneCertificatesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SoftphoneCertificate();
          _reader.readMessage(
            messageInitializer1,
            SoftphoneCertificate.deserializeBinaryFromReader
          );
          (_instance.softphoneCertificates =
            _instance.softphoneCertificates || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListSoftphoneCertificatesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListSoftphoneCertificatesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.softphoneCertificates &&
      _instance.softphoneCertificates.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.softphoneCertificates as any,
        SoftphoneCertificate.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _softphoneCertificates?: SoftphoneCertificate[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListSoftphoneCertificatesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListSoftphoneCertificatesResponse.AsObject>
  ) {
    _value = _value || {};
    this.softphoneCertificates = (_value.softphoneCertificates || []).map(
      m => new SoftphoneCertificate(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListSoftphoneCertificatesResponse.refineValues(this);
  }
  get softphoneCertificates(): SoftphoneCertificate[] | undefined {
    return this._softphoneCertificates;
  }
  set softphoneCertificates(value: SoftphoneCertificate[] | undefined) {
    this._softphoneCertificates = value;
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
    ListSoftphoneCertificatesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListSoftphoneCertificatesResponse.AsObject {
    return {
      softphoneCertificates: (this.softphoneCertificates || []).map(m =>
        m.toObject()
      ),
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
  ): ListSoftphoneCertificatesResponse.AsProtobufJSON {
    return {
      softphoneCertificates: (this.softphoneCertificates || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListSoftphoneCertificatesResponse {
  /**
   * Standard JavaScript object representation for ListSoftphoneCertificatesResponse
   */
  export interface AsObject {
    softphoneCertificates?: SoftphoneCertificate.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListSoftphoneCertificatesResponse
   */
  export interface AsProtobufJSON {
    softphoneCertificates: SoftphoneCertificate.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetSoftphoneCertificateRequest
 */
export class GetSoftphoneCertificateRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetSoftphoneCertificateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSoftphoneCertificateRequest();
    GetSoftphoneCertificateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSoftphoneCertificateRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSoftphoneCertificateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
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

    GetSoftphoneCertificateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSoftphoneCertificateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf000.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf000.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSoftphoneCertificateRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetSoftphoneCertificateRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf000.FieldMask(_value.fieldMask)
      : undefined;
    GetSoftphoneCertificateRequest.refineValues(this);
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
    GetSoftphoneCertificateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSoftphoneCertificateRequest.AsObject {
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
  ): GetSoftphoneCertificateRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetSoftphoneCertificateRequest {
  /**
   * Standard JavaScript object representation for GetSoftphoneCertificateRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf000.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetSoftphoneCertificateRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf000.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.RevokeSoftphoneCertificateRequest
 */
export class RevokeSoftphoneCertificateRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.RevokeSoftphoneCertificateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RevokeSoftphoneCertificateRequest();
    RevokeSoftphoneCertificateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RevokeSoftphoneCertificateRequest) {
    _instance.name = _instance.name || '';
    _instance.reason = _instance.reason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RevokeSoftphoneCertificateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.reason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RevokeSoftphoneCertificateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RevokeSoftphoneCertificateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.reason) {
      _writer.writeString(2, _instance.reason);
    }
  }

  private _name: string;
  private _reason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RevokeSoftphoneCertificateRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RevokeSoftphoneCertificateRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.reason = _value.reason;
    RevokeSoftphoneCertificateRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
    RevokeSoftphoneCertificateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RevokeSoftphoneCertificateRequest.AsObject {
    return {
      name: this.name,
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
  ): RevokeSoftphoneCertificateRequest.AsProtobufJSON {
    return {
      name: this.name,
      reason: this.reason
    };
  }
}
export module RevokeSoftphoneCertificateRequest {
  /**
   * Standard JavaScript object representation for RevokeSoftphoneCertificateRequest
   */
  export interface AsObject {
    name: string;
    reason: string;
  }

  /**
   * Protobuf JSON representation for RevokeSoftphoneCertificateRequest
   */
  export interface AsProtobufJSON {
    name: string;
    reason: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetSoftphoneProvisioningRequest
 */
export class GetSoftphoneProvisioningRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetSoftphoneProvisioningRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSoftphoneProvisioningRequest();
    GetSoftphoneProvisioningRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSoftphoneProvisioningRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSoftphoneProvisioningRequest,
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

    GetSoftphoneProvisioningRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSoftphoneProvisioningRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSoftphoneProvisioningRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetSoftphoneProvisioningRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    GetSoftphoneProvisioningRequest.refineValues(this);
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
    GetSoftphoneProvisioningRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSoftphoneProvisioningRequest.AsObject {
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
  ): GetSoftphoneProvisioningRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetSoftphoneProvisioningRequest {
  /**
   * Standard JavaScript object representation for GetSoftphoneProvisioningRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetSoftphoneProvisioningRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}
