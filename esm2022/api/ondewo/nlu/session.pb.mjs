/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
export var AudioEncoding;
(function (AudioEncoding) {
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_UNSPECIFIED'] = 0)] = 'AUDIO_ENCODING_UNSPECIFIED';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_LINEAR_16'] = 1)] = 'AUDIO_ENCODING_LINEAR_16';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_FLAC'] = 2)] = 'AUDIO_ENCODING_FLAC';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_MULAW'] = 3)] = 'AUDIO_ENCODING_MULAW';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_AMR'] = 4)] = 'AUDIO_ENCODING_AMR';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_AMR_WB'] = 5)] = 'AUDIO_ENCODING_AMR_WB';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_OGG_OPUS'] = 6)] = 'AUDIO_ENCODING_OGG_OPUS';
	AudioEncoding[(AudioEncoding['AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE'] = 7)] = 'AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE';
})(AudioEncoding || (AudioEncoding = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
	ComparisonOperator[(ComparisonOperator['EQUAL'] = 0)] = 'EQUAL';
	ComparisonOperator[(ComparisonOperator['GREATER'] = 1)] = 'GREATER';
	ComparisonOperator[(ComparisonOperator['GREATER_OR_EQUAL'] = 2)] = 'GREATER_OR_EQUAL';
	ComparisonOperator[(ComparisonOperator['LESS_OR_EQUAL'] = 3)] = 'LESS_OR_EQUAL';
	ComparisonOperator[(ComparisonOperator['CONTAINS'] = 4)] = 'CONTAINS';
	ComparisonOperator[(ComparisonOperator['STARTS_WITH'] = 5)] = 'STARTS_WITH';
	ComparisonOperator[(ComparisonOperator['ENDS_WITH'] = 6)] = 'ENDS_WITH';
})(ComparisonOperator || (ComparisonOperator = {}));
/**
 * Message implementation for ondewo.nlu.DetectIntentRequest
 */
class DetectIntentRequest {
	static id = 'ondewo.nlu.DetectIntentRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DetectIntentRequest();
		DetectIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.session = _instance.session || '';
		_instance.queryParams = _instance.queryParams || undefined;
		_instance.queryInput = _instance.queryInput || undefined;
		_instance.inputAudio = _instance.inputAudio || new Uint8Array();
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.session = _reader.readString();
					break;
				case 2:
					_instance.queryParams = new QueryParameters();
					_reader.readMessage(_instance.queryParams, QueryParameters.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.queryInput = new QueryInput();
					_reader.readMessage(_instance.queryInput, QueryInput.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.inputAudio = _reader.readBytes();
					break;
				default:
					_reader.skipField();
			}
		}
		DetectIntentRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.session) {
			_writer.writeString(1, _instance.session);
		}
		if (_instance.queryParams) {
			_writer.writeMessage(2, _instance.queryParams, QueryParameters.serializeBinaryToWriter);
		}
		if (_instance.queryInput) {
			_writer.writeMessage(3, _instance.queryInput, QueryInput.serializeBinaryToWriter);
		}
		if (_instance.inputAudio && _instance.inputAudio.length) {
			_writer.writeBytes(5, _instance.inputAudio);
		}
	}
	_session;
	_queryParams;
	_queryInput;
	_inputAudio;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.session = _value.session;
		this.queryParams = _value.queryParams ? new QueryParameters(_value.queryParams) : undefined;
		this.queryInput = _value.queryInput ? new QueryInput(_value.queryInput) : undefined;
		this.inputAudio = _value.inputAudio;
		DetectIntentRequest.refineValues(this);
	}
	get session() {
		return this._session;
	}
	set session(value) {
		this._session = value;
	}
	get queryParams() {
		return this._queryParams;
	}
	set queryParams(value) {
		this._queryParams = value;
	}
	get queryInput() {
		return this._queryInput;
	}
	set queryInput(value) {
		this._queryInput = value;
	}
	get inputAudio() {
		return this._inputAudio;
	}
	set inputAudio(value) {
		this._inputAudio = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DetectIntentRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			session: this.session,
			queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
			queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
			inputAudio: this.inputAudio ? this.inputAudio.subarray(0) : new Uint8Array()
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
		options
	) {
		return {
			session: this.session,
			queryParams: this.queryParams ? this.queryParams.toProtobufJSON(options) : null,
			queryInput: this.queryInput ? this.queryInput.toProtobufJSON(options) : null,
			inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
		};
	}
}
export { DetectIntentRequest };
/**
 * Message implementation for ondewo.nlu.DetectIntentResponse
 */
class DetectIntentResponse {
	static id = 'ondewo.nlu.DetectIntentResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DetectIntentResponse();
		DetectIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.responseId = _instance.responseId || '';
		_instance.queryResult = _instance.queryResult || undefined;
		_instance.webhookStatus = _instance.webhookStatus || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.responseId = _reader.readString();
					break;
				case 2:
					_instance.queryResult = new QueryResult();
					_reader.readMessage(_instance.queryResult, QueryResult.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.webhookStatus = new googleRpc011.Status();
					_reader.readMessage(_instance.webhookStatus, googleRpc011.Status.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		DetectIntentResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.responseId) {
			_writer.writeString(1, _instance.responseId);
		}
		if (_instance.queryResult) {
			_writer.writeMessage(2, _instance.queryResult, QueryResult.serializeBinaryToWriter);
		}
		if (_instance.webhookStatus) {
			_writer.writeMessage(3, _instance.webhookStatus, googleRpc011.Status.serializeBinaryToWriter);
		}
	}
	_responseId;
	_queryResult;
	_webhookStatus;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectIntentResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.responseId = _value.responseId;
		this.queryResult = _value.queryResult ? new QueryResult(_value.queryResult) : undefined;
		this.webhookStatus = _value.webhookStatus ? new googleRpc011.Status(_value.webhookStatus) : undefined;
		DetectIntentResponse.refineValues(this);
	}
	get responseId() {
		return this._responseId;
	}
	set responseId(value) {
		this._responseId = value;
	}
	get queryResult() {
		return this._queryResult;
	}
	set queryResult(value) {
		this._queryResult = value;
	}
	get webhookStatus() {
		return this._webhookStatus;
	}
	set webhookStatus(value) {
		this._webhookStatus = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DetectIntentResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			responseId: this.responseId,
			queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
			webhookStatus: this.webhookStatus ? this.webhookStatus.toObject() : undefined
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
		options
	) {
		return {
			responseId: this.responseId,
			queryResult: this.queryResult ? this.queryResult.toProtobufJSON(options) : null,
			webhookStatus: this.webhookStatus ? this.webhookStatus.toProtobufJSON(options) : null
		};
	}
}
export { DetectIntentResponse };
/**
 * Message implementation for ondewo.nlu.QueryParameters
 */
class QueryParameters {
	static id = 'ondewo.nlu.QueryParameters';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new QueryParameters();
		QueryParameters.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.timeZone = _instance.timeZone || '';
		_instance.geoLocation = _instance.geoLocation || undefined;
		_instance.contexts = _instance.contexts || [];
		_instance.resetContexts = _instance.resetContexts || false;
		_instance.payload = _instance.payload || undefined;
		_instance.labels = _instance.labels || [];
		_instance.platforms = _instance.platforms || [];
		_instance.accountId = _instance.accountId || '';
		_instance.propertyId = _instance.propertyId || '';
		_instance.datastreamId = _instance.datastreamId || '';
		_instance.originId = _instance.originId || '';
		_instance.identifiedUserId = _instance.identifiedUserId || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.timeZone = _reader.readString();
					break;
				case 2:
					_instance.geoLocation = new googleType012.LatLng();
					_reader.readMessage(_instance.geoLocation, googleType012.LatLng.deserializeBinaryFromReader);
					break;
				case 3:
					const messageInitializer3 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer3, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.contexts = _instance.contexts || []).push(messageInitializer3);
					break;
				case 4:
					_instance.resetContexts = _reader.readBool();
					break;
				case 6:
					_instance.payload = new googleProtobuf010.Struct();
					_reader.readMessage(_instance.payload, googleProtobuf010.Struct.deserializeBinaryFromReader);
					break;
				case 7:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				case 8:
					(_instance.platforms = _instance.platforms || []).push(...(_reader.readPackedEnum() || []));
					break;
				case 9:
					_instance.accountId = _reader.readString();
					break;
				case 10:
					_instance.propertyId = _reader.readString();
					break;
				case 11:
					_instance.datastreamId = _reader.readString();
					break;
				case 12:
					_instance.originId = _reader.readString();
					break;
				case 13:
					_instance.identifiedUserId = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		QueryParameters.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.timeZone) {
			_writer.writeString(1, _instance.timeZone);
		}
		if (_instance.geoLocation) {
			_writer.writeMessage(2, _instance.geoLocation, googleType012.LatLng.serializeBinaryToWriter);
		}
		if (_instance.contexts && _instance.contexts.length) {
			_writer.writeRepeatedMessage(3, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.resetContexts) {
			_writer.writeBool(4, _instance.resetContexts);
		}
		if (_instance.payload) {
			_writer.writeMessage(6, _instance.payload, googleProtobuf010.Struct.serializeBinaryToWriter);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(7, _instance.labels);
		}
		if (_instance.platforms && _instance.platforms.length) {
			_writer.writePackedEnum(8, _instance.platforms);
		}
		if (_instance.accountId) {
			_writer.writeString(9, _instance.accountId);
		}
		if (_instance.propertyId) {
			_writer.writeString(10, _instance.propertyId);
		}
		if (_instance.datastreamId) {
			_writer.writeString(11, _instance.datastreamId);
		}
		if (_instance.originId) {
			_writer.writeString(12, _instance.originId);
		}
		if (_instance.identifiedUserId) {
			_writer.writeString(13, _instance.identifiedUserId);
		}
	}
	_timeZone;
	_geoLocation;
	_contexts;
	_resetContexts;
	_payload;
	_labels;
	_platforms;
	_accountId;
	_propertyId;
	_datastreamId;
	_originId;
	_identifiedUserId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryParameters to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.timeZone = _value.timeZone;
		this.geoLocation = _value.geoLocation ? new googleType012.LatLng(_value.geoLocation) : undefined;
		this.contexts = (_value.contexts || []).map((m) => new ondewoNlu006.Context(m));
		this.resetContexts = _value.resetContexts;
		this.payload = _value.payload ? new googleProtobuf010.Struct(_value.payload) : undefined;
		this.labels = (_value.labels || []).slice();
		this.platforms = (_value.platforms || []).slice();
		this.accountId = _value.accountId;
		this.propertyId = _value.propertyId;
		this.datastreamId = _value.datastreamId;
		this.originId = _value.originId;
		this.identifiedUserId = _value.identifiedUserId;
		QueryParameters.refineValues(this);
	}
	get timeZone() {
		return this._timeZone;
	}
	set timeZone(value) {
		this._timeZone = value;
	}
	get geoLocation() {
		return this._geoLocation;
	}
	set geoLocation(value) {
		this._geoLocation = value;
	}
	get contexts() {
		return this._contexts;
	}
	set contexts(value) {
		this._contexts = value;
	}
	get resetContexts() {
		return this._resetContexts;
	}
	set resetContexts(value) {
		this._resetContexts = value;
	}
	get payload() {
		return this._payload;
	}
	set payload(value) {
		this._payload = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	get platforms() {
		return this._platforms;
	}
	set platforms(value) {
		this._platforms = value;
	}
	get accountId() {
		return this._accountId;
	}
	set accountId(value) {
		this._accountId = value;
	}
	get propertyId() {
		return this._propertyId;
	}
	set propertyId(value) {
		this._propertyId = value;
	}
	get datastreamId() {
		return this._datastreamId;
	}
	set datastreamId(value) {
		this._datastreamId = value;
	}
	get originId() {
		return this._originId;
	}
	set originId(value) {
		this._originId = value;
	}
	get identifiedUserId() {
		return this._identifiedUserId;
	}
	set identifiedUserId(value) {
		this._identifiedUserId = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		QueryParameters.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			timeZone: this.timeZone,
			geoLocation: this.geoLocation ? this.geoLocation.toObject() : undefined,
			contexts: (this.contexts || []).map((m) => m.toObject()),
			resetContexts: this.resetContexts,
			payload: this.payload ? this.payload.toObject() : undefined,
			labels: (this.labels || []).slice(),
			platforms: (this.platforms || []).slice(),
			accountId: this.accountId,
			propertyId: this.propertyId,
			datastreamId: this.datastreamId,
			originId: this.originId,
			identifiedUserId: this.identifiedUserId
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
		options
	) {
		return {
			timeZone: this.timeZone,
			geoLocation: this.geoLocation ? this.geoLocation.toProtobufJSON(options) : null,
			contexts: (this.contexts || []).map((m) => m.toProtobufJSON(options)),
			resetContexts: this.resetContexts,
			payload: this.payload ? this.payload.toProtobufJSON(options) : null,
			labels: (this.labels || []).slice(),
			platforms: (this.platforms || []).map((v) => ondewoNlu013.Intent.Message.Platform[v]),
			accountId: this.accountId,
			propertyId: this.propertyId,
			datastreamId: this.datastreamId,
			originId: this.originId,
			identifiedUserId: this.identifiedUserId
		};
	}
}
export { QueryParameters };
/**
 * Message implementation for ondewo.nlu.QueryInput
 */
class QueryInput {
	static id = 'ondewo.nlu.QueryInput';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new QueryInput();
		QueryInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.audioConfig = new InputAudioConfig();
					_reader.readMessage(_instance.audioConfig, InputAudioConfig.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.text = new TextInput();
					_reader.readMessage(_instance.text, TextInput.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.event = new EventInput();
					_reader.readMessage(_instance.event, EventInput.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		QueryInput.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioConfig) {
			_writer.writeMessage(1, _instance.audioConfig, InputAudioConfig.serializeBinaryToWriter);
		}
		if (_instance.text) {
			_writer.writeMessage(2, _instance.text, TextInput.serializeBinaryToWriter);
		}
		if (_instance.event) {
			_writer.writeMessage(3, _instance.event, EventInput.serializeBinaryToWriter);
		}
	}
	_audioConfig;
	_text;
	_event;
	_input = QueryInput.InputCase.none;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryInput to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.audioConfig = _value.audioConfig ? new InputAudioConfig(_value.audioConfig) : undefined;
		this.text = _value.text ? new TextInput(_value.text) : undefined;
		this.event = _value.event ? new EventInput(_value.event) : undefined;
		QueryInput.refineValues(this);
	}
	get audioConfig() {
		return this._audioConfig;
	}
	set audioConfig(value) {
		if (value !== undefined && value !== null) {
			this._text = this._event = undefined;
			this._input = QueryInput.InputCase.audioConfig;
		}
		this._audioConfig = value;
	}
	get text() {
		return this._text;
	}
	set text(value) {
		if (value !== undefined && value !== null) {
			this._audioConfig = this._event = undefined;
			this._input = QueryInput.InputCase.text;
		}
		this._text = value;
	}
	get event() {
		return this._event;
	}
	set event(value) {
		if (value !== undefined && value !== null) {
			this._audioConfig = this._text = undefined;
			this._input = QueryInput.InputCase.event;
		}
		this._event = value;
	}
	get input() {
		return this._input;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		QueryInput.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			audioConfig: this.audioConfig ? this.audioConfig.toObject() : undefined,
			text: this.text ? this.text.toObject() : undefined,
			event: this.event ? this.event.toObject() : undefined
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
		options
	) {
		return {
			audioConfig: this.audioConfig ? this.audioConfig.toProtobufJSON(options) : null,
			text: this.text ? this.text.toProtobufJSON(options) : null,
			event: this.event ? this.event.toProtobufJSON(options) : null
		};
	}
}
export { QueryInput };
(function (QueryInput) {
	let InputCase;
	(function (InputCase) {
		InputCase[(InputCase['none'] = 0)] = 'none';
		InputCase[(InputCase['audioConfig'] = 1)] = 'audioConfig';
		InputCase[(InputCase['text'] = 2)] = 'text';
		InputCase[(InputCase['event'] = 3)] = 'event';
	})((InputCase = QueryInput.InputCase || (QueryInput.InputCase = {})));
})(QueryInput || (QueryInput = {}));
/**
 * Message implementation for ondewo.nlu.QueryResult
 */
