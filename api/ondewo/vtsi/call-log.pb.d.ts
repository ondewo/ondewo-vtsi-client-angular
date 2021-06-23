import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.GetCallIdsRequest
 */
export declare class GetCallIdsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallIdsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallIdsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallIdsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallIdsRequest, _writer: BinaryWriter): void;
    private _sipId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIdsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallIdsRequest.AsObject>);
    get sipId(): string | undefined;
    set sipId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetCallIdsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallIdsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallIdsRequest.AsProtobufJSON;
}
export declare module GetCallIdsRequest {
    /**
     * Standard JavaScript object representation for GetCallIdsRequest
     */
    interface AsObject {
        sipId?: string;
    }
    /**
     * Protobuf JSON representation for GetCallIdsRequest
     */
    interface AsProtobufJSON {
        sipId?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetCallIdsResponse
 */
export declare class GetCallIdsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetCallIdsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetCallIdsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetCallIdsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetCallIdsResponse, _writer: BinaryWriter): void;
    private _sipId?;
    private _callIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIdsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetCallIdsResponse.AsObject>);
    get sipId(): string | undefined;
    set sipId(value: string | undefined);
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
    toObject(): GetCallIdsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetCallIdsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetCallIdsResponse.AsProtobufJSON;
}
export declare module GetCallIdsResponse {
    /**
     * Standard JavaScript object representation for GetCallIdsResponse
     */
    interface AsObject {
        sipId?: string;
        callIds?: string[];
    }
    /**
     * Protobuf JSON representation for GetCallIdsResponse
     */
    interface AsProtobufJSON {
        sipId?: string;
        callIds?: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.StartVoipLogRequest
 */
export declare class StartVoipLogRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StartVoipLogRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StartVoipLogRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StartVoipLogRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StartVoipLogRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _startTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartVoipLogRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<StartVoipLogRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get startTime(): number | undefined;
    set startTime(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StartVoipLogRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StartVoipLogRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StartVoipLogRequest.AsProtobufJSON;
}
export declare module StartVoipLogRequest {
    /**
     * Standard JavaScript object representation for StartVoipLogRequest
     */
    interface AsObject {
        callId?: string;
        startTime?: number;
    }
    /**
     * Protobuf JSON representation for StartVoipLogRequest
     */
    interface AsProtobufJSON {
        callId?: string;
        startTime?: number;
    }
}
/**
 * Message implementation for ondewo.nlu.FinishVoipLogRequest
 */
export declare class FinishVoipLogRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): FinishVoipLogRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FinishVoipLogRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: FinishVoipLogRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: FinishVoipLogRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _endTime?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FinishVoipLogRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<FinishVoipLogRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get endTime(): number | undefined;
    set endTime(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FinishVoipLogRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): FinishVoipLogRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): FinishVoipLogRequest.AsProtobufJSON;
}
export declare module FinishVoipLogRequest {
    /**
     * Standard JavaScript object representation for FinishVoipLogRequest
     */
    interface AsObject {
        callId?: string;
        endTime?: number;
    }
    /**
     * Protobuf JSON representation for FinishVoipLogRequest
     */
    interface AsProtobufJSON {
        callId?: string;
        endTime?: number;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateVoipLogRequest
 */
export declare class UpdateVoipLogRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateVoipLogRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateVoipLogRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateVoipLogRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateVoipLogRequest, _writer: BinaryWriter): void;
    private _callId?;
    private _serviceName?;
    private _logMessage?;
    private _counters?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateVoipLogRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateVoipLogRequest.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get serviceName(): string | undefined;
    set serviceName(value: string | undefined);
    get logMessage(): string | undefined;
    set logMessage(value: string | undefined);
    get counters(): Counters | undefined;
    set counters(value: Counters | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateVoipLogRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateVoipLogRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateVoipLogRequest.AsProtobufJSON;
}
export declare module UpdateVoipLogRequest {
    /**
     * Standard JavaScript object representation for UpdateVoipLogRequest
     */
    interface AsObject {
        callId?: string;
        serviceName?: string;
        logMessage?: string;
        counters?: Counters.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateVoipLogRequest
     */
    interface AsProtobufJSON {
        callId?: string;
        serviceName?: string;
        logMessage?: string;
        counters?: Counters.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.VoipLogResponse
 */
export declare class VoipLogResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipLogResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipLogResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipLogResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipLogResponse, _writer: BinaryWriter): void;
    private _success?;
    private _logMessage?;
    private _duration?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipLogResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipLogResponse.AsObject>);
    get success(): boolean | undefined;
    set success(value: boolean | undefined);
    get logMessage(): string | undefined;
    set logMessage(value: string | undefined);
    get duration(): number | undefined;
    set duration(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoipLogResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipLogResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipLogResponse.AsProtobufJSON;
}
export declare module VoipLogResponse {
    /**
     * Standard JavaScript object representation for VoipLogResponse
     */
    interface AsObject {
        success?: boolean;
        logMessage?: string;
        duration?: number;
    }
    /**
     * Protobuf JSON representation for VoipLogResponse
     */
    interface AsProtobufJSON {
        success?: boolean;
        logMessage?: string;
        duration?: number;
    }
}
/**
 * Message implementation for ondewo.nlu.GetVoipLogRequest
 */
export declare class GetVoipLogRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetVoipLogRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetVoipLogRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetVoipLogRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetVoipLogRequest, _writer: BinaryWriter): void;
    private _callId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipLogRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetVoipLogRequest.AsObject>);
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
    toObject(): GetVoipLogRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetVoipLogRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetVoipLogRequest.AsProtobufJSON;
}
export declare module GetVoipLogRequest {
    /**
     * Standard JavaScript object representation for GetVoipLogRequest
     */
    interface AsObject {
        callId?: string;
    }
    /**
     * Protobuf JSON representation for GetVoipLogRequest
     */
    interface AsProtobufJSON {
        callId?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetVoipLogResponse
 */
export declare class GetVoipLogResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetVoipLogResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetVoipLogResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetVoipLogResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetVoipLogResponse, _writer: BinaryWriter): void;
    private _activeLog?;
    private _doneLogs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipLogResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetVoipLogResponse.AsObject>);
    get activeLog(): VoipLog | undefined;
    set activeLog(value: VoipLog | undefined);
    get doneLogs(): VoipLog[] | undefined;
    set doneLogs(value: VoipLog[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetVoipLogResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetVoipLogResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetVoipLogResponse.AsProtobufJSON;
}
export declare module GetVoipLogResponse {
    /**
     * Standard JavaScript object representation for GetVoipLogResponse
     */
    interface AsObject {
        activeLog?: VoipLog.AsObject;
        doneLogs?: VoipLog.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetVoipLogResponse
     */
    interface AsProtobufJSON {
        activeLog?: VoipLog.AsProtobufJSON | null;
        doneLogs?: VoipLog.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.VoipLog
 */
export declare class VoipLog implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): VoipLog;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: VoipLog): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: VoipLog, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: VoipLog, _writer: BinaryWriter): void;
    private _callId?;
    private _startTime?;
    private _endTime?;
    private _logs?;
    private _counters?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipLog to deeply clone from
     */
    constructor(_value?: RecursivePartial<VoipLog.AsObject>);
    get callId(): string | undefined;
    set callId(value: string | undefined);
    get startTime(): number | undefined;
    set startTime(value: number | undefined);
    get endTime(): number | undefined;
    set endTime(value: number | undefined);
    get logs(): LogEntry[] | undefined;
    set logs(value: LogEntry[] | undefined);
    get counters(): Counters | undefined;
    set counters(value: Counters | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): VoipLog.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): VoipLog.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): VoipLog.AsProtobufJSON;
}
export declare module VoipLog {
    /**
     * Standard JavaScript object representation for VoipLog
     */
    interface AsObject {
        callId?: string;
        startTime?: number;
        endTime?: number;
        logs?: LogEntry.AsObject[];
        counters?: Counters.AsObject;
    }
    /**
     * Protobuf JSON representation for VoipLog
     */
    interface AsProtobufJSON {
        callId?: string;
        startTime?: number;
        endTime?: number;
        logs?: LogEntry.AsProtobufJSON[] | null;
        counters?: Counters.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.Counters
 */
export declare class Counters implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Counters;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Counters): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Counters, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Counters, _writer: BinaryWriter): void;
    private _fifteenSCounter?;
    private _sixtySCounter?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Counters to deeply clone from
     */
    constructor(_value?: RecursivePartial<Counters.AsObject>);
    get fifteenSCounter(): string | undefined;
    set fifteenSCounter(value: string | undefined);
    get sixtySCounter(): string | undefined;
    set sixtySCounter(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Counters.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Counters.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Counters.AsProtobufJSON;
}
export declare module Counters {
    /**
     * Standard JavaScript object representation for Counters
     */
    interface AsObject {
        fifteenSCounter?: string;
        sixtySCounter?: string;
    }
    /**
     * Protobuf JSON representation for Counters
     */
    interface AsProtobufJSON {
        fifteenSCounter?: string;
        sixtySCounter?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.LogEntry
 */
export declare class LogEntry implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LogEntry;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LogEntry): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LogEntry, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LogEntry, _writer: BinaryWriter): void;
    private _timestamp?;
    private _serviceName?;
    private _logMessage?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LogEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LogEntry.AsObject>);
    get timestamp(): number | undefined;
    set timestamp(value: number | undefined);
    get serviceName(): string | undefined;
    set serviceName(value: string | undefined);
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
    toObject(): LogEntry.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LogEntry.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LogEntry.AsProtobufJSON;
}
export declare module LogEntry {
    /**
     * Standard JavaScript object representation for LogEntry
     */
    interface AsObject {
        timestamp?: number;
        serviceName?: string;
        logMessage?: string;
    }
    /**
     * Protobuf JSON representation for LogEntry
     */
    interface AsProtobufJSON {
        timestamp?: number;
        serviceName?: string;
        logMessage?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetManifestVoipLogRequest
 */
export declare class GetManifestVoipLogRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetManifestVoipLogRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetManifestVoipLogRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetManifestVoipLogRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetManifestVoipLogRequest, _writer: BinaryWriter): void;
    private _manifestId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestVoipLogRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetManifestVoipLogRequest.AsObject>);
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
    toObject(): GetManifestVoipLogRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetManifestVoipLogRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetManifestVoipLogRequest.AsProtobufJSON;
}
export declare module GetManifestVoipLogRequest {
    /**
     * Standard JavaScript object representation for GetManifestVoipLogRequest
     */
    interface AsObject {
        manifestId?: string;
    }
    /**
     * Protobuf JSON representation for GetManifestVoipLogRequest
     */
    interface AsProtobufJSON {
        manifestId?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ManifestVoipLog
 */
export declare class ManifestVoipLog implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ManifestVoipLog;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ManifestVoipLog): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ManifestVoipLog, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ManifestVoipLog, _writer: BinaryWriter): void;
    private _callerLogs?;
    private _listenerLogs?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ManifestVoipLog to deeply clone from
     */
    constructor(_value?: RecursivePartial<ManifestVoipLog.AsObject>);
    get callerLogs(): GetVoipLogResponse[] | undefined;
    set callerLogs(value: GetVoipLogResponse[] | undefined);
    get listenerLogs(): GetVoipLogResponse[] | undefined;
    set listenerLogs(value: GetVoipLogResponse[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ManifestVoipLog.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ManifestVoipLog.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ManifestVoipLog.AsProtobufJSON;
}
export declare module ManifestVoipLog {
    /**
     * Standard JavaScript object representation for ManifestVoipLog
     */
    interface AsObject {
        callerLogs?: GetVoipLogResponse.AsObject[];
        listenerLogs?: GetVoipLogResponse.AsObject[];
    }
    /**
     * Protobuf JSON representation for ManifestVoipLog
     */
    interface AsProtobufJSON {
        callerLogs?: GetVoipLogResponse.AsProtobufJSON[] | null;
        listenerLogs?: GetVoipLogResponse.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.SaveCallLogsRequest
 */
export declare class SaveCallLogsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveCallLogsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveCallLogsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveCallLogsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveCallLogsRequest, _writer: BinaryWriter): void;
    private _empty?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveCallLogsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveCallLogsRequest.AsObject>);
    get empty(): googleProtobuf002.Empty | undefined;
    set empty(value: googleProtobuf002.Empty | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SaveCallLogsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveCallLogsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveCallLogsRequest.AsProtobufJSON;
}
export declare module SaveCallLogsRequest {
    /**
     * Standard JavaScript object representation for SaveCallLogsRequest
     */
    interface AsObject {
        empty?: googleProtobuf002.Empty.AsObject;
    }
    /**
     * Protobuf JSON representation for SaveCallLogsRequest
     */
    interface AsProtobufJSON {
        empty?: googleProtobuf002.Empty.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.SaveCallLogsResponse
 */
export declare class SaveCallLogsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): SaveCallLogsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SaveCallLogsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: SaveCallLogsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: SaveCallLogsResponse, _writer: BinaryWriter): void;
    private _success?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveCallLogsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<SaveCallLogsResponse.AsObject>);
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
    toObject(): SaveCallLogsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): SaveCallLogsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): SaveCallLogsResponse.AsProtobufJSON;
}
export declare module SaveCallLogsResponse {
    /**
     * Standard JavaScript object representation for SaveCallLogsResponse
     */
    interface AsObject {
        success?: boolean;
    }
    /**
     * Protobuf JSON representation for SaveCallLogsResponse
     */
    interface AsProtobufJSON {
        success?: boolean;
    }
}
