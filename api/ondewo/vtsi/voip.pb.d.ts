import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as ondewoS2t008 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s009 from '../../ondewo/t2s/text-to-speech.pb';
/**
 * Message implementation for ondewo.vtsi.VoipManifest
 */
export declare class VoipManifest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipManifest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipManifest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipManifest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipManifest, _writer: BinaryWriter): void;
    private _manifestId?;
    private _contexts?;
    private _callers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifest to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipManifest.AsObject>);
    get manifestId(): string | undefined;
    set manifestId(value: string | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    get callers(): StartCallInstanceRequest[] | undefined;
    set callers(value: StartCallInstanceRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoipManifest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipManifest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipManifest.AsProtobufJSON;
}
export declare module VoipManifest {
    /**
     * Standard JavaScript object representation for VoipManifest
     */
    interface AsObject {
        manifestId?: string;
        contexts?: ondewoNlu005.Context.AsObject[];
        callers?: StartCallInstanceRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for VoipManifest
     */
    interface AsProtobufJSON {
        manifestId?: string;
        contexts?: ondewoNlu005.Context.AsProtobufJSON[] | null;
        callers?: StartCallInstanceRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.ManifestRequest
 */
export declare class ManifestRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ManifestRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ManifestRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ManifestRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ManifestRequest, _writer: BinaryWriter): void;
    private _manifestId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ManifestRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ManifestRequest.AsObject>);
    get manifestId(): string | undefined;
    set manifestId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ManifestRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ManifestRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ManifestRequest.AsProtobufJSON;
}
export declare module ManifestRequest {
    /**
     * Standard JavaScript object representation for ManifestRequest
     */
    interface AsObject {
        manifestId?: string;
    }
    /**
     * Protobuf JSON representation for ManifestRequest
     */
    interface AsProtobufJSON {
        manifestId?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.RunManifestResponse
 */
export declare class RunManifestResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RunManifestResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RunManifestResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RunManifestResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RunManifestResponse, _writer: BinaryWriter): void;
    private _request?;
    private _started?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunManifestResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<RunManifestResponse.AsObject>);
    get request(): ManifestRequest | undefined;
    set request(value: ManifestRequest | undefined);
    get started(): boolean | undefined;
    set started(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RunManifestResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RunManifestResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RunManifestResponse.AsProtobufJSON;
}
export declare module RunManifestResponse {
    /**
     * Standard JavaScript object representation for RunManifestResponse
     */
    interface AsObject {
        request?: ManifestRequest.AsObject;
        started?: boolean;
    }
    /**
     * Protobuf JSON representation for RunManifestResponse
     */
    interface AsProtobufJSON {
        request?: ManifestRequest.AsProtobufJSON | null;
        started?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.RemoveManifestResponse
 */
export declare class RemoveManifestResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RemoveManifestResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RemoveManifestResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RemoveManifestResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RemoveManifestResponse, _writer: BinaryWriter): void;
    private _request?;
    private _success?;
    private _callerResponses?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveManifestResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<RemoveManifestResponse.AsObject>);
    get request(): ManifestRequest | undefined;
    set request(value: ManifestRequest | undefined);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    get callerResponses(): StopCallInstanceResponse[] | undefined;
    set callerResponses(value: StopCallInstanceResponse[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RemoveManifestResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RemoveManifestResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RemoveManifestResponse.AsProtobufJSON;
}
export declare module RemoveManifestResponse {
    /**
     * Standard JavaScript object representation for RemoveManifestResponse
     */
    interface AsObject {
        request?: ManifestRequest.AsObject;
        success?: boolean;
        callerResponses?: StopCallInstanceResponse.AsObject[];
    }
    /**
     * Protobuf JSON representation for RemoveManifestResponse
     */
    interface AsProtobufJSON {
        request?: ManifestRequest.AsProtobufJSON | null;
        success?: boolean;
        callerResponses?: StopCallInstanceResponse.AsProtobufJSON[] | null;
    }
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
    private _host?;
    private _port?;
    private _grpcCert?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BaseServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<BaseServiceConfig.AsObject>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): number | undefined;
    set port(value: number | undefined);
    get grpcCert(): string | undefined;
    set grpcCert(value: string | undefined);
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
        host?: string;
        port?: number;
        grpcCert?: string;
    }
    /**
     * Protobuf JSON representation for BaseServiceConfig
     */
    interface AsProtobufJSON {
        host?: string;
        port?: number;
        grpcCert?: string;
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
    private _accountName?;
    private _password?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Credentials to deeply clone from
     */
    constructor(_value?: RecursivePartial<Credentials.AsObject>);
    get accountName(): string | undefined;
    set accountName(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
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
        accountName?: string;
        password?: string;
    }
    /**
     * Protobuf JSON representation for Credentials
     */
    interface AsProtobufJSON {
        accountName?: string;
        password?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.NLUConfig
 */
export declare class NLUConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NLUConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NLUConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NLUConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NLUConfig, _writer: BinaryWriter): void;
    private _baseConfig?;
    private _credentials?;
    private _authToken?;
    private _languageCode?;
    private _projectId?;
    private _initialIntent?;
    private _contexts?;
    private _authentication;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NLUConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<NLUConfig.AsObject>);
    get baseConfig(): BaseServiceConfig | undefined;
    set baseConfig(value: BaseServiceConfig | undefined);
    get credentials(): Credentials | undefined;
    set credentials(value: Credentials | undefined);
    get authToken(): string | undefined;
    set authToken(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get projectId(): string | undefined;
    set projectId(value: string | undefined);
    get initialIntent(): string | undefined;
    set initialIntent(value: string | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    get authentication(): NLUConfig.AuthenticationCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NLUConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NLUConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NLUConfig.AsProtobufJSON;
}
export declare module NLUConfig {
    /**
     * Standard JavaScript object representation for NLUConfig
     */
    interface AsObject {
        baseConfig?: BaseServiceConfig.AsObject;
        credentials?: Credentials.AsObject;
        authToken?: string;
        languageCode?: string;
        projectId?: string;
        initialIntent?: string;
        contexts?: ondewoNlu005.Context.AsObject[];
    }
    /**
     * Protobuf JSON representation for NLUConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
        credentials?: Credentials.AsProtobufJSON | null;
        authToken?: string | null;
        languageCode?: string;
        projectId?: string;
        initialIntent?: string;
        contexts?: ondewoNlu005.Context.AsProtobufJSON[] | null;
    }
    enum AuthenticationCase {
        none = 0,
        credentials = 1,
        authToken = 2
    }
}
/**
 * Message implementation for ondewo.vtsi.T2SConfig
 */
export declare class T2SConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2SConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2SConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2SConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2SConfig, _writer: BinaryWriter): void;
    private _baseConfig?;
    private _t2sConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2SConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2SConfig.AsObject>);
    get baseConfig(): BaseServiceConfig | undefined;
    set baseConfig(value: BaseServiceConfig | undefined);
    get t2sConfig(): ondewoT2s009.RequestConfig | undefined;
    set t2sConfig(value: ondewoT2s009.RequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2SConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2SConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2SConfig.AsProtobufJSON;
}
export declare module T2SConfig {
    /**
     * Standard JavaScript object representation for T2SConfig
     */
    interface AsObject {
        baseConfig?: BaseServiceConfig.AsObject;
        t2sConfig?: ondewoT2s009.RequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for T2SConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
        t2sConfig?: ondewoT2s009.RequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.S2TConfig
 */
export declare class S2TConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2TConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2TConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2TConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2TConfig, _writer: BinaryWriter): void;
    private _baseConfig?;
    private _s2tConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2TConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2TConfig.AsObject>);
    get baseConfig(): BaseServiceConfig | undefined;
    set baseConfig(value: BaseServiceConfig | undefined);
    get s2tConfig(): ondewoS2t008.TranscribeRequestConfig | undefined;
    set s2tConfig(value: ondewoS2t008.TranscribeRequestConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2TConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2TConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2TConfig.AsProtobufJSON;
}
export declare module S2TConfig {
    /**
     * Standard JavaScript object representation for S2TConfig
     */
    interface AsObject {
        baseConfig?: BaseServiceConfig.AsObject;
        s2tConfig?: ondewoS2t008.TranscribeRequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for S2TConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
        s2tConfig?: ondewoS2t008.TranscribeRequestConfig.AsProtobufJSON | null;
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
    private _baseConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AsteriskConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<AsteriskConfig.AsObject>);
    get baseConfig(): BaseServiceConfig | undefined;
    set baseConfig(value: BaseServiceConfig | undefined);
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
        baseConfig?: BaseServiceConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for AsteriskConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.CommonServicesConfigs
 */
export declare class CommonServicesConfigs implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CommonServicesConfigs;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CommonServicesConfigs): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CommonServicesConfigs, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CommonServicesConfigs, _writer: BinaryWriter): void;
    private _asteriskConfig?;
    private _caiConfig?;
    private _sttConfig?;
    private _ttsConfig?;
    private _csiConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CommonServicesConfigs to deeply clone from
     */
    constructor(_value?: RecursivePartial<CommonServicesConfigs.AsObject>);
    get asteriskConfig(): AsteriskConfig | undefined;
    set asteriskConfig(value: AsteriskConfig | undefined);
    get caiConfig(): NLUConfig | undefined;
    set caiConfig(value: NLUConfig | undefined);
    get sttConfig(): S2TConfig | undefined;
    set sttConfig(value: S2TConfig | undefined);
    get ttsConfig(): T2SConfig | undefined;
    set ttsConfig(value: T2SConfig | undefined);
    get csiConfig(): CsiConfig | undefined;
    set csiConfig(value: CsiConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CommonServicesConfigs.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CommonServicesConfigs.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CommonServicesConfigs.AsProtobufJSON;
}
export declare module CommonServicesConfigs {
    /**
     * Standard JavaScript object representation for CommonServicesConfigs
     */
    interface AsObject {
        asteriskConfig?: AsteriskConfig.AsObject;
        caiConfig?: NLUConfig.AsObject;
        sttConfig?: S2TConfig.AsObject;
        ttsConfig?: T2SConfig.AsObject;
        csiConfig?: CsiConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for CommonServicesConfigs
     */
    interface AsProtobufJSON {
        asteriskConfig?: AsteriskConfig.AsProtobufJSON | null;
        caiConfig?: NLUConfig.AsProtobufJSON | null;
        sttConfig?: S2TConfig.AsProtobufJSON | null;
        ttsConfig?: T2SConfig.AsProtobufJSON | null;
        csiConfig?: CsiConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.SIPConfig
 */
export declare class SIPConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SIPConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SIPConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SIPConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SIPConfig, _writer: BinaryWriter): void;
    private _callId?;
    private _callDisplayName?;
    private _sipSimVersion?;
    private _sipPrefix?;
    private _sipAccount?;
    private _accountPasswordDictionary?;
    private _phoneNumber?;
    private _headers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SIPConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<SIPConfig.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get callDisplayName(): string | undefined;
    set callDisplayName(value: string | undefined);
    get sipSimVersion(): string | undefined;
    set sipSimVersion(value: string | undefined);
    get sipPrefix(): string | undefined;
    set sipPrefix(value: string | undefined);
    get sipAccount(): string | undefined;
    set sipAccount(value: string | undefined);
    get accountPasswordDictionary(): {
        [prop: string]: string;
    } | undefined;
    set accountPasswordDictionary(value: {
        [prop: string]: string;
    } | undefined);
    get phoneNumber(): string | undefined;
    set phoneNumber(value: string | undefined);
    get headers(): {
        [prop: string]: string;
    } | undefined;
    set headers(value: {
        [prop: string]: string;
    } | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SIPConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SIPConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SIPConfig.AsProtobufJSON;
}
export declare module SIPConfig {
    /**
     * Standard JavaScript object representation for SIPConfig
     */
    interface AsObject {
        callId?: string;
        callDisplayName?: string;
        sipSimVersion?: string;
        sipPrefix?: string;
        sipAccount?: string;
        accountPasswordDictionary?: {
            [prop: string]: string;
        };
        phoneNumber?: string;
        headers?: {
            [prop: string]: string;
        };
    }
    /**
     * Protobuf JSON representation for SIPConfig
     */
    interface AsProtobufJSON {
        callId?: string;
        callDisplayName?: string;
        sipSimVersion?: string;
        sipPrefix?: string;
        sipAccount?: string;
        accountPasswordDictionary?: {
            [prop: string]: string;
        };
        phoneNumber?: string;
        headers?: {
            [prop: string]: string;
        };
    }
    /**
     * Message implementation for ondewo.vtsi.AccountPasswordDictionaryEntry
     */
    class AccountPasswordDictionaryEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): AccountPasswordDictionaryEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: AccountPasswordDictionaryEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: AccountPasswordDictionaryEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: AccountPasswordDictionaryEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of AccountPasswordDictionaryEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<AccountPasswordDictionaryEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): AccountPasswordDictionaryEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): AccountPasswordDictionaryEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): AccountPasswordDictionaryEntry.AsProtobufJSON;
    }
    module AccountPasswordDictionaryEntry {
        /**
         * Standard JavaScript object representation for AccountPasswordDictionaryEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for AccountPasswordDictionaryEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
    /**
     * Message implementation for ondewo.vtsi.HeadersEntry
     */
    class HeadersEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): HeadersEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: HeadersEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: HeadersEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: HeadersEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of HeadersEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<HeadersEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): HeadersEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): HeadersEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): HeadersEntry.AsProtobufJSON;
    }
    module HeadersEntry {
        /**
         * Standard JavaScript object representation for HeadersEntry
         */
        interface AsObject {
            key?: string;
            value?: string;
        }
        /**
         * Protobuf JSON representation for HeadersEntry
         */
        interface AsProtobufJSON {
            key?: string;
            value?: string;
        }
    }
}
/**
 * Message implementation for ondewo.vtsi.CsiConfig
 */
