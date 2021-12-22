import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
export declare enum Pcm {
    PCM_16 = 0,
    PCM_24 = 1,
    PCM_32 = 2,
    PCM_S8 = 3,
    PCM_U8 = 4,
    FLOAT = 5,
    DOUBLE = 6
}
export declare enum AudioFormat {
    wav = 0,
    flac = 1,
    caf = 2,
    mp3 = 3,
    aac = 4,
    ogg = 5,
    wma = 6
}
export declare enum CTCDecoding {
    DEFAULT = 0,
    GREEDY = 1,
    BEAM_SEARCH_WITH_LM = 2
}
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
    get t2sConfig(): RequestConfig | undefined;
    set t2sConfig(value: RequestConfig | undefined);
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
        t2sConfig?: RequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for T2SConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
        t2sConfig?: RequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.RequestConfig
 */
export declare class RequestConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RequestConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RequestConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RequestConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RequestConfig, _writer: BinaryWriter): void;
    private _t2sPipelineId?;
    private _lengthScale?;
    private _noiseScale?;
    private _sampleRate?;
    private _pcm?;
    private _audioFormat?;
    private _useCache?;
    private _oneofLengthScale;
    private _oneofNoiseScale;
    private _oneofSampleRate;
    private _oneofPcm;
    private _oneofAudioFormat;
    private _oneofUseCache;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RequestConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<RequestConfig.AsObject>);
    get t2sPipelineId(): string | undefined;
    set t2sPipelineId(value: string | undefined);
    get lengthScale(): number | undefined;
    set lengthScale(value: number | undefined);
    get noiseScale(): number | undefined;
    set noiseScale(value: number | undefined);
    get sampleRate(): number | undefined;
    set sampleRate(value: number | undefined);
    get pcm(): Pcm | undefined;
    set pcm(value: Pcm | undefined);
    get audioFormat(): AudioFormat | undefined;
    set audioFormat(value: AudioFormat | undefined);
    get useCache(): boolean | undefined;
    set useCache(value: boolean | undefined);
    get oneofLengthScale(): RequestConfig.OneofLengthScaleCase;
    get oneofNoiseScale(): RequestConfig.OneofNoiseScaleCase;
    get oneofSampleRate(): RequestConfig.OneofSampleRateCase;
    get oneofPcm(): RequestConfig.OneofPcmCase;
    get oneofAudioFormat(): RequestConfig.OneofAudioFormatCase;
    get oneofUseCache(): RequestConfig.OneofUseCacheCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RequestConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RequestConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RequestConfig.AsProtobufJSON;
}
export declare module RequestConfig {
    /**
     * Standard JavaScript object representation for RequestConfig
     */
    interface AsObject {
        t2sPipelineId?: string;
        lengthScale?: number;
        noiseScale?: number;
        sampleRate?: number;
        pcm?: Pcm;
        audioFormat?: AudioFormat;
        useCache?: boolean;
    }
    /**
     * Protobuf JSON representation for RequestConfig
     */
    interface AsProtobufJSON {
        t2sPipelineId?: string;
        lengthScale?: number | null;
        noiseScale?: number | null;
        sampleRate?: number | null;
        pcm?: string | null;
        audioFormat?: string | null;
        useCache?: boolean;
    }
    enum OneofLengthScaleCase {
        none = 0,
        lengthScale = 1
    }
    enum OneofNoiseScaleCase {
        none = 0,
        noiseScale = 1
    }
    enum OneofSampleRateCase {
        none = 0,
        sampleRate = 1
    }
    enum OneofPcmCase {
        none = 0,
        pcm = 1
    }
    enum OneofAudioFormatCase {
        none = 0,
        audioFormat = 1
    }
    enum OneofUseCacheCase {
        none = 0,
        useCache = 1
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
    get s2tConfig(): TranscribeRequestConfig | undefined;
    set s2tConfig(value: TranscribeRequestConfig | undefined);
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
        s2tConfig?: TranscribeRequestConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for S2TConfig
     */
    interface AsProtobufJSON {
        baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
        s2tConfig?: TranscribeRequestConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.TranscribeRequestConfig
 */
export declare class TranscribeRequestConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscribeRequestConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscribeRequestConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscribeRequestConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscribeRequestConfig, _writer: BinaryWriter): void;
    private _s2tPipelineId?;
    private _ctcDecoding?;
    private _languageModelName?;
    private _postProcessing?;
    private _utteranceDetection?;
    private _pyannote?;
    private _matchbox?;
    private _returnOptions?;
    private _oneofLanguageModelName;
    private _oneofPostProcessing;
    private _oneofUtteranceDetection;
    private _voiceActivityDetection;
    private _oneofReturnOptions;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscribeRequestConfig.AsObject>);
    get s2tPipelineId(): string | undefined;
    set s2tPipelineId(value: string | undefined);
    get ctcDecoding(): CTCDecoding | undefined;
    set ctcDecoding(value: CTCDecoding | undefined);
    get languageModelName(): string | undefined;
    set languageModelName(value: string | undefined);
    get postProcessing(): PostProcessingOptions | undefined;
    set postProcessing(value: PostProcessingOptions | undefined);
    get utteranceDetection(): UtteranceDetectionOptions | undefined;
    set utteranceDetection(value: UtteranceDetectionOptions | undefined);
    get pyannote(): Pyannote | undefined;
    set pyannote(value: Pyannote | undefined);
    get matchbox(): Matchbox | undefined;
    set matchbox(value: Matchbox | undefined);
    get returnOptions(): TranscriptionReturnOptions | undefined;
    set returnOptions(value: TranscriptionReturnOptions | undefined);
    get oneofLanguageModelName(): TranscribeRequestConfig.OneofLanguageModelNameCase;
    get oneofPostProcessing(): TranscribeRequestConfig.OneofPostProcessingCase;
    get oneofUtteranceDetection(): TranscribeRequestConfig.OneofUtteranceDetectionCase;
    get voiceActivityDetection(): TranscribeRequestConfig.VoiceActivityDetectionCase;
    get oneofReturnOptions(): TranscribeRequestConfig.OneofReturnOptionsCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscribeRequestConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscribeRequestConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscribeRequestConfig.AsProtobufJSON;
}
export declare module TranscribeRequestConfig {
    /**
     * Standard JavaScript object representation for TranscribeRequestConfig
     */
    interface AsObject {
        s2tPipelineId?: string;
        ctcDecoding?: CTCDecoding;
        languageModelName?: string;
        postProcessing?: PostProcessingOptions.AsObject;
        utteranceDetection?: UtteranceDetectionOptions.AsObject;
        pyannote?: Pyannote.AsObject;
        matchbox?: Matchbox.AsObject;
        returnOptions?: TranscriptionReturnOptions.AsObject;
    }
    /**
     * Protobuf JSON representation for TranscribeRequestConfig
     */
    interface AsProtobufJSON {
        s2tPipelineId?: string;
        ctcDecoding?: string;
        languageModelName?: string | null;
        postProcessing?: PostProcessingOptions.AsProtobufJSON | null;
        utteranceDetection?: UtteranceDetectionOptions.AsProtobufJSON | null;
        pyannote?: Pyannote.AsProtobufJSON | null;
        matchbox?: Matchbox.AsProtobufJSON | null;
        returnOptions?: TranscriptionReturnOptions.AsProtobufJSON | null;
    }
    enum OneofLanguageModelNameCase {
        none = 0,
        languageModelName = 1
    }
    enum OneofPostProcessingCase {
        none = 0,
        postProcessing = 1
    }
    enum OneofUtteranceDetectionCase {
        none = 0,
        utteranceDetection = 1
    }
    enum VoiceActivityDetectionCase {
        none = 0,
        pyannote = 1,
        matchbox = 2
    }
    enum OneofReturnOptionsCase {
        none = 0,
        returnOptions = 1
    }
}
/**
 * Message implementation for ondewo.vtsi.Pyannote
 */
