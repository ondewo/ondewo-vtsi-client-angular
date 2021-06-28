import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Optional, Inject } from '@angular/core';
import { GrpcMetadata, GrpcCallType, uint8ArrayToBase64 } from '@ngx-grpc/common';
import { throwStatusErrors, takeMessages, GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import { FieldMask, Struct, Empty, Timestamp } from '@ngx-grpc/well-known-types';

/**
 * Message implementation for ondewo.nlu.Context
 */
class Context {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Context to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.lifespanCount = _value.lifespanCount;
        (this.parameters = _value.parameters
            ? Object.keys(_value.parameters).reduce((r, k) => (Object.assign(Object.assign({}, r), { [k]: _value.parameters[k]
                    ? new Context.Parameter(_value.parameters[k])
                    : undefined })), {})
            : {}),
            (this.lifespanTime = _value.lifespanTime);
        Context.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Context();
        Context.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.lifespanCount = _instance.lifespanCount || 0;
        _instance.parameters = _instance.parameters || {};
        _instance.lifespanTime = _instance.lifespanTime || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.lifespanCount = _reader.readInt32();
                    break;
                case 3:
                    const msg_3 = {};
                    _reader.readMessage(msg_3, Context.ParametersEntry.deserializeBinaryFromReader);
                    _instance.parameters = _instance.parameters || {};
                    _instance.parameters[msg_3.key] = msg_3.value;
                    break;
                case 4:
                    _instance.lifespanTime = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Context.refineValues(_instance);
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
        if (_instance.lifespanCount) {
            _writer.writeInt32(2, _instance.lifespanCount);
        }
        if (!!_instance.parameters) {
            const keys_3 = Object.keys(_instance.parameters);
            if (keys_3.length) {
                const repeated_3 = keys_3
                    .map(key => ({ key: key, value: _instance.parameters[key] }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(3, repeated_3, Context.ParametersEntry.serializeBinaryToWriter);
            }
        }
        if (_instance.lifespanTime) {
            _writer.writeFloat(4, _instance.lifespanTime);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get lifespanCount() {
        return this._lifespanCount;
    }
    set lifespanCount(value) {
        this._lifespanCount = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get lifespanTime() {
        return this._lifespanTime;
    }
    set lifespanTime(value) {
        this._lifespanTime = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Context.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            lifespanCount: this.lifespanCount,
            parameters: this.parameters
                ? Object.keys(this.parameters).reduce((r, k) => (Object.assign(Object.assign({}, r), { [k]: this.parameters[k]
                        ? this.parameters[k].toObject()
                        : undefined })), {})
                : {},
            lifespanTime: this.lifespanTime
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
    options) {
        return {
            name: this.name,
            lifespanCount: this.lifespanCount,
            parameters: this.parameters
                ? Object.keys(this.parameters).reduce((r, k) => (Object.assign(Object.assign({}, r), { [k]: this.parameters[k] ? this.parameters[k].toJSON() : null })), {})
                : {},
            lifespanTime: this.lifespanTime
        };
    }
}
Context.id = 'ondewo.nlu.Context';
(function (Context) {
    /**
     * Message implementation for ondewo.nlu.Parameter
     */
    class Parameter {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Parameter to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.value = _value.value;
            this.valueOriginal = _value.valueOriginal;
            Parameter.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new Parameter();
            Parameter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.value = _instance.value || '';
            _instance.valueOriginal = _instance.valueOriginal || '';
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        _instance.displayName = _reader.readString();
                        break;
                    case 3:
                        _instance.value = _reader.readString();
                        break;
                    case 4:
                        _instance.valueOriginal = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Parameter.refineValues(_instance);
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
            if (_instance.displayName) {
                _writer.writeString(2, _instance.displayName);
            }
            if (_instance.value) {
                _writer.writeString(3, _instance.value);
            }
            if (_instance.valueOriginal) {
                _writer.writeString(4, _instance.valueOriginal);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get valueOriginal() {
            return this._valueOriginal;
        }
        set valueOriginal(value) {
            this._valueOriginal = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            Parameter.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                value: this.value,
                valueOriginal: this.valueOriginal
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
        options) {
            return {
                name: this.name,
                displayName: this.displayName,
                value: this.value,
                valueOriginal: this.valueOriginal
            };
        }
    }
    Parameter.id = 'ondewo.nlu.Parameter';
    Context.Parameter = Parameter;
    /**
     * Message implementation for ondewo.nlu.ParametersEntry
     */
    class ParametersEntry {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ParametersEntry to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.key = _value.key;
            this.value = _value.value
                ? new Context.Parameter(_value.value)
                : undefined;
            ParametersEntry.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ParametersEntry();
            ParametersEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.key = _instance.key || '';
            _instance.value = _instance.value || undefined;
        }
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.key = _reader.readString();
                        break;
                    case 2:
                        _instance.value = new Context.Parameter();
                        _reader.readMessage(_instance.value, Context.Parameter.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ParametersEntry.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.key) {
                _writer.writeString(1, _instance.key);
            }
            if (_instance.value) {
                _writer.writeMessage(2, _instance.value, Context.Parameter.serializeBinaryToWriter);
            }
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            ParametersEntry.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined
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
        options) {
            return {
                key: this.key,
                value: this.value ? this.value.toProtobufJSON(options) : null
            };
        }
    }
    ParametersEntry.id = 'ondewo.nlu.ParametersEntry';
    Context.ParametersEntry = ParametersEntry;
})(Context || (Context = {}));
/**
 * Message implementation for ondewo.nlu.ListContextsRequest
 */
class ListContextsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListContextsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.pageToken = _value.pageToken;
        ListContextsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListContextsRequest();
        ListContextsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.pageToken = _instance.pageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                case 3:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListContextsRequest.refineValues(_instance);
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
        if (_instance.pageToken) {
            _writer.writeString(3, _instance.pageToken);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
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
        ListContextsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
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
    options) {
        return {
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
}
ListContextsRequest.id = 'ondewo.nlu.ListContextsRequest';
/**
 * Message implementation for ondewo.nlu.ListContextsResponse
 */
class ListContextsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListContextsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.contexts = (_value.contexts || []).map(m => new Context(m));
        this.nextPageToken = _value.nextPageToken;
        ListContextsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListContextsResponse();
        ListContextsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.contexts = _instance.contexts || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Context();
                    _reader.readMessage(messageInitializer1, Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListContextsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(1, _instance.contexts, Context.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
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
        ListContextsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            contexts: (this.contexts || []).map(m => m.toObject()),
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
    options) {
        return {
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
ListContextsResponse.id = 'ondewo.nlu.ListContextsResponse';
/**
 * Message implementation for ondewo.nlu.GetContextRequest
 */
class GetContextRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContextRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        GetContextRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetContextRequest();
        GetContextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetContextRequest.refineValues(_instance);
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
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetContextRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
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
    options) {
        return {
            name: this.name
        };
    }
}
GetContextRequest.id = 'ondewo.nlu.GetContextRequest';
/**
 * Message implementation for ondewo.nlu.CreateContextRequest
 */
class CreateContextRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateContextRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.context = _value.context ? new Context(_value.context) : undefined;
        CreateContextRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateContextRequest();
        CreateContextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.context = _instance.context || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.context = new Context();
                    _reader.readMessage(_instance.context, Context.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateContextRequest.refineValues(_instance);
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
        if (_instance.context) {
            _writer.writeMessage(2, _instance.context, Context.serializeBinaryToWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateContextRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            context: this.context ? this.context.toObject() : undefined
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
    options) {
        return {
            parent: this.parent,
            context: this.context ? this.context.toProtobufJSON(options) : null
        };
    }
}
CreateContextRequest.id = 'ondewo.nlu.CreateContextRequest';
/**
 * Message implementation for ondewo.nlu.UpdateContextRequest
 */
class UpdateContextRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateContextRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.context = _value.context ? new Context(_value.context) : undefined;
        this.updateMask = _value.updateMask
            ? new FieldMask(_value.updateMask)
            : undefined;
        UpdateContextRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateContextRequest();
        UpdateContextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.context = _instance.context || undefined;
        _instance.updateMask = _instance.updateMask || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.context = new Context();
                    _reader.readMessage(_instance.context, Context.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.updateMask = new FieldMask();
                    _reader.readMessage(_instance.updateMask, FieldMask.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateContextRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.context) {
            _writer.writeMessage(1, _instance.context, Context.serializeBinaryToWriter);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(2, _instance.updateMask, FieldMask.serializeBinaryToWriter);
        }
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateContextRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            context: this.context ? this.context.toObject() : undefined,
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
    options) {
        return {
            context: this.context ? this.context.toProtobufJSON(options) : null,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null
        };
    }
}
UpdateContextRequest.id = 'ondewo.nlu.UpdateContextRequest';
/**
 * Message implementation for ondewo.nlu.DeleteContextRequest
 */
class DeleteContextRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteContextRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        DeleteContextRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteContextRequest();
        DeleteContextRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteContextRequest.refineValues(_instance);
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
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteContextRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
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
    options) {
        return {
            name: this.name
        };
    }
}
DeleteContextRequest.id = 'ondewo.nlu.DeleteContextRequest';
/**
 * Message implementation for ondewo.nlu.DeleteAllContextsRequest
 */
class DeleteAllContextsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteAllContextsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        DeleteAllContextsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteAllContextsRequest();
        DeleteAllContextsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteAllContextsRequest.refineValues(_instance);
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
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteAllContextsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent
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
    options) {
        return {
            parent: this.parent
        };
    }
}
DeleteAllContextsRequest.id = 'ondewo.nlu.DeleteAllContextsRequest';

/**
 * Message implementation for ondewo.nlu.VoipManifest
 */
class VoipManifest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.manifestId = _value.manifestId;
        this.contexts = (_value.contexts || []).map(m => new Context(m));
        this.callers = (_value.callers || []).map(m => new StartCallInstanceRequest(m));
        VoipManifest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipManifest();
        VoipManifest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.manifestId = _instance.manifestId || '';
        _instance.contexts = _instance.contexts || [];
        _instance.callers = _instance.callers || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.manifestId = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Context();
                    _reader.readMessage(messageInitializer2, Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer2);
                    break;
                case 9:
                    const messageInitializer9 = new StartCallInstanceRequest();
                    _reader.readMessage(messageInitializer9, StartCallInstanceRequest.deserializeBinaryFromReader);
                    (_instance.callers = _instance.callers || []).push(messageInitializer9);
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipManifest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.manifestId) {
            _writer.writeString(1, _instance.manifestId);
        }
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(2, _instance.contexts, Context.serializeBinaryToWriter);
        }
        if (_instance.callers && _instance.callers.length) {
            _writer.writeRepeatedMessage(9, _instance.callers, StartCallInstanceRequest.serializeBinaryToWriter);
        }
    }
    get manifestId() {
        return this._manifestId;
    }
    set manifestId(value) {
        this._manifestId = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get callers() {
        return this._callers;
    }
    set callers(value) {
        this._callers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipManifest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            manifestId: this.manifestId,
            contexts: (this.contexts || []).map(m => m.toObject()),
            callers: (this.callers || []).map(m => m.toObject())
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
    options) {
        return {
            manifestId: this.manifestId,
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
            callers: (this.callers || []).map(m => m.toProtobufJSON(options))
        };
    }
}
VoipManifest.id = 'ondewo.nlu.VoipManifest';
/**
 * Message implementation for ondewo.nlu.ManifestRequest
 */
class ManifestRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ManifestRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.manifestId = _value.manifestId;
        ManifestRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ManifestRequest();
        ManifestRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.manifestId = _instance.manifestId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.manifestId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ManifestRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.manifestId) {
            _writer.writeString(1, _instance.manifestId);
        }
    }
    get manifestId() {
        return this._manifestId;
    }
    set manifestId(value) {
        this._manifestId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ManifestRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            manifestId: this.manifestId
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
    options) {
        return {
            manifestId: this.manifestId
        };
    }
}
ManifestRequest.id = 'ondewo.nlu.ManifestRequest';
/**
 * Message implementation for ondewo.nlu.RunManifestResponse
 */
class RunManifestResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunManifestResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new ManifestRequest(_value.request)
            : undefined;
        this.started = _value.started;
        RunManifestResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RunManifestResponse();
        RunManifestResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.started = _instance.started || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new ManifestRequest();
                    _reader.readMessage(_instance.request, ManifestRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.started = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RunManifestResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, ManifestRequest.serializeBinaryToWriter);
        }
        if (_instance.started) {
            _writer.writeBool(2, _instance.started);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get started() {
        return this._started;
    }
    set started(value) {
        this._started = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RunManifestResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            started: this.started
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            started: this.started
        };
    }
}
RunManifestResponse.id = 'ondewo.nlu.RunManifestResponse';
/**
 * Message implementation for ondewo.nlu.RemoveManifestResponse
 */
class RemoveManifestResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveManifestResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new ManifestRequest(_value.request)
            : undefined;
        this.success = _value.success;
        this.callerResponses = (_value.callerResponses || []).map(m => new StopCallInstanceResponse(m));
        RemoveManifestResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RemoveManifestResponse();
        RemoveManifestResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.success = _instance.success || false;
        _instance.callerResponses = _instance.callerResponses || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new ManifestRequest();
                    _reader.readMessage(_instance.request, ManifestRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.success = _reader.readBool();
                    break;
                case 9:
                    const messageInitializer9 = new StopCallInstanceResponse();
                    _reader.readMessage(messageInitializer9, StopCallInstanceResponse.deserializeBinaryFromReader);
                    (_instance.callerResponses = _instance.callerResponses || []).push(messageInitializer9);
                    break;
                default:
                    _reader.skipField();
            }
        }
        RemoveManifestResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, ManifestRequest.serializeBinaryToWriter);
        }
        if (_instance.success) {
            _writer.writeBool(2, _instance.success);
        }
        if (_instance.callerResponses && _instance.callerResponses.length) {
            _writer.writeRepeatedMessage(9, _instance.callerResponses, StopCallInstanceResponse.serializeBinaryToWriter);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    get callerResponses() {
        return this._callerResponses;
    }
    set callerResponses(value) {
        this._callerResponses = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RemoveManifestResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            success: this.success,
            callerResponses: (this.callerResponses || []).map(m => m.toObject())
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            success: this.success,
            callerResponses: (this.callerResponses || []).map(m => m.toProtobufJSON(options))
        };
    }
}
RemoveManifestResponse.id = 'ondewo.nlu.RemoveManifestResponse';
/**
 * Message implementation for ondewo.nlu.ServiceConfig
 */
class ServiceConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.host = _value.host;
        this.port = _value.port;
        this.serviceIdentifier = _value.serviceIdentifier;
        this.languageCode = _value.languageCode;
        ServiceConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ServiceConfig();
        ServiceConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.host = _instance.host || '';
        _instance.port = _instance.port || 0;
        _instance.serviceIdentifier = _instance.serviceIdentifier || '';
        _instance.languageCode = _instance.languageCode || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.host = _reader.readString();
                    break;
                case 2:
                    _instance.port = _reader.readInt32();
                    break;
                case 3:
                    _instance.serviceIdentifier = _reader.readString();
                    break;
                case 5:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ServiceConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.host) {
            _writer.writeString(1, _instance.host);
        }
        if (_instance.port) {
            _writer.writeInt32(2, _instance.port);
        }
        if (_instance.serviceIdentifier) {
            _writer.writeString(3, _instance.serviceIdentifier);
        }
        if (_instance.languageCode) {
            _writer.writeString(5, _instance.languageCode);
        }
    }
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    get port() {
        return this._port;
    }
    set port(value) {
        this._port = value;
    }
    get serviceIdentifier() {
        return this._serviceIdentifier;
    }
    set serviceIdentifier(value) {
        this._serviceIdentifier = value;
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
        ServiceConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            host: this.host,
            port: this.port,
            serviceIdentifier: this.serviceIdentifier,
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
    options) {
        return {
            host: this.host,
            port: this.port,
            serviceIdentifier: this.serviceIdentifier,
            languageCode: this.languageCode
        };
    }
}
ServiceConfig.id = 'ondewo.nlu.ServiceConfig';
/**
 * Message implementation for ondewo.nlu.VoipManifestResponse
 */
class VoipManifestResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new VoipManifest(_value.request)
            : undefined;
        this.success = _value.success;
        VoipManifestResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipManifestResponse();
        VoipManifestResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new VoipManifest();
                    _reader.readMessage(_instance.request, VoipManifest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipManifestResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, VoipManifest.serializeBinaryToWriter);
        }
        if (_instance.success) {
            _writer.writeBool(2, _instance.success);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipManifestResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            success: this.success
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            success: this.success
        };
    }
}
VoipManifestResponse.id = 'ondewo.nlu.VoipManifestResponse';
/**
 * Message implementation for ondewo.nlu.StartCallInstanceRequest
 */
class StartCallInstanceRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallInstanceRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callId = _value.callId;
        this.sipSimVersion = _value.sipSimVersion;
        this.projectId = _value.projectId;
        this.phoneNumber = _value.phoneNumber;
        this.contexts = (_value.contexts || []).map(m => new Context(m));
        this.initText = _value.initText;
        this.asteriskConfig = _value.asteriskConfig
            ? new ServiceConfig(_value.asteriskConfig)
            : undefined;
        this.caiConfig = _value.caiConfig
            ? new ServiceConfig(_value.caiConfig)
            : undefined;
        this.sttConfig = _value.sttConfig
            ? new ServiceConfig(_value.sttConfig)
            : undefined;
        this.ttsConfig = _value.ttsConfig
            ? new ServiceConfig(_value.ttsConfig)
            : undefined;
        this.sipPrefix = _value.sipPrefix;
        this.sipName = _value.sipName;
        this.passwordDictionary = _value.passwordDictionary
            ? new Struct(_value.passwordDictionary)
            : undefined;
        this.initialIntent = _value.initialIntent;
        StartCallInstanceRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartCallInstanceRequest();
        StartCallInstanceRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callId = _instance.callId || '';
        _instance.sipSimVersion = _instance.sipSimVersion || '';
        _instance.projectId = _instance.projectId || '';
        _instance.phoneNumber = _instance.phoneNumber || '';
        _instance.contexts = _instance.contexts || [];
        _instance.initText = _instance.initText || '';
        _instance.asteriskConfig = _instance.asteriskConfig || undefined;
        _instance.caiConfig = _instance.caiConfig || undefined;
        _instance.sttConfig = _instance.sttConfig || undefined;
        _instance.ttsConfig = _instance.ttsConfig || undefined;
        _instance.sipPrefix = _instance.sipPrefix || '';
        _instance.sipName = _instance.sipName || '';
        _instance.passwordDictionary = _instance.passwordDictionary || undefined;
        _instance.initialIntent = _instance.initialIntent || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.sipSimVersion = _reader.readString();
                    break;
                case 3:
                    _instance.projectId = _reader.readString();
                    break;
                case 4:
                    _instance.phoneNumber = _reader.readString();
                    break;
                case 5:
                    const messageInitializer5 = new Context();
                    _reader.readMessage(messageInitializer5, Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer5);
                    break;
                case 6:
                    _instance.initText = _reader.readString();
                    break;
                case 7:
                    _instance.asteriskConfig = new ServiceConfig();
                    _reader.readMessage(_instance.asteriskConfig, ServiceConfig.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.caiConfig = new ServiceConfig();
                    _reader.readMessage(_instance.caiConfig, ServiceConfig.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.sttConfig = new ServiceConfig();
                    _reader.readMessage(_instance.sttConfig, ServiceConfig.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.ttsConfig = new ServiceConfig();
                    _reader.readMessage(_instance.ttsConfig, ServiceConfig.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.sipPrefix = _reader.readString();
                    break;
                case 13:
                    _instance.sipName = _reader.readString();
                    break;
                case 14:
                    _instance.passwordDictionary = new Struct();
                    _reader.readMessage(_instance.passwordDictionary, Struct.deserializeBinaryFromReader);
                    break;
                case 15:
                    _instance.initialIntent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartCallInstanceRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId) {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.sipSimVersion) {
            _writer.writeString(2, _instance.sipSimVersion);
        }
        if (_instance.projectId) {
            _writer.writeString(3, _instance.projectId);
        }
        if (_instance.phoneNumber) {
            _writer.writeString(4, _instance.phoneNumber);
        }
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(5, _instance.contexts, Context.serializeBinaryToWriter);
        }
        if (_instance.initText) {
            _writer.writeString(6, _instance.initText);
        }
        if (_instance.asteriskConfig) {
            _writer.writeMessage(7, _instance.asteriskConfig, ServiceConfig.serializeBinaryToWriter);
        }
        if (_instance.caiConfig) {
            _writer.writeMessage(8, _instance.caiConfig, ServiceConfig.serializeBinaryToWriter);
        }
        if (_instance.sttConfig) {
            _writer.writeMessage(9, _instance.sttConfig, ServiceConfig.serializeBinaryToWriter);
        }
        if (_instance.ttsConfig) {
            _writer.writeMessage(11, _instance.ttsConfig, ServiceConfig.serializeBinaryToWriter);
        }
        if (_instance.sipPrefix) {
            _writer.writeString(12, _instance.sipPrefix);
        }
        if (_instance.sipName) {
            _writer.writeString(13, _instance.sipName);
        }
        if (_instance.passwordDictionary) {
            _writer.writeMessage(14, _instance.passwordDictionary, Struct.serializeBinaryToWriter);
        }
        if (_instance.initialIntent) {
            _writer.writeString(15, _instance.initialIntent);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        this._callId = value;
    }
    get sipSimVersion() {
        return this._sipSimVersion;
    }
    set sipSimVersion(value) {
        this._sipSimVersion = value;
    }
    get projectId() {
        return this._projectId;
    }
    set projectId(value) {
        this._projectId = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get initText() {
        return this._initText;
    }
    set initText(value) {
        this._initText = value;
    }
    get asteriskConfig() {
        return this._asteriskConfig;
    }
    set asteriskConfig(value) {
        this._asteriskConfig = value;
    }
    get caiConfig() {
        return this._caiConfig;
    }
    set caiConfig(value) {
        this._caiConfig = value;
    }
    get sttConfig() {
        return this._sttConfig;
    }
    set sttConfig(value) {
        this._sttConfig = value;
    }
    get ttsConfig() {
        return this._ttsConfig;
    }
    set ttsConfig(value) {
        this._ttsConfig = value;
    }
    get sipPrefix() {
        return this._sipPrefix;
    }
    set sipPrefix(value) {
        this._sipPrefix = value;
    }
    get sipName() {
        return this._sipName;
    }
    set sipName(value) {
        this._sipName = value;
    }
    get passwordDictionary() {
        return this._passwordDictionary;
    }
    set passwordDictionary(value) {
        this._passwordDictionary = value;
    }
    get initialIntent() {
        return this._initialIntent;
    }
    set initialIntent(value) {
        this._initialIntent = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartCallInstanceRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
            sipSimVersion: this.sipSimVersion,
            projectId: this.projectId,
            phoneNumber: this.phoneNumber,
            contexts: (this.contexts || []).map(m => m.toObject()),
            initText: this.initText,
            asteriskConfig: this.asteriskConfig
                ? this.asteriskConfig.toObject()
                : undefined,
            caiConfig: this.caiConfig ? this.caiConfig.toObject() : undefined,
            sttConfig: this.sttConfig ? this.sttConfig.toObject() : undefined,
            ttsConfig: this.ttsConfig ? this.ttsConfig.toObject() : undefined,
            sipPrefix: this.sipPrefix,
            sipName: this.sipName,
            passwordDictionary: this.passwordDictionary
                ? this.passwordDictionary.toObject()
                : undefined,
            initialIntent: this.initialIntent
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
    options) {
        return {
            callId: this.callId,
            sipSimVersion: this.sipSimVersion,
            projectId: this.projectId,
            phoneNumber: this.phoneNumber,
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
            initText: this.initText,
            asteriskConfig: this.asteriskConfig
                ? this.asteriskConfig.toProtobufJSON(options)
                : null,
            caiConfig: this.caiConfig ? this.caiConfig.toProtobufJSON(options) : null,
            sttConfig: this.sttConfig ? this.sttConfig.toProtobufJSON(options) : null,
            ttsConfig: this.ttsConfig ? this.ttsConfig.toProtobufJSON(options) : null,
            sipPrefix: this.sipPrefix,
            sipName: this.sipName,
            passwordDictionary: this.passwordDictionary
                ? this.passwordDictionary.toProtobufJSON(options)
                : null,
            initialIntent: this.initialIntent
        };
    }
}
StartCallInstanceRequest.id = 'ondewo.nlu.StartCallInstanceRequest';
/**
 * Message implementation for ondewo.nlu.StartCallInstanceResponse
 */
class StartCallInstanceResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallInstanceResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new StartCallInstanceRequest(_value.request)
            : undefined;
        this.success = _value.success;
        StartCallInstanceResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartCallInstanceResponse();
        StartCallInstanceResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new StartCallInstanceRequest();
                    _reader.readMessage(_instance.request, StartCallInstanceRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartCallInstanceResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, StartCallInstanceRequest.serializeBinaryToWriter);
        }
        if (_instance.success) {
            _writer.writeBool(2, _instance.success);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartCallInstanceResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            success: this.success
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            success: this.success
        };
    }
}
StartCallInstanceResponse.id = 'ondewo.nlu.StartCallInstanceResponse';
/**
 * Message implementation for ondewo.nlu.StartMultipleCallInstancesRequest
 */
class StartMultipleCallInstancesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartMultipleCallInstancesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.requests = (_value.requests || []).map(m => new StartCallInstanceRequest(m));
        StartMultipleCallInstancesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartMultipleCallInstancesRequest();
        StartMultipleCallInstancesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.requests = _instance.requests || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new StartCallInstanceRequest();
                    _reader.readMessage(messageInitializer1, StartCallInstanceRequest.deserializeBinaryFromReader);
                    (_instance.requests = _instance.requests || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartMultipleCallInstancesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.requests && _instance.requests.length) {
            _writer.writeRepeatedMessage(1, _instance.requests, StartCallInstanceRequest.serializeBinaryToWriter);
        }
    }
    get requests() {
        return this._requests;
    }
    set requests(value) {
        this._requests = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartMultipleCallInstancesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            requests: (this.requests || []).map(m => m.toObject())
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
    options) {
        return {
            requests: (this.requests || []).map(m => m.toProtobufJSON(options))
        };
    }
}
StartMultipleCallInstancesRequest.id = 'ondewo.nlu.StartMultipleCallInstancesRequest';
/**
 * Message implementation for ondewo.nlu.StartMultipleCallInstancesResponse
 */
class StartMultipleCallInstancesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartMultipleCallInstancesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new StartMultipleCallInstancesRequest(_value.request)
            : undefined;
        this.success = _value.success;
        StartMultipleCallInstancesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartMultipleCallInstancesResponse();
        StartMultipleCallInstancesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new StartMultipleCallInstancesRequest();
                    _reader.readMessage(_instance.request, StartMultipleCallInstancesRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartMultipleCallInstancesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, StartMultipleCallInstancesRequest.serializeBinaryToWriter);
        }
        if (_instance.success) {
            _writer.writeBool(2, _instance.success);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartMultipleCallInstancesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            success: this.success
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            success: this.success
        };
    }
}
StartMultipleCallInstancesResponse.id = 'ondewo.nlu.StartMultipleCallInstancesResponse';
/**
 * Message implementation for ondewo.nlu.StopCallInstanceRequest
 */
class StopCallInstanceRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallInstanceRequest to deeply clone from
     */
    constructor(_value) {
        this._id = StopCallInstanceRequest.IdCase.none;
        _value = _value || {};
        this.callId = _value.callId;
        this.sipId = _value.sipId;
        StopCallInstanceRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StopCallInstanceRequest();
        StopCallInstanceRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.sipId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StopCallInstanceRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId || _instance.callId === '') {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.sipId || _instance.sipId === '') {
            _writer.writeString(2, _instance.sipId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        if (value !== undefined && value !== null) {
            this._sipId = undefined;
            this._id = StopCallInstanceRequest.IdCase.callId;
        }
        this._callId = value;
    }
    get sipId() {
        return this._sipId;
    }
    set sipId(value) {
        if (value !== undefined && value !== null) {
            this._callId = undefined;
            this._id = StopCallInstanceRequest.IdCase.sipId;
        }
        this._sipId = value;
    }
    get id() {
        return this._id;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StopCallInstanceRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
            sipId: this.sipId
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
    options) {
        var _a, _b;
        return {
            callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
            sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null
        };
    }
}
StopCallInstanceRequest.id = 'ondewo.nlu.StopCallInstanceRequest';
(function (StopCallInstanceRequest) {
    let IdCase;
    (function (IdCase) {
        IdCase[IdCase["none"] = 0] = "none";
        IdCase[IdCase["callId"] = 1] = "callId";
        IdCase[IdCase["sipId"] = 2] = "sipId";
    })(IdCase = StopCallInstanceRequest.IdCase || (StopCallInstanceRequest.IdCase = {}));
})(StopCallInstanceRequest || (StopCallInstanceRequest = {}));
/**
 * Message implementation for ondewo.nlu.StopCallInstanceResponse
 */
class StopCallInstanceResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StopCallInstanceResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new StopCallInstanceRequest(_value.request)
            : undefined;
        this.success = _value.success;
        this.logMessage = _value.logMessage;
        StopCallInstanceResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StopCallInstanceResponse();
        StopCallInstanceResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.success = _instance.success || false;
        _instance.logMessage = _instance.logMessage || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new StopCallInstanceRequest();
                    _reader.readMessage(_instance.request, StopCallInstanceRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.success = _reader.readBool();
                    break;
                case 3:
                    _instance.logMessage = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StopCallInstanceResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, StopCallInstanceRequest.serializeBinaryToWriter);
        }
        if (_instance.success) {
            _writer.writeBool(2, _instance.success);
        }
        if (_instance.logMessage) {
            _writer.writeString(3, _instance.logMessage);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    get logMessage() {
        return this._logMessage;
    }
    set logMessage(value) {
        this._logMessage = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StopCallInstanceResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            success: this.success,
            logMessage: this.logMessage
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            success: this.success,
            logMessage: this.logMessage
        };
    }
}
StopCallInstanceResponse.id = 'ondewo.nlu.StopCallInstanceResponse';
/**
 * Message implementation for ondewo.nlu.VoipManifestStatusRequest
 */
class VoipManifestStatusRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestStatusRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.manifestId = _value.manifestId;
        VoipManifestStatusRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipManifestStatusRequest();
        VoipManifestStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.manifestId = _instance.manifestId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.manifestId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipManifestStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.manifestId) {
            _writer.writeString(1, _instance.manifestId);
        }
    }
    get manifestId() {
        return this._manifestId;
    }
    set manifestId(value) {
        this._manifestId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipManifestStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            manifestId: this.manifestId
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
    options) {
        return {
            manifestId: this.manifestId
        };
    }
}
VoipManifestStatusRequest.id = 'ondewo.nlu.VoipManifestStatusRequest';
/**
 * Message implementation for ondewo.nlu.VoipManifestStatus
 */
class VoipManifestStatus {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipManifestStatus to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.request = _value.request
            ? new VoipManifestStatusRequest(_value.request)
            : undefined;
        this.callsStatus = (_value.callsStatus || []).map(m => new VoipStatus(m));
        VoipManifestStatus.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipManifestStatus();
        VoipManifestStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.request = _instance.request || undefined;
        _instance.callsStatus = _instance.callsStatus || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.request = new VoipManifestStatusRequest();
                    _reader.readMessage(_instance.request, VoipManifestStatusRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    const messageInitializer2 = new VoipStatus();
                    _reader.readMessage(messageInitializer2, VoipStatus.deserializeBinaryFromReader);
                    (_instance.callsStatus = _instance.callsStatus || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipManifestStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.request) {
            _writer.writeMessage(1, _instance.request, VoipManifestStatusRequest.serializeBinaryToWriter);
        }
        if (_instance.callsStatus && _instance.callsStatus.length) {
            _writer.writeRepeatedMessage(2, _instance.callsStatus, VoipStatus.serializeBinaryToWriter);
        }
    }
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get callsStatus() {
        return this._callsStatus;
    }
    set callsStatus(value) {
        this._callsStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipManifestStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            request: this.request ? this.request.toObject() : undefined,
            callsStatus: (this.callsStatus || []).map(m => m.toObject())
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
    options) {
        return {
            request: this.request ? this.request.toProtobufJSON(options) : null,
            callsStatus: (this.callsStatus || []).map(m => m.toProtobufJSON(options))
        };
    }
}
VoipManifestStatus.id = 'ondewo.nlu.VoipManifestStatus';
/**
 * Message implementation for ondewo.nlu.GetVoipStatusRequest
 */
class GetVoipStatusRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipStatusRequest to deeply clone from
     */
    constructor(_value) {
        this._id = GetVoipStatusRequest.IdCase.none;
        _value = _value || {};
        this.callId = _value.callId;
        this.sipId = _value.sipId;
        GetVoipStatusRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetVoipStatusRequest();
        GetVoipStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.sipId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetVoipStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId || _instance.callId === '') {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.sipId || _instance.sipId === '') {
            _writer.writeString(2, _instance.sipId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        if (value !== undefined && value !== null) {
            this._sipId = undefined;
            this._id = GetVoipStatusRequest.IdCase.callId;
        }
        this._callId = value;
    }
    get sipId() {
        return this._sipId;
    }
    set sipId(value) {
        if (value !== undefined && value !== null) {
            this._callId = undefined;
            this._id = GetVoipStatusRequest.IdCase.sipId;
        }
        this._sipId = value;
    }
    get id() {
        return this._id;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetVoipStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
            sipId: this.sipId
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
    options) {
        var _a, _b;
        return {
            callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
            sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null
        };
    }
}
GetVoipStatusRequest.id = 'ondewo.nlu.GetVoipStatusRequest';
(function (GetVoipStatusRequest) {
    let IdCase;
    (function (IdCase) {
        IdCase[IdCase["none"] = 0] = "none";
        IdCase[IdCase["callId"] = 1] = "callId";
        IdCase[IdCase["sipId"] = 2] = "sipId";
    })(IdCase = GetVoipStatusRequest.IdCase || (GetVoipStatusRequest.IdCase = {}));
})(GetVoipStatusRequest || (GetVoipStatusRequest = {}));
/**
 * Message implementation for ondewo.nlu.VoipStatus
 */
