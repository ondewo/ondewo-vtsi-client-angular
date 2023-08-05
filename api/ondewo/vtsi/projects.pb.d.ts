import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export declare enum VtsiProjectStatus {
	UNSPECIFIED = 0,
	UNDEPLOYED = 1,
	UPDATING = 2,
	DEPLOYING = 3,
	DEPLOYED = 4,
	UNDEPLOYING = 5,
	DELETING = 6,
	DELETED = 7
}
export declare enum VtsiProjectSortingMode {
	ASCENDING = 0,
	DESCENDING = 1
}
export declare enum VtsiProjectView {
	VTSI_PROJECT_VIEW_UNSPECIFIED = 0,
	VTSI_PROJECT_VIEW_FULL = 1,
	VTSI_PROJECT_VIEW_SHALLOW = 2,
	VTSI_PROJECT_VIEW_MINIMUM = 3
}
/**
 * Message implementation for ondewo.vtsi.VtsiProject
 */
export declare class VtsiProject implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): VtsiProject;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: VtsiProject): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: VtsiProject, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: VtsiProject, _writer: BinaryWriter): void;
	private _name;
	private _displayName;
	private _maxCallers;
	private _maxListeners;
	private _asteriskConfigs?;
	private _vtsiProjectStatus;
	private _createdBy;
	private _createdAt?;
	private _modifiedBy;
	private _modifiedAt?;
	private _activeCallers;
	private _activeListeners;
	private _asteriskPort;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of VtsiProject to deeply clone from
	 */
	constructor(_value?: RecursivePartial<VtsiProject.AsObject>);
	get name(): string;
	set name(value: string);
	get displayName(): string;
	set displayName(value: string);
	get maxCallers(): number;
	set maxCallers(value: number);
	get maxListeners(): number;
	set maxListeners(value: number);
	get asteriskConfigs(): AsteriskConfigs | undefined;
	set asteriskConfigs(value: AsteriskConfigs | undefined);
	get vtsiProjectStatus(): VtsiProjectStatus;
	set vtsiProjectStatus(value: VtsiProjectStatus);
	get createdBy(): string;
	set createdBy(value: string);
	get createdAt(): googleProtobuf001.Timestamp | undefined;
	set createdAt(value: googleProtobuf001.Timestamp | undefined);
	get modifiedBy(): string;
	set modifiedBy(value: string);
	get modifiedAt(): googleProtobuf001.Timestamp | undefined;
	set modifiedAt(value: googleProtobuf001.Timestamp | undefined);
	get activeCallers(): number;
	set activeCallers(value: number);
	get activeListeners(): number;
	set activeListeners(value: number);
	get asteriskPort(): number;
	set asteriskPort(value: number);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): VtsiProject.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): VtsiProject.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): VtsiProject.AsProtobufJSON;
}
export declare module VtsiProject {
	/**
	 * Standard JavaScript object representation for VtsiProject
	 */
	interface AsObject {
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
	}
	/**
	 * Protobuf JSON representation for VtsiProject
	 */
	interface AsProtobufJSON {
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
	private _sipTrunkUsername;
	private _sipTrunkPassword;
	private _sipTrunkHost;
	private _transferNumber;
	private _transferNumberHost;
	private _sipTrunkPhoneNumber;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AsteriskConfigsVariables to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AsteriskConfigsVariables.AsObject>);
	get sipTrunkUsername(): string;
	set sipTrunkUsername(value: string);
	get sipTrunkPassword(): string;
	set sipTrunkPassword(value: string);
	get sipTrunkHost(): string;
	set sipTrunkHost(value: string);
	get transferNumber(): string;
	set transferNumber(value: string);
	get transferNumberHost(): string;
	set transferNumberHost(value: string);
	get sipTrunkPhoneNumber(): string;
	set sipTrunkPhoneNumber(value: string);
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
	interface AsProtobufJSON {
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
	private _sipConfFileString;
	private _extensionsConfFileString;
	private _queuesConfFileString;
	private _modulesConfFileString;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AsteriskConfigsFiles to deeply clone from
	 */
	constructor(_value?: RecursivePartial<AsteriskConfigsFiles.AsObject>);
	get sipConfFileString(): string;
	set sipConfFileString(value: string);
	get extensionsConfFileString(): string;
	set extensionsConfFileString(value: string);
	get queuesConfFileString(): string;
	set queuesConfFileString(value: string);
	get modulesConfFileString(): string;
	set modulesConfFileString(value: string);
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
		sipConfFileString: string;
		extensionsConfFileString: string;
		queuesConfFileString: string;
		modulesConfFileString: string;
	}
	/**
	 * Protobuf JSON representation for AsteriskConfigsFiles
	 */
	interface AsProtobufJSON {
		sipConfFileString: string;
		extensionsConfFileString: string;
		queuesConfFileString: string;
		modulesConfFileString: string;
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
	private _asteriskConfigsTargetDirectoryName;
	private _asteriskPort;
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
	get asteriskConfigsTargetDirectoryName(): string;
	set asteriskConfigsTargetDirectoryName(value: string);
	get asteriskPort(): number;
	set asteriskPort(value: number);
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
		asteriskConfigsTargetDirectoryName: string;
		asteriskPort: number;
	}
	/**
	 * Protobuf JSON representation for AsteriskConfigs
	 */
	interface AsProtobufJSON {
		asteriskConfigsVariables: AsteriskConfigsVariables.AsProtobufJSON | null;
		asteriskConfigsFiles: AsteriskConfigsFiles.AsProtobufJSON | null;
		asteriskConfigsTargetDirectoryName: string | null;
		asteriskPort: number;
	}
	enum AsteriskConfigsOneofCase {
		none = 0,
		asteriskConfigsVariables = 1,
		asteriskConfigsFiles = 2,
		asteriskConfigsTargetDirectoryName = 3
	}
}
/**
 * Message implementation for ondewo.vtsi.CreateVtsiProjectRequest
 */
