import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as ondewoS2t008 from '../../ondewo/s2t/speech-to-text.pb';
import * as ondewoT2s009 from '../../ondewo/t2s/text-to-speech.pb';
import * as ondewoSip010 from '../../ondewo/sip/sip.pb';
export declare enum VoipCallInfoView {
	Info_VIEW_SHALLOW = 0,
	Info_VIEW_FULL = 1
}
export declare enum CallType {
	both = 0,
	listener = 1,
	caller = 2
}
/**
 * Message implementation for ondewo.vtsi.ProjectConfigs
 */
export declare class ProjectConfigs implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ProjectConfigs;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ProjectConfigs): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ProjectConfigs, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ProjectConfigs, _writer: BinaryWriter): void;
	private _maxCallers?;
	private _maxListeners?;
	private _asteriskConfigs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ProjectConfigs to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ProjectConfigs.AsObject>);
	get maxCallers(): number | undefined;
	set maxCallers(value: number | undefined);
	get maxListeners(): number | undefined;
	set maxListeners(value: number | undefined);
	get asteriskConfigs(): AsteriskConfigs | undefined;
	set asteriskConfigs(value: AsteriskConfigs | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ProjectConfigs.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ProjectConfigs.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ProjectConfigs.AsProtobufJSON;
}
export declare module ProjectConfigs {
	/**
	 * Standard JavaScript object representation for ProjectConfigs
	 */
	interface AsObject {
		maxCallers?: number;
		maxListeners?: number;
		asteriskConfigs?: AsteriskConfigs.AsObject;
	}
	/**
	 * Protobuf JSON representation for ProjectConfigs
	 */
	interface AsProtobufJSON {
		maxCallers?: number;
		maxListeners?: number;
		asteriskConfigs?: AsteriskConfigs.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.AsteriskConfigsVariables
 */
export declare class AsteriskConfigsVariables implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AsteriskConfigsVariables;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AsteriskConfigsVariables): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AsteriskConfigsVariables, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AsteriskConfigsVariables, _writer: BinaryWriter): void;
	private _sipTrunkUsername?;
	private _sipTrunkPassword?;
	private _sipTrunkHost?;
	private _transferNumber?;
	private _transferNumberHost?;
	private _sipTrunkPhoneNumber?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AsteriskConfigsVariables to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AsteriskConfigsVariables.AsObject>);
	get sipTrunkUsername(): string | undefined;
	set sipTrunkUsername(value: string | undefined);
	get sipTrunkPassword(): string | undefined;
	set sipTrunkPassword(value: string | undefined);
	get sipTrunkHost(): string | undefined;
	set sipTrunkHost(value: string | undefined);
	get transferNumber(): string | undefined;
	set transferNumber(value: string | undefined);
	get transferNumberHost(): string | undefined;
	set transferNumberHost(value: string | undefined);
	get sipTrunkPhoneNumber(): string | undefined;
	set sipTrunkPhoneNumber(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AsteriskConfigsVariables.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AsteriskConfigsVariables.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AsteriskConfigsVariables.AsProtobufJSON;
}
export declare module AsteriskConfigsVariables {
	/**
	 * Standard JavaScript object representation for AsteriskConfigsVariables
	 */
	interface AsObject {
		sipTrunkUsername?: string;
		sipTrunkPassword?: string;
		sipTrunkHost?: string;
		transferNumber?: string;
		transferNumberHost?: string;
		sipTrunkPhoneNumber?: string;
	}
	/**
	 * Protobuf JSON representation for AsteriskConfigsVariables
	 */
	interface AsProtobufJSON {
		sipTrunkUsername?: string;
		sipTrunkPassword?: string;
		sipTrunkHost?: string;
		transferNumber?: string;
		transferNumberHost?: string;
		sipTrunkPhoneNumber?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.AsteriskConfigsFiles
 */
export declare class AsteriskConfigsFiles implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AsteriskConfigsFiles;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AsteriskConfigsFiles): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AsteriskConfigsFiles, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AsteriskConfigsFiles, _writer: BinaryWriter): void;
	private _sipConfFileString?;
	private _extensionsConfFileString?;
	private _queuesConfFileString?;
	private _modulesConfFileString?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AsteriskConfigsFiles to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AsteriskConfigsFiles.AsObject>);
	get sipConfFileString(): string | undefined;
	set sipConfFileString(value: string | undefined);
	get extensionsConfFileString(): string | undefined;
	set extensionsConfFileString(value: string | undefined);
	get queuesConfFileString(): string | undefined;
	set queuesConfFileString(value: string | undefined);
	get modulesConfFileString(): string | undefined;
	set modulesConfFileString(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AsteriskConfigsFiles.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AsteriskConfigsFiles.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AsteriskConfigsFiles.AsProtobufJSON;
}
export declare module AsteriskConfigsFiles {
	/**
	 * Standard JavaScript object representation for AsteriskConfigsFiles
	 */
	interface AsObject {
		sipConfFileString?: string;
		extensionsConfFileString?: string;
		queuesConfFileString?: string;
		modulesConfFileString?: string;
	}
	/**
	 * Protobuf JSON representation for AsteriskConfigsFiles
	 */
	interface AsProtobufJSON {
		sipConfFileString?: string;
		extensionsConfFileString?: string;
		queuesConfFileString?: string;
		modulesConfFileString?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.AsteriskConfigs
 */
export declare class AsteriskConfigs implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): AsteriskConfigs;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: AsteriskConfigs): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: AsteriskConfigs, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AsteriskConfigs, _writer: BinaryWriter): void;
	private _asteriskConfigsVariables?;
	private _asteriskConfigsFiles?;
	private _asteriskConfigsTargetDirectoryName?;
	private _asteriskPort?;
	private _asteriskConfigsOneof;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AsteriskConfigs to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AsteriskConfigs.AsObject>);
	get asteriskConfigsVariables(): AsteriskConfigsVariables | undefined;
	set asteriskConfigsVariables(value: AsteriskConfigsVariables | undefined);
	get asteriskConfigsFiles(): AsteriskConfigsFiles | undefined;
	set asteriskConfigsFiles(value: AsteriskConfigsFiles | undefined);
	get asteriskConfigsTargetDirectoryName(): string | undefined;
	set asteriskConfigsTargetDirectoryName(value: string | undefined);
	get asteriskPort(): number | undefined;
	set asteriskPort(value: number | undefined);
	get asteriskConfigsOneof(): AsteriskConfigs.AsteriskConfigsOneofCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): AsteriskConfigs.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): AsteriskConfigs.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): AsteriskConfigs.AsProtobufJSON;
}
export declare module AsteriskConfigs {
	/**
	 * Standard JavaScript object representation for AsteriskConfigs
	 */
	interface AsObject {
		asteriskConfigsVariables?: AsteriskConfigsVariables.AsObject;
		asteriskConfigsFiles?: AsteriskConfigsFiles.AsObject;
		asteriskConfigsTargetDirectoryName?: string;
		asteriskPort?: number;
	}
	/**
	 * Protobuf JSON representation for AsteriskConfigs
	 */
	interface AsProtobufJSON {
		asteriskConfigsVariables?: AsteriskConfigsVariables.AsProtobufJSON | null;
		asteriskConfigsFiles?: AsteriskConfigsFiles.AsProtobufJSON | null;
		asteriskConfigsTargetDirectoryName?: string | null;
		asteriskPort?: number;
	}
	enum AsteriskConfigsOneofCase {
		none = 0,
		asteriskConfigsVariables = 1,
		asteriskConfigsFiles = 2,
		asteriskConfigsTargetDirectoryName = 3
	}
}
/**
 * Message implementation for ondewo.vtsi.CreateProjectConfigsRequest
 */