class QueryResult {
	static id = 'ondewo.nlu.QueryResult';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new QueryResult();
		QueryResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.queryText = _instance.queryText || '';
		_instance.speechRecognitionConfidence = _instance.speechRecognitionConfidence || 0;
		_instance.action = _instance.action || '';
		_instance.parameters = _instance.parameters || undefined;
		_instance.allRequiredParamsPresent = _instance.allRequiredParamsPresent || false;
		_instance.fulfillmentText = _instance.fulfillmentText || '';
		_instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
		_instance.webhookSource = _instance.webhookSource || '';
		_instance.webhookPayload = _instance.webhookPayload || undefined;
		_instance.outputContexts = _instance.outputContexts || [];
		_instance.intent = _instance.intent || undefined;
		_instance.intentDetectionConfidence = _instance.intentDetectionConfidence || 0;
		_instance.queryTextOriginal = _instance.queryTextOriginal || '';
		_instance.diagnosticInfo = _instance.diagnosticInfo || undefined;
		_instance.languageCode = _instance.languageCode || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.queryText = _reader.readString();
					break;
				case 2:
					_instance.speechRecognitionConfidence = _reader.readFloat();
					break;
				case 3:
					_instance.action = _reader.readString();
					break;
				case 4:
					_instance.parameters = new googleProtobuf010.Struct();
					_reader.readMessage(_instance.parameters, googleProtobuf010.Struct.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.allRequiredParamsPresent = _reader.readBool();
					break;
				case 6:
					_instance.fulfillmentText = _reader.readString();
					break;
				case 7:
					const messageInitializer7 = new ondewoNlu013.Intent.Message();
					_reader.readMessage(messageInitializer7, ondewoNlu013.Intent.Message.deserializeBinaryFromReader);
					(_instance.fulfillmentMessages = _instance.fulfillmentMessages || []).push(messageInitializer7);
					break;
				case 8:
					_instance.webhookSource = _reader.readString();
					break;
				case 9:
					_instance.webhookPayload = new googleProtobuf010.Struct();
					_reader.readMessage(_instance.webhookPayload, googleProtobuf010.Struct.deserializeBinaryFromReader);
					break;
				case 10:
					const messageInitializer10 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer10, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.outputContexts = _instance.outputContexts || []).push(messageInitializer10);
					break;
				case 11:
					_instance.intent = new ondewoNlu013.Intent();
					_reader.readMessage(_instance.intent, ondewoNlu013.Intent.deserializeBinaryFromReader);
					break;
				case 12:
					_instance.intentDetectionConfidence = _reader.readFloat();
					break;
				case 13:
					_instance.queryTextOriginal = _reader.readString();
					break;
				case 14:
					_instance.diagnosticInfo = new googleProtobuf010.Struct();
					_reader.readMessage(_instance.diagnosticInfo, googleProtobuf010.Struct.deserializeBinaryFromReader);
					break;
				case 15:
					_instance.languageCode = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		QueryResult.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.queryText) {
			_writer.writeString(1, _instance.queryText);
		}
		if (_instance.speechRecognitionConfidence) {
			_writer.writeFloat(2, _instance.speechRecognitionConfidence);
		}
		if (_instance.action) {
			_writer.writeString(3, _instance.action);
		}
		if (_instance.parameters) {
			_writer.writeMessage(4, _instance.parameters, googleProtobuf010.Struct.serializeBinaryToWriter);
		}
		if (_instance.allRequiredParamsPresent) {
			_writer.writeBool(5, _instance.allRequiredParamsPresent);
		}
		if (_instance.fulfillmentText) {
			_writer.writeString(6, _instance.fulfillmentText);
		}
		if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
			_writer.writeRepeatedMessage(
				7,
				_instance.fulfillmentMessages,
				ondewoNlu013.Intent.Message.serializeBinaryToWriter
			);
		}
		if (_instance.webhookSource) {
			_writer.writeString(8, _instance.webhookSource);
		}
		if (_instance.webhookPayload) {
			_writer.writeMessage(9, _instance.webhookPayload, googleProtobuf010.Struct.serializeBinaryToWriter);
		}
		if (_instance.outputContexts && _instance.outputContexts.length) {
			_writer.writeRepeatedMessage(10, _instance.outputContexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.intent) {
			_writer.writeMessage(11, _instance.intent, ondewoNlu013.Intent.serializeBinaryToWriter);
		}
		if (_instance.intentDetectionConfidence) {
			_writer.writeFloat(12, _instance.intentDetectionConfidence);
		}
		if (_instance.queryTextOriginal) {
			_writer.writeString(13, _instance.queryTextOriginal);
		}
		if (_instance.diagnosticInfo) {
			_writer.writeMessage(14, _instance.diagnosticInfo, googleProtobuf010.Struct.serializeBinaryToWriter);
		}
		if (_instance.languageCode) {
			_writer.writeString(15, _instance.languageCode);
		}
	}
	_queryText;
	_speechRecognitionConfidence;
	_action;
	_parameters;
	_allRequiredParamsPresent;
	_fulfillmentText;
	_fulfillmentMessages;
	_webhookSource;
	_webhookPayload;
	_outputContexts;
	_intent;
	_intentDetectionConfidence;
	_queryTextOriginal;
	_diagnosticInfo;
	_languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of QueryResult to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.queryText = _value.queryText;
		this.speechRecognitionConfidence = _value.speechRecognitionConfidence;
		this.action = _value.action;
		this.parameters = _value.parameters ? new googleProtobuf010.Struct(_value.parameters) : undefined;
		this.allRequiredParamsPresent = _value.allRequiredParamsPresent;
		this.fulfillmentText = _value.fulfillmentText;
		this.fulfillmentMessages = (_value.fulfillmentMessages || []).map((m) => new ondewoNlu013.Intent.Message(m));
		this.webhookSource = _value.webhookSource;
		this.webhookPayload = _value.webhookPayload ? new googleProtobuf010.Struct(_value.webhookPayload) : undefined;
		this.outputContexts = (_value.outputContexts || []).map((m) => new ondewoNlu006.Context(m));
		this.intent = _value.intent ? new ondewoNlu013.Intent(_value.intent) : undefined;
		this.intentDetectionConfidence = _value.intentDetectionConfidence;
		this.queryTextOriginal = _value.queryTextOriginal;
		this.diagnosticInfo = _value.diagnosticInfo ? new googleProtobuf010.Struct(_value.diagnosticInfo) : undefined;
		this.languageCode = _value.languageCode;
		QueryResult.refineValues(this);
	}
	get queryText() {
		return this._queryText;
	}
	set queryText(value) {
		this._queryText = value;
	}
	get speechRecognitionConfidence() {
		return this._speechRecognitionConfidence;
	}
	set speechRecognitionConfidence(value) {
		this._speechRecognitionConfidence = value;
	}
	get action() {
		return this._action;
	}
	set action(value) {
		this._action = value;
	}
	get parameters() {
		return this._parameters;
	}
	set parameters(value) {
		this._parameters = value;
	}
	get allRequiredParamsPresent() {
		return this._allRequiredParamsPresent;
	}
	set allRequiredParamsPresent(value) {
		this._allRequiredParamsPresent = value;
	}
	get fulfillmentText() {
		return this._fulfillmentText;
	}
	set fulfillmentText(value) {
		this._fulfillmentText = value;
	}
	get fulfillmentMessages() {
		return this._fulfillmentMessages;
	}
	set fulfillmentMessages(value) {
		this._fulfillmentMessages = value;
	}
	get webhookSource() {
		return this._webhookSource;
	}
	set webhookSource(value) {
		this._webhookSource = value;
	}
	get webhookPayload() {
		return this._webhookPayload;
	}
	set webhookPayload(value) {
		this._webhookPayload = value;
	}
	get outputContexts() {
		return this._outputContexts;
	}
	set outputContexts(value) {
		this._outputContexts = value;
	}
	get intent() {
		return this._intent;
	}
	set intent(value) {
		this._intent = value;
	}
	get intentDetectionConfidence() {
		return this._intentDetectionConfidence;
	}
	set intentDetectionConfidence(value) {
		this._intentDetectionConfidence = value;
	}
	get queryTextOriginal() {
		return this._queryTextOriginal;
	}
	set queryTextOriginal(value) {
		this._queryTextOriginal = value;
	}
	get diagnosticInfo() {
		return this._diagnosticInfo;
	}
	set diagnosticInfo(value) {
		this._diagnosticInfo = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		QueryResult.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			queryText: this.queryText,
			speechRecognitionConfidence: this.speechRecognitionConfidence,
			action: this.action,
			parameters: this.parameters ? this.parameters.toObject() : undefined,
			allRequiredParamsPresent: this.allRequiredParamsPresent,
			fulfillmentText: this.fulfillmentText,
			fulfillmentMessages: (this.fulfillmentMessages || []).map((m) => m.toObject()),
			webhookSource: this.webhookSource,
			webhookPayload: this.webhookPayload ? this.webhookPayload.toObject() : undefined,
			outputContexts: (this.outputContexts || []).map((m) => m.toObject()),
			intent: this.intent ? this.intent.toObject() : undefined,
			intentDetectionConfidence: this.intentDetectionConfidence,
			queryTextOriginal: this.queryTextOriginal,
			diagnosticInfo: this.diagnosticInfo ? this.diagnosticInfo.toObject() : undefined,
			languageCode: this.languageCode
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
		options
	) {
		return {
			queryText: this.queryText,
			speechRecognitionConfidence: this.speechRecognitionConfidence,
			action: this.action,
			parameters: this.parameters ? this.parameters.toProtobufJSON(options) : null,
			allRequiredParamsPresent: this.allRequiredParamsPresent,
			fulfillmentText: this.fulfillmentText,
			fulfillmentMessages: (this.fulfillmentMessages || []).map((m) => m.toProtobufJSON(options)),
			webhookSource: this.webhookSource,
			webhookPayload: this.webhookPayload ? this.webhookPayload.toProtobufJSON(options) : null,
			outputContexts: (this.outputContexts || []).map((m) => m.toProtobufJSON(options)),
			intent: this.intent ? this.intent.toProtobufJSON(options) : null,
			intentDetectionConfidence: this.intentDetectionConfidence,
			queryTextOriginal: this.queryTextOriginal,
			diagnosticInfo: this.diagnosticInfo ? this.diagnosticInfo.toProtobufJSON(options) : null,
			languageCode: this.languageCode
		};
	}
}
export { QueryResult };
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentRequest
 */
class StreamingDetectIntentRequest {
	static id = 'ondewo.nlu.StreamingDetectIntentRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StreamingDetectIntentRequest();
		StreamingDetectIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.session = _instance.session || '';
		_instance.queryParams = _instance.queryParams || undefined;
		_instance.queryInput = _instance.queryInput || undefined;
		_instance.singleUtterance = _instance.singleUtterance || false;
		_instance.inputAudio = _instance.inputAudio || new Uint8Array();
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.session = _reader.readString();
					break;
				case 2:
					_instance.queryParams = new QueryParameters();
					_reader.readMessage(_instance.queryParams, QueryParameters.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.queryInput = new QueryInput();
					_reader.readMessage(_instance.queryInput, QueryInput.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.singleUtterance = _reader.readBool();
					break;
				case 6:
					_instance.inputAudio = _reader.readBytes();
					break;
				default:
					_reader.skipField();
			}
		}
		StreamingDetectIntentRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.session) {
			_writer.writeString(1, _instance.session);
		}
		if (_instance.queryParams) {
			_writer.writeMessage(2, _instance.queryParams, QueryParameters.serializeBinaryToWriter);
		}
		if (_instance.queryInput) {
			_writer.writeMessage(3, _instance.queryInput, QueryInput.serializeBinaryToWriter);
		}
		if (_instance.singleUtterance) {
			_writer.writeBool(4, _instance.singleUtterance);
		}
		if (_instance.inputAudio && _instance.inputAudio.length) {
			_writer.writeBytes(6, _instance.inputAudio);
		}
	}
	_session;
	_queryParams;
	_queryInput;
	_singleUtterance;
	_inputAudio;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.session = _value.session;
		this.queryParams = _value.queryParams ? new QueryParameters(_value.queryParams) : undefined;
		this.queryInput = _value.queryInput ? new QueryInput(_value.queryInput) : undefined;
		this.singleUtterance = _value.singleUtterance;
		this.inputAudio = _value.inputAudio;
		StreamingDetectIntentRequest.refineValues(this);
	}
	get session() {
		return this._session;
	}
	set session(value) {
		this._session = value;
	}
	get queryParams() {
		return this._queryParams;
	}
	set queryParams(value) {
		this._queryParams = value;
	}
	get queryInput() {
		return this._queryInput;
	}
	set queryInput(value) {
		this._queryInput = value;
	}
	get singleUtterance() {
		return this._singleUtterance;
	}
	set singleUtterance(value) {
		this._singleUtterance = value;
	}
	get inputAudio() {
		return this._inputAudio;
	}
	set inputAudio(value) {
		this._inputAudio = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingDetectIntentRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			session: this.session,
			queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
			queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
			singleUtterance: this.singleUtterance,
			inputAudio: this.inputAudio ? this.inputAudio.subarray(0) : new Uint8Array()
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
		options
	) {
		return {
			session: this.session,
			queryParams: this.queryParams ? this.queryParams.toProtobufJSON(options) : null,
			queryInput: this.queryInput ? this.queryInput.toProtobufJSON(options) : null,
			singleUtterance: this.singleUtterance,
			inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
		};
	}
}
export { StreamingDetectIntentRequest };
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentResponse
 */
class StreamingDetectIntentResponse {
	static id = 'ondewo.nlu.StreamingDetectIntentResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StreamingDetectIntentResponse();
		StreamingDetectIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.responseId = _instance.responseId || '';
		_instance.recognitionResult = _instance.recognitionResult || undefined;
		_instance.queryResult = _instance.queryResult || undefined;
		_instance.webhookStatus = _instance.webhookStatus || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.responseId = _reader.readString();
					break;
				case 2:
					_instance.recognitionResult = new StreamingRecognitionResult();
					_reader.readMessage(_instance.recognitionResult, StreamingRecognitionResult.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.queryResult = new QueryResult();
					_reader.readMessage(_instance.queryResult, QueryResult.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.webhookStatus = new googleRpc011.Status();
					_reader.readMessage(_instance.webhookStatus, googleRpc011.Status.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		StreamingDetectIntentResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.responseId) {
			_writer.writeString(1, _instance.responseId);
		}
		if (_instance.recognitionResult) {
			_writer.writeMessage(2, _instance.recognitionResult, StreamingRecognitionResult.serializeBinaryToWriter);
		}
		if (_instance.queryResult) {
			_writer.writeMessage(3, _instance.queryResult, QueryResult.serializeBinaryToWriter);
		}
		if (_instance.webhookStatus) {
			_writer.writeMessage(4, _instance.webhookStatus, googleRpc011.Status.serializeBinaryToWriter);
		}
	}
	_responseId;
	_recognitionResult;
	_queryResult;
	_webhookStatus;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingDetectIntentResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.responseId = _value.responseId;
		this.recognitionResult = _value.recognitionResult
			? new StreamingRecognitionResult(_value.recognitionResult)
			: undefined;
		this.queryResult = _value.queryResult ? new QueryResult(_value.queryResult) : undefined;
		this.webhookStatus = _value.webhookStatus ? new googleRpc011.Status(_value.webhookStatus) : undefined;
		StreamingDetectIntentResponse.refineValues(this);
	}
	get responseId() {
		return this._responseId;
	}
	set responseId(value) {
		this._responseId = value;
	}
	get recognitionResult() {
		return this._recognitionResult;
	}
	set recognitionResult(value) {
		this._recognitionResult = value;
	}
	get queryResult() {
		return this._queryResult;
	}
	set queryResult(value) {
		this._queryResult = value;
	}
	get webhookStatus() {
		return this._webhookStatus;
	}
	set webhookStatus(value) {
		this._webhookStatus = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingDetectIntentResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			responseId: this.responseId,
			recognitionResult: this.recognitionResult ? this.recognitionResult.toObject() : undefined,
			queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
			webhookStatus: this.webhookStatus ? this.webhookStatus.toObject() : undefined
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
		options
	) {
		return {
			responseId: this.responseId,
			recognitionResult: this.recognitionResult ? this.recognitionResult.toProtobufJSON(options) : null,
			queryResult: this.queryResult ? this.queryResult.toProtobufJSON(options) : null,
			webhookStatus: this.webhookStatus ? this.webhookStatus.toProtobufJSON(options) : null
		};
	}
}
export { StreamingDetectIntentResponse };
/**
 * Message implementation for ondewo.nlu.StreamingRecognitionResult
 */
class StreamingRecognitionResult {
	static id = 'ondewo.nlu.StreamingRecognitionResult';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StreamingRecognitionResult();
		StreamingRecognitionResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.messageType = _instance.messageType || 0;
		_instance.transcript = _instance.transcript || '';
		_instance.isFinal = _instance.isFinal || false;
		_instance.confidence = _instance.confidence || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.messageType = _reader.readEnum();
					break;
				case 2:
					_instance.transcript = _reader.readString();
					break;
				case 3:
					_instance.isFinal = _reader.readBool();
					break;
				case 4:
					_instance.confidence = _reader.readFloat();
					break;
				default:
					_reader.skipField();
			}
		}
		StreamingRecognitionResult.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.messageType) {
			_writer.writeEnum(1, _instance.messageType);
		}
		if (_instance.transcript) {
			_writer.writeString(2, _instance.transcript);
		}
		if (_instance.isFinal) {
			_writer.writeBool(3, _instance.isFinal);
		}
		if (_instance.confidence) {
			_writer.writeFloat(4, _instance.confidence);
		}
	}
	_messageType;
	_transcript;
	_isFinal;
	_confidence;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingRecognitionResult to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.messageType = _value.messageType;
		this.transcript = _value.transcript;
		this.isFinal = _value.isFinal;
		this.confidence = _value.confidence;
		StreamingRecognitionResult.refineValues(this);
	}
	get messageType() {
		return this._messageType;
	}
	set messageType(value) {
		this._messageType = value;
	}
	get transcript() {
		return this._transcript;
	}
	set transcript(value) {
		this._transcript = value;
	}
	get isFinal() {
		return this._isFinal;
	}
	set isFinal(value) {
		this._isFinal = value;
	}
	get confidence() {
		return this._confidence;
	}
	set confidence(value) {
		this._confidence = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingRecognitionResult.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			messageType: this.messageType,
			transcript: this.transcript,
			isFinal: this.isFinal,
			confidence: this.confidence
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
		options
	) {
		return {
			messageType:
				StreamingRecognitionResult.MessageType[
					this.messageType === null || this.messageType === undefined ? 0 : this.messageType
				],
			transcript: this.transcript,
			isFinal: this.isFinal,
			confidence: this.confidence
		};
	}
}
export { StreamingRecognitionResult };
(function (StreamingRecognitionResult) {
	let MessageType;
	(function (MessageType) {
		MessageType[(MessageType['MESSAGE_TYPE_UNSPECIFIED'] = 0)] = 'MESSAGE_TYPE_UNSPECIFIED';
		MessageType[(MessageType['TRANSCRIPT'] = 1)] = 'TRANSCRIPT';
		MessageType[(MessageType['END_OF_SINGLE_UTTERANCE'] = 2)] = 'END_OF_SINGLE_UTTERANCE';
	})((MessageType = StreamingRecognitionResult.MessageType || (StreamingRecognitionResult.MessageType = {})));
})(StreamingRecognitionResult || (StreamingRecognitionResult = {}));
/**
 * Message implementation for ondewo.nlu.InputAudioConfig
 */
class InputAudioConfig {
	static id = 'ondewo.nlu.InputAudioConfig';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new InputAudioConfig();
		InputAudioConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.audioEncoding = _instance.audioEncoding || 0;
		_instance.sampleRateHertz = _instance.sampleRateHertz || 0;
		_instance.languageCode = _instance.languageCode || '';
		_instance.phraseHints = _instance.phraseHints || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.audioEncoding = _reader.readEnum();
					break;
				case 2:
					_instance.sampleRateHertz = _reader.readInt32();
					break;
				case 3:
					_instance.languageCode = _reader.readString();
					break;
				case 4:
					(_instance.phraseHints = _instance.phraseHints || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		InputAudioConfig.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioEncoding) {
			_writer.writeEnum(1, _instance.audioEncoding);
		}
		if (_instance.sampleRateHertz) {
			_writer.writeInt32(2, _instance.sampleRateHertz);
		}
		if (_instance.languageCode) {
			_writer.writeString(3, _instance.languageCode);
		}
		if (_instance.phraseHints && _instance.phraseHints.length) {
			_writer.writeRepeatedString(4, _instance.phraseHints);
		}
	}
	_audioEncoding;
	_sampleRateHertz;
	_languageCode;
	_phraseHints;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of InputAudioConfig to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.audioEncoding = _value.audioEncoding;
		this.sampleRateHertz = _value.sampleRateHertz;
		this.languageCode = _value.languageCode;
		this.phraseHints = (_value.phraseHints || []).slice();
		InputAudioConfig.refineValues(this);
	}
	get audioEncoding() {
		return this._audioEncoding;
	}
	set audioEncoding(value) {
		this._audioEncoding = value;
	}
	get sampleRateHertz() {
		return this._sampleRateHertz;
	}
	set sampleRateHertz(value) {
		this._sampleRateHertz = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	get phraseHints() {
		return this._phraseHints;
	}
	set phraseHints(value) {
		this._phraseHints = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		InputAudioConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			audioEncoding: this.audioEncoding,
			sampleRateHertz: this.sampleRateHertz,
			languageCode: this.languageCode,
			phraseHints: (this.phraseHints || []).slice()
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
		options
	) {
		return {
			audioEncoding:
				AudioEncoding[this.audioEncoding === null || this.audioEncoding === undefined ? 0 : this.audioEncoding],
			sampleRateHertz: this.sampleRateHertz,
			languageCode: this.languageCode,
			phraseHints: (this.phraseHints || []).slice()
		};
	}
}
export { InputAudioConfig };
/**
 * Message implementation for ondewo.nlu.TextInput
 */