export declare class CreateVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateVtsiProjectRequest, _writer: BinaryWriter): void;
	private _vtsiProject?;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateVtsiProjectRequest.AsObject>);
	get vtsiProject(): VtsiProject | undefined;
	set vtsiProject(value: VtsiProject | undefined);
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
	toObject(): CreateVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateVtsiProjectRequest.AsProtobufJSON;
}
export declare module CreateVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for CreateVtsiProjectRequest
	 */
	interface AsObject {
		vtsiProject?: VtsiProject.AsObject;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for CreateVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		vtsiProject: VtsiProject.AsProtobufJSON | null;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.CreateVtsiProjectResponse
 */
export declare class CreateVtsiProjectResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateVtsiProjectResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateVtsiProjectResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateVtsiProjectResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateVtsiProjectResponse, _writer: BinaryWriter): void;
	private _vtsiProject?;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateVtsiProjectResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateVtsiProjectResponse.AsObject>);
	get vtsiProject(): VtsiProject | undefined;
	set vtsiProject(value: VtsiProject | undefined);
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
	toObject(): CreateVtsiProjectResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateVtsiProjectResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateVtsiProjectResponse.AsProtobufJSON;
}
export declare module CreateVtsiProjectResponse {
	/**
	 * Standard JavaScript object representation for CreateVtsiProjectResponse
	 */
	interface AsObject {
		vtsiProject?: VtsiProject.AsObject;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for CreateVtsiProjectResponse
	 */
	interface AsProtobufJSON {
		vtsiProject: VtsiProject.AsProtobufJSON | null;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.GetVtsiProjectRequest
 */
export declare class GetVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetVtsiProjectRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetVtsiProjectRequest.AsObject>);
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
	toObject(): GetVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetVtsiProjectRequest.AsProtobufJSON;
}
export declare module GetVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for GetVtsiProjectRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for GetVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.ListVtsiProjectsRequest
 */
export declare class ListVtsiProjectsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListVtsiProjectsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListVtsiProjectsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListVtsiProjectsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListVtsiProjectsRequest, _writer: BinaryWriter): void;
	private _vtsiProjectView;
	private _pageToken?;
	private _vtsiProjectSorting?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListVtsiProjectsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListVtsiProjectsRequest.AsObject>);
	get vtsiProjectView(): VtsiProjectView;
	set vtsiProjectView(value: VtsiProjectView);
	get pageToken(): string | undefined;
	set pageToken(value?: string);
	get vtsiProjectSorting(): VtsiProjectSorting | undefined;
	set vtsiProjectSorting(value: VtsiProjectSorting | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListVtsiProjectsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListVtsiProjectsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListVtsiProjectsRequest.AsProtobufJSON;
}
export declare module ListVtsiProjectsRequest {
	/**
	 * Standard JavaScript object representation for ListVtsiProjectsRequest
	 */
	interface AsObject {
		vtsiProjectView: VtsiProjectView;
		pageToken?: string;
		vtsiProjectSorting?: VtsiProjectSorting.AsObject;
	}
	/**
	 * Protobuf JSON representation for ListVtsiProjectsRequest
	 */
	interface AsProtobufJSON {
		vtsiProjectView: string;
		pageToken: string | null;
		vtsiProjectSorting: VtsiProjectSorting.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.ListVtsiProjectsResponse
 */
export declare class ListVtsiProjectsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListVtsiProjectsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListVtsiProjectsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListVtsiProjectsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListVtsiProjectsResponse, _writer: BinaryWriter): void;
	private _vtsiProjects?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListVtsiProjectsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListVtsiProjectsResponse.AsObject>);
	get vtsiProjects(): VtsiProject[] | undefined;
	set vtsiProjects(value: VtsiProject[] | undefined);
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
	toObject(): ListVtsiProjectsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListVtsiProjectsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListVtsiProjectsResponse.AsProtobufJSON;
}
export declare module ListVtsiProjectsResponse {
	/**
	 * Standard JavaScript object representation for ListVtsiProjectsResponse
	 */
	interface AsObject {
		vtsiProjects?: VtsiProject.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListVtsiProjectsResponse
	 */
	interface AsProtobufJSON {
		vtsiProjects: VtsiProject.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.VtsiProjectSorting
 */
export declare class VtsiProjectSorting implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): VtsiProjectSorting;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: VtsiProjectSorting): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: VtsiProjectSorting, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: VtsiProjectSorting, _writer: BinaryWriter): void;
	private _sortingField?;
	private _sortingMode?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of VtsiProjectSorting to deeply clone from
	 */
	constructor(_value?: RecursivePartial<VtsiProjectSorting.AsObject>);
	get sortingField(): VtsiProjectSorting.VtsiProjectSortingField | undefined;
	set sortingField(value?: VtsiProjectSorting.VtsiProjectSortingField);
	get sortingMode(): VtsiProjectSortingMode | undefined;
	set sortingMode(value?: VtsiProjectSortingMode);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): VtsiProjectSorting.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): VtsiProjectSorting.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): VtsiProjectSorting.AsProtobufJSON;
}
export declare module VtsiProjectSorting {
	/**
	 * Standard JavaScript object representation for VtsiProjectSorting
	 */
	interface AsObject {
		sortingField?: VtsiProjectSorting.VtsiProjectSortingField;
		sortingMode?: VtsiProjectSortingMode;
	}
	/**
	 * Protobuf JSON representation for VtsiProjectSorting
	 */
	interface AsProtobufJSON {
		sortingField: string | null;
		sortingMode: string | null;
	}
	enum VtsiProjectSortingField {
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
export declare class UpdateVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateVtsiProjectRequest, _writer: BinaryWriter): void;
	private _vtsiProject?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateVtsiProjectRequest.AsObject>);
	get vtsiProject(): VtsiProject | undefined;
	set vtsiProject(value: VtsiProject | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateVtsiProjectRequest.AsProtobufJSON;
}
export declare module UpdateVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for UpdateVtsiProjectRequest
	 */
	interface AsObject {
		vtsiProject?: VtsiProject.AsObject;
	}
	/**
	 * Protobuf JSON representation for UpdateVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		vtsiProject: VtsiProject.AsProtobufJSON | null;
	}
}
/**
 * Message implementation for ondewo.vtsi.UpdateVtsiProjectResponse
 */
