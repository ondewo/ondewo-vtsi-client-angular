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
import * as ondewoVtsi005 from '../../ondewo/vtsi/campaigns.pb';
export enum VtsiEvent {
  VTSI_EVENT_UNSPECIFIED = 0,
  VTSI_EVENT_CALL_CREATED = 100,
  VTSI_EVENT_CALL_INITIATED = 101,
  VTSI_EVENT_CALL_CONNECTED = 102,
  VTSI_EVENT_CALL_FINISHED = 103,
  VTSI_EVENT_CALL_FAILED = 104,
  VTSI_EVENT_CALL_TRANSFER_INITIATED = 105,
  VTSI_EVENT_CALL_TRANSFERRED = 106,
  VTSI_EVENT_CALL_TRANSFER_FAILED = 107,
  VTSI_EVENT_CALL_HANGUP_INITIATED = 108,
  VTSI_EVENT_CALL_ANSWERING_MACHINE_DETECTED = 109,
  VTSI_EVENT_CALL_STOPPED = 110,
  VTSI_EVENT_CALL_SIP_STATUS_CHANGED = 111,
  VTSI_EVENT_CALLER_STARTED = 200,
  VTSI_EVENT_CALLER_START_FAILED = 201,
  VTSI_EVENT_CALLER_STOPPED = 202,
  VTSI_EVENT_CALLER_DELETED = 203,
  VTSI_EVENT_CALLER_RESTARTED = 204,
  VTSI_EVENT_CALLER_UNHEALTHY = 205,
  VTSI_EVENT_CALLER_HEALTHY = 206,
  VTSI_EVENT_LISTENER_STARTED = 300,
  VTSI_EVENT_LISTENER_START_FAILED = 301,
  VTSI_EVENT_LISTENER_STOPPED = 302,
  VTSI_EVENT_LISTENER_DELETED = 303,
  VTSI_EVENT_LISTENER_RESTARTED = 304,
  VTSI_EVENT_LISTENER_UNHEALTHY = 305,
  VTSI_EVENT_LISTENER_HEALTHY = 306,
  VTSI_EVENT_SCHEDULED_CALLER_CREATED = 400,
  VTSI_EVENT_SCHEDULED_CALLER_FIRED = 401,
  VTSI_EVENT_SCHEDULED_CALLER_FAILED = 402,
  VTSI_EVENT_SCHEDULED_CALLER_CANCELLED = 403,
  VTSI_EVENT_SCHEDULED_CALLER_RETRY_SCHEDULED = 404,
  VTSI_EVENT_CAMPAIGN_CREATED = 500,
  VTSI_EVENT_CAMPAIGN_UPDATED = 501,
  VTSI_EVENT_CAMPAIGN_DELETED = 502,
  VTSI_EVENT_CAMPAIGN_STARTED = 503,
  VTSI_EVENT_CAMPAIGN_STOP_REQUESTED = 504,
  VTSI_EVENT_CAMPAIGN_STOPPED = 505,
  VTSI_EVENT_CAMPAIGN_HARD_STOP_REQUESTED = 506,
  VTSI_EVENT_CAMPAIGN_HARD_STOPPED = 507,
  VTSI_EVENT_CAMPAIGN_RESUMED = 508,
  VTSI_EVENT_CAMPAIGN_COMPLETED = 509,
  VTSI_EVENT_CAMPAIGN_PROGRESS = 510,
  VTSI_EVENT_CAMPAIGN_MAX_PARALLEL_CALLS_CHANGED = 511,
  VTSI_EVENT_CAMPAIGN_CALLS_ADDED = 512,
  VTSI_EVENT_CAMPAIGN_CALL_DISPATCHED = 513,
  VTSI_EVENT_CAMPAIGN_CALL_COMPLETED = 514,
  VTSI_EVENT_CAMPAIGN_CALL_FAILED = 515,
  VTSI_EVENT_CAMPAIGN_CALL_RETRY_SCHEDULED = 516,
  VTSI_EVENT_CAMPAIGN_CALL_CANCELLED = 517,
  VTSI_EVENT_CAMPAIGN_AUTO_STOPPED = 518,
  VTSI_EVENT_VTSI_PROJECT_UPDATED = 601,
  VTSI_EVENT_VTSI_PROJECT_DELETED = 602,
  VTSI_EVENT_VTSI_PROJECT_DEPLOYED = 603,
  VTSI_EVENT_VTSI_PROJECT_DEPLOY_FAILED = 604,
  VTSI_EVENT_VTSI_PROJECT_UNDEPLOYED = 605,
  VTSI_EVENT_VTSI_PROJECT_STATUS_CHANGED = 606,
  VTSI_EVENT_VTSI_PROJECT_UNDEPLOY_FAILED = 607,
  VTSI_EVENT_ASTERISK_DEPLOYED = 700,
  VTSI_EVENT_ASTERISK_REMOVED = 701,
  VTSI_EVENT_ASTERISK_RESTARTED = 702,
  VTSI_EVENT_ASTERISK_CONFIG_RELOADED = 703,
  VTSI_EVENT_ASTERISK_UNHEALTHY = 704,
  VTSI_EVENT_ASTERISK_HEALTHY = 705,
  VTSI_EVENT_ASTERISK_TRUNK_REGISTERED = 706,
  VTSI_EVENT_ASTERISK_TRUNK_UNREGISTERED = 707,
  VTSI_EVENT_ASTERISK_DEPLOY_FAILED = 708,
  VTSI_EVENT_ASTERISK_RESTART_FAILED = 709,
  VTSI_EVENT_ASTERISK_CONFIG_RELOAD_FAILED = 710,
  VTSI_EVENT_SOFTPHONE_ACCOUNT_CREATED = 800,
  VTSI_EVENT_SOFTPHONE_ACCOUNT_UPDATED = 801,
  VTSI_EVENT_SOFTPHONE_ACCOUNT_DELETED = 802,
  VTSI_EVENT_SOFTPHONE_CREDENTIALS_ROTATED = 803,
  VTSI_EVENT_SOFTPHONE_CERTIFICATE_REVOKED = 804,
  VTSI_EVENT_WEBHOOK_TEST = 900,
  VTSI_EVENT_WEBHOOK_CREATED = 901,
  VTSI_EVENT_WEBHOOK_UPDATED = 902,
  VTSI_EVENT_WEBHOOK_DELETED = 903,
  VTSI_EVENT_EVENT_SUBSCRIPTION_CREATED = 904,
  VTSI_EVENT_EVENT_SUBSCRIPTION_UPDATED = 905,
  VTSI_EVENT_EVENT_SUBSCRIPTION_DELETED = 906
}
export enum WebhookHttpMethod {
  WEBHOOK_HTTP_METHOD_UNSPECIFIED = 0,
  WEBHOOK_HTTP_METHOD_POST = 1,
  WEBHOOK_HTTP_METHOD_PUT = 2
}
/**
 * Message implementation for ondewo.vtsi.VtsiEventMessage
 */