class TextInput {
	static id = 'ondewo.nlu.TextInput';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TextInput();
		TextInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.text = _instance.text || '';
		_instance.languageCode = _instance.languageCode || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.text = _reader.readString();
					break;
				case 2:
					_instance.languageCode = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		TextInput.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.text) {
			_writer.writeString(1, _instance.text);
		}
		if (_instance.languageCode) {
			_writer.writeString(2, _instance.languageCode);
		}
	}
	_text;
	_languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TextInput to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.text = _value.text;
		this.languageCode = _value.languageCode;
		TextInput.refineValues(this);
	}
	get text() {
		return this._text;
	}
	set text(value) {
		this._text = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TextInput.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			text: this.text,
			languageCode: this.languageCode
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
		options
	) {
		return {
			text: this.text,
			languageCode: this.languageCode
		};
	}
}
export { TextInput };
/**
 * Message implementation for ondewo.nlu.EventInput
 */
class EventInput {
	static id = 'ondewo.nlu.EventInput';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new EventInput();
		EventInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.name = _instance.name || '';
		_instance.parameters = _instance.parameters || undefined;
		_instance.languageCode = _instance.languageCode || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.name = _reader.readString();
					break;
				case 2:
					_instance.parameters = new googleProtobuf010.Struct();
					_reader.readMessage(_instance.parameters, googleProtobuf010.Struct.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.languageCode = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		EventInput.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.name) {
			_writer.writeString(1, _instance.name);
		}
		if (_instance.parameters) {
			_writer.writeMessage(2, _instance.parameters, googleProtobuf010.Struct.serializeBinaryToWriter);
		}
		if (_instance.languageCode) {
			_writer.writeString(3, _instance.languageCode);
		}
	}
	_name;
	_parameters;
	_languageCode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of EventInput to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.name = _value.name;
		this.parameters = _value.parameters ? new googleProtobuf010.Struct(_value.parameters) : undefined;
		this.languageCode = _value.languageCode;
		EventInput.refineValues(this);
	}
	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}
	get parameters() {
		return this._parameters;
	}
	set parameters(value) {
		this._parameters = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		EventInput.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			name: this.name,
			parameters: this.parameters ? this.parameters.toObject() : undefined,
			languageCode: this.languageCode
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
		options
	) {
		return {
			name: this.name,
			parameters: this.parameters ? this.parameters.toProtobufJSON(options) : null,
			languageCode: this.languageCode
		};
	}
}
export { EventInput };
/**
 * Message implementation for ondewo.nlu.Session
 */
class Session {
	static id = 'ondewo.nlu.Session';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Session();
		Session.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.name = _instance.name || '';
		_instance.sessionSteps = _instance.sessionSteps || [];
		_instance.sessionInfo = _instance.sessionInfo || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.name = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new SessionStep();
					_reader.readMessage(messageInitializer2, SessionStep.deserializeBinaryFromReader);
					(_instance.sessionSteps = _instance.sessionSteps || []).push(messageInitializer2);
					break;
				case 3:
					_instance.sessionInfo = new SessionInfo();
					_reader.readMessage(_instance.sessionInfo, SessionInfo.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		Session.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.name) {
			_writer.writeString(1, _instance.name);
		}
		if (_instance.sessionSteps && _instance.sessionSteps.length) {
			_writer.writeRepeatedMessage(2, _instance.sessionSteps, SessionStep.serializeBinaryToWriter);
		}
		if (_instance.sessionInfo) {
			_writer.writeMessage(3, _instance.sessionInfo, SessionInfo.serializeBinaryToWriter);
		}
	}
	_name;
	_sessionSteps;
	_sessionInfo;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Session to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.name = _value.name;
		this.sessionSteps = (_value.sessionSteps || []).map((m) => new SessionStep(m));
		this.sessionInfo = _value.sessionInfo ? new SessionInfo(_value.sessionInfo) : undefined;
		Session.refineValues(this);
	}
	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}
	get sessionSteps() {
		return this._sessionSteps;
	}
	set sessionSteps(value) {
		this._sessionSteps = value;
	}
	get sessionInfo() {
		return this._sessionInfo;
	}
	set sessionInfo(value) {
		this._sessionInfo = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Session.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			name: this.name,
			sessionSteps: (this.sessionSteps || []).map((m) => m.toObject()),
			sessionInfo: this.sessionInfo ? this.sessionInfo.toObject() : undefined
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
		options
	) {
		return {
			name: this.name,
			sessionSteps: (this.sessionSteps || []).map((m) => m.toProtobufJSON(options)),
			sessionInfo: this.sessionInfo ? this.sessionInfo.toProtobufJSON(options) : null
		};
	}
}
export { Session };
(function (Session) {
	let View;
	(function (View) {
		View[(View['VIEW_UNSPECIFIED'] = 0)] = 'VIEW_UNSPECIFIED';
		View[(View['VIEW_FULL'] = 1)] = 'VIEW_FULL';
		View[(View['VIEW_SPARSE'] = 2)] = 'VIEW_SPARSE';
	})((View = Session.View || (Session.View = {})));
})(Session || (Session = {}));
/**
 * Message implementation for ondewo.nlu.SessionStep
 */