class VoipStatus {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipStatus to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.healthy = _value.healthy;
        this.lastLog = _value.lastLog;
        this.statusAsterisk = _value.statusAsterisk
            ? new ServiceStatus(_value.statusAsterisk)
            : undefined;
        this.statusCai = _value.statusCai
            ? new ServiceStatus(_value.statusCai)
            : undefined;
        this.statusStt = _value.statusStt
            ? new ServiceStatus(_value.statusStt)
            : undefined;
        this.statusTts = _value.statusTts
            ? new ServiceStatus(_value.statusTts)
            : undefined;
        VoipStatus.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipStatus();
        VoipStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.healthy = _instance.healthy || false;
        _instance.lastLog = _instance.lastLog || '';
        _instance.statusAsterisk = _instance.statusAsterisk || undefined;
        _instance.statusCai = _instance.statusCai || undefined;
        _instance.statusStt = _instance.statusStt || undefined;
        _instance.statusTts = _instance.statusTts || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.healthy = _reader.readBool();
                    break;
                case 2:
                    _instance.lastLog = _reader.readString();
                    break;
                case 3:
                    _instance.statusAsterisk = new ServiceStatus();
                    _reader.readMessage(_instance.statusAsterisk, ServiceStatus.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.statusCai = new ServiceStatus();
                    _reader.readMessage(_instance.statusCai, ServiceStatus.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.statusStt = new ServiceStatus();
                    _reader.readMessage(_instance.statusStt, ServiceStatus.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.statusTts = new ServiceStatus();
                    _reader.readMessage(_instance.statusTts, ServiceStatus.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.healthy) {
            _writer.writeBool(1, _instance.healthy);
        }
        if (_instance.lastLog) {
            _writer.writeString(2, _instance.lastLog);
        }
        if (_instance.statusAsterisk) {
            _writer.writeMessage(3, _instance.statusAsterisk, ServiceStatus.serializeBinaryToWriter);
        }
        if (_instance.statusCai) {
            _writer.writeMessage(4, _instance.statusCai, ServiceStatus.serializeBinaryToWriter);
        }
        if (_instance.statusStt) {
            _writer.writeMessage(5, _instance.statusStt, ServiceStatus.serializeBinaryToWriter);
        }
        if (_instance.statusTts) {
            _writer.writeMessage(6, _instance.statusTts, ServiceStatus.serializeBinaryToWriter);
        }
    }
    get healthy() {
        return this._healthy;
    }
    set healthy(value) {
        this._healthy = value;
    }
    get lastLog() {
        return this._lastLog;
    }
    set lastLog(value) {
        this._lastLog = value;
    }
    get statusAsterisk() {
        return this._statusAsterisk;
    }
    set statusAsterisk(value) {
        this._statusAsterisk = value;
    }
    get statusCai() {
        return this._statusCai;
    }
    set statusCai(value) {
        this._statusCai = value;
    }
    get statusStt() {
        return this._statusStt;
    }
    set statusStt(value) {
        this._statusStt = value;
    }
    get statusTts() {
        return this._statusTts;
    }
    set statusTts(value) {
        this._statusTts = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            healthy: this.healthy,
            lastLog: this.lastLog,
            statusAsterisk: this.statusAsterisk
                ? this.statusAsterisk.toObject()
                : undefined,
            statusCai: this.statusCai ? this.statusCai.toObject() : undefined,
            statusStt: this.statusStt ? this.statusStt.toObject() : undefined,
            statusTts: this.statusTts ? this.statusTts.toObject() : undefined
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
    options) {
        return {
            healthy: this.healthy,
            lastLog: this.lastLog,
            statusAsterisk: this.statusAsterisk
                ? this.statusAsterisk.toProtobufJSON(options)
                : null,
            statusCai: this.statusCai ? this.statusCai.toProtobufJSON(options) : null,
            statusStt: this.statusStt ? this.statusStt.toProtobufJSON(options) : null,
            statusTts: this.statusTts ? this.statusTts.toProtobufJSON(options) : null
        };
    }
}
VoipStatus.id = 'ondewo.nlu.VoipStatus';
/**
 * Message implementation for ondewo.nlu.ServiceStatus
 */
class ServiceStatus {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServiceStatus to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.healthy = _value.healthy;
        this.lastLog = _value.lastLog;
        ServiceStatus.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ServiceStatus();
        ServiceStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.healthy = _instance.healthy || false;
        _instance.lastLog = _instance.lastLog || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.healthy = _reader.readBool();
                    break;
                case 2:
                    _instance.lastLog = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ServiceStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.healthy) {
            _writer.writeBool(1, _instance.healthy);
        }
        if (_instance.lastLog) {
            _writer.writeString(2, _instance.lastLog);
        }
    }
    get healthy() {
        return this._healthy;
    }
    set healthy(value) {
        this._healthy = value;
    }
    get lastLog() {
        return this._lastLog;
    }
    set lastLog(value) {
        this._lastLog = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ServiceStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            healthy: this.healthy,
            lastLog: this.lastLog
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
    options) {
        return {
            healthy: this.healthy,
            lastLog: this.lastLog
        };
    }
}
ServiceStatus.id = 'ondewo.nlu.ServiceStatus';
/**
 * Message implementation for ondewo.nlu.UpdateServicesStatusRequest
 */
class UpdateServicesStatusRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateServicesStatusRequest to deeply clone from
     */
    constructor(_value) {
        this._id = UpdateServicesStatusRequest.IdCase.none;
        _value = _value || {};
        this.callId = _value.callId;
        this.sipId = _value.sipId;
        this.manifestId = _value.manifestId;
        UpdateServicesStatusRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateServicesStatusRequest();
        UpdateServicesStatusRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.sipId = _reader.readString();
                    break;
                case 3:
                    _instance.manifestId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateServicesStatusRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId || _instance.callId === '') {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.sipId || _instance.sipId === '') {
            _writer.writeString(2, _instance.sipId);
        }
        if (_instance.manifestId || _instance.manifestId === '') {
            _writer.writeString(3, _instance.manifestId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        if (value !== undefined && value !== null) {
            this._sipId = this._manifestId = undefined;
            this._id = UpdateServicesStatusRequest.IdCase.callId;
        }
        this._callId = value;
    }
    get sipId() {
        return this._sipId;
    }
    set sipId(value) {
        if (value !== undefined && value !== null) {
            this._callId = this._manifestId = undefined;
            this._id = UpdateServicesStatusRequest.IdCase.sipId;
        }
        this._sipId = value;
    }
    get manifestId() {
        return this._manifestId;
    }
    set manifestId(value) {
        if (value !== undefined && value !== null) {
            this._callId = this._sipId = undefined;
            this._id = UpdateServicesStatusRequest.IdCase.manifestId;
        }
        this._manifestId = value;
    }
    get id() {
        return this._id;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateServicesStatusRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
            sipId: this.sipId,
            manifestId: this.manifestId
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
    options) {
        var _a, _b, _c;
        return {
            callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
            sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null,
            manifestId: (_c = this.manifestId) !== null && _c !== void 0 ? _c : null
        };
    }
}
UpdateServicesStatusRequest.id = 'ondewo.nlu.UpdateServicesStatusRequest';
(function (UpdateServicesStatusRequest) {
    let IdCase;
    (function (IdCase) {
        IdCase[IdCase["none"] = 0] = "none";
        IdCase[IdCase["callId"] = 1] = "callId";
        IdCase[IdCase["sipId"] = 2] = "sipId";
        IdCase[IdCase["manifestId"] = 3] = "manifestId";
    })(IdCase = UpdateServicesStatusRequest.IdCase || (UpdateServicesStatusRequest.IdCase = {}));
})(UpdateServicesStatusRequest || (UpdateServicesStatusRequest = {}));
/**
 * Message implementation for ondewo.nlu.UpdateServicesStatusResponse
 */
class UpdateServicesStatusResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateServicesStatusResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.empty = _value.empty
            ? new Empty(_value.empty)
            : undefined;
        UpdateServicesStatusResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateServicesStatusResponse();
        UpdateServicesStatusResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.empty = _instance.empty || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.empty = new Empty();
                    _reader.readMessage(_instance.empty, Empty.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateServicesStatusResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.empty) {
            _writer.writeMessage(1, _instance.empty, Empty.serializeBinaryToWriter);
        }
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        this._empty = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateServicesStatusResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            empty: this.empty ? this.empty.toObject() : undefined
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
    options) {
        return {
            empty: this.empty ? this.empty.toProtobufJSON(options) : null
        };
    }
}
UpdateServicesStatusResponse.id = 'ondewo.nlu.UpdateServicesStatusResponse';
/**
 * Message implementation for ondewo.nlu.DeployPreconditionRequest
 */
class DeployPreconditionRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeployPreconditionRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sipSimVersion = _value.sipSimVersion;
        this.asteriskConfig = _value.asteriskConfig
            ? new ServiceConfig(_value.asteriskConfig)
            : undefined;
        DeployPreconditionRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeployPreconditionRequest();
        DeployPreconditionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sipSimVersion = _instance.sipSimVersion || '';
        _instance.asteriskConfig = _instance.asteriskConfig || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sipSimVersion = _reader.readString();
                    break;
                case 2:
                    _instance.asteriskConfig = new ServiceConfig();
                    _reader.readMessage(_instance.asteriskConfig, ServiceConfig.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeployPreconditionRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sipSimVersion) {
            _writer.writeString(1, _instance.sipSimVersion);
        }
        if (_instance.asteriskConfig) {
            _writer.writeMessage(2, _instance.asteriskConfig, ServiceConfig.serializeBinaryToWriter);
        }
    }
    get sipSimVersion() {
        return this._sipSimVersion;
    }
    set sipSimVersion(value) {
        this._sipSimVersion = value;
    }
    get asteriskConfig() {
        return this._asteriskConfig;
    }
    set asteriskConfig(value) {
        this._asteriskConfig = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeployPreconditionRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sipSimVersion: this.sipSimVersion,
            asteriskConfig: this.asteriskConfig
                ? this.asteriskConfig.toObject()
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
    options) {
        return {
            sipSimVersion: this.sipSimVersion,
            asteriskConfig: this.asteriskConfig
                ? this.asteriskConfig.toProtobufJSON(options)
                : null
        };
    }
}
DeployPreconditionRequest.id = 'ondewo.nlu.DeployPreconditionRequest';
/**
 * Message implementation for ondewo.nlu.DeployPreconditionResponse
 */
class DeployPreconditionResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeployPreconditionResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.success = _value.success;
        DeployPreconditionResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeployPreconditionResponse();
        DeployPreconditionResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeployPreconditionResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.success) {
            _writer.writeBool(1, _instance.success);
        }
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeployPreconditionResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            success: this.success
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
    options) {
        return {
            success: this.success
        };
    }
}
DeployPreconditionResponse.id = 'ondewo.nlu.DeployPreconditionResponse';
/**
 * Message implementation for ondewo.nlu.GetManifestIDsRequest
 */
class GetManifestIDsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestIDsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.empty = _value.empty
            ? new Empty(_value.empty)
            : undefined;
        GetManifestIDsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetManifestIDsRequest();
        GetManifestIDsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.empty = _instance.empty || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.empty = new Empty();
                    _reader.readMessage(_instance.empty, Empty.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetManifestIDsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.empty) {
            _writer.writeMessage(1, _instance.empty, Empty.serializeBinaryToWriter);
        }
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        this._empty = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetManifestIDsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            empty: this.empty ? this.empty.toObject() : undefined
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
    options) {
        return {
            empty: this.empty ? this.empty.toProtobufJSON(options) : null
        };
    }
}
GetManifestIDsRequest.id = 'ondewo.nlu.GetManifestIDsRequest';
/**
 * Message implementation for ondewo.nlu.GetManifestIDsResponse
 */
class GetManifestIDsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestIDsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.manifestIds = (_value.manifestIds || []).slice();
        GetManifestIDsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetManifestIDsResponse();
        GetManifestIDsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.manifestIds = _instance.manifestIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.manifestIds = _instance.manifestIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetManifestIDsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.manifestIds && _instance.manifestIds.length) {
            _writer.writeRepeatedString(1, _instance.manifestIds);
        }
    }
    get manifestIds() {
        return this._manifestIds;
    }
    set manifestIds(value) {
        this._manifestIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetManifestIDsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            manifestIds: (this.manifestIds || []).slice()
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
    options) {
        return {
            manifestIds: (this.manifestIds || []).slice()
        };
    }
}
GetManifestIDsResponse.id = 'ondewo.nlu.GetManifestIDsResponse';
/**
 * Message implementation for ondewo.nlu.GetCallIDsRequest
 */
class GetCallIDsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIDsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.empty = _value.empty
            ? new Empty(_value.empty)
            : undefined;
        GetCallIDsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetCallIDsRequest();
        GetCallIDsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.empty = _instance.empty || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.empty = new Empty();
                    _reader.readMessage(_instance.empty, Empty.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetCallIDsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.empty) {
            _writer.writeMessage(1, _instance.empty, Empty.serializeBinaryToWriter);
        }
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        this._empty = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetCallIDsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            empty: this.empty ? this.empty.toObject() : undefined
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
    options) {
        return {
            empty: this.empty ? this.empty.toProtobufJSON(options) : null
        };
    }
}
GetCallIDsRequest.id = 'ondewo.nlu.GetCallIDsRequest';
/**
 * Message implementation for ondewo.nlu.GetCallIDsResponse
 */
class GetCallIDsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIDsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callIds = (_value.callIds || []).slice();
        GetCallIDsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetCallIDsResponse();
        GetCallIDsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callIds = _instance.callIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.callIds = _instance.callIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetCallIDsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callIds && _instance.callIds.length) {
            _writer.writeRepeatedString(1, _instance.callIds);
        }
    }
    get callIds() {
        return this._callIds;
    }
    set callIds(value) {
        this._callIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetCallIDsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callIds: (this.callIds || []).slice()
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
    options) {
        return {
            callIds: (this.callIds || []).slice()
        };
    }
}
GetCallIDsResponse.id = 'ondewo.nlu.GetCallIDsResponse';
/**
 * Message implementation for ondewo.nlu.GetSessionIDRequest
 */
class GetSessionIDRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionIDRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callId = _value.callId;
        GetSessionIDRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionIDRequest();
        GetSessionIDRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callId = _instance.callId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionIDRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId) {
            _writer.writeString(1, _instance.callId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        this._callId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSessionIDRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId
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
    options) {
        return {
            callId: this.callId
        };
    }
}
GetSessionIDRequest.id = 'ondewo.nlu.GetSessionIDRequest';
/**
 * Message implementation for ondewo.nlu.GetSessionIDResponse
 */
class GetSessionIDResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionIDResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callId = _value.callId;
        this.sessionId = _value.sessionId;
        GetSessionIDResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionIDResponse();
        GetSessionIDResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callId = _instance.callId || '';
        _instance.sessionId = _instance.sessionId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionIDResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId) {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.sessionId) {
            _writer.writeString(2, _instance.sessionId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        this._callId = value;
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
        GetSessionIDResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
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
    options) {
        return {
            callId: this.callId,
            sessionId: this.sessionId
        };
    }
}
GetSessionIDResponse.id = 'ondewo.nlu.GetSessionIDResponse';
/**
 * Message implementation for ondewo.nlu.ShutdownUnhealthyCallsRequest
 */
class ShutdownUnhealthyCallsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShutdownUnhealthyCallsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.empty = _value.empty
            ? new Empty(_value.empty)
            : undefined;
        ShutdownUnhealthyCallsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ShutdownUnhealthyCallsRequest();
        ShutdownUnhealthyCallsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.empty = _instance.empty || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.empty = new Empty();
                    _reader.readMessage(_instance.empty, Empty.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ShutdownUnhealthyCallsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.empty) {
            _writer.writeMessage(1, _instance.empty, Empty.serializeBinaryToWriter);
        }
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        this._empty = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ShutdownUnhealthyCallsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            empty: this.empty ? this.empty.toObject() : undefined
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
    options) {
        return {
            empty: this.empty ? this.empty.toProtobufJSON(options) : null
        };
    }
}
ShutdownUnhealthyCallsRequest.id = 'ondewo.nlu.ShutdownUnhealthyCallsRequest';
/**
 * Message implementation for ondewo.nlu.ShutdownUnhealthyCallsResponse
 */
class ShutdownUnhealthyCallsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ShutdownUnhealthyCallsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.success = _value.success;
        ShutdownUnhealthyCallsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ShutdownUnhealthyCallsResponse();
        ShutdownUnhealthyCallsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ShutdownUnhealthyCallsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.success) {
            _writer.writeBool(1, _instance.success);
        }
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ShutdownUnhealthyCallsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            success: this.success
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
    options) {
        return {
            success: this.success
        };
    }
}
ShutdownUnhealthyCallsResponse.id = 'ondewo.nlu.ShutdownUnhealthyCallsResponse';

/* tslint:disable */
/**
 * Specific GrpcClientSettings for VoipSessions.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_VOIP_SESSIONS_CLIENT_SETTINGS = new InjectionToken('GRPC_VOIP_SESSIONS_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.nlu.VoipSessions
 */
class VoipSessionsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/LoadManifest
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.VoipManifestResponse>>
             */
            loadManifest: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/LoadManifest',
                    requestData,
                    requestMetadata,
                    requestClass: VoipManifest,
                    responseClass: VoipManifestResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/RunManifest
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RunManifestResponse>>
             */
            runManifest: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/RunManifest',
                    requestData,
                    requestMetadata,
                    requestClass: ManifestRequest,
                    responseClass: RunManifestResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/RemoveManifest
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RemoveManifestResponse>>
             */
            removeManifest: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/RemoveManifest',
                    requestData,
                    requestMetadata,
                    requestClass: ManifestRequest,
                    responseClass: RemoveManifestResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestIDs
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>
             */
            getManifestIDs: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/GetManifestIDs',
                    requestData,
                    requestMetadata,
                    requestClass: GetManifestIDsRequest,
                    responseClass: GetManifestIDsResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/StartCallInstance
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>
             */
            startCallInstance: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/StartCallInstance',
                    requestData,
                    requestMetadata,
                    requestClass: StartCallInstanceRequest,
                    responseClass: StartCallInstanceResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/StopCallInstance
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>
             */
            stopCallInstance: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/StopCallInstance',
                    requestData,
                    requestMetadata,
                    requestClass: StopCallInstanceRequest,
                    responseClass: StopCallInstanceResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/StartMultipleCallInstances
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>
             */
            startMultipleCallInstances: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/StartMultipleCallInstances',
                    requestData,
                    requestMetadata,
                    requestClass: StartMultipleCallInstancesRequest,
                    responseClass: StartMultipleCallInstancesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/GetCallIDs
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetCallIDsResponse>>
             */
            getCallIDs: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/GetCallIDs',
                    requestData,
                    requestMetadata,
                    requestClass: GetCallIDsRequest,
                    responseClass: GetCallIDsResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/GetSessionID
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetSessionIDResponse>>
             */
            getSessionID: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/GetSessionID',
                    requestData,
                    requestMetadata,
                    requestClass: GetSessionIDRequest,
                    responseClass: GetSessionIDResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/ShutdownUnhealthyCalls
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>
             */
            shutdownUnhealthyCalls: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/ShutdownUnhealthyCalls',
                    requestData,
                    requestMetadata,
                    requestClass: ShutdownUnhealthyCallsRequest,
                    responseClass: ShutdownUnhealthyCallsResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestStatus
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.VoipManifestStatus>>
             */
            getManifestStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/GetManifestStatus',
                    requestData,
                    requestMetadata,
                    requestClass: VoipManifestStatusRequest,
                    responseClass: VoipManifestStatus
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/GetInstanceStatus
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.VoipStatus>>
             */
            getInstanceStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/GetInstanceStatus',
                    requestData,
                    requestMetadata,
                    requestClass: GetVoipStatusRequest,
                    responseClass: VoipStatus
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/UpdateServicesStatus
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>
             */
            updateServicesStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/UpdateServicesStatus',
                    requestData,
                    requestMetadata,
                    requestClass: UpdateServicesStatusRequest,
                    responseClass: UpdateServicesStatusResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.VoipSessions/DeployPreconditionForWorkingSetup
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>
             */
            deployPreconditionForWorkingSetup: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.VoipSessions/DeployPreconditionForWorkingSetup',
                    requestData,
                    requestMetadata,
                    requestClass: DeployPreconditionRequest,
                    responseClass: DeployPreconditionResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.VoipSessions', settings);
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/LoadManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipManifestResponse>
     */
    loadManifest(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .loadManifest(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/RunManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunManifestResponse>
     */
    runManifest(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .runManifest(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/RemoveManifest
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RemoveManifestResponse>
     */
    removeManifest(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .removeManifest(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetManifestIDsResponse>
     */
    getManifestIDs(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getManifestIDs(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StartCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartCallInstanceResponse>
     */
    startCallInstance(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .startCallInstance(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StopCallInstance
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StopCallInstanceResponse>
     */
    stopCallInstance(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .stopCallInstance(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/StartMultipleCallInstances
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StartMultipleCallInstancesResponse>
     */
    startMultipleCallInstances(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .startMultipleCallInstances(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetCallIDs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetCallIDsResponse>
     */
    getCallIDs(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getCallIDs(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetSessionID
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetSessionIDResponse>
     */
    getSessionID(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getSessionID(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/ShutdownUnhealthyCalls
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ShutdownUnhealthyCallsResponse>
     */
    shutdownUnhealthyCalls(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .shutdownUnhealthyCalls(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetManifestStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipManifestStatus>
     */
    getManifestStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getManifestStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/GetInstanceStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.VoipStatus>
     */
    getInstanceStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getInstanceStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/UpdateServicesStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateServicesStatusResponse>
     */
    updateServicesStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateServicesStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.VoipSessions/DeployPreconditionForWorkingSetup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DeployPreconditionResponse>
     */
    deployPreconditionForWorkingSetup(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deployPreconditionForWorkingSetup(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
VoipSessionsClient.ɵprov = ɵɵdefineInjectable({ factory: function VoipSessionsClient_Factory() { return new VoipSessionsClient(ɵɵinject(GRPC_VOIP_SESSIONS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: VoipSessionsClient, providedIn: "any" });
VoipSessionsClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
VoipSessionsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_VOIP_SESSIONS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/**
 * Message implementation for ondewo.sip.EndCallRequest
 */
class EndCallRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EndCallRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.hardHangup = _value.hardHangup;
        EndCallRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EndCallRequest();
        EndCallRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.hardHangup = _instance.hardHangup || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.hardHangup = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        EndCallRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.hardHangup) {
            _writer.writeBool(1, _instance.hardHangup);
        }
    }
    get hardHangup() {
        return this._hardHangup;
    }
    set hardHangup(value) {
        this._hardHangup = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EndCallRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            hardHangup: this.hardHangup
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
    options) {
        return {
            hardHangup: this.hardHangup
        };
    }
}
EndCallRequest.id = 'ondewo.sip.EndCallRequest';
/**
 * Message implementation for ondewo.sip.StartCallRequest
 */
class StartCallRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartCallRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.calleeId = _value.calleeId;
        StartCallRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartCallRequest();
        StartCallRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.calleeId = _instance.calleeId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.calleeId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartCallRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.calleeId) {
            _writer.writeString(1, _instance.calleeId);
        }
    }
    get calleeId() {
        return this._calleeId;
    }
    set calleeId(value) {
        this._calleeId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartCallRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            calleeId: this.calleeId
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
    options) {
        return {
            calleeId: this.calleeId
        };
    }
}
StartCallRequest.id = 'ondewo.sip.StartCallRequest';
/**
 * Message implementation for ondewo.sip.RegisterAccountRequest
 */
class RegisterAccountRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RegisterAccountRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.accountName = _value.accountName;
        this.password = _value.password;
        RegisterAccountRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RegisterAccountRequest();
        RegisterAccountRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.accountName = _instance.accountName || '';
        _instance.password = _instance.password || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.accountName = _reader.readString();
                    break;
                case 2:
                    _instance.password = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RegisterAccountRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.accountName) {
            _writer.writeString(1, _instance.accountName);
        }
        if (_instance.password) {
            _writer.writeString(2, _instance.password);
        }
    }
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RegisterAccountRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            accountName: this.accountName,
            password: this.password
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
    options) {
        return {
            accountName: this.accountName,
            password: this.password
        };
    }
}
RegisterAccountRequest.id = 'ondewo.sip.RegisterAccountRequest';
/**
 * Message implementation for ondewo.sip.StartSessionRequest
 */
class StartSessionRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StartSessionRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.accountName = _value.accountName;
        this.autoAnswerInterval = _value.autoAnswerInterval;
        StartSessionRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StartSessionRequest();
        StartSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.accountName = _instance.accountName || '';
        _instance.autoAnswerInterval = _instance.autoAnswerInterval || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.accountName = _reader.readString();
                    break;
                case 2:
                    _instance.autoAnswerInterval = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StartSessionRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.accountName) {
            _writer.writeString(1, _instance.accountName);
        }
        if (_instance.autoAnswerInterval) {
            _writer.writeInt32(2, _instance.autoAnswerInterval);
        }
    }
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }
    get autoAnswerInterval() {
        return this._autoAnswerInterval;
    }
    set autoAnswerInterval(value) {
        this._autoAnswerInterval = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StartSessionRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            accountName: this.accountName,
            autoAnswerInterval: this.autoAnswerInterval
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
    options) {
        return {
            accountName: this.accountName,
            autoAnswerInterval: this.autoAnswerInterval
        };
    }
}
StartSessionRequest.id = 'ondewo.sip.StartSessionRequest';
/**
 * Message implementation for ondewo.sip.TransferCallRequest
 */
class TransferCallRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TransferCallRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.transferId = _value.transferId;
        TransferCallRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TransferCallRequest();
        TransferCallRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.transferId = _instance.transferId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.transferId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TransferCallRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.transferId) {
            _writer.writeString(1, _instance.transferId);
        }
    }
    get transferId() {
        return this._transferId;
    }
    set transferId(value) {
        this._transferId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TransferCallRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            transferId: this.transferId
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
    options) {
        return {
            transferId: this.transferId
        };
    }
}
TransferCallRequest.id = 'ondewo.sip.TransferCallRequest';
/**
 * Message implementation for ondewo.sip.SipStatus
 */
class SipStatus {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SipStatus to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.accountName = _value.accountName;
        this.timestamp = _value.timestamp
            ? new Timestamp(_value.timestamp)
            : undefined;
        this.statusType = _value.statusType;
        this.calleeId = _value.calleeId;
        this.transferCallId = _value.transferCallId;
        SipStatus.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SipStatus();
        SipStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.accountName = _instance.accountName || '';
        _instance.timestamp = _instance.timestamp || undefined;
        _instance.statusType = _instance.statusType || 0;
        _instance.calleeId = _instance.calleeId || '';
        _instance.transferCallId = _instance.transferCallId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.accountName = _reader.readString();
                    break;
                case 2:
                    _instance.timestamp = new Timestamp();
                    _reader.readMessage(_instance.timestamp, Timestamp.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.statusType = _reader.readEnum();
                    break;
                case 4:
                    _instance.calleeId = _reader.readString();
                    break;
                case 5:
                    _instance.transferCallId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SipStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.accountName) {
            _writer.writeString(1, _instance.accountName);
        }
        if (_instance.timestamp) {
            _writer.writeMessage(2, _instance.timestamp, Timestamp.serializeBinaryToWriter);
        }
        if (_instance.statusType) {
            _writer.writeEnum(3, _instance.statusType);
        }
        if (_instance.calleeId) {
            _writer.writeString(4, _instance.calleeId);
        }
        if (_instance.transferCallId) {
            _writer.writeString(5, _instance.transferCallId);
        }
    }
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    get statusType() {
        return this._statusType;
    }
    set statusType(value) {
        this._statusType = value;
    }
    get calleeId() {
        return this._calleeId;
    }
    set calleeId(value) {
        this._calleeId = value;
    }
    get transferCallId() {
        return this._transferCallId;
    }
    set transferCallId(value) {
        this._transferCallId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SipStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            accountName: this.accountName,
            timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
            statusType: this.statusType,
            calleeId: this.calleeId,
            transferCallId: this.transferCallId
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
    options) {
        var _a;
        return {
            accountName: this.accountName,
            timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
            statusType: SipStatus.StatusType[(_a = this.statusType) !== null && _a !== void 0 ? _a : 0],
            calleeId: this.calleeId,
            transferCallId: this.transferCallId
        };
    }
}
SipStatus.id = 'ondewo.sip.SipStatus';
(function (SipStatus) {
    let StatusType;
    (function (StatusType) {
        StatusType[StatusType["no_session"] = 0] = "no_session";
        StatusType[StatusType["registered"] = 1] = "registered";
        StatusType[StatusType["ready"] = 2] = "ready";
        StatusType[StatusType["incoming_call_initiated"] = 3] = "incoming_call_initiated";
        StatusType[StatusType["outgoing_call_initiated"] = 4] = "outgoing_call_initiated";
        StatusType[StatusType["outgoing_call_connected"] = 5] = "outgoing_call_connected";
        StatusType[StatusType["incoming_call_connected"] = 6] = "incoming_call_connected";
        StatusType[StatusType["transfer_call_initiated"] = 7] = "transfer_call_initiated";
        StatusType[StatusType["soft_hangup_initiated"] = 8] = "soft_hangup_initiated";
        StatusType[StatusType["hard_hangup_initiated"] = 9] = "hard_hangup_initiated";
        StatusType[StatusType["incoming_call_failed"] = 10] = "incoming_call_failed";
        StatusType[StatusType["outgoing_call_failed"] = 11] = "outgoing_call_failed";
        StatusType[StatusType["incoming_call_finished"] = 12] = "incoming_call_finished";
        StatusType[StatusType["outgoing_call_finished"] = 13] = "outgoing_call_finished";
    })(StatusType = SipStatus.StatusType || (SipStatus.StatusType = {}));
})(SipStatus || (SipStatus = {}));
/**
 * Message implementation for ondewo.sip.SipStatusHistoryResponse
 */
class SipStatusHistoryResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SipStatusHistoryResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.statusHistory = (_value.statusHistory || []).map(m => new SipStatus(m));
        SipStatusHistoryResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SipStatusHistoryResponse();
        SipStatusHistoryResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.statusHistory = _instance.statusHistory || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SipStatus();
                    _reader.readMessage(messageInitializer1, SipStatus.deserializeBinaryFromReader);
                    (_instance.statusHistory = _instance.statusHistory || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        SipStatusHistoryResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.statusHistory && _instance.statusHistory.length) {
            _writer.writeRepeatedMessage(1, _instance.statusHistory, SipStatus.serializeBinaryToWriter);
        }
    }
    get statusHistory() {
        return this._statusHistory;
    }
    set statusHistory(value) {
        this._statusHistory = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SipStatusHistoryResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            statusHistory: (this.statusHistory || []).map(m => m.toObject())
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
    options) {
        return {
            statusHistory: (this.statusHistory || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SipStatusHistoryResponse.id = 'ondewo.sip.SipStatusHistoryResponse';
/**
 * Message implementation for ondewo.sip.PlayWavFilesRequest
 */
class PlayWavFilesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of PlayWavFilesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.wavFiles = (_value.wavFiles || []).map(b => b ? b.subarray(0) : new Uint8Array());
        PlayWavFilesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new PlayWavFilesRequest();
        PlayWavFilesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.wavFiles = _instance.wavFiles || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.wavFiles = _instance.wavFiles || []).push(_reader.readBytes());
                    break;
                default:
                    _reader.skipField();
            }
        }
        PlayWavFilesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.wavFiles && _instance.wavFiles.length) {
            _writer.writeRepeatedBytes(1, _instance.wavFiles);
        }
    }
    get wavFiles() {
        return this._wavFiles;
    }
    set wavFiles(value) {
        this._wavFiles = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        PlayWavFilesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            wavFiles: (this.wavFiles || []).map(b => b ? b.subarray(0) : new Uint8Array())
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
    options) {
        return {
            wavFiles: (this.wavFiles || []).map(b => (b ? uint8ArrayToBase64(b) : ''))
        };
    }
}
PlayWavFilesRequest.id = 'ondewo.sip.PlayWavFilesRequest';

/**
 * Message implementation for ondewo.sip.GetCallIdsRequest
 */
class GetCallIdsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIdsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sipId = _value.sipId;
        GetCallIdsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetCallIdsRequest();
        GetCallIdsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sipId = _instance.sipId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sipId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetCallIdsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sipId) {
            _writer.writeString(1, _instance.sipId);
        }
    }
    get sipId() {
        return this._sipId;
    }
    set sipId(value) {
        this._sipId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetCallIdsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sipId: this.sipId
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
    options) {
        return {
            sipId: this.sipId
        };
    }
}
GetCallIdsRequest.id = 'ondewo.sip.GetCallIdsRequest';
/**
 * Message implementation for ondewo.sip.GetCallIdsResponse
 */
class GetCallIdsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetCallIdsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sipId = _value.sipId;
        this.callIds = (_value.callIds || []).slice();
        GetCallIdsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetCallIdsResponse();
        GetCallIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sipId = _instance.sipId || '';
        _instance.callIds = _instance.callIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sipId = _reader.readString();
                    break;
                case 2:
                    (_instance.callIds = _instance.callIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetCallIdsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sipId) {
            _writer.writeString(1, _instance.sipId);
        }
        if (_instance.callIds && _instance.callIds.length) {
            _writer.writeRepeatedString(2, _instance.callIds);
        }
    }
    get sipId() {
        return this._sipId;
    }
    set sipId(value) {
        this._sipId = value;
    }
    get callIds() {
        return this._callIds;
    }
    set callIds(value) {
        this._callIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetCallIdsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sipId: this.sipId,
            callIds: (this.callIds || []).slice()
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
    options) {
        return {
            sipId: this.sipId,
            callIds: (this.callIds || []).slice()
        };
    }
}
GetCallIdsResponse.id = 'ondewo.sip.GetCallIdsResponse';
/**
 * Message implementation for ondewo.sip.GetVoipLogRequest
 */
class GetVoipLogRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipLogRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callId = _value.callId;
        GetVoipLogRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetVoipLogRequest();
        GetVoipLogRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callId = _instance.callId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetVoipLogRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId) {
            _writer.writeString(1, _instance.callId);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        this._callId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetVoipLogRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId
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
    options) {
        return {
            callId: this.callId
        };
    }
}
GetVoipLogRequest.id = 'ondewo.sip.GetVoipLogRequest';
/**
 * Message implementation for ondewo.sip.GetVoipLogResponse
 */
class GetVoipLogResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetVoipLogResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.activeLog = _value.activeLog
            ? new VoipLog(_value.activeLog)
            : undefined;
        this.doneLogs = (_value.doneLogs || []).map(m => new VoipLog(m));
        GetVoipLogResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetVoipLogResponse();
        GetVoipLogResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.activeLog = _instance.activeLog || undefined;
        _instance.doneLogs = _instance.doneLogs || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.activeLog = new VoipLog();
                    _reader.readMessage(_instance.activeLog, VoipLog.deserializeBinaryFromReader);
                    break;
                case 2:
                    const messageInitializer2 = new VoipLog();
                    _reader.readMessage(messageInitializer2, VoipLog.deserializeBinaryFromReader);
                    (_instance.doneLogs = _instance.doneLogs || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetVoipLogResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.activeLog) {
            _writer.writeMessage(1, _instance.activeLog, VoipLog.serializeBinaryToWriter);
        }
        if (_instance.doneLogs && _instance.doneLogs.length) {
            _writer.writeRepeatedMessage(2, _instance.doneLogs, VoipLog.serializeBinaryToWriter);
        }
    }
    get activeLog() {
        return this._activeLog;
    }
    set activeLog(value) {
        this._activeLog = value;
    }
    get doneLogs() {
        return this._doneLogs;
    }
    set doneLogs(value) {
        this._doneLogs = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetVoipLogResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            activeLog: this.activeLog ? this.activeLog.toObject() : undefined,
            doneLogs: (this.doneLogs || []).map(m => m.toObject())
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
    options) {
        return {
            activeLog: this.activeLog ? this.activeLog.toProtobufJSON(options) : null,
            doneLogs: (this.doneLogs || []).map(m => m.toProtobufJSON(options))
        };
    }
}
GetVoipLogResponse.id = 'ondewo.sip.GetVoipLogResponse';
/**
 * Message implementation for ondewo.sip.VoipLog
 */
