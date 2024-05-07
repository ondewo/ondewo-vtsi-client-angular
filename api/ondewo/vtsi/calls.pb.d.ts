import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoS2t011 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s012 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoSip013 from '../../ondewo/sip/sip.pb';
export declare enum CallView {
    MINIMUM = 0,
    SHALLOW = 1,
    FULL = 2
}
export declare enum CallStatus {
    CALL_STATUS_UNSPECIFIED = 0,
    CALL_STATUS_ACTIVE = 1,
    CALL_STATUS_INACTIVE = 2
}
export declare enum CallType {
    BOTH = 0,
    LISTENER = 1,
    CALLER = 2,
    SCHEDULED_CALLER = 3
}
/**
 * Message implementation for ondewo.vtsi.BaseServiceConfig
 */
export declare class BaseServiceConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BaseServiceConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BaseServiceConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BaseServiceConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BaseServiceConfig, _writer: BinaryWriter): void;
    private _host;
    private _port;
    private _grpcCert;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BaseServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<BaseServiceConfig.AsObject>);
    get host(): string;
    set host(value: string);
    get port(): number;
    set port(value: number);
    get grpcCert(): string;
    set grpcCert(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BaseServiceConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BaseServiceConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BaseServiceConfig.AsProtobufJSON;
}
export declare module BaseServiceConfig {
    /**
     * Standard JavaScript object representation for BaseServiceConfig
     */
    interface AsObject {
        host: string;
        port: number;
        grpcCert: string;
    }
    /**
     * Protobuf JSON representation for BaseServiceConfig
     */
    interface AsProtobufJSON {
        host: string;
        port: number;
        grpcCert: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.Credentials
 */
export declare class Credentials implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Credentials;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Credentials): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Credentials, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Credentials, _writer: BinaryWriter): void;
    private _accountName;
    private _password;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Credentials to deeply clone from
     */
    constructor(_value?: RecursivePartial<Credentials.AsObject>);
    get accountName(): string;
    set accountName(value: string);
    get password(): string;
    set password(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Credentials.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Credentials.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Credentials.AsProtobufJSON;
}
export declare module Credentials {
    /**
     * Standard JavaScript object representation for Credentials
     */
    interface AsObject {
        accountName: string;
        password: string;
    }
    /**
     * Protobuf JSON representation for Credentials
     */
    interface AsProtobufJSON {
        accountName: string;
        password: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.NluVtsiConfig
 */
export declare class NluVtsiConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NluVtsiConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NluVtsiConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NluVtsiConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NluVtsiConfig, _writer: BinaryWriter): void;
    private _nluBaseConfig?;
    private _credentials?;
    private _authToken;
    private _agentName;
    private _languageCode;
    private _initialIntent;
    private _contexts?;
    private _httpBasicAuthToken;
    private _platform;
    private _authentication;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NluVtsiConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<NluVtsiConfig.AsObject>);
    get nluBaseConfig(): BaseServiceConfig | undefined;
    set nluBaseConfig(value: BaseServiceConfig | undefined);
    get credentials(): Credentials | undefined;
    set credentials(value: Credentials | undefined);
    get authToken(): string;
    set authToken(value: string);
    get agentName(): string;
    set agentName(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get initialIntent(): string;
    set initialIntent(value: string);
    get contexts(): ondewoNlu006.Context[] | undefined;
    set contexts(value: ondewoNlu006.Context[] | undefined);
    get httpBasicAuthToken(): string;
    set httpBasicAuthToken(value: string);
    get platform(): ondewoNlu010.Intent.Message.Platform;
    set platform(value: ondewoNlu010.Intent.Message.Platform);
    get authentication(): NluVtsiConfig.AuthenticationCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NluVtsiConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NluVtsiConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NluVtsiConfig.AsProtobufJSON;
}
export declare module NluVtsiConfig {
    /**
     * Standard JavaScript object representation for NluVtsiConfig
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
    enum AuthenticationCase {
        none = 0,
        credentials = 1,
        authToken = 2
    }
}
/**
 * Message implementation for ondewo.vtsi.T2sVtsiConfig
 */
export declare class T2sVtsiConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sVtsiConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sVtsiConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sVtsiConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sVtsiConfig, _writer: BinaryWriter): void;
    private _t2sBaseConfig?;
    private _t2sRequestConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sVtsiConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sVtsiConfig.AsObject>);
    get t2sBaseConfig(): BaseServiceConfig | undefined;
    set t2sBaseConfig(value: BaseServiceConfig | undefined);
    get t2sRequestConfig(): ondewoT2s012.RequestConfig | undefined;
    set t2sRequestConfig(value: ondewoT2s012.RequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sVtsiConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sVtsiConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sVtsiConfig.AsProtobufJSON;
}
export declare module T2sVtsiConfig {
    /**
     * Standard JavaScript object representation for T2sVtsiConfig
     */
    interface AsObject {
        t2sBaseConfig?: BaseServiceConfig.AsObject;
        t2sRequestConfig?: ondewoT2s012.RequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for T2sVtsiConfig
     */
    interface AsProtobufJSON {
        t2sBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
        t2sRequestConfig: ondewoT2s012.RequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.S2tVtsiConfig
 */
export declare class S2tVtsiConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tVtsiConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tVtsiConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tVtsiConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tVtsiConfig, _writer: BinaryWriter): void;
    private _s2tBaseConfig?;
    private _s2tTranscribeRequestConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tVtsiConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tVtsiConfig.AsObject>);
    get s2tBaseConfig(): BaseServiceConfig | undefined;
    set s2tBaseConfig(value: BaseServiceConfig | undefined);
    get s2tTranscribeRequestConfig(): ondewoS2t011.TranscribeRequestConfig | undefined;
    set s2tTranscribeRequestConfig(value: ondewoS2t011.TranscribeRequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tVtsiConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tVtsiConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tVtsiConfig.AsProtobufJSON;
}
export declare module S2tVtsiConfig {
    /**
     * Standard JavaScript object representation for S2tVtsiConfig
     */
    interface AsObject {
        s2tBaseConfig?: BaseServiceConfig.AsObject;
        s2tTranscribeRequestConfig?: ondewoS2t011.TranscribeRequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for S2tVtsiConfig
     */
    interface AsProtobufJSON {
        s2tBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
        s2tTranscribeRequestConfig: ondewoS2t011.TranscribeRequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.AsteriskConfig
 */
export declare class AsteriskConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AsteriskConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AsteriskConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AsteriskConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AsteriskConfig, _writer: BinaryWriter): void;
    private _asteriskBaseConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AsteriskConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<AsteriskConfig.AsObject>);
    get asteriskBaseConfig(): BaseServiceConfig | undefined;
    set asteriskBaseConfig(value: BaseServiceConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AsteriskConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AsteriskConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AsteriskConfig.AsProtobufJSON;
}
export declare module AsteriskConfig {
    /**
     * Standard JavaScript object representation for AsteriskConfig
     */
    interface AsObject {
        asteriskBaseConfig?: BaseServiceConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for AsteriskConfig
     */
    interface AsProtobufJSON {
        asteriskBaseConfig: BaseServiceConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.CommonServicesConfig
 */
export declare class CommonServicesConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CommonServicesConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CommonServicesConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CommonServicesConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CommonServicesConfig, _writer: BinaryWriter): void;
    private _s2tVtsiConfig?;
    private _nluVtsiConfig?;
    private _t2sVtsiConfig?;
    private _csiVtsiConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CommonServicesConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<CommonServicesConfig.AsObject>);
    get s2tVtsiConfig(): S2tVtsiConfig | undefined;
    set s2tVtsiConfig(value: S2tVtsiConfig | undefined);
    get nluVtsiConfig(): NluVtsiConfig | undefined;
    set nluVtsiConfig(value: NluVtsiConfig | undefined);
    get t2sVtsiConfig(): T2sVtsiConfig | undefined;
    set t2sVtsiConfig(value: T2sVtsiConfig | undefined);
    get csiVtsiConfig(): CsiVtsiConfig | undefined;
    set csiVtsiConfig(value: CsiVtsiConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CommonServicesConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CommonServicesConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CommonServicesConfig.AsProtobufJSON;
}
export declare module CommonServicesConfig {
    /**
     * Standard JavaScript object representation for CommonServicesConfig
     */
    interface AsObject {
        s2tVtsiConfig?: S2tVtsiConfig.AsObject;
        nluVtsiConfig?: NluVtsiConfig.AsObject;
        t2sVtsiConfig?: T2sVtsiConfig.AsObject;
        csiVtsiConfig?: CsiVtsiConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for CommonServicesConfig
     */
    interface AsProtobufJSON {
        s2tVtsiConfig: S2tVtsiConfig.AsProtobufJSON | null;
        nluVtsiConfig: NluVtsiConfig.AsProtobufJSON | null;
        t2sVtsiConfig: T2sVtsiConfig.AsProtobufJSON | null;
        csiVtsiConfig: CsiVtsiConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.SipBaseConfig
 */
export declare class SipBaseConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SipBaseConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SipBaseConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SipBaseConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SipBaseConfig, _writer: BinaryWriter): void;
    private _sipSimVersion;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SipBaseConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<SipBaseConfig.AsObject>);
    get sipSimVersion(): string;
    set sipSimVersion(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SipBaseConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SipBaseConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SipBaseConfig.AsProtobufJSON;
}
export declare module SipBaseConfig {
    /**
     * Standard JavaScript object representation for SipBaseConfig
     */
    interface AsObject {
        sipSimVersion: string;
    }
    /**
     * Protobuf JSON representation for SipBaseConfig
     */
    interface AsProtobufJSON {
        sipSimVersion: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.SipCallerConfig
 */
export declare class SipCallerConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SipCallerConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SipCallerConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SipCallerConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SipCallerConfig, _writer: BinaryWriter): void;
    private _sipBaseConfig?;
    private _calleeId;
    private _sipHeaders;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SipCallerConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<SipCallerConfig.AsObject>);
    get sipBaseConfig(): SipBaseConfig | undefined;
    set sipBaseConfig(value: SipBaseConfig | undefined);
    get calleeId(): string;
    set calleeId(value: string);
    get sipHeaders(): {
        [prop: string]: string;
    };
    set sipHeaders(value: {
        [prop: string]: string;
    });
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SipCallerConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SipCallerConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SipCallerConfig.AsProtobufJSON;
}
export declare module SipCallerConfig {
    /**
     * Standard JavaScript object representation for SipCallerConfig
     */
    interface AsObject {
        sipBaseConfig?: SipBaseConfig.AsObject;
        calleeId: string;
        sipHeaders: {
            [prop: string]: string;
        };
    }
    /**
     * Protobuf JSON representation for SipCallerConfig
     */
    interface AsProtobufJSON {
        sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
        calleeId: string;
        sipHeaders: {
            [prop: string]: string;
        };
    }
    /**
     * Message implementation for ondewo.vtsi.SipCallerConfig.SipHeadersEntry
     */
    class SipHeadersEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): SipHeadersEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: SipHeadersEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: SipHeadersEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: SipHeadersEntry, _writer: BinaryWriter): void;
        private _key;
        private _value;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SipHeadersEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<SipHeadersEntry.AsObject>);
        get key(): string;
        set key(value: string);
        get value(): string;
        set value(value: string);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): SipHeadersEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): SipHeadersEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): SipHeadersEntry.AsProtobufJSON;
    }
    module SipHeadersEntry {
        /**
         * Standard JavaScript object representation for SipHeadersEntry
         */
        interface AsObject {
            key: string;
            value: string;
        }
        /**
         * Protobuf JSON representation for SipHeadersEntry
         */
        interface AsProtobufJSON {
            key: string;
            value: string;
        }
    }
}
/**
 * Message implementation for ondewo.vtsi.CsiVtsiConfig
 */