class SessionStep {
	static id = 'ondewo.nlu.SessionStep';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SessionStep();
		SessionStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.name = _instance.name || '';
		_instance.detectIntentRequest = _instance.detectIntentRequest || undefined;
		_instance.detectIntentResponse = _instance.detectIntentResponse || undefined;
		_instance.contexts = _instance.contexts || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.name = _reader.readString();
					break;
				case 2:
					_instance.detectIntentRequest = new DetectIntentRequest();
					_reader.readMessage(_instance.detectIntentRequest, DetectIntentRequest.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.detectIntentResponse = new DetectIntentResponse();
					_reader.readMessage(_instance.detectIntentResponse, DetectIntentResponse.deserializeBinaryFromReader);
					break;
				case 4:
					const messageInitializer4 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer4, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.contexts = _instance.contexts || []).push(messageInitializer4);
					break;
				default:
					_reader.skipField();
			}
		}
		SessionStep.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.name) {
			_writer.writeString(1, _instance.name);
		}
		if (_instance.detectIntentRequest) {
			_writer.writeMessage(2, _instance.detectIntentRequest, DetectIntentRequest.serializeBinaryToWriter);
		}
		if (_instance.detectIntentResponse) {
			_writer.writeMessage(3, _instance.detectIntentResponse, DetectIntentResponse.serializeBinaryToWriter);
		}
		if (_instance.contexts && _instance.contexts.length) {
			_writer.writeRepeatedMessage(4, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
	}
	_name;
	_detectIntentRequest;
	_detectIntentResponse;
	_contexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionStep to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.name = _value.name;
		this.detectIntentRequest = _value.detectIntentRequest
			? new DetectIntentRequest(_value.detectIntentRequest)
			: undefined;
		this.detectIntentResponse = _value.detectIntentResponse
			? new DetectIntentResponse(_value.detectIntentResponse)
			: undefined;
		this.contexts = (_value.contexts || []).map((m) => new ondewoNlu006.Context(m));
		SessionStep.refineValues(this);
	}
	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}
	get detectIntentRequest() {
		return this._detectIntentRequest;
	}
	set detectIntentRequest(value) {
		this._detectIntentRequest = value;
	}
	get detectIntentResponse() {
		return this._detectIntentResponse;
	}
	set detectIntentResponse(value) {
		this._detectIntentResponse = value;
	}
	get contexts() {
		return this._contexts;
	}
	set contexts(value) {
		this._contexts = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SessionStep.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			name: this.name,
			detectIntentRequest: this.detectIntentRequest ? this.detectIntentRequest.toObject() : undefined,
			detectIntentResponse: this.detectIntentResponse ? this.detectIntentResponse.toObject() : undefined,
			contexts: (this.contexts || []).map((m) => m.toObject())
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
		options
	) {
		return {
			name: this.name,
			detectIntentRequest: this.detectIntentRequest ? this.detectIntentRequest.toProtobufJSON(options) : null,
			detectIntentResponse: this.detectIntentResponse ? this.detectIntentResponse.toProtobufJSON(options) : null,
			contexts: (this.contexts || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
export { SessionStep };
/**
 * Message implementation for ondewo.nlu.TrackSessionStepRequest
 */
class TrackSessionStepRequest {
	static id = 'ondewo.nlu.TrackSessionStepRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TrackSessionStepRequest();
		TrackSessionStepRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.sessionStep = _instance.sessionStep || undefined;
		_instance.sessionView = _instance.sessionView || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					_instance.sessionStep = new SessionStep();
					_reader.readMessage(_instance.sessionStep, SessionStep.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.sessionView = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		TrackSessionStepRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.sessionStep) {
			_writer.writeMessage(2, _instance.sessionStep, SessionStep.serializeBinaryToWriter);
		}
		if (_instance.sessionView) {
			_writer.writeEnum(3, _instance.sessionView);
		}
	}
	_sessionId;
	_sessionStep;
	_sessionView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrackSessionStepRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.sessionStep = _value.sessionStep ? new SessionStep(_value.sessionStep) : undefined;
		this.sessionView = _value.sessionView;
		TrackSessionStepRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get sessionStep() {
		return this._sessionStep;
	}
	set sessionStep(value) {
		this._sessionStep = value;
	}
	get sessionView() {
		return this._sessionView;
	}
	set sessionView(value) {
		this._sessionView = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TrackSessionStepRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
			sessionView: this.sessionView
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
		options
	) {
		return {
			sessionId: this.sessionId,
			sessionStep: this.sessionStep ? this.sessionStep.toProtobufJSON(options) : null,
			sessionView: Session.View[this.sessionView === null || this.sessionView === undefined ? 0 : this.sessionView]
		};
	}
}
export { TrackSessionStepRequest };
/**
 * Message implementation for ondewo.nlu.ListSessionsRequest
 */
class ListSessionsRequest {
	static id = 'ondewo.nlu.ListSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionsRequest();
		ListSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionView = _instance.sessionView || 0;
		_instance.pageToken = _instance.pageToken || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
		_instance.fieldMask = _instance.fieldMask || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionView = _reader.readEnum();
					break;
				case 4:
					_instance.pageToken = _reader.readString();
					break;
				case 5:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.fieldMask = new googleProtobuf005.FieldMask();
					_reader.readMessage(_instance.fieldMask, googleProtobuf005.FieldMask.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionView) {
			_writer.writeEnum(2, _instance.sessionView);
		}
		if (_instance.pageToken) {
			_writer.writeString(4, _instance.pageToken);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(5, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
		if (_instance.fieldMask) {
			_writer.writeMessage(6, _instance.fieldMask, googleProtobuf005.FieldMask.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionView;
	_pageToken;
	_sessionFilter;
	_fieldMask;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionView = _value.sessionView;
		this.pageToken = _value.pageToken;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		this.fieldMask = _value.fieldMask ? new googleProtobuf005.FieldMask(_value.fieldMask) : undefined;
		ListSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionView() {
		return this._sessionView;
	}
	set sessionView(value) {
		this._sessionView = value;
	}
	get pageToken() {
		return this._pageToken;
	}
	set pageToken(value) {
		this._pageToken = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	get fieldMask() {
		return this._fieldMask;
	}
	set fieldMask(value) {
		this._fieldMask = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionView: this.sessionView,
			pageToken: this.pageToken,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined,
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
		options
	) {
		return {
			parent: this.parent,
			sessionView: Session.View[this.sessionView === null || this.sessionView === undefined ? 0 : this.sessionView],
			pageToken: this.pageToken,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null,
			fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
		};
	}
}
export { ListSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ContextFilter
 */
class ContextFilter {
	static id = 'ondewo.nlu.ContextFilter';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ContextFilter();
		ContextFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.contextName = _instance.contextName || '';
		_instance.key = _instance.key || '';
		_instance.value = _instance.value || '';
		_instance.operator = _instance.operator || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.contextName = _reader.readString();
					break;
				case 2:
					_instance.key = _reader.readString();
					break;
				case 3:
					_instance.value = _reader.readString();
					break;
				case 4:
					_instance.operator = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		ContextFilter.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.contextName) {
			_writer.writeString(1, _instance.contextName);
		}
		if (_instance.key) {
			_writer.writeString(2, _instance.key);
		}
		if (_instance.value) {
			_writer.writeString(3, _instance.value);
		}
		if (_instance.operator) {
			_writer.writeEnum(4, _instance.operator);
		}
	}
	_contextName;
	_key;
	_value;
	_operator;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ContextFilter to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.contextName = _value.contextName;
		this.key = _value.key;
		this.value = _value.value;
		this.operator = _value.operator;
		ContextFilter.refineValues(this);
	}
	get contextName() {
		return this._contextName;
	}
	set contextName(value) {
		this._contextName = value;
	}
	get key() {
		return this._key;
	}
	set key(value) {
		this._key = value;
	}
	get value() {
		return this._value;
	}
	set value(value) {
		this._value = value;
	}
	get operator() {
		return this._operator;
	}
	set operator(value) {
		this._operator = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ContextFilter.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			contextName: this.contextName,
			key: this.key,
			value: this.value,
			operator: this.operator
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
		options
	) {
		return {
			contextName: this.contextName,
			key: this.key,
			value: this.value,
			operator: ComparisonOperator[this.operator === null || this.operator === undefined ? 0 : this.operator]
		};
	}
}
export { ContextFilter };
/**
 * Message implementation for ondewo.nlu.SessionFilter
 */
class SessionFilter {
	static id = 'ondewo.nlu.SessionFilter';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SessionFilter();
		SessionFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageCodes = _instance.languageCodes || [];
		_instance.matchedIntents = _instance.matchedIntents || [];
		_instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
		_instance.minIntentsConfidenceMin = _instance.minIntentsConfidenceMin || 0;
		_instance.minIntentsConfidenceMax = _instance.minIntentsConfidenceMax || 0;
		_instance.minEntityTypesConfidenceMin = _instance.minEntityTypesConfidenceMin || 0;
		_instance.minEntityTypesConfidenceMax = _instance.minEntityTypesConfidenceMax || 0;
		_instance.earliest = _instance.earliest || 0;
		_instance.latest = _instance.latest || 0;
		_instance.minNumberTurns = _instance.minNumberTurns || 0;
		_instance.maxNumberTurns = _instance.maxNumberTurns || 0;
		_instance.labels = _instance.labels || [];
		_instance.userIds = _instance.userIds || [];
		_instance.intentTags = _instance.intentTags || [];
		_instance.sessionIds = _instance.sessionIds || [];
		_instance.inputContexts = _instance.inputContexts || [];
		_instance.outputContexts = _instance.outputContexts || [];
		_instance.durationInSMin = _instance.durationInSMin || 0;
		_instance.durationInSMax = _instance.durationInSMax || 0;
		_instance.durationInMMin = _instance.durationInMMin || 0;
		_instance.durationInMMax = _instance.durationInMMax || 0;
		_instance.durationInMRoundedMin = _instance.durationInMRoundedMin || 0;
		_instance.durationInMRoundedMax = _instance.durationInMRoundedMax || 0;
		_instance.durationInterval15sRoundedMin = _instance.durationInterval15sRoundedMin || 0;
		_instance.durationInterval15sRoundedMax = _instance.durationInterval15sRoundedMax || 0;
		_instance.durationInterval30sRoundedMin = _instance.durationInterval30sRoundedMin || 0;
		_instance.durationInterval30sRoundedMax = _instance.durationInterval30sRoundedMax || 0;
		_instance.durationInterval45sRoundedMin = _instance.durationInterval45sRoundedMin || 0;
		_instance.durationInterval45sRoundedMax = _instance.durationInterval45sRoundedMax || 0;
		_instance.startedTimeSlotPerHourMin = _instance.startedTimeSlotPerHourMin || '';
		_instance.startedTimeSlotPerHourMax = _instance.startedTimeSlotPerHourMax || '';
		_instance.startedTimeSlotPerQuarterHourMin = _instance.startedTimeSlotPerQuarterHourMin || '';
		_instance.startedTimeSlotPerQuarterHourMax = _instance.startedTimeSlotPerQuarterHourMax || '';
		_instance.startedTimeSlotPerHalfHourMin = _instance.startedTimeSlotPerHalfHourMin || '';
		_instance.startedTimeSlotPerHalfHourMax = _instance.startedTimeSlotPerHalfHourMax || '';
		_instance.startedTimeSlotPerDayPhaseMin = _instance.startedTimeSlotPerDayPhaseMin || '';
		_instance.startedTimeSlotPerDayPhaseMax = _instance.startedTimeSlotPerDayPhaseMax || '';
		_instance.startedTimeSlotPerMinuteMin = _instance.startedTimeSlotPerMinuteMin || '';
		_instance.startedTimeSlotPerMinuteMax = _instance.startedTimeSlotPerMinuteMax || '';
		_instance.durationInSRoundedMin = _instance.durationInSRoundedMin || 0;
		_instance.durationInSRoundedMax = _instance.durationInSRoundedMax || 0;
		_instance.platforms = _instance.platforms || [];
		_instance.accountIds = _instance.accountIds || [];
		_instance.propertyIds = _instance.propertyIds || [];
		_instance.datastreamIds = _instance.datastreamIds || [];
		_instance.originIds = _instance.originIds || [];
		_instance.identifiedUserIds = _instance.identifiedUserIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
					break;
				case 2:
					const messageInitializer2 = new ondewoNlu013.Intent();
					_reader.readMessage(messageInitializer2, ondewoNlu013.Intent.deserializeBinaryFromReader);
					(_instance.matchedIntents = _instance.matchedIntents || []).push(messageInitializer2);
					break;
				case 3:
					const messageInitializer3 = new ondewoNlu014.EntityType();
					_reader.readMessage(messageInitializer3, ondewoNlu014.EntityType.deserializeBinaryFromReader);
					(_instance.matchedEntityTypes = _instance.matchedEntityTypes || []).push(messageInitializer3);
					break;
				case 4:
					_instance.minIntentsConfidenceMin = _reader.readFloat();
					break;
				case 5:
					_instance.minIntentsConfidenceMax = _reader.readFloat();
					break;
				case 6:
					_instance.minEntityTypesConfidenceMin = _reader.readFloat();
					break;
				case 7:
					_instance.minEntityTypesConfidenceMax = _reader.readFloat();
					break;
				case 8:
					_instance.earliest = _reader.readFloat();
					break;
				case 9:
					_instance.latest = _reader.readFloat();
					break;
				case 10:
					_instance.minNumberTurns = _reader.readInt32();
					break;
				case 11:
					_instance.maxNumberTurns = _reader.readInt32();
					break;
				case 12:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				case 13:
					(_instance.userIds = _instance.userIds || []).push(_reader.readString());
					break;
				case 14:
					(_instance.intentTags = _instance.intentTags || []).push(_reader.readString());
					break;
				case 15:
					(_instance.sessionIds = _instance.sessionIds || []).push(_reader.readString());
					break;
				case 16:
					const messageInitializer16 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer16, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.inputContexts = _instance.inputContexts || []).push(messageInitializer16);
					break;
				case 17:
					const messageInitializer17 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer17, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.outputContexts = _instance.outputContexts || []).push(messageInitializer17);
					break;
				case 18:
					_instance.durationInSMin = _reader.readFloat();
					break;
				case 19:
					_instance.durationInSMax = _reader.readFloat();
					break;
				case 20:
					_instance.durationInMMin = _reader.readFloat();
					break;
				case 21:
					_instance.durationInMMax = _reader.readFloat();
					break;
				case 22:
					_instance.durationInMRoundedMin = _reader.readFloat();
					break;
				case 23:
					_instance.durationInMRoundedMax = _reader.readFloat();
					break;
				case 24:
					_instance.durationInterval15sRoundedMin = _reader.readFloat();
					break;
				case 25:
					_instance.durationInterval15sRoundedMax = _reader.readFloat();
					break;
				case 26:
					_instance.durationInterval30sRoundedMin = _reader.readFloat();
					break;
				case 27:
					_instance.durationInterval30sRoundedMax = _reader.readFloat();
					break;
				case 28:
					_instance.durationInterval45sRoundedMin = _reader.readFloat();
					break;
				case 29:
					_instance.durationInterval45sRoundedMax = _reader.readFloat();
					break;
				case 30:
					_instance.startedTimeSlotPerHourMin = _reader.readString();
					break;
				case 31:
					_instance.startedTimeSlotPerHourMax = _reader.readString();
					break;
				case 32:
					_instance.startedTimeSlotPerQuarterHourMin = _reader.readString();
					break;
				case 33:
					_instance.startedTimeSlotPerQuarterHourMax = _reader.readString();
					break;
				case 34:
					_instance.startedTimeSlotPerHalfHourMin = _reader.readString();
					break;
				case 35:
					_instance.startedTimeSlotPerHalfHourMax = _reader.readString();
					break;
				case 36:
					_instance.startedTimeSlotPerDayPhaseMin = _reader.readString();
					break;
				case 37:
					_instance.startedTimeSlotPerDayPhaseMax = _reader.readString();
					break;
				case 38:
					_instance.startedTimeSlotPerMinuteMin = _reader.readString();
					break;
				case 39:
					_instance.startedTimeSlotPerMinuteMax = _reader.readString();
					break;
				case 40:
					_instance.durationInSRoundedMin = _reader.readFloat();
					break;
				case 41:
					_instance.durationInSRoundedMax = _reader.readFloat();
					break;
				case 42:
					(_instance.platforms = _instance.platforms || []).push(...(_reader.readPackedEnum() || []));
					break;
				case 43:
					(_instance.accountIds = _instance.accountIds || []).push(_reader.readString());
					break;
				case 44:
					(_instance.propertyIds = _instance.propertyIds || []).push(_reader.readString());
					break;
				case 45:
					(_instance.datastreamIds = _instance.datastreamIds || []).push(_reader.readString());
					break;
				case 46:
					(_instance.originIds = _instance.originIds || []).push(_reader.readString());
					break;
				case 47:
					(_instance.identifiedUserIds = _instance.identifiedUserIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		SessionFilter.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageCodes && _instance.languageCodes.length) {
			_writer.writeRepeatedString(1, _instance.languageCodes);
		}
		if (_instance.matchedIntents && _instance.matchedIntents.length) {
			_writer.writeRepeatedMessage(2, _instance.matchedIntents, ondewoNlu013.Intent.serializeBinaryToWriter);
		}
		if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
			_writer.writeRepeatedMessage(3, _instance.matchedEntityTypes, ondewoNlu014.EntityType.serializeBinaryToWriter);
		}
		if (_instance.minIntentsConfidenceMin) {
			_writer.writeFloat(4, _instance.minIntentsConfidenceMin);
		}
		if (_instance.minIntentsConfidenceMax) {
			_writer.writeFloat(5, _instance.minIntentsConfidenceMax);
		}
		if (_instance.minEntityTypesConfidenceMin) {
			_writer.writeFloat(6, _instance.minEntityTypesConfidenceMin);
		}
		if (_instance.minEntityTypesConfidenceMax) {
			_writer.writeFloat(7, _instance.minEntityTypesConfidenceMax);
		}
		if (_instance.earliest) {
			_writer.writeFloat(8, _instance.earliest);
		}
		if (_instance.latest) {
			_writer.writeFloat(9, _instance.latest);
		}
		if (_instance.minNumberTurns) {
			_writer.writeInt32(10, _instance.minNumberTurns);
		}
		if (_instance.maxNumberTurns) {
			_writer.writeInt32(11, _instance.maxNumberTurns);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(12, _instance.labels);
		}
		if (_instance.userIds && _instance.userIds.length) {
			_writer.writeRepeatedString(13, _instance.userIds);
		}
		if (_instance.intentTags && _instance.intentTags.length) {
			_writer.writeRepeatedString(14, _instance.intentTags);
		}
		if (_instance.sessionIds && _instance.sessionIds.length) {
			_writer.writeRepeatedString(15, _instance.sessionIds);
		}
		if (_instance.inputContexts && _instance.inputContexts.length) {
			_writer.writeRepeatedMessage(16, _instance.inputContexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.outputContexts && _instance.outputContexts.length) {
			_writer.writeRepeatedMessage(17, _instance.outputContexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.durationInSMin) {
			_writer.writeFloat(18, _instance.durationInSMin);
		}
		if (_instance.durationInSMax) {
			_writer.writeFloat(19, _instance.durationInSMax);
		}
		if (_instance.durationInMMin) {
			_writer.writeFloat(20, _instance.durationInMMin);
		}
		if (_instance.durationInMMax) {
			_writer.writeFloat(21, _instance.durationInMMax);
		}
		if (_instance.durationInMRoundedMin) {
			_writer.writeFloat(22, _instance.durationInMRoundedMin);
		}
		if (_instance.durationInMRoundedMax) {
			_writer.writeFloat(23, _instance.durationInMRoundedMax);
		}
		if (_instance.durationInterval15sRoundedMin) {
			_writer.writeFloat(24, _instance.durationInterval15sRoundedMin);
		}
		if (_instance.durationInterval15sRoundedMax) {
			_writer.writeFloat(25, _instance.durationInterval15sRoundedMax);
		}
		if (_instance.durationInterval30sRoundedMin) {
			_writer.writeFloat(26, _instance.durationInterval30sRoundedMin);
		}
		if (_instance.durationInterval30sRoundedMax) {
			_writer.writeFloat(27, _instance.durationInterval30sRoundedMax);
		}
		if (_instance.durationInterval45sRoundedMin) {
			_writer.writeFloat(28, _instance.durationInterval45sRoundedMin);
		}
		if (_instance.durationInterval45sRoundedMax) {
			_writer.writeFloat(29, _instance.durationInterval45sRoundedMax);
		}
		if (_instance.startedTimeSlotPerHourMin) {
			_writer.writeString(30, _instance.startedTimeSlotPerHourMin);
		}
		if (_instance.startedTimeSlotPerHourMax) {
			_writer.writeString(31, _instance.startedTimeSlotPerHourMax);
		}
		if (_instance.startedTimeSlotPerQuarterHourMin) {
			_writer.writeString(32, _instance.startedTimeSlotPerQuarterHourMin);
		}
		if (_instance.startedTimeSlotPerQuarterHourMax) {
			_writer.writeString(33, _instance.startedTimeSlotPerQuarterHourMax);
		}
		if (_instance.startedTimeSlotPerHalfHourMin) {
			_writer.writeString(34, _instance.startedTimeSlotPerHalfHourMin);
		}
		if (_instance.startedTimeSlotPerHalfHourMax) {
			_writer.writeString(35, _instance.startedTimeSlotPerHalfHourMax);
		}
		if (_instance.startedTimeSlotPerDayPhaseMin) {
			_writer.writeString(36, _instance.startedTimeSlotPerDayPhaseMin);
		}
		if (_instance.startedTimeSlotPerDayPhaseMax) {
			_writer.writeString(37, _instance.startedTimeSlotPerDayPhaseMax);
		}
		if (_instance.startedTimeSlotPerMinuteMin) {
			_writer.writeString(38, _instance.startedTimeSlotPerMinuteMin);
		}
		if (_instance.startedTimeSlotPerMinuteMax) {
			_writer.writeString(39, _instance.startedTimeSlotPerMinuteMax);
		}
		if (_instance.durationInSRoundedMin) {
			_writer.writeFloat(40, _instance.durationInSRoundedMin);
		}
		if (_instance.durationInSRoundedMax) {
			_writer.writeFloat(41, _instance.durationInSRoundedMax);
		}
		if (_instance.platforms && _instance.platforms.length) {
			_writer.writePackedEnum(42, _instance.platforms);
		}
		if (_instance.accountIds && _instance.accountIds.length) {
			_writer.writeRepeatedString(43, _instance.accountIds);
		}
		if (_instance.propertyIds && _instance.propertyIds.length) {
			_writer.writeRepeatedString(44, _instance.propertyIds);
		}
		if (_instance.datastreamIds && _instance.datastreamIds.length) {
			_writer.writeRepeatedString(45, _instance.datastreamIds);
		}
		if (_instance.originIds && _instance.originIds.length) {
			_writer.writeRepeatedString(46, _instance.originIds);
		}
		if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
			_writer.writeRepeatedString(47, _instance.identifiedUserIds);
		}
	}
	_languageCodes;
	_matchedIntents;
	_matchedEntityTypes;
	_minIntentsConfidenceMin;
	_minIntentsConfidenceMax;
	_minEntityTypesConfidenceMin;
	_minEntityTypesConfidenceMax;
	_earliest;
	_latest;
	_minNumberTurns;
	_maxNumberTurns;
	_labels;
	_userIds;
	_intentTags;
	_sessionIds;
	_inputContexts;
	_outputContexts;
	_durationInSMin;
	_durationInSMax;
	_durationInMMin;
	_durationInMMax;
	_durationInMRoundedMin;
	_durationInMRoundedMax;
	_durationInterval15sRoundedMin;
	_durationInterval15sRoundedMax;
	_durationInterval30sRoundedMin;
	_durationInterval30sRoundedMax;
	_durationInterval45sRoundedMin;
	_durationInterval45sRoundedMax;
	_startedTimeSlotPerHourMin;
	_startedTimeSlotPerHourMax;
	_startedTimeSlotPerQuarterHourMin;
	_startedTimeSlotPerQuarterHourMax;
	_startedTimeSlotPerHalfHourMin;
	_startedTimeSlotPerHalfHourMax;
	_startedTimeSlotPerDayPhaseMin;
	_startedTimeSlotPerDayPhaseMax;
	_startedTimeSlotPerMinuteMin;
	_startedTimeSlotPerMinuteMax;
	_durationInSRoundedMin;
	_durationInSRoundedMax;
	_platforms;
	_accountIds;
	_propertyIds;
	_datastreamIds;
	_originIds;
	_identifiedUserIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionFilter to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageCodes = (_value.languageCodes || []).slice();
		this.matchedIntents = (_value.matchedIntents || []).map((m) => new ondewoNlu013.Intent(m));
		this.matchedEntityTypes = (_value.matchedEntityTypes || []).map((m) => new ondewoNlu014.EntityType(m));
		this.minIntentsConfidenceMin = _value.minIntentsConfidenceMin;
		this.minIntentsConfidenceMax = _value.minIntentsConfidenceMax;
		this.minEntityTypesConfidenceMin = _value.minEntityTypesConfidenceMin;
		this.minEntityTypesConfidenceMax = _value.minEntityTypesConfidenceMax;
		this.earliest = _value.earliest;
		this.latest = _value.latest;
		this.minNumberTurns = _value.minNumberTurns;
		this.maxNumberTurns = _value.maxNumberTurns;
		this.labels = (_value.labels || []).slice();
		this.userIds = (_value.userIds || []).slice();
		this.intentTags = (_value.intentTags || []).slice();
		this.sessionIds = (_value.sessionIds || []).slice();
		this.inputContexts = (_value.inputContexts || []).map((m) => new ondewoNlu006.Context(m));
		this.outputContexts = (_value.outputContexts || []).map((m) => new ondewoNlu006.Context(m));
		this.durationInSMin = _value.durationInSMin;
		this.durationInSMax = _value.durationInSMax;
		this.durationInMMin = _value.durationInMMin;
		this.durationInMMax = _value.durationInMMax;
		this.durationInMRoundedMin = _value.durationInMRoundedMin;
		this.durationInMRoundedMax = _value.durationInMRoundedMax;
		this.durationInterval15sRoundedMin = _value.durationInterval15sRoundedMin;
		this.durationInterval15sRoundedMax = _value.durationInterval15sRoundedMax;
		this.durationInterval30sRoundedMin = _value.durationInterval30sRoundedMin;
		this.durationInterval30sRoundedMax = _value.durationInterval30sRoundedMax;
		this.durationInterval45sRoundedMin = _value.durationInterval45sRoundedMin;
		this.durationInterval45sRoundedMax = _value.durationInterval45sRoundedMax;
		this.startedTimeSlotPerHourMin = _value.startedTimeSlotPerHourMin;
		this.startedTimeSlotPerHourMax = _value.startedTimeSlotPerHourMax;
		this.startedTimeSlotPerQuarterHourMin = _value.startedTimeSlotPerQuarterHourMin;
		this.startedTimeSlotPerQuarterHourMax = _value.startedTimeSlotPerQuarterHourMax;
		this.startedTimeSlotPerHalfHourMin = _value.startedTimeSlotPerHalfHourMin;
		this.startedTimeSlotPerHalfHourMax = _value.startedTimeSlotPerHalfHourMax;
		this.startedTimeSlotPerDayPhaseMin = _value.startedTimeSlotPerDayPhaseMin;
		this.startedTimeSlotPerDayPhaseMax = _value.startedTimeSlotPerDayPhaseMax;
		this.startedTimeSlotPerMinuteMin = _value.startedTimeSlotPerMinuteMin;
		this.startedTimeSlotPerMinuteMax = _value.startedTimeSlotPerMinuteMax;
		this.durationInSRoundedMin = _value.durationInSRoundedMin;
		this.durationInSRoundedMax = _value.durationInSRoundedMax;
		this.platforms = (_value.platforms || []).slice();
		this.accountIds = (_value.accountIds || []).slice();
		this.propertyIds = (_value.propertyIds || []).slice();
		this.datastreamIds = (_value.datastreamIds || []).slice();
		this.originIds = (_value.originIds || []).slice();
		this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
		SessionFilter.refineValues(this);
	}
	get languageCodes() {
		return this._languageCodes;
	}
	set languageCodes(value) {
		this._languageCodes = value;
	}
	get matchedIntents() {
		return this._matchedIntents;
	}
	set matchedIntents(value) {
		this._matchedIntents = value;
	}
	get matchedEntityTypes() {
		return this._matchedEntityTypes;
	}
	set matchedEntityTypes(value) {
		this._matchedEntityTypes = value;
	}
	get minIntentsConfidenceMin() {
		return this._minIntentsConfidenceMin;
	}
	set minIntentsConfidenceMin(value) {
		this._minIntentsConfidenceMin = value;
	}
	get minIntentsConfidenceMax() {
		return this._minIntentsConfidenceMax;
	}
	set minIntentsConfidenceMax(value) {
		this._minIntentsConfidenceMax = value;
	}
	get minEntityTypesConfidenceMin() {
		return this._minEntityTypesConfidenceMin;
	}
	set minEntityTypesConfidenceMin(value) {
		this._minEntityTypesConfidenceMin = value;
	}
	get minEntityTypesConfidenceMax() {
		return this._minEntityTypesConfidenceMax;
	}
	set minEntityTypesConfidenceMax(value) {
		this._minEntityTypesConfidenceMax = value;
	}
	get earliest() {
		return this._earliest;
	}
	set earliest(value) {
		this._earliest = value;
	}
	get latest() {
		return this._latest;
	}
	set latest(value) {
		this._latest = value;
	}
	get minNumberTurns() {
		return this._minNumberTurns;
	}
	set minNumberTurns(value) {
		this._minNumberTurns = value;
	}
	get maxNumberTurns() {
		return this._maxNumberTurns;
	}
	set maxNumberTurns(value) {
		this._maxNumberTurns = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	get userIds() {
		return this._userIds;
	}
	set userIds(value) {
		this._userIds = value;
	}
	get intentTags() {
		return this._intentTags;
	}
	set intentTags(value) {
		this._intentTags = value;
	}
	get sessionIds() {
		return this._sessionIds;
	}
	set sessionIds(value) {
		this._sessionIds = value;
	}
	get inputContexts() {
		return this._inputContexts;
	}
	set inputContexts(value) {
		this._inputContexts = value;
	}
	get outputContexts() {
		return this._outputContexts;
	}
	set outputContexts(value) {
		this._outputContexts = value;
	}
	get durationInSMin() {
		return this._durationInSMin;
	}
	set durationInSMin(value) {
		this._durationInSMin = value;
	}
	get durationInSMax() {
		return this._durationInSMax;
	}
	set durationInSMax(value) {
		this._durationInSMax = value;
	}
	get durationInMMin() {
		return this._durationInMMin;
	}
	set durationInMMin(value) {
		this._durationInMMin = value;
	}
	get durationInMMax() {
		return this._durationInMMax;
	}
	set durationInMMax(value) {
		this._durationInMMax = value;
	}
	get durationInMRoundedMin() {
		return this._durationInMRoundedMin;
	}
	set durationInMRoundedMin(value) {
		this._durationInMRoundedMin = value;
	}
	get durationInMRoundedMax() {
		return this._durationInMRoundedMax;
	}
	set durationInMRoundedMax(value) {
		this._durationInMRoundedMax = value;
	}
	get durationInterval15sRoundedMin() {
		return this._durationInterval15sRoundedMin;
	}
	set durationInterval15sRoundedMin(value) {
		this._durationInterval15sRoundedMin = value;
	}
	get durationInterval15sRoundedMax() {
		return this._durationInterval15sRoundedMax;
	}
	set durationInterval15sRoundedMax(value) {
		this._durationInterval15sRoundedMax = value;
	}
	get durationInterval30sRoundedMin() {
		return this._durationInterval30sRoundedMin;
	}
	set durationInterval30sRoundedMin(value) {
		this._durationInterval30sRoundedMin = value;
	}
	get durationInterval30sRoundedMax() {
		return this._durationInterval30sRoundedMax;
	}
	set durationInterval30sRoundedMax(value) {
		this._durationInterval30sRoundedMax = value;
	}
	get durationInterval45sRoundedMin() {
		return this._durationInterval45sRoundedMin;
	}
	set durationInterval45sRoundedMin(value) {
		this._durationInterval45sRoundedMin = value;
	}
	get durationInterval45sRoundedMax() {
		return this._durationInterval45sRoundedMax;
	}
	set durationInterval45sRoundedMax(value) {
		this._durationInterval45sRoundedMax = value;
	}
	get startedTimeSlotPerHourMin() {
		return this._startedTimeSlotPerHourMin;
	}
	set startedTimeSlotPerHourMin(value) {
		this._startedTimeSlotPerHourMin = value;
	}
	get startedTimeSlotPerHourMax() {
		return this._startedTimeSlotPerHourMax;
	}
	set startedTimeSlotPerHourMax(value) {
		this._startedTimeSlotPerHourMax = value;
	}
	get startedTimeSlotPerQuarterHourMin() {
		return this._startedTimeSlotPerQuarterHourMin;
	}
	set startedTimeSlotPerQuarterHourMin(value) {
		this._startedTimeSlotPerQuarterHourMin = value;
	}
	get startedTimeSlotPerQuarterHourMax() {
		return this._startedTimeSlotPerQuarterHourMax;
	}
	set startedTimeSlotPerQuarterHourMax(value) {
		this._startedTimeSlotPerQuarterHourMax = value;
	}
	get startedTimeSlotPerHalfHourMin() {
		return this._startedTimeSlotPerHalfHourMin;
	}
	set startedTimeSlotPerHalfHourMin(value) {
		this._startedTimeSlotPerHalfHourMin = value;
	}
	get startedTimeSlotPerHalfHourMax() {
		return this._startedTimeSlotPerHalfHourMax;
	}
	set startedTimeSlotPerHalfHourMax(value) {
		this._startedTimeSlotPerHalfHourMax = value;
	}
	get startedTimeSlotPerDayPhaseMin() {
		return this._startedTimeSlotPerDayPhaseMin;
	}
	set startedTimeSlotPerDayPhaseMin(value) {
		this._startedTimeSlotPerDayPhaseMin = value;
	}
	get startedTimeSlotPerDayPhaseMax() {
		return this._startedTimeSlotPerDayPhaseMax;
	}
	set startedTimeSlotPerDayPhaseMax(value) {
		this._startedTimeSlotPerDayPhaseMax = value;
	}
	get startedTimeSlotPerMinuteMin() {
		return this._startedTimeSlotPerMinuteMin;
	}
	set startedTimeSlotPerMinuteMin(value) {
		this._startedTimeSlotPerMinuteMin = value;
	}
	get startedTimeSlotPerMinuteMax() {
		return this._startedTimeSlotPerMinuteMax;
	}
	set startedTimeSlotPerMinuteMax(value) {
		this._startedTimeSlotPerMinuteMax = value;
	}
	get durationInSRoundedMin() {
		return this._durationInSRoundedMin;
	}
	set durationInSRoundedMin(value) {
		this._durationInSRoundedMin = value;
	}
	get durationInSRoundedMax() {
		return this._durationInSRoundedMax;
	}
	set durationInSRoundedMax(value) {
		this._durationInSRoundedMax = value;
	}
	get platforms() {
		return this._platforms;
	}
	set platforms(value) {
		this._platforms = value;
	}
	get accountIds() {
		return this._accountIds;
	}
	set accountIds(value) {
		this._accountIds = value;
	}
	get propertyIds() {
		return this._propertyIds;
	}
	set propertyIds(value) {
		this._propertyIds = value;
	}
	get datastreamIds() {
		return this._datastreamIds;
	}
	set datastreamIds(value) {
		this._datastreamIds = value;
	}
	get originIds() {
		return this._originIds;
	}
	set originIds(value) {
		this._originIds = value;
	}
	get identifiedUserIds() {
		return this._identifiedUserIds;
	}
	set identifiedUserIds(value) {
		this._identifiedUserIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SessionFilter.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageCodes: (this.languageCodes || []).slice(),
			matchedIntents: (this.matchedIntents || []).map((m) => m.toObject()),
			matchedEntityTypes: (this.matchedEntityTypes || []).map((m) => m.toObject()),
			minIntentsConfidenceMin: this.minIntentsConfidenceMin,
			minIntentsConfidenceMax: this.minIntentsConfidenceMax,
			minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
			minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
			earliest: this.earliest,
			latest: this.latest,
			minNumberTurns: this.minNumberTurns,
			maxNumberTurns: this.maxNumberTurns,
			labels: (this.labels || []).slice(),
			userIds: (this.userIds || []).slice(),
			intentTags: (this.intentTags || []).slice(),
			sessionIds: (this.sessionIds || []).slice(),
			inputContexts: (this.inputContexts || []).map((m) => m.toObject()),
			outputContexts: (this.outputContexts || []).map((m) => m.toObject()),
			durationInSMin: this.durationInSMin,
			durationInSMax: this.durationInSMax,
			durationInMMin: this.durationInMMin,
			durationInMMax: this.durationInMMax,
			durationInMRoundedMin: this.durationInMRoundedMin,
			durationInMRoundedMax: this.durationInMRoundedMax,
			durationInterval15sRoundedMin: this.durationInterval15sRoundedMin,
			durationInterval15sRoundedMax: this.durationInterval15sRoundedMax,
			durationInterval30sRoundedMin: this.durationInterval30sRoundedMin,
			durationInterval30sRoundedMax: this.durationInterval30sRoundedMax,
			durationInterval45sRoundedMin: this.durationInterval45sRoundedMin,
			durationInterval45sRoundedMax: this.durationInterval45sRoundedMax,
			startedTimeSlotPerHourMin: this.startedTimeSlotPerHourMin,
			startedTimeSlotPerHourMax: this.startedTimeSlotPerHourMax,
			startedTimeSlotPerQuarterHourMin: this.startedTimeSlotPerQuarterHourMin,
			startedTimeSlotPerQuarterHourMax: this.startedTimeSlotPerQuarterHourMax,
			startedTimeSlotPerHalfHourMin: this.startedTimeSlotPerHalfHourMin,
			startedTimeSlotPerHalfHourMax: this.startedTimeSlotPerHalfHourMax,
			startedTimeSlotPerDayPhaseMin: this.startedTimeSlotPerDayPhaseMin,
			startedTimeSlotPerDayPhaseMax: this.startedTimeSlotPerDayPhaseMax,
			startedTimeSlotPerMinuteMin: this.startedTimeSlotPerMinuteMin,
			startedTimeSlotPerMinuteMax: this.startedTimeSlotPerMinuteMax,
			durationInSRoundedMin: this.durationInSRoundedMin,
			durationInSRoundedMax: this.durationInSRoundedMax,
			platforms: (this.platforms || []).slice(),
			accountIds: (this.accountIds || []).slice(),
			propertyIds: (this.propertyIds || []).slice(),
			datastreamIds: (this.datastreamIds || []).slice(),
			originIds: (this.originIds || []).slice(),
			identifiedUserIds: (this.identifiedUserIds || []).slice()
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
		options
	) {
		return {
			languageCodes: (this.languageCodes || []).slice(),
			matchedIntents: (this.matchedIntents || []).map((m) => m.toProtobufJSON(options)),
			matchedEntityTypes: (this.matchedEntityTypes || []).map((m) => m.toProtobufJSON(options)),
			minIntentsConfidenceMin: this.minIntentsConfidenceMin,
			minIntentsConfidenceMax: this.minIntentsConfidenceMax,
			minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
			minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
			earliest: this.earliest,
			latest: this.latest,
			minNumberTurns: this.minNumberTurns,
			maxNumberTurns: this.maxNumberTurns,
			labels: (this.labels || []).slice(),
			userIds: (this.userIds || []).slice(),
			intentTags: (this.intentTags || []).slice(),
			sessionIds: (this.sessionIds || []).slice(),
			inputContexts: (this.inputContexts || []).map((m) => m.toProtobufJSON(options)),
			outputContexts: (this.outputContexts || []).map((m) => m.toProtobufJSON(options)),
			durationInSMin: this.durationInSMin,
			durationInSMax: this.durationInSMax,
			durationInMMin: this.durationInMMin,
			durationInMMax: this.durationInMMax,
			durationInMRoundedMin: this.durationInMRoundedMin,
			durationInMRoundedMax: this.durationInMRoundedMax,
			durationInterval15sRoundedMin: this.durationInterval15sRoundedMin,
			durationInterval15sRoundedMax: this.durationInterval15sRoundedMax,
			durationInterval30sRoundedMin: this.durationInterval30sRoundedMin,
			durationInterval30sRoundedMax: this.durationInterval30sRoundedMax,
			durationInterval45sRoundedMin: this.durationInterval45sRoundedMin,
			durationInterval45sRoundedMax: this.durationInterval45sRoundedMax,
			startedTimeSlotPerHourMin: this.startedTimeSlotPerHourMin,
			startedTimeSlotPerHourMax: this.startedTimeSlotPerHourMax,
			startedTimeSlotPerQuarterHourMin: this.startedTimeSlotPerQuarterHourMin,
			startedTimeSlotPerQuarterHourMax: this.startedTimeSlotPerQuarterHourMax,
			startedTimeSlotPerHalfHourMin: this.startedTimeSlotPerHalfHourMin,
			startedTimeSlotPerHalfHourMax: this.startedTimeSlotPerHalfHourMax,
			startedTimeSlotPerDayPhaseMin: this.startedTimeSlotPerDayPhaseMin,
			startedTimeSlotPerDayPhaseMax: this.startedTimeSlotPerDayPhaseMax,
			startedTimeSlotPerMinuteMin: this.startedTimeSlotPerMinuteMin,
			startedTimeSlotPerMinuteMax: this.startedTimeSlotPerMinuteMax,
			durationInSRoundedMin: this.durationInSRoundedMin,
			durationInSRoundedMax: this.durationInSRoundedMax,
			platforms: (this.platforms || []).map((v) => ondewoNlu013.Intent.Message.Platform[v]),
			accountIds: (this.accountIds || []).slice(),
			propertyIds: (this.propertyIds || []).slice(),
			datastreamIds: (this.datastreamIds || []).slice(),
			originIds: (this.originIds || []).slice(),
			identifiedUserIds: (this.identifiedUserIds || []).slice()
		};
	}
}
export { SessionFilter };
/**
 * Message implementation for ondewo.nlu.SessionInfo
 */
class SessionInfo {
	static id = 'ondewo.nlu.SessionInfo';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SessionInfo();
		SessionInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageCodes = _instance.languageCodes || [];
		_instance.matchedIntents = _instance.matchedIntents || [];
		_instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
		_instance.minIntentsConfidence = _instance.minIntentsConfidence || 0;
		_instance.minEntityTypesConfidence = _instance.minEntityTypesConfidence || 0;
		_instance.earliest = _instance.earliest || 0;
		_instance.latest = _instance.latest || 0;
		_instance.numberTurns = _instance.numberTurns || 0;
		_instance.labels = _instance.labels || [];
		_instance.userIds = _instance.userIds || [];
		_instance.intentTags = _instance.intentTags || [];
		_instance.inputContextSteps = _instance.inputContextSteps || [];
		_instance.outputContextSteps = _instance.outputContextSteps || [];
		_instance.durationInS = _instance.durationInS || 0;
		_instance.durationInM = _instance.durationInM || 0;
		_instance.durationInMRounded = _instance.durationInMRounded || 0;
		_instance.durationInterval15sRounded = _instance.durationInterval15sRounded || 0;
		_instance.durationInterval30sRounded = _instance.durationInterval30sRounded || 0;
		_instance.durationInterval45sRounded = _instance.durationInterval45sRounded || 0;
		_instance.startedTimeSlotPerHour = _instance.startedTimeSlotPerHour || '';
		_instance.startedTimeSlotPerQuarterHour = _instance.startedTimeSlotPerQuarterHour || '';
		_instance.startedTimeSlotPerHalfHour = _instance.startedTimeSlotPerHalfHour || '';
		_instance.startedTimeSlotPerDayPhase = _instance.startedTimeSlotPerDayPhase || '';
		_instance.startedTimeSlotPerMinute = _instance.startedTimeSlotPerMinute || '';
		_instance.durationInSRounded = _instance.durationInSRounded || 0;
		_instance.platforms = _instance.platforms || [];
		_instance.accountIds = _instance.accountIds || [];
		_instance.propertyIds = _instance.propertyIds || [];
		_instance.datastreamIds = _instance.datastreamIds || [];
		_instance.originIds = _instance.originIds || [];
		_instance.identifiedUserIds = _instance.identifiedUserIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
					break;
				case 2:
					const messageInitializer2 = new ondewoNlu013.Intent();
					_reader.readMessage(messageInitializer2, ondewoNlu013.Intent.deserializeBinaryFromReader);
					(_instance.matchedIntents = _instance.matchedIntents || []).push(messageInitializer2);
					break;
				case 3:
					const messageInitializer3 = new ondewoNlu014.EntityType();
					_reader.readMessage(messageInitializer3, ondewoNlu014.EntityType.deserializeBinaryFromReader);
					(_instance.matchedEntityTypes = _instance.matchedEntityTypes || []).push(messageInitializer3);
					break;
				case 4:
					_instance.minIntentsConfidence = _reader.readFloat();
					break;
				case 5:
					_instance.minEntityTypesConfidence = _reader.readFloat();
					break;
				case 6:
					_instance.earliest = _reader.readFloat();
					break;
				case 7:
					_instance.latest = _reader.readFloat();
					break;
				case 8:
					_instance.numberTurns = _reader.readInt32();
					break;
				case 9:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				case 10:
					(_instance.userIds = _instance.userIds || []).push(_reader.readString());
					break;
				case 11:
					(_instance.intentTags = _instance.intentTags || []).push(_reader.readString());
					break;
				case 12:
					const messageInitializer12 = new SessionInfo.ContextSteps();
					_reader.readMessage(messageInitializer12, SessionInfo.ContextSteps.deserializeBinaryFromReader);
					(_instance.inputContextSteps = _instance.inputContextSteps || []).push(messageInitializer12);
					break;
				case 13:
					const messageInitializer13 = new SessionInfo.ContextSteps();
					_reader.readMessage(messageInitializer13, SessionInfo.ContextSteps.deserializeBinaryFromReader);
					(_instance.outputContextSteps = _instance.outputContextSteps || []).push(messageInitializer13);
					break;
				case 14:
					_instance.durationInS = _reader.readFloat();
					break;
				case 15:
					_instance.durationInM = _reader.readFloat();
					break;
				case 16:
					_instance.durationInMRounded = _reader.readFloat();
					break;
				case 17:
					_instance.durationInterval15sRounded = _reader.readFloat();
					break;
				case 18:
					_instance.durationInterval30sRounded = _reader.readFloat();
					break;
				case 19:
					_instance.durationInterval45sRounded = _reader.readFloat();
					break;
				case 20:
					_instance.startedTimeSlotPerHour = _reader.readString();
					break;
				case 21:
					_instance.startedTimeSlotPerQuarterHour = _reader.readString();
					break;
				case 22:
					_instance.startedTimeSlotPerHalfHour = _reader.readString();
					break;
				case 23:
					_instance.startedTimeSlotPerDayPhase = _reader.readString();
					break;
				case 24:
					_instance.startedTimeSlotPerMinute = _reader.readString();
					break;
				case 25:
					_instance.durationInSRounded = _reader.readFloat();
					break;
				case 26:
					(_instance.platforms = _instance.platforms || []).push(...(_reader.readPackedEnum() || []));
					break;
				case 27:
					(_instance.accountIds = _instance.accountIds || []).push(_reader.readString());
					break;
				case 28:
					(_instance.propertyIds = _instance.propertyIds || []).push(_reader.readString());
					break;
				case 29:
					(_instance.datastreamIds = _instance.datastreamIds || []).push(_reader.readString());
					break;
				case 30:
					(_instance.originIds = _instance.originIds || []).push(_reader.readString());
					break;
				case 31:
					(_instance.identifiedUserIds = _instance.identifiedUserIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		SessionInfo.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageCodes && _instance.languageCodes.length) {
			_writer.writeRepeatedString(1, _instance.languageCodes);
		}
		if (_instance.matchedIntents && _instance.matchedIntents.length) {
			_writer.writeRepeatedMessage(2, _instance.matchedIntents, ondewoNlu013.Intent.serializeBinaryToWriter);
		}
		if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
			_writer.writeRepeatedMessage(3, _instance.matchedEntityTypes, ondewoNlu014.EntityType.serializeBinaryToWriter);
		}
		if (_instance.minIntentsConfidence) {
			_writer.writeFloat(4, _instance.minIntentsConfidence);
		}
		if (_instance.minEntityTypesConfidence) {
			_writer.writeFloat(5, _instance.minEntityTypesConfidence);
		}
		if (_instance.earliest) {
			_writer.writeFloat(6, _instance.earliest);
		}
		if (_instance.latest) {
			_writer.writeFloat(7, _instance.latest);
		}
		if (_instance.numberTurns) {
			_writer.writeInt32(8, _instance.numberTurns);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(9, _instance.labels);
		}
		if (_instance.userIds && _instance.userIds.length) {
			_writer.writeRepeatedString(10, _instance.userIds);
		}
		if (_instance.intentTags && _instance.intentTags.length) {
			_writer.writeRepeatedString(11, _instance.intentTags);
		}
		if (_instance.inputContextSteps && _instance.inputContextSteps.length) {
			_writer.writeRepeatedMessage(12, _instance.inputContextSteps, SessionInfo.ContextSteps.serializeBinaryToWriter);
		}
		if (_instance.outputContextSteps && _instance.outputContextSteps.length) {
			_writer.writeRepeatedMessage(13, _instance.outputContextSteps, SessionInfo.ContextSteps.serializeBinaryToWriter);
		}
		if (_instance.durationInS) {
			_writer.writeFloat(14, _instance.durationInS);
		}
		if (_instance.durationInM) {
			_writer.writeFloat(15, _instance.durationInM);
		}
		if (_instance.durationInMRounded) {
			_writer.writeFloat(16, _instance.durationInMRounded);
		}
		if (_instance.durationInterval15sRounded) {
			_writer.writeFloat(17, _instance.durationInterval15sRounded);
		}
		if (_instance.durationInterval30sRounded) {
			_writer.writeFloat(18, _instance.durationInterval30sRounded);
		}
		if (_instance.durationInterval45sRounded) {
			_writer.writeFloat(19, _instance.durationInterval45sRounded);
		}
		if (_instance.startedTimeSlotPerHour) {
			_writer.writeString(20, _instance.startedTimeSlotPerHour);
		}
		if (_instance.startedTimeSlotPerQuarterHour) {
			_writer.writeString(21, _instance.startedTimeSlotPerQuarterHour);
		}
		if (_instance.startedTimeSlotPerHalfHour) {
			_writer.writeString(22, _instance.startedTimeSlotPerHalfHour);
		}
		if (_instance.startedTimeSlotPerDayPhase) {
			_writer.writeString(23, _instance.startedTimeSlotPerDayPhase);
		}
		if (_instance.startedTimeSlotPerMinute) {
			_writer.writeString(24, _instance.startedTimeSlotPerMinute);
		}
		if (_instance.durationInSRounded) {
			_writer.writeFloat(25, _instance.durationInSRounded);
		}
		if (_instance.platforms && _instance.platforms.length) {
			_writer.writePackedEnum(26, _instance.platforms);
		}
		if (_instance.accountIds && _instance.accountIds.length) {
			_writer.writeRepeatedString(27, _instance.accountIds);
		}
		if (_instance.propertyIds && _instance.propertyIds.length) {
			_writer.writeRepeatedString(28, _instance.propertyIds);
		}
		if (_instance.datastreamIds && _instance.datastreamIds.length) {
			_writer.writeRepeatedString(29, _instance.datastreamIds);
		}
		if (_instance.originIds && _instance.originIds.length) {
			_writer.writeRepeatedString(30, _instance.originIds);
		}
		if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
			_writer.writeRepeatedString(31, _instance.identifiedUserIds);
		}
	}
	_languageCodes;
	_matchedIntents;
	_matchedEntityTypes;
	_minIntentsConfidence;
	_minEntityTypesConfidence;
	_earliest;
	_latest;
	_numberTurns;
	_labels;
	_userIds;
	_intentTags;
	_inputContextSteps;
	_outputContextSteps;
	_durationInS;
	_durationInM;
	_durationInMRounded;
	_durationInterval15sRounded;
	_durationInterval30sRounded;
	_durationInterval45sRounded;
	_startedTimeSlotPerHour;
	_startedTimeSlotPerQuarterHour;
	_startedTimeSlotPerHalfHour;
	_startedTimeSlotPerDayPhase;
	_startedTimeSlotPerMinute;
	_durationInSRounded;
	_platforms;
	_accountIds;
	_propertyIds;
	_datastreamIds;
	_originIds;
	_identifiedUserIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionInfo to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageCodes = (_value.languageCodes || []).slice();
		this.matchedIntents = (_value.matchedIntents || []).map((m) => new ondewoNlu013.Intent(m));
		this.matchedEntityTypes = (_value.matchedEntityTypes || []).map((m) => new ondewoNlu014.EntityType(m));
		this.minIntentsConfidence = _value.minIntentsConfidence;
		this.minEntityTypesConfidence = _value.minEntityTypesConfidence;
		this.earliest = _value.earliest;
		this.latest = _value.latest;
		this.numberTurns = _value.numberTurns;
		this.labels = (_value.labels || []).slice();
		this.userIds = (_value.userIds || []).slice();
		this.intentTags = (_value.intentTags || []).slice();
		this.inputContextSteps = (_value.inputContextSteps || []).map((m) => new SessionInfo.ContextSteps(m));
		this.outputContextSteps = (_value.outputContextSteps || []).map((m) => new SessionInfo.ContextSteps(m));
		this.durationInS = _value.durationInS;
		this.durationInM = _value.durationInM;
		this.durationInMRounded = _value.durationInMRounded;
		this.durationInterval15sRounded = _value.durationInterval15sRounded;
		this.durationInterval30sRounded = _value.durationInterval30sRounded;
		this.durationInterval45sRounded = _value.durationInterval45sRounded;
		this.startedTimeSlotPerHour = _value.startedTimeSlotPerHour;
		this.startedTimeSlotPerQuarterHour = _value.startedTimeSlotPerQuarterHour;
		this.startedTimeSlotPerHalfHour = _value.startedTimeSlotPerHalfHour;
		this.startedTimeSlotPerDayPhase = _value.startedTimeSlotPerDayPhase;
		this.startedTimeSlotPerMinute = _value.startedTimeSlotPerMinute;
		this.durationInSRounded = _value.durationInSRounded;
		this.platforms = (_value.platforms || []).slice();
		this.accountIds = (_value.accountIds || []).slice();
		this.propertyIds = (_value.propertyIds || []).slice();
		this.datastreamIds = (_value.datastreamIds || []).slice();
		this.originIds = (_value.originIds || []).slice();
		this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
		SessionInfo.refineValues(this);
	}
	get languageCodes() {
		return this._languageCodes;
	}
	set languageCodes(value) {
		this._languageCodes = value;
	}
	get matchedIntents() {
		return this._matchedIntents;
	}
	set matchedIntents(value) {
		this._matchedIntents = value;
	}
	get matchedEntityTypes() {
		return this._matchedEntityTypes;
	}
	set matchedEntityTypes(value) {
		this._matchedEntityTypes = value;
	}
	get minIntentsConfidence() {
		return this._minIntentsConfidence;
	}
	set minIntentsConfidence(value) {
		this._minIntentsConfidence = value;
	}
	get minEntityTypesConfidence() {
		return this._minEntityTypesConfidence;
	}
	set minEntityTypesConfidence(value) {
		this._minEntityTypesConfidence = value;
	}
	get earliest() {
		return this._earliest;
	}
	set earliest(value) {
		this._earliest = value;
	}
	get latest() {
		return this._latest;
	}
	set latest(value) {
		this._latest = value;
	}
	get numberTurns() {
		return this._numberTurns;
	}
	set numberTurns(value) {
		this._numberTurns = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	get userIds() {
		return this._userIds;
	}
	set userIds(value) {
		this._userIds = value;
	}
	get intentTags() {
		return this._intentTags;
	}
	set intentTags(value) {
		this._intentTags = value;
	}
	get inputContextSteps() {
		return this._inputContextSteps;
	}
	set inputContextSteps(value) {
		this._inputContextSteps = value;
	}
	get outputContextSteps() {
		return this._outputContextSteps;
	}
	set outputContextSteps(value) {
		this._outputContextSteps = value;
	}
	get durationInS() {
		return this._durationInS;
	}
	set durationInS(value) {
		this._durationInS = value;
	}
	get durationInM() {
		return this._durationInM;
	}
	set durationInM(value) {
		this._durationInM = value;
	}
	get durationInMRounded() {
		return this._durationInMRounded;
	}
	set durationInMRounded(value) {
		this._durationInMRounded = value;
	}
	get durationInterval15sRounded() {
		return this._durationInterval15sRounded;
	}
	set durationInterval15sRounded(value) {
		this._durationInterval15sRounded = value;
	}
	get durationInterval30sRounded() {
		return this._durationInterval30sRounded;
	}
	set durationInterval30sRounded(value) {
		this._durationInterval30sRounded = value;
	}
	get durationInterval45sRounded() {
		return this._durationInterval45sRounded;
	}
	set durationInterval45sRounded(value) {
		this._durationInterval45sRounded = value;
	}
	get startedTimeSlotPerHour() {
		return this._startedTimeSlotPerHour;
	}
	set startedTimeSlotPerHour(value) {
		this._startedTimeSlotPerHour = value;
	}
	get startedTimeSlotPerQuarterHour() {
		return this._startedTimeSlotPerQuarterHour;
	}
	set startedTimeSlotPerQuarterHour(value) {
		this._startedTimeSlotPerQuarterHour = value;
	}
	get startedTimeSlotPerHalfHour() {
		return this._startedTimeSlotPerHalfHour;
	}
	set startedTimeSlotPerHalfHour(value) {
		this._startedTimeSlotPerHalfHour = value;
	}
	get startedTimeSlotPerDayPhase() {
		return this._startedTimeSlotPerDayPhase;
	}
	set startedTimeSlotPerDayPhase(value) {
		this._startedTimeSlotPerDayPhase = value;
	}
	get startedTimeSlotPerMinute() {
		return this._startedTimeSlotPerMinute;
	}
	set startedTimeSlotPerMinute(value) {
		this._startedTimeSlotPerMinute = value;
	}
	get durationInSRounded() {
		return this._durationInSRounded;
	}
	set durationInSRounded(value) {
		this._durationInSRounded = value;
	}
	get platforms() {
		return this._platforms;
	}
	set platforms(value) {
		this._platforms = value;
	}
	get accountIds() {
		return this._accountIds;
	}
	set accountIds(value) {
		this._accountIds = value;
	}
	get propertyIds() {
		return this._propertyIds;
	}
	set propertyIds(value) {
		this._propertyIds = value;
	}
	get datastreamIds() {
		return this._datastreamIds;
	}
	set datastreamIds(value) {
		this._datastreamIds = value;
	}
	get originIds() {
		return this._originIds;
	}
	set originIds(value) {
		this._originIds = value;
	}
	get identifiedUserIds() {
		return this._identifiedUserIds;
	}
	set identifiedUserIds(value) {
		this._identifiedUserIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SessionInfo.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageCodes: (this.languageCodes || []).slice(),
			matchedIntents: (this.matchedIntents || []).map((m) => m.toObject()),
			matchedEntityTypes: (this.matchedEntityTypes || []).map((m) => m.toObject()),
			minIntentsConfidence: this.minIntentsConfidence,
			minEntityTypesConfidence: this.minEntityTypesConfidence,
			earliest: this.earliest,
			latest: this.latest,
			numberTurns: this.numberTurns,
			labels: (this.labels || []).slice(),
			userIds: (this.userIds || []).slice(),
			intentTags: (this.intentTags || []).slice(),
			inputContextSteps: (this.inputContextSteps || []).map((m) => m.toObject()),
			outputContextSteps: (this.outputContextSteps || []).map((m) => m.toObject()),
			durationInS: this.durationInS,
			durationInM: this.durationInM,
			durationInMRounded: this.durationInMRounded,
			durationInterval15sRounded: this.durationInterval15sRounded,
			durationInterval30sRounded: this.durationInterval30sRounded,
			durationInterval45sRounded: this.durationInterval45sRounded,
			startedTimeSlotPerHour: this.startedTimeSlotPerHour,
			startedTimeSlotPerQuarterHour: this.startedTimeSlotPerQuarterHour,
			startedTimeSlotPerHalfHour: this.startedTimeSlotPerHalfHour,
			startedTimeSlotPerDayPhase: this.startedTimeSlotPerDayPhase,
			startedTimeSlotPerMinute: this.startedTimeSlotPerMinute,
			durationInSRounded: this.durationInSRounded,
			platforms: (this.platforms || []).slice(),
			accountIds: (this.accountIds || []).slice(),
			propertyIds: (this.propertyIds || []).slice(),
			datastreamIds: (this.datastreamIds || []).slice(),
			originIds: (this.originIds || []).slice(),
			identifiedUserIds: (this.identifiedUserIds || []).slice()
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
		options
	) {
		return {
			languageCodes: (this.languageCodes || []).slice(),
			matchedIntents: (this.matchedIntents || []).map((m) => m.toProtobufJSON(options)),
			matchedEntityTypes: (this.matchedEntityTypes || []).map((m) => m.toProtobufJSON(options)),
			minIntentsConfidence: this.minIntentsConfidence,
			minEntityTypesConfidence: this.minEntityTypesConfidence,
			earliest: this.earliest,
			latest: this.latest,
			numberTurns: this.numberTurns,
			labels: (this.labels || []).slice(),
			userIds: (this.userIds || []).slice(),
			intentTags: (this.intentTags || []).slice(),
			inputContextSteps: (this.inputContextSteps || []).map((m) => m.toProtobufJSON(options)),
			outputContextSteps: (this.outputContextSteps || []).map((m) => m.toProtobufJSON(options)),
			durationInS: this.durationInS,
			durationInM: this.durationInM,
			durationInMRounded: this.durationInMRounded,
			durationInterval15sRounded: this.durationInterval15sRounded,
			durationInterval30sRounded: this.durationInterval30sRounded,
			durationInterval45sRounded: this.durationInterval45sRounded,
			startedTimeSlotPerHour: this.startedTimeSlotPerHour,
			startedTimeSlotPerQuarterHour: this.startedTimeSlotPerQuarterHour,
			startedTimeSlotPerHalfHour: this.startedTimeSlotPerHalfHour,
			startedTimeSlotPerDayPhase: this.startedTimeSlotPerDayPhase,
			startedTimeSlotPerMinute: this.startedTimeSlotPerMinute,
			durationInSRounded: this.durationInSRounded,
			platforms: (this.platforms || []).map((v) => ondewoNlu013.Intent.Message.Platform[v]),
			accountIds: (this.accountIds || []).slice(),
			propertyIds: (this.propertyIds || []).slice(),
			datastreamIds: (this.datastreamIds || []).slice(),
			originIds: (this.originIds || []).slice(),
			identifiedUserIds: (this.identifiedUserIds || []).slice()
		};
	}
}
export { SessionInfo };
(function (SessionInfo) {
	/**
	 * Message implementation for ondewo.nlu.SessionInfo.ContextSteps
	 */
	class ContextSteps {
		static id = 'ondewo.nlu.SessionInfo.ContextSteps';
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes) {
			const instance = new ContextSteps();
			ContextSteps.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance) {
			_instance.contexts = _instance.contexts || [];
		}
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance, _reader) {
			while (_reader.nextField()) {
				if (_reader.isEndGroup()) break;
				switch (_reader.getFieldNumber()) {
					case 1:
						const messageInitializer1 = new ondewoNlu006.Context();
						_reader.readMessage(messageInitializer1, ondewoNlu006.Context.deserializeBinaryFromReader);
						(_instance.contexts = _instance.contexts || []).push(messageInitializer1);
						break;
					default:
						_reader.skipField();
				}
			}
			ContextSteps.refineValues(_instance);
		}
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.contexts && _instance.contexts.length) {
				_writer.writeRepeatedMessage(1, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
			}
		}
		_contexts;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ContextSteps to deeply clone from
		 */
		constructor(_value) {
			_value = _value || {};
			this.contexts = (_value.contexts || []).map((m) => new ondewoNlu006.Context(m));
			ContextSteps.refineValues(this);
		}
		get contexts() {
			return this._contexts;
		}
		set contexts(value) {
			this._contexts = value;
		}
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary() {
			const writer = new BinaryWriter();
			ContextSteps.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject() {
			return {
				contexts: (this.contexts || []).map((m) => m.toObject())
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
			options
		) {
			return {
				contexts: (this.contexts || []).map((m) => m.toProtobufJSON(options))
			};
		}
	}
	SessionInfo.ContextSteps = ContextSteps;
})(SessionInfo || (SessionInfo = {}));
/**
 * Message implementation for ondewo.nlu.ListSessionsResponse
 */