export declare class CsiConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CsiConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CsiConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CsiConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CsiConfig, _writer: BinaryWriter): void;
    private _s2tCallbacks?;
    private _nluCallbacks?;
    private _t2sCallbacks?;
    private _audioObjectStoreConfig?;
    private _messageBrokerConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CsiConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<CsiConfig.AsObject>);
    get s2tCallbacks(): S2tCallbacks | undefined;
    set s2tCallbacks(value: S2tCallbacks | undefined);
    get nluCallbacks(): NluCallbacks | undefined;
    set nluCallbacks(value: NluCallbacks | undefined);
    get t2sCallbacks(): T2sCallbacks | undefined;
    set t2sCallbacks(value: T2sCallbacks | undefined);
    get audioObjectStoreConfig(): AudioObjectStorageConfig | undefined;
    set audioObjectStoreConfig(value: AudioObjectStorageConfig | undefined);
    get messageBrokerConfig(): MessageBrokerConfig | undefined;
    set messageBrokerConfig(value: MessageBrokerConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CsiConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CsiConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CsiConfig.AsProtobufJSON;
}
export declare module CsiConfig {
    /**
     * Standard JavaScript object representation for CsiConfig
     */
    interface AsObject {
        s2tCallbacks?: S2tCallbacks.AsObject;
        nluCallbacks?: NluCallbacks.AsObject;
        t2sCallbacks?: T2sCallbacks.AsObject;
        audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject;
        messageBrokerConfig?: MessageBrokerConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for CsiConfig
     */
    interface AsProtobufJSON {
        s2tCallbacks?: S2tCallbacks.AsProtobufJSON | null;
        nluCallbacks?: NluCallbacks.AsProtobufJSON | null;
        t2sCallbacks?: T2sCallbacks.AsProtobufJSON | null;
        audioObjectStoreConfig?: AudioObjectStorageConfig.AsProtobufJSON | null;
        messageBrokerConfig?: MessageBrokerConfig.AsProtobufJSON | null;
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
    private _minioConfig?;
    private _audioStorageConfig;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AudioObjectStorageConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<AudioObjectStorageConfig.AsObject>);
    get minioConfig(): MinioConfig | undefined;
    set minioConfig(value: MinioConfig | undefined);
    get audioStorageConfig(): AudioObjectStorageConfig.AudioStorageConfigCase;
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
        minioConfig?: MinioConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for AudioObjectStorageConfig
     */
    interface AsProtobufJSON {
        minioConfig?: MinioConfig.AsProtobufJSON | null;
    }
    enum AudioStorageConfigCase {
        none = 0,
        minioConfig = 1
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
    private _rabbitMqConfig?;
    private _messageBrokerConfig;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MessageBrokerConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<MessageBrokerConfig.AsObject>);
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
        rabbitMqConfig?: RabbitMqConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for MessageBrokerConfig
     */
    interface AsProtobufJSON {
        rabbitMqConfig?: RabbitMqConfig.AsProtobufJSON | null;
    }
    enum MessageBrokerConfigCase {
        none = 0,
        rabbitMqConfig = 1
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
    private _host?;
    private _port?;
    private _port2?;
    private _user?;
    private _password?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RabbitMqConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RabbitMqConfig.AsObject>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): string | undefined;
    set port(value: string | undefined);
    get port2(): string | undefined;
    set port2(value: string | undefined);
    get user(): string | undefined;
    set user(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
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
        host?: string;
        port?: string;
        port2?: string;
        user?: string;
        password?: string;
    }
    /**
     * Protobuf JSON representation for RabbitMqConfig
     */
    interface AsProtobufJSON {
        host?: string;
        port?: string;
        port2?: string;
        user?: string;
        password?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.Endpoint
 */
export declare class Endpoint implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Endpoint;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Endpoint): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Endpoint, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Endpoint, _writer: BinaryWriter): void;
    private _host?;
    private _port?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Endpoint to deeply clone from
     */
    constructor(_value?: RecursivePartial<Endpoint.AsObject>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): string | undefined;
    set port(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Endpoint.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Endpoint.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Endpoint.AsProtobufJSON;
}
export declare module Endpoint {
    /**
     * Standard JavaScript object representation for Endpoint
     */
    interface AsObject {
        host?: string;
        port?: string;
    }
    /**
     * Protobuf JSON representation for Endpoint
     */
    interface AsProtobufJSON {
        host?: string;
        port?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.MinioConfig
 */
export declare class MinioConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): MinioConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: MinioConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: MinioConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: MinioConfig, _writer: BinaryWriter): void;
    private _endpoint?;
    private _accessKey?;
    private _secretKey?;
    private _secure?;
    private _sessionToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of MinioConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<MinioConfig.AsObject>);
    get endpoint(): Endpoint | undefined;
    set endpoint(value: Endpoint | undefined);
    get accessKey(): string | undefined;
    set accessKey(value: string | undefined);
    get secretKey(): string | undefined;
    set secretKey(value: string | undefined);
    get secure(): boolean | undefined;
    set secure(value: boolean | undefined);
    get sessionToken(): string | undefined;
    set sessionToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): MinioConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): MinioConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): MinioConfig.AsProtobufJSON;
}
export declare module MinioConfig {
    /**
     * Standard JavaScript object representation for MinioConfig
     */
    interface AsObject {
        endpoint?: Endpoint.AsObject;
        accessKey?: string;
        secretKey?: string;
        secure?: boolean;
        sessionToken?: string;
    }
    /**
     * Protobuf JSON representation for MinioConfig
     */
    interface AsProtobufJSON {
        endpoint?: Endpoint.AsProtobufJSON | null;
        accessKey?: string;
        secretKey?: string;
        secure?: boolean;
        sessionToken?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.S2tCallbacks
 */
export declare class S2tCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): S2tCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: S2tCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: S2tCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: S2tCallbacks, _writer: BinaryWriter): void;
    private _preS2tCallbacks?;
    private _postS2tCallbacks?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of S2tCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<S2tCallbacks.AsObject>);
    get preS2tCallbacks(): string[] | undefined;
    set preS2tCallbacks(value: string[] | undefined);
    get postS2tCallbacks(): string[] | undefined;
    set postS2tCallbacks(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): S2tCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): S2tCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): S2tCallbacks.AsProtobufJSON;
}
export declare module S2tCallbacks {
    /**
     * Standard JavaScript object representation for S2tCallbacks
     */
    interface AsObject {
        preS2tCallbacks?: string[];
        postS2tCallbacks?: string[];
    }
    /**
     * Protobuf JSON representation for S2tCallbacks
     */
    interface AsProtobufJSON {
        preS2tCallbacks?: string[];
        postS2tCallbacks?: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.NluCallbacks
 */
export declare class NluCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): NluCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NluCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: NluCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NluCallbacks, _writer: BinaryWriter): void;
    private _preNluCallbacks?;
    private _postNluCallbacks?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NluCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<NluCallbacks.AsObject>);
    get preNluCallbacks(): string[] | undefined;
    set preNluCallbacks(value: string[] | undefined);
    get postNluCallbacks(): string[] | undefined;
    set postNluCallbacks(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NluCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): NluCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): NluCallbacks.AsProtobufJSON;
}
export declare module NluCallbacks {
    /**
     * Standard JavaScript object representation for NluCallbacks
     */
    interface AsObject {
        preNluCallbacks?: string[];
        postNluCallbacks?: string[];
    }
    /**
     * Protobuf JSON representation for NluCallbacks
     */
    interface AsProtobufJSON {
        preNluCallbacks?: string[];
        postNluCallbacks?: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.T2sCallbacks
 */
export declare class T2sCallbacks implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): T2sCallbacks;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: T2sCallbacks): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: T2sCallbacks, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: T2sCallbacks, _writer: BinaryWriter): void;
    private _preT2sCallbacks?;
    private _postT2sCallbacks?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of T2sCallbacks to deeply clone from
     */
    constructor(_value?: RecursivePartial<T2sCallbacks.AsObject>);
    get preT2sCallbacks(): string[] | undefined;
    set preT2sCallbacks(value: string[] | undefined);
    get postT2sCallbacks(): string[] | undefined;
    set postT2sCallbacks(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): T2sCallbacks.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): T2sCallbacks.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): T2sCallbacks.AsProtobufJSON;
}
export declare module T2sCallbacks {
    /**
     * Standard JavaScript object representation for T2sCallbacks
     */
    interface AsObject {
        preT2sCallbacks?: string[];
        postT2sCallbacks?: string[];
    }
    /**
     * Protobuf JSON representation for T2sCallbacks
     */
    interface AsProtobufJSON {
        preT2sCallbacks?: string[];
        postT2sCallbacks?: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallInstanceRequest
 */
export declare class StartCallInstanceRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallInstanceRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallInstanceRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallInstanceRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallInstanceRequest, _writer: BinaryWriter): void;
    private _sipConfig?;
    private _servicesConfigs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallInstanceRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallInstanceRequest.AsObject>);
    get sipConfig(): SIPConfig | undefined;
    set sipConfig(value: SIPConfig | undefined);
    get servicesConfigs(): CommonServicesConfigs | undefined;
    set servicesConfigs(value: CommonServicesConfigs | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallInstanceRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallInstanceRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallInstanceRequest.AsProtobufJSON;
}
export declare module StartCallInstanceRequest {
    /**
     * Standard JavaScript object representation for StartCallInstanceRequest
     */
    interface AsObject {
        sipConfig?: SIPConfig.AsObject;
        servicesConfigs?: CommonServicesConfigs.AsObject;
    }
    /**
     * Protobuf JSON representation for StartCallInstanceRequest
     */
    interface AsProtobufJSON {
        sipConfig?: SIPConfig.AsProtobufJSON | null;
        servicesConfigs?: CommonServicesConfigs.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartCallInstanceResponse
 */
export declare class StartCallInstanceResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartCallInstanceResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartCallInstanceResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartCallInstanceResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartCallInstanceResponse, _writer: BinaryWriter): void;
    private _request?;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallInstanceResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallInstanceResponse.AsObject>);
    get request(): StartCallInstanceRequest | undefined;
    set request(value: StartCallInstanceRequest | undefined);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartCallInstanceResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartCallInstanceResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartCallInstanceResponse.AsProtobufJSON;
}
export declare module StartCallInstanceResponse {
    /**
     * Standard JavaScript object representation for StartCallInstanceResponse
     */
    interface AsObject {
        request?: StartCallInstanceRequest.AsObject;
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for StartCallInstanceResponse
     */
    interface AsProtobufJSON {
        request?: StartCallInstanceRequest.AsProtobufJSON | null;
        success?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartMultipleCallInstancesRequest
 */
export declare class StartMultipleCallInstancesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartMultipleCallInstancesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartMultipleCallInstancesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartMultipleCallInstancesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartMultipleCallInstancesRequest, _writer: BinaryWriter): void;
    private _requests?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartMultipleCallInstancesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartMultipleCallInstancesRequest.AsObject>);
    get requests(): StartCallInstanceRequest[] | undefined;
    set requests(value: StartCallInstanceRequest[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartMultipleCallInstancesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartMultipleCallInstancesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartMultipleCallInstancesRequest.AsProtobufJSON;
}
export declare module StartMultipleCallInstancesRequest {
    /**
     * Standard JavaScript object representation for StartMultipleCallInstancesRequest
     */
    interface AsObject {
        requests?: StartCallInstanceRequest.AsObject[];
    }
    /**
     * Protobuf JSON representation for StartMultipleCallInstancesRequest
     */
    interface AsProtobufJSON {
        requests?: StartCallInstanceRequest.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.StartMultipleCallInstancesResponse
 */
export declare class StartMultipleCallInstancesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartMultipleCallInstancesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartMultipleCallInstancesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartMultipleCallInstancesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartMultipleCallInstancesResponse, _writer: BinaryWriter): void;
    private _request?;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartMultipleCallInstancesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartMultipleCallInstancesResponse.AsObject>);
    get request(): StartMultipleCallInstancesRequest | undefined;
    set request(value: StartMultipleCallInstancesRequest | undefined);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartMultipleCallInstancesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartMultipleCallInstancesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartMultipleCallInstancesResponse.AsProtobufJSON;
}
export declare module StartMultipleCallInstancesResponse {
    /**
     * Standard JavaScript object representation for StartMultipleCallInstancesResponse
     */
    interface AsObject {
        request?: StartMultipleCallInstancesRequest.AsObject;
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for StartMultipleCallInstancesResponse
     */
    interface AsProtobufJSON {
        request?: StartMultipleCallInstancesRequest.AsProtobufJSON | null;
        success?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallInstanceRequest
 */
export declare class StopCallInstanceRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallInstanceRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallInstanceRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallInstanceRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallInstanceRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _sipId?;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallInstanceRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallInstanceRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get sipId(): string | undefined;
    set sipId(value: string | undefined);
    get id(): StopCallInstanceRequest.IdCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallInstanceRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallInstanceRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallInstanceRequest.AsProtobufJSON;
}
export declare module StopCallInstanceRequest {
    /**
     * Standard JavaScript object representation for StopCallInstanceRequest
     */
    interface AsObject {
        callId?: string;
        sipId?: string;
    }
    /**
     * Protobuf JSON representation for StopCallInstanceRequest
     */
    interface AsProtobufJSON {
        callId?: string | null;
        sipId?: string | null;
    }
    enum IdCase {
        none = 0,
        callId = 1,
        sipId = 2
    }
}
/**
 * Message implementation for ondewo.vtsi.StopCallInstanceResponse
 */
export declare class StopCallInstanceResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StopCallInstanceResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StopCallInstanceResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StopCallInstanceResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StopCallInstanceResponse, _writer: BinaryWriter): void;
    private _request?;
    private _success?;
    private _logMessage?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallInstanceResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StopCallInstanceResponse.AsObject>);
    get request(): StopCallInstanceRequest | undefined;
    set request(value: StopCallInstanceRequest | undefined);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    get logMessage(): string | undefined;
    set logMessage(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StopCallInstanceResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StopCallInstanceResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StopCallInstanceResponse.AsProtobufJSON;
}
export declare module StopCallInstanceResponse {
    /**
     * Standard JavaScript object representation for StopCallInstanceResponse
     */
    interface AsObject {
        request?: StopCallInstanceRequest.AsObject;
        success?: boolean;
        logMessage?: string;
    }
    /**
     * Protobuf JSON representation for StopCallInstanceResponse
     */
    interface AsProtobufJSON {
        request?: StopCallInstanceRequest.AsProtobufJSON | null;
        success?: boolean;
        logMessage?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.VoipManifestStatusRequest
 */
export declare class VoipManifestStatusRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipManifestStatusRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipManifestStatusRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipManifestStatusRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipManifestStatusRequest, _writer: BinaryWriter): void;
    private _manifestId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipManifestStatusRequest.AsObject>);
    get manifestId(): string | undefined;
    set manifestId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoipManifestStatusRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipManifestStatusRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipManifestStatusRequest.AsProtobufJSON;
}
export declare module VoipManifestStatusRequest {
    /**
     * Standard JavaScript object representation for VoipManifestStatusRequest
     */
    interface AsObject {
        manifestId?: string;
    }
    /**
     * Protobuf JSON representation for VoipManifestStatusRequest
     */
    interface AsProtobufJSON {
        manifestId?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.VoipManifestStatus
 */
export declare class VoipManifestStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipManifestStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipManifestStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipManifestStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipManifestStatus, _writer: BinaryWriter): void;
    private _request?;
    private _callsStatus?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipManifestStatus.AsObject>);
    get request(): VoipManifestStatusRequest | undefined;
    set request(value: VoipManifestStatusRequest | undefined);
    get callsStatus(): VoipStatus[] | undefined;
    set callsStatus(value: VoipStatus[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoipManifestStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipManifestStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipManifestStatus.AsProtobufJSON;
}
export declare module VoipManifestStatus {
    /**
     * Standard JavaScript object representation for VoipManifestStatus
     */
    interface AsObject {
        request?: VoipManifestStatusRequest.AsObject;
        callsStatus?: VoipStatus.AsObject[];
    }
    /**
     * Protobuf JSON representation for VoipManifestStatus
     */
    interface AsProtobufJSON {
        request?: VoipManifestStatusRequest.AsProtobufJSON | null;
        callsStatus?: VoipStatus.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetVoipStatusRequest
 */
export declare class GetVoipStatusRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetVoipStatusRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetVoipStatusRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetVoipStatusRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetVoipStatusRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _sipId?;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetVoipStatusRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get sipId(): string | undefined;
    set sipId(value: string | undefined);
    get id(): GetVoipStatusRequest.IdCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetVoipStatusRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetVoipStatusRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetVoipStatusRequest.AsProtobufJSON;
}
export declare module GetVoipStatusRequest {
    /**
     * Standard JavaScript object representation for GetVoipStatusRequest
     */
    interface AsObject {
        callId?: string;
        sipId?: string;
    }
    /**
     * Protobuf JSON representation for GetVoipStatusRequest
     */
    interface AsProtobufJSON {
        callId?: string | null;
        sipId?: string | null;
    }
    enum IdCase {
        none = 0,
        callId = 1,
        sipId = 2
    }
}
/**
 * Message implementation for ondewo.vtsi.VoipStatus
 */
export declare class VoipStatus implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipStatus;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipStatus): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipStatus, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipStatus, _writer: BinaryWriter): void;
    private _healthy?;
    private _lastLog?;
    private _statusAsterisk?;
    private _statusCai?;
    private _statusStt?;
    private _statusTts?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipStatus.AsObject>);
    get healthy(): boolean | undefined;
    set healthy(value: boolean | undefined);
    get lastLog(): string | undefined;
    set lastLog(value: string | undefined);
    get statusAsterisk(): ServiceStatus | undefined;
    set statusAsterisk(value: ServiceStatus | undefined);
    get statusCai(): ServiceStatus | undefined;
    set statusCai(value: ServiceStatus | undefined);
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
    toObject(): VoipStatus.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipStatus.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipStatus.AsProtobufJSON;
}
export declare module VoipStatus {
    /**
     * Standard JavaScript object representation for VoipStatus
     */
    interface AsObject {
        healthy?: boolean;
        lastLog?: string;
        statusAsterisk?: ServiceStatus.AsObject;
        statusCai?: ServiceStatus.AsObject;
        statusStt?: ServiceStatus.AsObject;
        statusTts?: ServiceStatus.AsObject;
    }
    /**
     * Protobuf JSON representation for VoipStatus
     */
    interface AsProtobufJSON {
        healthy?: boolean;
        lastLog?: string;
        statusAsterisk?: ServiceStatus.AsProtobufJSON | null;
        statusCai?: ServiceStatus.AsProtobufJSON | null;
        statusStt?: ServiceStatus.AsProtobufJSON | null;
        statusTts?: ServiceStatus.AsProtobufJSON | null;
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
    private _healthy?;
    private _lastLog?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceStatus to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServiceStatus.AsObject>);
    get healthy(): boolean | undefined;
    set healthy(value: boolean | undefined);
    get lastLog(): string | undefined;
    set lastLog(value: string | undefined);
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
        healthy?: boolean;
        lastLog?: string;
    }
    /**
     * Protobuf JSON representation for ServiceStatus
     */
    interface AsProtobufJSON {
        healthy?: boolean;
        lastLog?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.UpdateServicesStatusRequest
 */
export declare class UpdateServicesStatusRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateServicesStatusRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateServicesStatusRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateServicesStatusRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateServicesStatusRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _sipId?;
    private _manifestId?;
    private _id;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateServicesStatusRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateServicesStatusRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get sipId(): string | undefined;
    set sipId(value: string | undefined);
    get manifestId(): string | undefined;
    set manifestId(value: string | undefined);
    get id(): UpdateServicesStatusRequest.IdCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateServicesStatusRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateServicesStatusRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateServicesStatusRequest.AsProtobufJSON;
}
export declare module UpdateServicesStatusRequest {
    /**
     * Standard JavaScript object representation for UpdateServicesStatusRequest
     */
    interface AsObject {
        callId?: string;
        sipId?: string;
        manifestId?: string;
    }
    /**
     * Protobuf JSON representation for UpdateServicesStatusRequest
     */
    interface AsProtobufJSON {
        callId?: string | null;
        sipId?: string | null;
        manifestId?: string | null;
    }
    enum IdCase {
        none = 0,
        callId = 1,
        sipId = 2,
        manifestId = 3
    }
}
/**
 * Message implementation for ondewo.vtsi.UpdateServicesStatusResponse
 */