export declare class CreateProjectConfigsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateProjectConfigsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateProjectConfigsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateProjectConfigsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateProjectConfigsRequest, _writer: BinaryWriter): void;
	private _projectId?;
	private _projectConfigs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateProjectConfigsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateProjectConfigsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get projectConfigs(): ProjectConfigs | undefined;
	set projectConfigs(value: ProjectConfigs | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateProjectConfigsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateProjectConfigsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateProjectConfigsRequest.AsProtobufJSON;
}
export declare module CreateProjectConfigsRequest {
	/**
	 * Standard JavaScript object representation for CreateProjectConfigsRequest
	 */
	interface AsObject {
		projectId?: string;
		projectConfigs?: ProjectConfigs.AsObject;
	}
	/**
	 * Protobuf JSON representation for CreateProjectConfigsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		projectConfigs?: ProjectConfigs.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.GetProjectConfigsRequest
 */
export declare class GetProjectConfigsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetProjectConfigsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetProjectConfigsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetProjectConfigsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetProjectConfigsRequest, _writer: BinaryWriter): void;
	private _projectId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetProjectConfigsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetProjectConfigsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetProjectConfigsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetProjectConfigsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectConfigsRequest.AsProtobufJSON;
}
export declare module GetProjectConfigsRequest {
	/**
	 * Standard JavaScript object representation for GetProjectConfigsRequest
	 */
	interface AsObject {
		projectId?: string;
	}
	/**
	 * Protobuf JSON representation for GetProjectConfigsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.GetProjectConfigsResponse
 */
export declare class GetProjectConfigsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetProjectConfigsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetProjectConfigsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetProjectConfigsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetProjectConfigsResponse, _writer: BinaryWriter): void;
	private _projectConfigs?;
	private _errorMessages?;
	private _request?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetProjectConfigsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetProjectConfigsResponse.AsObject>);
	get projectConfigs(): ProjectConfigs | undefined;
	set projectConfigs(value: ProjectConfigs | undefined);
	get errorMessages(): string | undefined;
	set errorMessages(value: string | undefined);
	get request(): GetProjectConfigsRequest | undefined;
	set request(value: GetProjectConfigsRequest | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetProjectConfigsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetProjectConfigsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectConfigsResponse.AsProtobufJSON;
}
export declare module GetProjectConfigsResponse {
	/**
	 * Standard JavaScript object representation for GetProjectConfigsResponse
	 */
	interface AsObject {
		projectConfigs?: ProjectConfigs.AsObject;
		errorMessages?: string;
		request?: GetProjectConfigsRequest.AsObject;
	}
	/**
	 * Protobuf JSON representation for GetProjectConfigsResponse
	 */
	interface AsProtobufJSON {
		projectConfigs?: ProjectConfigs.AsProtobufJSON | null;
		errorMessages?: string;
		request?: GetProjectConfigsRequest.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.UpdateProjectConfigsRequest
 */
export declare class UpdateProjectConfigsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateProjectConfigsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateProjectConfigsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateProjectConfigsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateProjectConfigsRequest, _writer: BinaryWriter): void;
	private _projectId?;
	private _projectConfigs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateProjectConfigsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateProjectConfigsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get projectConfigs(): ProjectConfigs | undefined;
	set projectConfigs(value: ProjectConfigs | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateProjectConfigsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateProjectConfigsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateProjectConfigsRequest.AsProtobufJSON;
}
export declare module UpdateProjectConfigsRequest {
	/**
	 * Standard JavaScript object representation for UpdateProjectConfigsRequest
	 */
	interface AsObject {
		projectId?: string;
		projectConfigs?: ProjectConfigs.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateProjectConfigsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		projectConfigs?: ProjectConfigs.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeleteProjectConfigsRequest
 */
export declare class DeleteProjectConfigsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteProjectConfigsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteProjectConfigsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteProjectConfigsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteProjectConfigsRequest, _writer: BinaryWriter): void;
	private _projectId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteProjectConfigsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteProjectConfigsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteProjectConfigsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteProjectConfigsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteProjectConfigsRequest.AsProtobufJSON;
}
export declare module DeleteProjectConfigsRequest {
	/**
	 * Standard JavaScript object representation for DeleteProjectConfigsRequest
	 */
	interface AsObject {
		projectId?: string;
	}
	/**
	 * Protobuf JSON representation for DeleteProjectConfigsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeployProjectRequest
 */
export declare class DeployProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeployProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeployProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeployProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeployProjectRequest, _writer: BinaryWriter): void;
	private _projectId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeployProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeployProjectRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeployProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeployProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeployProjectRequest.AsProtobufJSON;
}
export declare module DeployProjectRequest {
	/**
	 * Standard JavaScript object representation for DeployProjectRequest
	 */
	interface AsObject {
		projectId?: string;
	}
	/**
	 * Protobuf JSON representation for DeployProjectRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.UndeployProjectRequest
 */
export declare class UndeployProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UndeployProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UndeployProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UndeployProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UndeployProjectRequest, _writer: BinaryWriter): void;
	private _projectId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UndeployProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UndeployProjectRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UndeployProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UndeployProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UndeployProjectRequest.AsProtobufJSON;
}
export declare module UndeployProjectRequest {
	/**
	 * Standard JavaScript object representation for UndeployProjectRequest
	 */
	interface AsObject {
		projectId?: string;
	}
	/**
	 * Protobuf JSON representation for UndeployProjectRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
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
	get initialIntent(): string | undefined;
	set initialIntent(value: string | undefined);
	get contexts(): ondewoNlu006.Context[] | undefined;
	set contexts(value: ondewoNlu006.Context[] | undefined);
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
		initialIntent?: string;
		contexts?: ondewoNlu006.Context.AsObject[];
	}
	/**
	 * Protobuf JSON representation for NLUConfig
	 */
	interface AsProtobufJSON {
		baseConfig?: BaseServiceConfig.AsProtobufJSON | null;
		credentials?: Credentials.AsProtobufJSON | null;
		authToken?: string | null;
		languageCode?: string;
		initialIntent?: string;
		contexts?: ondewoNlu006.Context.AsProtobufJSON[] | null;
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
 * Message implementation for ondewo.vtsi.SIPBaseConfig
 */
export declare class SIPBaseConfig implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SIPBaseConfig;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SIPBaseConfig): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SIPBaseConfig, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SIPBaseConfig, _writer: BinaryWriter): void;
	private _sipSimVersion?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SIPBaseConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SIPBaseConfig.AsObject>);
	get sipSimVersion(): string | undefined;
	set sipSimVersion(value: string | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SIPBaseConfig.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SIPBaseConfig.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SIPBaseConfig.AsProtobufJSON;
}
export declare module SIPBaseConfig {
	/**
	 * Standard JavaScript object representation for SIPBaseConfig
	 */
	interface AsObject {
		sipSimVersion?: string;
	}
	/**
	 * Protobuf JSON representation for SIPBaseConfig
	 */
	interface AsProtobufJSON {
		sipSimVersion?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.SIPCallerConfig
 */
export declare class SIPCallerConfig implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): SIPCallerConfig;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: SIPCallerConfig): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: SIPCallerConfig, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: SIPCallerConfig, _writer: BinaryWriter): void;
	private _sipBaseConfig?;
	private _phoneNumber?;
	private _headers?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SIPCallerConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<SIPCallerConfig.AsObject>);
	get sipBaseConfig(): SIPBaseConfig | undefined;
	set sipBaseConfig(value: SIPBaseConfig | undefined);
	get phoneNumber(): string | undefined;
	set phoneNumber(value: string | undefined);
	get headers():
		| {
				[prop: string]: string;
		  }
		| undefined;
	set headers(
		value:
			| {
					[prop: string]: string;
			  }
			| undefined
	);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): SIPCallerConfig.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): SIPCallerConfig.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): SIPCallerConfig.AsProtobufJSON;
}
export declare module SIPCallerConfig {
	/**
	 * Standard JavaScript object representation for SIPCallerConfig
	 */
	interface AsObject {
		sipBaseConfig?: SIPBaseConfig.AsObject;
		phoneNumber?: string;
		headers?: {
			[prop: string]: string;
		};
	}
	/**
	 * Protobuf JSON representation for SIPCallerConfig
	 */
	interface AsProtobufJSON {
		sipBaseConfig?: SIPBaseConfig.AsProtobufJSON | null;
		phoneNumber?: string;
		headers?: {
			[prop: string]: string;
		};
	}
	/**
	 * Message implementation for ondewo.vtsi.SIPCallerConfig.HeadersEntry
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
	private _activateControlMessages?;
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
	get activateControlMessages(): boolean | undefined;
	set activateControlMessages(value: boolean | undefined);
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
		activateControlMessages?: boolean;
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
		activateControlMessages?: boolean;
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
	private _activateAudioObjectStorage?;
	private _audioObjectStorageServicesActivationConfig?;
	private _minioConfig?;
	private _audioStorageConfig;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AudioObjectStorageConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AudioObjectStorageConfig.AsObject>);
	get activateAudioObjectStorage(): boolean | undefined;
	set activateAudioObjectStorage(value: boolean | undefined);
	get audioObjectStorageServicesActivationConfig(): AudioObjectStorageServicesActivationConfig | undefined;
	set audioObjectStorageServicesActivationConfig(value: AudioObjectStorageServicesActivationConfig | undefined);
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
		activateAudioObjectStorage?: boolean;
		audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject;
		minioConfig?: MinioConfig.AsObject;
	}
	/**
	 * Protobuf JSON representation for AudioObjectStorageConfig
	 */
	interface AsProtobufJSON {
		activateAudioObjectStorage?: boolean;
		audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsProtobufJSON | null;
		minioConfig?: MinioConfig.AsProtobufJSON | null;
	}
	enum AudioStorageConfigCase {
		none = 0,
		minioConfig = 1
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
	static deserializeBinaryFromReader(
		_instance: AudioObjectStorageServicesActivationConfig,
		_reader: BinaryReader
	): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: AudioObjectStorageServicesActivationConfig, _writer: BinaryWriter): void;
	private _activateS2t?;
	private _activateT2s?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AudioObjectStorageServicesActivationConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AudioObjectStorageServicesActivationConfig.AsObject>);
	get activateS2t(): boolean | undefined;
	set activateS2t(value: boolean | undefined);
	get activateT2s(): boolean | undefined;
	set activateT2s(value: boolean | undefined);
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
		activateS2t?: boolean;
		activateT2s?: boolean;
	}
	/**
	 * Protobuf JSON representation for AudioObjectStorageServicesActivationConfig
	 */
	interface AsProtobufJSON {
		activateS2t?: boolean;
		activateT2s?: boolean;
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
	private _activateMessageBroker?;
	private _messageBrokerServicesActivationConfig?;
	private _rabbitMqConfig?;
	private _messageBrokerConfig;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of MessageBrokerConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<MessageBrokerConfig.AsObject>);
	get activateMessageBroker(): boolean | undefined;
	set activateMessageBroker(value: boolean | undefined);
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
		activateMessageBroker?: boolean;
		messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject;
		rabbitMqConfig?: RabbitMqConfig.AsObject;
	}
	/**
	 * Protobuf JSON representation for MessageBrokerConfig
	 */
	interface AsProtobufJSON {
		activateMessageBroker?: boolean;
		messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsProtobufJSON | null;
		rabbitMqConfig?: RabbitMqConfig.AsProtobufJSON | null;
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
	private _activateS2t?;
	private _activateNlu?;
	private _activateT2s?;
	private _activateSip?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of MessageBrokerServicesActivationConfig to deeply clone from
	 */
	constructor(_value?: RecursivePartial<MessageBrokerServicesActivationConfig.AsObject>);
	get activateS2t(): boolean | undefined;
	set activateS2t(value: boolean | undefined);
	get activateNlu(): boolean | undefined;
	set activateNlu(value: boolean | undefined);
	get activateT2s(): boolean | undefined;
	set activateT2s(value: boolean | undefined);
	get activateSip(): boolean | undefined;
	set activateSip(value: boolean | undefined);
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
		activateS2t?: boolean;
		activateNlu?: boolean;
		activateT2s?: boolean;
		activateSip?: boolean;
	}
	/**
	 * Protobuf JSON representation for MessageBrokerServicesActivationConfig
	 */
	interface AsProtobufJSON {
		activateS2t?: boolean;
		activateNlu?: boolean;
		activateT2s?: boolean;
		activateSip?: boolean;
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
	private _sipConfig?;
	private _servicesConfigs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartListenerRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartListenerRequest.AsObject>);
	get sipConfig(): SIPBaseConfig | undefined;
	set sipConfig(value: SIPBaseConfig | undefined);
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
		sipConfig?: SIPBaseConfig.AsObject;
		servicesConfigs?: CommonServicesConfigs.AsObject;
	}
	/**
	 * Protobuf JSON representation for StartListenerRequest
	 */
	interface AsProtobufJSON {
		sipConfig?: SIPBaseConfig.AsProtobufJSON | null;
		servicesConfigs?: CommonServicesConfigs.AsProtobufJSON | null;
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
	private _sipConfig?;
	private _servicesConfigs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartCallerRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartCallerRequest.AsObject>);
	get sipConfig(): SIPCallerConfig | undefined;
	set sipConfig(value: SIPCallerConfig | undefined);
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
		sipConfig?: SIPCallerConfig.AsObject;
		servicesConfigs?: CommonServicesConfigs.AsObject;
	}
	/**
	 * Protobuf JSON representation for StartCallerRequest
	 */
	interface AsProtobufJSON {
		sipConfig?: SIPCallerConfig.AsProtobufJSON | null;
		servicesConfigs?: CommonServicesConfigs.AsProtobufJSON | null;
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
	private _request?;
	private _scheduledTime?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartScheduledCallerRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartScheduledCallerRequest.AsObject>);
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
		request?: StartCallerRequest.AsObject;
		scheduledTime?: googleProtobuf005.Timestamp.AsObject;
	}
	/**
	 * Protobuf JSON representation for StartScheduledCallerRequest
	 */
	interface AsProtobufJSON {
		request?: StartCallerRequest.AsProtobufJSON | null;
		scheduledTime?: googleProtobuf005.Timestamp.AsProtobufJSON | null;
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
	private _projectId?;
	private _requests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartListenersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartListenersRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get requests(): StartListenerRequest[] | undefined;
	set requests(value: StartListenerRequest[] | undefined);
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
		projectId?: string;
		requests?: StartListenerRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for StartListenersRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		requests?: StartListenerRequest.AsProtobufJSON[] | null;
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
	private _projectId?;
	private _callIds?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartListenersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartListenersResponse.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
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
		projectId?: string;
		callIds?: string[];
	}
	/**
	 * Protobuf JSON representation for StartListenersResponse
	 */
	interface AsProtobufJSON {
		projectId?: string;
		callIds?: string[];
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
	private _projectId?;
	private _requests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartCallersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartCallersRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get requests(): StartCallerRequest[] | undefined;
	set requests(value: StartCallerRequest[] | undefined);
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
		projectId?: string;
		requests?: StartCallerRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for StartCallersRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		requests?: StartCallerRequest.AsProtobufJSON[] | null;
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
	private _projectId?;
	private _callIds?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartCallersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartCallersResponse.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
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
		projectId?: string;
		callIds?: string[];
	}
	/**
	 * Protobuf JSON representation for StartCallersResponse
	 */
	interface AsProtobufJSON {
		projectId?: string;
		callIds?: string[];
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
	private _projectId?;
	private _requests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StartScheduledCallersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StartScheduledCallersRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get requests(): StartScheduledCallerRequest[] | undefined;
	set requests(value: StartScheduledCallerRequest[] | undefined);
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
		projectId?: string;
		requests?: StartScheduledCallerRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for StartScheduledCallersRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		requests?: StartScheduledCallerRequest.AsProtobufJSON[] | null;
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
	private _projectId?;
	private _callIds?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StopCallsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StopCallsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
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
		projectId?: string;
		callIds?: string[];
	}
	/**
	 * Protobuf JSON representation for StopCallsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		callIds?: string[];
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
	private _projectId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StopAllCallsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<StopAllCallsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
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
		projectId?: string;
	}
	/**
	 * Protobuf JSON representation for StopAllCallsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
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
	private _projectId?;
	private _callId?;
	private _transferId?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TransferCallsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TransferCallsRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get callId(): string[] | undefined;
	set callId(value: string[] | undefined);
	get transferId(): string[] | undefined;
	set transferId(value: string[] | undefined);
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
		projectId?: string;
		callId?: string[];
		transferId?: string[];
	}
	/**
	 * Protobuf JSON representation for TransferCallsRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		callId?: string[];
		transferId?: string[];
	}
}
/**
 * Message implementation for ondewo.vtsi.GetVoipCallInfoRequest
 */