class ListSessionsResponse {
	static id = 'ondewo.nlu.ListSessionsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionsResponse();
		ListSessionsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessions = _instance.sessions || [];
		_instance.nextPageToken = _instance.nextPageToken || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Session();
					_reader.readMessage(messageInitializer1, Session.deserializeBinaryFromReader);
					(_instance.sessions = _instance.sessions || []).push(messageInitializer1);
					break;
				case 2:
					_instance.nextPageToken = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessions && _instance.sessions.length) {
			_writer.writeRepeatedMessage(1, _instance.sessions, Session.serializeBinaryToWriter);
		}
		if (_instance.nextPageToken) {
			_writer.writeString(2, _instance.nextPageToken);
		}
	}
	_sessions;
	_nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessions = (_value.sessions || []).map((m) => new Session(m));
		this.nextPageToken = _value.nextPageToken;
		ListSessionsResponse.refineValues(this);
	}
	get sessions() {
		return this._sessions;
	}
	set sessions(value) {
		this._sessions = value;
	}
	get nextPageToken() {
		return this._nextPageToken;
	}
	set nextPageToken(value) {
		this._nextPageToken = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessions: (this.sessions || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			sessions: (this.sessions || []).map((m) => m.toProtobufJSON(options)),
			nextPageToken: this.nextPageToken
		};
	}
}
export { ListSessionsResponse };
/**
 * Message implementation for ondewo.nlu.GetSessionRequest
 */