export declare class Pyannote implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Pyannote;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Pyannote): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Pyannote, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Pyannote, _writer: BinaryWriter): void;
    private _modelPath?;
    private _minAudioSize?;
    private _offset?;
    private _onset?;
    private _logScale?;
    private _minDurationOff?;
    private _minDurationOn?;
    private _oneofLogScale;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pyannote to deeply clone from
     */
    constructor(_value?: RecursivePartial<Pyannote.AsObject>);
    get modelPath(): string | undefined;
    set modelPath(value: string | undefined);
    get minAudioSize(): string | undefined;
    set minAudioSize(value: string | undefined);
    get offset(): number | undefined;
    set offset(value: number | undefined);
    get onset(): number | undefined;
    set onset(value: number | undefined);
    get logScale(): boolean | undefined;
    set logScale(value: boolean | undefined);
    get minDurationOff(): number | undefined;
    set minDurationOff(value: number | undefined);
    get minDurationOn(): number | undefined;
    set minDurationOn(value: number | undefined);
    get oneofLogScale(): Pyannote.OneofLogScaleCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Pyannote.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Pyannote.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Pyannote.AsProtobufJSON;
}
export declare module Pyannote {
    /**
     * Standard JavaScript object representation for Pyannote
     */
    interface AsObject {
        modelPath?: string;
        minAudioSize?: string;
        offset?: number;
        onset?: number;
        logScale?: boolean;
        minDurationOff?: number;
        minDurationOn?: number;
    }
    /**
     * Protobuf JSON representation for Pyannote
     */
    interface AsProtobufJSON {
        modelPath?: string;
        minAudioSize?: string;
        offset?: number;
        onset?: number;
        logScale?: boolean;
        minDurationOff?: number;
        minDurationOn?: number;
    }
    enum OneofLogScaleCase {
        none = 0,
        logScale = 1
    }
}
/**
 * Message implementation for ondewo.vtsi.Matchbox
 */