export declare class UpdateVtsiProjectResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateVtsiProjectResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateVtsiProjectResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateVtsiProjectResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateVtsiProjectResponse, _writer: BinaryWriter): void;
	private _name;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateVtsiProjectResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateVtsiProjectResponse.AsObject>);
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
	toObject(): UpdateVtsiProjectResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateVtsiProjectResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateVtsiProjectResponse.AsProtobufJSON;
}
export declare module UpdateVtsiProjectResponse {
	/**
	 * Standard JavaScript object representation for UpdateVtsiProjectResponse
	 */
	interface AsObject {
		name: string;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for UpdateVtsiProjectResponse
	 */
	interface AsProtobufJSON {
		name: string;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeleteVtsiProjectRequest
 */
export declare class DeleteVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteVtsiProjectRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteVtsiProjectRequest.AsObject>);
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
	toObject(): DeleteVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteVtsiProjectRequest.AsProtobufJSON;
}
export declare module DeleteVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for DeleteVtsiProjectRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for DeleteVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeleteVtsiProjectResponse
 */
export declare class DeleteVtsiProjectResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteVtsiProjectResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteVtsiProjectResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteVtsiProjectResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteVtsiProjectResponse, _writer: BinaryWriter): void;
	private _name;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteVtsiProjectResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteVtsiProjectResponse.AsObject>);
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
	toObject(): DeleteVtsiProjectResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteVtsiProjectResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteVtsiProjectResponse.AsProtobufJSON;
}
export declare module DeleteVtsiProjectResponse {
	/**
	 * Standard JavaScript object representation for DeleteVtsiProjectResponse
	 */
	interface AsObject {
		name: string;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for DeleteVtsiProjectResponse
	 */
	interface AsProtobufJSON {
		name: string;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeployVtsiProjectRequest
 */
export declare class DeployVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeployVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeployVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeployVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeployVtsiProjectRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeployVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeployVtsiProjectRequest.AsObject>);
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
	toObject(): DeployVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeployVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeployVtsiProjectRequest.AsProtobufJSON;
}
export declare module DeployVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for DeployVtsiProjectRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for DeployVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.DeployVtsiProjectResponse
 */
export declare class DeployVtsiProjectResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeployVtsiProjectResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeployVtsiProjectResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeployVtsiProjectResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeployVtsiProjectResponse, _writer: BinaryWriter): void;
	private _name;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeployVtsiProjectResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeployVtsiProjectResponse.AsObject>);
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
	toObject(): DeployVtsiProjectResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeployVtsiProjectResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeployVtsiProjectResponse.AsProtobufJSON;
}
export declare module DeployVtsiProjectResponse {
	/**
	 * Standard JavaScript object representation for DeployVtsiProjectResponse
	 */
	interface AsObject {
		name: string;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for DeployVtsiProjectResponse
	 */
	interface AsProtobufJSON {
		name: string;
		errorMessage: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.UndeployVtsiProjectRequest
 */
export declare class UndeployVtsiProjectRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UndeployVtsiProjectRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UndeployVtsiProjectRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UndeployVtsiProjectRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UndeployVtsiProjectRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UndeployVtsiProjectRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UndeployVtsiProjectRequest.AsObject>);
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
	toObject(): UndeployVtsiProjectRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UndeployVtsiProjectRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UndeployVtsiProjectRequest.AsProtobufJSON;
}
export declare module UndeployVtsiProjectRequest {
	/**
	 * Standard JavaScript object representation for UndeployVtsiProjectRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for UndeployVtsiProjectRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.vtsi.UndeployVtsiProjectResponse
 */
export declare class UndeployVtsiProjectResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UndeployVtsiProjectResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UndeployVtsiProjectResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UndeployVtsiProjectResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UndeployVtsiProjectResponse, _writer: BinaryWriter): void;
	private _name;
	private _errorMessage;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UndeployVtsiProjectResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UndeployVtsiProjectResponse.AsObject>);
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
	toObject(): UndeployVtsiProjectResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UndeployVtsiProjectResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UndeployVtsiProjectResponse.AsProtobufJSON;
}
export declare module UndeployVtsiProjectResponse {
	/**
	 * Standard JavaScript object representation for UndeployVtsiProjectResponse
	 */
	interface AsObject {
		name: string;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for UndeployVtsiProjectResponse
	 */
	interface AsProtobufJSON {
		name: string;
		errorMessage: string;
	}
}