class GetSessionRequest {
	static id = 'ondewo.nlu.GetSessionRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new GetSessionRequest();
		GetSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.sessionView = _instance.sessionView || 0;
		_instance.fieldMask = _instance.fieldMask || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					_instance.sessionView = _reader.readEnum();
					break;
				case 6:
					_instance.fieldMask = new googleProtobuf005.FieldMask();
					_reader.readMessage(_instance.fieldMask, googleProtobuf005.FieldMask.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		GetSessionRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.sessionView) {
			_writer.writeEnum(2, _instance.sessionView);
		}
		if (_instance.fieldMask) {
			_writer.writeMessage(6, _instance.fieldMask, googleProtobuf005.FieldMask.serializeBinaryToWriter);
		}
	}
	_sessionId;
	_sessionView;
	_fieldMask;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.sessionView = _value.sessionView;
		this.fieldMask = _value.fieldMask ? new googleProtobuf005.FieldMask(_value.fieldMask) : undefined;
		GetSessionRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get sessionView() {
		return this._sessionView;
	}
	set sessionView(value) {
		this._sessionView = value;
	}
	get fieldMask() {
		return this._fieldMask;
	}
	set fieldMask(value) {
		this._fieldMask = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		GetSessionRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			sessionView: this.sessionView,
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
		options
	) {
		return {
			sessionId: this.sessionId,
			sessionView: Session.View[this.sessionView === null || this.sessionView === undefined ? 0 : this.sessionView],
			fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
		};
	}
}
export { GetSessionRequest };
/**
 * Message implementation for ondewo.nlu.CreateSessionRequest
 */