export declare class UpdateServicesStatusResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateServicesStatusResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateServicesStatusResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateServicesStatusResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateServicesStatusResponse, _writer: BinaryWriter): void;
    private _empty?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateServicesStatusResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateServicesStatusResponse.AsObject>);
    get empty(): googleProtobuf003.Empty | undefined;
    set empty(value: googleProtobuf003.Empty | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateServicesStatusResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateServicesStatusResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateServicesStatusResponse.AsProtobufJSON;
}
export declare module UpdateServicesStatusResponse {
    /**
     * Standard JavaScript object representation for UpdateServicesStatusResponse
     */
    interface AsObject {
        empty?: googleProtobuf003.Empty.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateServicesStatusResponse
     */
    interface AsProtobufJSON {
        empty?: googleProtobuf003.Empty.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeployPreconditionRequest
 */
export declare class DeployPreconditionRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeployPreconditionRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeployPreconditionRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeployPreconditionRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeployPreconditionRequest, _writer: BinaryWriter): void;
    private _sipSimVersion?;
    private _asteriskConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeployPreconditionRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeployPreconditionRequest.AsObject>);
    get sipSimVersion(): string | undefined;
    set sipSimVersion(value: string | undefined);
    get asteriskConfig(): AsteriskConfig | undefined;
    set asteriskConfig(value: AsteriskConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeployPreconditionRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeployPreconditionRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeployPreconditionRequest.AsProtobufJSON;
}
export declare module DeployPreconditionRequest {
    /**
     * Standard JavaScript object representation for DeployPreconditionRequest
     */
    interface AsObject {
        sipSimVersion?: string;
        asteriskConfig?: AsteriskConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for DeployPreconditionRequest
     */
    interface AsProtobufJSON {
        sipSimVersion?: string;
        asteriskConfig?: AsteriskConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.DeployPreconditionResponse
 */
export declare class DeployPreconditionResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeployPreconditionResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeployPreconditionResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeployPreconditionResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeployPreconditionResponse, _writer: BinaryWriter): void;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeployPreconditionResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeployPreconditionResponse.AsObject>);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeployPreconditionResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeployPreconditionResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeployPreconditionResponse.AsProtobufJSON;
}
export declare module DeployPreconditionResponse {
    /**
     * Standard JavaScript object representation for DeployPreconditionResponse
     */
    interface AsObject {
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for DeployPreconditionResponse
     */
    interface AsProtobufJSON {
        success?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetManifestIDsRequest
 */
export declare class GetManifestIDsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetManifestIDsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetManifestIDsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetManifestIDsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetManifestIDsRequest, _writer: BinaryWriter): void;
    private _empty?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestIDsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetManifestIDsRequest.AsObject>);
    get empty(): googleProtobuf003.Empty | undefined;
    set empty(value: googleProtobuf003.Empty | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetManifestIDsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetManifestIDsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetManifestIDsRequest.AsProtobufJSON;
}
export declare module GetManifestIDsRequest {
    /**
     * Standard JavaScript object representation for GetManifestIDsRequest
     */
    interface AsObject {
        empty?: googleProtobuf003.Empty.AsObject;
    }
    /**
     * Protobuf JSON representation for GetManifestIDsRequest
     */
    interface AsProtobufJSON {
        empty?: googleProtobuf003.Empty.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetManifestIDsResponse
 */
export declare class GetManifestIDsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetManifestIDsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetManifestIDsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetManifestIDsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetManifestIDsResponse, _writer: BinaryWriter): void;
    private _manifestIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestIDsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetManifestIDsResponse.AsObject>);
    get manifestIds(): string[] | undefined;
    set manifestIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetManifestIDsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetManifestIDsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetManifestIDsResponse.AsProtobufJSON;
}
export declare module GetManifestIDsResponse {
    /**
     * Standard JavaScript object representation for GetManifestIDsResponse
     */
    interface AsObject {
        manifestIds?: string[];
    }
    /**
     * Protobuf JSON representation for GetManifestIDsResponse
     */
    interface AsProtobufJSON {
        manifestIds?: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.GetCallIDsRequest
 */
export declare class GetCallIDsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallIDsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallIDsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallIDsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallIDsRequest, _writer: BinaryWriter): void;
    private _empty?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIDsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallIDsRequest.AsObject>);
    get empty(): googleProtobuf003.Empty | undefined;
    set empty(value: googleProtobuf003.Empty | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCallIDsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallIDsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallIDsRequest.AsProtobufJSON;
}
export declare module GetCallIDsRequest {
    /**
     * Standard JavaScript object representation for GetCallIDsRequest
     */
    interface AsObject {
        empty?: googleProtobuf003.Empty.AsObject;
    }
    /**
     * Protobuf JSON representation for GetCallIDsRequest
     */
    interface AsProtobufJSON {
        empty?: googleProtobuf003.Empty.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetCallIDsResponse
 */
export declare class GetCallIDsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallIDsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallIDsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallIDsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallIDsResponse, _writer: BinaryWriter): void;
    private _callIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIDsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallIDsResponse.AsObject>);
    get callIds(): string[] | undefined;
    set callIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCallIDsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallIDsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallIDsResponse.AsProtobufJSON;
}
export declare module GetCallIDsResponse {
    /**
     * Standard JavaScript object representation for GetCallIDsResponse
     */
    interface AsObject {
        callIds?: string[];
    }
    /**
     * Protobuf JSON representation for GetCallIDsResponse
     */
    interface AsProtobufJSON {
        callIds?: string[];
    }
}
/**
 * Message implementation for ondewo.vtsi.GetSessionIDRequest
 */