export declare class CsiVtsiConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CsiVtsiConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CsiVtsiConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CsiVtsiConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CsiVtsiConfig, _writer: BinaryWriter): void;
    private _s2tVtsiCallbacks?;
    private _nluVtsiCallbacks?;
    private _t2sVtsiCallbacks?;
    private _audioObjectStoreConfig?;
    private _messageBrokerConfig?;
    private _activateControlMessages;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CsiVtsiConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<CsiVtsiConfig.AsObject>);
    get s2tVtsiCallbacks(): S2tVtsiCallbacks | undefined;
    set s2tVtsiCallbacks(value: S2tVtsiCallbacks | undefined);
    get nluVtsiCallbacks(): NluVtsiCallbacks | undefined;
    set nluVtsiCallbacks(value: NluVtsiCallbacks | undefined);
    get t2sVtsiCallbacks(): T2sVtsiCallbacks | undefined;
    set t2sVtsiCallbacks(value: T2sVtsiCallbacks | undefined);
    get audioObjectStoreConfig(): AudioObjectStorageConfig | undefined;
    set audioObjectStoreConfig(value: AudioObjectStorageConfig | undefined);
    get messageBrokerConfig(): MessageBrokerConfig | undefined;
    set messageBrokerConfig(value: MessageBrokerConfig | undefined);
    get activateControlMessages(): boolean;
    set activateControlMessages(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CsiVtsiConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CsiVtsiConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CsiVtsiConfig.AsProtobufJSON;
}
export declare module CsiVtsiConfig {
    /**
     * Standard JavaScript object representation for CsiVtsiConfig
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
export declare class AudioObjectStorageConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AudioObjectStorageConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AudioObjectStorageConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AudioObjectStorageConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AudioObjectStorageConfig, _writer: BinaryWriter): void;
    private _activateAudioObjectStorage;
    private _audioObjectStorageServicesActivationConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AudioObjectStorageConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<AudioObjectStorageConfig.AsObject>);
    get activateAudioObjectStorage(): boolean;
    set activateAudioObjectStorage(value: boolean);
    get audioObjectStorageServicesActivationConfig(): AudioObjectStorageServicesActivationConfig | undefined;
    set audioObjectStorageServicesActivationConfig(value: AudioObjectStorageServicesActivationConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AudioObjectStorageConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AudioObjectStorageConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AudioObjectStorageConfig.AsProtobufJSON;
}
export declare module AudioObjectStorageConfig {
    /**
     * Standard JavaScript object representation for AudioObjectStorageConfig
     */
    interface AsObject {
        activateAudioObjectStorage: boolean;
        audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for AudioObjectStorageConfig
     */
    interface AsProtobufJSON {
        activateAudioObjectStorage: boolean;
        audioObjectStorageServicesActivationConfig: AudioObjectStorageServicesActivationConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.AudioObjectStorageServicesActivationConfig
 */
export declare class AudioObjectStorageServicesActivationConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AudioObjectStorageServicesActivationConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AudioObjectStorageServicesActivationConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AudioObjectStorageServicesActivationConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AudioObjectStorageServicesActivationConfig, _writer: BinaryWriter): void;
    private _activateS2t;
    private _activateT2s;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AudioObjectStorageServicesActivationConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<AudioObjectStorageServicesActivationConfig.AsObject>);
    get activateS2t(): boolean;
    set activateS2t(value: boolean);
    get activateT2s(): boolean;
    set activateT2s(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AudioObjectStorageServicesActivationConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AudioObjectStorageServicesActivationConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AudioObjectStorageServicesActivationConfig.AsProtobufJSON;
}
export declare module AudioObjectStorageServicesActivationConfig {
    /**
     * Standard JavaScript object representation for AudioObjectStorageServicesActivationConfig
     */
    interface AsObject {
        activateS2t: boolean;
        activateT2s: boolean;
    }
    /**
     * Protobuf JSON representation for AudioObjectStorageServicesActivationConfig
     */
    interface AsProtobufJSON {
        activateS2t: boolean;
        activateT2s: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.MessageBrokerConfig
 */
export declare class MessageBrokerConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageBrokerConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageBrokerConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageBrokerConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageBrokerConfig, _writer: BinaryWriter): void;
    private _activateMessageBroker;
    private _messageBrokerServicesActivationConfig?;
    private _rabbitMqConfig?;
    private _messageBrokerConfig;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageBrokerConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageBrokerConfig.AsObject>);
    get activateMessageBroker(): boolean;
    set activateMessageBroker(value: boolean);
    get messageBrokerServicesActivationConfig(): MessageBrokerServicesActivationConfig | undefined;
    set messageBrokerServicesActivationConfig(value: MessageBrokerServicesActivationConfig | undefined);
    get rabbitMqConfig(): RabbitMqConfig | undefined;
    set rabbitMqConfig(value: RabbitMqConfig | undefined);
    get messageBrokerConfig(): MessageBrokerConfig.MessageBrokerConfigCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageBrokerConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageBrokerConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageBrokerConfig.AsProtobufJSON;
}
export declare module MessageBrokerConfig {
    /**
     * Standard JavaScript object representation for MessageBrokerConfig
     */
    interface AsObject {
        activateMessageBroker: boolean;
        messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject;
        rabbitMqConfig?: RabbitMqConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for MessageBrokerConfig
     */
    interface AsProtobufJSON {
        activateMessageBroker: boolean;
        messageBrokerServicesActivationConfig: MessageBrokerServicesActivationConfig.AsProtobufJSON | null;
        rabbitMqConfig: RabbitMqConfig.AsProtobufJSON | null;
    }
    enum MessageBrokerConfigCase {
        none = 0,
        rabbitMqConfig = 1
    }
}
/**
 * Message implementation for ondewo.vtsi.MessageBrokerServicesActivationConfig
 */
export declare class MessageBrokerServicesActivationConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MessageBrokerServicesActivationConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MessageBrokerServicesActivationConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MessageBrokerServicesActivationConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MessageBrokerServicesActivationConfig, _writer: BinaryWriter): void;
    private _activateS2t;
    private _activateNlu;
    private _activateT2s;
    private _activateSip;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageBrokerServicesActivationConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageBrokerServicesActivationConfig.AsObject>);
    get activateS2t(): boolean;
    set activateS2t(value: boolean);
    get activateNlu(): boolean;
    set activateNlu(value: boolean);
    get activateT2s(): boolean;
    set activateT2s(value: boolean);
    get activateSip(): boolean;
    set activateSip(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MessageBrokerServicesActivationConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MessageBrokerServicesActivationConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MessageBrokerServicesActivationConfig.AsProtobufJSON;
}
export declare module MessageBrokerServicesActivationConfig {
    /**
     * Standard JavaScript object representation for MessageBrokerServicesActivationConfig
     */
    interface AsObject {
        activateS2t: boolean;
        activateNlu: boolean;
        activateT2s: boolean;
        activateSip: boolean;
    }
    /**
     * Protobuf JSON representation for MessageBrokerServicesActivationConfig
     */
    interface AsProtobufJSON {
        activateS2t: boolean;
        activateNlu: boolean;
        activateT2s: boolean;
        activateSip: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.RabbitMqConfig
 */
export declare class RabbitMqConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RabbitMqConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RabbitMqConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RabbitMqConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RabbitMqConfig, _writer: BinaryWriter): void;
    private _host;
    private _port;
    private _port2;
    private _user;
    private _password;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RabbitMqConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RabbitMqConfig.AsObject>);
    get host(): string;
    set host(value: string);
    get port(): number;
    set port(value: number);
    get port2(): number;
    set port2(value: number);
    get user(): string;
    set user(value: string);
    get password(): string;
    set password(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RabbitMqConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RabbitMqConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RabbitMqConfig.AsProtobufJSON;
}
export declare module RabbitMqConfig {
    /**
     * Standard JavaScript object representation for RabbitMqConfig
     */
    interface AsObject {
        host: string;
        port: number;
        port2: number;
        user: string;
        password: string;
    }
    /**
     * Protobuf JSON representation for RabbitMqConfig
     */
    interface AsProtobufJSON {
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
export declare class S2tVtsiCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tVtsiCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tVtsiCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tVtsiCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tVtsiCallbacks, _writer: BinaryWriter): void;
    private _preS2tCallbacks;
    private _postS2tCallbacks;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tVtsiCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tVtsiCallbacks.AsObject>);
    get preS2tCallbacks(): string[];
    set preS2tCallbacks(value: string[]);
    get postS2tCallbacks(): string[];
    set postS2tCallbacks(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tVtsiCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tVtsiCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tVtsiCallbacks.AsProtobufJSON;
}
export declare module S2tVtsiCallbacks {
    /**
     * Standard JavaScript object representation for S2tVtsiCallbacks
     */
    interface AsObject {
        preS2tCallbacks: string[];
        postS2tCallbacks: string[];
    }
    /**
     * Protobuf JSON representation for S2tVtsiCallbacks
     */
    interface AsProtobufJSON {
        preS2tCallbacks: string[];
        postS2tCallbacks: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.NluVtsiCallbacks
 */
export declare class NluVtsiCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NluVtsiCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NluVtsiCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NluVtsiCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NluVtsiCallbacks, _writer: BinaryWriter): void;
    private _preNluCallbacks;
    private _postNluCallbacks;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NluVtsiCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<NluVtsiCallbacks.AsObject>);
    get preNluCallbacks(): string[];
    set preNluCallbacks(value: string[]);
    get postNluCallbacks(): string[];
    set postNluCallbacks(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NluVtsiCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NluVtsiCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NluVtsiCallbacks.AsProtobufJSON;
}
export declare module NluVtsiCallbacks {
    /**
     * Standard JavaScript object representation for NluVtsiCallbacks
     */
    interface AsObject {
        preNluCallbacks: string[];
        postNluCallbacks: string[];
    }
    /**
     * Protobuf JSON representation for NluVtsiCallbacks
     */
    interface AsProtobufJSON {
        preNluCallbacks: string[];
        postNluCallbacks: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.T2sVtsiCallbacks
 */
export declare class T2sVtsiCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sVtsiCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sVtsiCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sVtsiCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sVtsiCallbacks, _writer: BinaryWriter): void;
    private _preT2sCallbacks;
    private _postT2sCallbacks;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sVtsiCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sVtsiCallbacks.AsObject>);
    get preT2sCallbacks(): string[];
    set preT2sCallbacks(value: string[]);
    get postT2sCallbacks(): string[];
    set postT2sCallbacks(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sVtsiCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sVtsiCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sVtsiCallbacks.AsProtobufJSON;
}
export declare module T2sVtsiCallbacks {
    /**
     * Standard JavaScript object representation for T2sVtsiCallbacks
     */
    interface AsObject {
        preT2sCallbacks: string[];
        postT2sCallbacks: string[];
    }
    /**
     * Protobuf JSON representation for T2sVtsiCallbacks
     */
    interface AsProtobufJSON {
        preT2sCallbacks: string[];
        postT2sCallbacks: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.Listener
 */
export declare class Listener implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Listener;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Listener): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Listener, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Listener, _writer: BinaryWriter): void;
    private _name;
    private _callName;
    private _sipBaseConfig?;
    private _commonServicesConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Listener to deeply clone from
     */
    constructor(_value?: RecursivePartial<Listener.AsObject>);
    get name(): string;
    set name(value: string);
    get callName(): string;
    set callName(value: string);
    get sipBaseConfig(): SipBaseConfig | undefined;
    set sipBaseConfig(value: SipBaseConfig | undefined);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Listener.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Listener.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Listener.AsProtobufJSON;
}
export declare module Listener {
    /**
     * Standard JavaScript object representation for Listener
     */
    interface AsObject {
        name: string;
        callName: string;
        sipBaseConfig?: SipBaseConfig.AsObject;
        commonServicesConfig?: CommonServicesConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for Listener
     */
    interface AsProtobufJSON {
        name: string;
        callName: string;
        sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
        commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.Caller
 */
export declare class Caller implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Caller;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Caller): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Caller, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Caller, _writer: BinaryWriter): void;
    private _name;
    private _callName;
    private _sipCallerConfig?;
    private _commonServicesConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Caller to deeply clone from
     */
    constructor(_value?: RecursivePartial<Caller.AsObject>);
    get name(): string;
    set name(value: string);
    get callName(): string;
    set callName(value: string);
    get sipCallerConfig(): SipCallerConfig | undefined;
    set sipCallerConfig(value: SipCallerConfig | undefined);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Caller.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Caller.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Caller.AsProtobufJSON;
}
export declare module Caller {
    /**
     * Standard JavaScript object representation for Caller
     */
    interface AsObject {
        name: string;
        callName: string;
        sipCallerConfig?: SipCallerConfig.AsObject;
        commonServicesConfig?: CommonServicesConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for Caller
     */
    interface AsProtobufJSON {
        name: string;
        callName: string;
        sipCallerConfig: SipCallerConfig.AsProtobufJSON | null;
        commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartListenerRequest
 */
export declare class StartListenerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartListenerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartListenerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartListenerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartListenerRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _sipBaseConfig?;
    private _commonServicesConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartListenerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartListenerRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get sipBaseConfig(): SipBaseConfig | undefined;
    set sipBaseConfig(value: SipBaseConfig | undefined);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartListenerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartListenerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartListenerRequest.AsProtobufJSON;
}
export declare module StartListenerRequest {
    /**
     * Standard JavaScript object representation for StartListenerRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        sipBaseConfig?: SipBaseConfig.AsObject;
        commonServicesConfig?: CommonServicesConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for StartListenerRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        sipBaseConfig: SipBaseConfig.AsProtobufJSON | null;
        commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartListenerResponse
 */
export declare class StartListenerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartListenerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartListenerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartListenerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartListenerResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _listener?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartListenerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartListenerResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get listener(): Listener | undefined;
    set listener(value: Listener | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartListenerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartListenerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartListenerResponse.AsProtobufJSON;
}
export declare module StartListenerResponse {
    /**
     * Standard JavaScript object representation for StartListenerResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        listener?: Listener.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StartListenerResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        listener: Listener.AsProtobufJSON | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartListenersRequest
 */
export declare class StartListenersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartListenersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartListenersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartListenersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartListenersRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _listenerRequests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartListenersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartListenersRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get listenerRequests(): StartListenerRequest[] | undefined;
    set listenerRequests(value: StartListenerRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartListenersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartListenersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartListenersRequest.AsProtobufJSON;
}
export declare module StartListenersRequest {
    /**
     * Standard JavaScript object representation for StartListenersRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        listenerRequests?: StartListenerRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for StartListenersRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        listenerRequests: StartListenerRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartListenersResponse
 */
export declare class StartListenersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartListenersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartListenersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartListenersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartListenersResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _listenerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartListenersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartListenersResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get listenerResponses(): StartListenerResponse[] | undefined;
    set listenerResponses(value: StartListenerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartListenersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartListenersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartListenersResponse.AsProtobufJSON;
}
export declare module StartListenersResponse {
    /**
     * Standard JavaScript object representation for StartListenersResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        listenerResponses?: StartListenerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StartListenersResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        listenerResponses: StartListenerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallerRequest
 */
export declare class StartCallerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallerRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _sipCallerConfig?;
    private _commonServicesConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallerRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get sipCallerConfig(): SipCallerConfig | undefined;
    set sipCallerConfig(value: SipCallerConfig | undefined);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallerRequest.AsProtobufJSON;
}
export declare module StartCallerRequest {
    /**
     * Standard JavaScript object representation for StartCallerRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        sipCallerConfig?: SipCallerConfig.AsObject;
        commonServicesConfig?: CommonServicesConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for StartCallerRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        sipCallerConfig: SipCallerConfig.AsProtobufJSON | null;
        commonServicesConfig: CommonServicesConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallerResponse
 */
export declare class StartCallerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallerResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _caller?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallerResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get caller(): Caller | undefined;
    set caller(value: Caller | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallerResponse.AsProtobufJSON;
}
export declare module StartCallerResponse {
    /**
     * Standard JavaScript object representation for StartCallerResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        caller?: Caller.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StartCallerResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        caller: Caller.AsProtobufJSON | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallersRequest
 */
export declare class StartCallersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallersRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callerRequests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallersRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callerRequests(): StartCallerRequest[] | undefined;
    set callerRequests(value: StartCallerRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallersRequest.AsProtobufJSON;
}
export declare module StartCallersRequest {
    /**
     * Standard JavaScript object representation for StartCallersRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callerRequests?: StartCallerRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for StartCallersRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callerRequests: StartCallerRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallersResponse
 */
export declare class StartCallersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallersResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallersResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callerResponses(): StartCallerResponse[] | undefined;
    set callerResponses(value: StartCallerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallersResponse.AsProtobufJSON;
}
export declare module StartCallersResponse {
    /**
     * Standard JavaScript object representation for StartCallersResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        callerResponses?: StartCallerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StartCallersResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callerResponses: StartCallerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ListCallersRequest
 */
export declare class ListCallersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCallersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCallersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCallersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCallersRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _pageToken;
    private _callView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCallersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCallersRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCallersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCallersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCallersRequest.AsProtobufJSON;
}
export declare module ListCallersRequest {
    /**
     * Standard JavaScript object representation for ListCallersRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        pageToken: string;
        callView: CallView;
    }
    /**
     * Protobuf JSON representation for ListCallersRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        pageToken: string;
        callView: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ListCallersResponse
 */
export declare class ListCallersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCallersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCallersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCallersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCallersResponse, _writer: BinaryWriter): void;
    private _callers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCallersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCallersResponse.AsObject>);
    get callers(): Caller[] | undefined;
    set callers(value: Caller[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCallersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCallersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCallersResponse.AsProtobufJSON;
}
export declare module ListCallersResponse {
    /**
     * Standard JavaScript object representation for ListCallersResponse
     */
    interface AsObject {
        callers?: Caller.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListCallersResponse
     */
    interface AsProtobufJSON {
        callers: Caller.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetCallerRequest
 */
export declare class GetCallerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallerRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _name;
    private _callView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallerRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get name(): string;
    set name(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCallerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallerRequest.AsProtobufJSON;
}
export declare module GetCallerRequest {
    /**
     * Standard JavaScript object representation for GetCallerRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        name: string;
        callView: CallView;
    }
    /**
     * Protobuf JSON representation for GetCallerRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        name: string;
        callView: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ListListenersRequest
 */
export declare class ListListenersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListListenersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListListenersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListListenersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListListenersRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _pageToken;
    private _callView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListListenersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListListenersRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListListenersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListListenersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListListenersRequest.AsProtobufJSON;
}
export declare module ListListenersRequest {
    /**
     * Standard JavaScript object representation for ListListenersRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        pageToken: string;
        callView: CallView;
    }
    /**
     * Protobuf JSON representation for ListListenersRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        pageToken: string;
        callView: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ListListenersResponse
 */
export declare class ListListenersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListListenersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListListenersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListListenersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListListenersResponse, _writer: BinaryWriter): void;
    private _listeners?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListListenersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListListenersResponse.AsObject>);
    get listeners(): Listener[] | undefined;
    set listeners(value: Listener[] | undefined);
    get nextPageToken(): string;
    set nextPageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListListenersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListListenersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListListenersResponse.AsProtobufJSON;
}
export declare module ListListenersResponse {
    /**
     * Standard JavaScript object representation for ListListenersResponse
     */
    interface AsObject {
        listeners?: Listener.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListListenersResponse
     */
    interface AsProtobufJSON {
        listeners: Listener.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetListenerRequest
 */
export declare class GetListenerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetListenerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetListenerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetListenerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetListenerRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _name;
    private _callView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetListenerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetListenerRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get name(): string;
    set name(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetListenerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetListenerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetListenerRequest.AsProtobufJSON;
}
export declare module GetListenerRequest {
    /**
     * Standard JavaScript object representation for GetListenerRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        name: string;
        callView: CallView;
    }
    /**
     * Protobuf JSON representation for GetListenerRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        name: string;
        callView: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopListenerRequest
 */
export declare class StopListenerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopListenerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopListenerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopListenerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopListenerRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopListenerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopListenerRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopListenerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopListenerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopListenerRequest.AsProtobufJSON;
}
export declare module StopListenerRequest {
    /**
     * Standard JavaScript object representation for StopListenerRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for StopListenerRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopListenerResponse
 */
export declare class StopListenerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopListenerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopListenerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopListenerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopListenerResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopListenerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopListenerResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopListenerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopListenerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopListenerResponse.AsProtobufJSON;
}
export declare module StopListenerResponse {
    /**
     * Standard JavaScript object representation for StopListenerResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopListenerResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopListenersRequest
 */
export declare class StopListenersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopListenersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopListenersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopListenersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopListenersRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopListenersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopListenersRequest.AsObject>);
    get names(): string[];
    set names(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopListenersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopListenersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopListenersRequest.AsProtobufJSON;
}
export declare module StopListenersRequest {
    /**
     * Standard JavaScript object representation for StopListenersRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for StopListenersRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.StopListenersResponse
 */
export declare class StopListenersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopListenersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopListenersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopListenersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopListenersResponse, _writer: BinaryWriter): void;
    private _stopListenerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopListenersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopListenersResponse.AsObject>);
    get stopListenerResponses(): StopListenerResponse[] | undefined;
    set stopListenerResponses(value: StopListenerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopListenersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopListenersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopListenersResponse.AsProtobufJSON;
}
export declare module StopListenersResponse {
    /**
     * Standard JavaScript object representation for StopListenersResponse
     */
    interface AsObject {
        stopListenerResponses?: StopListenerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopListenersResponse
     */
    interface AsProtobufJSON {
        stopListenerResponses: StopListenerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallerRequest
 */
export declare class StopCallerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallerRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallerRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallerRequest.AsProtobufJSON;
}
export declare module StopCallerRequest {
    /**
     * Standard JavaScript object representation for StopCallerRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for StopCallerRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallerResponse
 */
export declare class StopCallerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallerResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallerResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallerResponse.AsProtobufJSON;
}
export declare module StopCallerResponse {
    /**
     * Standard JavaScript object representation for StopCallerResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopCallerResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallersRequest
 */
export declare class StopCallersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallersRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallersRequest.AsObject>);
    get names(): string[];
    set names(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallersRequest.AsProtobufJSON;
}
export declare module StopCallersRequest {
    /**
     * Standard JavaScript object representation for StopCallersRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for StopCallersRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallersResponse
 */
export declare class StopCallersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallersResponse, _writer: BinaryWriter): void;
    private _stopCallerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallersResponse.AsObject>);
    get stopCallerResponses(): StopCallerResponse[] | undefined;
    set stopCallerResponses(value: StopCallerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallersResponse.AsProtobufJSON;
}
export declare module StopCallersResponse {
    /**
     * Standard JavaScript object representation for StopCallersResponse
     */
    interface AsObject {
        stopCallerResponses?: StopCallerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopCallersResponse
     */
    interface AsProtobufJSON {
        stopCallerResponses: StopCallerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteListenerRequest
 */
export declare class DeleteListenerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteListenerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteListenerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteListenerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteListenerRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteListenerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteListenerRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteListenerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteListenerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteListenerRequest.AsProtobufJSON;
}
export declare module DeleteListenerRequest {
    /**
     * Standard JavaScript object representation for DeleteListenerRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for DeleteListenerRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteListenerResponse
 */
export declare class DeleteListenerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteListenerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteListenerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteListenerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteListenerResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteListenerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteListenerResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteListenerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteListenerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteListenerResponse.AsProtobufJSON;
}
export declare module DeleteListenerResponse {
    /**
     * Standard JavaScript object representation for DeleteListenerResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for DeleteListenerResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteListenersRequest
 */
export declare class DeleteListenersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteListenersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteListenersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteListenersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteListenersRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteListenersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteListenersRequest.AsObject>);
    get names(): string[];
    set names(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteListenersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteListenersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteListenersRequest.AsProtobufJSON;
}
export declare module DeleteListenersRequest {
    /**
     * Standard JavaScript object representation for DeleteListenersRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for DeleteListenersRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteListenersResponse
 */
export declare class DeleteListenersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteListenersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteListenersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteListenersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteListenersResponse, _writer: BinaryWriter): void;
    private _deleteListenerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteListenersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteListenersResponse.AsObject>);
    get deleteListenerResponses(): DeleteListenerResponse[] | undefined;
    set deleteListenerResponses(value: DeleteListenerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteListenersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteListenersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteListenersResponse.AsProtobufJSON;
}
export declare module DeleteListenersResponse {
    /**
     * Standard JavaScript object representation for DeleteListenersResponse
     */
    interface AsObject {
        deleteListenerResponses?: DeleteListenerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for DeleteListenersResponse
     */
    interface AsProtobufJSON {
        deleteListenerResponses: DeleteListenerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteCallerRequest
 */
export declare class DeleteCallerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCallerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCallerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCallerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCallerRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCallerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCallerRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCallerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCallerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCallerRequest.AsProtobufJSON;
}
export declare module DeleteCallerRequest {
    /**
     * Standard JavaScript object representation for DeleteCallerRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for DeleteCallerRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteCallerResponse
 */
export declare class DeleteCallerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCallerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCallerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCallerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCallerResponse, _writer: BinaryWriter): void;
    private _name;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCallerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCallerResponse.AsObject>);
    get name(): string;
    set name(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCallerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCallerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCallerResponse.AsProtobufJSON;
}
export declare module DeleteCallerResponse {
    /**
     * Standard JavaScript object representation for DeleteCallerResponse
     */
    interface AsObject {
        name: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for DeleteCallerResponse
     */
    interface AsProtobufJSON {
        name: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteCallersRequest
 */
export declare class DeleteCallersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCallersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCallersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCallersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCallersRequest, _writer: BinaryWriter): void;
    private _names;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCallersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCallersRequest.AsObject>);
    get names(): string[];
    set names(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCallersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCallersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCallersRequest.AsProtobufJSON;
}
export declare module DeleteCallersRequest {
    /**
     * Standard JavaScript object representation for DeleteCallersRequest
     */
    interface AsObject {
        names: string[];
    }
    /**
     * Protobuf JSON representation for DeleteCallersRequest
     */
    interface AsProtobufJSON {
        names: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.DeleteCallersResponse
 */
export declare class DeleteCallersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteCallersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteCallersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteCallersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteCallersResponse, _writer: BinaryWriter): void;
    private _deleteCallerResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteCallersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteCallersResponse.AsObject>);
    get deleteCallerResponses(): DeleteCallerResponse[] | undefined;
    set deleteCallerResponses(value: DeleteCallerResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteCallersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteCallersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteCallersResponse.AsProtobufJSON;
}
export declare module DeleteCallersResponse {
    /**
     * Standard JavaScript object representation for DeleteCallersResponse
     */
    interface AsObject {
        deleteCallerResponses?: DeleteCallerResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for DeleteCallersResponse
     */
    interface AsProtobufJSON {
        deleteCallerResponses: DeleteCallerResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartScheduledCallerRequest
 */
export declare class StartScheduledCallerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartScheduledCallerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartScheduledCallerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartScheduledCallerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartScheduledCallerRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _request?;
    private _scheduledTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartScheduledCallerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartScheduledCallerRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get request(): StartCallerRequest | undefined;
    set request(value: StartCallerRequest | undefined);
    get scheduledTime(): googleProtobuf005.Timestamp | undefined;
    set scheduledTime(value: googleProtobuf005.Timestamp | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartScheduledCallerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartScheduledCallerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartScheduledCallerRequest.AsProtobufJSON;
}
export declare module StartScheduledCallerRequest {
    /**
     * Standard JavaScript object representation for StartScheduledCallerRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        request?: StartCallerRequest.AsObject;
        scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    }
    /**
     * Protobuf JSON representation for StartScheduledCallerRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        request: StartCallerRequest.AsProtobufJSON | null;
        scheduledTime: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartScheduledCallersRequest
 */
export declare class StartScheduledCallersRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartScheduledCallersRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartScheduledCallersRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartScheduledCallersRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartScheduledCallersRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _scheduledCallerRequests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartScheduledCallersRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartScheduledCallersRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get scheduledCallerRequests(): StartScheduledCallerRequest[] | undefined;
    set scheduledCallerRequests(value: StartScheduledCallerRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartScheduledCallersRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartScheduledCallersRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartScheduledCallersRequest.AsProtobufJSON;
}
export declare module StartScheduledCallersRequest {
    /**
     * Standard JavaScript object representation for StartScheduledCallersRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        scheduledCallerRequests?: StartScheduledCallerRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for StartScheduledCallersRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        scheduledCallerRequests: StartScheduledCallerRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartScheduledCallersResponse
 */
export declare class StartScheduledCallersResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartScheduledCallersResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartScheduledCallersResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartScheduledCallersResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartScheduledCallersResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _scheduledCallerResponses?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartScheduledCallersResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartScheduledCallersResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get scheduledCallerResponses(): StartScheduledCallerResponse[] | undefined;
    set scheduledCallerResponses(value: StartScheduledCallerResponse[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartScheduledCallersResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartScheduledCallersResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartScheduledCallersResponse.AsProtobufJSON;
}
export declare module StartScheduledCallersResponse {
    /**
     * Standard JavaScript object representation for StartScheduledCallersResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        scheduledCallerResponses?: StartScheduledCallerResponse.AsObject[];
    }
    /**
     * Protobuf JSON representation for StartScheduledCallersResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        scheduledCallerResponses: StartScheduledCallerResponse.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartScheduledCallerResponse
 */
export declare class StartScheduledCallerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartScheduledCallerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartScheduledCallerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartScheduledCallerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartScheduledCallerResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _scheduledCaller?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartScheduledCallerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartScheduledCallerResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get scheduledCaller(): ScheduledCaller | undefined;
    set scheduledCaller(value: ScheduledCaller | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartScheduledCallerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartScheduledCallerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartScheduledCallerResponse.AsProtobufJSON;
}
export declare module StartScheduledCallerResponse {
    /**
     * Standard JavaScript object representation for StartScheduledCallerResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        scheduledCaller?: ScheduledCaller.AsObject;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StartScheduledCallerResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        scheduledCaller: ScheduledCaller.AsProtobufJSON | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ScheduledCaller
 */
export declare class ScheduledCaller implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ScheduledCaller;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ScheduledCaller): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ScheduledCaller, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ScheduledCaller, _writer: BinaryWriter): void;
    private _name;
    private _callName;
    private _sipConfig?;
    private _commonServicesConfig?;
    private _scheduledTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ScheduledCaller to deeply clone from
     */
    constructor(_value?: RecursivePartial<ScheduledCaller.AsObject>);
    get name(): string;
    set name(value: string);
    get callName(): string;
    set callName(value: string);
    get sipConfig(): SipBaseConfig | undefined;
    set sipConfig(value: SipBaseConfig | undefined);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    get scheduledTime(): googleProtobuf005.Timestamp | undefined;
    set scheduledTime(value: googleProtobuf005.Timestamp | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ScheduledCaller.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ScheduledCaller.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ScheduledCaller.AsProtobufJSON;
}
export declare module ScheduledCaller {
    /**
     * Standard JavaScript object representation for ScheduledCaller
     */
    interface AsObject {
        name: string;
        callName: string;
        sipConfig?: SipBaseConfig.AsObject;
        commonServicesConfig?: CommonServicesConfig.AsObject;
        scheduledTime?: googleProtobuf005.Timestamp.AsObject;
    }
    /**
     * Protobuf JSON representation for ScheduledCaller
     */
    interface AsProtobufJSON {
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
export declare class StopCallRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callName(): string;
    set callName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallRequest.AsProtobufJSON;
}
export declare module StopCallRequest {
    /**
     * Standard JavaScript object representation for StopCallRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callName: string;
    }
    /**
     * Protobuf JSON representation for StopCallRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callName: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallResponse
 */
export declare class StopCallResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callName;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callName(): string;
    set callName(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallResponse.AsProtobufJSON;
}
export declare module StopCallResponse {
    /**
     * Standard JavaScript object representation for StopCallResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        callName: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopCallResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callName: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallsRequest
 */
export declare class StopCallsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallsRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callNames;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallsRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callNames(): string[];
    set callNames(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallsRequest.AsProtobufJSON;
}
export declare module StopCallsRequest {
    /**
     * Standard JavaScript object representation for StopCallsRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callNames: string[];
    }
    /**
     * Protobuf JSON representation for StopCallsRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callNames: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallsResponse
 */
export declare class StopCallsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallsResponse, _writer: BinaryWriter): void;
    private _stopCallResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallsResponse.AsObject>);
    get stopCallResponses(): StopCallResponse[] | undefined;
    set stopCallResponses(value: StopCallResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallsResponse.AsProtobufJSON;
}
export declare module StopCallsResponse {
    /**
     * Standard JavaScript object representation for StopCallsResponse
     */
    interface AsObject {
        stopCallResponses?: StopCallResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for StopCallsResponse
     */
    interface AsProtobufJSON {
        stopCallResponses: StopCallResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopAllCallsRequest
 */
export declare class StopAllCallsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopAllCallsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopAllCallsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopAllCallsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopAllCallsRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopAllCallsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopAllCallsRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopAllCallsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopAllCallsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopAllCallsRequest.AsProtobufJSON;
}
export declare module StopAllCallsRequest {
    /**
     * Standard JavaScript object representation for StopAllCallsRequest
     */
    interface AsObject {
        vtsiProjectName: string;
    }
    /**
     * Protobuf JSON representation for StopAllCallsRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.TransferCallRequest
 */
export declare class TransferCallRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferCallRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferCallRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferCallRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferCallRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callName;
    private _transferId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferCallRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferCallRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callName(): string;
    set callName(value: string);
    get transferId(): string;
    set transferId(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferCallRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferCallRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferCallRequest.AsProtobufJSON;
}
export declare module TransferCallRequest {
    /**
     * Standard JavaScript object representation for TransferCallRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callName: string;
        transferId: string;
    }
    /**
     * Protobuf JSON representation for TransferCallRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callName: string;
        transferId: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.TransferCallResponse
 */
export declare class TransferCallResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferCallResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferCallResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferCallResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferCallResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callName;
    private _transferId;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferCallResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferCallResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callName(): string;
    set callName(value: string);
    get transferId(): string;
    set transferId(value: string);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferCallResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferCallResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferCallResponse.AsProtobufJSON;
}
export declare module TransferCallResponse {
    /**
     * Standard JavaScript object representation for TransferCallResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        callName: string;
        transferId: string;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for TransferCallResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callName: string;
        transferId: string;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.TransferCallsRequest
 */
export declare class TransferCallsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferCallsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferCallsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferCallsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferCallsRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _transferCallRequests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferCallsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferCallsRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get transferCallRequests(): TransferCallRequest[] | undefined;
    set transferCallRequests(value: TransferCallRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferCallsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferCallsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferCallsRequest.AsProtobufJSON;
}
export declare module TransferCallsRequest {
    /**
     * Standard JavaScript object representation for TransferCallsRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        transferCallRequests?: TransferCallRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for TransferCallsRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        transferCallRequests: TransferCallRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.TransferCallsResponse
 */
export declare class TransferCallsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TransferCallsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TransferCallsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TransferCallsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TransferCallsResponse, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _transferCallResponses?;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferCallsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<TransferCallsResponse.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get transferCallResponses(): TransferCallResponse[] | undefined;
    set transferCallResponses(value: TransferCallResponse[] | undefined);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TransferCallsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TransferCallsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TransferCallsResponse.AsProtobufJSON;
}
export declare module TransferCallsResponse {
    /**
     * Standard JavaScript object representation for TransferCallsResponse
     */
    interface AsObject {
        vtsiProjectName: string;
        transferCallResponses?: TransferCallResponse.AsObject[];
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for TransferCallsResponse
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        transferCallResponses: TransferCallResponse.AsProtobufJSON[] | null;
        errorMessage: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetCallRequest
 */
export declare class GetCallRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callName;
    private _callView;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callName(): string;
    set callName(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCallRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallRequest.AsProtobufJSON;
}
export declare module GetCallRequest {
    /**
     * Standard JavaScript object representation for GetCallRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callName: string;
        callView: CallView;
    }
    /**
     * Protobuf JSON representation for GetCallRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callName: string;
        callView: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.Call
 */
export declare class Call implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Call;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Call): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Call, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Call, _writer: BinaryWriter): void;
    private _name;
    private _sipAccount;
    private _containerName;
    private _callType;
    private _phoneNumber;
    private _startTime?;
    private _endTime?;
    private _sipStatusType;
    private _sipStatus?;
    private _sipStatusHistory?;
    private _servicesStatuses?;
    private _active;
    private _vtsiProjectName;
    private _commonServicesConfig?;
    private _sipPort;
    private _csiPort;
    private _nluSessionName;
    private _platforms;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Call to deeply clone from
     */
    constructor(_value?: RecursivePartial<Call.AsObject>);
    get name(): string;
    set name(value: string);
    get sipAccount(): string;
    set sipAccount(value: string);
    get containerName(): string;
    set containerName(value: string);
    get callType(): CallType;
    set callType(value: CallType);
    get phoneNumber(): string;
    set phoneNumber(value: string);
    get startTime(): googleProtobuf005.Timestamp | undefined;
    set startTime(value: googleProtobuf005.Timestamp | undefined);
    get endTime(): googleProtobuf005.Timestamp | undefined;
    set endTime(value: googleProtobuf005.Timestamp | undefined);
    get sipStatusType(): ondewoSip013.SipStatus.StatusType;
    set sipStatusType(value: ondewoSip013.SipStatus.StatusType);
    get sipStatus(): ondewoSip013.SipStatus | undefined;
    set sipStatus(value: ondewoSip013.SipStatus | undefined);
    get sipStatusHistory(): ondewoSip013.SipStatusHistoryResponse | undefined;
    set sipStatusHistory(value: ondewoSip013.SipStatusHistoryResponse | undefined);
    get servicesStatuses(): AllServicesStatuses | undefined;
    set servicesStatuses(value: AllServicesStatuses | undefined);
    get active(): boolean;
    set active(value: boolean);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get commonServicesConfig(): CommonServicesConfig | undefined;
    set commonServicesConfig(value: CommonServicesConfig | undefined);
    get sipPort(): number;
    set sipPort(value: number);
    get csiPort(): number;
    set csiPort(value: number);
    get nluSessionName(): string;
    set nluSessionName(value: string);
    get platforms(): ondewoNlu010.Intent.Message.Platform;
    set platforms(value: ondewoNlu010.Intent.Message.Platform);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Call.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Call.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Call.AsProtobufJSON;
}
export declare module Call {
    /**
     * Standard JavaScript object representation for Call
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
export declare class CallFilter implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CallFilter;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CallFilter): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CallFilter, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CallFilter, _writer: BinaryWriter): void;
    private _callNames;
    private _nluSessionNames;
    private _sipAccounts;
    private _phoneNumbers;
    private _containerNames;
    private _sipPorts;
    private _csiPorts;
    private _callTypes;
    private _sipStatusTypes;
    private _callStatus;
    private _startTime?;
    private _endTime?;
    private _durationInSMin;
    private _durationInSMax;
    private _platforms;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CallFilter to deeply clone from
     */
    constructor(_value?: RecursivePartial<CallFilter.AsObject>);
    get callNames(): string[];
    set callNames(value: string[]);
    get nluSessionNames(): string[];
    set nluSessionNames(value: string[]);
    get sipAccounts(): string[];
    set sipAccounts(value: string[]);
    get phoneNumbers(): string[];
    set phoneNumbers(value: string[]);
    get containerNames(): string[];
    set containerNames(value: string[]);
    get sipPorts(): string[];
    set sipPorts(value: string[]);
    get csiPorts(): string[];
    set csiPorts(value: string[]);
    get callTypes(): CallType[];
    set callTypes(value: CallType[]);
    get sipStatusTypes(): ondewoSip013.SipStatus.StatusType[];
    set sipStatusTypes(value: ondewoSip013.SipStatus.StatusType[]);
    get callStatus(): CallStatus;
    set callStatus(value: CallStatus);
    get startTime(): googleProtobuf005.Timestamp | undefined;
    set startTime(value: googleProtobuf005.Timestamp | undefined);
    get endTime(): googleProtobuf005.Timestamp | undefined;
    set endTime(value: googleProtobuf005.Timestamp | undefined);
    get durationInSMin(): number;
    set durationInSMin(value: number);
    get durationInSMax(): number;
    set durationInSMax(value: number);
    get platforms(): ondewoNlu010.Intent.Message.Platform[];
    set platforms(value: ondewoNlu010.Intent.Message.Platform[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CallFilter.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CallFilter.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CallFilter.AsProtobufJSON;
}
export declare module CallFilter {
    /**
     * Standard JavaScript object representation for CallFilter
     */
    interface AsObject {
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
    interface AsProtobufJSON {
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
export declare class ListCallsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCallsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCallsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCallsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCallsRequest, _writer: BinaryWriter): void;
    private _vtsiProjectName;
    private _callView;
    private _callFilter?;
    private _pageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCallsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCallsRequest.AsObject>);
    get vtsiProjectName(): string;
    set vtsiProjectName(value: string);
    get callView(): CallView;
    set callView(value: CallView);
    get callFilter(): CallFilter | undefined;
    set callFilter(value: CallFilter | undefined);
    get pageToken(): string;
    set pageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCallsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCallsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCallsRequest.AsProtobufJSON;
}
export declare module ListCallsRequest {
    /**
     * Standard JavaScript object representation for ListCallsRequest
     */
    interface AsObject {
        vtsiProjectName: string;
        callView: CallView;
        callFilter?: CallFilter.AsObject;
        pageToken: string;
    }
    /**
     * Protobuf JSON representation for ListCallsRequest
     */
    interface AsProtobufJSON {
        vtsiProjectName: string;
        callView: string;
        callFilter: CallFilter.AsProtobufJSON | null;
        pageToken: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ListCallsResponse
 */
export declare class ListCallsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListCallsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListCallsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListCallsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListCallsResponse, _writer: BinaryWriter): void;
    private _calls?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListCallsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListCallsResponse.AsObject>);
    get calls(): Call[] | undefined;
    set calls(value: Call[] | undefined);
    get nextPageToken(): string;
    set nextPageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListCallsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListCallsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListCallsResponse.AsProtobufJSON;
}
export declare module ListCallsResponse {
    /**
     * Standard JavaScript object representation for ListCallsResponse
     */
    interface AsObject {
        calls?: Call.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListCallsResponse
     */
    interface AsProtobufJSON {
        calls: Call.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.AllServicesStatuses
 */
export declare class AllServicesStatuses implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AllServicesStatuses;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AllServicesStatuses): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AllServicesStatuses, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AllServicesStatuses, _writer: BinaryWriter): void;
    private _statusSip?;
    private _statusAsterisk?;
    private _statusNlu?;
    private _statusStt?;
    private _statusTts?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AllServicesStatuses to deeply clone from
     */
    constructor(_value?: RecursivePartial<AllServicesStatuses.AsObject>);
    get statusSip(): ServiceStatus | undefined;
    set statusSip(value: ServiceStatus | undefined);
    get statusAsterisk(): ServiceStatus | undefined;
    set statusAsterisk(value: ServiceStatus | undefined);
    get statusNlu(): ServiceStatus | undefined;
    set statusNlu(value: ServiceStatus | undefined);
    get statusStt(): ServiceStatus | undefined;
    set statusStt(value: ServiceStatus | undefined);
    get statusTts(): ServiceStatus | undefined;
    set statusTts(value: ServiceStatus | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AllServicesStatuses.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AllServicesStatuses.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AllServicesStatuses.AsProtobufJSON;
}
export declare module AllServicesStatuses {
    /**
     * Standard JavaScript object representation for AllServicesStatuses
     */
    interface AsObject {
        statusSip?: ServiceStatus.AsObject;
        statusAsterisk?: ServiceStatus.AsObject;
        statusNlu?: ServiceStatus.AsObject;
        statusStt?: ServiceStatus.AsObject;
        statusTts?: ServiceStatus.AsObject;
    }
    /**
     * Protobuf JSON representation for AllServicesStatuses
     */
    interface AsProtobufJSON {
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
export declare class ServiceStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ServiceStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ServiceStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ServiceStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ServiceStatus, _writer: BinaryWriter): void;
    private _healthy;
    private _errorMessage;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServiceStatus.AsObject>);
    get healthy(): boolean;
    set healthy(value: boolean);
    get errorMessage(): string;
    set errorMessage(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ServiceStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ServiceStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ServiceStatus.AsProtobufJSON;
}
export declare module ServiceStatus {
    /**
     * Standard JavaScript object representation for ServiceStatus
     */
    interface AsObject {
        healthy: boolean;
        errorMessage: string;
    }
    /**
     * Protobuf JSON representation for ServiceStatus
     */
    interface AsProtobufJSON {
        healthy: boolean;
        errorMessage: string;
    }
}