export declare class GetVoipCallInfoRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetVoipCallInfoRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetVoipCallInfoRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetVoipCallInfoRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetVoipCallInfoRequest, _writer: BinaryWriter): void;
	private _projectId?;
	private _callId?;
	private _voipCallInfoView?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetVoipCallInfoRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetVoipCallInfoRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get callId(): string | undefined;
	set callId(value: string | undefined);
	get voipCallInfoView(): VoipCallInfoView | undefined;
	set voipCallInfoView(value: VoipCallInfoView | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetVoipCallInfoRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetVoipCallInfoRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetVoipCallInfoRequest.AsProtobufJSON;
}
export declare module GetVoipCallInfoRequest {
	/**
	 * Standard JavaScript object representation for GetVoipCallInfoRequest
	 */
	interface AsObject {
		projectId?: string;
		callId?: string;
		voipCallInfoView?: VoipCallInfoView;
	}
	/**
	 * Protobuf JSON representation for GetVoipCallInfoRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		callId?: string;
		voipCallInfoView?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.GetVoipCallInfoResponse
 */
export declare class GetVoipCallInfoResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetVoipCallInfoResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetVoipCallInfoResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetVoipCallInfoResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetVoipCallInfoResponse, _writer: BinaryWriter): void;
	private _activeLog?;
	private _doneLogs?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetVoipCallInfoResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetVoipCallInfoResponse.AsObject>);
	get activeLog(): VoipCallInfo | undefined;
	set activeLog(value: VoipCallInfo | undefined);
	get doneLogs(): VoipCallInfo[] | undefined;
	set doneLogs(value: VoipCallInfo[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetVoipCallInfoResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetVoipCallInfoResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetVoipCallInfoResponse.AsProtobufJSON;
}
export declare module GetVoipCallInfoResponse {
	/**
	 * Standard JavaScript object representation for GetVoipCallInfoResponse
	 */
	interface AsObject {
		activeLog?: VoipCallInfo.AsObject;
		doneLogs?: VoipCallInfo.AsObject[];
	}
	/**
	 * Protobuf JSON representation for GetVoipCallInfoResponse
	 */
	interface AsProtobufJSON {
		activeLog?: VoipCallInfo.AsProtobufJSON | null;
		doneLogs?: VoipCallInfo.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.VoipCallInfo
 */
export declare class VoipCallInfo implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): VoipCallInfo;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: VoipCallInfo): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: VoipCallInfo, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: VoipCallInfo, _writer: BinaryWriter): void;
	private _callId?;
	private _sipAccount?;
	private _containerName?;
	private _callType?;
	private _phoneNumber?;
	private _startTime?;
	private _endTime?;
	private _sipStatus?;
	private _sipStatusHistory?;
	private _servicesStatuses?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of VoipCallInfo to deeply clone from
	 */
	constructor(_value?: RecursivePartial<VoipCallInfo.AsObject>);
	get callId(): string | undefined;
	set callId(value: string | undefined);
	get sipAccount(): string | undefined;
	set sipAccount(value: string | undefined);
	get containerName(): string | undefined;
	set containerName(value: string | undefined);
	get callType(): CallType | undefined;
	set callType(value: CallType | undefined);
	get phoneNumber(): string | undefined;
	set phoneNumber(value: string | undefined);
	get startTime(): number | undefined;
	set startTime(value: number | undefined);
	get endTime(): number | undefined;
	set endTime(value: number | undefined);
	get sipStatus(): ondewoSip010.SipStatus | undefined;
	set sipStatus(value: ondewoSip010.SipStatus | undefined);
	get sipStatusHistory(): ondewoSip010.SipStatusHistoryResponse | undefined;
	set sipStatusHistory(value: ondewoSip010.SipStatusHistoryResponse | undefined);
	get servicesStatuses(): AllServicesStatuses | undefined;
	set servicesStatuses(value: AllServicesStatuses | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): VoipCallInfo.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): VoipCallInfo.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): VoipCallInfo.AsProtobufJSON;
}
export declare module VoipCallInfo {
	/**
	 * Standard JavaScript object representation for VoipCallInfo
	 */
	interface AsObject {
		callId?: string;
		sipAccount?: string;
		containerName?: string;
		callType?: CallType;
		phoneNumber?: string;
		startTime?: number;
		endTime?: number;
		sipStatus?: ondewoSip010.SipStatus.AsObject;
		sipStatusHistory?: ondewoSip010.SipStatusHistoryResponse.AsObject;
		servicesStatuses?: AllServicesStatuses.AsObject;
	}
	/**
	 * Protobuf JSON representation for VoipCallInfo
	 */
	interface AsProtobufJSON {
		callId?: string;
		sipAccount?: string;
		containerName?: string;
		callType?: string;
		phoneNumber?: string;
		startTime?: number;
		endTime?: number;
		sipStatus?: ondewoSip010.SipStatus.AsProtobufJSON | null;
		sipStatusHistory?: ondewoSip010.SipStatusHistoryResponse.AsProtobufJSON | null;
		servicesStatuses?: AllServicesStatuses.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.ListVoipCallInfoRequest
 */
export declare class ListVoipCallInfoRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListVoipCallInfoRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListVoipCallInfoRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListVoipCallInfoRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListVoipCallInfoRequest, _writer: BinaryWriter): void;
	private _projectId?;
	private _voipCallInfoView?;
	private _callType?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListVoipCallInfoRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListVoipCallInfoRequest.AsObject>);
	get projectId(): string | undefined;
	set projectId(value: string | undefined);
	get voipCallInfoView(): VoipCallInfoView | undefined;
	set voipCallInfoView(value: VoipCallInfoView | undefined);
	get callType(): CallType | undefined;
	set callType(value: CallType | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListVoipCallInfoRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListVoipCallInfoRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListVoipCallInfoRequest.AsProtobufJSON;
}
export declare module ListVoipCallInfoRequest {
	/**
	 * Standard JavaScript object representation for ListVoipCallInfoRequest
	 */
	interface AsObject {
		projectId?: string;
		voipCallInfoView?: VoipCallInfoView;
		callType?: CallType;
	}
	/**
	 * Protobuf JSON representation for ListVoipCallInfoRequest
	 */
	interface AsProtobufJSON {
		projectId?: string;
		voipCallInfoView?: string;
		callType?: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.ListVoipCallInfoResponse
 */
export declare class ListVoipCallInfoResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListVoipCallInfoResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListVoipCallInfoResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListVoipCallInfoResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListVoipCallInfoResponse, _writer: BinaryWriter): void;
	private _voipInfo?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListVoipCallInfoResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListVoipCallInfoResponse.AsObject>);
	get voipInfo(): VoipCallInfo[] | undefined;
	set voipInfo(value: VoipCallInfo[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListVoipCallInfoResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListVoipCallInfoResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListVoipCallInfoResponse.AsProtobufJSON;
}
export declare module ListVoipCallInfoResponse {
	/**
	 * Standard JavaScript object representation for ListVoipCallInfoResponse
	 */
	interface AsObject {
		voipInfo?: VoipCallInfo.AsObject[];
	}
	/**
	 * Protobuf JSON representation for ListVoipCallInfoResponse
	 */
	interface AsProtobufJSON {
		voipInfo?: VoipCallInfo.AsProtobufJSON[] | null;
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
	private _statusCai?;
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
		statusCai?: ServiceStatus.AsObject;
		statusStt?: ServiceStatus.AsObject;
		statusTts?: ServiceStatus.AsObject;
	}
	/**
	 * Protobuf JSON representation for AllServicesStatuses
	 */
	interface AsProtobufJSON {
		statusSip?: ServiceStatus.AsProtobufJSON | null;
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
	private _errorMesssages?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ServiceStatus to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ServiceStatus.AsObject>);
	get healthy(): boolean | undefined;
	set healthy(value: boolean | undefined);
	get errorMesssages(): string | undefined;
	set errorMesssages(value: string | undefined);
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
		errorMesssages?: string;
	}
	/**
	 * Protobuf JSON representation for ServiceStatus
	 */
	interface AsProtobufJSON {
		healthy?: boolean;
		errorMesssages?: string;
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