export declare class GetSessionIDRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSessionIDRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSessionIDRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSessionIDRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSessionIDRequest, _writer: BinaryWriter): void;
    private _callId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionIDRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSessionIDRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSessionIDRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSessionIDRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionIDRequest.AsProtobufJSON;
}
export declare module GetSessionIDRequest {
    /**
     * Standard JavaScript object representation for GetSessionIDRequest
     */
    interface AsObject {
        callId?: string;
    }
    /**
     * Protobuf JSON representation for GetSessionIDRequest
     */
    interface AsProtobufJSON {
        callId?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetSessionIDResponse
 */
export declare class GetSessionIDResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSessionIDResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSessionIDResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSessionIDResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSessionIDResponse, _writer: BinaryWriter): void;
    private _callId?;
    private _sessionId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionIDResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSessionIDResponse.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSessionIDResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSessionIDResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSessionIDResponse.AsProtobufJSON;
}
export declare module GetSessionIDResponse {
    /**
     * Standard JavaScript object representation for GetSessionIDResponse
     */
    interface AsObject {
        callId?: string;
        sessionId?: string;
    }
    /**
     * Protobuf JSON representation for GetSessionIDResponse
     */
    interface AsProtobufJSON {
        callId?: string;
        sessionId?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.ShutdownUnhealthyCallsRequest
 */
export declare class ShutdownUnhealthyCallsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ShutdownUnhealthyCallsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ShutdownUnhealthyCallsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ShutdownUnhealthyCallsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ShutdownUnhealthyCallsRequest, _writer: BinaryWriter): void;
    private _empty?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShutdownUnhealthyCallsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ShutdownUnhealthyCallsRequest.AsObject>);
    get empty(): googleProtobuf003.Empty | undefined;
    set empty(value: googleProtobuf003.Empty | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ShutdownUnhealthyCallsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ShutdownUnhealthyCallsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ShutdownUnhealthyCallsRequest.AsProtobufJSON;
}
export declare module ShutdownUnhealthyCallsRequest {
    /**
     * Standard JavaScript object representation for ShutdownUnhealthyCallsRequest
     */
    interface AsObject {
        empty?: googleProtobuf003.Empty.AsObject;
    }
    /**
     * Protobuf JSON representation for ShutdownUnhealthyCallsRequest
     */
    interface AsProtobufJSON {
        empty?: googleProtobuf003.Empty.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.ShutdownUnhealthyCallsResponse
 */
export declare class ShutdownUnhealthyCallsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ShutdownUnhealthyCallsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ShutdownUnhealthyCallsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ShutdownUnhealthyCallsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ShutdownUnhealthyCallsResponse, _writer: BinaryWriter): void;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShutdownUnhealthyCallsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ShutdownUnhealthyCallsResponse.AsObject>);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ShutdownUnhealthyCallsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ShutdownUnhealthyCallsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ShutdownUnhealthyCallsResponse.AsProtobufJSON;
}
export declare module ShutdownUnhealthyCallsResponse {
    /**
     * Standard JavaScript object representation for ShutdownUnhealthyCallsResponse
     */
    interface AsObject {
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for ShutdownUnhealthyCallsResponse
     */
    interface AsProtobufJSON {
        success?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetAudioFileRequest
 */
export declare class GetAudioFileRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAudioFileRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAudioFileRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAudioFileRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAudioFileRequest, _writer: BinaryWriter): void;
    private _bucketName?;
    private _objectName?;
    private _minioConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAudioFileRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAudioFileRequest.AsObject>);
    get bucketName(): string | undefined;
    set bucketName(value: string | undefined);
    get objectName(): string | undefined;
    set objectName(value: string | undefined);
    get minioConfig(): MinioConfig | undefined;
    set minioConfig(value: MinioConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAudioFileRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAudioFileRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAudioFileRequest.AsProtobufJSON;
}
export declare module GetAudioFileRequest {
    /**
     * Standard JavaScript object representation for GetAudioFileRequest
     */
    interface AsObject {
        bucketName?: string;
        objectName?: string;
        minioConfig?: MinioConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for GetAudioFileRequest
     */
    interface AsProtobufJSON {
        bucketName?: string;
        objectName?: string;
        minioConfig?: MinioConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetAudioFileResponse
 */
export declare class GetAudioFileResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAudioFileResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAudioFileResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAudioFileResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAudioFileResponse, _writer: BinaryWriter): void;
    private _audio?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAudioFileResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAudioFileResponse.AsObject>);
    get audio(): Uint8Array | undefined;
    set audio(value: Uint8Array | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAudioFileResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAudioFileResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAudioFileResponse.AsProtobufJSON;
}
export declare module GetAudioFileResponse {
    /**
     * Standard JavaScript object representation for GetAudioFileResponse
     */
    interface AsObject {
        audio?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for GetAudioFileResponse
     */
    interface AsProtobufJSON {
        audio?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetFullConversationAudioFileRequest
 */
export declare class GetFullConversationAudioFileRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetFullConversationAudioFileRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetFullConversationAudioFileRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetFullConversationAudioFileRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetFullConversationAudioFileRequest, _writer: BinaryWriter): void;
    private _bucketName?;
    private _objectNames?;
    private _minioConfig?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetFullConversationAudioFileRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetFullConversationAudioFileRequest.AsObject>);
    get bucketName(): string | undefined;
    set bucketName(value: string | undefined);
    get objectNames(): string[] | undefined;
    set objectNames(value: string[] | undefined);
    get minioConfig(): MinioConfig | undefined;
    set minioConfig(value: MinioConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetFullConversationAudioFileRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetFullConversationAudioFileRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetFullConversationAudioFileRequest.AsProtobufJSON;
}
export declare module GetFullConversationAudioFileRequest {
    /**
     * Standard JavaScript object representation for GetFullConversationAudioFileRequest
     */
    interface AsObject {
        bucketName?: string;
        objectNames?: string[];
        minioConfig?: MinioConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for GetFullConversationAudioFileRequest
     */
    interface AsProtobufJSON {
        bucketName?: string;
        objectNames?: string[];
        minioConfig?: MinioConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.GetFullConversationAudioFileResponse
 */
export declare class GetFullConversationAudioFileResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetFullConversationAudioFileResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetFullConversationAudioFileResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetFullConversationAudioFileResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetFullConversationAudioFileResponse, _writer: BinaryWriter): void;
    private _audio?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetFullConversationAudioFileResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetFullConversationAudioFileResponse.AsObject>);
    get audio(): Uint8Array | undefined;
    set audio(value: Uint8Array | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetFullConversationAudioFileResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetFullConversationAudioFileResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetFullConversationAudioFileResponse.AsProtobufJSON;
}
export declare module GetFullConversationAudioFileResponse {
    /**
     * Standard JavaScript object representation for GetFullConversationAudioFileResponse
     */
    interface AsObject {
        audio?: Uint8Array;
    }
    /**
     * Protobuf JSON representation for GetFullConversationAudioFileResponse
     */
    interface AsProtobufJSON {
        audio?: string;
    }
}
//# sourceMappingURL=voip.pb.d.ts.map