export declare class Matchbox implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Matchbox;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Matchbox): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Matchbox, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Matchbox, _writer: BinaryWriter): void;
    private _modelConfig?;
    private _encoderPath?;
    private _decoderPath?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Matchbox to deeply clone from
     */
    constructor(_value?: RecursivePartial<Matchbox.AsObject>);
    get modelConfig(): string | undefined;
    set modelConfig(value: string | undefined);
    get encoderPath(): string | undefined;
    set encoderPath(value: string | undefined);
    get decoderPath(): string | undefined;
    set decoderPath(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Matchbox.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Matchbox.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Matchbox.AsProtobufJSON;
}
export declare module Matchbox {
    /**
     * Standard JavaScript object representation for Matchbox
     */
    interface AsObject {
        modelConfig?: string;
        encoderPath?: string;
        decoderPath?: string;
    }
    /**
     * Protobuf JSON representation for Matchbox
     */
    interface AsProtobufJSON {
        modelConfig?: string;
        encoderPath?: string;
        decoderPath?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.PostProcessing
 */
export declare class PostProcessing implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessing;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessing): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessing, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessing, _writer: BinaryWriter): void;
    private _pipeline?;
    private _postProcessors?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessing to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessing.AsObject>);
    get pipeline(): string[] | undefined;
    set pipeline(value: string[] | undefined);
    get postProcessors(): PostProcessors | undefined;
    set postProcessors(value: PostProcessors | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessing.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessing.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessing.AsProtobufJSON;
}
export declare module PostProcessing {
    /**
     * Standard JavaScript object representation for PostProcessing
     */
    interface AsObject {
        pipeline?: string[];
        postProcessors?: PostProcessors.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessing
     */
    interface AsProtobufJSON {
        pipeline?: string[];
        postProcessors?: PostProcessors.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.PostProcessors
 */
export declare class PostProcessors implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessors;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessors): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessors, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessors, _writer: BinaryWriter): void;
    private _symSpell?;
    private _normalization?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessors to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessors.AsObject>);
    get symSpell(): SymSpell | undefined;
    set symSpell(value: SymSpell | undefined);
    get normalization(): Normalization | undefined;
    set normalization(value: Normalization | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessors.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessors.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessors.AsProtobufJSON;
}
export declare module PostProcessors {
    /**
     * Standard JavaScript object representation for PostProcessors
     */
    interface AsObject {
        symSpell?: SymSpell.AsObject;
        normalization?: Normalization.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessors
     */
    interface AsProtobufJSON {
        symSpell?: SymSpell.AsProtobufJSON | null;
        normalization?: Normalization.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.SymSpell
 */
export declare class SymSpell implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SymSpell;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SymSpell): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SymSpell, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SymSpell, _writer: BinaryWriter): void;
    private _dictPath?;
    private _maxDictionaryEditDistance?;
    private _prefixLength?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SymSpell to deeply clone from
     */
    constructor(_value?: RecursivePartial<SymSpell.AsObject>);
    get dictPath(): string | undefined;
    set dictPath(value: string | undefined);
    get maxDictionaryEditDistance(): string | undefined;
    set maxDictionaryEditDistance(value: string | undefined);
    get prefixLength(): string | undefined;
    set prefixLength(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SymSpell.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SymSpell.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SymSpell.AsProtobufJSON;
}
export declare module SymSpell {
    /**
     * Standard JavaScript object representation for SymSpell
     */
    interface AsObject {
        dictPath?: string;
        maxDictionaryEditDistance?: string;
        prefixLength?: string;
    }
    /**
     * Protobuf JSON representation for SymSpell
     */
    interface AsProtobufJSON {
        dictPath?: string;
        maxDictionaryEditDistance?: string;
        prefixLength?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.Normalization
 */
export declare class Normalization implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Normalization;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Normalization): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Normalization, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Normalization, _writer: BinaryWriter): void;
    private _language?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Normalization to deeply clone from
     */
    constructor(_value?: RecursivePartial<Normalization.AsObject>);
    get language(): string | undefined;
    set language(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Normalization.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Normalization.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Normalization.AsProtobufJSON;
}
export declare module Normalization {
    /**
     * Standard JavaScript object representation for Normalization
     */
    interface AsObject {
        language?: string;
    }
    /**
     * Protobuf JSON representation for Normalization
     */
    interface AsProtobufJSON {
        language?: string;
    }
}
/**
 * Message implementation for ondewo.vtsi.TranscriptionReturnOptions
 */
export declare class TranscriptionReturnOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): TranscriptionReturnOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: TranscriptionReturnOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: TranscriptionReturnOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: TranscriptionReturnOptions, _writer: BinaryWriter): void;
    private _returnStartOfSpeech?;
    private _returnAudio?;
    private _returnAlternativeTranscriptions?;
    private _returnConfidenceScore?;
    private _returnWordTiming?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<TranscriptionReturnOptions.AsObject>);
    get returnStartOfSpeech(): boolean | undefined;
    set returnStartOfSpeech(value: boolean | undefined);
    get returnAudio(): boolean | undefined;
    set returnAudio(value: boolean | undefined);
    get returnAlternativeTranscriptions(): boolean | undefined;
    set returnAlternativeTranscriptions(value: boolean | undefined);
    get returnConfidenceScore(): boolean | undefined;
    set returnConfidenceScore(value: boolean | undefined);
    get returnWordTiming(): boolean | undefined;
    set returnWordTiming(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): TranscriptionReturnOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): TranscriptionReturnOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): TranscriptionReturnOptions.AsProtobufJSON;
}
export declare module TranscriptionReturnOptions {
    /**
     * Standard JavaScript object representation for TranscriptionReturnOptions
     */
    interface AsObject {
        returnStartOfSpeech?: boolean;
        returnAudio?: boolean;
        returnAlternativeTranscriptions?: boolean;
        returnConfidenceScore?: boolean;
        returnWordTiming?: boolean;
    }
    /**
     * Protobuf JSON representation for TranscriptionReturnOptions
     */
    interface AsProtobufJSON {
        returnStartOfSpeech?: boolean;
        returnAudio?: boolean;
        returnAlternativeTranscriptions?: boolean;
        returnConfidenceScore?: boolean;
        returnWordTiming?: boolean;
    }
}
/**
 * Message implementation for ondewo.vtsi.UtteranceDetectionOptions
 */
