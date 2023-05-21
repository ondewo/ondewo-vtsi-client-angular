import { BinaryReader, BinaryWriter } from 'google-protobuf';
/**
 * Message implementation for google.api.Http
 */
class Http {
    static id = 'google.api.Http';
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
    _rules;
    _fullyDecodeReservedExpansion;
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
export { Http };
/**
 * Message implementation for google.api.HttpRule
 */
class HttpRule {
    static id = 'google.api.HttpRule';
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
    _selector;
    _get;
    _put;
    _post;
    _delete;
    _patch;
    _custom;
    _body;
    _responseBody;
    _additionalBindings;
    _pattern = HttpRule.PatternCase.none;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of HttpRule to deeply clone from
     */
    constructor(_value) {
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
        return {
            selector: this.selector,
            get: this.get === null || this.get === undefined ? null : this.get,
            put: this.put === null || this.put === undefined ? null : this.put,
            post: this.post === null || this.post === undefined ? null : this.post,
            delete: this.delete === null || this.delete === undefined ? null : this.delete,
            patch: this.patch === null || this.patch === undefined ? null : this.patch,
            custom: this.custom ? this.custom.toProtobufJSON(options) : null,
            body: this.body,
            responseBody: this.responseBody,
            additionalBindings: (this.additionalBindings || []).map(m => m.toProtobufJSON(options))
        };
    }
}
export { HttpRule };
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
    static id = 'google.api.CustomHttpPattern';
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
    _kind;
    _path;
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
export { CustomHttpPattern };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9nb29nbGUvYXBpL2h0dHAucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQUNmLE1BQU0sQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7SUFFOUI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWU7UUFDakMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxTQUFTLENBQUMsNEJBQTRCO1lBQ3BDLFNBQVMsQ0FBQyw0QkFBNEIsSUFBSSxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQUMsU0FBZSxFQUFFLE9BQXFCO1FBQ3ZFLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osTUFBTSxtQkFBbUIsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUMzQyxPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsRUFDbkIsUUFBUSxDQUFDLDJCQUEyQixDQUNyQyxD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QUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7O1NBdklVLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgZ29vZ2xlLmFwaS5IdHRwXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnZ29vZ2xlLmFwaS5IdHRwJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSHR0cCgpO1xuICAgIEh0dHAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBIdHRwKSB7XG4gICAgX2luc3RhbmNlLnJ1bGVzID0gX2luc3RhbmNlLnJ1bGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uID1cbiAgICAgIF9pbnN0YW5jZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKF9pbnN0YW5jZTogSHR0cCwgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEh0dHBSdWxlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBIdHRwUnVsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UucnVsZXMgPSBfaW5zdGFuY2UucnVsZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbiA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEh0dHAucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBIdHRwLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnJ1bGVzICYmIF9pbnN0YW5jZS5ydWxlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5ydWxlcyBhcyBhbnksXG4gICAgICAgIEh0dHBSdWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ydWxlcz86IEh0dHBSdWxlW107XG4gIHByaXZhdGUgX2Z1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBIdHRwIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEh0dHAuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucnVsZXMgPSAoX3ZhbHVlLnJ1bGVzIHx8IFtdKS5tYXAobSA9PiBuZXcgSHR0cFJ1bGUobSkpO1xuICAgIHRoaXMuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbiA9IF92YWx1ZS5mdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uO1xuICAgIEh0dHAucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBydWxlcygpOiBIdHRwUnVsZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXM7XG4gIH1cbiAgc2V0IHJ1bGVzKHZhbHVlOiBIdHRwUnVsZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcnVsZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbjtcbiAgfVxuICBzZXQgZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Z1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBIdHRwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEh0dHAuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBydWxlczogKHRoaXMucnVsZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBmdWxseURlY29kZVJlc2VydmVkRXhwYW5zaW9uOiB0aGlzLmZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBIdHRwLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcnVsZXM6ICh0aGlzLnJ1bGVzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIGZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb246IHRoaXMuZnVsbHlEZWNvZGVSZXNlcnZlZEV4cGFuc2lvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSHR0cCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSHR0cFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcnVsZXM/OiBIdHRwUnVsZS5Bc09iamVjdFtdO1xuICAgIGZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb246IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSHR0cFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcnVsZXM6IEh0dHBSdWxlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGZ1bGx5RGVjb2RlUmVzZXJ2ZWRFeHBhbnNpb246IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBnb29nbGUuYXBpLkh0dHBSdWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwUnVsZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ2dvb2dsZS5hcGkuSHR0cFJ1bGUnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIdHRwUnVsZSgpO1xuICAgIEh0dHBSdWxlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSHR0cFJ1bGUpIHtcbiAgICBfaW5zdGFuY2Uuc2VsZWN0b3IgPSBfaW5zdGFuY2Uuc2VsZWN0b3IgfHwgJyc7XG5cbiAgICBfaW5zdGFuY2UuYm9keSA9IF9pbnN0YW5jZS5ib2R5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5yZXNwb25zZUJvZHkgPSBfaW5zdGFuY2UucmVzcG9uc2VCb2R5IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MgPSBfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSHR0cFJ1bGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlbGVjdG9yID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZ2V0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucHV0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucG9zdCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnBhdGNoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuY3VzdG9tID0gbmV3IEN1c3RvbUh0dHBQYXR0ZXJuKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jdXN0b20sXG4gICAgICAgICAgICBDdXN0b21IdHRwUGF0dGVybi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmJvZHkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UucmVzcG9uc2VCb2R5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMTEgPSBuZXcgSHR0cFJ1bGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTEsXG4gICAgICAgICAgICBIdHRwUnVsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSHR0cFJ1bGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBIdHRwUnVsZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zZWxlY3Rvcikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2VsZWN0b3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmdldCB8fCBfaW5zdGFuY2UuZ2V0ID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZ2V0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wdXQgfHwgX2luc3RhbmNlLnB1dCA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnB1dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG9zdCB8fCBfaW5zdGFuY2UucG9zdCA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnBvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlbGV0ZSB8fCBfaW5zdGFuY2UuZGVsZXRlID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuZGVsZXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXRjaCB8fCBfaW5zdGFuY2UucGF0Y2ggPT09ICcnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYXRjaCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3VzdG9tKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmN1c3RvbSBhcyBhbnksXG4gICAgICAgIEN1c3RvbUh0dHBQYXR0ZXJuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJvZHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNywgX2luc3RhbmNlLmJvZHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlc3BvbnNlQm9keSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMiwgX2luc3RhbmNlLnJlc3BvbnNlQm9keSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWRkaXRpb25hbEJpbmRpbmdzICYmIF9pbnN0YW5jZS5hZGRpdGlvbmFsQmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgX2luc3RhbmNlLmFkZGl0aW9uYWxCaW5kaW5ncyBhcyBhbnksXG4gICAgICAgIEh0dHBSdWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2dldDogc3RyaW5nO1xuICBwcml2YXRlIF9wdXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zdDogc3RyaW5nO1xuICBwcml2YXRlIF9kZWxldGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGF0Y2g6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3VzdG9tPzogQ3VzdG9tSHR0cFBhdHRlcm47XG4gIHByaXZhdGUgX2JvZHk6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVzcG9uc2VCb2R5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FkZGl0aW9uYWxCaW5kaW5ncz86IEh0dHBSdWxlW107XG5cbiAgcHJpdmF0ZSBfcGF0dGVybjogSHR0cFJ1bGUuUGF0dGVybkNhc2UgPSBIdHRwUnVsZS5QYXR0ZXJuQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSHR0cFJ1bGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SHR0cFJ1bGUuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2VsZWN0b3IgPSBfdmFsdWUuc2VsZWN0b3I7XG4gICAgdGhpcy5nZXQgPSBfdmFsdWUuZ2V0O1xuICAgIHRoaXMucHV0ID0gX3ZhbHVlLnB1dDtcbiAgICB0aGlzLnBvc3QgPSBfdmFsdWUucG9zdDtcbiAgICB0aGlzLmRlbGV0ZSA9IF92YWx1ZS5kZWxldGU7XG4gICAgdGhpcy5wYXRjaCA9IF92YWx1ZS5wYXRjaDtcbiAgICB0aGlzLmN1c3RvbSA9IF92YWx1ZS5jdXN0b21cbiAgICAgID8gbmV3IEN1c3RvbUh0dHBQYXR0ZXJuKF92YWx1ZS5jdXN0b20pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvZHkgPSBfdmFsdWUuYm9keTtcbiAgICB0aGlzLnJlc3BvbnNlQm9keSA9IF92YWx1ZS5yZXNwb25zZUJvZHk7XG4gICAgdGhpcy5hZGRpdGlvbmFsQmluZGluZ3MgPSAoX3ZhbHVlLmFkZGl0aW9uYWxCaW5kaW5ncyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSHR0cFJ1bGUobSlcbiAgICApO1xuICAgIEh0dHBSdWxlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3I7XG4gIH1cbiAgc2V0IHNlbGVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWxlY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBnZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0O1xuICB9XG4gIHNldCBnZXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wdXQgPSB0aGlzLl9wb3N0ID0gdGhpcy5fZGVsZXRlID0gdGhpcy5fcGF0Y2ggPSB0aGlzLl9jdXN0b20gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UuZ2V0O1xuICAgIH1cbiAgICB0aGlzLl9nZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3B1dDtcbiAgfVxuICBzZXQgcHV0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZ2V0ID0gdGhpcy5fcG9zdCA9IHRoaXMuX2RlbGV0ZSA9IHRoaXMuX3BhdGNoID0gdGhpcy5fY3VzdG9tID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGF0dGVybiA9IEh0dHBSdWxlLlBhdHRlcm5DYXNlLnB1dDtcbiAgICB9XG4gICAgdGhpcy5fcHV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdDtcbiAgfVxuICBzZXQgcG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2dldCA9IHRoaXMuX3B1dCA9IHRoaXMuX2RlbGV0ZSA9IHRoaXMuX3BhdGNoID0gdGhpcy5fY3VzdG9tID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGF0dGVybiA9IEh0dHBSdWxlLlBhdHRlcm5DYXNlLnBvc3Q7XG4gICAgfVxuICAgIHRoaXMuX3Bvc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVsZXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxuICBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZ2V0ID0gdGhpcy5fcHV0ID0gdGhpcy5fcG9zdCA9IHRoaXMuX3BhdGNoID0gdGhpcy5fY3VzdG9tID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGF0dGVybiA9IEh0dHBSdWxlLlBhdHRlcm5DYXNlLmRlbGV0ZTtcbiAgICB9XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhdGNoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGNoO1xuICB9XG4gIHNldCBwYXRjaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2dldCA9IHRoaXMuX3B1dCA9IHRoaXMuX3Bvc3QgPSB0aGlzLl9kZWxldGUgPSB0aGlzLl9jdXN0b20gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UucGF0Y2g7XG4gICAgfVxuICAgIHRoaXMuX3BhdGNoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGN1c3RvbSgpOiBDdXN0b21IdHRwUGF0dGVybiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbTtcbiAgfVxuICBzZXQgY3VzdG9tKHZhbHVlOiBDdXN0b21IdHRwUGF0dGVybiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9nZXQgPSB0aGlzLl9wdXQgPSB0aGlzLl9wb3N0ID0gdGhpcy5fZGVsZXRlID0gdGhpcy5fcGF0Y2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXR0ZXJuID0gSHR0cFJ1bGUuUGF0dGVybkNhc2UuY3VzdG9tO1xuICAgIH1cbiAgICB0aGlzLl9jdXN0b20gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICB9XG4gIHNldCBib2R5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ib2R5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlQm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUJvZHk7XG4gIH1cbiAgc2V0IHJlc3BvbnNlQm9keSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VCb2R5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFkZGl0aW9uYWxCaW5kaW5ncygpOiBIdHRwUnVsZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbEJpbmRpbmdzO1xuICB9XG4gIHNldCBhZGRpdGlvbmFsQmluZGluZ3ModmFsdWU6IEh0dHBSdWxlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZGRpdGlvbmFsQmluZGluZ3MgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0dGVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBIdHRwUnVsZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBIdHRwUnVsZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdG9yOiB0aGlzLnNlbGVjdG9yLFxuICAgICAgZ2V0OiB0aGlzLmdldCxcbiAgICAgIHB1dDogdGhpcy5wdXQsXG4gICAgICBwb3N0OiB0aGlzLnBvc3QsXG4gICAgICBkZWxldGU6IHRoaXMuZGVsZXRlLFxuICAgICAgcGF0Y2g6IHRoaXMucGF0Y2gsXG4gICAgICBjdXN0b206IHRoaXMuY3VzdG9tID8gdGhpcy5jdXN0b20udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJvZHk6IHRoaXMuYm9keSxcbiAgICAgIHJlc3BvbnNlQm9keTogdGhpcy5yZXNwb25zZUJvZHksXG4gICAgICBhZGRpdGlvbmFsQmluZGluZ3M6ICh0aGlzLmFkZGl0aW9uYWxCaW5kaW5ncyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEh0dHBSdWxlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0b3I6IHRoaXMuc2VsZWN0b3IsXG4gICAgICBnZXQ6IHRoaXMuZ2V0ID09PSBudWxsIHx8IHRoaXMuZ2V0ID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy5nZXQsXG4gICAgICBwdXQ6IHRoaXMucHV0ID09PSBudWxsIHx8IHRoaXMucHV0ID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy5wdXQsXG4gICAgICBwb3N0OiB0aGlzLnBvc3QgPT09IG51bGwgfHwgdGhpcy5wb3N0ID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy5wb3N0LFxuICAgICAgZGVsZXRlOlxuICAgICAgICB0aGlzLmRlbGV0ZSA9PT0gbnVsbCB8fCB0aGlzLmRlbGV0ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHRoaXMuZGVsZXRlLFxuICAgICAgcGF0Y2g6XG4gICAgICAgIHRoaXMucGF0Y2ggPT09IG51bGwgfHwgdGhpcy5wYXRjaCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHRoaXMucGF0Y2gsXG4gICAgICBjdXN0b206IHRoaXMuY3VzdG9tID8gdGhpcy5jdXN0b20udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgcmVzcG9uc2VCb2R5OiB0aGlzLnJlc3BvbnNlQm9keSxcbiAgICAgIGFkZGl0aW9uYWxCaW5kaW5nczogKHRoaXMuYWRkaXRpb25hbEJpbmRpbmdzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBIdHRwUnVsZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSHR0cFJ1bGVcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlbGVjdG9yOiBzdHJpbmc7XG4gICAgZ2V0OiBzdHJpbmc7XG4gICAgcHV0OiBzdHJpbmc7XG4gICAgcG9zdDogc3RyaW5nO1xuICAgIGRlbGV0ZTogc3RyaW5nO1xuICAgIHBhdGNoOiBzdHJpbmc7XG4gICAgY3VzdG9tPzogQ3VzdG9tSHR0cFBhdHRlcm4uQXNPYmplY3Q7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIHJlc3BvbnNlQm9keTogc3RyaW5nO1xuICAgIGFkZGl0aW9uYWxCaW5kaW5ncz86IEh0dHBSdWxlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSHR0cFJ1bGVcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlbGVjdG9yOiBzdHJpbmc7XG4gICAgZ2V0OiBzdHJpbmcgfCBudWxsO1xuICAgIHB1dDogc3RyaW5nIHwgbnVsbDtcbiAgICBwb3N0OiBzdHJpbmcgfCBudWxsO1xuICAgIGRlbGV0ZTogc3RyaW5nIHwgbnVsbDtcbiAgICBwYXRjaDogc3RyaW5nIHwgbnVsbDtcbiAgICBjdXN0b206IEN1c3RvbUh0dHBQYXR0ZXJuLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgcmVzcG9uc2VCb2R5OiBzdHJpbmc7XG4gICAgYWRkaXRpb25hbEJpbmRpbmdzOiBIdHRwUnVsZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBQYXR0ZXJuQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgZ2V0ID0gMSxcbiAgICBwdXQgPSAyLFxuICAgIHBvc3QgPSAzLFxuICAgIGRlbGV0ZSA9IDQsXG4gICAgcGF0Y2ggPSA1LFxuICAgIGN1c3RvbSA9IDZcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIGdvb2dsZS5hcGkuQ3VzdG9tSHR0cFBhdHRlcm5cbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBQYXR0ZXJuIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnZ29vZ2xlLmFwaS5DdXN0b21IdHRwUGF0dGVybic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEN1c3RvbUh0dHBQYXR0ZXJuKCk7XG4gICAgQ3VzdG9tSHR0cFBhdHRlcm4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDdXN0b21IdHRwUGF0dGVybikge1xuICAgIF9pbnN0YW5jZS5raW5kID0gX2luc3RhbmNlLmtpbmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBhdGggPSBfaW5zdGFuY2UucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEN1c3RvbUh0dHBQYXR0ZXJuLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5raW5kID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3VzdG9tSHR0cFBhdHRlcm4ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDdXN0b21IdHRwUGF0dGVybixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5raW5kKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5raW5kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9raW5kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEN1c3RvbUh0dHBQYXR0ZXJuIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEN1c3RvbUh0dHBQYXR0ZXJuLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmtpbmQgPSBfdmFsdWUua2luZDtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICBDdXN0b21IdHRwUGF0dGVybi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGtpbmQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgfVxuICBzZXQga2luZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2luZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDdXN0b21IdHRwUGF0dGVybi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDdXN0b21IdHRwUGF0dGVybi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEN1c3RvbUh0dHBQYXR0ZXJuLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogdGhpcy5raW5kLFxuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDdXN0b21IdHRwUGF0dGVybiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3VzdG9tSHR0cFBhdHRlcm5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBwYXRoOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3VzdG9tSHR0cFBhdHRlcm5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBwYXRoOiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==