class CreateSessionRequest {
	static id = 'ondewo.nlu.CreateSessionRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CreateSessionRequest();
		CreateSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionUuid = _instance.sessionUuid || '';
		_instance.labels = _instance.labels || [];
		_instance.contexts = _instance.contexts || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionUuid = _reader.readString();
					break;
				case 3:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				case 4:
					const messageInitializer4 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer4, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.contexts = _instance.contexts || []).push(messageInitializer4);
					break;
				default:
					_reader.skipField();
			}
		}
		CreateSessionRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionUuid) {
			_writer.writeString(2, _instance.sessionUuid);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(3, _instance.labels);
		}
		if (_instance.contexts && _instance.contexts.length) {
			_writer.writeRepeatedMessage(4, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionUuid;
	_labels;
	_contexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionUuid = _value.sessionUuid;
		this.labels = (_value.labels || []).slice();
		this.contexts = (_value.contexts || []).map((m) => new ondewoNlu006.Context(m));
		CreateSessionRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionUuid() {
		return this._sessionUuid;
	}
	set sessionUuid(value) {
		this._sessionUuid = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	get contexts() {
		return this._contexts;
	}
	set contexts(value) {
		this._contexts = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateSessionRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionUuid: this.sessionUuid,
			labels: (this.labels || []).slice(),
			contexts: (this.contexts || []).map((m) => m.toObject())
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
		options
	) {
		return {
			parent: this.parent,
			sessionUuid: this.sessionUuid,
			labels: (this.labels || []).slice(),
			contexts: (this.contexts || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
export { CreateSessionRequest };
/**
 * Message implementation for ondewo.nlu.DeleteSessionRequest
 */
class DeleteSessionRequest {
	static id = 'ondewo.nlu.DeleteSessionRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DeleteSessionRequest();
		DeleteSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		DeleteSessionRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
	}
	_sessionId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		DeleteSessionRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DeleteSessionRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId
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
		options
	) {
		return {
			sessionId: this.sessionId
		};
	}
}
export { DeleteSessionRequest };
/**
 * Message implementation for ondewo.nlu.CreateSessionReviewRequest
 */
class CreateSessionReviewRequest {
	static id = 'ondewo.nlu.CreateSessionReviewRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CreateSessionReviewRequest();
		CreateSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.parentReviewId = _instance.parentReviewId || '';
		_instance.sessionReview = _instance.sessionReview || undefined;
		_instance.sessionReviewView = _instance.sessionReviewView || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					_instance.parentReviewId = _reader.readString();
					break;
				case 3:
					_instance.sessionReview = new SessionReview();
					_reader.readMessage(_instance.sessionReview, SessionReview.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.sessionReviewView = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		CreateSessionReviewRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.parentReviewId) {
			_writer.writeString(2, _instance.parentReviewId);
		}
		if (_instance.sessionReview) {
			_writer.writeMessage(3, _instance.sessionReview, SessionReview.serializeBinaryToWriter);
		}
		if (_instance.sessionReviewView) {
			_writer.writeEnum(4, _instance.sessionReviewView);
		}
	}
	_sessionId;
	_parentReviewId;
	_sessionReview;
	_sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateSessionReviewRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.parentReviewId = _value.parentReviewId;
		this.sessionReview = _value.sessionReview ? new SessionReview(_value.sessionReview) : undefined;
		this.sessionReviewView = _value.sessionReviewView;
		CreateSessionReviewRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get parentReviewId() {
		return this._parentReviewId;
	}
	set parentReviewId(value) {
		this._parentReviewId = value;
	}
	get sessionReview() {
		return this._sessionReview;
	}
	set sessionReview(value) {
		this._sessionReview = value;
	}
	get sessionReviewView() {
		return this._sessionReviewView;
	}
	set sessionReviewView(value) {
		this._sessionReviewView = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateSessionReviewRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			parentReviewId: this.parentReviewId,
			sessionReview: this.sessionReview ? this.sessionReview.toObject() : undefined,
			sessionReviewView: this.sessionReviewView
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
		options
	) {
		return {
			sessionId: this.sessionId,
			parentReviewId: this.parentReviewId,
			sessionReview: this.sessionReview ? this.sessionReview.toProtobufJSON(options) : null,
			sessionReviewView:
				SessionReview.View[
					this.sessionReviewView === null || this.sessionReviewView === undefined ? 0 : this.sessionReviewView
				]
		};
	}
}
export { CreateSessionReviewRequest };
/**
 * Message implementation for ondewo.nlu.SessionReview
 */
class SessionReview {
	static id = 'ondewo.nlu.SessionReview';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SessionReview();
		SessionReview.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.name = _instance.name || '';
		_instance.sessionReviewSteps = _instance.sessionReviewSteps || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.name = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new SessionReviewStep();
					_reader.readMessage(messageInitializer2, SessionReviewStep.deserializeBinaryFromReader);
					(_instance.sessionReviewSteps = _instance.sessionReviewSteps || []).push(messageInitializer2);
					break;
				default:
					_reader.skipField();
			}
		}
		SessionReview.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.name) {
			_writer.writeString(1, _instance.name);
		}
		if (_instance.sessionReviewSteps && _instance.sessionReviewSteps.length) {
			_writer.writeRepeatedMessage(2, _instance.sessionReviewSteps, SessionReviewStep.serializeBinaryToWriter);
		}
	}
	_name;
	_sessionReviewSteps;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReview to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.name = _value.name;
		this.sessionReviewSteps = (_value.sessionReviewSteps || []).map((m) => new SessionReviewStep(m));
		SessionReview.refineValues(this);
	}
	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}
	get sessionReviewSteps() {
		return this._sessionReviewSteps;
	}
	set sessionReviewSteps(value) {
		this._sessionReviewSteps = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SessionReview.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			name: this.name,
			sessionReviewSteps: (this.sessionReviewSteps || []).map((m) => m.toObject())
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
		options
	) {
		return {
			name: this.name,
			sessionReviewSteps: (this.sessionReviewSteps || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
export { SessionReview };
(function (SessionReview) {
	let View;
	(function (View) {
		View[(View['VIEW_UNSPECIFIED'] = 0)] = 'VIEW_UNSPECIFIED';
		View[(View['VIEW_FULL'] = 1)] = 'VIEW_FULL';
		View[(View['VIEW_SPARSE'] = 2)] = 'VIEW_SPARSE';
	})((View = SessionReview.View || (SessionReview.View = {})));
})(SessionReview || (SessionReview = {}));
/**
 * Message implementation for ondewo.nlu.SessionReviewStep
 */
class SessionReviewStep {
	static id = 'ondewo.nlu.SessionReviewStep';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SessionReviewStep();
		SessionReviewStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.name = _instance.name || '';
		_instance.annotatedUsersays = _instance.annotatedUsersays || undefined;
		_instance.languageCode = _instance.languageCode || '';
		_instance.detectedIntents = _instance.detectedIntents || [];
		_instance.contexts = _instance.contexts || [];
		_instance.contextsOut = _instance.contextsOut || [];
		_instance.queryTextOriginal = _instance.queryTextOriginal || '';
		_instance.platforms = _instance.platforms || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.name = _reader.readString();
					break;
				case 2:
					_instance.annotatedUsersays = new ondewoNlu013.Intent.TrainingPhrase();
					_reader.readMessage(
						_instance.annotatedUsersays,
						ondewoNlu013.Intent.TrainingPhrase.deserializeBinaryFromReader
					);
					break;
				case 3:
					_instance.languageCode = _reader.readString();
					break;
				case 4:
					const messageInitializer4 = new DetectedIntent();
					_reader.readMessage(messageInitializer4, DetectedIntent.deserializeBinaryFromReader);
					(_instance.detectedIntents = _instance.detectedIntents || []).push(messageInitializer4);
					break;
				case 5:
					const messageInitializer5 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer5, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.contexts = _instance.contexts || []).push(messageInitializer5);
					break;
				case 6:
					const messageInitializer6 = new ondewoNlu006.Context();
					_reader.readMessage(messageInitializer6, ondewoNlu006.Context.deserializeBinaryFromReader);
					(_instance.contextsOut = _instance.contextsOut || []).push(messageInitializer6);
					break;
				case 7:
					_instance.queryTextOriginal = _reader.readString();
					break;
				case 8:
					(_instance.platforms = _instance.platforms || []).push(...(_reader.readPackedEnum() || []));
					break;
				default:
					_reader.skipField();
			}
		}
		SessionReviewStep.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.name) {
			_writer.writeString(1, _instance.name);
		}
		if (_instance.annotatedUsersays) {
			_writer.writeMessage(2, _instance.annotatedUsersays, ondewoNlu013.Intent.TrainingPhrase.serializeBinaryToWriter);
		}
		if (_instance.languageCode) {
			_writer.writeString(3, _instance.languageCode);
		}
		if (_instance.detectedIntents && _instance.detectedIntents.length) {
			_writer.writeRepeatedMessage(4, _instance.detectedIntents, DetectedIntent.serializeBinaryToWriter);
		}
		if (_instance.contexts && _instance.contexts.length) {
			_writer.writeRepeatedMessage(5, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.contextsOut && _instance.contextsOut.length) {
			_writer.writeRepeatedMessage(6, _instance.contextsOut, ondewoNlu006.Context.serializeBinaryToWriter);
		}
		if (_instance.queryTextOriginal) {
			_writer.writeString(7, _instance.queryTextOriginal);
		}
		if (_instance.platforms && _instance.platforms.length) {
			_writer.writePackedEnum(8, _instance.platforms);
		}
	}
	_name;
	_annotatedUsersays;
	_languageCode;
	_detectedIntents;
	_contexts;
	_contextsOut;
	_queryTextOriginal;
	_platforms;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SessionReviewStep to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.name = _value.name;
		this.annotatedUsersays = _value.annotatedUsersays
			? new ondewoNlu013.Intent.TrainingPhrase(_value.annotatedUsersays)
			: undefined;
		this.languageCode = _value.languageCode;
		this.detectedIntents = (_value.detectedIntents || []).map((m) => new DetectedIntent(m));
		this.contexts = (_value.contexts || []).map((m) => new ondewoNlu006.Context(m));
		this.contextsOut = (_value.contextsOut || []).map((m) => new ondewoNlu006.Context(m));
		this.queryTextOriginal = _value.queryTextOriginal;
		this.platforms = (_value.platforms || []).slice();
		SessionReviewStep.refineValues(this);
	}
	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}
	get annotatedUsersays() {
		return this._annotatedUsersays;
	}
	set annotatedUsersays(value) {
		this._annotatedUsersays = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	get detectedIntents() {
		return this._detectedIntents;
	}
	set detectedIntents(value) {
		this._detectedIntents = value;
	}
	get contexts() {
		return this._contexts;
	}
	set contexts(value) {
		this._contexts = value;
	}
	get contextsOut() {
		return this._contextsOut;
	}
	set contextsOut(value) {
		this._contextsOut = value;
	}
	get queryTextOriginal() {
		return this._queryTextOriginal;
	}
	set queryTextOriginal(value) {
		this._queryTextOriginal = value;
	}
	get platforms() {
		return this._platforms;
	}
	set platforms(value) {
		this._platforms = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SessionReviewStep.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			name: this.name,
			annotatedUsersays: this.annotatedUsersays ? this.annotatedUsersays.toObject() : undefined,
			languageCode: this.languageCode,
			detectedIntents: (this.detectedIntents || []).map((m) => m.toObject()),
			contexts: (this.contexts || []).map((m) => m.toObject()),
			contextsOut: (this.contextsOut || []).map((m) => m.toObject()),
			queryTextOriginal: this.queryTextOriginal,
			platforms: (this.platforms || []).slice()
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
		options
	) {
		return {
			name: this.name,
			annotatedUsersays: this.annotatedUsersays ? this.annotatedUsersays.toProtobufJSON(options) : null,
			languageCode: this.languageCode,
			detectedIntents: (this.detectedIntents || []).map((m) => m.toProtobufJSON(options)),
			contexts: (this.contexts || []).map((m) => m.toProtobufJSON(options)),
			contextsOut: (this.contextsOut || []).map((m) => m.toProtobufJSON(options)),
			queryTextOriginal: this.queryTextOriginal,
			platforms: (this.platforms || []).map((v) => ondewoNlu013.Intent.Message.Platform[v])
		};
	}
}
export { SessionReviewStep };
/**
 * Message implementation for ondewo.nlu.DetectedIntent
 */
class DetectedIntent {
	static id = 'ondewo.nlu.DetectedIntent';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DetectedIntent();
		DetectedIntent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.intent = _instance.intent || undefined;
		_instance.score = _instance.score || 0;
		_instance.algorithm = _instance.algorithm || '';
		_instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
		_instance.requiredParamMissing = _instance.requiredParamMissing || false;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.intent = new ondewoNlu013.Intent();
					_reader.readMessage(_instance.intent, ondewoNlu013.Intent.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.score = _reader.readFloat();
					break;
				case 3:
					_instance.algorithm = _reader.readString();
					break;
				case 4:
					const messageInitializer4 = new ondewoNlu013.Intent.Message();
					_reader.readMessage(messageInitializer4, ondewoNlu013.Intent.Message.deserializeBinaryFromReader);
					(_instance.fulfillmentMessages = _instance.fulfillmentMessages || []).push(messageInitializer4);
					break;
				case 5:
					_instance.requiredParamMissing = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		DetectedIntent.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.intent) {
			_writer.writeMessage(1, _instance.intent, ondewoNlu013.Intent.serializeBinaryToWriter);
		}
		if (_instance.score) {
			_writer.writeFloat(2, _instance.score);
		}
		if (_instance.algorithm) {
			_writer.writeString(3, _instance.algorithm);
		}
		if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
			_writer.writeRepeatedMessage(
				4,
				_instance.fulfillmentMessages,
				ondewoNlu013.Intent.Message.serializeBinaryToWriter
			);
		}
		if (_instance.requiredParamMissing) {
			_writer.writeBool(5, _instance.requiredParamMissing);
		}
	}
	_intent;
	_score;
	_algorithm;
	_fulfillmentMessages;
	_requiredParamMissing;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DetectedIntent to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.intent = _value.intent ? new ondewoNlu013.Intent(_value.intent) : undefined;
		this.score = _value.score;
		this.algorithm = _value.algorithm;
		this.fulfillmentMessages = (_value.fulfillmentMessages || []).map((m) => new ondewoNlu013.Intent.Message(m));
		this.requiredParamMissing = _value.requiredParamMissing;
		DetectedIntent.refineValues(this);
	}
	get intent() {
		return this._intent;
	}
	set intent(value) {
		this._intent = value;
	}
	get score() {
		return this._score;
	}
	set score(value) {
		this._score = value;
	}
	get algorithm() {
		return this._algorithm;
	}
	set algorithm(value) {
		this._algorithm = value;
	}
	get fulfillmentMessages() {
		return this._fulfillmentMessages;
	}
	set fulfillmentMessages(value) {
		this._fulfillmentMessages = value;
	}
	get requiredParamMissing() {
		return this._requiredParamMissing;
	}
	set requiredParamMissing(value) {
		this._requiredParamMissing = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DetectedIntent.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			intent: this.intent ? this.intent.toObject() : undefined,
			score: this.score,
			algorithm: this.algorithm,
			fulfillmentMessages: (this.fulfillmentMessages || []).map((m) => m.toObject()),
			requiredParamMissing: this.requiredParamMissing
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
		options
	) {
		return {
			intent: this.intent ? this.intent.toProtobufJSON(options) : null,
			score: this.score,
			algorithm: this.algorithm,
			fulfillmentMessages: (this.fulfillmentMessages || []).map((m) => m.toProtobufJSON(options)),
			requiredParamMissing: this.requiredParamMissing
		};
	}
}
export { DetectedIntent };
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsRequest
 */
class ListSessionLabelsRequest {
	static id = 'ondewo.nlu.ListSessionLabelsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionLabelsRequest();
		ListSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionLabelsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
	}
	_sessionId;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		ListSessionLabelsRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionLabelsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId
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
		options
	) {
		return {
			sessionId: this.sessionId
		};
	}
}
export { ListSessionLabelsRequest };
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsOfAllSessionsRequest
 */
class ListSessionLabelsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListSessionLabelsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionLabelsOfAllSessionsRequest();
		ListSessionLabelsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionLabelsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListSessionLabelsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionLabelsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListSessionLabelsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsResponse
 */
class ListSessionLabelsResponse {
	static id = 'ondewo.nlu.ListSessionLabelsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionLabelsResponse();
		ListSessionLabelsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.labels = _instance.labels || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionLabelsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(1, _instance.labels);
		}
	}
	_labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionLabelsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.labels = (_value.labels || []).slice();
		ListSessionLabelsResponse.refineValues(this);
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionLabelsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			labels: (this.labels || []).slice()
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
		options
	) {
		return {
			labels: (this.labels || []).slice()
		};
	}
}
export { ListSessionLabelsResponse };
/**
 * Message implementation for ondewo.nlu.ListLanguageCodesOfAllSessionsRequest
 */
class ListLanguageCodesOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListLanguageCodesOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListLanguageCodesOfAllSessionsRequest();
		ListLanguageCodesOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListLanguageCodesOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListLanguageCodesOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListLanguageCodesOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListLanguageCodesOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListLanguageCodesOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListLanguageCodesResponse
 */
class ListLanguageCodesResponse {
	static id = 'ondewo.nlu.ListLanguageCodesResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListLanguageCodesResponse();
		ListLanguageCodesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageCodes = _instance.languageCodes || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListLanguageCodesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageCodes && _instance.languageCodes.length) {
			_writer.writeRepeatedString(1, _instance.languageCodes);
		}
	}
	_languageCodes;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListLanguageCodesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageCodes = (_value.languageCodes || []).slice();
		ListLanguageCodesResponse.refineValues(this);
	}
	get languageCodes() {
		return this._languageCodes;
	}
	set languageCodes(value) {
		this._languageCodes = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListLanguageCodesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageCodes: (this.languageCodes || []).slice()
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
		options
	) {
		return {
			languageCodes: (this.languageCodes || []).slice()
		};
	}
}
export { ListLanguageCodesResponse };
/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest
 */
class ListMatchedIntentsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListMatchedIntentsOfAllSessionsRequest();
		ListMatchedIntentsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListMatchedIntentsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedIntentsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListMatchedIntentsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListMatchedIntentsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListMatchedIntentsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListMatchedIntentsResponse
 */
class ListMatchedIntentsResponse {
	static id = 'ondewo.nlu.ListMatchedIntentsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListMatchedIntentsResponse();
		ListMatchedIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.matchedIntents = _instance.matchedIntents || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.matchedIntents = _instance.matchedIntents || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListMatchedIntentsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.matchedIntents && _instance.matchedIntents.length) {
			_writer.writeRepeatedString(1, _instance.matchedIntents);
		}
	}
	_matchedIntents;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedIntentsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.matchedIntents = (_value.matchedIntents || []).slice();
		ListMatchedIntentsResponse.refineValues(this);
	}
	get matchedIntents() {
		return this._matchedIntents;
	}
	set matchedIntents(value) {
		this._matchedIntents = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListMatchedIntentsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			matchedIntents: (this.matchedIntents || []).slice()
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
		options
	) {
		return {
			matchedIntents: (this.matchedIntents || []).slice()
		};
	}
}
export { ListMatchedIntentsResponse };
/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest
 */
class ListMatchedEntityTypesOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListMatchedEntityTypesOfAllSessionsRequest();
		ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListMatchedEntityTypesOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedEntityTypesOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListMatchedEntityTypesOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListMatchedEntityTypesOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListMatchedEntityTypesOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListMatchedEntityTypesResponse
 */
class ListMatchedEntityTypesResponse {
	static id = 'ondewo.nlu.ListMatchedEntityTypesResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListMatchedEntityTypesResponse();
		ListMatchedEntityTypesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.matchedEntityTypes = _instance.matchedEntityTypes || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListMatchedEntityTypesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
			_writer.writeRepeatedString(1, _instance.matchedEntityTypes);
		}
	}
	_matchedEntityTypes;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListMatchedEntityTypesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.matchedEntityTypes = (_value.matchedEntityTypes || []).slice();
		ListMatchedEntityTypesResponse.refineValues(this);
	}
	get matchedEntityTypes() {
		return this._matchedEntityTypes;
	}
	set matchedEntityTypes(value) {
		this._matchedEntityTypes = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListMatchedEntityTypesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			matchedEntityTypes: (this.matchedEntityTypes || []).slice()
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
		options
	) {
		return {
			matchedEntityTypes: (this.matchedEntityTypes || []).slice()
		};
	}
}
export { ListMatchedEntityTypesResponse };
/**
 * Message implementation for ondewo.nlu.ListUserIdsOfAllSessionsRequest
 */
class ListUserIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListUserIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListUserIdsOfAllSessionsRequest();
		ListUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListUserIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUserIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListUserIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListUserIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListUserIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListUserIdsResponse
 */
class ListUserIdsResponse {
	static id = 'ondewo.nlu.ListUserIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListUserIdsResponse();
		ListUserIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.userIds = _instance.userIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.userIds = _instance.userIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListUserIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.userIds && _instance.userIds.length) {
			_writer.writeRepeatedString(1, _instance.userIds);
		}
	}
	_userIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListUserIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.userIds = (_value.userIds || []).slice();
		ListUserIdsResponse.refineValues(this);
	}
	get userIds() {
		return this._userIds;
	}
	set userIds(value) {
		this._userIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListUserIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			userIds: (this.userIds || []).slice()
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
		options
	) {
		return {
			userIds: (this.userIds || []).slice()
		};
	}
}
export { ListUserIdsResponse };
/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest
 */
class ListIdentifiedUserIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListIdentifiedUserIdsOfAllSessionsRequest();
		ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListIdentifiedUserIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIdentifiedUserIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListIdentifiedUserIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListIdentifiedUserIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListIdentifiedUserIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListIdentifiedUserIdsResponse
 */
