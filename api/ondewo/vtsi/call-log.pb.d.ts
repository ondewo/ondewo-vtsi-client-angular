import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoSip004 from '../../ondewo/sip/sip.pb';
/**
 * Message implementation for ondewo.vtsi.GetCallIdsRequest
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
 * Message implementation for ondewo.vtsi.GetCallIdsResponse
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
 * Message implementation for ondewo.vtsi.GetVoipLogRequest
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
 * Message implementation for ondewo.vtsi.GetVoipLogResponse
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
 * Message implementation for ondewo.vtsi.VoipLog
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
    private _statusHistory?;
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
    get statusHistory(): ondewoSip004.SipStatus[] | undefined;
    set statusHistory(value: ondewoSip004.SipStatus[] | undefined);
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
        statusHistory?: ondewoSip004.SipStatus.AsObject[];
        counters?: Counters.AsObject;
    }
    /**
     * Protobuf JSON representation for VoipLog
     */
    interface AsProtobufJSON {
        callId?: string;
        startTime?: number;
        endTime?: number;
        statusHistory?: ondewoSip004.SipStatus.AsProtobufJSON[] | null;
        counters?: Counters.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.vtsi.Counters
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
 * Message implementation for ondewo.vtsi.SaveCallLogsResponse
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
