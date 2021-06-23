import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.VoipManifest
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
 * Message implementation for ondewo.nlu.ManifestRequest
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
 * Message implementation for ondewo.nlu.RunManifestResponse
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
 * Message implementation for ondewo.nlu.RemoveManifestResponse
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
 * Message implementation for ondewo.nlu.ServiceConfig
 */
export declare class ServiceConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ServiceConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ServiceConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ServiceConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ServiceConfig, _writer: BinaryWriter): void;
    private _host?;
    private _port?;
    private _serviceIdentifier?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<ServiceConfig.AsObject>);
    get host(): string | undefined;
    set host(value: string | undefined);
    get port(): number | undefined;
    set port(value: number | undefined);
    get serviceIdentifier(): string | undefined;
    set serviceIdentifier(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ServiceConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ServiceConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ServiceConfig.AsProtobufJSON;
}
export declare module ServiceConfig {
    /**
     * Standard JavaScript object representation for ServiceConfig
     */
    interface AsObject {
        host?: string;
        port?: number;
        serviceIdentifier?: string;
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for ServiceConfig
     */
    interface AsProtobufJSON {
        host?: string;
        port?: number;
        serviceIdentifier?: string;
        languageCode?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.VoipManifestResponse
 */
export declare class VoipManifestResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipManifestResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipManifestResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipManifestResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipManifestResponse, _writer: BinaryWriter): void;
    private _request?;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipManifestResponse.AsObject>);
    get request(): VoipManifest | undefined;
    set request(value: VoipManifest | undefined);
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
    toObject(): VoipManifestResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipManifestResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipManifestResponse.AsProtobufJSON;
}
export declare module VoipManifestResponse {
    /**
     * Standard JavaScript object representation for VoipManifestResponse
     */
    interface AsObject {
        request?: VoipManifest.AsObject;
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for VoipManifestResponse
     */
    interface AsProtobufJSON {
        request?: VoipManifest.AsProtobufJSON | null;
        success?: boolean;
    }
}
/**
 * Message implementation for ondewo.nlu.StartCallInstanceRequest
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
    private _callId?;
    private _sipSimVersion?;
    private _projectId?;
    private _phoneNumber?;
    private _contexts?;
    private _initText?;
    private _asteriskConfig?;
    private _caiConfig?;
    private _sttConfig?;
    private _demuxConfig?;
    private _ttsConfig?;
    private _sipPrefix?;
    private _sipName?;
    private _passwordDictionary?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallInstanceRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartCallInstanceRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get sipSimVersion(): string | undefined;
    set sipSimVersion(value: string | undefined);
    get projectId(): string | undefined;
    set projectId(value: string | undefined);
    get phoneNumber(): string | undefined;
    set phoneNumber(value: string | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    get initText(): string | undefined;
    set initText(value: string | undefined);
    get asteriskConfig(): ServiceConfig | undefined;
    set asteriskConfig(value: ServiceConfig | undefined);
    get caiConfig(): ServiceConfig | undefined;
    set caiConfig(value: ServiceConfig | undefined);
    get sttConfig(): ServiceConfig | undefined;
    set sttConfig(value: ServiceConfig | undefined);
    get demuxConfig(): ServiceConfig | undefined;
    set demuxConfig(value: ServiceConfig | undefined);
    get ttsConfig(): ServiceConfig | undefined;
    set ttsConfig(value: ServiceConfig | undefined);
    get sipPrefix(): string | undefined;
    set sipPrefix(value: string | undefined);
    get sipName(): string | undefined;
    set sipName(value: string | undefined);
    get passwordDictionary(): googleProtobuf006.Struct | undefined;
    set passwordDictionary(value: googleProtobuf006.Struct | undefined);
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
        callId?: string;
        sipSimVersion?: string;
        projectId?: string;
        phoneNumber?: string;
        contexts?: ondewoNlu005.Context.AsObject[];
        initText?: string;
        asteriskConfig?: ServiceConfig.AsObject;
        caiConfig?: ServiceConfig.AsObject;
        sttConfig?: ServiceConfig.AsObject;
        demuxConfig?: ServiceConfig.AsObject;
        ttsConfig?: ServiceConfig.AsObject;
        sipPrefix?: string;
        sipName?: string;
        passwordDictionary?: googleProtobuf006.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for StartCallInstanceRequest
     */
    interface AsProtobufJSON {
        callId?: string;
        sipSimVersion?: string;
        projectId?: string;
        phoneNumber?: string;
        contexts?: ondewoNlu005.Context.AsProtobufJSON[] | null;
        initText?: string;
        asteriskConfig?: ServiceConfig.AsProtobufJSON | null;
        caiConfig?: ServiceConfig.AsProtobufJSON | null;
        sttConfig?: ServiceConfig.AsProtobufJSON | null;
        demuxConfig?: ServiceConfig.AsProtobufJSON | null;
        ttsConfig?: ServiceConfig.AsProtobufJSON | null;
        sipPrefix?: string;
        sipName?: string;
        passwordDictionary?: googleProtobuf006.Struct.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.StartCallInstanceResponse
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
 * Message implementation for ondewo.nlu.StopCallInstanceRequest
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
 * Message implementation for ondewo.nlu.StopCallInstanceResponse
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
 * Message implementation for ondewo.nlu.VoipManifestStatusRequest
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
 * Message implementation for ondewo.nlu.VoipManifestStatus
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
 * Message implementation for ondewo.nlu.GetVoipStatusRequest
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
 * Message implementation for ondewo.nlu.VoipStatus
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
 * Message implementation for ondewo.nlu.ServiceStatus
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
 * Message implementation for ondewo.nlu.UpdateServicesStatusRequest
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
 * Message implementation for ondewo.nlu.UpdateServicesStatusResponse
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
 * Message implementation for ondewo.nlu.DeployPreconditionRequest
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
    get asteriskConfig(): ServiceConfig | undefined;
    set asteriskConfig(value: ServiceConfig | undefined);
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
        asteriskConfig?: ServiceConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for DeployPreconditionRequest
     */
    interface AsProtobufJSON {
        sipSimVersion?: string;
        asteriskConfig?: ServiceConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.DeployPreconditionResponse
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
 * Message implementation for ondewo.nlu.GetManifestIDsRequest
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
 * Message implementation for ondewo.nlu.GetManifestIDsResponse
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
 * Message implementation for ondewo.nlu.GetCallIDsRequest
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
 * Message implementation for ondewo.nlu.GetCallIDsResponse
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
 * Message implementation for ondewo.nlu.GetSessionIDRequest
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
 * Message implementation for ondewo.nlu.GetSessionIDResponse
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
 * Message implementation for ondewo.nlu.ShutdownUnhealthyCallsRequest
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
 * Message implementation for ondewo.nlu.ShutdownUnhealthyCallsResponse
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