class VoipLog {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of VoipLog to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callId = _value.callId;
        this.startTime = _value.startTime;
        this.endTime = _value.endTime;
        this.statusHistory = (_value.statusHistory || []).map(m => new SipStatus(m));
        this.counters = _value.counters ? new Counters(_value.counters) : undefined;
        VoipLog.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new VoipLog();
        VoipLog.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callId = _instance.callId || '';
        _instance.startTime = _instance.startTime || 0;
        _instance.endTime = _instance.endTime || 0;
        _instance.statusHistory = _instance.statusHistory || [];
        _instance.counters = _instance.counters || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.callId = _reader.readString();
                    break;
                case 2:
                    _instance.startTime = _reader.readDouble();
                    break;
                case 3:
                    _instance.endTime = _reader.readDouble();
                    break;
                case 4:
                    const messageInitializer4 = new SipStatus();
                    _reader.readMessage(messageInitializer4, SipStatus.deserializeBinaryFromReader);
                    (_instance.statusHistory = _instance.statusHistory || []).push(messageInitializer4);
                    break;
                case 5:
                    _instance.counters = new Counters();
                    _reader.readMessage(_instance.counters, Counters.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        VoipLog.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callId) {
            _writer.writeString(1, _instance.callId);
        }
        if (_instance.startTime) {
            _writer.writeDouble(2, _instance.startTime);
        }
        if (_instance.endTime) {
            _writer.writeDouble(3, _instance.endTime);
        }
        if (_instance.statusHistory && _instance.statusHistory.length) {
            _writer.writeRepeatedMessage(4, _instance.statusHistory, SipStatus.serializeBinaryToWriter);
        }
        if (_instance.counters) {
            _writer.writeMessage(5, _instance.counters, Counters.serializeBinaryToWriter);
        }
    }
    get callId() {
        return this._callId;
    }
    set callId(value) {
        this._callId = value;
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    get statusHistory() {
        return this._statusHistory;
    }
    set statusHistory(value) {
        this._statusHistory = value;
    }
    get counters() {
        return this._counters;
    }
    set counters(value) {
        this._counters = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        VoipLog.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callId: this.callId,
            startTime: this.startTime,
            endTime: this.endTime,
            statusHistory: (this.statusHistory || []).map(m => m.toObject()),
            counters: this.counters ? this.counters.toObject() : undefined
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
    options) {
        return {
            callId: this.callId,
            startTime: this.startTime,
            endTime: this.endTime,
            statusHistory: (this.statusHistory || []).map(m => m.toProtobufJSON(options)),
            counters: this.counters ? this.counters.toProtobufJSON(options) : null
        };
    }
}
VoipLog.id = 'ondewo.sip.VoipLog';
/**
 * Message implementation for ondewo.sip.Counters
 */
class Counters {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Counters to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.fifteenSCounter = _value.fifteenSCounter;
        this.sixtySCounter = _value.sixtySCounter;
        Counters.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Counters();
        Counters.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.fifteenSCounter = _instance.fifteenSCounter || '0';
        _instance.sixtySCounter = _instance.sixtySCounter || '0';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.fifteenSCounter = _reader.readInt64String();
                    break;
                case 2:
                    _instance.sixtySCounter = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Counters.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.fifteenSCounter) {
            _writer.writeInt64String(1, _instance.fifteenSCounter);
        }
        if (_instance.sixtySCounter) {
            _writer.writeInt64String(2, _instance.sixtySCounter);
        }
    }
    get fifteenSCounter() {
        return this._fifteenSCounter;
    }
    set fifteenSCounter(value) {
        this._fifteenSCounter = value;
    }
    get sixtySCounter() {
        return this._sixtySCounter;
    }
    set sixtySCounter(value) {
        this._sixtySCounter = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Counters.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            fifteenSCounter: this.fifteenSCounter,
            sixtySCounter: this.sixtySCounter
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
    options) {
        return {
            fifteenSCounter: this.fifteenSCounter,
            sixtySCounter: this.sixtySCounter
        };
    }
}
Counters.id = 'ondewo.sip.Counters';
/**
 * Message implementation for ondewo.sip.GetManifestVoipLogRequest
 */
class GetManifestVoipLogRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetManifestVoipLogRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.manifestId = _value.manifestId;
        GetManifestVoipLogRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetManifestVoipLogRequest();
        GetManifestVoipLogRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.manifestId = _instance.manifestId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.manifestId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetManifestVoipLogRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.manifestId) {
            _writer.writeString(1, _instance.manifestId);
        }
    }
    get manifestId() {
        return this._manifestId;
    }
    set manifestId(value) {
        this._manifestId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetManifestVoipLogRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            manifestId: this.manifestId
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
    options) {
        return {
            manifestId: this.manifestId
        };
    }
}
GetManifestVoipLogRequest.id = 'ondewo.sip.GetManifestVoipLogRequest';
/**
 * Message implementation for ondewo.sip.ManifestVoipLog
 */
class ManifestVoipLog {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ManifestVoipLog to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.callerLogs = (_value.callerLogs || []).map(m => new GetVoipLogResponse(m));
        this.listenerLogs = (_value.listenerLogs || []).map(m => new GetVoipLogResponse(m));
        ManifestVoipLog.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ManifestVoipLog();
        ManifestVoipLog.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.callerLogs = _instance.callerLogs || [];
        _instance.listenerLogs = _instance.listenerLogs || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new GetVoipLogResponse();
                    _reader.readMessage(messageInitializer1, GetVoipLogResponse.deserializeBinaryFromReader);
                    (_instance.callerLogs = _instance.callerLogs || []).push(messageInitializer1);
                    break;
                case 2:
                    const messageInitializer2 = new GetVoipLogResponse();
                    _reader.readMessage(messageInitializer2, GetVoipLogResponse.deserializeBinaryFromReader);
                    (_instance.listenerLogs = _instance.listenerLogs || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ManifestVoipLog.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.callerLogs && _instance.callerLogs.length) {
            _writer.writeRepeatedMessage(1, _instance.callerLogs, GetVoipLogResponse.serializeBinaryToWriter);
        }
        if (_instance.listenerLogs && _instance.listenerLogs.length) {
            _writer.writeRepeatedMessage(2, _instance.listenerLogs, GetVoipLogResponse.serializeBinaryToWriter);
        }
    }
    get callerLogs() {
        return this._callerLogs;
    }
    set callerLogs(value) {
        this._callerLogs = value;
    }
    get listenerLogs() {
        return this._listenerLogs;
    }
    set listenerLogs(value) {
        this._listenerLogs = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ManifestVoipLog.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            callerLogs: (this.callerLogs || []).map(m => m.toObject()),
            listenerLogs: (this.listenerLogs || []).map(m => m.toObject())
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
    options) {
        return {
            callerLogs: (this.callerLogs || []).map(m => m.toProtobufJSON(options)),
            listenerLogs: (this.listenerLogs || []).map(m => m.toProtobufJSON(options))
        };
    }
}
ManifestVoipLog.id = 'ondewo.sip.ManifestVoipLog';
/**
 * Message implementation for ondewo.sip.SaveCallLogsResponse
 */
class SaveCallLogsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SaveCallLogsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.success = _value.success;
        SaveCallLogsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SaveCallLogsResponse();
        SaveCallLogsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.success = _instance.success || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.success = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SaveCallLogsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.success) {
            _writer.writeBool(1, _instance.success);
        }
    }
    get success() {
        return this._success;
    }
    set success(value) {
        this._success = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SaveCallLogsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            success: this.success
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
    options) {
        return {
            success: this.success
        };
    }
}
SaveCallLogsResponse.id = 'ondewo.sip.SaveCallLogsResponse';

/* tslint:disable */
/**
 * Specific GrpcClientSettings for VoipCallLogs.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS = new InjectionToken('GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.sip.VoipCallLogs
 */
class VoipCallLogsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.sip.VoipCallLogs/GetVoipLog
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetVoipLogResponse>>
             */
            getVoipLog: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.VoipCallLogs/GetVoipLog',
                    requestData,
                    requestMetadata,
                    requestClass: GetVoipLogRequest,
                    responseClass: GetVoipLogResponse
                });
            },
            /**
             * Unary RPC for /ondewo.sip.VoipCallLogs/GetManifestVoipLog
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ManifestVoipLog>>
             */
            getManifestVoipLog: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.VoipCallLogs/GetManifestVoipLog',
                    requestData,
                    requestMetadata,
                    requestClass: GetManifestVoipLogRequest,
                    responseClass: ManifestVoipLog
                });
            },
            /**
             * Unary RPC for /ondewo.sip.VoipCallLogs/ActivateSaveCallLogs
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SaveCallLogsResponse>>
             */
            activateSaveCallLogs: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.VoipCallLogs/ActivateSaveCallLogs',
                    requestData,
                    requestMetadata,
                    requestClass: Empty,
                    responseClass: SaveCallLogsResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.sip.VoipCallLogs', settings);
    }
    /**
     * Unary RPC for /ondewo.sip.VoipCallLogs/GetVoipLog
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetVoipLogResponse>
     */
    getVoipLog(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getVoipLog(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.VoipCallLogs/GetManifestVoipLog
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ManifestVoipLog>
     */
    getManifestVoipLog(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getManifestVoipLog(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.VoipCallLogs/ActivateSaveCallLogs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SaveCallLogsResponse>
     */
    activateSaveCallLogs(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .activateSaveCallLogs(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
VoipCallLogsClient.ɵprov = ɵɵdefineInjectable({ factory: function VoipCallLogsClient_Factory() { return new VoipCallLogsClient(ɵɵinject(GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: VoipCallLogsClient, providedIn: "any" });
VoipCallLogsClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
VoipCallLogsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/**
 * Specific GrpcClientSettings for Contexts.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_CONTEXTS_CLIENT_SETTINGS = new InjectionToken('GRPC_CONTEXTS_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.nlu.Contexts
 */
class ContextsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.nlu.Contexts/ListContexts
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListContextsResponse>>
             */
            listContexts: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/ListContexts',
                    requestData,
                    requestMetadata,
                    requestClass: ListContextsRequest,
                    responseClass: ListContextsResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.Contexts/GetContext
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Context>>
             */
            getContext: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/GetContext',
                    requestData,
                    requestMetadata,
                    requestClass: GetContextRequest,
                    responseClass: Context
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.Contexts/CreateContext
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Context>>
             */
            createContext: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/CreateContext',
                    requestData,
                    requestMetadata,
                    requestClass: CreateContextRequest,
                    responseClass: Context
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.Contexts/UpdateContext
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Context>>
             */
            updateContext: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/UpdateContext',
                    requestData,
                    requestMetadata,
                    requestClass: UpdateContextRequest,
                    responseClass: Context
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.Contexts/DeleteContext
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
             */
            deleteContext: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/DeleteContext',
                    requestData,
                    requestMetadata,
                    requestClass: DeleteContextRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.Contexts/DeleteAllContexts
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
             */
            deleteAllContexts: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Contexts/DeleteAllContexts',
                    requestData,
                    requestMetadata,
                    requestClass: DeleteAllContextsRequest,
                    responseClass: Empty
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.Contexts', settings);
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/ListContexts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListContextsResponse>
     */
    listContexts(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listContexts(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/GetContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Context>
     */
    getContext(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getContext(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/CreateContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Context>
     */
    createContext(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createContext(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/UpdateContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Context>
     */
    updateContext(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateContext(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/DeleteContext
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteContext(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteContext(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.Contexts/DeleteAllContexts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteAllContexts(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteAllContexts(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
ContextsClient.ɵprov = ɵɵdefineInjectable({ factory: function ContextsClient_Factory() { return new ContextsClient(ɵɵinject(GRPC_CONTEXTS_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: ContextsClient, providedIn: "any" });
ContextsClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
ContextsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_CONTEXTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/* tslint:disable */
/**
 * Specific GrpcClientSettings for Sip.
 * Use it only if your default settings are not set or the service requires other settings.
 */
const GRPC_SIP_CLIENT_SETTINGS = new InjectionToken('GRPC_SIP_CLIENT_SETTINGS');

/* tslint:disable */
/**
 * Service client implementation for ondewo.sip.Sip
 */
class SipClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.sip.Sip/StartSession
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            startSession: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/StartSession',
                    requestData,
                    requestMetadata,
                    requestClass: StartSessionRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/EndSession
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            endSession: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/EndSession',
                    requestData,
                    requestMetadata,
                    requestClass: Empty,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/StartCall
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            startCall: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/StartCall',
                    requestData,
                    requestMetadata,
                    requestClass: StartCallRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/EndCall
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            endCall: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/EndCall',
                    requestData,
                    requestMetadata,
                    requestClass: EndCallRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/TransferCall
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            transferCall: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/TransferCall',
                    requestData,
                    requestMetadata,
                    requestClass: TransferCallRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/RegisterAccount
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            registerAccount: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/RegisterAccount',
                    requestData,
                    requestMetadata,
                    requestClass: RegisterAccountRequest,
                    responseClass: Empty
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/GetSipStatus
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SipStatus>>
             */
            getSipStatus: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/GetSipStatus',
                    requestData,
                    requestMetadata,
                    requestClass: Empty,
                    responseClass: SipStatus
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/GetSipStatusHistory
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.SipStatusHistoryResponse>>
             */
            getSipStatusHistory: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/GetSipStatusHistory',
                    requestData,
                    requestMetadata,
                    requestClass: Empty,
                    responseClass: SipStatusHistoryResponse
                });
            },
            /**
             * Unary RPC for /ondewo.sip.Sip/PlayWavFiles
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
             */
            playWavFiles: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.sip.Sip/PlayWavFiles',
                    requestData,
                    requestMetadata,
                    requestClass: PlayWavFilesRequest,
                    responseClass: Empty
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.sip.Sip', settings);
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/StartSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    startSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .startSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/EndSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    endSession(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .endSession(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/StartCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    startCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .startCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/EndCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    endCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .endCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/TransferCall
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    transferCall(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .transferCall(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/RegisterAccount
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    registerAccount(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .registerAccount(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/GetSipStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatus>
     */
    getSipStatus(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getSipStatus(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/GetSipStatusHistory
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SipStatusHistoryResponse>
     */
    getSipStatusHistory(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getSipStatusHistory(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.sip.Sip/PlayWavFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf000.Empty>
     */
    playWavFiles(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .playWavFiles(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
SipClient.ɵprov = ɵɵdefineInjectable({ factory: function SipClient_Factory() { return new SipClient(ɵɵinject(GRPC_SIP_CLIENT_SETTINGS, 8), ɵɵinject(GRPC_CLIENT_FACTORY), ɵɵinject(GrpcHandler)); }, token: SipClient, providedIn: "any" });
SipClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
SipClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SIP_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];

/**
 * Message implementation for google.api.Http
 */
class Http {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Http to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.rules = (_value.rules || []).map(m => new HttpRule(m));
        this.fullyDecodeReservedExpansion = _value.fullyDecodeReservedExpansion;
        Http.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Http();
        Http.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.rules = _instance.rules || [];
        _instance.fullyDecodeReservedExpansion =
            _instance.fullyDecodeReservedExpansion || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new HttpRule();
                    _reader.readMessage(messageInitializer1, HttpRule.deserializeBinaryFromReader);
                    (_instance.rules = _instance.rules || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.fullyDecodeReservedExpansion = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Http.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.rules && _instance.rules.length) {
            _writer.writeRepeatedMessage(1, _instance.rules, HttpRule.serializeBinaryToWriter);
        }
        if (_instance.fullyDecodeReservedExpansion) {
            _writer.writeBool(2, _instance.fullyDecodeReservedExpansion);
        }
    }
    get rules() {
        return this._rules;
    }
    set rules(value) {
        this._rules = value;
    }
    get fullyDecodeReservedExpansion() {
        return this._fullyDecodeReservedExpansion;
    }
    set fullyDecodeReservedExpansion(value) {
        this._fullyDecodeReservedExpansion = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Http.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            rules: (this.rules || []).map(m => m.toObject()),
            fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
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
    options) {
        return {
            rules: (this.rules || []).map(m => m.toProtobufJSON(options)),
            fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
        };
    }
}
Http.id = 'google.api.Http';
/**
 * Message implementation for google.api.HttpRule
 */
class HttpRule {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HttpRule to deeply clone from
     */
    constructor(_value) {
        this._pattern = HttpRule.PatternCase.none;
        _value = _value || {};
        this.selector = _value.selector;
        this.get = _value.get;
        this.put = _value.put;
        this.post = _value.post;
        this.delete = _value.delete;
        this.patch = _value.patch;
        this.custom = _value.custom
            ? new CustomHttpPattern(_value.custom)
            : undefined;
        this.body = _value.body;
        this.responseBody = _value.responseBody;
        this.additionalBindings = (_value.additionalBindings || []).map(m => new HttpRule(m));
        HttpRule.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new HttpRule();
        HttpRule.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.selector = _instance.selector || '';
        _instance.body = _instance.body || '';
        _instance.responseBody = _instance.responseBody || '';
        _instance.additionalBindings = _instance.additionalBindings || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.selector = _reader.readString();
                    break;
                case 2:
                    _instance.get = _reader.readString();
                    break;
                case 3:
                    _instance.put = _reader.readString();
                    break;
                case 4:
                    _instance.post = _reader.readString();
                    break;
                case 5:
                    _instance.delete = _reader.readString();
                    break;
                case 6:
                    _instance.patch = _reader.readString();
                    break;
                case 8:
                    _instance.custom = new CustomHttpPattern();
                    _reader.readMessage(_instance.custom, CustomHttpPattern.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.body = _reader.readString();
                    break;
                case 12:
                    _instance.responseBody = _reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new HttpRule();
                    _reader.readMessage(messageInitializer11, HttpRule.deserializeBinaryFromReader);
                    (_instance.additionalBindings =
                        _instance.additionalBindings || []).push(messageInitializer11);
                    break;
                default:
                    _reader.skipField();
            }
        }
        HttpRule.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.selector) {
            _writer.writeString(1, _instance.selector);
        }
        if (_instance.get || _instance.get === '') {
            _writer.writeString(2, _instance.get);
        }
        if (_instance.put || _instance.put === '') {
            _writer.writeString(3, _instance.put);
        }
        if (_instance.post || _instance.post === '') {
            _writer.writeString(4, _instance.post);
        }
        if (_instance.delete || _instance.delete === '') {
            _writer.writeString(5, _instance.delete);
        }
        if (_instance.patch || _instance.patch === '') {
            _writer.writeString(6, _instance.patch);
        }
        if (_instance.custom) {
            _writer.writeMessage(8, _instance.custom, CustomHttpPattern.serializeBinaryToWriter);
        }
        if (_instance.body) {
            _writer.writeString(7, _instance.body);
        }
        if (_instance.responseBody) {
            _writer.writeString(12, _instance.responseBody);
        }
        if (_instance.additionalBindings && _instance.additionalBindings.length) {
            _writer.writeRepeatedMessage(11, _instance.additionalBindings, HttpRule.serializeBinaryToWriter);
        }
    }
    get selector() {
        return this._selector;
    }
    set selector(value) {
        this._selector = value;
    }
    get get() {
        return this._get;
    }
    set get(value) {
        if (value !== undefined && value !== null) {
            this._put = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.get;
        }
        this._get = value;
    }
    get put() {
        return this._put;
    }
    set put(value) {
        if (value !== undefined && value !== null) {
            this._get = this._post = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.put;
        }
        this._put = value;
    }
    get post() {
        return this._post;
    }
    set post(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._delete = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.post;
        }
        this._post = value;
    }
    get delete() {
        return this._delete;
    }
    set delete(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._patch = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.delete;
        }
        this._delete = value;
    }
    get patch() {
        return this._patch;
    }
    set patch(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._custom = undefined;
            this._pattern = HttpRule.PatternCase.patch;
        }
        this._patch = value;
    }
    get custom() {
        return this._custom;
    }
    set custom(value) {
        if (value !== undefined && value !== null) {
            this._get = this._put = this._post = this._delete = this._patch = undefined;
            this._pattern = HttpRule.PatternCase.custom;
        }
        this._custom = value;
    }
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;
    }
    get responseBody() {
        return this._responseBody;
    }
    set responseBody(value) {
        this._responseBody = value;
    }
    get additionalBindings() {
        return this._additionalBindings;
    }
    set additionalBindings(value) {
        this._additionalBindings = value;
    }
    get pattern() {
        return this._pattern;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        HttpRule.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            selector: this.selector,
            get: this.get,
            put: this.put,
            post: this.post,
            delete: this.delete,
            patch: this.patch,
            custom: this.custom ? this.custom.toObject() : undefined,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toObject())
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
    options) {
        var _a, _b, _c, _d, _e;
        return {
            selector: this.selector,
            get: (_a = this.get) !== null && _a !== void 0 ? _a : null,
            put: (_b = this.put) !== null && _b !== void 0 ? _b : null,
            post: (_c = this.post) !== null && _c !== void 0 ? _c : null,
            delete: (_d = this.delete) !== null && _d !== void 0 ? _d : null,
            patch: (_e = this.patch) !== null && _e !== void 0 ? _e : null,
            custom: this.custom ? this.custom.toProtobufJSON(options) : null,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toProtobufJSON(options))
        };
    }
}
HttpRule.id = 'google.api.HttpRule';
(function (HttpRule) {
    let PatternCase;
    (function (PatternCase) {
        PatternCase[PatternCase["none"] = 0] = "none";
        PatternCase[PatternCase["get"] = 1] = "get";
        PatternCase[PatternCase["put"] = 2] = "put";
        PatternCase[PatternCase["post"] = 3] = "post";
        PatternCase[PatternCase["delete"] = 4] = "delete";
        PatternCase[PatternCase["patch"] = 5] = "patch";
        PatternCase[PatternCase["custom"] = 6] = "custom";
    })(PatternCase = HttpRule.PatternCase || (HttpRule.PatternCase = {}));
})(HttpRule || (HttpRule = {}));
/**
 * Message implementation for google.api.CustomHttpPattern
 */
class CustomHttpPattern {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CustomHttpPattern to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.kind = _value.kind;
        this.path = _value.path;
        CustomHttpPattern.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CustomHttpPattern();
        CustomHttpPattern.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.kind = _instance.kind || '';
        _instance.path = _instance.path || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.kind = _reader.readString();
                    break;
                case 2:
                    _instance.path = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CustomHttpPattern.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.kind) {
            _writer.writeString(1, _instance.kind);
        }
        if (_instance.path) {
            _writer.writeString(2, _instance.path);
        }
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CustomHttpPattern.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            kind: this.kind,
            path: this.path
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
    options) {
        return {
            kind: this.kind,
            path: this.path
        };
    }
}
CustomHttpPattern.id = 'google.api.CustomHttpPattern';

/**
 * Generated bundle index. Do not edit.
 */

export { Context, ContextsClient, Counters, CreateContextRequest, CustomHttpPattern, DeleteAllContextsRequest, DeleteContextRequest, DeployPreconditionRequest, DeployPreconditionResponse, EndCallRequest, GRPC_CONTEXTS_CLIENT_SETTINGS, GRPC_SIP_CLIENT_SETTINGS, GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS, GRPC_VOIP_SESSIONS_CLIENT_SETTINGS, GetCallIDsRequest, GetCallIDsResponse, GetCallIdsRequest, GetCallIdsResponse, GetContextRequest, GetManifestIDsRequest, GetManifestIDsResponse, GetManifestVoipLogRequest, GetSessionIDRequest, GetSessionIDResponse, GetVoipLogRequest, GetVoipLogResponse, GetVoipStatusRequest, Http, HttpRule, ListContextsRequest, ListContextsResponse, ManifestRequest, ManifestVoipLog, PlayWavFilesRequest, RegisterAccountRequest, RemoveManifestResponse, RunManifestResponse, SaveCallLogsResponse, ServiceConfig, ServiceStatus, ShutdownUnhealthyCallsRequest, ShutdownUnhealthyCallsResponse, SipClient, SipStatus, SipStatusHistoryResponse, StartCallInstanceRequest, StartCallInstanceResponse, StartCallRequest, StartMultipleCallInstancesRequest, StartMultipleCallInstancesResponse, StartSessionRequest, StopCallInstanceRequest, StopCallInstanceResponse, TransferCallRequest, UpdateContextRequest, UpdateServicesStatusRequest, UpdateServicesStatusResponse, VoipCallLogsClient, VoipLog, VoipManifest, VoipManifestResponse, VoipManifestStatus, VoipManifestStatusRequest, VoipSessionsClient, VoipStatus };
//# sourceMappingURL=ondewo-vtsi-client-angular.js.map