class ListIdentifiedUserIdsResponse {
	static id = 'ondewo.nlu.ListIdentifiedUserIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListIdentifiedUserIdsResponse();
		ListIdentifiedUserIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.identifiedUserIds = _instance.identifiedUserIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.identifiedUserIds = _instance.identifiedUserIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListIdentifiedUserIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.identifiedUserIds && _instance.identifiedUserIds.length) {
			_writer.writeRepeatedString(1, _instance.identifiedUserIds);
		}
	}
	_identifiedUserIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIdentifiedUserIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.identifiedUserIds = (_value.identifiedUserIds || []).slice();
		ListIdentifiedUserIdsResponse.refineValues(this);
	}
	get identifiedUserIds() {
		return this._identifiedUserIds;
	}
	set identifiedUserIds(value) {
		this._identifiedUserIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListIdentifiedUserIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			identifiedUserIds: (this.identifiedUserIds || []).slice()
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
		options
	) {
		return {
			identifiedUserIds: (this.identifiedUserIds || []).slice()
		};
	}
}
export { ListIdentifiedUserIdsResponse };
/**
 * Message implementation for ondewo.nlu.ListTagsOfAllSessionsRequest
 */
class ListTagsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListTagsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListTagsOfAllSessionsRequest();
		ListTagsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListTagsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTagsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListTagsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListTagsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListTagsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListTagsResponse
 */
class ListTagsResponse {
	static id = 'ondewo.nlu.ListTagsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListTagsResponse();
		ListTagsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.tags = _instance.tags || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.tags = _instance.tags || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListTagsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.tags && _instance.tags.length) {
			_writer.writeRepeatedString(1, _instance.tags);
		}
	}
	_tags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTagsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.tags = (_value.tags || []).slice();
		ListTagsResponse.refineValues(this);
	}
	get tags() {
		return this._tags;
	}
	set tags(value) {
		this._tags = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListTagsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			tags: (this.tags || []).slice()
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
		options
	) {
		return {
			tags: (this.tags || []).slice()
		};
	}
}
export { ListTagsResponse };
/**
 * Message implementation for ondewo.nlu.ListInputContextsOfAllSessionsRequest
 */
class ListInputContextsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListInputContextsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListInputContextsOfAllSessionsRequest();
		ListInputContextsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListInputContextsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListInputContextsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListInputContextsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListInputContextsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListInputContextsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListInputContextsResponse
 */
class ListInputContextsResponse {
	static id = 'ondewo.nlu.ListInputContextsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListInputContextsResponse();
		ListInputContextsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.inputContexts = _instance.inputContexts || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.inputContexts = _instance.inputContexts || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListInputContextsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.inputContexts && _instance.inputContexts.length) {
			_writer.writeRepeatedString(1, _instance.inputContexts);
		}
	}
	_inputContexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListInputContextsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.inputContexts = (_value.inputContexts || []).slice();
		ListInputContextsResponse.refineValues(this);
	}
	get inputContexts() {
		return this._inputContexts;
	}
	set inputContexts(value) {
		this._inputContexts = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListInputContextsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			inputContexts: (this.inputContexts || []).slice()
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
		options
	) {
		return {
			inputContexts: (this.inputContexts || []).slice()
		};
	}
}
export { ListInputContextsResponse };
/**
 * Message implementation for ondewo.nlu.ListOutputContextsOfAllSessionsRequest
 */
class ListOutputContextsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListOutputContextsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListOutputContextsOfAllSessionsRequest();
		ListOutputContextsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListOutputContextsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOutputContextsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListOutputContextsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListOutputContextsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListOutputContextsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListOutputContextsResponse
 */
class ListOutputContextsResponse {
	static id = 'ondewo.nlu.ListOutputContextsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListOutputContextsResponse();
		ListOutputContextsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.outputContexts = _instance.outputContexts || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.outputContexts = _instance.outputContexts || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListOutputContextsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.outputContexts && _instance.outputContexts.length) {
			_writer.writeRepeatedString(1, _instance.outputContexts);
		}
	}
	_outputContexts;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOutputContextsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.outputContexts = (_value.outputContexts || []).slice();
		ListOutputContextsResponse.refineValues(this);
	}
	get outputContexts() {
		return this._outputContexts;
	}
	set outputContexts(value) {
		this._outputContexts = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListOutputContextsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			outputContexts: (this.outputContexts || []).slice()
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
		options
	) {
		return {
			outputContexts: (this.outputContexts || []).slice()
		};
	}
}
export { ListOutputContextsResponse };
/**
 * Message implementation for ondewo.nlu.ListPlatformsOfAllSessionsRequest
 */
class ListPlatformsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListPlatformsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListPlatformsOfAllSessionsRequest();
		ListPlatformsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListPlatformsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPlatformsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListPlatformsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListPlatformsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListPlatformsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListPlatformsResponse
 */
class ListPlatformsResponse {
	static id = 'ondewo.nlu.ListPlatformsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListPlatformsResponse();
		ListPlatformsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.platforms = _instance.platforms || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.platforms = _instance.platforms || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListPlatformsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.platforms && _instance.platforms.length) {
			_writer.writeRepeatedString(1, _instance.platforms);
		}
	}
	_platforms;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPlatformsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.platforms = (_value.platforms || []).slice();
		ListPlatformsResponse.refineValues(this);
	}
	get platforms() {
		return this._platforms;
	}
	set platforms(value) {
		this._platforms = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListPlatformsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			platforms: (this.platforms || []).slice()
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
		options
	) {
		return {
			platforms: (this.platforms || []).slice()
		};
	}
}
export { ListPlatformsResponse };
/**
 * Message implementation for ondewo.nlu.ListAccountIdsOfAllSessionsRequest
 */
class ListAccountIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListAccountIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListAccountIdsOfAllSessionsRequest();
		ListAccountIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListAccountIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAccountIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListAccountIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListAccountIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListAccountIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListAccountIdsResponse
 */
class ListAccountIdsResponse {
	static id = 'ondewo.nlu.ListAccountIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListAccountIdsResponse();
		ListAccountIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.accountIds = _instance.accountIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.accountIds = _instance.accountIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListAccountIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.accountIds && _instance.accountIds.length) {
			_writer.writeRepeatedString(1, _instance.accountIds);
		}
	}
	_accountIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListAccountIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.accountIds = (_value.accountIds || []).slice();
		ListAccountIdsResponse.refineValues(this);
	}
	get accountIds() {
		return this._accountIds;
	}
	set accountIds(value) {
		this._accountIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListAccountIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			accountIds: (this.accountIds || []).slice()
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
		options
	) {
		return {
			accountIds: (this.accountIds || []).slice()
		};
	}
}
export { ListAccountIdsResponse };
/**
 * Message implementation for ondewo.nlu.ListPropertyIdsOfAllSessionsRequest
 */
class ListPropertyIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListPropertyIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListPropertyIdsOfAllSessionsRequest();
		ListPropertyIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListPropertyIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPropertyIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListPropertyIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListPropertyIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListPropertyIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListPropertyIdsResponse
 */
class ListPropertyIdsResponse {
	static id = 'ondewo.nlu.ListPropertyIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListPropertyIdsResponse();
		ListPropertyIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.propertyIds = _instance.propertyIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.propertyIds = _instance.propertyIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListPropertyIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.propertyIds && _instance.propertyIds.length) {
			_writer.writeRepeatedString(1, _instance.propertyIds);
		}
	}
	_propertyIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListPropertyIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.propertyIds = (_value.propertyIds || []).slice();
		ListPropertyIdsResponse.refineValues(this);
	}
	get propertyIds() {
		return this._propertyIds;
	}
	set propertyIds(value) {
		this._propertyIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListPropertyIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			propertyIds: (this.propertyIds || []).slice()
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
		options
	) {
		return {
			propertyIds: (this.propertyIds || []).slice()
		};
	}
}
export { ListPropertyIdsResponse };
/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest
 */
class ListDatastreamIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListDatastreamIdsOfAllSessionsRequest();
		ListDatastreamIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListDatastreamIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListDatastreamIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListDatastreamIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListDatastreamIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListDatastreamIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListDatastreamIdsResponse
 */
class ListDatastreamIdsResponse {
	static id = 'ondewo.nlu.ListDatastreamIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListDatastreamIdsResponse();
		ListDatastreamIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.datastreamIds = _instance.datastreamIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.datastreamIds = _instance.datastreamIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListDatastreamIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.datastreamIds && _instance.datastreamIds.length) {
			_writer.writeRepeatedString(1, _instance.datastreamIds);
		}
	}
	_datastreamIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListDatastreamIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.datastreamIds = (_value.datastreamIds || []).slice();
		ListDatastreamIdsResponse.refineValues(this);
	}
	get datastreamIds() {
		return this._datastreamIds;
	}
	set datastreamIds(value) {
		this._datastreamIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListDatastreamIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			datastreamIds: (this.datastreamIds || []).slice()
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
		options
	) {
		return {
			datastreamIds: (this.datastreamIds || []).slice()
		};
	}
}
export { ListDatastreamIdsResponse };
/**
 * Message implementation for ondewo.nlu.ListOriginIdsOfAllSessionsRequest
 */
class ListOriginIdsOfAllSessionsRequest {
	static id = 'ondewo.nlu.ListOriginIdsOfAllSessionsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListOriginIdsOfAllSessionsRequest();
		ListOriginIdsOfAllSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.sessionFilter = _instance.sessionFilter || undefined;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.sessionFilter = new SessionFilter();
					_reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ListOriginIdsOfAllSessionsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.parent) {
			_writer.writeString(1, _instance.parent);
		}
		if (_instance.sessionFilter) {
			_writer.writeMessage(2, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
		}
	}
	_parent;
	_sessionFilter;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOriginIdsOfAllSessionsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.sessionFilter = _value.sessionFilter ? new SessionFilter(_value.sessionFilter) : undefined;
		ListOriginIdsOfAllSessionsRequest.refineValues(this);
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get sessionFilter() {
		return this._sessionFilter;
	}
	set sessionFilter(value) {
		this._sessionFilter = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListOriginIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toObject() : undefined
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
		options
	) {
		return {
			parent: this.parent,
			sessionFilter: this.sessionFilter ? this.sessionFilter.toProtobufJSON(options) : null
		};
	}
}
export { ListOriginIdsOfAllSessionsRequest };
/**
 * Message implementation for ondewo.nlu.ListOriginIdsResponse
 */
class ListOriginIdsResponse {
	static id = 'ondewo.nlu.ListOriginIdsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListOriginIdsResponse();
		ListOriginIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.originIds = _instance.originIds || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.originIds = _instance.originIds || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListOriginIdsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.originIds && _instance.originIds.length) {
			_writer.writeRepeatedString(1, _instance.originIds);
		}
	}
	_originIds;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListOriginIdsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.originIds = (_value.originIds || []).slice();
		ListOriginIdsResponse.refineValues(this);
	}
	get originIds() {
		return this._originIds;
	}
	set originIds(value) {
		this._originIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListOriginIdsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			originIds: (this.originIds || []).slice()
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
		options
	) {
		return {
			originIds: (this.originIds || []).slice()
		};
	}
}
export { ListOriginIdsResponse };
/**
 * Message implementation for ondewo.nlu.AddSessionLabelsRequest
 */
class AddSessionLabelsRequest {
	static id = 'ondewo.nlu.AddSessionLabelsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AddSessionLabelsRequest();
		AddSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.labels = _instance.labels || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		AddSessionLabelsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(2, _instance.labels);
		}
	}
	_sessionId;
	_labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddSessionLabelsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.labels = (_value.labels || []).slice();
		AddSessionLabelsRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AddSessionLabelsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			labels: (this.labels || []).slice()
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
		options
	) {
		return {
			sessionId: this.sessionId,
			labels: (this.labels || []).slice()
		};
	}
}
export { AddSessionLabelsRequest };
/**
 * Message implementation for ondewo.nlu.DeleteSessionLabelsRequest
 */
class DeleteSessionLabelsRequest {
	static id = 'ondewo.nlu.DeleteSessionLabelsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DeleteSessionLabelsRequest();
		DeleteSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.labels = _instance.labels || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					(_instance.labels = _instance.labels || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		DeleteSessionLabelsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.labels && _instance.labels.length) {
			_writer.writeRepeatedString(2, _instance.labels);
		}
	}
	_sessionId;
	_labels;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteSessionLabelsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.labels = (_value.labels || []).slice();
		DeleteSessionLabelsRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get labels() {
		return this._labels;
	}
	set labels(value) {
		this._labels = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DeleteSessionLabelsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			labels: (this.labels || []).slice()
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
		options
	) {
		return {
			sessionId: this.sessionId,
			labels: (this.labels || []).slice()
		};
	}
}
export { DeleteSessionLabelsRequest };
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsRequest
 */
class ListSessionReviewsRequest {
	static id = 'ondewo.nlu.ListSessionReviewsRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionReviewsRequest();
		ListSessionReviewsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.sessionReviewView = _instance.sessionReviewView || 0;
		_instance.pageToken = _instance.pageToken || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					_instance.sessionReviewView = _reader.readEnum();
					break;
				case 4:
					_instance.pageToken = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionReviewsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.sessionReviewView) {
			_writer.writeEnum(2, _instance.sessionReviewView);
		}
		if (_instance.pageToken) {
			_writer.writeString(4, _instance.pageToken);
		}
	}
	_sessionId;
	_sessionReviewView;
	_pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.sessionReviewView = _value.sessionReviewView;
		this.pageToken = _value.pageToken;
		ListSessionReviewsRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get sessionReviewView() {
		return this._sessionReviewView;
	}
	set sessionReviewView(value) {
		this._sessionReviewView = value;
	}
	get pageToken() {
		return this._pageToken;
	}
	set pageToken(value) {
		this._pageToken = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionReviewsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			sessionReviewView: this.sessionReviewView,
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
		options
	) {
		return {
			sessionId: this.sessionId,
			sessionReviewView:
				SessionReview.View[
					this.sessionReviewView === null || this.sessionReviewView === undefined ? 0 : this.sessionReviewView
				],
			pageToken: this.pageToken
		};
	}
}
export { ListSessionReviewsRequest };
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsResponse
 */
class ListSessionReviewsResponse {
	static id = 'ondewo.nlu.ListSessionReviewsResponse';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListSessionReviewsResponse();
		ListSessionReviewsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionReviews = _instance.sessionReviews || [];
		_instance.nextPageToken = _instance.nextPageToken || '';
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new SessionReview();
					_reader.readMessage(messageInitializer1, SessionReview.deserializeBinaryFromReader);
					(_instance.sessionReviews = _instance.sessionReviews || []).push(messageInitializer1);
					break;
				case 2:
					_instance.nextPageToken = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		ListSessionReviewsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionReviews && _instance.sessionReviews.length) {
			_writer.writeRepeatedMessage(1, _instance.sessionReviews, SessionReview.serializeBinaryToWriter);
		}
		if (_instance.nextPageToken) {
			_writer.writeString(2, _instance.nextPageToken);
		}
	}
	_sessionReviews;
	_nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListSessionReviewsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionReviews = (_value.sessionReviews || []).map((m) => new SessionReview(m));
		this.nextPageToken = _value.nextPageToken;
		ListSessionReviewsResponse.refineValues(this);
	}
	get sessionReviews() {
		return this._sessionReviews;
	}
	set sessionReviews(value) {
		this._sessionReviews = value;
	}
	get nextPageToken() {
		return this._nextPageToken;
	}
	set nextPageToken(value) {
		this._nextPageToken = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListSessionReviewsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionReviews: (this.sessionReviews || []).map((m) => m.toObject()),
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
		options
	) {
		return {
			sessionReviews: (this.sessionReviews || []).map((m) => m.toProtobufJSON(options)),
			nextPageToken: this.nextPageToken
		};
	}
}
export { ListSessionReviewsResponse };
/**
 * Message implementation for ondewo.nlu.GetSessionReviewRequest
 */
class GetSessionReviewRequest {
	static id = 'ondewo.nlu.GetSessionReviewRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new GetSessionReviewRequest();
		GetSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionReviewId = _instance.sessionReviewId || '';
		_instance.sessionReviewView = _instance.sessionReviewView || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionReviewId = _reader.readString();
					break;
				case 2:
					_instance.sessionReviewView = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		GetSessionReviewRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionReviewId) {
			_writer.writeString(1, _instance.sessionReviewId);
		}
		if (_instance.sessionReviewView) {
			_writer.writeEnum(2, _instance.sessionReviewView);
		}
	}
	_sessionReviewId;
	_sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetSessionReviewRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionReviewId = _value.sessionReviewId;
		this.sessionReviewView = _value.sessionReviewView;
		GetSessionReviewRequest.refineValues(this);
	}
	get sessionReviewId() {
		return this._sessionReviewId;
	}
	set sessionReviewId(value) {
		this._sessionReviewId = value;
	}
	get sessionReviewView() {
		return this._sessionReviewView;
	}
	set sessionReviewView(value) {
		this._sessionReviewView = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		GetSessionReviewRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionReviewId: this.sessionReviewId,
			sessionReviewView: this.sessionReviewView
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
		options
	) {
		return {
			sessionReviewId: this.sessionReviewId,
			sessionReviewView:
				SessionReview.View[
					this.sessionReviewView === null || this.sessionReviewView === undefined ? 0 : this.sessionReviewView
				]
		};
	}
}
export { GetSessionReviewRequest };
/**
 * Message implementation for ondewo.nlu.GetLatestSessionReviewRequest
 */
class GetLatestSessionReviewRequest {
	static id = 'ondewo.nlu.GetLatestSessionReviewRequest';
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new GetLatestSessionReviewRequest();
		GetLatestSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.sessionId = _instance.sessionId || '';
		_instance.sessionReviewView = _instance.sessionReviewView || 0;
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					_instance.sessionId = _reader.readString();
					break;
				case 2:
					_instance.sessionReviewView = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		GetLatestSessionReviewRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.sessionId) {
			_writer.writeString(1, _instance.sessionId);
		}
		if (_instance.sessionReviewView) {
			_writer.writeEnum(2, _instance.sessionReviewView);
		}
	}
	_sessionId;
	_sessionReviewView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetLatestSessionReviewRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.sessionId = _value.sessionId;
		this.sessionReviewView = _value.sessionReviewView;
		GetLatestSessionReviewRequest.refineValues(this);
	}
	get sessionId() {
		return this._sessionId;
	}
	set sessionId(value) {
		this._sessionId = value;
	}
	get sessionReviewView() {
		return this._sessionReviewView;
	}
	set sessionReviewView(value) {
		this._sessionReviewView = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		GetLatestSessionReviewRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			sessionId: this.sessionId,
			sessionReviewView: this.sessionReviewView
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
		options
	) {
		return {
			sessionId: this.sessionId,
			sessionReviewView:
				SessionReview.View[
					this.sessionReviewView === null || this.sessionReviewView === undefined ? 0 : this.sessionReviewView
				]
		};
	}
}
export { GetLatestSessionReviewRequest };