export class VtsiEventMessage implements GrpcMessage {
  static id = 'ondewo.vtsi.VtsiEventMessage';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VtsiEventMessage();
    VtsiEventMessage.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VtsiEventMessage) {
    _instance.eventId = _instance.eventId || '';
    _instance.event = _instance.event || 0;
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.resourceName = _instance.resourceName || '';
    _instance.eventTime = _instance.eventTime || undefined;
    _instance.sipStatusDescription = _instance.sipStatusDescription || '';
    _instance.callName = _instance.callName || '';
    _instance.campaignName = _instance.campaignName || '';
    _instance.description = _instance.description || '';
    _instance.attributes = _instance.attributes || {};
    _instance.campaignStatistics = _instance.campaignStatistics || undefined;
    _instance.resourceSequence = _instance.resourceSequence || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VtsiEventMessage,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.eventId = _reader.readString();
          break;
        case 2:
          _instance.event = _reader.readEnum();
          break;
        case 3:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 4:
          _instance.resourceName = _reader.readString();
          break;
        case 5:
          _instance.eventTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.eventTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.sipStatusType = _reader.readEnum();
          break;
        case 7:
          _instance.sipStatusDescription = _reader.readString();
          break;
        case 8:
          _instance.previousSipStatusType = _reader.readEnum();
          break;
        case 9:
          _instance.callName = _reader.readString();
          break;
        case 10:
          _instance.campaignName = _reader.readString();
          break;
        case 11:
          _instance.description = _reader.readString();
          break;
        case 12:
          const msg_12 = {} as any;
          _reader.readMessage(
            msg_12,
            VtsiEventMessage.AttributesEntry.deserializeBinaryFromReader
          );
          _instance.attributes = _instance.attributes || {};
          _instance.attributes[msg_12.key] = msg_12.value;
          break;
        case 13:
          _instance.campaignStatistics = new ondewoVtsi005.CampaignStatistics();
          _reader.readMessage(
            _instance.campaignStatistics,
            ondewoVtsi005.CampaignStatistics.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.resourceSequence = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    VtsiEventMessage.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VtsiEventMessage,
    _writer: BinaryWriter
  ) {
    if (_instance.eventId) {
      _writer.writeString(1, _instance.eventId);
    }
    if (_instance.event) {
      _writer.writeEnum(2, _instance.event);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(3, _instance.vtsiProjectName);
    }
    if (_instance.resourceName) {
      _writer.writeString(4, _instance.resourceName);
    }
    if (_instance.eventTime) {
      _writer.writeMessage(
        5,
        _instance.eventTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (
      _instance.sipStatusType !== undefined &&
      _instance.sipStatusType !== null
    ) {
      _writer.writeEnum(6, _instance.sipStatusType);
    }
    if (_instance.sipStatusDescription) {
      _writer.writeString(7, _instance.sipStatusDescription);
    }
    if (
      _instance.previousSipStatusType !== undefined &&
      _instance.previousSipStatusType !== null
    ) {
      _writer.writeEnum(8, _instance.previousSipStatusType);
    }
    if (_instance.callName) {
      _writer.writeString(9, _instance.callName);
    }
    if (_instance.campaignName) {
      _writer.writeString(10, _instance.campaignName);
    }
    if (_instance.description) {
      _writer.writeString(11, _instance.description);
    }
    if (!!_instance.attributes) {
      const keys_12 = Object.keys(_instance.attributes as any);

      if (keys_12.length) {
        const repeated_12 = keys_12
          .map(key => ({ key: key, value: (_instance.attributes as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          12,
          repeated_12,
          VtsiEventMessage.AttributesEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.campaignStatistics) {
      _writer.writeMessage(
        13,
        _instance.campaignStatistics as any,
        ondewoVtsi005.CampaignStatistics.serializeBinaryToWriter
      );
    }
    if (_instance.resourceSequence) {
      _writer.writeInt64String(14, _instance.resourceSequence);
    }
  }

  private _eventId: string;
  private _event: VtsiEvent;
  private _vtsiProjectName: string;
  private _resourceName: string;
  private _eventTime?: googleProtobuf001.Timestamp;
  private _sipStatusType: ondewoSip004.SipStatus.StatusType;
  private _sipStatusDescription: string;
  private _previousSipStatusType: ondewoSip004.SipStatus.StatusType;
  private _callName: string;
  private _campaignName: string;
  private _description: string;
  private _attributes: { [prop: string]: string };
  private _campaignStatistics?: ondewoVtsi005.CampaignStatistics;
  private _resourceSequence: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VtsiEventMessage to deeply clone from
   */
  constructor(_value?: RecursivePartial<VtsiEventMessage.AsObject>) {
    _value = _value || {};
    this.eventId = _value.eventId;
    this.event = _value.event;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.resourceName = _value.resourceName;
    this.eventTime = _value.eventTime
      ? new googleProtobuf001.Timestamp(_value.eventTime)
      : undefined;
    this.sipStatusType = _value.sipStatusType;
    this.sipStatusDescription = _value.sipStatusDescription;
    this.previousSipStatusType = _value.previousSipStatusType;
    this.callName = _value.callName;
    this.campaignName = _value.campaignName;
    this.description = _value.description;
    (this.attributes = _value!.attributes
      ? Object.keys(_value!.attributes).reduce(
          (r, k) => ({ ...r, [k]: _value!.attributes![k] }),
          {}
        )
      : {}),
      (this.campaignStatistics = _value.campaignStatistics
        ? new ondewoVtsi005.CampaignStatistics(_value.campaignStatistics)
        : undefined);
    this.resourceSequence = _value.resourceSequence;
    VtsiEventMessage.refineValues(this);
  }
  get eventId(): string {
    return this._eventId;
  }
  set eventId(value: string) {
    this._eventId = value;
  }
  get event(): VtsiEvent {
    return this._event;
  }
  set event(value: VtsiEvent) {
    this._event = value;
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get resourceName(): string {
    return this._resourceName;
  }
  set resourceName(value: string) {
    this._resourceName = value;
  }
  get eventTime(): googleProtobuf001.Timestamp | undefined {
    return this._eventTime;
  }
  set eventTime(value: googleProtobuf001.Timestamp | undefined) {
    this._eventTime = value;
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
  get previousSipStatusType(): ondewoSip004.SipStatus.StatusType {
    return this._previousSipStatusType;
  }
  set previousSipStatusType(value: ondewoSip004.SipStatus.StatusType) {
    this._previousSipStatusType = value;
  }
  get callName(): string {
    return this._callName;
  }
  set callName(value: string) {
    this._callName = value;
  }
  get campaignName(): string {
    return this._campaignName;
  }
  set campaignName(value: string) {
    this._campaignName = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get attributes(): { [prop: string]: string } {
    return this._attributes;
  }
  set attributes(value: { [prop: string]: string }) {
    this._attributes = value;
  }
  get campaignStatistics(): ondewoVtsi005.CampaignStatistics | undefined {
    return this._campaignStatistics;
  }
  set campaignStatistics(value: ondewoVtsi005.CampaignStatistics | undefined) {
    this._campaignStatistics = value;
  }
  get resourceSequence(): string {
    return this._resourceSequence;
  }
  set resourceSequence(value: string) {
    this._resourceSequence = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VtsiEventMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VtsiEventMessage.AsObject {
    return {
      eventId: this.eventId,
      event: this.event,
      vtsiProjectName: this.vtsiProjectName,
      resourceName: this.resourceName,
      eventTime: this.eventTime ? this.eventTime.toObject() : undefined,
      sipStatusType: this.sipStatusType,
      sipStatusDescription: this.sipStatusDescription,
      previousSipStatusType: this.previousSipStatusType,
      callName: this.callName,
      campaignName: this.campaignName,
      description: this.description,
      attributes: this.attributes
        ? Object.keys(this.attributes).reduce(
            (r, k) => ({ ...r, [k]: this.attributes![k] }),
            {}
          )
        : {},
      campaignStatistics: this.campaignStatistics
        ? this.campaignStatistics.toObject()
        : undefined,
      resourceSequence: this.resourceSequence
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VtsiEventMessage.AsProtobufJSON {
    return {
      eventId: this.eventId,
      event:
        VtsiEvent[
          this.event === null || this.event === undefined ? 0 : this.event
        ],
      vtsiProjectName: this.vtsiProjectName,
      resourceName: this.resourceName,
      eventTime: this.eventTime ? this.eventTime.toProtobufJSON(options) : null,
      sipStatusType:
        ondewoSip004.SipStatus.StatusType[
          this.sipStatusType === null || this.sipStatusType === undefined
            ? 0
            : this.sipStatusType
        ],
      sipStatusDescription: this.sipStatusDescription,
      previousSipStatusType:
        ondewoSip004.SipStatus.StatusType[
          this.previousSipStatusType === null ||
          this.previousSipStatusType === undefined
            ? 0
            : this.previousSipStatusType
        ],
      callName: this.callName,
      campaignName: this.campaignName,
      description: this.description,
      attributes: this.attributes
        ? Object.keys(this.attributes).reduce(
            (r, k) => ({ ...r, [k]: this.attributes![k] }),
            {}
          )
        : {},
      campaignStatistics: this.campaignStatistics
        ? this.campaignStatistics.toProtobufJSON(options)
        : null,
      resourceSequence: this.resourceSequence
    };
  }
}
export module VtsiEventMessage {
  /**
   * Standard JavaScript object representation for VtsiEventMessage
   */
  export interface AsObject {
    eventId: string;
    event: VtsiEvent;
    vtsiProjectName: string;
    resourceName: string;
    eventTime?: googleProtobuf001.Timestamp.AsObject;
    sipStatusType: ondewoSip004.SipStatus.StatusType;
    sipStatusDescription: string;
    previousSipStatusType: ondewoSip004.SipStatus.StatusType;
    callName: string;
    campaignName: string;
    description: string;
    attributes: { [prop: string]: string };
    campaignStatistics?: ondewoVtsi005.CampaignStatistics.AsObject;
    resourceSequence: string;
  }

  /**
   * Protobuf JSON representation for VtsiEventMessage
   */
  export interface AsProtobufJSON {
    eventId: string;
    event: string;
    vtsiProjectName: string;
    resourceName: string;
    eventTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    sipStatusType: string;
    sipStatusDescription: string;
    previousSipStatusType: string;
    callName: string;
    campaignName: string;
    description: string;
    attributes: { [prop: string]: string };
    campaignStatistics: ondewoVtsi005.CampaignStatistics.AsProtobufJSON | null;
    resourceSequence: string;
  }

  /**
   * Message implementation for ondewo.vtsi.VtsiEventMessage.AttributesEntry
   */
  export class AttributesEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.VtsiEventMessage.AttributesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new AttributesEntry();
      AttributesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AttributesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: AttributesEntry,
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

      AttributesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: AttributesEntry,
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
     * @param _value initial values object or instance of AttributesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<AttributesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      AttributesEntry.refineValues(this);
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
      AttributesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AttributesEntry.AsObject {
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
    ): AttributesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module AttributesEntry {
    /**
     * Standard JavaScript object representation for AttributesEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for AttributesEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.VtsiEventSubscription
 */
export class VtsiEventSubscription implements GrpcMessage {
  static id = 'ondewo.vtsi.VtsiEventSubscription';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VtsiEventSubscription();
    VtsiEventSubscription.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VtsiEventSubscription) {
    _instance.name = _instance.name || '';
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.events = _instance.events || [];
    _instance.allEvents = _instance.allEvents || false;
    _instance.resourceNamePrefixes = _instance.resourceNamePrefixes || [];
    _instance.webhookNames = _instance.webhookNames || [];
    _instance.disabled = _instance.disabled || false;
    _instance.createdBy = _instance.createdBy || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.campaignNames = _instance.campaignNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VtsiEventSubscription,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _reader.readPackableEnumInto(
            (_instance.events = _instance.events || [])
          );
          break;
        case 5:
          _instance.allEvents = _reader.readBool();
          break;
        case 6:
          (_instance.resourceNamePrefixes =
            _instance.resourceNamePrefixes || []).push(_reader.readString());
          break;
        case 7:
          (_instance.webhookNames = _instance.webhookNames || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _instance.disabled = _reader.readBool();
          break;
        case 9:
          _instance.createdBy = _reader.readString();
          break;
        case 10:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.modifiedBy = _reader.readString();
          break;
        case 12:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          (_instance.campaignNames = _instance.campaignNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    VtsiEventSubscription.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VtsiEventSubscription,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(2, _instance.vtsiProjectName);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.events && _instance.events.length) {
      _writer.writePackedEnum(4, _instance.events);
    }
    if (_instance.allEvents) {
      _writer.writeBool(5, _instance.allEvents);
    }
    if (
      _instance.resourceNamePrefixes &&
      _instance.resourceNamePrefixes.length
    ) {
      _writer.writeRepeatedString(6, _instance.resourceNamePrefixes);
    }
    if (_instance.webhookNames && _instance.webhookNames.length) {
      _writer.writeRepeatedString(7, _instance.webhookNames);
    }
    if (_instance.disabled) {
      _writer.writeBool(8, _instance.disabled);
    }
    if (_instance.createdBy) {
      _writer.writeString(9, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        10,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(11, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        12,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.campaignNames && _instance.campaignNames.length) {
      _writer.writeRepeatedString(13, _instance.campaignNames);
    }
  }

  private _name: string;
  private _vtsiProjectName: string;
  private _displayName: string;
  private _events: VtsiEvent[];
  private _allEvents: boolean;
  private _resourceNamePrefixes: string[];
  private _webhookNames: string[];
  private _disabled: boolean;
  private _createdBy: string;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;
  private _campaignNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VtsiEventSubscription to deeply clone from
   */
  constructor(_value?: RecursivePartial<VtsiEventSubscription.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.displayName = _value.displayName;
    this.events = (_value.events || []).slice();
    this.allEvents = _value.allEvents;
    this.resourceNamePrefixes = (_value.resourceNamePrefixes || []).slice();
    this.webhookNames = (_value.webhookNames || []).slice();
    this.disabled = _value.disabled;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    this.campaignNames = (_value.campaignNames || []).slice();
    VtsiEventSubscription.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
  get events(): VtsiEvent[] {
    return this._events;
  }
  set events(value: VtsiEvent[]) {
    this._events = value;
  }
  get allEvents(): boolean {
    return this._allEvents;
  }
  set allEvents(value: boolean) {
    this._allEvents = value;
  }
  get resourceNamePrefixes(): string[] {
    return this._resourceNamePrefixes;
  }
  set resourceNamePrefixes(value: string[]) {
    this._resourceNamePrefixes = value;
  }
  get webhookNames(): string[] {
    return this._webhookNames;
  }
  set webhookNames(value: string[]) {
    this._webhookNames = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
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
  get campaignNames(): string[] {
    return this._campaignNames;
  }
  set campaignNames(value: string[]) {
    this._campaignNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VtsiEventSubscription.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VtsiEventSubscription.AsObject {
    return {
      name: this.name,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      events: (this.events || []).slice(),
      allEvents: this.allEvents,
      resourceNamePrefixes: (this.resourceNamePrefixes || []).slice(),
      webhookNames: (this.webhookNames || []).slice(),
      disabled: this.disabled,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      campaignNames: (this.campaignNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VtsiEventSubscription.AsProtobufJSON {
    return {
      name: this.name,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      events: (this.events || []).map(v => VtsiEvent[v]),
      allEvents: this.allEvents,
      resourceNamePrefixes: (this.resourceNamePrefixes || []).slice(),
      webhookNames: (this.webhookNames || []).slice(),
      disabled: this.disabled,
      createdBy: this.createdBy,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedBy: this.modifiedBy,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      campaignNames: (this.campaignNames || []).slice()
    };
  }
}
export module VtsiEventSubscription {
  /**
   * Standard JavaScript object representation for VtsiEventSubscription
   */
  export interface AsObject {
    name: string;
    vtsiProjectName: string;
    displayName: string;
    events: VtsiEvent[];
    allEvents: boolean;
    resourceNamePrefixes: string[];
    webhookNames: string[];
    disabled: boolean;
    createdBy: string;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
    campaignNames: string[];
  }

  /**
   * Protobuf JSON representation for VtsiEventSubscription
   */
  export interface AsProtobufJSON {
    name: string;
    vtsiProjectName: string;
    displayName: string;
    events: string[];
    allEvents: boolean;
    resourceNamePrefixes: string[];
    webhookNames: string[];
    disabled: boolean;
    createdBy: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    campaignNames: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.WebhookDeliveryStatistics
 */
export class WebhookDeliveryStatistics implements GrpcMessage {
  static id = 'ondewo.vtsi.WebhookDeliveryStatistics';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WebhookDeliveryStatistics();
    WebhookDeliveryStatistics.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WebhookDeliveryStatistics) {
    _instance.deliveredCount = _instance.deliveredCount || '0';
    _instance.failedCount = _instance.failedCount || '0';
    _instance.droppedCount = _instance.droppedCount || '0';
    _instance.lastDeliveryTime = _instance.lastDeliveryTime || undefined;
    _instance.lastSuccessTime = _instance.lastSuccessTime || undefined;
    _instance.lastHttpStatusCode = _instance.lastHttpStatusCode || 0;
    _instance.lastError = _instance.lastError || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WebhookDeliveryStatistics,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deliveredCount = _reader.readInt64String();
          break;
        case 2:
          _instance.failedCount = _reader.readInt64String();
          break;
        case 3:
          _instance.droppedCount = _reader.readInt64String();
          break;
        case 4:
          _instance.lastDeliveryTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.lastDeliveryTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.lastSuccessTime = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.lastSuccessTime,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.lastHttpStatusCode = _reader.readInt32();
          break;
        case 7:
          _instance.lastError = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WebhookDeliveryStatistics.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WebhookDeliveryStatistics,
    _writer: BinaryWriter
  ) {
    if (_instance.deliveredCount) {
      _writer.writeInt64String(1, _instance.deliveredCount);
    }
    if (_instance.failedCount) {
      _writer.writeInt64String(2, _instance.failedCount);
    }
    if (_instance.droppedCount) {
      _writer.writeInt64String(3, _instance.droppedCount);
    }
    if (_instance.lastDeliveryTime) {
      _writer.writeMessage(
        4,
        _instance.lastDeliveryTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.lastSuccessTime) {
      _writer.writeMessage(
        5,
        _instance.lastSuccessTime as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.lastHttpStatusCode) {
      _writer.writeInt32(6, _instance.lastHttpStatusCode);
    }
    if (_instance.lastError) {
      _writer.writeString(7, _instance.lastError);
    }
  }

  private _deliveredCount: string;
  private _failedCount: string;
  private _droppedCount: string;
  private _lastDeliveryTime?: googleProtobuf001.Timestamp;
  private _lastSuccessTime?: googleProtobuf001.Timestamp;
  private _lastHttpStatusCode: number;
  private _lastError: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WebhookDeliveryStatistics to deeply clone from
   */
  constructor(_value?: RecursivePartial<WebhookDeliveryStatistics.AsObject>) {
    _value = _value || {};
    this.deliveredCount = _value.deliveredCount;
    this.failedCount = _value.failedCount;
    this.droppedCount = _value.droppedCount;
    this.lastDeliveryTime = _value.lastDeliveryTime
      ? new googleProtobuf001.Timestamp(_value.lastDeliveryTime)
      : undefined;
    this.lastSuccessTime = _value.lastSuccessTime
      ? new googleProtobuf001.Timestamp(_value.lastSuccessTime)
      : undefined;
    this.lastHttpStatusCode = _value.lastHttpStatusCode;
    this.lastError = _value.lastError;
    WebhookDeliveryStatistics.refineValues(this);
  }
  get deliveredCount(): string {
    return this._deliveredCount;
  }
  set deliveredCount(value: string) {
    this._deliveredCount = value;
  }
  get failedCount(): string {
    return this._failedCount;
  }
  set failedCount(value: string) {
    this._failedCount = value;
  }
  get droppedCount(): string {
    return this._droppedCount;
  }
  set droppedCount(value: string) {
    this._droppedCount = value;
  }
  get lastDeliveryTime(): googleProtobuf001.Timestamp | undefined {
    return this._lastDeliveryTime;
  }
  set lastDeliveryTime(value: googleProtobuf001.Timestamp | undefined) {
    this._lastDeliveryTime = value;
  }
  get lastSuccessTime(): googleProtobuf001.Timestamp | undefined {
    return this._lastSuccessTime;
  }
  set lastSuccessTime(value: googleProtobuf001.Timestamp | undefined) {
    this._lastSuccessTime = value;
  }
  get lastHttpStatusCode(): number {
    return this._lastHttpStatusCode;
  }
  set lastHttpStatusCode(value: number) {
    this._lastHttpStatusCode = value;
  }
  get lastError(): string {
    return this._lastError;
  }
  set lastError(value: string) {
    this._lastError = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WebhookDeliveryStatistics.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WebhookDeliveryStatistics.AsObject {
    return {
      deliveredCount: this.deliveredCount,
      failedCount: this.failedCount,
      droppedCount: this.droppedCount,
      lastDeliveryTime: this.lastDeliveryTime
        ? this.lastDeliveryTime.toObject()
        : undefined,
      lastSuccessTime: this.lastSuccessTime
        ? this.lastSuccessTime.toObject()
        : undefined,
      lastHttpStatusCode: this.lastHttpStatusCode,
      lastError: this.lastError
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WebhookDeliveryStatistics.AsProtobufJSON {
    return {
      deliveredCount: this.deliveredCount,
      failedCount: this.failedCount,
      droppedCount: this.droppedCount,
      lastDeliveryTime: this.lastDeliveryTime
        ? this.lastDeliveryTime.toProtobufJSON(options)
        : null,
      lastSuccessTime: this.lastSuccessTime
        ? this.lastSuccessTime.toProtobufJSON(options)
        : null,
      lastHttpStatusCode: this.lastHttpStatusCode,
      lastError: this.lastError
    };
  }
}
export module WebhookDeliveryStatistics {
  /**
   * Standard JavaScript object representation for WebhookDeliveryStatistics
   */
  export interface AsObject {
    deliveredCount: string;
    failedCount: string;
    droppedCount: string;
    lastDeliveryTime?: googleProtobuf001.Timestamp.AsObject;
    lastSuccessTime?: googleProtobuf001.Timestamp.AsObject;
    lastHttpStatusCode: number;
    lastError: string;
  }

  /**
   * Protobuf JSON representation for WebhookDeliveryStatistics
   */
  export interface AsProtobufJSON {
    deliveredCount: string;
    failedCount: string;
    droppedCount: string;
    lastDeliveryTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    lastSuccessTime: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    lastHttpStatusCode: number;
    lastError: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.Webhook
 */
export class Webhook implements GrpcMessage {
  static id = 'ondewo.vtsi.Webhook';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Webhook();
    Webhook.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Webhook) {
    _instance.name = _instance.name || '';
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.url = _instance.url || '';
    _instance.httpMethod = _instance.httpMethod || 0;
    _instance.customHeaders = _instance.customHeaders || {};
    _instance.disabled = _instance.disabled || false;
    _instance.timeout = _instance.timeout || undefined;
    _instance.deliveryStatistics = _instance.deliveryStatistics || undefined;
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
    _instance: Webhook,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.url = _reader.readString();
          break;
        case 5:
          _instance.httpMethod = _reader.readEnum();
          break;
        case 6:
          const msg_6 = {} as any;
          _reader.readMessage(
            msg_6,
            Webhook.CustomHeadersEntry.deserializeBinaryFromReader
          );
          _instance.customHeaders = _instance.customHeaders || {};
          _instance.customHeaders[msg_6.key] = msg_6.value;
          break;
        case 7:
          _instance.disabled = _reader.readBool();
          break;
        case 8:
          _instance.timeout = new googleProtobuf002.Duration();
          _reader.readMessage(
            _instance.timeout,
            googleProtobuf002.Duration.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.deliveryStatistics = new WebhookDeliveryStatistics();
          _reader.readMessage(
            _instance.deliveryStatistics,
            WebhookDeliveryStatistics.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.createdBy = _reader.readString();
          break;
        case 11:
          _instance.createdAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.modifiedBy = _reader.readString();
          break;
        case 13:
          _instance.modifiedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Webhook.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Webhook, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.vtsiProjectName) {
      _writer.writeString(2, _instance.vtsiProjectName);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.url) {
      _writer.writeString(4, _instance.url);
    }
    if (_instance.httpMethod) {
      _writer.writeEnum(5, _instance.httpMethod);
    }
    if (!!_instance.customHeaders) {
      const keys_6 = Object.keys(_instance.customHeaders as any);

      if (keys_6.length) {
        const repeated_6 = keys_6
          .map(key => ({
            key: key,
            value: (_instance.customHeaders as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          6,
          repeated_6,
          Webhook.CustomHeadersEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.disabled) {
      _writer.writeBool(7, _instance.disabled);
    }
    if (_instance.timeout) {
      _writer.writeMessage(
        8,
        _instance.timeout as any,
        googleProtobuf002.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.deliveryStatistics) {
      _writer.writeMessage(
        9,
        _instance.deliveryStatistics as any,
        WebhookDeliveryStatistics.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(10, _instance.createdBy);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        11,
        _instance.createdAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(12, _instance.modifiedBy);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        13,
        _instance.modifiedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _vtsiProjectName: string;
  private _displayName: string;
  private _url: string;
  private _httpMethod: WebhookHttpMethod;
  private _customHeaders: { [prop: string]: string };
  private _disabled: boolean;
  private _timeout?: googleProtobuf002.Duration;
  private _deliveryStatistics?: WebhookDeliveryStatistics;
  private _createdBy: string;
  private _createdAt?: googleProtobuf001.Timestamp;
  private _modifiedBy: string;
  private _modifiedAt?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Webhook to deeply clone from
   */
  constructor(_value?: RecursivePartial<Webhook.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.vtsiProjectName = _value.vtsiProjectName;
    this.displayName = _value.displayName;
    this.url = _value.url;
    this.httpMethod = _value.httpMethod;
    (this.customHeaders = _value!.customHeaders
      ? Object.keys(_value!.customHeaders).reduce(
          (r, k) => ({ ...r, [k]: _value!.customHeaders![k] }),
          {}
        )
      : {}),
      (this.disabled = _value.disabled);
    this.timeout = _value.timeout
      ? new googleProtobuf002.Duration(_value.timeout)
      : undefined;
    this.deliveryStatistics = _value.deliveryStatistics
      ? new WebhookDeliveryStatistics(_value.deliveryStatistics)
      : undefined;
    this.createdBy = _value.createdBy;
    this.createdAt = _value.createdAt
      ? new googleProtobuf001.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf001.Timestamp(_value.modifiedAt)
      : undefined;
    Webhook.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }
  get httpMethod(): WebhookHttpMethod {
    return this._httpMethod;
  }
  set httpMethod(value: WebhookHttpMethod) {
    this._httpMethod = value;
  }
  get customHeaders(): { [prop: string]: string } {
    return this._customHeaders;
  }
  set customHeaders(value: { [prop: string]: string }) {
    this._customHeaders = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get timeout(): googleProtobuf002.Duration | undefined {
    return this._timeout;
  }
  set timeout(value: googleProtobuf002.Duration | undefined) {
    this._timeout = value;
  }
  get deliveryStatistics(): WebhookDeliveryStatistics | undefined {
    return this._deliveryStatistics;
  }
  set deliveryStatistics(value: WebhookDeliveryStatistics | undefined) {
    this._deliveryStatistics = value;
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Webhook.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Webhook.AsObject {
    return {
      name: this.name,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      url: this.url,
      httpMethod: this.httpMethod,
      customHeaders: this.customHeaders
        ? Object.keys(this.customHeaders).reduce(
            (r, k) => ({ ...r, [k]: this.customHeaders![k] }),
            {}
          )
        : {},
      disabled: this.disabled,
      timeout: this.timeout ? this.timeout.toObject() : undefined,
      deliveryStatistics: this.deliveryStatistics
        ? this.deliveryStatistics.toObject()
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
  ): Webhook.AsProtobufJSON {
    return {
      name: this.name,
      vtsiProjectName: this.vtsiProjectName,
      displayName: this.displayName,
      url: this.url,
      httpMethod:
        WebhookHttpMethod[
          this.httpMethod === null || this.httpMethod === undefined
            ? 0
            : this.httpMethod
        ],
      customHeaders: this.customHeaders
        ? Object.keys(this.customHeaders).reduce(
            (r, k) => ({ ...r, [k]: this.customHeaders![k] }),
            {}
          )
        : {},
      disabled: this.disabled,
      timeout: this.timeout ? this.timeout.toProtobufJSON(options) : null,
      deliveryStatistics: this.deliveryStatistics
        ? this.deliveryStatistics.toProtobufJSON(options)
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
export module Webhook {
  /**
   * Standard JavaScript object representation for Webhook
   */
  export interface AsObject {
    name: string;
    vtsiProjectName: string;
    displayName: string;
    url: string;
    httpMethod: WebhookHttpMethod;
    customHeaders: { [prop: string]: string };
    disabled: boolean;
    timeout?: googleProtobuf002.Duration.AsObject;
    deliveryStatistics?: WebhookDeliveryStatistics.AsObject;
    createdBy: string;
    createdAt?: googleProtobuf001.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for Webhook
   */
  export interface AsProtobufJSON {
    name: string;
    vtsiProjectName: string;
    displayName: string;
    url: string;
    httpMethod: string;
    customHeaders: { [prop: string]: string };
    disabled: boolean;
    timeout: googleProtobuf002.Duration.AsProtobufJSON | null;
    deliveryStatistics: WebhookDeliveryStatistics.AsProtobufJSON | null;
    createdBy: string;
    createdAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    modifiedAt: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }

  /**
   * Message implementation for ondewo.vtsi.Webhook.CustomHeadersEntry
   */
  export class CustomHeadersEntry implements GrpcMessage {
    static id = 'ondewo.vtsi.Webhook.CustomHeadersEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new CustomHeadersEntry();
      CustomHeadersEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CustomHeadersEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: CustomHeadersEntry,
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

      CustomHeadersEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: CustomHeadersEntry,
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
     * @param _value initial values object or instance of CustomHeadersEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<CustomHeadersEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      CustomHeadersEntry.refineValues(this);
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
      CustomHeadersEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CustomHeadersEntry.AsObject {
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
    ): CustomHeadersEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module CustomHeadersEntry {
    /**
     * Standard JavaScript object representation for CustomHeadersEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for CustomHeadersEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for ondewo.vtsi.VtsiEventFilter
 */
export class VtsiEventFilter implements GrpcMessage {
  static id = 'ondewo.vtsi.VtsiEventFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new VtsiEventFilter();
    VtsiEventFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: VtsiEventFilter) {
    _instance.events = _instance.events || [];
    _instance.resourceNamePrefixes = _instance.resourceNamePrefixes || [];
    _instance.campaignNames = _instance.campaignNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: VtsiEventFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _reader.readPackableEnumInto(
            (_instance.events = _instance.events || [])
          );
          break;
        case 2:
          (_instance.resourceNamePrefixes =
            _instance.resourceNamePrefixes || []).push(_reader.readString());
          break;
        case 3:
          (_instance.campaignNames = _instance.campaignNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    VtsiEventFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: VtsiEventFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.events && _instance.events.length) {
      _writer.writePackedEnum(1, _instance.events);
    }
    if (
      _instance.resourceNamePrefixes &&
      _instance.resourceNamePrefixes.length
    ) {
      _writer.writeRepeatedString(2, _instance.resourceNamePrefixes);
    }
    if (_instance.campaignNames && _instance.campaignNames.length) {
      _writer.writeRepeatedString(3, _instance.campaignNames);
    }
  }

  private _events: VtsiEvent[];
  private _resourceNamePrefixes: string[];
  private _campaignNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of VtsiEventFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<VtsiEventFilter.AsObject>) {
    _value = _value || {};
    this.events = (_value.events || []).slice();
    this.resourceNamePrefixes = (_value.resourceNamePrefixes || []).slice();
    this.campaignNames = (_value.campaignNames || []).slice();
    VtsiEventFilter.refineValues(this);
  }
  get events(): VtsiEvent[] {
    return this._events;
  }
  set events(value: VtsiEvent[]) {
    this._events = value;
  }
  get resourceNamePrefixes(): string[] {
    return this._resourceNamePrefixes;
  }
  set resourceNamePrefixes(value: string[]) {
    this._resourceNamePrefixes = value;
  }
  get campaignNames(): string[] {
    return this._campaignNames;
  }
  set campaignNames(value: string[]) {
    this._campaignNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    VtsiEventFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): VtsiEventFilter.AsObject {
    return {
      events: (this.events || []).slice(),
      resourceNamePrefixes: (this.resourceNamePrefixes || []).slice(),
      campaignNames: (this.campaignNames || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): VtsiEventFilter.AsProtobufJSON {
    return {
      events: (this.events || []).map(v => VtsiEvent[v]),
      resourceNamePrefixes: (this.resourceNamePrefixes || []).slice(),
      campaignNames: (this.campaignNames || []).slice()
    };
  }
}
export module VtsiEventFilter {
  /**
   * Standard JavaScript object representation for VtsiEventFilter
   */
  export interface AsObject {
    events: VtsiEvent[];
    resourceNamePrefixes: string[];
    campaignNames: string[];
  }

  /**
   * Protobuf JSON representation for VtsiEventFilter
   */
  export interface AsProtobufJSON {
    events: string[];
    resourceNamePrefixes: string[];
    campaignNames: string[];
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateVtsiEventSubscriptionRequest
 */
export class CreateVtsiEventSubscriptionRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateVtsiEventSubscriptionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateVtsiEventSubscriptionRequest();
    CreateVtsiEventSubscriptionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateVtsiEventSubscriptionRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.eventSubscription = _instance.eventSubscription || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateVtsiEventSubscriptionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.eventSubscription = new VtsiEventSubscription();
          _reader.readMessage(
            _instance.eventSubscription,
            VtsiEventSubscription.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateVtsiEventSubscriptionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateVtsiEventSubscriptionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.eventSubscription) {
      _writer.writeMessage(
        2,
        _instance.eventSubscription as any,
        VtsiEventSubscription.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _eventSubscription?: VtsiEventSubscription;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateVtsiEventSubscriptionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateVtsiEventSubscriptionRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.eventSubscription = _value.eventSubscription
      ? new VtsiEventSubscription(_value.eventSubscription)
      : undefined;
    CreateVtsiEventSubscriptionRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get eventSubscription(): VtsiEventSubscription | undefined {
    return this._eventSubscription;
  }
  set eventSubscription(value: VtsiEventSubscription | undefined) {
    this._eventSubscription = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateVtsiEventSubscriptionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateVtsiEventSubscriptionRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      eventSubscription: this.eventSubscription
        ? this.eventSubscription.toObject()
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
  ): CreateVtsiEventSubscriptionRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      eventSubscription: this.eventSubscription
        ? this.eventSubscription.toProtobufJSON(options)
        : null
    };
  }
}
export module CreateVtsiEventSubscriptionRequest {
  /**
   * Standard JavaScript object representation for CreateVtsiEventSubscriptionRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    eventSubscription?: VtsiEventSubscription.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateVtsiEventSubscriptionRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    eventSubscription: VtsiEventSubscription.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetVtsiEventSubscriptionRequest
 */
export class GetVtsiEventSubscriptionRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetVtsiEventSubscriptionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetVtsiEventSubscriptionRequest();
    GetVtsiEventSubscriptionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetVtsiEventSubscriptionRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetVtsiEventSubscriptionRequest,
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

    GetVtsiEventSubscriptionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetVtsiEventSubscriptionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetVtsiEventSubscriptionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetVtsiEventSubscriptionRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    GetVtsiEventSubscriptionRequest.refineValues(this);
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
    GetVtsiEventSubscriptionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetVtsiEventSubscriptionRequest.AsObject {
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
  ): GetVtsiEventSubscriptionRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetVtsiEventSubscriptionRequest {
  /**
   * Standard JavaScript object representation for GetVtsiEventSubscriptionRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetVtsiEventSubscriptionRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateVtsiEventSubscriptionRequest
 */
export class UpdateVtsiEventSubscriptionRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateVtsiEventSubscriptionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateVtsiEventSubscriptionRequest();
    UpdateVtsiEventSubscriptionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateVtsiEventSubscriptionRequest) {
    _instance.eventSubscription = _instance.eventSubscription || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateVtsiEventSubscriptionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.eventSubscription = new VtsiEventSubscription();
          _reader.readMessage(
            _instance.eventSubscription,
            VtsiEventSubscription.deserializeBinaryFromReader
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

    UpdateVtsiEventSubscriptionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateVtsiEventSubscriptionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.eventSubscription) {
      _writer.writeMessage(
        1,
        _instance.eventSubscription as any,
        VtsiEventSubscription.serializeBinaryToWriter
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

  private _eventSubscription?: VtsiEventSubscription;
  private _updateMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateVtsiEventSubscriptionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateVtsiEventSubscriptionRequest.AsObject>
  ) {
    _value = _value || {};
    this.eventSubscription = _value.eventSubscription
      ? new VtsiEventSubscription(_value.eventSubscription)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    UpdateVtsiEventSubscriptionRequest.refineValues(this);
  }
  get eventSubscription(): VtsiEventSubscription | undefined {
    return this._eventSubscription;
  }
  set eventSubscription(value: VtsiEventSubscription | undefined) {
    this._eventSubscription = value;
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
    UpdateVtsiEventSubscriptionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateVtsiEventSubscriptionRequest.AsObject {
    return {
      eventSubscription: this.eventSubscription
        ? this.eventSubscription.toObject()
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
  ): UpdateVtsiEventSubscriptionRequest.AsProtobufJSON {
    return {
      eventSubscription: this.eventSubscription
        ? this.eventSubscription.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateVtsiEventSubscriptionRequest {
  /**
   * Standard JavaScript object representation for UpdateVtsiEventSubscriptionRequest
   */
  export interface AsObject {
    eventSubscription?: VtsiEventSubscription.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateVtsiEventSubscriptionRequest
   */
  export interface AsProtobufJSON {
    eventSubscription: VtsiEventSubscription.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteVtsiEventSubscriptionRequest
 */
export class DeleteVtsiEventSubscriptionRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteVtsiEventSubscriptionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteVtsiEventSubscriptionRequest();
    DeleteVtsiEventSubscriptionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteVtsiEventSubscriptionRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteVtsiEventSubscriptionRequest,
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

    DeleteVtsiEventSubscriptionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteVtsiEventSubscriptionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteVtsiEventSubscriptionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteVtsiEventSubscriptionRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    DeleteVtsiEventSubscriptionRequest.refineValues(this);
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
    DeleteVtsiEventSubscriptionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteVtsiEventSubscriptionRequest.AsObject {
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
  ): DeleteVtsiEventSubscriptionRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteVtsiEventSubscriptionRequest {
  /**
   * Standard JavaScript object representation for DeleteVtsiEventSubscriptionRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteVtsiEventSubscriptionRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteVtsiEventSubscriptionResponse
 */
export class DeleteVtsiEventSubscriptionResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteVtsiEventSubscriptionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteVtsiEventSubscriptionResponse();
    DeleteVtsiEventSubscriptionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteVtsiEventSubscriptionResponse) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteVtsiEventSubscriptionResponse,
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

    DeleteVtsiEventSubscriptionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteVtsiEventSubscriptionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteVtsiEventSubscriptionResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteVtsiEventSubscriptionResponse.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    DeleteVtsiEventSubscriptionResponse.refineValues(this);
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
    DeleteVtsiEventSubscriptionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteVtsiEventSubscriptionResponse.AsObject {
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
  ): DeleteVtsiEventSubscriptionResponse.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteVtsiEventSubscriptionResponse {
  /**
   * Standard JavaScript object representation for DeleteVtsiEventSubscriptionResponse
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteVtsiEventSubscriptionResponse
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListVtsiEventSubscriptionsRequest
 */
export class ListVtsiEventSubscriptionsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListVtsiEventSubscriptionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListVtsiEventSubscriptionsRequest();
    ListVtsiEventSubscriptionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListVtsiEventSubscriptionsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.pageSize = _instance.pageSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListVtsiEventSubscriptionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
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

    ListVtsiEventSubscriptionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListVtsiEventSubscriptionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _vtsiProjectName: string;
  private _pageSize: number;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListVtsiEventSubscriptionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListVtsiEventSubscriptionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListVtsiEventSubscriptionsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
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
    ListVtsiEventSubscriptionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListVtsiEventSubscriptionsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
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
  ): ListVtsiEventSubscriptionsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListVtsiEventSubscriptionsRequest {
  /**
   * Standard JavaScript object representation for ListVtsiEventSubscriptionsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    pageSize: number;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListVtsiEventSubscriptionsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageSize: number;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListVtsiEventSubscriptionsResponse
 */
export class ListVtsiEventSubscriptionsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListVtsiEventSubscriptionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListVtsiEventSubscriptionsResponse();
    ListVtsiEventSubscriptionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListVtsiEventSubscriptionsResponse) {
    _instance.eventSubscriptions = _instance.eventSubscriptions || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListVtsiEventSubscriptionsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new VtsiEventSubscription();
          _reader.readMessage(
            messageInitializer1,
            VtsiEventSubscription.deserializeBinaryFromReader
          );
          (_instance.eventSubscriptions =
            _instance.eventSubscriptions || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListVtsiEventSubscriptionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListVtsiEventSubscriptionsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.eventSubscriptions && _instance.eventSubscriptions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.eventSubscriptions as any,
        VtsiEventSubscription.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _eventSubscriptions?: VtsiEventSubscription[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListVtsiEventSubscriptionsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListVtsiEventSubscriptionsResponse.AsObject>
  ) {
    _value = _value || {};
    this.eventSubscriptions = (_value.eventSubscriptions || []).map(
      m => new VtsiEventSubscription(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListVtsiEventSubscriptionsResponse.refineValues(this);
  }
  get eventSubscriptions(): VtsiEventSubscription[] | undefined {
    return this._eventSubscriptions;
  }
  set eventSubscriptions(value: VtsiEventSubscription[] | undefined) {
    this._eventSubscriptions = value;
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
    ListVtsiEventSubscriptionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListVtsiEventSubscriptionsResponse.AsObject {
    return {
      eventSubscriptions: (this.eventSubscriptions || []).map(m =>
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
  ): ListVtsiEventSubscriptionsResponse.AsProtobufJSON {
    return {
      eventSubscriptions: (this.eventSubscriptions || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListVtsiEventSubscriptionsResponse {
  /**
   * Standard JavaScript object representation for ListVtsiEventSubscriptionsResponse
   */
  export interface AsObject {
    eventSubscriptions?: VtsiEventSubscription.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListVtsiEventSubscriptionsResponse
   */
  export interface AsProtobufJSON {
    eventSubscriptions: VtsiEventSubscription.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.CreateWebhookRequest
 */
export class CreateWebhookRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.CreateWebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateWebhookRequest();
    CreateWebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateWebhookRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.webhook = _instance.webhook || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateWebhookRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.webhook = new Webhook();
          _reader.readMessage(
            _instance.webhook,
            Webhook.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateWebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateWebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.webhook) {
      _writer.writeMessage(
        2,
        _instance.webhook as any,
        Webhook.serializeBinaryToWriter
      );
    }
  }

  private _vtsiProjectName: string;
  private _webhook?: Webhook;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateWebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateWebhookRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.webhook = _value.webhook ? new Webhook(_value.webhook) : undefined;
    CreateWebhookRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get webhook(): Webhook | undefined {
    return this._webhook;
  }
  set webhook(value: Webhook | undefined) {
    this._webhook = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateWebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateWebhookRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      webhook: this.webhook ? this.webhook.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateWebhookRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      webhook: this.webhook ? this.webhook.toProtobufJSON(options) : null
    };
  }
}
export module CreateWebhookRequest {
  /**
   * Standard JavaScript object representation for CreateWebhookRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    webhook?: Webhook.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateWebhookRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    webhook: Webhook.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.GetWebhookRequest
 */
export class GetWebhookRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.GetWebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetWebhookRequest();
    GetWebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetWebhookRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetWebhookRequest,
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

    GetWebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetWebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetWebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetWebhookRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetWebhookRequest.refineValues(this);
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
    GetWebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetWebhookRequest.AsObject {
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
  ): GetWebhookRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetWebhookRequest {
  /**
   * Standard JavaScript object representation for GetWebhookRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetWebhookRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.UpdateWebhookRequest
 */
export class UpdateWebhookRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.UpdateWebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateWebhookRequest();
    UpdateWebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateWebhookRequest) {
    _instance.webhook = _instance.webhook || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateWebhookRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.webhook = new Webhook();
          _reader.readMessage(
            _instance.webhook,
            Webhook.deserializeBinaryFromReader
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

    UpdateWebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateWebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.webhook) {
      _writer.writeMessage(
        1,
        _instance.webhook as any,
        Webhook.serializeBinaryToWriter
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

  private _webhook?: Webhook;
  private _updateMask?: googleProtobuf003.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateWebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateWebhookRequest.AsObject>) {
    _value = _value || {};
    this.webhook = _value.webhook ? new Webhook(_value.webhook) : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    UpdateWebhookRequest.refineValues(this);
  }
  get webhook(): Webhook | undefined {
    return this._webhook;
  }
  set webhook(value: Webhook | undefined) {
    this._webhook = value;
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
    UpdateWebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateWebhookRequest.AsObject {
    return {
      webhook: this.webhook ? this.webhook.toObject() : undefined,
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
  ): UpdateWebhookRequest.AsProtobufJSON {
    return {
      webhook: this.webhook ? this.webhook.toProtobufJSON(options) : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateWebhookRequest {
  /**
   * Standard JavaScript object representation for UpdateWebhookRequest
   */
  export interface AsObject {
    webhook?: Webhook.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateWebhookRequest
   */
  export interface AsProtobufJSON {
    webhook: Webhook.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteWebhookRequest
 */
export class DeleteWebhookRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteWebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteWebhookRequest();
    DeleteWebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteWebhookRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteWebhookRequest,
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

    DeleteWebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteWebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteWebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteWebhookRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteWebhookRequest.refineValues(this);
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
    DeleteWebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteWebhookRequest.AsObject {
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
  ): DeleteWebhookRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteWebhookRequest {
  /**
   * Standard JavaScript object representation for DeleteWebhookRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteWebhookRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.DeleteWebhookResponse
 */
export class DeleteWebhookResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.DeleteWebhookResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteWebhookResponse();
    DeleteWebhookResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteWebhookResponse) {
    _instance.name = _instance.name || '';
    _instance.detachedSubscriptionCount =
      _instance.detachedSubscriptionCount || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteWebhookResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.detachedSubscriptionCount = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteWebhookResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteWebhookResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.detachedSubscriptionCount) {
      _writer.writeInt32(2, _instance.detachedSubscriptionCount);
    }
  }

  private _name: string;
  private _detachedSubscriptionCount: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteWebhookResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteWebhookResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.detachedSubscriptionCount = _value.detachedSubscriptionCount;
    DeleteWebhookResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get detachedSubscriptionCount(): number {
    return this._detachedSubscriptionCount;
  }
  set detachedSubscriptionCount(value: number) {
    this._detachedSubscriptionCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteWebhookResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteWebhookResponse.AsObject {
    return {
      name: this.name,
      detachedSubscriptionCount: this.detachedSubscriptionCount
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteWebhookResponse.AsProtobufJSON {
    return {
      name: this.name,
      detachedSubscriptionCount: this.detachedSubscriptionCount
    };
  }
}
export module DeleteWebhookResponse {
  /**
   * Standard JavaScript object representation for DeleteWebhookResponse
   */
  export interface AsObject {
    name: string;
    detachedSubscriptionCount: number;
  }

  /**
   * Protobuf JSON representation for DeleteWebhookResponse
   */
  export interface AsProtobufJSON {
    name: string;
    detachedSubscriptionCount: number;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListWebhooksRequest
 */
export class ListWebhooksRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.ListWebhooksRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListWebhooksRequest();
    ListWebhooksRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListWebhooksRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';
    _instance.pageSize = _instance.pageSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListWebhooksRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
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

    ListWebhooksRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListWebhooksRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken !== undefined && _instance.pageToken !== null) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _vtsiProjectName: string;
  private _pageSize: number;
  private _pageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListWebhooksRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListWebhooksRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListWebhooksRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
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
    ListWebhooksRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListWebhooksRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
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
  ): ListWebhooksRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListWebhooksRequest {
  /**
   * Standard JavaScript object representation for ListWebhooksRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    pageSize: number;
    pageToken: string;
  }

  /**
   * Protobuf JSON representation for ListWebhooksRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    pageSize: number;
    pageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.ListWebhooksResponse
 */
export class ListWebhooksResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.ListWebhooksResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListWebhooksResponse();
    ListWebhooksResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListWebhooksResponse) {
    _instance.webhooks = _instance.webhooks || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListWebhooksResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Webhook();
          _reader.readMessage(
            messageInitializer1,
            Webhook.deserializeBinaryFromReader
          );
          (_instance.webhooks = _instance.webhooks || []).push(
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

    ListWebhooksResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListWebhooksResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.webhooks && _instance.webhooks.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.webhooks as any,
        Webhook.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _webhooks?: Webhook[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListWebhooksResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListWebhooksResponse.AsObject>) {
    _value = _value || {};
    this.webhooks = (_value.webhooks || []).map(m => new Webhook(m));
    this.nextPageToken = _value.nextPageToken;
    ListWebhooksResponse.refineValues(this);
  }
  get webhooks(): Webhook[] | undefined {
    return this._webhooks;
  }
  set webhooks(value: Webhook[] | undefined) {
    this._webhooks = value;
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
    ListWebhooksResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListWebhooksResponse.AsObject {
    return {
      webhooks: (this.webhooks || []).map(m => m.toObject()),
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
  ): ListWebhooksResponse.AsProtobufJSON {
    return {
      webhooks: (this.webhooks || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListWebhooksResponse {
  /**
   * Standard JavaScript object representation for ListWebhooksResponse
   */
  export interface AsObject {
    webhooks?: Webhook.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListWebhooksResponse
   */
  export interface AsProtobufJSON {
    webhooks: Webhook.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.TestWebhookRequest
 */
export class TestWebhookRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.TestWebhookRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TestWebhookRequest();
    TestWebhookRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TestWebhookRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TestWebhookRequest,
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

    TestWebhookRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TestWebhookRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TestWebhookRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<TestWebhookRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    TestWebhookRequest.refineValues(this);
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
    TestWebhookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TestWebhookRequest.AsObject {
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
  ): TestWebhookRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module TestWebhookRequest {
  /**
   * Standard JavaScript object representation for TestWebhookRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for TestWebhookRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.TestWebhookResponse
 */
export class TestWebhookResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.TestWebhookResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TestWebhookResponse();
    TestWebhookResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TestWebhookResponse) {
    _instance.success = _instance.success || false;
    _instance.httpStatusCode = _instance.httpStatusCode || 0;
    _instance.latency = _instance.latency || undefined;
    _instance.errorMessage = _instance.errorMessage || '';
    _instance.eventId = _instance.eventId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TestWebhookResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.success = _reader.readBool();
          break;
        case 2:
          _instance.httpStatusCode = _reader.readInt32();
          break;
        case 3:
          _instance.latency = new googleProtobuf002.Duration();
          _reader.readMessage(
            _instance.latency,
            googleProtobuf002.Duration.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.errorMessage = _reader.readString();
          break;
        case 5:
          _instance.eventId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    TestWebhookResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TestWebhookResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.success) {
      _writer.writeBool(1, _instance.success);
    }
    if (_instance.httpStatusCode) {
      _writer.writeInt32(2, _instance.httpStatusCode);
    }
    if (_instance.latency) {
      _writer.writeMessage(
        3,
        _instance.latency as any,
        googleProtobuf002.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.errorMessage) {
      _writer.writeString(4, _instance.errorMessage);
    }
    if (_instance.eventId) {
      _writer.writeString(5, _instance.eventId);
    }
  }

  private _success: boolean;
  private _httpStatusCode: number;
  private _latency?: googleProtobuf002.Duration;
  private _errorMessage: string;
  private _eventId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TestWebhookResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<TestWebhookResponse.AsObject>) {
    _value = _value || {};
    this.success = _value.success;
    this.httpStatusCode = _value.httpStatusCode;
    this.latency = _value.latency
      ? new googleProtobuf002.Duration(_value.latency)
      : undefined;
    this.errorMessage = _value.errorMessage;
    this.eventId = _value.eventId;
    TestWebhookResponse.refineValues(this);
  }
  get success(): boolean {
    return this._success;
  }
  set success(value: boolean) {
    this._success = value;
  }
  get httpStatusCode(): number {
    return this._httpStatusCode;
  }
  set httpStatusCode(value: number) {
    this._httpStatusCode = value;
  }
  get latency(): googleProtobuf002.Duration | undefined {
    return this._latency;
  }
  set latency(value: googleProtobuf002.Duration | undefined) {
    this._latency = value;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }
  set errorMessage(value: string) {
    this._errorMessage = value;
  }
  get eventId(): string {
    return this._eventId;
  }
  set eventId(value: string) {
    this._eventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TestWebhookResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TestWebhookResponse.AsObject {
    return {
      success: this.success,
      httpStatusCode: this.httpStatusCode,
      latency: this.latency ? this.latency.toObject() : undefined,
      errorMessage: this.errorMessage,
      eventId: this.eventId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TestWebhookResponse.AsProtobufJSON {
    return {
      success: this.success,
      httpStatusCode: this.httpStatusCode,
      latency: this.latency ? this.latency.toProtobufJSON(options) : null,
      errorMessage: this.errorMessage,
      eventId: this.eventId
    };
  }
}
export module TestWebhookResponse {
  /**
   * Standard JavaScript object representation for TestWebhookResponse
   */
  export interface AsObject {
    success: boolean;
    httpStatusCode: number;
    latency?: googleProtobuf002.Duration.AsObject;
    errorMessage: string;
    eventId: string;
  }

  /**
   * Protobuf JSON representation for TestWebhookResponse
   */
  export interface AsProtobufJSON {
    success: boolean;
    httpStatusCode: number;
    latency: googleProtobuf002.Duration.AsProtobufJSON | null;
    errorMessage: string;
    eventId: string;
  }
}

/**
 * Message implementation for ondewo.vtsi.SubscribeVtsiEventsRequest
 */
export class SubscribeVtsiEventsRequest implements GrpcMessage {
  static id = 'ondewo.vtsi.SubscribeVtsiEventsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubscribeVtsiEventsRequest();
    SubscribeVtsiEventsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubscribeVtsiEventsRequest) {
    _instance.vtsiProjectName = _instance.vtsiProjectName || '';

  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubscribeVtsiEventsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.vtsiProjectName = _reader.readString();
          break;
        case 2:
          _instance.eventSubscriptionName = _reader.readString();
          break;
        case 3:
          _instance.filter = new VtsiEventFilter();
          _reader.readMessage(
            _instance.filter,
            VtsiEventFilter.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.resumeToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SubscribeVtsiEventsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubscribeVtsiEventsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.vtsiProjectName) {
      _writer.writeString(1, _instance.vtsiProjectName);
    }
    if (
      _instance.eventSubscriptionName ||
      _instance.eventSubscriptionName === ''
    ) {
      _writer.writeString(2, _instance.eventSubscriptionName);
    }
    if (_instance.filter) {
      _writer.writeMessage(
        3,
        _instance.filter as any,
        VtsiEventFilter.serializeBinaryToWriter
      );
    }
    if (_instance.resumeToken !== undefined && _instance.resumeToken !== null) {
      _writer.writeString(4, _instance.resumeToken);
    }
  }

  private _vtsiProjectName: string;
  private _eventSubscriptionName: string;
  private _filter?: VtsiEventFilter;
  private _resumeToken: string;

  private _selector: SubscribeVtsiEventsRequest.SelectorCase =
    SubscribeVtsiEventsRequest.SelectorCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubscribeVtsiEventsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SubscribeVtsiEventsRequest.AsObject>) {
    _value = _value || {};
    this.vtsiProjectName = _value.vtsiProjectName;
    this.eventSubscriptionName = _value.eventSubscriptionName;
    this.filter = _value.filter
      ? new VtsiEventFilter(_value.filter)
      : undefined;
    this.resumeToken = _value.resumeToken;
    SubscribeVtsiEventsRequest.refineValues(this);
  }
  get vtsiProjectName(): string {
    return this._vtsiProjectName;
  }
  set vtsiProjectName(value: string) {
    this._vtsiProjectName = value;
  }
  get eventSubscriptionName(): string {
    return this._eventSubscriptionName;
  }
  set eventSubscriptionName(value: string) {
    if (value !== undefined && value !== null) {
      this._filter = undefined;
      this._selector =
        SubscribeVtsiEventsRequest.SelectorCase.eventSubscriptionName;
    }
    this._eventSubscriptionName = value;
  }
  get filter(): VtsiEventFilter | undefined {
    return this._filter;
  }
  set filter(value: VtsiEventFilter | undefined) {
    if (value !== undefined && value !== null) {
      this._eventSubscriptionName = undefined;
      this._selector = SubscribeVtsiEventsRequest.SelectorCase.filter;
    }
    this._filter = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get selector() {
    return this._selector;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SubscribeVtsiEventsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubscribeVtsiEventsRequest.AsObject {
    return {
      vtsiProjectName: this.vtsiProjectName,
      eventSubscriptionName: this.eventSubscriptionName,
      filter: this.filter ? this.filter.toObject() : undefined,
      resumeToken: this.resumeToken
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): SubscribeVtsiEventsRequest.AsProtobufJSON {
    return {
      vtsiProjectName: this.vtsiProjectName,
      eventSubscriptionName:
        this.eventSubscriptionName === null ||
        this.eventSubscriptionName === undefined
          ? null
          : this.eventSubscriptionName,
      filter: this.filter ? this.filter.toProtobufJSON(options) : null,
      resumeToken: this.resumeToken
    };
  }
}
export module SubscribeVtsiEventsRequest {
  /**
   * Standard JavaScript object representation for SubscribeVtsiEventsRequest
   */
  export interface AsObject {
    vtsiProjectName: string;
    eventSubscriptionName: string;
    filter?: VtsiEventFilter.AsObject;
    resumeToken: string;
  }

  /**
   * Protobuf JSON representation for SubscribeVtsiEventsRequest
   */
  export interface AsProtobufJSON {
    vtsiProjectName: string;
    eventSubscriptionName: string | null;
    filter: VtsiEventFilter.AsProtobufJSON | null;
    resumeToken: string;
  }
  export enum SelectorCase {
    none = 0,
    eventSubscriptionName = 1,
    filter = 2
  }
}

/**
 * Message implementation for ondewo.vtsi.SubscribeVtsiEventsResponse
 */
export class SubscribeVtsiEventsResponse implements GrpcMessage {
  static id = 'ondewo.vtsi.SubscribeVtsiEventsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubscribeVtsiEventsResponse();
    SubscribeVtsiEventsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubscribeVtsiEventsResponse) {
    _instance.events = _instance.events || [];
    _instance.resumeToken = _instance.resumeToken || '';
    _instance.droppedEventCount = _instance.droppedEventCount || '0';
    _instance.endReason = _instance.endReason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubscribeVtsiEventsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new VtsiEventMessage();
          _reader.readMessage(
            messageInitializer1,
            VtsiEventMessage.deserializeBinaryFromReader
          );
          (_instance.events = _instance.events || []).push(messageInitializer1);
          break;
        case 2:
          _instance.resumeToken = _reader.readString();
          break;
        case 3:
          _instance.droppedEventCount = _reader.readInt64String();
          break;
        case 4:
          _instance.endReason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SubscribeVtsiEventsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubscribeVtsiEventsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.events && _instance.events.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.events as any,
        VtsiEventMessage.serializeBinaryToWriter
      );
    }
    if (_instance.resumeToken) {
      _writer.writeString(2, _instance.resumeToken);
    }
    if (_instance.droppedEventCount) {
      _writer.writeInt64String(3, _instance.droppedEventCount);
    }
    if (_instance.endReason) {
      _writer.writeString(4, _instance.endReason);
    }
  }

  private _events?: VtsiEventMessage[];
  private _resumeToken: string;
  private _droppedEventCount: string;
  private _endReason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubscribeVtsiEventsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SubscribeVtsiEventsResponse.AsObject>) {
    _value = _value || {};
    this.events = (_value.events || []).map(m => new VtsiEventMessage(m));
    this.resumeToken = _value.resumeToken;
    this.droppedEventCount = _value.droppedEventCount;
    this.endReason = _value.endReason;
    SubscribeVtsiEventsResponse.refineValues(this);
  }
  get events(): VtsiEventMessage[] | undefined {
    return this._events;
  }
  set events(value: VtsiEventMessage[] | undefined) {
    this._events = value;
  }
  get resumeToken(): string {
    return this._resumeToken;
  }
  set resumeToken(value: string) {
    this._resumeToken = value;
  }
  get droppedEventCount(): string {
    return this._droppedEventCount;
  }
  set droppedEventCount(value: string) {
    this._droppedEventCount = value;
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
    SubscribeVtsiEventsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubscribeVtsiEventsResponse.AsObject {
    return {
      events: (this.events || []).map(m => m.toObject()),
      resumeToken: this.resumeToken,
      droppedEventCount: this.droppedEventCount,
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
  ): SubscribeVtsiEventsResponse.AsProtobufJSON {
    return {
      events: (this.events || []).map(m => m.toProtobufJSON(options)),
      resumeToken: this.resumeToken,
      droppedEventCount: this.droppedEventCount,
      endReason: this.endReason
    };
  }
}
export module SubscribeVtsiEventsResponse {
  /**
   * Standard JavaScript object representation for SubscribeVtsiEventsResponse
   */
  export interface AsObject {
    events?: VtsiEventMessage.AsObject[];
    resumeToken: string;
    droppedEventCount: string;
    endReason: string;
  }

  /**
   * Protobuf JSON representation for SubscribeVtsiEventsResponse
   */
  export interface AsProtobufJSON {
    events: VtsiEventMessage.AsProtobufJSON[] | null;
    resumeToken: string;
    droppedEventCount: string;
    endReason: string;
  }
}