export declare class UtteranceDetectionOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UtteranceDetectionOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UtteranceDetectionOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UtteranceDetectionOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UtteranceDetectionOptions, _writer: BinaryWriter): void;
    private _transcribeNotFinal?;
    private _startOfUtteranceThreshold?;
    private _endOfUtteranceThreshold?;
    private _nextChunkTimeout?;
    private _oneofTranscribeNotFinal;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<UtteranceDetectionOptions.AsObject>);
    get transcribeNotFinal(): boolean | undefined;
    set transcribeNotFinal(value: boolean | undefined);
    get startOfUtteranceThreshold(): number | undefined;
    set startOfUtteranceThreshold(value: number | undefined);
    get endOfUtteranceThreshold(): number | undefined;
    set endOfUtteranceThreshold(value: number | undefined);
    get nextChunkTimeout(): number | undefined;
    set nextChunkTimeout(value: number | undefined);
    get oneofTranscribeNotFinal(): UtteranceDetectionOptions.OneofTranscribeNotFinalCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UtteranceDetectionOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UtteranceDetectionOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UtteranceDetectionOptions.AsProtobufJSON;
}
export declare module UtteranceDetectionOptions {
    /**
     * Standard JavaScript object representation for UtteranceDetectionOptions
     */
    interface AsObject {
        transcribeNotFinal?: boolean;
        startOfUtteranceThreshold?: number;
        endOfUtteranceThreshold?: number;
        nextChunkTimeout?: number;
    }
    /**
     * Protobuf JSON representation for UtteranceDetectionOptions
     */
    interface AsProtobufJSON {
        transcribeNotFinal?: boolean;
        startOfUtteranceThreshold?: number;
        endOfUtteranceThreshold?: number;
        nextChunkTimeout?: number;
    }
    enum OneofTranscribeNotFinalCase {
        none = 0,
        transcribeNotFinal = 1
    }
}
/**
 * Message implementation for ondewo.vtsi.PostProcessingOptions
 */
export declare class PostProcessingOptions implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): PostProcessingOptions;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: PostProcessingOptions): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: PostProcessingOptions, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: PostProcessingOptions, _writer: BinaryWriter): void;
    private _spellingCorrection?;
    private _normalize?;
    private _config?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
     */
    constructor(_value?: RecursivePartial<PostProcessingOptions.AsObject>);
    get spellingCorrection(): boolean | undefined;
    set spellingCorrection(value: boolean | undefined);
    get normalize(): boolean | undefined;
    set normalize(value: boolean | undefined);
    get config(): PostProcessing | undefined;
    set config(value: PostProcessing | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): PostProcessingOptions.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): PostProcessingOptions.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): PostProcessingOptions.AsProtobufJSON;
}
export declare module PostProcessingOptions {
    /**
     * Standard JavaScript object representation for PostProcessingOptions
     */
    interface AsObject {
        spellingCorrection?: boolean;
        normalize?: boolean;
        config?: PostProcessing.AsObject;
    }
    /**
     * Protobuf JSON representation for PostProcessingOptions
     */
    interface AsProtobufJSON {
        spellingCorrection?: boolean;
        normalize?: boolean;
        config?: PostProcessing.AsProtobufJSON | null;
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
    }
    /**
     * Protobuf JSON representation for CommonServicesConfigs
     */
    interface AsProtobufJSON {
        asteriskConfig?: AsteriskConfig.AsProtobufJSON | null;
        caiConfig?: NLUConfig.AsProtobufJSON | null;
        sttConfig?: S2TConfig.AsProtobufJSON | null;
        ttsConfig?: T2SConfig.AsProtobufJSON | null;
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
