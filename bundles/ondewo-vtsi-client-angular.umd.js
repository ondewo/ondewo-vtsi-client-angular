(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-grpc/common'), require('@ngx-grpc/core'), require('google-protobuf'), require('@ngx-grpc/well-known-types')) :
    typeof define === 'function' && define.amd ? define('@ondewo/vtsi-client-angular', ['exports', '@angular/core', '@ngx-grpc/common', '@ngx-grpc/core', 'google-protobuf', '@ngx-grpc/well-known-types'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ondewo = global.ondewo || {}, global.ondewo['vtsi-client-angular'] = {}), global.ng.core, global.common, global.i2, global.googleProtobuf, global.googleProtobuf003));
}(this, (function (exports, i0, common, i2, googleProtobuf, googleProtobuf003) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * Message implementation for ondewo.nlu.Context
     */
    exports.Context = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Context to deeply clone from
         */
        function Context(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.lifespanCount = _value.lifespanCount;
            (this.parameters = _value.parameters
                ? Object.keys(_value.parameters).reduce(function (r, k) {
                    var _a;
                    return (Object.assign(Object.assign({}, r), (_a = {}, _a[k] = _value.parameters[k]
                        ? new Context.Parameter(_value.parameters[k])
                        : undefined, _a)));
                }, {})
                : {}),
                (this.lifespanTime = _value.lifespanTime);
            Context.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Context.deserializeBinary = function (bytes) {
            var instance = new Context();
            Context.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Context.refineValues = function (_instance) {
            _instance.name = _instance.name || '';
            _instance.lifespanCount = _instance.lifespanCount || 0;
            _instance.parameters = _instance.parameters || {};
            _instance.lifespanTime = _instance.lifespanTime || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Context.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var msg_3 = {};
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Context.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.name) {
                _writer.writeString(1, _instance.name);
            }
            if (_instance.lifespanCount) {
                _writer.writeInt32(2, _instance.lifespanCount);
            }
            if (!!_instance.parameters) {
                var keys_3 = Object.keys(_instance.parameters);
                if (keys_3.length) {
                    var repeated_3 = keys_3
                        .map(function (key) { return ({ key: key, value: _instance.parameters[key] }); })
                        .reduce(function (r, v) { return __spread(r, [v]); }, []);
                    _writer.writeRepeatedMessage(3, repeated_3, Context.ParametersEntry.serializeBinaryToWriter);
                }
            }
            if (_instance.lifespanTime) {
                _writer.writeFloat(4, _instance.lifespanTime);
            }
        };
        Object.defineProperty(Context.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "lifespanCount", {
            get: function () {
                return this._lifespanCount;
            },
            set: function (value) {
                this._lifespanCount = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "parameters", {
            get: function () {
                return this._parameters;
            },
            set: function (value) {
                this._parameters = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "lifespanTime", {
            get: function () {
                return this._lifespanTime;
            },
            set: function (value) {
                this._lifespanTime = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Context.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Context.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Context.prototype.toObject = function () {
            var _this = this;
            return {
                name: this.name,
                lifespanCount: this.lifespanCount,
                parameters: this.parameters
                    ? Object.keys(this.parameters).reduce(function (r, k) {
                        var _a;
                        return (Object.assign(Object.assign({}, r), (_a = {}, _a[k] = _this.parameters[k]
                            ? _this.parameters[k].toObject()
                            : undefined, _a)));
                    }, {})
                    : {},
                lifespanTime: this.lifespanTime
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Context.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Context.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _this = this;
            return {
                name: this.name,
                lifespanCount: this.lifespanCount,
                parameters: this.parameters
                    ? Object.keys(this.parameters).reduce(function (r, k) {
                        var _a;
                        return (Object.assign(Object.assign({}, r), (_a = {}, _a[k] = _this.parameters[k] ? _this.parameters[k].toJSON() : null, _a)));
                    }, {})
                    : {},
                lifespanTime: this.lifespanTime
            };
        };
        return Context;
    }());
    exports.Context.id = 'ondewo.nlu.Context';
    (function (Context) {
        /**
         * Message implementation for ondewo.nlu.Parameter
         */
        var Parameter = /** @class */ (function () {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Parameter to deeply clone from
             */
            function Parameter(_value) {
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
            Parameter.deserializeBinary = function (bytes) {
                var instance = new Parameter();
                Parameter.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            Parameter.refineValues = function (_instance) {
                _instance.name = _instance.name || '';
                _instance.displayName = _instance.displayName || '';
                _instance.value = _instance.value || '';
                _instance.valueOriginal = _instance.valueOriginal || '';
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            Parameter.deserializeBinaryFromReader = function (_instance, _reader) {
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
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            Parameter.serializeBinaryToWriter = function (_instance, _writer) {
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
            };
            Object.defineProperty(Parameter.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    this._name = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "valueOriginal", {
                get: function () {
                    return this._valueOriginal;
                },
                set: function (value) {
                    this._valueOriginal = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            Parameter.prototype.serializeBinary = function () {
                var writer = new googleProtobuf.BinaryWriter();
                Parameter.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            Parameter.prototype.toObject = function () {
                return {
                    name: this.name,
                    displayName: this.displayName,
                    value: this.value,
                    valueOriginal: this.valueOriginal
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            Parameter.prototype.toJSON = function () {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            Parameter.prototype.toProtobufJSON = function (
            // @ts-ignore
            options) {
                return {
                    name: this.name,
                    displayName: this.displayName,
                    value: this.value,
                    valueOriginal: this.valueOriginal
                };
            };
            return Parameter;
        }());
        Parameter.id = 'ondewo.nlu.Parameter';
        Context.Parameter = Parameter;
        /**
         * Message implementation for ondewo.nlu.ParametersEntry
         */
        var ParametersEntry = /** @class */ (function () {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of ParametersEntry to deeply clone from
             */
            function ParametersEntry(_value) {
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
            ParametersEntry.deserializeBinary = function (bytes) {
                var instance = new ParametersEntry();
                ParametersEntry.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            ParametersEntry.refineValues = function (_instance) {
                _instance.key = _instance.key || '';
                _instance.value = _instance.value || undefined;
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            ParametersEntry.deserializeBinaryFromReader = function (_instance, _reader) {
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
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            ParametersEntry.serializeBinaryToWriter = function (_instance, _writer) {
                if (_instance.key) {
                    _writer.writeString(1, _instance.key);
                }
                if (_instance.value) {
                    _writer.writeMessage(2, _instance.value, Context.Parameter.serializeBinaryToWriter);
                }
            };
            Object.defineProperty(ParametersEntry.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ParametersEntry.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            ParametersEntry.prototype.serializeBinary = function () {
                var writer = new googleProtobuf.BinaryWriter();
                ParametersEntry.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            ParametersEntry.prototype.toObject = function () {
                return {
                    key: this.key,
                    value: this.value ? this.value.toObject() : undefined
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            ParametersEntry.prototype.toJSON = function () {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            ParametersEntry.prototype.toProtobufJSON = function (
            // @ts-ignore
            options) {
                return {
                    key: this.key,
                    value: this.value ? this.value.toProtobufJSON(options) : null
                };
            };
            return ParametersEntry;
        }());
        ParametersEntry.id = 'ondewo.nlu.ParametersEntry';
        Context.ParametersEntry = ParametersEntry;
    })(exports.Context || (exports.Context = {}));
    /**
     * Message implementation for ondewo.nlu.ListContextsRequest
     */
    var ListContextsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListContextsRequest to deeply clone from
         */
        function ListContextsRequest(_value) {
            _value = _value || {};
            this.parent = _value.parent;
            this.pageToken = _value.pageToken;
            ListContextsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListContextsRequest.deserializeBinary = function (bytes) {
            var instance = new ListContextsRequest();
            ListContextsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListContextsRequest.refineValues = function (_instance) {
            _instance.parent = _instance.parent || '';
            _instance.pageToken = _instance.pageToken || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListContextsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListContextsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.parent) {
                _writer.writeString(1, _instance.parent);
            }
            if (_instance.pageToken) {
                _writer.writeString(3, _instance.pageToken);
            }
        };
        Object.defineProperty(ListContextsRequest.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (value) {
                this._parent = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListContextsRequest.prototype, "pageToken", {
            get: function () {
                return this._pageToken;
            },
            set: function (value) {
                this._pageToken = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListContextsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListContextsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListContextsRequest.prototype.toObject = function () {
            return {
                parent: this.parent,
                pageToken: this.pageToken
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListContextsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListContextsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                parent: this.parent,
                pageToken: this.pageToken
            };
        };
        return ListContextsRequest;
    }());
    ListContextsRequest.id = 'ondewo.nlu.ListContextsRequest';
    /**
     * Message implementation for ondewo.nlu.ListContextsResponse
     */
    var ListContextsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListContextsResponse to deeply clone from
         */
        function ListContextsResponse(_value) {
            _value = _value || {};
            this.contexts = (_value.contexts || []).map(function (m) { return new exports.Context(m); });
            this.nextPageToken = _value.nextPageToken;
            ListContextsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ListContextsResponse.deserializeBinary = function (bytes) {
            var instance = new ListContextsResponse();
            ListContextsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ListContextsResponse.refineValues = function (_instance) {
            _instance.contexts = _instance.contexts || [];
            _instance.nextPageToken = _instance.nextPageToken || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ListContextsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new exports.Context();
                        _reader.readMessage(messageInitializer1, exports.Context.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ListContextsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.contexts && _instance.contexts.length) {
                _writer.writeRepeatedMessage(1, _instance.contexts, exports.Context.serializeBinaryToWriter);
            }
            if (_instance.nextPageToken) {
                _writer.writeString(2, _instance.nextPageToken);
            }
        };
        Object.defineProperty(ListContextsResponse.prototype, "contexts", {
            get: function () {
                return this._contexts;
            },
            set: function (value) {
                this._contexts = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListContextsResponse.prototype, "nextPageToken", {
            get: function () {
                return this._nextPageToken;
            },
            set: function (value) {
                this._nextPageToken = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ListContextsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ListContextsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ListContextsResponse.prototype.toObject = function () {
            return {
                contexts: (this.contexts || []).map(function (m) { return m.toObject(); }),
                nextPageToken: this.nextPageToken
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ListContextsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ListContextsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                contexts: (this.contexts || []).map(function (m) { return m.toProtobufJSON(options); }),
                nextPageToken: this.nextPageToken
            };
        };
        return ListContextsResponse;
    }());
    ListContextsResponse.id = 'ondewo.nlu.ListContextsResponse';
    /**
     * Message implementation for ondewo.nlu.GetContextRequest
     */
    var GetContextRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetContextRequest to deeply clone from
         */
        function GetContextRequest(_value) {
            _value = _value || {};
            this.name = _value.name;
            GetContextRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetContextRequest.deserializeBinary = function (bytes) {
            var instance = new GetContextRequest();
            GetContextRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetContextRequest.refineValues = function (_instance) {
            _instance.name = _instance.name || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetContextRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetContextRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.name) {
                _writer.writeString(1, _instance.name);
            }
        };
        Object.defineProperty(GetContextRequest.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetContextRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetContextRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetContextRequest.prototype.toObject = function () {
            return {
                name: this.name
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetContextRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetContextRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                name: this.name
            };
        };
        return GetContextRequest;
    }());
    GetContextRequest.id = 'ondewo.nlu.GetContextRequest';
    /**
     * Message implementation for ondewo.nlu.CreateContextRequest
     */
    var CreateContextRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateContextRequest to deeply clone from
         */
        function CreateContextRequest(_value) {
            _value = _value || {};
            this.parent = _value.parent;
            this.context = _value.context ? new exports.Context(_value.context) : undefined;
            CreateContextRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CreateContextRequest.deserializeBinary = function (bytes) {
            var instance = new CreateContextRequest();
            CreateContextRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CreateContextRequest.refineValues = function (_instance) {
            _instance.parent = _instance.parent || '';
            _instance.context = _instance.context || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CreateContextRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.parent = _reader.readString();
                        break;
                    case 2:
                        _instance.context = new exports.Context();
                        _reader.readMessage(_instance.context, exports.Context.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CreateContextRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CreateContextRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.parent) {
                _writer.writeString(1, _instance.parent);
            }
            if (_instance.context) {
                _writer.writeMessage(2, _instance.context, exports.Context.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(CreateContextRequest.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (value) {
                this._parent = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CreateContextRequest.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CreateContextRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CreateContextRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CreateContextRequest.prototype.toObject = function () {
            return {
                parent: this.parent,
                context: this.context ? this.context.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CreateContextRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CreateContextRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                parent: this.parent,
                context: this.context ? this.context.toProtobufJSON(options) : null
            };
        };
        return CreateContextRequest;
    }());
    CreateContextRequest.id = 'ondewo.nlu.CreateContextRequest';
    /**
     * Message implementation for ondewo.nlu.UpdateContextRequest
     */
    var UpdateContextRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UpdateContextRequest to deeply clone from
         */
        function UpdateContextRequest(_value) {
            _value = _value || {};
            this.context = _value.context ? new exports.Context(_value.context) : undefined;
            this.updateMask = _value.updateMask
                ? new googleProtobuf003.FieldMask(_value.updateMask)
                : undefined;
            UpdateContextRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        UpdateContextRequest.deserializeBinary = function (bytes) {
            var instance = new UpdateContextRequest();
            UpdateContextRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UpdateContextRequest.refineValues = function (_instance) {
            _instance.context = _instance.context || undefined;
            _instance.updateMask = _instance.updateMask || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UpdateContextRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.context = new exports.Context();
                        _reader.readMessage(_instance.context, exports.Context.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.updateMask = new googleProtobuf003.FieldMask();
                        _reader.readMessage(_instance.updateMask, googleProtobuf003.FieldMask.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UpdateContextRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UpdateContextRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.context) {
                _writer.writeMessage(1, _instance.context, exports.Context.serializeBinaryToWriter);
            }
            if (_instance.updateMask) {
                _writer.writeMessage(2, _instance.updateMask, googleProtobuf003.FieldMask.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(UpdateContextRequest.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateContextRequest.prototype, "updateMask", {
            get: function () {
                return this._updateMask;
            },
            set: function (value) {
                this._updateMask = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UpdateContextRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UpdateContextRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UpdateContextRequest.prototype.toObject = function () {
            return {
                context: this.context ? this.context.toObject() : undefined,
                updateMask: this.updateMask ? this.updateMask.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UpdateContextRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UpdateContextRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                context: this.context ? this.context.toProtobufJSON(options) : null,
                updateMask: this.updateMask
                    ? this.updateMask.toProtobufJSON(options)
                    : null
            };
        };
        return UpdateContextRequest;
    }());
    UpdateContextRequest.id = 'ondewo.nlu.UpdateContextRequest';
    /**
     * Message implementation for ondewo.nlu.DeleteContextRequest
     */
    var DeleteContextRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteContextRequest to deeply clone from
         */
        function DeleteContextRequest(_value) {
            _value = _value || {};
            this.name = _value.name;
            DeleteContextRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        DeleteContextRequest.deserializeBinary = function (bytes) {
            var instance = new DeleteContextRequest();
            DeleteContextRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        DeleteContextRequest.refineValues = function (_instance) {
            _instance.name = _instance.name || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        DeleteContextRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        DeleteContextRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.name) {
                _writer.writeString(1, _instance.name);
            }
        };
        Object.defineProperty(DeleteContextRequest.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        DeleteContextRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            DeleteContextRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        DeleteContextRequest.prototype.toObject = function () {
            return {
                name: this.name
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        DeleteContextRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        DeleteContextRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                name: this.name
            };
        };
        return DeleteContextRequest;
    }());
    DeleteContextRequest.id = 'ondewo.nlu.DeleteContextRequest';
    /**
     * Message implementation for ondewo.nlu.DeleteAllContextsRequest
     */
    var DeleteAllContextsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteAllContextsRequest to deeply clone from
         */
        function DeleteAllContextsRequest(_value) {
            _value = _value || {};
            this.parent = _value.parent;
            DeleteAllContextsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        DeleteAllContextsRequest.deserializeBinary = function (bytes) {
            var instance = new DeleteAllContextsRequest();
            DeleteAllContextsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        DeleteAllContextsRequest.refineValues = function (_instance) {
            _instance.parent = _instance.parent || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        DeleteAllContextsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        DeleteAllContextsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.parent) {
                _writer.writeString(1, _instance.parent);
            }
        };
        Object.defineProperty(DeleteAllContextsRequest.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (value) {
                this._parent = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        DeleteAllContextsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            DeleteAllContextsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        DeleteAllContextsRequest.prototype.toObject = function () {
            return {
                parent: this.parent
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        DeleteAllContextsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        DeleteAllContextsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                parent: this.parent
            };
        };
        return DeleteAllContextsRequest;
    }());
    DeleteAllContextsRequest.id = 'ondewo.nlu.DeleteAllContextsRequest';

    (function (Pcm) {
        Pcm[Pcm["PCM_16"] = 0] = "PCM_16";
        Pcm[Pcm["PCM_24"] = 1] = "PCM_24";
        Pcm[Pcm["PCM_32"] = 2] = "PCM_32";
        Pcm[Pcm["PCM_S8"] = 3] = "PCM_S8";
        Pcm[Pcm["PCM_U8"] = 4] = "PCM_U8";
        Pcm[Pcm["FLOAT"] = 5] = "FLOAT";
        Pcm[Pcm["DOUBLE"] = 6] = "DOUBLE";
    })(exports.Pcm || (exports.Pcm = {}));
    (function (AudioFormat) {
        AudioFormat[AudioFormat["wav"] = 0] = "wav";
        AudioFormat[AudioFormat["flac"] = 1] = "flac";
        AudioFormat[AudioFormat["caf"] = 2] = "caf";
        AudioFormat[AudioFormat["mp3"] = 3] = "mp3";
        AudioFormat[AudioFormat["aac"] = 4] = "aac";
        AudioFormat[AudioFormat["ogg"] = 5] = "ogg";
        AudioFormat[AudioFormat["wma"] = 6] = "wma";
    })(exports.AudioFormat || (exports.AudioFormat = {}));
    (function (CTCDecoding) {
        CTCDecoding[CTCDecoding["DEFAULT"] = 0] = "DEFAULT";
        CTCDecoding[CTCDecoding["GREEDY"] = 1] = "GREEDY";
        CTCDecoding[CTCDecoding["BEAM_SEARCH_WITH_LM"] = 2] = "BEAM_SEARCH_WITH_LM";
    })(exports.CTCDecoding || (exports.CTCDecoding = {}));
    /**
     * Message implementation for ondewo.vtsi.VoipManifest
     */
    var VoipManifest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoipManifest to deeply clone from
         */
        function VoipManifest(_value) {
            _value = _value || {};
            this.manifestId = _value.manifestId;
            this.contexts = (_value.contexts || []).map(function (m) { return new exports.Context(m); });
            this.callers = (_value.callers || []).map(function (m) { return new StartCallInstanceRequest(m); });
            VoipManifest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        VoipManifest.deserializeBinary = function (bytes) {
            var instance = new VoipManifest();
            VoipManifest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoipManifest.refineValues = function (_instance) {
            _instance.manifestId = _instance.manifestId || '';
            _instance.contexts = _instance.contexts || [];
            _instance.callers = _instance.callers || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoipManifest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.manifestId = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new exports.Context();
                        _reader.readMessage(messageInitializer2, exports.Context.deserializeBinaryFromReader);
                        (_instance.contexts = _instance.contexts || []).push(messageInitializer2);
                        break;
                    case 9:
                        var messageInitializer9 = new StartCallInstanceRequest();
                        _reader.readMessage(messageInitializer9, StartCallInstanceRequest.deserializeBinaryFromReader);
                        (_instance.callers = _instance.callers || []).push(messageInitializer9);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            VoipManifest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoipManifest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.manifestId) {
                _writer.writeString(1, _instance.manifestId);
            }
            if (_instance.contexts && _instance.contexts.length) {
                _writer.writeRepeatedMessage(2, _instance.contexts, exports.Context.serializeBinaryToWriter);
            }
            if (_instance.callers && _instance.callers.length) {
                _writer.writeRepeatedMessage(9, _instance.callers, StartCallInstanceRequest.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(VoipManifest.prototype, "manifestId", {
            get: function () {
                return this._manifestId;
            },
            set: function (value) {
                this._manifestId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipManifest.prototype, "contexts", {
            get: function () {
                return this._contexts;
            },
            set: function (value) {
                this._contexts = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipManifest.prototype, "callers", {
            get: function () {
                return this._callers;
            },
            set: function (value) {
                this._callers = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoipManifest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoipManifest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoipManifest.prototype.toObject = function () {
            return {
                manifestId: this.manifestId,
                contexts: (this.contexts || []).map(function (m) { return m.toObject(); }),
                callers: (this.callers || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoipManifest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoipManifest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                manifestId: this.manifestId,
                contexts: (this.contexts || []).map(function (m) { return m.toProtobufJSON(options); }),
                callers: (this.callers || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return VoipManifest;
    }());
    VoipManifest.id = 'ondewo.vtsi.VoipManifest';
    /**
     * Message implementation for ondewo.vtsi.ManifestRequest
     */
    var ManifestRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ManifestRequest to deeply clone from
         */
        function ManifestRequest(_value) {
            _value = _value || {};
            this.manifestId = _value.manifestId;
            ManifestRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ManifestRequest.deserializeBinary = function (bytes) {
            var instance = new ManifestRequest();
            ManifestRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ManifestRequest.refineValues = function (_instance) {
            _instance.manifestId = _instance.manifestId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ManifestRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ManifestRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.manifestId) {
                _writer.writeString(1, _instance.manifestId);
            }
        };
        Object.defineProperty(ManifestRequest.prototype, "manifestId", {
            get: function () {
                return this._manifestId;
            },
            set: function (value) {
                this._manifestId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ManifestRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ManifestRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ManifestRequest.prototype.toObject = function () {
            return {
                manifestId: this.manifestId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ManifestRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ManifestRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                manifestId: this.manifestId
            };
        };
        return ManifestRequest;
    }());
    ManifestRequest.id = 'ondewo.vtsi.ManifestRequest';
    /**
     * Message implementation for ondewo.vtsi.RunManifestResponse
     */
    var RunManifestResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RunManifestResponse to deeply clone from
         */
        function RunManifestResponse(_value) {
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
        RunManifestResponse.deserializeBinary = function (bytes) {
            var instance = new RunManifestResponse();
            RunManifestResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        RunManifestResponse.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.started = _instance.started || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        RunManifestResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        RunManifestResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, ManifestRequest.serializeBinaryToWriter);
            }
            if (_instance.started) {
                _writer.writeBool(2, _instance.started);
            }
        };
        Object.defineProperty(RunManifestResponse.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RunManifestResponse.prototype, "started", {
            get: function () {
                return this._started;
            },
            set: function (value) {
                this._started = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        RunManifestResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            RunManifestResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        RunManifestResponse.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                started: this.started
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        RunManifestResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        RunManifestResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                started: this.started
            };
        };
        return RunManifestResponse;
    }());
    RunManifestResponse.id = 'ondewo.vtsi.RunManifestResponse';
    /**
     * Message implementation for ondewo.vtsi.RemoveManifestResponse
     */
    var RemoveManifestResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RemoveManifestResponse to deeply clone from
         */
        function RemoveManifestResponse(_value) {
            _value = _value || {};
            this.request = _value.request
                ? new ManifestRequest(_value.request)
                : undefined;
            this.success = _value.success;
            this.callerResponses = (_value.callerResponses || []).map(function (m) { return new StopCallInstanceResponse(m); });
            RemoveManifestResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        RemoveManifestResponse.deserializeBinary = function (bytes) {
            var instance = new RemoveManifestResponse();
            RemoveManifestResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        RemoveManifestResponse.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.success = _instance.success || false;
            _instance.callerResponses = _instance.callerResponses || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        RemoveManifestResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer9 = new StopCallInstanceResponse();
                        _reader.readMessage(messageInitializer9, StopCallInstanceResponse.deserializeBinaryFromReader);
                        (_instance.callerResponses = _instance.callerResponses || []).push(messageInitializer9);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            RemoveManifestResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        RemoveManifestResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, ManifestRequest.serializeBinaryToWriter);
            }
            if (_instance.success) {
                _writer.writeBool(2, _instance.success);
            }
            if (_instance.callerResponses && _instance.callerResponses.length) {
                _writer.writeRepeatedMessage(9, _instance.callerResponses, StopCallInstanceResponse.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(RemoveManifestResponse.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RemoveManifestResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RemoveManifestResponse.prototype, "callerResponses", {
            get: function () {
                return this._callerResponses;
            },
            set: function (value) {
                this._callerResponses = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        RemoveManifestResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            RemoveManifestResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        RemoveManifestResponse.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                success: this.success,
                callerResponses: (this.callerResponses || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        RemoveManifestResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        RemoveManifestResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                success: this.success,
                callerResponses: (this.callerResponses || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return RemoveManifestResponse;
    }());
    RemoveManifestResponse.id = 'ondewo.vtsi.RemoveManifestResponse';
    /**
     * Message implementation for ondewo.vtsi.BaseServiceConfig
     */
    var BaseServiceConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of BaseServiceConfig to deeply clone from
         */
        function BaseServiceConfig(_value) {
            _value = _value || {};
            this.host = _value.host;
            this.port = _value.port;
            this.grpcCert = _value.grpcCert;
            BaseServiceConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        BaseServiceConfig.deserializeBinary = function (bytes) {
            var instance = new BaseServiceConfig();
            BaseServiceConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        BaseServiceConfig.refineValues = function (_instance) {
            _instance.host = _instance.host || '';
            _instance.port = _instance.port || 0;
            _instance.grpcCert = _instance.grpcCert || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        BaseServiceConfig.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        _instance.grpcCert = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            BaseServiceConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        BaseServiceConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.host) {
                _writer.writeString(1, _instance.host);
            }
            if (_instance.port) {
                _writer.writeInt32(2, _instance.port);
            }
            if (_instance.grpcCert) {
                _writer.writeString(3, _instance.grpcCert);
            }
        };
        Object.defineProperty(BaseServiceConfig.prototype, "host", {
            get: function () {
                return this._host;
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseServiceConfig.prototype, "port", {
            get: function () {
                return this._port;
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseServiceConfig.prototype, "grpcCert", {
            get: function () {
                return this._grpcCert;
            },
            set: function (value) {
                this._grpcCert = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        BaseServiceConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            BaseServiceConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        BaseServiceConfig.prototype.toObject = function () {
            return {
                host: this.host,
                port: this.port,
                grpcCert: this.grpcCert
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        BaseServiceConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        BaseServiceConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                host: this.host,
                port: this.port,
                grpcCert: this.grpcCert
            };
        };
        return BaseServiceConfig;
    }());
    BaseServiceConfig.id = 'ondewo.vtsi.BaseServiceConfig';
    /**
     * Message implementation for ondewo.vtsi.Credentials
     */
    var Credentials = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Credentials to deeply clone from
         */
        function Credentials(_value) {
            _value = _value || {};
            this.accountName = _value.accountName;
            this.password = _value.password;
            Credentials.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Credentials.deserializeBinary = function (bytes) {
            var instance = new Credentials();
            Credentials.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Credentials.refineValues = function (_instance) {
            _instance.accountName = _instance.accountName || '';
            _instance.password = _instance.password || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Credentials.deserializeBinaryFromReader = function (_instance, _reader) {
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
            Credentials.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Credentials.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.accountName) {
                _writer.writeString(1, _instance.accountName);
            }
            if (_instance.password) {
                _writer.writeString(2, _instance.password);
            }
        };
        Object.defineProperty(Credentials.prototype, "accountName", {
            get: function () {
                return this._accountName;
            },
            set: function (value) {
                this._accountName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Credentials.prototype, "password", {
            get: function () {
                return this._password;
            },
            set: function (value) {
                this._password = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Credentials.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Credentials.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Credentials.prototype.toObject = function () {
            return {
                accountName: this.accountName,
                password: this.password
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Credentials.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Credentials.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                accountName: this.accountName,
                password: this.password
            };
        };
        return Credentials;
    }());
    Credentials.id = 'ondewo.vtsi.Credentials';
    /**
     * Message implementation for ondewo.vtsi.NLUConfig
     */
    exports.NLUConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of NLUConfig to deeply clone from
         */
        function NLUConfig(_value) {
            this._authentication = NLUConfig.AuthenticationCase.none;
            _value = _value || {};
            this.baseConfig = _value.baseConfig
                ? new BaseServiceConfig(_value.baseConfig)
                : undefined;
            this.credentials = _value.credentials
                ? new Credentials(_value.credentials)
                : undefined;
            this.authToken = _value.authToken;
            this.languageCode = _value.languageCode;
            this.projectId = _value.projectId;
            this.initialIntent = _value.initialIntent;
            this.contexts = (_value.contexts || []).map(function (m) { return new exports.Context(m); });
            NLUConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        NLUConfig.deserializeBinary = function (bytes) {
            var instance = new NLUConfig();
            NLUConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        NLUConfig.refineValues = function (_instance) {
            _instance.baseConfig = _instance.baseConfig || undefined;
            _instance.languageCode = _instance.languageCode || '';
            _instance.projectId = _instance.projectId || '';
            _instance.initialIntent = _instance.initialIntent || '';
            _instance.contexts = _instance.contexts || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        NLUConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.baseConfig = new BaseServiceConfig();
                        _reader.readMessage(_instance.baseConfig, BaseServiceConfig.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.credentials = new Credentials();
                        _reader.readMessage(_instance.credentials, Credentials.deserializeBinaryFromReader);
                        break;
                    case 3:
                        _instance.authToken = _reader.readString();
                        break;
                    case 4:
                        _instance.languageCode = _reader.readString();
                        break;
                    case 5:
                        _instance.projectId = _reader.readString();
                        break;
                    case 6:
                        _instance.initialIntent = _reader.readString();
                        break;
                    case 7:
                        var messageInitializer7 = new exports.Context();
                        _reader.readMessage(messageInitializer7, exports.Context.deserializeBinaryFromReader);
                        (_instance.contexts = _instance.contexts || []).push(messageInitializer7);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            NLUConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        NLUConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.baseConfig) {
                _writer.writeMessage(1, _instance.baseConfig, BaseServiceConfig.serializeBinaryToWriter);
            }
            if (_instance.credentials) {
                _writer.writeMessage(2, _instance.credentials, Credentials.serializeBinaryToWriter);
            }
            if (_instance.authToken || _instance.authToken === '') {
                _writer.writeString(3, _instance.authToken);
            }
            if (_instance.languageCode) {
                _writer.writeString(4, _instance.languageCode);
            }
            if (_instance.projectId) {
                _writer.writeString(5, _instance.projectId);
            }
            if (_instance.initialIntent) {
                _writer.writeString(6, _instance.initialIntent);
            }
            if (_instance.contexts && _instance.contexts.length) {
                _writer.writeRepeatedMessage(7, _instance.contexts, exports.Context.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(NLUConfig.prototype, "baseConfig", {
            get: function () {
                return this._baseConfig;
            },
            set: function (value) {
                this._baseConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "credentials", {
            get: function () {
                return this._credentials;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._authToken = undefined;
                    this._authentication = NLUConfig.AuthenticationCase.credentials;
                }
                this._credentials = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "authToken", {
            get: function () {
                return this._authToken;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._credentials = undefined;
                    this._authentication = NLUConfig.AuthenticationCase.authToken;
                }
                this._authToken = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "languageCode", {
            get: function () {
                return this._languageCode;
            },
            set: function (value) {
                this._languageCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "projectId", {
            get: function () {
                return this._projectId;
            },
            set: function (value) {
                this._projectId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "initialIntent", {
            get: function () {
                return this._initialIntent;
            },
            set: function (value) {
                this._initialIntent = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "contexts", {
            get: function () {
                return this._contexts;
            },
            set: function (value) {
                this._contexts = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NLUConfig.prototype, "authentication", {
            get: function () {
                return this._authentication;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        NLUConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            NLUConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        NLUConfig.prototype.toObject = function () {
            return {
                baseConfig: this.baseConfig ? this.baseConfig.toObject() : undefined,
                credentials: this.credentials ? this.credentials.toObject() : undefined,
                authToken: this.authToken,
                languageCode: this.languageCode,
                projectId: this.projectId,
                initialIntent: this.initialIntent,
                contexts: (this.contexts || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        NLUConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        NLUConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a;
            return {
                baseConfig: this.baseConfig
                    ? this.baseConfig.toProtobufJSON(options)
                    : null,
                credentials: this.credentials
                    ? this.credentials.toProtobufJSON(options)
                    : null,
                authToken: (_a = this.authToken) !== null && _a !== void 0 ? _a : null,
                languageCode: this.languageCode,
                projectId: this.projectId,
                initialIntent: this.initialIntent,
                contexts: (this.contexts || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return NLUConfig;
    }());
    exports.NLUConfig.id = 'ondewo.vtsi.NLUConfig';
    (function (NLUConfig) {
        var AuthenticationCase;
        (function (AuthenticationCase) {
            AuthenticationCase[AuthenticationCase["none"] = 0] = "none";
            AuthenticationCase[AuthenticationCase["credentials"] = 1] = "credentials";
            AuthenticationCase[AuthenticationCase["authToken"] = 2] = "authToken";
        })(AuthenticationCase = NLUConfig.AuthenticationCase || (NLUConfig.AuthenticationCase = {}));
    })(exports.NLUConfig || (exports.NLUConfig = {}));
    /**
     * Message implementation for ondewo.vtsi.T2SConfig
     */
    var T2SConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of T2SConfig to deeply clone from
         */
        function T2SConfig(_value) {
            _value = _value || {};
            this.baseConfig = _value.baseConfig
                ? new BaseServiceConfig(_value.baseConfig)
                : undefined;
            this.t2sConfig = _value.t2sConfig
                ? new exports.RequestConfig(_value.t2sConfig)
                : undefined;
            T2SConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        T2SConfig.deserializeBinary = function (bytes) {
            var instance = new T2SConfig();
            T2SConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        T2SConfig.refineValues = function (_instance) {
            _instance.baseConfig = _instance.baseConfig || undefined;
            _instance.t2sConfig = _instance.t2sConfig || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        T2SConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.baseConfig = new BaseServiceConfig();
                        _reader.readMessage(_instance.baseConfig, BaseServiceConfig.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.t2sConfig = new exports.RequestConfig();
                        _reader.readMessage(_instance.t2sConfig, exports.RequestConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            T2SConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        T2SConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.baseConfig) {
                _writer.writeMessage(1, _instance.baseConfig, BaseServiceConfig.serializeBinaryToWriter);
            }
            if (_instance.t2sConfig) {
                _writer.writeMessage(2, _instance.t2sConfig, exports.RequestConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(T2SConfig.prototype, "baseConfig", {
            get: function () {
                return this._baseConfig;
            },
            set: function (value) {
                this._baseConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(T2SConfig.prototype, "t2sConfig", {
            get: function () {
                return this._t2sConfig;
            },
            set: function (value) {
                this._t2sConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        T2SConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            T2SConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        T2SConfig.prototype.toObject = function () {
            return {
                baseConfig: this.baseConfig ? this.baseConfig.toObject() : undefined,
                t2sConfig: this.t2sConfig ? this.t2sConfig.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        T2SConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        T2SConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                baseConfig: this.baseConfig
                    ? this.baseConfig.toProtobufJSON(options)
                    : null,
                t2sConfig: this.t2sConfig ? this.t2sConfig.toProtobufJSON(options) : null
            };
        };
        return T2SConfig;
    }());
    T2SConfig.id = 'ondewo.vtsi.T2SConfig';
    /**
     * Message implementation for ondewo.vtsi.RequestConfig
     */
    exports.RequestConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RequestConfig to deeply clone from
         */
        function RequestConfig(_value) {
            this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.none;
            this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.none;
            this._oneofSampleRate = RequestConfig.OneofSampleRateCase.none;
            this._oneofPcm = RequestConfig.OneofPcmCase.none;
            this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.none;
            this._oneofUseCache = RequestConfig.OneofUseCacheCase.none;
            _value = _value || {};
            this.t2sPipelineId = _value.t2sPipelineId;
            this.lengthScale = _value.lengthScale;
            this.noiseScale = _value.noiseScale;
            this.sampleRate = _value.sampleRate;
            this.pcm = _value.pcm;
            this.audioFormat = _value.audioFormat;
            this.useCache = _value.useCache;
            RequestConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        RequestConfig.deserializeBinary = function (bytes) {
            var instance = new RequestConfig();
            RequestConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        RequestConfig.refineValues = function (_instance) {
            _instance.t2sPipelineId = _instance.t2sPipelineId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        RequestConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.t2sPipelineId = _reader.readString();
                        break;
                    case 2:
                        _instance.lengthScale = _reader.readFloat();
                        break;
                    case 3:
                        _instance.noiseScale = _reader.readFloat();
                        break;
                    case 4:
                        _instance.sampleRate = _reader.readInt32();
                        break;
                    case 5:
                        _instance.pcm = _reader.readEnum();
                        break;
                    case 6:
                        _instance.audioFormat = _reader.readEnum();
                        break;
                    case 7:
                        _instance.useCache = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            RequestConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        RequestConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.t2sPipelineId) {
                _writer.writeString(1, _instance.t2sPipelineId);
            }
            if (_instance.lengthScale || _instance.lengthScale === 0) {
                _writer.writeFloat(2, _instance.lengthScale);
            }
            if (_instance.noiseScale || _instance.noiseScale === 0) {
                _writer.writeFloat(3, _instance.noiseScale);
            }
            if (_instance.sampleRate || _instance.sampleRate === 0) {
                _writer.writeInt32(4, _instance.sampleRate);
            }
            if (_instance.pcm || _instance.pcm === 0) {
                _writer.writeEnum(5, _instance.pcm);
            }
            if (_instance.audioFormat || _instance.audioFormat === 0) {
                _writer.writeEnum(6, _instance.audioFormat);
            }
            if (_instance.useCache || _instance.useCache === false) {
                _writer.writeBool(7, _instance.useCache);
            }
        };
        Object.defineProperty(RequestConfig.prototype, "t2sPipelineId", {
            get: function () {
                return this._t2sPipelineId;
            },
            set: function (value) {
                this._t2sPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "lengthScale", {
            get: function () {
                return this._lengthScale;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofLengthScale = RequestConfig.OneofLengthScaleCase.lengthScale;
                }
                this._lengthScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "noiseScale", {
            get: function () {
                return this._noiseScale;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofNoiseScale = RequestConfig.OneofNoiseScaleCase.noiseScale;
                }
                this._noiseScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "sampleRate", {
            get: function () {
                return this._sampleRate;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofSampleRate = RequestConfig.OneofSampleRateCase.sampleRate;
                }
                this._sampleRate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "pcm", {
            get: function () {
                return this._pcm;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofPcm = RequestConfig.OneofPcmCase.pcm;
                }
                this._pcm = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "audioFormat", {
            get: function () {
                return this._audioFormat;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofAudioFormat = RequestConfig.OneofAudioFormatCase.audioFormat;
                }
                this._audioFormat = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "useCache", {
            get: function () {
                return this._useCache;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofUseCache = RequestConfig.OneofUseCacheCase.useCache;
                }
                this._useCache = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofLengthScale", {
            get: function () {
                return this._oneofLengthScale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofNoiseScale", {
            get: function () {
                return this._oneofNoiseScale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofSampleRate", {
            get: function () {
                return this._oneofSampleRate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofPcm", {
            get: function () {
                return this._oneofPcm;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofAudioFormat", {
            get: function () {
                return this._oneofAudioFormat;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestConfig.prototype, "oneofUseCache", {
            get: function () {
                return this._oneofUseCache;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        RequestConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            RequestConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        RequestConfig.prototype.toObject = function () {
            return {
                t2sPipelineId: this.t2sPipelineId,
                lengthScale: this.lengthScale,
                noiseScale: this.noiseScale,
                sampleRate: this.sampleRate,
                pcm: this.pcm,
                audioFormat: this.audioFormat,
                useCache: this.useCache
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        RequestConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        RequestConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b, _c, _d, _e;
            return {
                t2sPipelineId: this.t2sPipelineId,
                lengthScale: (_a = this.lengthScale) !== null && _a !== void 0 ? _a : null,
                noiseScale: (_b = this.noiseScale) !== null && _b !== void 0 ? _b : null,
                sampleRate: (_c = this.sampleRate) !== null && _c !== void 0 ? _c : null,
                pcm: this.pcm === undefined ? null : exports.Pcm[(_d = this.pcm) !== null && _d !== void 0 ? _d : 0],
                audioFormat: this.audioFormat === undefined
                    ? null
                    : exports.AudioFormat[(_e = this.audioFormat) !== null && _e !== void 0 ? _e : 0],
                useCache: this.useCache
            };
        };
        return RequestConfig;
    }());
    exports.RequestConfig.id = 'ondewo.vtsi.RequestConfig';
    (function (RequestConfig) {
        var OneofLengthScaleCase;
        (function (OneofLengthScaleCase) {
            OneofLengthScaleCase[OneofLengthScaleCase["none"] = 0] = "none";
            OneofLengthScaleCase[OneofLengthScaleCase["lengthScale"] = 1] = "lengthScale";
        })(OneofLengthScaleCase = RequestConfig.OneofLengthScaleCase || (RequestConfig.OneofLengthScaleCase = {}));
        var OneofNoiseScaleCase;
        (function (OneofNoiseScaleCase) {
            OneofNoiseScaleCase[OneofNoiseScaleCase["none"] = 0] = "none";
            OneofNoiseScaleCase[OneofNoiseScaleCase["noiseScale"] = 1] = "noiseScale";
        })(OneofNoiseScaleCase = RequestConfig.OneofNoiseScaleCase || (RequestConfig.OneofNoiseScaleCase = {}));
        var OneofSampleRateCase;
        (function (OneofSampleRateCase) {
            OneofSampleRateCase[OneofSampleRateCase["none"] = 0] = "none";
            OneofSampleRateCase[OneofSampleRateCase["sampleRate"] = 1] = "sampleRate";
        })(OneofSampleRateCase = RequestConfig.OneofSampleRateCase || (RequestConfig.OneofSampleRateCase = {}));
        var OneofPcmCase;
        (function (OneofPcmCase) {
            OneofPcmCase[OneofPcmCase["none"] = 0] = "none";
            OneofPcmCase[OneofPcmCase["pcm"] = 1] = "pcm";
        })(OneofPcmCase = RequestConfig.OneofPcmCase || (RequestConfig.OneofPcmCase = {}));
        var OneofAudioFormatCase;
        (function (OneofAudioFormatCase) {
            OneofAudioFormatCase[OneofAudioFormatCase["none"] = 0] = "none";
            OneofAudioFormatCase[OneofAudioFormatCase["audioFormat"] = 1] = "audioFormat";
        })(OneofAudioFormatCase = RequestConfig.OneofAudioFormatCase || (RequestConfig.OneofAudioFormatCase = {}));
        var OneofUseCacheCase;
        (function (OneofUseCacheCase) {
            OneofUseCacheCase[OneofUseCacheCase["none"] = 0] = "none";
            OneofUseCacheCase[OneofUseCacheCase["useCache"] = 1] = "useCache";
        })(OneofUseCacheCase = RequestConfig.OneofUseCacheCase || (RequestConfig.OneofUseCacheCase = {}));
    })(exports.RequestConfig || (exports.RequestConfig = {}));
    /**
     * Message implementation for ondewo.vtsi.S2TConfig
     */
    var S2TConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of S2TConfig to deeply clone from
         */
        function S2TConfig(_value) {
            _value = _value || {};
            this.baseConfig = _value.baseConfig
                ? new BaseServiceConfig(_value.baseConfig)
                : undefined;
            this.s2tConfig = _value.s2tConfig
                ? new exports.TranscribeRequestConfig(_value.s2tConfig)
                : undefined;
            S2TConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        S2TConfig.deserializeBinary = function (bytes) {
            var instance = new S2TConfig();
            S2TConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        S2TConfig.refineValues = function (_instance) {
            _instance.baseConfig = _instance.baseConfig || undefined;
            _instance.s2tConfig = _instance.s2tConfig || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        S2TConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.baseConfig = new BaseServiceConfig();
                        _reader.readMessage(_instance.baseConfig, BaseServiceConfig.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.s2tConfig = new exports.TranscribeRequestConfig();
                        _reader.readMessage(_instance.s2tConfig, exports.TranscribeRequestConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            S2TConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        S2TConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.baseConfig) {
                _writer.writeMessage(1, _instance.baseConfig, BaseServiceConfig.serializeBinaryToWriter);
            }
            if (_instance.s2tConfig) {
                _writer.writeMessage(2, _instance.s2tConfig, exports.TranscribeRequestConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(S2TConfig.prototype, "baseConfig", {
            get: function () {
                return this._baseConfig;
            },
            set: function (value) {
                this._baseConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(S2TConfig.prototype, "s2tConfig", {
            get: function () {
                return this._s2tConfig;
            },
            set: function (value) {
                this._s2tConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        S2TConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            S2TConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        S2TConfig.prototype.toObject = function () {
            return {
                baseConfig: this.baseConfig ? this.baseConfig.toObject() : undefined,
                s2tConfig: this.s2tConfig ? this.s2tConfig.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        S2TConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        S2TConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                baseConfig: this.baseConfig
                    ? this.baseConfig.toProtobufJSON(options)
                    : null,
                s2tConfig: this.s2tConfig ? this.s2tConfig.toProtobufJSON(options) : null
            };
        };
        return S2TConfig;
    }());
    S2TConfig.id = 'ondewo.vtsi.S2TConfig';
    /**
     * Message implementation for ondewo.vtsi.TranscribeRequestConfig
     */
    exports.TranscribeRequestConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
         */
        function TranscribeRequestConfig(_value) {
            this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.none;
            this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.none;
            this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.none;
            this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.none;
            this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.none;
            _value = _value || {};
            this.s2tPipelineId = _value.s2tPipelineId;
            this.ctcDecoding = _value.ctcDecoding;
            this.languageModelName = _value.languageModelName;
            this.postProcessing = _value.postProcessing
                ? new PostProcessingOptions(_value.postProcessing)
                : undefined;
            this.utteranceDetection = _value.utteranceDetection
                ? new exports.UtteranceDetectionOptions(_value.utteranceDetection)
                : undefined;
            this.pyannote = _value.pyannote ? new exports.Pyannote(_value.pyannote) : undefined;
            this.matchbox = _value.matchbox ? new Matchbox(_value.matchbox) : undefined;
            this.returnOptions = _value.returnOptions
                ? new TranscriptionReturnOptions(_value.returnOptions)
                : undefined;
            TranscribeRequestConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        TranscribeRequestConfig.deserializeBinary = function (bytes) {
            var instance = new TranscribeRequestConfig();
            TranscribeRequestConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscribeRequestConfig.refineValues = function (_instance) {
            _instance.s2tPipelineId = _instance.s2tPipelineId || '';
            _instance.ctcDecoding = _instance.ctcDecoding || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscribeRequestConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.s2tPipelineId = _reader.readString();
                        break;
                    case 2:
                        _instance.ctcDecoding = _reader.readEnum();
                        break;
                    case 3:
                        _instance.languageModelName = _reader.readString();
                        break;
                    case 4:
                        _instance.postProcessing = new PostProcessingOptions();
                        _reader.readMessage(_instance.postProcessing, PostProcessingOptions.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.utteranceDetection = new exports.UtteranceDetectionOptions();
                        _reader.readMessage(_instance.utteranceDetection, exports.UtteranceDetectionOptions.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.pyannote = new exports.Pyannote();
                        _reader.readMessage(_instance.pyannote, exports.Pyannote.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.matchbox = new Matchbox();
                        _reader.readMessage(_instance.matchbox, Matchbox.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.returnOptions = new TranscriptionReturnOptions();
                        _reader.readMessage(_instance.returnOptions, TranscriptionReturnOptions.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TranscribeRequestConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscribeRequestConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.s2tPipelineId) {
                _writer.writeString(1, _instance.s2tPipelineId);
            }
            if (_instance.ctcDecoding) {
                _writer.writeEnum(2, _instance.ctcDecoding);
            }
            if (_instance.languageModelName || _instance.languageModelName === '') {
                _writer.writeString(3, _instance.languageModelName);
            }
            if (_instance.postProcessing) {
                _writer.writeMessage(4, _instance.postProcessing, PostProcessingOptions.serializeBinaryToWriter);
            }
            if (_instance.utteranceDetection) {
                _writer.writeMessage(5, _instance.utteranceDetection, exports.UtteranceDetectionOptions.serializeBinaryToWriter);
            }
            if (_instance.pyannote) {
                _writer.writeMessage(6, _instance.pyannote, exports.Pyannote.serializeBinaryToWriter);
            }
            if (_instance.matchbox) {
                _writer.writeMessage(7, _instance.matchbox, Matchbox.serializeBinaryToWriter);
            }
            if (_instance.returnOptions) {
                _writer.writeMessage(8, _instance.returnOptions, TranscriptionReturnOptions.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(TranscribeRequestConfig.prototype, "s2tPipelineId", {
            get: function () {
                return this._s2tPipelineId;
            },
            set: function (value) {
                this._s2tPipelineId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "ctcDecoding", {
            get: function () {
                return this._ctcDecoding;
            },
            set: function (value) {
                this._ctcDecoding = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "languageModelName", {
            get: function () {
                return this._languageModelName;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofLanguageModelName =
                        TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
                }
                this._languageModelName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "postProcessing", {
            get: function () {
                return this._postProcessing;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofPostProcessing =
                        TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
                }
                this._postProcessing = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "utteranceDetection", {
            get: function () {
                return this._utteranceDetection;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofUtteranceDetection =
                        TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
                }
                this._utteranceDetection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "pyannote", {
            get: function () {
                return this._pyannote;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._matchbox = undefined;
                    this._voiceActivityDetection =
                        TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
                }
                this._pyannote = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "matchbox", {
            get: function () {
                return this._matchbox;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._pyannote = undefined;
                    this._voiceActivityDetection =
                        TranscribeRequestConfig.VoiceActivityDetectionCase.matchbox;
                }
                this._matchbox = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "returnOptions", {
            get: function () {
                return this._returnOptions;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofReturnOptions =
                        TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
                }
                this._returnOptions = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "oneofLanguageModelName", {
            get: function () {
                return this._oneofLanguageModelName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "oneofPostProcessing", {
            get: function () {
                return this._oneofPostProcessing;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "oneofUtteranceDetection", {
            get: function () {
                return this._oneofUtteranceDetection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "voiceActivityDetection", {
            get: function () {
                return this._voiceActivityDetection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscribeRequestConfig.prototype, "oneofReturnOptions", {
            get: function () {
                return this._oneofReturnOptions;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscribeRequestConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscribeRequestConfig.prototype.toObject = function () {
            return {
                s2tPipelineId: this.s2tPipelineId,
                ctcDecoding: this.ctcDecoding,
                languageModelName: this.languageModelName,
                postProcessing: this.postProcessing
                    ? this.postProcessing.toObject()
                    : undefined,
                utteranceDetection: this.utteranceDetection
                    ? this.utteranceDetection.toObject()
                    : undefined,
                pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
                matchbox: this.matchbox ? this.matchbox.toObject() : undefined,
                returnOptions: this.returnOptions
                    ? this.returnOptions.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscribeRequestConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscribeRequestConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b;
            return {
                s2tPipelineId: this.s2tPipelineId,
                ctcDecoding: exports.CTCDecoding[(_a = this.ctcDecoding) !== null && _a !== void 0 ? _a : 0],
                languageModelName: (_b = this.languageModelName) !== null && _b !== void 0 ? _b : null,
                postProcessing: this.postProcessing
                    ? this.postProcessing.toProtobufJSON(options)
                    : null,
                utteranceDetection: this.utteranceDetection
                    ? this.utteranceDetection.toProtobufJSON(options)
                    : null,
                pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
                matchbox: this.matchbox ? this.matchbox.toProtobufJSON(options) : null,
                returnOptions: this.returnOptions
                    ? this.returnOptions.toProtobufJSON(options)
                    : null
            };
        };
        return TranscribeRequestConfig;
    }());
    exports.TranscribeRequestConfig.id = 'ondewo.vtsi.TranscribeRequestConfig';
    (function (TranscribeRequestConfig) {
        var OneofLanguageModelNameCase;
        (function (OneofLanguageModelNameCase) {
            OneofLanguageModelNameCase[OneofLanguageModelNameCase["none"] = 0] = "none";
            OneofLanguageModelNameCase[OneofLanguageModelNameCase["languageModelName"] = 1] = "languageModelName";
        })(OneofLanguageModelNameCase = TranscribeRequestConfig.OneofLanguageModelNameCase || (TranscribeRequestConfig.OneofLanguageModelNameCase = {}));
        var OneofPostProcessingCase;
        (function (OneofPostProcessingCase) {
            OneofPostProcessingCase[OneofPostProcessingCase["none"] = 0] = "none";
            OneofPostProcessingCase[OneofPostProcessingCase["postProcessing"] = 1] = "postProcessing";
        })(OneofPostProcessingCase = TranscribeRequestConfig.OneofPostProcessingCase || (TranscribeRequestConfig.OneofPostProcessingCase = {}));
        var OneofUtteranceDetectionCase;
        (function (OneofUtteranceDetectionCase) {
            OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["none"] = 0] = "none";
            OneofUtteranceDetectionCase[OneofUtteranceDetectionCase["utteranceDetection"] = 1] = "utteranceDetection";
        })(OneofUtteranceDetectionCase = TranscribeRequestConfig.OneofUtteranceDetectionCase || (TranscribeRequestConfig.OneofUtteranceDetectionCase = {}));
        var VoiceActivityDetectionCase;
        (function (VoiceActivityDetectionCase) {
            VoiceActivityDetectionCase[VoiceActivityDetectionCase["none"] = 0] = "none";
            VoiceActivityDetectionCase[VoiceActivityDetectionCase["pyannote"] = 1] = "pyannote";
            VoiceActivityDetectionCase[VoiceActivityDetectionCase["matchbox"] = 2] = "matchbox";
        })(VoiceActivityDetectionCase = TranscribeRequestConfig.VoiceActivityDetectionCase || (TranscribeRequestConfig.VoiceActivityDetectionCase = {}));
        var OneofReturnOptionsCase;
        (function (OneofReturnOptionsCase) {
            OneofReturnOptionsCase[OneofReturnOptionsCase["none"] = 0] = "none";
            OneofReturnOptionsCase[OneofReturnOptionsCase["returnOptions"] = 1] = "returnOptions";
        })(OneofReturnOptionsCase = TranscribeRequestConfig.OneofReturnOptionsCase || (TranscribeRequestConfig.OneofReturnOptionsCase = {}));
    })(exports.TranscribeRequestConfig || (exports.TranscribeRequestConfig = {}));
    /**
     * Message implementation for ondewo.vtsi.Pyannote
     */
    exports.Pyannote = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Pyannote to deeply clone from
         */
        function Pyannote(_value) {
            this._oneofLogScale = Pyannote.OneofLogScaleCase.none;
            _value = _value || {};
            this.modelPath = _value.modelPath;
            this.minAudioSize = _value.minAudioSize;
            this.offset = _value.offset;
            this.onset = _value.onset;
            this.logScale = _value.logScale;
            this.minDurationOff = _value.minDurationOff;
            this.minDurationOn = _value.minDurationOn;
            Pyannote.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Pyannote.deserializeBinary = function (bytes) {
            var instance = new Pyannote();
            Pyannote.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Pyannote.refineValues = function (_instance) {
            _instance.modelPath = _instance.modelPath || '';
            _instance.minAudioSize = _instance.minAudioSize || '0';
            _instance.offset = _instance.offset || 0;
            _instance.onset = _instance.onset || 0;
            _instance.minDurationOff = _instance.minDurationOff || 0;
            _instance.minDurationOn = _instance.minDurationOn || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Pyannote.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.modelPath = _reader.readString();
                        break;
                    case 2:
                        _instance.minAudioSize = _reader.readInt64String();
                        break;
                    case 3:
                        _instance.offset = _reader.readFloat();
                        break;
                    case 4:
                        _instance.onset = _reader.readFloat();
                        break;
                    case 5:
                        _instance.logScale = _reader.readBool();
                        break;
                    case 6:
                        _instance.minDurationOff = _reader.readFloat();
                        break;
                    case 7:
                        _instance.minDurationOn = _reader.readFloat();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Pyannote.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Pyannote.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.modelPath) {
                _writer.writeString(1, _instance.modelPath);
            }
            if (_instance.minAudioSize) {
                _writer.writeInt64String(2, _instance.minAudioSize);
            }
            if (_instance.offset) {
                _writer.writeFloat(3, _instance.offset);
            }
            if (_instance.onset) {
                _writer.writeFloat(4, _instance.onset);
            }
            if (_instance.logScale || _instance.logScale === false) {
                _writer.writeBool(5, _instance.logScale);
            }
            if (_instance.minDurationOff) {
                _writer.writeFloat(6, _instance.minDurationOff);
            }
            if (_instance.minDurationOn) {
                _writer.writeFloat(7, _instance.minDurationOn);
            }
        };
        Object.defineProperty(Pyannote.prototype, "modelPath", {
            get: function () {
                return this._modelPath;
            },
            set: function (value) {
                this._modelPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minAudioSize", {
            get: function () {
                return this._minAudioSize;
            },
            set: function (value) {
                this._minAudioSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "offset", {
            get: function () {
                return this._offset;
            },
            set: function (value) {
                this._offset = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "onset", {
            get: function () {
                return this._onset;
            },
            set: function (value) {
                this._onset = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "logScale", {
            get: function () {
                return this._logScale;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofLogScale = Pyannote.OneofLogScaleCase.logScale;
                }
                this._logScale = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minDurationOff", {
            get: function () {
                return this._minDurationOff;
            },
            set: function (value) {
                this._minDurationOff = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "minDurationOn", {
            get: function () {
                return this._minDurationOn;
            },
            set: function (value) {
                this._minDurationOn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pyannote.prototype, "oneofLogScale", {
            get: function () {
                return this._oneofLogScale;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Pyannote.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Pyannote.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Pyannote.prototype.toObject = function () {
            return {
                modelPath: this.modelPath,
                minAudioSize: this.minAudioSize,
                offset: this.offset,
                onset: this.onset,
                logScale: this.logScale,
                minDurationOff: this.minDurationOff,
                minDurationOn: this.minDurationOn
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Pyannote.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Pyannote.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                modelPath: this.modelPath,
                minAudioSize: this.minAudioSize,
                offset: this.offset,
                onset: this.onset,
                logScale: this.logScale,
                minDurationOff: this.minDurationOff,
                minDurationOn: this.minDurationOn
            };
        };
        return Pyannote;
    }());
    exports.Pyannote.id = 'ondewo.vtsi.Pyannote';
    (function (Pyannote) {
        var OneofLogScaleCase;
        (function (OneofLogScaleCase) {
            OneofLogScaleCase[OneofLogScaleCase["none"] = 0] = "none";
            OneofLogScaleCase[OneofLogScaleCase["logScale"] = 1] = "logScale";
        })(OneofLogScaleCase = Pyannote.OneofLogScaleCase || (Pyannote.OneofLogScaleCase = {}));
    })(exports.Pyannote || (exports.Pyannote = {}));
    /**
     * Message implementation for ondewo.vtsi.Matchbox
     */
    var Matchbox = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Matchbox to deeply clone from
         */
        function Matchbox(_value) {
            _value = _value || {};
            this.modelConfig = _value.modelConfig;
            this.encoderPath = _value.encoderPath;
            this.decoderPath = _value.decoderPath;
            Matchbox.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Matchbox.deserializeBinary = function (bytes) {
            var instance = new Matchbox();
            Matchbox.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Matchbox.refineValues = function (_instance) {
            _instance.modelConfig = _instance.modelConfig || '';
            _instance.encoderPath = _instance.encoderPath || '';
            _instance.decoderPath = _instance.decoderPath || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Matchbox.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.modelConfig = _reader.readString();
                        break;
                    case 2:
                        _instance.encoderPath = _reader.readString();
                        break;
                    case 3:
                        _instance.decoderPath = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Matchbox.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Matchbox.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.modelConfig) {
                _writer.writeString(1, _instance.modelConfig);
            }
            if (_instance.encoderPath) {
                _writer.writeString(2, _instance.encoderPath);
            }
            if (_instance.decoderPath) {
                _writer.writeString(3, _instance.decoderPath);
            }
        };
        Object.defineProperty(Matchbox.prototype, "modelConfig", {
            get: function () {
                return this._modelConfig;
            },
            set: function (value) {
                this._modelConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Matchbox.prototype, "encoderPath", {
            get: function () {
                return this._encoderPath;
            },
            set: function (value) {
                this._encoderPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Matchbox.prototype, "decoderPath", {
            get: function () {
                return this._decoderPath;
            },
            set: function (value) {
                this._decoderPath = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Matchbox.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Matchbox.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Matchbox.prototype.toObject = function () {
            return {
                modelConfig: this.modelConfig,
                encoderPath: this.encoderPath,
                decoderPath: this.decoderPath
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Matchbox.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Matchbox.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                modelConfig: this.modelConfig,
                encoderPath: this.encoderPath,
                decoderPath: this.decoderPath
            };
        };
        return Matchbox;
    }());
    Matchbox.id = 'ondewo.vtsi.Matchbox';
    /**
     * Message implementation for ondewo.vtsi.PostProcessing
     */
    var PostProcessing = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PostProcessing to deeply clone from
         */
        function PostProcessing(_value) {
            _value = _value || {};
            this.pipeline = (_value.pipeline || []).slice();
            this.postProcessors = _value.postProcessors
                ? new PostProcessors(_value.postProcessors)
                : undefined;
            PostProcessing.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PostProcessing.deserializeBinary = function (bytes) {
            var instance = new PostProcessing();
            PostProcessing.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PostProcessing.refineValues = function (_instance) {
            _instance.pipeline = _instance.pipeline || [];
            _instance.postProcessors = _instance.postProcessors || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PostProcessing.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        (_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
                        break;
                    case 2:
                        _instance.postProcessors = new PostProcessors();
                        _reader.readMessage(_instance.postProcessors, PostProcessors.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            PostProcessing.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PostProcessing.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.pipeline && _instance.pipeline.length) {
                _writer.writeRepeatedString(1, _instance.pipeline);
            }
            if (_instance.postProcessors) {
                _writer.writeMessage(2, _instance.postProcessors, PostProcessors.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(PostProcessing.prototype, "pipeline", {
            get: function () {
                return this._pipeline;
            },
            set: function (value) {
                this._pipeline = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessing.prototype, "postProcessors", {
            get: function () {
                return this._postProcessors;
            },
            set: function (value) {
                this._postProcessors = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PostProcessing.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PostProcessing.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PostProcessing.prototype.toObject = function () {
            return {
                pipeline: (this.pipeline || []).slice(),
                postProcessors: this.postProcessors
                    ? this.postProcessors.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PostProcessing.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PostProcessing.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                pipeline: (this.pipeline || []).slice(),
                postProcessors: this.postProcessors
                    ? this.postProcessors.toProtobufJSON(options)
                    : null
            };
        };
        return PostProcessing;
    }());
    PostProcessing.id = 'ondewo.vtsi.PostProcessing';
    /**
     * Message implementation for ondewo.vtsi.PostProcessors
     */
    var PostProcessors = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PostProcessors to deeply clone from
         */
        function PostProcessors(_value) {
            _value = _value || {};
            this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : undefined;
            this.normalization = _value.normalization
                ? new Normalization(_value.normalization)
                : undefined;
            PostProcessors.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PostProcessors.deserializeBinary = function (bytes) {
            var instance = new PostProcessors();
            PostProcessors.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PostProcessors.refineValues = function (_instance) {
            _instance.symSpell = _instance.symSpell || undefined;
            _instance.normalization = _instance.normalization || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PostProcessors.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.symSpell = new SymSpell();
                        _reader.readMessage(_instance.symSpell, SymSpell.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.normalization = new Normalization();
                        _reader.readMessage(_instance.normalization, Normalization.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            PostProcessors.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PostProcessors.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.symSpell) {
                _writer.writeMessage(1, _instance.symSpell, SymSpell.serializeBinaryToWriter);
            }
            if (_instance.normalization) {
                _writer.writeMessage(2, _instance.normalization, Normalization.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(PostProcessors.prototype, "symSpell", {
            get: function () {
                return this._symSpell;
            },
            set: function (value) {
                this._symSpell = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessors.prototype, "normalization", {
            get: function () {
                return this._normalization;
            },
            set: function (value) {
                this._normalization = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PostProcessors.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PostProcessors.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PostProcessors.prototype.toObject = function () {
            return {
                symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
                normalization: this.normalization
                    ? this.normalization.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PostProcessors.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PostProcessors.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
                normalization: this.normalization
                    ? this.normalization.toProtobufJSON(options)
                    : null
            };
        };
        return PostProcessors;
    }());
    PostProcessors.id = 'ondewo.vtsi.PostProcessors';
    /**
     * Message implementation for ondewo.vtsi.SymSpell
     */
    var SymSpell = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SymSpell to deeply clone from
         */
        function SymSpell(_value) {
            _value = _value || {};
            this.dictPath = _value.dictPath;
            this.maxDictionaryEditDistance = _value.maxDictionaryEditDistance;
            this.prefixLength = _value.prefixLength;
            SymSpell.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SymSpell.deserializeBinary = function (bytes) {
            var instance = new SymSpell();
            SymSpell.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SymSpell.refineValues = function (_instance) {
            _instance.dictPath = _instance.dictPath || '';
            _instance.maxDictionaryEditDistance =
                _instance.maxDictionaryEditDistance || '0';
            _instance.prefixLength = _instance.prefixLength || '0';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SymSpell.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.dictPath = _reader.readString();
                        break;
                    case 2:
                        _instance.maxDictionaryEditDistance = _reader.readInt64String();
                        break;
                    case 3:
                        _instance.prefixLength = _reader.readInt64String();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SymSpell.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SymSpell.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.dictPath) {
                _writer.writeString(1, _instance.dictPath);
            }
            if (_instance.maxDictionaryEditDistance) {
                _writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
            }
            if (_instance.prefixLength) {
                _writer.writeInt64String(3, _instance.prefixLength);
            }
        };
        Object.defineProperty(SymSpell.prototype, "dictPath", {
            get: function () {
                return this._dictPath;
            },
            set: function (value) {
                this._dictPath = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymSpell.prototype, "maxDictionaryEditDistance", {
            get: function () {
                return this._maxDictionaryEditDistance;
            },
            set: function (value) {
                this._maxDictionaryEditDistance = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SymSpell.prototype, "prefixLength", {
            get: function () {
                return this._prefixLength;
            },
            set: function (value) {
                this._prefixLength = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SymSpell.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SymSpell.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SymSpell.prototype.toObject = function () {
            return {
                dictPath: this.dictPath,
                maxDictionaryEditDistance: this.maxDictionaryEditDistance,
                prefixLength: this.prefixLength
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SymSpell.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SymSpell.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                dictPath: this.dictPath,
                maxDictionaryEditDistance: this.maxDictionaryEditDistance,
                prefixLength: this.prefixLength
            };
        };
        return SymSpell;
    }());
    SymSpell.id = 'ondewo.vtsi.SymSpell';
    /**
     * Message implementation for ondewo.vtsi.Normalization
     */
    var Normalization = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Normalization to deeply clone from
         */
        function Normalization(_value) {
            _value = _value || {};
            this.language = _value.language;
            Normalization.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Normalization.deserializeBinary = function (bytes) {
            var instance = new Normalization();
            Normalization.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Normalization.refineValues = function (_instance) {
            _instance.language = _instance.language || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Normalization.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.language = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Normalization.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Normalization.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.language) {
                _writer.writeString(1, _instance.language);
            }
        };
        Object.defineProperty(Normalization.prototype, "language", {
            get: function () {
                return this._language;
            },
            set: function (value) {
                this._language = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Normalization.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Normalization.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Normalization.prototype.toObject = function () {
            return {
                language: this.language
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Normalization.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Normalization.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                language: this.language
            };
        };
        return Normalization;
    }());
    Normalization.id = 'ondewo.vtsi.Normalization';
    /**
     * Message implementation for ondewo.vtsi.TranscriptionReturnOptions
     */
    var TranscriptionReturnOptions = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
         */
        function TranscriptionReturnOptions(_value) {
            _value = _value || {};
            this.returnStartOfSpeech = _value.returnStartOfSpeech;
            this.returnAudio = _value.returnAudio;
            this.returnAlternativeTranscriptions =
                _value.returnAlternativeTranscriptions;
            this.returnConfidenceScore = _value.returnConfidenceScore;
            this.returnWordTiming = _value.returnWordTiming;
            TranscriptionReturnOptions.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        TranscriptionReturnOptions.deserializeBinary = function (bytes) {
            var instance = new TranscriptionReturnOptions();
            TranscriptionReturnOptions.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TranscriptionReturnOptions.refineValues = function (_instance) {
            _instance.returnStartOfSpeech = _instance.returnStartOfSpeech || false;
            _instance.returnAudio = _instance.returnAudio || false;
            _instance.returnAlternativeTranscriptions =
                _instance.returnAlternativeTranscriptions || false;
            _instance.returnConfidenceScore = _instance.returnConfidenceScore || false;
            _instance.returnWordTiming = _instance.returnWordTiming || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TranscriptionReturnOptions.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.returnStartOfSpeech = _reader.readBool();
                        break;
                    case 2:
                        _instance.returnAudio = _reader.readBool();
                        break;
                    case 3:
                        _instance.returnAlternativeTranscriptions = _reader.readBool();
                        break;
                    case 4:
                        _instance.returnConfidenceScore = _reader.readBool();
                        break;
                    case 8:
                        _instance.returnWordTiming = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TranscriptionReturnOptions.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TranscriptionReturnOptions.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.returnStartOfSpeech) {
                _writer.writeBool(1, _instance.returnStartOfSpeech);
            }
            if (_instance.returnAudio) {
                _writer.writeBool(2, _instance.returnAudio);
            }
            if (_instance.returnAlternativeTranscriptions) {
                _writer.writeBool(3, _instance.returnAlternativeTranscriptions);
            }
            if (_instance.returnConfidenceScore) {
                _writer.writeBool(4, _instance.returnConfidenceScore);
            }
            if (_instance.returnWordTiming) {
                _writer.writeBool(8, _instance.returnWordTiming);
            }
        };
        Object.defineProperty(TranscriptionReturnOptions.prototype, "returnStartOfSpeech", {
            get: function () {
                return this._returnStartOfSpeech;
            },
            set: function (value) {
                this._returnStartOfSpeech = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscriptionReturnOptions.prototype, "returnAudio", {
            get: function () {
                return this._returnAudio;
            },
            set: function (value) {
                this._returnAudio = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscriptionReturnOptions.prototype, "returnAlternativeTranscriptions", {
            get: function () {
                return this._returnAlternativeTranscriptions;
            },
            set: function (value) {
                this._returnAlternativeTranscriptions = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscriptionReturnOptions.prototype, "returnConfidenceScore", {
            get: function () {
                return this._returnConfidenceScore;
            },
            set: function (value) {
                this._returnConfidenceScore = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TranscriptionReturnOptions.prototype, "returnWordTiming", {
            get: function () {
                return this._returnWordTiming;
            },
            set: function (value) {
                this._returnWordTiming = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TranscriptionReturnOptions.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TranscriptionReturnOptions.prototype.toObject = function () {
            return {
                returnStartOfSpeech: this.returnStartOfSpeech,
                returnAudio: this.returnAudio,
                returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
                returnConfidenceScore: this.returnConfidenceScore,
                returnWordTiming: this.returnWordTiming
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TranscriptionReturnOptions.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TranscriptionReturnOptions.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                returnStartOfSpeech: this.returnStartOfSpeech,
                returnAudio: this.returnAudio,
                returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
                returnConfidenceScore: this.returnConfidenceScore,
                returnWordTiming: this.returnWordTiming
            };
        };
        return TranscriptionReturnOptions;
    }());
    TranscriptionReturnOptions.id = 'ondewo.vtsi.TranscriptionReturnOptions';
    /**
     * Message implementation for ondewo.vtsi.UtteranceDetectionOptions
     */
    exports.UtteranceDetectionOptions = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
         */
        function UtteranceDetectionOptions(_value) {
            this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.none;
            _value = _value || {};
            this.transcribeNotFinal = _value.transcribeNotFinal;
            this.startOfUtteranceThreshold = _value.startOfUtteranceThreshold;
            this.endOfUtteranceThreshold = _value.endOfUtteranceThreshold;
            this.nextChunkTimeout = _value.nextChunkTimeout;
            UtteranceDetectionOptions.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        UtteranceDetectionOptions.deserializeBinary = function (bytes) {
            var instance = new UtteranceDetectionOptions();
            UtteranceDetectionOptions.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UtteranceDetectionOptions.refineValues = function (_instance) {
            _instance.startOfUtteranceThreshold =
                _instance.startOfUtteranceThreshold || 0;
            _instance.endOfUtteranceThreshold = _instance.endOfUtteranceThreshold || 0;
            _instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UtteranceDetectionOptions.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.transcribeNotFinal = _reader.readBool();
                        break;
                    case 2:
                        _instance.startOfUtteranceThreshold = _reader.readFloat();
                        break;
                    case 3:
                        _instance.endOfUtteranceThreshold = _reader.readFloat();
                        break;
                    case 4:
                        _instance.nextChunkTimeout = _reader.readFloat();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UtteranceDetectionOptions.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UtteranceDetectionOptions.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.transcribeNotFinal ||
                _instance.transcribeNotFinal === false) {
                _writer.writeBool(1, _instance.transcribeNotFinal);
            }
            if (_instance.startOfUtteranceThreshold) {
                _writer.writeFloat(2, _instance.startOfUtteranceThreshold);
            }
            if (_instance.endOfUtteranceThreshold) {
                _writer.writeFloat(3, _instance.endOfUtteranceThreshold);
            }
            if (_instance.nextChunkTimeout) {
                _writer.writeFloat(4, _instance.nextChunkTimeout);
            }
        };
        Object.defineProperty(UtteranceDetectionOptions.prototype, "transcribeNotFinal", {
            get: function () {
                return this._transcribeNotFinal;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._oneofTranscribeNotFinal =
                        UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
                }
                this._transcribeNotFinal = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UtteranceDetectionOptions.prototype, "startOfUtteranceThreshold", {
            get: function () {
                return this._startOfUtteranceThreshold;
            },
            set: function (value) {
                this._startOfUtteranceThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UtteranceDetectionOptions.prototype, "endOfUtteranceThreshold", {
            get: function () {
                return this._endOfUtteranceThreshold;
            },
            set: function (value) {
                this._endOfUtteranceThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UtteranceDetectionOptions.prototype, "nextChunkTimeout", {
            get: function () {
                return this._nextChunkTimeout;
            },
            set: function (value) {
                this._nextChunkTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UtteranceDetectionOptions.prototype, "oneofTranscribeNotFinal", {
            get: function () {
                return this._oneofTranscribeNotFinal;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UtteranceDetectionOptions.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UtteranceDetectionOptions.prototype.toObject = function () {
            return {
                transcribeNotFinal: this.transcribeNotFinal,
                startOfUtteranceThreshold: this.startOfUtteranceThreshold,
                endOfUtteranceThreshold: this.endOfUtteranceThreshold,
                nextChunkTimeout: this.nextChunkTimeout
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UtteranceDetectionOptions.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UtteranceDetectionOptions.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                transcribeNotFinal: this.transcribeNotFinal,
                startOfUtteranceThreshold: this.startOfUtteranceThreshold,
                endOfUtteranceThreshold: this.endOfUtteranceThreshold,
                nextChunkTimeout: this.nextChunkTimeout
            };
        };
        return UtteranceDetectionOptions;
    }());
    exports.UtteranceDetectionOptions.id = 'ondewo.vtsi.UtteranceDetectionOptions';
    (function (UtteranceDetectionOptions) {
        var OneofTranscribeNotFinalCase;
        (function (OneofTranscribeNotFinalCase) {
            OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["none"] = 0] = "none";
            OneofTranscribeNotFinalCase[OneofTranscribeNotFinalCase["transcribeNotFinal"] = 1] = "transcribeNotFinal";
        })(OneofTranscribeNotFinalCase = UtteranceDetectionOptions.OneofTranscribeNotFinalCase || (UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {}));
    })(exports.UtteranceDetectionOptions || (exports.UtteranceDetectionOptions = {}));
    /**
     * Message implementation for ondewo.vtsi.PostProcessingOptions
     */
    var PostProcessingOptions = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
         */
        function PostProcessingOptions(_value) {
            _value = _value || {};
            this.spellingCorrection = _value.spellingCorrection;
            this.normalize = _value.normalize;
            this.config = _value.config ? new PostProcessing(_value.config) : undefined;
            PostProcessingOptions.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PostProcessingOptions.deserializeBinary = function (bytes) {
            var instance = new PostProcessingOptions();
            PostProcessingOptions.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PostProcessingOptions.refineValues = function (_instance) {
            _instance.spellingCorrection = _instance.spellingCorrection || false;
            _instance.normalize = _instance.normalize || false;
            _instance.config = _instance.config || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PostProcessingOptions.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.spellingCorrection = _reader.readBool();
                        break;
                    case 2:
                        _instance.normalize = _reader.readBool();
                        break;
                    case 3:
                        _instance.config = new PostProcessing();
                        _reader.readMessage(_instance.config, PostProcessing.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            PostProcessingOptions.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PostProcessingOptions.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.spellingCorrection) {
                _writer.writeBool(1, _instance.spellingCorrection);
            }
            if (_instance.normalize) {
                _writer.writeBool(2, _instance.normalize);
            }
            if (_instance.config) {
                _writer.writeMessage(3, _instance.config, PostProcessing.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(PostProcessingOptions.prototype, "spellingCorrection", {
            get: function () {
                return this._spellingCorrection;
            },
            set: function (value) {
                this._spellingCorrection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessingOptions.prototype, "normalize", {
            get: function () {
                return this._normalize;
            },
            set: function (value) {
                this._normalize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PostProcessingOptions.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (value) {
                this._config = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PostProcessingOptions.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PostProcessingOptions.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PostProcessingOptions.prototype.toObject = function () {
            return {
                spellingCorrection: this.spellingCorrection,
                normalize: this.normalize,
                config: this.config ? this.config.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PostProcessingOptions.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PostProcessingOptions.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                spellingCorrection: this.spellingCorrection,
                normalize: this.normalize,
                config: this.config ? this.config.toProtobufJSON(options) : null
            };
        };
        return PostProcessingOptions;
    }());
    PostProcessingOptions.id = 'ondewo.vtsi.PostProcessingOptions';
    /**
     * Message implementation for ondewo.vtsi.AsteriskConfig
     */
    var AsteriskConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of AsteriskConfig to deeply clone from
         */
        function AsteriskConfig(_value) {
            _value = _value || {};
            this.baseConfig = _value.baseConfig
                ? new BaseServiceConfig(_value.baseConfig)
                : undefined;
            AsteriskConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        AsteriskConfig.deserializeBinary = function (bytes) {
            var instance = new AsteriskConfig();
            AsteriskConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        AsteriskConfig.refineValues = function (_instance) {
            _instance.baseConfig = _instance.baseConfig || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        AsteriskConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.baseConfig = new BaseServiceConfig();
                        _reader.readMessage(_instance.baseConfig, BaseServiceConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            AsteriskConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        AsteriskConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.baseConfig) {
                _writer.writeMessage(1, _instance.baseConfig, BaseServiceConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(AsteriskConfig.prototype, "baseConfig", {
            get: function () {
                return this._baseConfig;
            },
            set: function (value) {
                this._baseConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        AsteriskConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            AsteriskConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        AsteriskConfig.prototype.toObject = function () {
            return {
                baseConfig: this.baseConfig ? this.baseConfig.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        AsteriskConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        AsteriskConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                baseConfig: this.baseConfig
                    ? this.baseConfig.toProtobufJSON(options)
                    : null
            };
        };
        return AsteriskConfig;
    }());
    AsteriskConfig.id = 'ondewo.vtsi.AsteriskConfig';
    /**
     * Message implementation for ondewo.vtsi.CommonServicesConfigs
     */
    var CommonServicesConfigs = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CommonServicesConfigs to deeply clone from
         */
        function CommonServicesConfigs(_value) {
            _value = _value || {};
            this.asteriskConfig = _value.asteriskConfig
                ? new AsteriskConfig(_value.asteriskConfig)
                : undefined;
            this.caiConfig = _value.caiConfig
                ? new exports.NLUConfig(_value.caiConfig)
                : undefined;
            this.sttConfig = _value.sttConfig
                ? new S2TConfig(_value.sttConfig)
                : undefined;
            this.ttsConfig = _value.ttsConfig
                ? new T2SConfig(_value.ttsConfig)
                : undefined;
            CommonServicesConfigs.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CommonServicesConfigs.deserializeBinary = function (bytes) {
            var instance = new CommonServicesConfigs();
            CommonServicesConfigs.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CommonServicesConfigs.refineValues = function (_instance) {
            _instance.asteriskConfig = _instance.asteriskConfig || undefined;
            _instance.caiConfig = _instance.caiConfig || undefined;
            _instance.sttConfig = _instance.sttConfig || undefined;
            _instance.ttsConfig = _instance.ttsConfig || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CommonServicesConfigs.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.asteriskConfig = new AsteriskConfig();
                        _reader.readMessage(_instance.asteriskConfig, AsteriskConfig.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.caiConfig = new exports.NLUConfig();
                        _reader.readMessage(_instance.caiConfig, exports.NLUConfig.deserializeBinaryFromReader);
                        break;
                    case 3:
                        _instance.sttConfig = new S2TConfig();
                        _reader.readMessage(_instance.sttConfig, S2TConfig.deserializeBinaryFromReader);
                        break;
                    case 4:
                        _instance.ttsConfig = new T2SConfig();
                        _reader.readMessage(_instance.ttsConfig, T2SConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CommonServicesConfigs.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CommonServicesConfigs.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.asteriskConfig) {
                _writer.writeMessage(1, _instance.asteriskConfig, AsteriskConfig.serializeBinaryToWriter);
            }
            if (_instance.caiConfig) {
                _writer.writeMessage(2, _instance.caiConfig, exports.NLUConfig.serializeBinaryToWriter);
            }
            if (_instance.sttConfig) {
                _writer.writeMessage(3, _instance.sttConfig, S2TConfig.serializeBinaryToWriter);
            }
            if (_instance.ttsConfig) {
                _writer.writeMessage(4, _instance.ttsConfig, T2SConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(CommonServicesConfigs.prototype, "asteriskConfig", {
            get: function () {
                return this._asteriskConfig;
            },
            set: function (value) {
                this._asteriskConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonServicesConfigs.prototype, "caiConfig", {
            get: function () {
                return this._caiConfig;
            },
            set: function (value) {
                this._caiConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonServicesConfigs.prototype, "sttConfig", {
            get: function () {
                return this._sttConfig;
            },
            set: function (value) {
                this._sttConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonServicesConfigs.prototype, "ttsConfig", {
            get: function () {
                return this._ttsConfig;
            },
            set: function (value) {
                this._ttsConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CommonServicesConfigs.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CommonServicesConfigs.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CommonServicesConfigs.prototype.toObject = function () {
            return {
                asteriskConfig: this.asteriskConfig
                    ? this.asteriskConfig.toObject()
                    : undefined,
                caiConfig: this.caiConfig ? this.caiConfig.toObject() : undefined,
                sttConfig: this.sttConfig ? this.sttConfig.toObject() : undefined,
                ttsConfig: this.ttsConfig ? this.ttsConfig.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CommonServicesConfigs.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CommonServicesConfigs.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                asteriskConfig: this.asteriskConfig
                    ? this.asteriskConfig.toProtobufJSON(options)
                    : null,
                caiConfig: this.caiConfig ? this.caiConfig.toProtobufJSON(options) : null,
                sttConfig: this.sttConfig ? this.sttConfig.toProtobufJSON(options) : null,
                ttsConfig: this.ttsConfig ? this.ttsConfig.toProtobufJSON(options) : null
            };
        };
        return CommonServicesConfigs;
    }());
    CommonServicesConfigs.id = 'ondewo.vtsi.CommonServicesConfigs';
    /**
     * Message implementation for ondewo.vtsi.SIPConfig
     */
    exports.SIPConfig = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SIPConfig to deeply clone from
         */
        function SIPConfig(_value) {
            _value = _value || {};
            this.callId = _value.callId;
            this.callDisplayName = _value.callDisplayName;
            this.sipSimVersion = _value.sipSimVersion;
            this.sipPrefix = _value.sipPrefix;
            this.sipAccount = _value.sipAccount;
            (this.accountPasswordDictionary = _value.accountPasswordDictionary
                ? Object.keys(_value.accountPasswordDictionary).reduce(function (r, k) {
                    var _f;
                    return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _value.accountPasswordDictionary[k], _f)));
                }, {})
                : {}),
                (this.phoneNumber = _value.phoneNumber);
            (this.headers = _value.headers
                ? Object.keys(_value.headers).reduce(function (r, k) {
                    var _f;
                    return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _value.headers[k], _f)));
                }, {})
                : {}),
                SIPConfig.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SIPConfig.deserializeBinary = function (bytes) {
            var instance = new SIPConfig();
            SIPConfig.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SIPConfig.refineValues = function (_instance) {
            _instance.callId = _instance.callId || '';
            _instance.callDisplayName = _instance.callDisplayName || '';
            _instance.sipSimVersion = _instance.sipSimVersion || '';
            _instance.sipPrefix = _instance.sipPrefix || '';
            _instance.sipAccount = _instance.sipAccount || '';
            _instance.accountPasswordDictionary =
                _instance.accountPasswordDictionary || {};
            _instance.phoneNumber = _instance.phoneNumber || '';
            _instance.headers = _instance.headers || {};
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SIPConfig.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.callId = _reader.readString();
                        break;
                    case 2:
                        _instance.callDisplayName = _reader.readString();
                        break;
                    case 3:
                        _instance.sipSimVersion = _reader.readString();
                        break;
                    case 4:
                        _instance.sipPrefix = _reader.readString();
                        break;
                    case 5:
                        _instance.sipAccount = _reader.readString();
                        break;
                    case 6:
                        var msg_6 = {};
                        _reader.readMessage(msg_6, SIPConfig.AccountPasswordDictionaryEntry.deserializeBinaryFromReader);
                        _instance.accountPasswordDictionary =
                            _instance.accountPasswordDictionary || {};
                        _instance.accountPasswordDictionary[msg_6.key] = msg_6.value;
                        break;
                    case 7:
                        _instance.phoneNumber = _reader.readString();
                        break;
                    case 8:
                        var msg_8 = {};
                        _reader.readMessage(msg_8, SIPConfig.HeadersEntry.deserializeBinaryFromReader);
                        _instance.headers = _instance.headers || {};
                        _instance.headers[msg_8.key] = msg_8.value;
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SIPConfig.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SIPConfig.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId) {
                _writer.writeString(1, _instance.callId);
            }
            if (_instance.callDisplayName) {
                _writer.writeString(2, _instance.callDisplayName);
            }
            if (_instance.sipSimVersion) {
                _writer.writeString(3, _instance.sipSimVersion);
            }
            if (_instance.sipPrefix) {
                _writer.writeString(4, _instance.sipPrefix);
            }
            if (_instance.sipAccount) {
                _writer.writeString(5, _instance.sipAccount);
            }
            if (!!_instance.accountPasswordDictionary) {
                var keys_6 = Object.keys(_instance.accountPasswordDictionary);
                if (keys_6.length) {
                    var repeated_6 = keys_6
                        .map(function (key) { return ({
                        key: key,
                        value: _instance.accountPasswordDictionary[key]
                    }); })
                        .reduce(function (r, v) { return __spread(r, [v]); }, []);
                    _writer.writeRepeatedMessage(6, repeated_6, SIPConfig.AccountPasswordDictionaryEntry.serializeBinaryToWriter);
                }
            }
            if (_instance.phoneNumber) {
                _writer.writeString(7, _instance.phoneNumber);
            }
            if (!!_instance.headers) {
                var keys_8 = Object.keys(_instance.headers);
                if (keys_8.length) {
                    var repeated_8 = keys_8
                        .map(function (key) { return ({ key: key, value: _instance.headers[key] }); })
                        .reduce(function (r, v) { return __spread(r, [v]); }, []);
                    _writer.writeRepeatedMessage(8, repeated_8, SIPConfig.HeadersEntry.serializeBinaryToWriter);
                }
            }
        };
        Object.defineProperty(SIPConfig.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "callDisplayName", {
            get: function () {
                return this._callDisplayName;
            },
            set: function (value) {
                this._callDisplayName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "sipSimVersion", {
            get: function () {
                return this._sipSimVersion;
            },
            set: function (value) {
                this._sipSimVersion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "sipPrefix", {
            get: function () {
                return this._sipPrefix;
            },
            set: function (value) {
                this._sipPrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "sipAccount", {
            get: function () {
                return this._sipAccount;
            },
            set: function (value) {
                this._sipAccount = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "accountPasswordDictionary", {
            get: function () {
                return this._accountPasswordDictionary;
            },
            set: function (value) {
                this._accountPasswordDictionary = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "phoneNumber", {
            get: function () {
                return this._phoneNumber;
            },
            set: function (value) {
                this._phoneNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SIPConfig.prototype, "headers", {
            get: function () {
                return this._headers;
            },
            set: function (value) {
                this._headers = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SIPConfig.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SIPConfig.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SIPConfig.prototype.toObject = function () {
            var _this = this;
            return {
                callId: this.callId,
                callDisplayName: this.callDisplayName,
                sipSimVersion: this.sipSimVersion,
                sipPrefix: this.sipPrefix,
                sipAccount: this.sipAccount,
                accountPasswordDictionary: this.accountPasswordDictionary
                    ? Object.keys(this.accountPasswordDictionary).reduce(function (r, k) {
                        var _f;
                        return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _this.accountPasswordDictionary[k], _f)));
                    }, {})
                    : {},
                phoneNumber: this.phoneNumber,
                headers: this.headers
                    ? Object.keys(this.headers).reduce(function (r, k) {
                        var _f;
                        return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _this.headers[k], _f)));
                    }, {})
                    : {}
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SIPConfig.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SIPConfig.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _this = this;
            return {
                callId: this.callId,
                callDisplayName: this.callDisplayName,
                sipSimVersion: this.sipSimVersion,
                sipPrefix: this.sipPrefix,
                sipAccount: this.sipAccount,
                accountPasswordDictionary: this.accountPasswordDictionary
                    ? Object.keys(this.accountPasswordDictionary).reduce(function (r, k) {
                        var _f;
                        return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _this.accountPasswordDictionary[k], _f)));
                    }, {})
                    : {},
                phoneNumber: this.phoneNumber,
                headers: this.headers
                    ? Object.keys(this.headers).reduce(function (r, k) {
                        var _f;
                        return (Object.assign(Object.assign({}, r), (_f = {}, _f[k] = _this.headers[k], _f)));
                    }, {})
                    : {}
            };
        };
        return SIPConfig;
    }());
    exports.SIPConfig.id = 'ondewo.vtsi.SIPConfig';
    (function (SIPConfig) {
        /**
         * Message implementation for ondewo.vtsi.AccountPasswordDictionaryEntry
         */
        var AccountPasswordDictionaryEntry = /** @class */ (function () {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of AccountPasswordDictionaryEntry to deeply clone from
             */
            function AccountPasswordDictionaryEntry(_value) {
                _value = _value || {};
                this.key = _value.key;
                this.value = _value.value;
                AccountPasswordDictionaryEntry.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            AccountPasswordDictionaryEntry.deserializeBinary = function (bytes) {
                var instance = new AccountPasswordDictionaryEntry();
                AccountPasswordDictionaryEntry.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            AccountPasswordDictionaryEntry.refineValues = function (_instance) {
                _instance.key = _instance.key || '';
                _instance.value = _instance.value || '';
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            AccountPasswordDictionaryEntry.deserializeBinaryFromReader = function (_instance, _reader) {
                while (_reader.nextField()) {
                    if (_reader.isEndGroup())
                        break;
                    switch (_reader.getFieldNumber()) {
                        case 1:
                            _instance.key = _reader.readString();
                            break;
                        case 2:
                            _instance.value = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                AccountPasswordDictionaryEntry.refineValues(_instance);
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            AccountPasswordDictionaryEntry.serializeBinaryToWriter = function (_instance, _writer) {
                if (_instance.key) {
                    _writer.writeString(1, _instance.key);
                }
                if (_instance.value) {
                    _writer.writeString(2, _instance.value);
                }
            };
            Object.defineProperty(AccountPasswordDictionaryEntry.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(AccountPasswordDictionaryEntry.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            AccountPasswordDictionaryEntry.prototype.serializeBinary = function () {
                var writer = new googleProtobuf.BinaryWriter();
                AccountPasswordDictionaryEntry.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            AccountPasswordDictionaryEntry.prototype.toObject = function () {
                return {
                    key: this.key,
                    value: this.value
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            AccountPasswordDictionaryEntry.prototype.toJSON = function () {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            AccountPasswordDictionaryEntry.prototype.toProtobufJSON = function (
            // @ts-ignore
            options) {
                return {
                    key: this.key,
                    value: this.value
                };
            };
            return AccountPasswordDictionaryEntry;
        }());
        AccountPasswordDictionaryEntry.id = 'ondewo.vtsi.AccountPasswordDictionaryEntry';
        SIPConfig.AccountPasswordDictionaryEntry = AccountPasswordDictionaryEntry;
        /**
         * Message implementation for ondewo.vtsi.HeadersEntry
         */
        var HeadersEntry = /** @class */ (function () {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of HeadersEntry to deeply clone from
             */
            function HeadersEntry(_value) {
                _value = _value || {};
                this.key = _value.key;
                this.value = _value.value;
                HeadersEntry.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            HeadersEntry.deserializeBinary = function (bytes) {
                var instance = new HeadersEntry();
                HeadersEntry.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            HeadersEntry.refineValues = function (_instance) {
                _instance.key = _instance.key || '';
                _instance.value = _instance.value || '';
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            HeadersEntry.deserializeBinaryFromReader = function (_instance, _reader) {
                while (_reader.nextField()) {
                    if (_reader.isEndGroup())
                        break;
                    switch (_reader.getFieldNumber()) {
                        case 1:
                            _instance.key = _reader.readString();
                            break;
                        case 2:
                            _instance.value = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                HeadersEntry.refineValues(_instance);
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            HeadersEntry.serializeBinaryToWriter = function (_instance, _writer) {
                if (_instance.key) {
                    _writer.writeString(1, _instance.key);
                }
                if (_instance.value) {
                    _writer.writeString(2, _instance.value);
                }
            };
            Object.defineProperty(HeadersEntry.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HeadersEntry.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            HeadersEntry.prototype.serializeBinary = function () {
                var writer = new googleProtobuf.BinaryWriter();
                HeadersEntry.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            HeadersEntry.prototype.toObject = function () {
                return {
                    key: this.key,
                    value: this.value
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            HeadersEntry.prototype.toJSON = function () {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            HeadersEntry.prototype.toProtobufJSON = function (
            // @ts-ignore
            options) {
                return {
                    key: this.key,
                    value: this.value
                };
            };
            return HeadersEntry;
        }());
        HeadersEntry.id = 'ondewo.vtsi.HeadersEntry';
        SIPConfig.HeadersEntry = HeadersEntry;
    })(exports.SIPConfig || (exports.SIPConfig = {}));
    /**
     * Message implementation for ondewo.vtsi.StartCallInstanceRequest
     */
    var StartCallInstanceRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartCallInstanceRequest to deeply clone from
         */
        function StartCallInstanceRequest(_value) {
            _value = _value || {};
            this.sipConfig = _value.sipConfig
                ? new exports.SIPConfig(_value.sipConfig)
                : undefined;
            this.servicesConfigs = _value.servicesConfigs
                ? new CommonServicesConfigs(_value.servicesConfigs)
                : undefined;
            StartCallInstanceRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        StartCallInstanceRequest.deserializeBinary = function (bytes) {
            var instance = new StartCallInstanceRequest();
            StartCallInstanceRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartCallInstanceRequest.refineValues = function (_instance) {
            _instance.sipConfig = _instance.sipConfig || undefined;
            _instance.servicesConfigs = _instance.servicesConfigs || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartCallInstanceRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.sipConfig = new exports.SIPConfig();
                        _reader.readMessage(_instance.sipConfig, exports.SIPConfig.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.servicesConfigs = new CommonServicesConfigs();
                        _reader.readMessage(_instance.servicesConfigs, CommonServicesConfigs.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            StartCallInstanceRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartCallInstanceRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.sipConfig) {
                _writer.writeMessage(1, _instance.sipConfig, exports.SIPConfig.serializeBinaryToWriter);
            }
            if (_instance.servicesConfigs) {
                _writer.writeMessage(2, _instance.servicesConfigs, CommonServicesConfigs.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(StartCallInstanceRequest.prototype, "sipConfig", {
            get: function () {
                return this._sipConfig;
            },
            set: function (value) {
                this._sipConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StartCallInstanceRequest.prototype, "servicesConfigs", {
            get: function () {
                return this._servicesConfigs;
            },
            set: function (value) {
                this._servicesConfigs = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartCallInstanceRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartCallInstanceRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartCallInstanceRequest.prototype.toObject = function () {
            return {
                sipConfig: this.sipConfig ? this.sipConfig.toObject() : undefined,
                servicesConfigs: this.servicesConfigs
                    ? this.servicesConfigs.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartCallInstanceRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartCallInstanceRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                sipConfig: this.sipConfig ? this.sipConfig.toProtobufJSON(options) : null,
                servicesConfigs: this.servicesConfigs
                    ? this.servicesConfigs.toProtobufJSON(options)
                    : null
            };
        };
        return StartCallInstanceRequest;
    }());
    StartCallInstanceRequest.id = 'ondewo.vtsi.StartCallInstanceRequest';
    /**
     * Message implementation for ondewo.vtsi.StartCallInstanceResponse
     */
    var StartCallInstanceResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartCallInstanceResponse to deeply clone from
         */
        function StartCallInstanceResponse(_value) {
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
        StartCallInstanceResponse.deserializeBinary = function (bytes) {
            var instance = new StartCallInstanceResponse();
            StartCallInstanceResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartCallInstanceResponse.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.success = _instance.success || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartCallInstanceResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartCallInstanceResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, StartCallInstanceRequest.serializeBinaryToWriter);
            }
            if (_instance.success) {
                _writer.writeBool(2, _instance.success);
            }
        };
        Object.defineProperty(StartCallInstanceResponse.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StartCallInstanceResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartCallInstanceResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartCallInstanceResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartCallInstanceResponse.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                success: this.success
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartCallInstanceResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartCallInstanceResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                success: this.success
            };
        };
        return StartCallInstanceResponse;
    }());
    StartCallInstanceResponse.id = 'ondewo.vtsi.StartCallInstanceResponse';
    /**
     * Message implementation for ondewo.vtsi.StartMultipleCallInstancesRequest
     */
    var StartMultipleCallInstancesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartMultipleCallInstancesRequest to deeply clone from
         */
        function StartMultipleCallInstancesRequest(_value) {
            _value = _value || {};
            this.requests = (_value.requests || []).map(function (m) { return new StartCallInstanceRequest(m); });
            StartMultipleCallInstancesRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        StartMultipleCallInstancesRequest.deserializeBinary = function (bytes) {
            var instance = new StartMultipleCallInstancesRequest();
            StartMultipleCallInstancesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartMultipleCallInstancesRequest.refineValues = function (_instance) {
            _instance.requests = _instance.requests || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartMultipleCallInstancesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new StartCallInstanceRequest();
                        _reader.readMessage(messageInitializer1, StartCallInstanceRequest.deserializeBinaryFromReader);
                        (_instance.requests = _instance.requests || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            StartMultipleCallInstancesRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartMultipleCallInstancesRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.requests && _instance.requests.length) {
                _writer.writeRepeatedMessage(1, _instance.requests, StartCallInstanceRequest.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(StartMultipleCallInstancesRequest.prototype, "requests", {
            get: function () {
                return this._requests;
            },
            set: function (value) {
                this._requests = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartMultipleCallInstancesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartMultipleCallInstancesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartMultipleCallInstancesRequest.prototype.toObject = function () {
            return {
                requests: (this.requests || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartMultipleCallInstancesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartMultipleCallInstancesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                requests: (this.requests || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return StartMultipleCallInstancesRequest;
    }());
    StartMultipleCallInstancesRequest.id = 'ondewo.vtsi.StartMultipleCallInstancesRequest';
    /**
     * Message implementation for ondewo.vtsi.StartMultipleCallInstancesResponse
     */
    var StartMultipleCallInstancesResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartMultipleCallInstancesResponse to deeply clone from
         */
        function StartMultipleCallInstancesResponse(_value) {
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
        StartMultipleCallInstancesResponse.deserializeBinary = function (bytes) {
            var instance = new StartMultipleCallInstancesResponse();
            StartMultipleCallInstancesResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartMultipleCallInstancesResponse.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.success = _instance.success || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartMultipleCallInstancesResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartMultipleCallInstancesResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, StartMultipleCallInstancesRequest.serializeBinaryToWriter);
            }
            if (_instance.success) {
                _writer.writeBool(2, _instance.success);
            }
        };
        Object.defineProperty(StartMultipleCallInstancesResponse.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StartMultipleCallInstancesResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartMultipleCallInstancesResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartMultipleCallInstancesResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartMultipleCallInstancesResponse.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                success: this.success
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartMultipleCallInstancesResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartMultipleCallInstancesResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                success: this.success
            };
        };
        return StartMultipleCallInstancesResponse;
    }());
    StartMultipleCallInstancesResponse.id = 'ondewo.vtsi.StartMultipleCallInstancesResponse';
    /**
     * Message implementation for ondewo.vtsi.StopCallInstanceRequest
     */
    exports.StopCallInstanceRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StopCallInstanceRequest to deeply clone from
         */
        function StopCallInstanceRequest(_value) {
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
        StopCallInstanceRequest.deserializeBinary = function (bytes) {
            var instance = new StopCallInstanceRequest();
            StopCallInstanceRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StopCallInstanceRequest.refineValues = function (_instance) { };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StopCallInstanceRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StopCallInstanceRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId || _instance.callId === '') {
                _writer.writeString(1, _instance.callId);
            }
            if (_instance.sipId || _instance.sipId === '') {
                _writer.writeString(2, _instance.sipId);
            }
        };
        Object.defineProperty(StopCallInstanceRequest.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._sipId = undefined;
                    this._id = StopCallInstanceRequest.IdCase.callId;
                }
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StopCallInstanceRequest.prototype, "sipId", {
            get: function () {
                return this._sipId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._callId = undefined;
                    this._id = StopCallInstanceRequest.IdCase.sipId;
                }
                this._sipId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StopCallInstanceRequest.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StopCallInstanceRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StopCallInstanceRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StopCallInstanceRequest.prototype.toObject = function () {
            return {
                callId: this.callId,
                sipId: this.sipId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StopCallInstanceRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StopCallInstanceRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b;
            return {
                callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
                sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null
            };
        };
        return StopCallInstanceRequest;
    }());
    exports.StopCallInstanceRequest.id = 'ondewo.vtsi.StopCallInstanceRequest';
    (function (StopCallInstanceRequest) {
        var IdCase;
        (function (IdCase) {
            IdCase[IdCase["none"] = 0] = "none";
            IdCase[IdCase["callId"] = 1] = "callId";
            IdCase[IdCase["sipId"] = 2] = "sipId";
        })(IdCase = StopCallInstanceRequest.IdCase || (StopCallInstanceRequest.IdCase = {}));
    })(exports.StopCallInstanceRequest || (exports.StopCallInstanceRequest = {}));
    /**
     * Message implementation for ondewo.vtsi.StopCallInstanceResponse
     */
    var StopCallInstanceResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StopCallInstanceResponse to deeply clone from
         */
        function StopCallInstanceResponse(_value) {
            _value = _value || {};
            this.request = _value.request
                ? new exports.StopCallInstanceRequest(_value.request)
                : undefined;
            this.success = _value.success;
            this.logMessage = _value.logMessage;
            StopCallInstanceResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        StopCallInstanceResponse.deserializeBinary = function (bytes) {
            var instance = new StopCallInstanceResponse();
            StopCallInstanceResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StopCallInstanceResponse.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.success = _instance.success || false;
            _instance.logMessage = _instance.logMessage || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StopCallInstanceResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.request = new exports.StopCallInstanceRequest();
                        _reader.readMessage(_instance.request, exports.StopCallInstanceRequest.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StopCallInstanceResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, exports.StopCallInstanceRequest.serializeBinaryToWriter);
            }
            if (_instance.success) {
                _writer.writeBool(2, _instance.success);
            }
            if (_instance.logMessage) {
                _writer.writeString(3, _instance.logMessage);
            }
        };
        Object.defineProperty(StopCallInstanceResponse.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StopCallInstanceResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StopCallInstanceResponse.prototype, "logMessage", {
            get: function () {
                return this._logMessage;
            },
            set: function (value) {
                this._logMessage = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StopCallInstanceResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StopCallInstanceResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StopCallInstanceResponse.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                success: this.success,
                logMessage: this.logMessage
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StopCallInstanceResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StopCallInstanceResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                success: this.success,
                logMessage: this.logMessage
            };
        };
        return StopCallInstanceResponse;
    }());
    StopCallInstanceResponse.id = 'ondewo.vtsi.StopCallInstanceResponse';
    /**
     * Message implementation for ondewo.vtsi.VoipManifestStatusRequest
     */
    var VoipManifestStatusRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoipManifestStatusRequest to deeply clone from
         */
        function VoipManifestStatusRequest(_value) {
            _value = _value || {};
            this.manifestId = _value.manifestId;
            VoipManifestStatusRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        VoipManifestStatusRequest.deserializeBinary = function (bytes) {
            var instance = new VoipManifestStatusRequest();
            VoipManifestStatusRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoipManifestStatusRequest.refineValues = function (_instance) {
            _instance.manifestId = _instance.manifestId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoipManifestStatusRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoipManifestStatusRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.manifestId) {
                _writer.writeString(1, _instance.manifestId);
            }
        };
        Object.defineProperty(VoipManifestStatusRequest.prototype, "manifestId", {
            get: function () {
                return this._manifestId;
            },
            set: function (value) {
                this._manifestId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoipManifestStatusRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoipManifestStatusRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoipManifestStatusRequest.prototype.toObject = function () {
            return {
                manifestId: this.manifestId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoipManifestStatusRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoipManifestStatusRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                manifestId: this.manifestId
            };
        };
        return VoipManifestStatusRequest;
    }());
    VoipManifestStatusRequest.id = 'ondewo.vtsi.VoipManifestStatusRequest';
    /**
     * Message implementation for ondewo.vtsi.VoipManifestStatus
     */
    var VoipManifestStatus = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoipManifestStatus to deeply clone from
         */
        function VoipManifestStatus(_value) {
            _value = _value || {};
            this.request = _value.request
                ? new VoipManifestStatusRequest(_value.request)
                : undefined;
            this.callsStatus = (_value.callsStatus || []).map(function (m) { return new VoipStatus(m); });
            VoipManifestStatus.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        VoipManifestStatus.deserializeBinary = function (bytes) {
            var instance = new VoipManifestStatus();
            VoipManifestStatus.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoipManifestStatus.refineValues = function (_instance) {
            _instance.request = _instance.request || undefined;
            _instance.callsStatus = _instance.callsStatus || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoipManifestStatus.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.request = new VoipManifestStatusRequest();
                        _reader.readMessage(_instance.request, VoipManifestStatusRequest.deserializeBinaryFromReader);
                        break;
                    case 2:
                        var messageInitializer2 = new VoipStatus();
                        _reader.readMessage(messageInitializer2, VoipStatus.deserializeBinaryFromReader);
                        (_instance.callsStatus = _instance.callsStatus || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            VoipManifestStatus.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoipManifestStatus.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.request) {
                _writer.writeMessage(1, _instance.request, VoipManifestStatusRequest.serializeBinaryToWriter);
            }
            if (_instance.callsStatus && _instance.callsStatus.length) {
                _writer.writeRepeatedMessage(2, _instance.callsStatus, VoipStatus.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(VoipManifestStatus.prototype, "request", {
            get: function () {
                return this._request;
            },
            set: function (value) {
                this._request = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipManifestStatus.prototype, "callsStatus", {
            get: function () {
                return this._callsStatus;
            },
            set: function (value) {
                this._callsStatus = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoipManifestStatus.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoipManifestStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoipManifestStatus.prototype.toObject = function () {
            return {
                request: this.request ? this.request.toObject() : undefined,
                callsStatus: (this.callsStatus || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoipManifestStatus.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoipManifestStatus.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                request: this.request ? this.request.toProtobufJSON(options) : null,
                callsStatus: (this.callsStatus || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return VoipManifestStatus;
    }());
    VoipManifestStatus.id = 'ondewo.vtsi.VoipManifestStatus';
    /**
     * Message implementation for ondewo.vtsi.GetVoipStatusRequest
     */
    exports.GetVoipStatusRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetVoipStatusRequest to deeply clone from
         */
        function GetVoipStatusRequest(_value) {
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
        GetVoipStatusRequest.deserializeBinary = function (bytes) {
            var instance = new GetVoipStatusRequest();
            GetVoipStatusRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetVoipStatusRequest.refineValues = function (_instance) { };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetVoipStatusRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetVoipStatusRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId || _instance.callId === '') {
                _writer.writeString(1, _instance.callId);
            }
            if (_instance.sipId || _instance.sipId === '') {
                _writer.writeString(2, _instance.sipId);
            }
        };
        Object.defineProperty(GetVoipStatusRequest.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._sipId = undefined;
                    this._id = GetVoipStatusRequest.IdCase.callId;
                }
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GetVoipStatusRequest.prototype, "sipId", {
            get: function () {
                return this._sipId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._callId = undefined;
                    this._id = GetVoipStatusRequest.IdCase.sipId;
                }
                this._sipId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GetVoipStatusRequest.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetVoipStatusRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetVoipStatusRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetVoipStatusRequest.prototype.toObject = function () {
            return {
                callId: this.callId,
                sipId: this.sipId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetVoipStatusRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetVoipStatusRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b;
            return {
                callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
                sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null
            };
        };
        return GetVoipStatusRequest;
    }());
    exports.GetVoipStatusRequest.id = 'ondewo.vtsi.GetVoipStatusRequest';
    (function (GetVoipStatusRequest) {
        var IdCase;
        (function (IdCase) {
            IdCase[IdCase["none"] = 0] = "none";
            IdCase[IdCase["callId"] = 1] = "callId";
            IdCase[IdCase["sipId"] = 2] = "sipId";
        })(IdCase = GetVoipStatusRequest.IdCase || (GetVoipStatusRequest.IdCase = {}));
    })(exports.GetVoipStatusRequest || (exports.GetVoipStatusRequest = {}));
    /**
     * Message implementation for ondewo.vtsi.VoipStatus
     */
    var VoipStatus = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoipStatus to deeply clone from
         */
        function VoipStatus(_value) {
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
        VoipStatus.deserializeBinary = function (bytes) {
            var instance = new VoipStatus();
            VoipStatus.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoipStatus.refineValues = function (_instance) {
            _instance.healthy = _instance.healthy || false;
            _instance.lastLog = _instance.lastLog || '';
            _instance.statusAsterisk = _instance.statusAsterisk || undefined;
            _instance.statusCai = _instance.statusCai || undefined;
            _instance.statusStt = _instance.statusStt || undefined;
            _instance.statusTts = _instance.statusTts || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoipStatus.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoipStatus.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(VoipStatus.prototype, "healthy", {
            get: function () {
                return this._healthy;
            },
            set: function (value) {
                this._healthy = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipStatus.prototype, "lastLog", {
            get: function () {
                return this._lastLog;
            },
            set: function (value) {
                this._lastLog = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipStatus.prototype, "statusAsterisk", {
            get: function () {
                return this._statusAsterisk;
            },
            set: function (value) {
                this._statusAsterisk = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipStatus.prototype, "statusCai", {
            get: function () {
                return this._statusCai;
            },
            set: function (value) {
                this._statusCai = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipStatus.prototype, "statusStt", {
            get: function () {
                return this._statusStt;
            },
            set: function (value) {
                this._statusStt = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipStatus.prototype, "statusTts", {
            get: function () {
                return this._statusTts;
            },
            set: function (value) {
                this._statusTts = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoipStatus.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoipStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoipStatus.prototype.toObject = function () {
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
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoipStatus.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoipStatus.prototype.toProtobufJSON = function (
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
        };
        return VoipStatus;
    }());
    VoipStatus.id = 'ondewo.vtsi.VoipStatus';
    /**
     * Message implementation for ondewo.vtsi.ServiceStatus
     */
    var ServiceStatus = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ServiceStatus to deeply clone from
         */
        function ServiceStatus(_value) {
            _value = _value || {};
            this.healthy = _value.healthy;
            this.lastLog = _value.lastLog;
            ServiceStatus.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ServiceStatus.deserializeBinary = function (bytes) {
            var instance = new ServiceStatus();
            ServiceStatus.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ServiceStatus.refineValues = function (_instance) {
            _instance.healthy = _instance.healthy || false;
            _instance.lastLog = _instance.lastLog || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ServiceStatus.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ServiceStatus.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.healthy) {
                _writer.writeBool(1, _instance.healthy);
            }
            if (_instance.lastLog) {
                _writer.writeString(2, _instance.lastLog);
            }
        };
        Object.defineProperty(ServiceStatus.prototype, "healthy", {
            get: function () {
                return this._healthy;
            },
            set: function (value) {
                this._healthy = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceStatus.prototype, "lastLog", {
            get: function () {
                return this._lastLog;
            },
            set: function (value) {
                this._lastLog = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ServiceStatus.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ServiceStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ServiceStatus.prototype.toObject = function () {
            return {
                healthy: this.healthy,
                lastLog: this.lastLog
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ServiceStatus.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ServiceStatus.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                healthy: this.healthy,
                lastLog: this.lastLog
            };
        };
        return ServiceStatus;
    }());
    ServiceStatus.id = 'ondewo.vtsi.ServiceStatus';
    /**
     * Message implementation for ondewo.vtsi.UpdateServicesStatusRequest
     */
    exports.UpdateServicesStatusRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UpdateServicesStatusRequest to deeply clone from
         */
        function UpdateServicesStatusRequest(_value) {
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
        UpdateServicesStatusRequest.deserializeBinary = function (bytes) {
            var instance = new UpdateServicesStatusRequest();
            UpdateServicesStatusRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UpdateServicesStatusRequest.refineValues = function (_instance) { };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UpdateServicesStatusRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UpdateServicesStatusRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId || _instance.callId === '') {
                _writer.writeString(1, _instance.callId);
            }
            if (_instance.sipId || _instance.sipId === '') {
                _writer.writeString(2, _instance.sipId);
            }
            if (_instance.manifestId || _instance.manifestId === '') {
                _writer.writeString(3, _instance.manifestId);
            }
        };
        Object.defineProperty(UpdateServicesStatusRequest.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._sipId = this._manifestId = undefined;
                    this._id = UpdateServicesStatusRequest.IdCase.callId;
                }
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateServicesStatusRequest.prototype, "sipId", {
            get: function () {
                return this._sipId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._callId = this._manifestId = undefined;
                    this._id = UpdateServicesStatusRequest.IdCase.sipId;
                }
                this._sipId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateServicesStatusRequest.prototype, "manifestId", {
            get: function () {
                return this._manifestId;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._callId = this._sipId = undefined;
                    this._id = UpdateServicesStatusRequest.IdCase.manifestId;
                }
                this._manifestId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UpdateServicesStatusRequest.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UpdateServicesStatusRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UpdateServicesStatusRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UpdateServicesStatusRequest.prototype.toObject = function () {
            return {
                callId: this.callId,
                sipId: this.sipId,
                manifestId: this.manifestId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UpdateServicesStatusRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UpdateServicesStatusRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            var _a, _b, _c;
            return {
                callId: (_a = this.callId) !== null && _a !== void 0 ? _a : null,
                sipId: (_b = this.sipId) !== null && _b !== void 0 ? _b : null,
                manifestId: (_c = this.manifestId) !== null && _c !== void 0 ? _c : null
            };
        };
        return UpdateServicesStatusRequest;
    }());
    exports.UpdateServicesStatusRequest.id = 'ondewo.vtsi.UpdateServicesStatusRequest';
    (function (UpdateServicesStatusRequest) {
        var IdCase;
        (function (IdCase) {
            IdCase[IdCase["none"] = 0] = "none";
            IdCase[IdCase["callId"] = 1] = "callId";
            IdCase[IdCase["sipId"] = 2] = "sipId";
            IdCase[IdCase["manifestId"] = 3] = "manifestId";
        })(IdCase = UpdateServicesStatusRequest.IdCase || (UpdateServicesStatusRequest.IdCase = {}));
    })(exports.UpdateServicesStatusRequest || (exports.UpdateServicesStatusRequest = {}));
    /**
     * Message implementation for ondewo.vtsi.UpdateServicesStatusResponse
     */
    var UpdateServicesStatusResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UpdateServicesStatusResponse to deeply clone from
         */
        function UpdateServicesStatusResponse(_value) {
            _value = _value || {};
            this.empty = _value.empty
                ? new googleProtobuf003.Empty(_value.empty)
                : undefined;
            UpdateServicesStatusResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        UpdateServicesStatusResponse.deserializeBinary = function (bytes) {
            var instance = new UpdateServicesStatusResponse();
            UpdateServicesStatusResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        UpdateServicesStatusResponse.refineValues = function (_instance) {
            _instance.empty = _instance.empty || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        UpdateServicesStatusResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.empty = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.empty, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UpdateServicesStatusResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        UpdateServicesStatusResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.empty) {
                _writer.writeMessage(1, _instance.empty, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(UpdateServicesStatusResponse.prototype, "empty", {
            get: function () {
                return this._empty;
            },
            set: function (value) {
                this._empty = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        UpdateServicesStatusResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            UpdateServicesStatusResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        UpdateServicesStatusResponse.prototype.toObject = function () {
            return {
                empty: this.empty ? this.empty.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        UpdateServicesStatusResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        UpdateServicesStatusResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                empty: this.empty ? this.empty.toProtobufJSON(options) : null
            };
        };
        return UpdateServicesStatusResponse;
    }());
    UpdateServicesStatusResponse.id = 'ondewo.vtsi.UpdateServicesStatusResponse';
    /**
     * Message implementation for ondewo.vtsi.DeployPreconditionRequest
     */
    var DeployPreconditionRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeployPreconditionRequest to deeply clone from
         */
        function DeployPreconditionRequest(_value) {
            _value = _value || {};
            this.sipSimVersion = _value.sipSimVersion;
            this.asteriskConfig = _value.asteriskConfig
                ? new AsteriskConfig(_value.asteriskConfig)
                : undefined;
            DeployPreconditionRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        DeployPreconditionRequest.deserializeBinary = function (bytes) {
            var instance = new DeployPreconditionRequest();
            DeployPreconditionRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        DeployPreconditionRequest.refineValues = function (_instance) {
            _instance.sipSimVersion = _instance.sipSimVersion || '';
            _instance.asteriskConfig = _instance.asteriskConfig || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        DeployPreconditionRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.sipSimVersion = _reader.readString();
                        break;
                    case 2:
                        _instance.asteriskConfig = new AsteriskConfig();
                        _reader.readMessage(_instance.asteriskConfig, AsteriskConfig.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DeployPreconditionRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        DeployPreconditionRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.sipSimVersion) {
                _writer.writeString(1, _instance.sipSimVersion);
            }
            if (_instance.asteriskConfig) {
                _writer.writeMessage(2, _instance.asteriskConfig, AsteriskConfig.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(DeployPreconditionRequest.prototype, "sipSimVersion", {
            get: function () {
                return this._sipSimVersion;
            },
            set: function (value) {
                this._sipSimVersion = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DeployPreconditionRequest.prototype, "asteriskConfig", {
            get: function () {
                return this._asteriskConfig;
            },
            set: function (value) {
                this._asteriskConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        DeployPreconditionRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            DeployPreconditionRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        DeployPreconditionRequest.prototype.toObject = function () {
            return {
                sipSimVersion: this.sipSimVersion,
                asteriskConfig: this.asteriskConfig
                    ? this.asteriskConfig.toObject()
                    : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        DeployPreconditionRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        DeployPreconditionRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                sipSimVersion: this.sipSimVersion,
                asteriskConfig: this.asteriskConfig
                    ? this.asteriskConfig.toProtobufJSON(options)
                    : null
            };
        };
        return DeployPreconditionRequest;
    }());
    DeployPreconditionRequest.id = 'ondewo.vtsi.DeployPreconditionRequest';
    /**
     * Message implementation for ondewo.vtsi.DeployPreconditionResponse
     */
    var DeployPreconditionResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeployPreconditionResponse to deeply clone from
         */
        function DeployPreconditionResponse(_value) {
            _value = _value || {};
            this.success = _value.success;
            DeployPreconditionResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        DeployPreconditionResponse.deserializeBinary = function (bytes) {
            var instance = new DeployPreconditionResponse();
            DeployPreconditionResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        DeployPreconditionResponse.refineValues = function (_instance) {
            _instance.success = _instance.success || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        DeployPreconditionResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        DeployPreconditionResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.success) {
                _writer.writeBool(1, _instance.success);
            }
        };
        Object.defineProperty(DeployPreconditionResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        DeployPreconditionResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            DeployPreconditionResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        DeployPreconditionResponse.prototype.toObject = function () {
            return {
                success: this.success
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        DeployPreconditionResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        DeployPreconditionResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                success: this.success
            };
        };
        return DeployPreconditionResponse;
    }());
    DeployPreconditionResponse.id = 'ondewo.vtsi.DeployPreconditionResponse';
    /**
     * Message implementation for ondewo.vtsi.GetManifestIDsRequest
     */
    var GetManifestIDsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetManifestIDsRequest to deeply clone from
         */
        function GetManifestIDsRequest(_value) {
            _value = _value || {};
            this.empty = _value.empty
                ? new googleProtobuf003.Empty(_value.empty)
                : undefined;
            GetManifestIDsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetManifestIDsRequest.deserializeBinary = function (bytes) {
            var instance = new GetManifestIDsRequest();
            GetManifestIDsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetManifestIDsRequest.refineValues = function (_instance) {
            _instance.empty = _instance.empty || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetManifestIDsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.empty = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.empty, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            GetManifestIDsRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetManifestIDsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.empty) {
                _writer.writeMessage(1, _instance.empty, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(GetManifestIDsRequest.prototype, "empty", {
            get: function () {
                return this._empty;
            },
            set: function (value) {
                this._empty = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetManifestIDsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetManifestIDsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetManifestIDsRequest.prototype.toObject = function () {
            return {
                empty: this.empty ? this.empty.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetManifestIDsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetManifestIDsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                empty: this.empty ? this.empty.toProtobufJSON(options) : null
            };
        };
        return GetManifestIDsRequest;
    }());
    GetManifestIDsRequest.id = 'ondewo.vtsi.GetManifestIDsRequest';
    /**
     * Message implementation for ondewo.vtsi.GetManifestIDsResponse
     */
    var GetManifestIDsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetManifestIDsResponse to deeply clone from
         */
        function GetManifestIDsResponse(_value) {
            _value = _value || {};
            this.manifestIds = (_value.manifestIds || []).slice();
            GetManifestIDsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetManifestIDsResponse.deserializeBinary = function (bytes) {
            var instance = new GetManifestIDsResponse();
            GetManifestIDsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetManifestIDsResponse.refineValues = function (_instance) {
            _instance.manifestIds = _instance.manifestIds || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetManifestIDsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetManifestIDsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.manifestIds && _instance.manifestIds.length) {
                _writer.writeRepeatedString(1, _instance.manifestIds);
            }
        };
        Object.defineProperty(GetManifestIDsResponse.prototype, "manifestIds", {
            get: function () {
                return this._manifestIds;
            },
            set: function (value) {
                this._manifestIds = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetManifestIDsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetManifestIDsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetManifestIDsResponse.prototype.toObject = function () {
            return {
                manifestIds: (this.manifestIds || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetManifestIDsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetManifestIDsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                manifestIds: (this.manifestIds || []).slice()
            };
        };
        return GetManifestIDsResponse;
    }());
    GetManifestIDsResponse.id = 'ondewo.vtsi.GetManifestIDsResponse';
    /**
     * Message implementation for ondewo.vtsi.GetCallIDsRequest
     */
    var GetCallIDsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetCallIDsRequest to deeply clone from
         */
        function GetCallIDsRequest(_value) {
            _value = _value || {};
            this.empty = _value.empty
                ? new googleProtobuf003.Empty(_value.empty)
                : undefined;
            GetCallIDsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetCallIDsRequest.deserializeBinary = function (bytes) {
            var instance = new GetCallIDsRequest();
            GetCallIDsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetCallIDsRequest.refineValues = function (_instance) {
            _instance.empty = _instance.empty || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetCallIDsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.empty = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.empty, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            GetCallIDsRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetCallIDsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.empty) {
                _writer.writeMessage(1, _instance.empty, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(GetCallIDsRequest.prototype, "empty", {
            get: function () {
                return this._empty;
            },
            set: function (value) {
                this._empty = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetCallIDsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetCallIDsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetCallIDsRequest.prototype.toObject = function () {
            return {
                empty: this.empty ? this.empty.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetCallIDsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetCallIDsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                empty: this.empty ? this.empty.toProtobufJSON(options) : null
            };
        };
        return GetCallIDsRequest;
    }());
    GetCallIDsRequest.id = 'ondewo.vtsi.GetCallIDsRequest';
    /**
     * Message implementation for ondewo.vtsi.GetCallIDsResponse
     */
    var GetCallIDsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetCallIDsResponse to deeply clone from
         */
        function GetCallIDsResponse(_value) {
            _value = _value || {};
            this.callIds = (_value.callIds || []).slice();
            GetCallIDsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetCallIDsResponse.deserializeBinary = function (bytes) {
            var instance = new GetCallIDsResponse();
            GetCallIDsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetCallIDsResponse.refineValues = function (_instance) {
            _instance.callIds = _instance.callIds || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetCallIDsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetCallIDsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callIds && _instance.callIds.length) {
                _writer.writeRepeatedString(1, _instance.callIds);
            }
        };
        Object.defineProperty(GetCallIDsResponse.prototype, "callIds", {
            get: function () {
                return this._callIds;
            },
            set: function (value) {
                this._callIds = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetCallIDsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetCallIDsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetCallIDsResponse.prototype.toObject = function () {
            return {
                callIds: (this.callIds || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetCallIDsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetCallIDsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                callIds: (this.callIds || []).slice()
            };
        };
        return GetCallIDsResponse;
    }());
    GetCallIDsResponse.id = 'ondewo.vtsi.GetCallIDsResponse';
    /**
     * Message implementation for ondewo.vtsi.GetSessionIDRequest
     */
    var GetSessionIDRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetSessionIDRequest to deeply clone from
         */
        function GetSessionIDRequest(_value) {
            _value = _value || {};
            this.callId = _value.callId;
            GetSessionIDRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetSessionIDRequest.deserializeBinary = function (bytes) {
            var instance = new GetSessionIDRequest();
            GetSessionIDRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetSessionIDRequest.refineValues = function (_instance) {
            _instance.callId = _instance.callId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetSessionIDRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetSessionIDRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId) {
                _writer.writeString(1, _instance.callId);
            }
        };
        Object.defineProperty(GetSessionIDRequest.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetSessionIDRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetSessionIDRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetSessionIDRequest.prototype.toObject = function () {
            return {
                callId: this.callId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetSessionIDRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetSessionIDRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                callId: this.callId
            };
        };
        return GetSessionIDRequest;
    }());
    GetSessionIDRequest.id = 'ondewo.vtsi.GetSessionIDRequest';
    /**
     * Message implementation for ondewo.vtsi.GetSessionIDResponse
     */
    var GetSessionIDResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetSessionIDResponse to deeply clone from
         */
        function GetSessionIDResponse(_value) {
            _value = _value || {};
            this.callId = _value.callId;
            this.sessionId = _value.sessionId;
            GetSessionIDResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetSessionIDResponse.deserializeBinary = function (bytes) {
            var instance = new GetSessionIDResponse();
            GetSessionIDResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetSessionIDResponse.refineValues = function (_instance) {
            _instance.callId = _instance.callId || '';
            _instance.sessionId = _instance.sessionId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetSessionIDResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetSessionIDResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId) {
                _writer.writeString(1, _instance.callId);
            }
            if (_instance.sessionId) {
                _writer.writeString(2, _instance.sessionId);
            }
        };
        Object.defineProperty(GetSessionIDResponse.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GetSessionIDResponse.prototype, "sessionId", {
            get: function () {
                return this._sessionId;
            },
            set: function (value) {
                this._sessionId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetSessionIDResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetSessionIDResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetSessionIDResponse.prototype.toObject = function () {
            return {
                callId: this.callId,
                sessionId: this.sessionId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetSessionIDResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetSessionIDResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                callId: this.callId,
                sessionId: this.sessionId
            };
        };
        return GetSessionIDResponse;
    }());
    GetSessionIDResponse.id = 'ondewo.vtsi.GetSessionIDResponse';
    /**
     * Message implementation for ondewo.vtsi.ShutdownUnhealthyCallsRequest
     */
    var ShutdownUnhealthyCallsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ShutdownUnhealthyCallsRequest to deeply clone from
         */
        function ShutdownUnhealthyCallsRequest(_value) {
            _value = _value || {};
            this.empty = _value.empty
                ? new googleProtobuf003.Empty(_value.empty)
                : undefined;
            ShutdownUnhealthyCallsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ShutdownUnhealthyCallsRequest.deserializeBinary = function (bytes) {
            var instance = new ShutdownUnhealthyCallsRequest();
            ShutdownUnhealthyCallsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ShutdownUnhealthyCallsRequest.refineValues = function (_instance) {
            _instance.empty = _instance.empty || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ShutdownUnhealthyCallsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.empty = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.empty, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ShutdownUnhealthyCallsRequest.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ShutdownUnhealthyCallsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.empty) {
                _writer.writeMessage(1, _instance.empty, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(ShutdownUnhealthyCallsRequest.prototype, "empty", {
            get: function () {
                return this._empty;
            },
            set: function (value) {
                this._empty = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ShutdownUnhealthyCallsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ShutdownUnhealthyCallsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ShutdownUnhealthyCallsRequest.prototype.toObject = function () {
            return {
                empty: this.empty ? this.empty.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ShutdownUnhealthyCallsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ShutdownUnhealthyCallsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                empty: this.empty ? this.empty.toProtobufJSON(options) : null
            };
        };
        return ShutdownUnhealthyCallsRequest;
    }());
    ShutdownUnhealthyCallsRequest.id = 'ondewo.vtsi.ShutdownUnhealthyCallsRequest';
    /**
     * Message implementation for ondewo.vtsi.ShutdownUnhealthyCallsResponse
     */
    var ShutdownUnhealthyCallsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ShutdownUnhealthyCallsResponse to deeply clone from
         */
        function ShutdownUnhealthyCallsResponse(_value) {
            _value = _value || {};
            this.success = _value.success;
            ShutdownUnhealthyCallsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        ShutdownUnhealthyCallsResponse.deserializeBinary = function (bytes) {
            var instance = new ShutdownUnhealthyCallsResponse();
            ShutdownUnhealthyCallsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        ShutdownUnhealthyCallsResponse.refineValues = function (_instance) {
            _instance.success = _instance.success || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        ShutdownUnhealthyCallsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        ShutdownUnhealthyCallsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.success) {
                _writer.writeBool(1, _instance.success);
            }
        };
        Object.defineProperty(ShutdownUnhealthyCallsResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        ShutdownUnhealthyCallsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            ShutdownUnhealthyCallsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        ShutdownUnhealthyCallsResponse.prototype.toObject = function () {
            return {
                success: this.success
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        ShutdownUnhealthyCallsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        ShutdownUnhealthyCallsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                success: this.success
            };
        };
        return ShutdownUnhealthyCallsResponse;
    }());
    ShutdownUnhealthyCallsResponse.id = 'ondewo.vtsi.ShutdownUnhealthyCallsResponse';

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for VoipSessions.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_VOIP_SESSIONS_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_VOIP_SESSIONS_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.vtsi.VoipSessions
     */
    var VoipSessionsClient = /** @class */ (function () {
        function VoipSessionsClient(settings, clientFactory, handler) {
            var _this = this;
            this.handler = handler;
            /**
             * Raw RPC implementation for each service client method.
             * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
             * Attention: these methods do not throw errors when non-zero status codes are received.
             */
            this.$raw = {
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/RunManifest
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.RunManifestResponse>>
                 */
                runManifest: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/RunManifest',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ManifestRequest,
                        responseClass: RunManifestResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/RemoveManifest
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.RemoveManifestResponse>>
                 */
                removeManifest: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/RemoveManifest',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ManifestRequest,
                        responseClass: RemoveManifestResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/GetManifestIDs
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.GetManifestIDsResponse>>
                 */
                getManifestIDs: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/GetManifestIDs',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetManifestIDsRequest,
                        responseClass: GetManifestIDsResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/StartCallInstance
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.StartCallInstanceResponse>>
                 */
                startCallInstance: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/StartCallInstance',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: StartCallInstanceRequest,
                        responseClass: StartCallInstanceResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/StopCallInstance
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.StopCallInstanceResponse>>
                 */
                stopCallInstance: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/StopCallInstance',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: exports.StopCallInstanceRequest,
                        responseClass: StopCallInstanceResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/StartMultipleCallInstances
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.StartMultipleCallInstancesResponse>>
                 */
                startMultipleCallInstances: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/StartMultipleCallInstances',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: StartMultipleCallInstancesRequest,
                        responseClass: StartMultipleCallInstancesResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/GetCallIDs
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.GetCallIDsResponse>>
                 */
                getCallIDs: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/GetCallIDs',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetCallIDsRequest,
                        responseClass: GetCallIDsResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/GetSessionID
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.GetSessionIDResponse>>
                 */
                getSessionID: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/GetSessionID',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetSessionIDRequest,
                        responseClass: GetSessionIDResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/ShutdownUnhealthyCalls
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.ShutdownUnhealthyCallsResponse>>
                 */
                shutdownUnhealthyCalls: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/ShutdownUnhealthyCalls',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: ShutdownUnhealthyCallsRequest,
                        responseClass: ShutdownUnhealthyCallsResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/GetManifestStatus
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.VoipManifestStatus>>
                 */
                getManifestStatus: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/GetManifestStatus',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: VoipManifestStatusRequest,
                        responseClass: VoipManifestStatus
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/GetInstanceStatus
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.VoipStatus>>
                 */
                getInstanceStatus: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/GetInstanceStatus',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: exports.GetVoipStatusRequest,
                        responseClass: VoipStatus
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/UpdateServicesStatus
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.UpdateServicesStatusResponse>>
                 */
                updateServicesStatus: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/UpdateServicesStatus',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: exports.UpdateServicesStatusRequest,
                        responseClass: UpdateServicesStatusResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipSessions/DeployPreconditionForWorkingSetup
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.DeployPreconditionResponse>>
                 */
                deployPreconditionForWorkingSetup: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipSessions/DeployPreconditionForWorkingSetup',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: DeployPreconditionRequest,
                        responseClass: DeployPreconditionResponse
                    });
                }
            };
            this.client = clientFactory.createClient('ondewo.vtsi.VoipSessions', settings);
        }
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/RunManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.RunManifestResponse>
         */
        VoipSessionsClient.prototype.runManifest = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .runManifest(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/RemoveManifest
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.RemoveManifestResponse>
         */
        VoipSessionsClient.prototype.removeManifest = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .removeManifest(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/GetManifestIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.GetManifestIDsResponse>
         */
        VoipSessionsClient.prototype.getManifestIDs = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getManifestIDs(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/StartCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.StartCallInstanceResponse>
         */
        VoipSessionsClient.prototype.startCallInstance = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .startCallInstance(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/StopCallInstance
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.StopCallInstanceResponse>
         */
        VoipSessionsClient.prototype.stopCallInstance = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .stopCallInstance(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/StartMultipleCallInstances
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.StartMultipleCallInstancesResponse>
         */
        VoipSessionsClient.prototype.startMultipleCallInstances = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .startMultipleCallInstances(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/GetCallIDs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.GetCallIDsResponse>
         */
        VoipSessionsClient.prototype.getCallIDs = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getCallIDs(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/GetSessionID
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.GetSessionIDResponse>
         */
        VoipSessionsClient.prototype.getSessionID = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getSessionID(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/ShutdownUnhealthyCalls
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.ShutdownUnhealthyCallsResponse>
         */
        VoipSessionsClient.prototype.shutdownUnhealthyCalls = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .shutdownUnhealthyCalls(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/GetManifestStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.VoipManifestStatus>
         */
        VoipSessionsClient.prototype.getManifestStatus = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getManifestStatus(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/GetInstanceStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.VoipStatus>
         */
        VoipSessionsClient.prototype.getInstanceStatus = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getInstanceStatus(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/UpdateServicesStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.UpdateServicesStatusResponse>
         */
        VoipSessionsClient.prototype.updateServicesStatus = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateServicesStatus(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipSessions/DeployPreconditionForWorkingSetup
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.DeployPreconditionResponse>
         */
        VoipSessionsClient.prototype.deployPreconditionForWorkingSetup = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deployPreconditionForWorkingSetup(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return VoipSessionsClient;
    }());
    VoipSessionsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function VoipSessionsClient_Factory() { return new VoipSessionsClient(i0.ɵɵinject(GRPC_VOIP_SESSIONS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: VoipSessionsClient, providedIn: "any" });
    VoipSessionsClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    VoipSessionsClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_VOIP_SESSIONS_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /* tslint:disable */
    /**
     * Message implementation for ondewo.sip.EndCallRequest
     */
    var EndCallRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EndCallRequest to deeply clone from
         */
        function EndCallRequest(_value) {
            _value = _value || {};
            this.hardHangup = _value.hardHangup;
            EndCallRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        EndCallRequest.deserializeBinary = function (bytes) {
            var instance = new EndCallRequest();
            EndCallRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        EndCallRequest.refineValues = function (_instance) {
            _instance.hardHangup = _instance.hardHangup || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        EndCallRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        EndCallRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.hardHangup) {
                _writer.writeBool(1, _instance.hardHangup);
            }
        };
        Object.defineProperty(EndCallRequest.prototype, "hardHangup", {
            get: function () {
                return this._hardHangup;
            },
            set: function (value) {
                this._hardHangup = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        EndCallRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            EndCallRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        EndCallRequest.prototype.toObject = function () {
            return {
                hardHangup: this.hardHangup
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        EndCallRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        EndCallRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                hardHangup: this.hardHangup
            };
        };
        return EndCallRequest;
    }());
    EndCallRequest.id = 'ondewo.sip.EndCallRequest';
    /**
     * Message implementation for ondewo.sip.StartCallRequest
     */
    var StartCallRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartCallRequest to deeply clone from
         */
        function StartCallRequest(_value) {
            _value = _value || {};
            this.calleeId = _value.calleeId;
            StartCallRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        StartCallRequest.deserializeBinary = function (bytes) {
            var instance = new StartCallRequest();
            StartCallRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartCallRequest.refineValues = function (_instance) {
            _instance.calleeId = _instance.calleeId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartCallRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartCallRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.calleeId) {
                _writer.writeString(1, _instance.calleeId);
            }
        };
        Object.defineProperty(StartCallRequest.prototype, "calleeId", {
            get: function () {
                return this._calleeId;
            },
            set: function (value) {
                this._calleeId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartCallRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartCallRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartCallRequest.prototype.toObject = function () {
            return {
                calleeId: this.calleeId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartCallRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartCallRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                calleeId: this.calleeId
            };
        };
        return StartCallRequest;
    }());
    StartCallRequest.id = 'ondewo.sip.StartCallRequest';
    /**
     * Message implementation for ondewo.sip.RegisterAccountRequest
     */
    var RegisterAccountRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of RegisterAccountRequest to deeply clone from
         */
        function RegisterAccountRequest(_value) {
            _value = _value || {};
            this.accountName = _value.accountName;
            this.password = _value.password;
            RegisterAccountRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        RegisterAccountRequest.deserializeBinary = function (bytes) {
            var instance = new RegisterAccountRequest();
            RegisterAccountRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        RegisterAccountRequest.refineValues = function (_instance) {
            _instance.accountName = _instance.accountName || '';
            _instance.password = _instance.password || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        RegisterAccountRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        RegisterAccountRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.accountName) {
                _writer.writeString(1, _instance.accountName);
            }
            if (_instance.password) {
                _writer.writeString(2, _instance.password);
            }
        };
        Object.defineProperty(RegisterAccountRequest.prototype, "accountName", {
            get: function () {
                return this._accountName;
            },
            set: function (value) {
                this._accountName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterAccountRequest.prototype, "password", {
            get: function () {
                return this._password;
            },
            set: function (value) {
                this._password = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        RegisterAccountRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            RegisterAccountRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        RegisterAccountRequest.prototype.toObject = function () {
            return {
                accountName: this.accountName,
                password: this.password
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        RegisterAccountRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        RegisterAccountRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                accountName: this.accountName,
                password: this.password
            };
        };
        return RegisterAccountRequest;
    }());
    RegisterAccountRequest.id = 'ondewo.sip.RegisterAccountRequest';
    /**
     * Message implementation for ondewo.sip.StartSessionRequest
     */
    var StartSessionRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StartSessionRequest to deeply clone from
         */
        function StartSessionRequest(_value) {
            _value = _value || {};
            this.accountName = _value.accountName;
            this.autoAnswerInterval = _value.autoAnswerInterval;
            StartSessionRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        StartSessionRequest.deserializeBinary = function (bytes) {
            var instance = new StartSessionRequest();
            StartSessionRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        StartSessionRequest.refineValues = function (_instance) {
            _instance.accountName = _instance.accountName || '';
            _instance.autoAnswerInterval = _instance.autoAnswerInterval || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        StartSessionRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        StartSessionRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.accountName) {
                _writer.writeString(1, _instance.accountName);
            }
            if (_instance.autoAnswerInterval) {
                _writer.writeInt32(2, _instance.autoAnswerInterval);
            }
        };
        Object.defineProperty(StartSessionRequest.prototype, "accountName", {
            get: function () {
                return this._accountName;
            },
            set: function (value) {
                this._accountName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StartSessionRequest.prototype, "autoAnswerInterval", {
            get: function () {
                return this._autoAnswerInterval;
            },
            set: function (value) {
                this._autoAnswerInterval = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        StartSessionRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            StartSessionRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        StartSessionRequest.prototype.toObject = function () {
            return {
                accountName: this.accountName,
                autoAnswerInterval: this.autoAnswerInterval
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        StartSessionRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        StartSessionRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                accountName: this.accountName,
                autoAnswerInterval: this.autoAnswerInterval
            };
        };
        return StartSessionRequest;
    }());
    StartSessionRequest.id = 'ondewo.sip.StartSessionRequest';
    /**
     * Message implementation for ondewo.sip.TransferCallRequest
     */
    var TransferCallRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TransferCallRequest to deeply clone from
         */
        function TransferCallRequest(_value) {
            _value = _value || {};
            this.transferId = _value.transferId;
            TransferCallRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        TransferCallRequest.deserializeBinary = function (bytes) {
            var instance = new TransferCallRequest();
            TransferCallRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        TransferCallRequest.refineValues = function (_instance) {
            _instance.transferId = _instance.transferId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        TransferCallRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        TransferCallRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.transferId) {
                _writer.writeString(1, _instance.transferId);
            }
        };
        Object.defineProperty(TransferCallRequest.prototype, "transferId", {
            get: function () {
                return this._transferId;
            },
            set: function (value) {
                this._transferId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        TransferCallRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            TransferCallRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        TransferCallRequest.prototype.toObject = function () {
            return {
                transferId: this.transferId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        TransferCallRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        TransferCallRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                transferId: this.transferId
            };
        };
        return TransferCallRequest;
    }());
    TransferCallRequest.id = 'ondewo.sip.TransferCallRequest';
    /**
     * Message implementation for ondewo.sip.SipStatus
     */
    exports.SipStatus = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SipStatus to deeply clone from
         */
        function SipStatus(_value) {
            _value = _value || {};
            this.accountName = _value.accountName;
            this.timestamp = _value.timestamp
                ? new googleProtobuf003.Timestamp(_value.timestamp)
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
        SipStatus.deserializeBinary = function (bytes) {
            var instance = new SipStatus();
            SipStatus.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SipStatus.refineValues = function (_instance) {
            _instance.accountName = _instance.accountName || '';
            _instance.timestamp = _instance.timestamp || undefined;
            _instance.statusType = _instance.statusType || 0;
            _instance.calleeId = _instance.calleeId || '';
            _instance.transferCallId = _instance.transferCallId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SipStatus.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.accountName = _reader.readString();
                        break;
                    case 2:
                        _instance.timestamp = new googleProtobuf003.Timestamp();
                        _reader.readMessage(_instance.timestamp, googleProtobuf003.Timestamp.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SipStatus.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.accountName) {
                _writer.writeString(1, _instance.accountName);
            }
            if (_instance.timestamp) {
                _writer.writeMessage(2, _instance.timestamp, googleProtobuf003.Timestamp.serializeBinaryToWriter);
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
        };
        Object.defineProperty(SipStatus.prototype, "accountName", {
            get: function () {
                return this._accountName;
            },
            set: function (value) {
                this._accountName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SipStatus.prototype, "timestamp", {
            get: function () {
                return this._timestamp;
            },
            set: function (value) {
                this._timestamp = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SipStatus.prototype, "statusType", {
            get: function () {
                return this._statusType;
            },
            set: function (value) {
                this._statusType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SipStatus.prototype, "calleeId", {
            get: function () {
                return this._calleeId;
            },
            set: function (value) {
                this._calleeId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SipStatus.prototype, "transferCallId", {
            get: function () {
                return this._transferCallId;
            },
            set: function (value) {
                this._transferCallId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SipStatus.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SipStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SipStatus.prototype.toObject = function () {
            return {
                accountName: this.accountName,
                timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
                statusType: this.statusType,
                calleeId: this.calleeId,
                transferCallId: this.transferCallId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SipStatus.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SipStatus.prototype.toProtobufJSON = function (
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
        };
        return SipStatus;
    }());
    exports.SipStatus.id = 'ondewo.sip.SipStatus';
    (function (SipStatus) {
        var StatusType;
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
    })(exports.SipStatus || (exports.SipStatus = {}));
    /**
     * Message implementation for ondewo.sip.SipStatusHistoryResponse
     */
    var SipStatusHistoryResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SipStatusHistoryResponse to deeply clone from
         */
        function SipStatusHistoryResponse(_value) {
            _value = _value || {};
            this.statusHistory = (_value.statusHistory || []).map(function (m) { return new exports.SipStatus(m); });
            SipStatusHistoryResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SipStatusHistoryResponse.deserializeBinary = function (bytes) {
            var instance = new SipStatusHistoryResponse();
            SipStatusHistoryResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SipStatusHistoryResponse.refineValues = function (_instance) {
            _instance.statusHistory = _instance.statusHistory || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SipStatusHistoryResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new exports.SipStatus();
                        _reader.readMessage(messageInitializer1, exports.SipStatus.deserializeBinaryFromReader);
                        (_instance.statusHistory = _instance.statusHistory || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SipStatusHistoryResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SipStatusHistoryResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.statusHistory && _instance.statusHistory.length) {
                _writer.writeRepeatedMessage(1, _instance.statusHistory, exports.SipStatus.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(SipStatusHistoryResponse.prototype, "statusHistory", {
            get: function () {
                return this._statusHistory;
            },
            set: function (value) {
                this._statusHistory = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SipStatusHistoryResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SipStatusHistoryResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SipStatusHistoryResponse.prototype.toObject = function () {
            return {
                statusHistory: (this.statusHistory || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SipStatusHistoryResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SipStatusHistoryResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                statusHistory: (this.statusHistory || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return SipStatusHistoryResponse;
    }());
    SipStatusHistoryResponse.id = 'ondewo.sip.SipStatusHistoryResponse';
    /**
     * Message implementation for ondewo.sip.PlayWavFilesRequest
     */
    var PlayWavFilesRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of PlayWavFilesRequest to deeply clone from
         */
        function PlayWavFilesRequest(_value) {
            _value = _value || {};
            this.wavFiles = (_value.wavFiles || []).map(function (b) { return b ? b.subarray(0) : new Uint8Array(); });
            PlayWavFilesRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        PlayWavFilesRequest.deserializeBinary = function (bytes) {
            var instance = new PlayWavFilesRequest();
            PlayWavFilesRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        PlayWavFilesRequest.refineValues = function (_instance) {
            _instance.wavFiles = _instance.wavFiles || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        PlayWavFilesRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        PlayWavFilesRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.wavFiles && _instance.wavFiles.length) {
                _writer.writeRepeatedBytes(1, _instance.wavFiles);
            }
        };
        Object.defineProperty(PlayWavFilesRequest.prototype, "wavFiles", {
            get: function () {
                return this._wavFiles;
            },
            set: function (value) {
                this._wavFiles = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        PlayWavFilesRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            PlayWavFilesRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        PlayWavFilesRequest.prototype.toObject = function () {
            return {
                wavFiles: (this.wavFiles || []).map(function (b) { return b ? b.subarray(0) : new Uint8Array(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        PlayWavFilesRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        PlayWavFilesRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                wavFiles: (this.wavFiles || []).map(function (b) { return (b ? common.uint8ArrayToBase64(b) : ''); })
            };
        };
        return PlayWavFilesRequest;
    }());
    PlayWavFilesRequest.id = 'ondewo.sip.PlayWavFilesRequest';

    /**
     * Message implementation for ondewo.vtsi.GetCallIdsRequest
     */
    var GetCallIdsRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetCallIdsRequest to deeply clone from
         */
        function GetCallIdsRequest(_value) {
            _value = _value || {};
            this.sipId = _value.sipId;
            GetCallIdsRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetCallIdsRequest.deserializeBinary = function (bytes) {
            var instance = new GetCallIdsRequest();
            GetCallIdsRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetCallIdsRequest.refineValues = function (_instance) {
            _instance.sipId = _instance.sipId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetCallIdsRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetCallIdsRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.sipId) {
                _writer.writeString(1, _instance.sipId);
            }
        };
        Object.defineProperty(GetCallIdsRequest.prototype, "sipId", {
            get: function () {
                return this._sipId;
            },
            set: function (value) {
                this._sipId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetCallIdsRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetCallIdsRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetCallIdsRequest.prototype.toObject = function () {
            return {
                sipId: this.sipId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetCallIdsRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetCallIdsRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                sipId: this.sipId
            };
        };
        return GetCallIdsRequest;
    }());
    GetCallIdsRequest.id = 'ondewo.vtsi.GetCallIdsRequest';
    /**
     * Message implementation for ondewo.vtsi.GetCallIdsResponse
     */
    var GetCallIdsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetCallIdsResponse to deeply clone from
         */
        function GetCallIdsResponse(_value) {
            _value = _value || {};
            this.sipId = _value.sipId;
            this.callIds = (_value.callIds || []).slice();
            GetCallIdsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetCallIdsResponse.deserializeBinary = function (bytes) {
            var instance = new GetCallIdsResponse();
            GetCallIdsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetCallIdsResponse.refineValues = function (_instance) {
            _instance.sipId = _instance.sipId || '';
            _instance.callIds = _instance.callIds || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetCallIdsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetCallIdsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.sipId) {
                _writer.writeString(1, _instance.sipId);
            }
            if (_instance.callIds && _instance.callIds.length) {
                _writer.writeRepeatedString(2, _instance.callIds);
            }
        };
        Object.defineProperty(GetCallIdsResponse.prototype, "sipId", {
            get: function () {
                return this._sipId;
            },
            set: function (value) {
                this._sipId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GetCallIdsResponse.prototype, "callIds", {
            get: function () {
                return this._callIds;
            },
            set: function (value) {
                this._callIds = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetCallIdsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetCallIdsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetCallIdsResponse.prototype.toObject = function () {
            return {
                sipId: this.sipId,
                callIds: (this.callIds || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetCallIdsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetCallIdsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                sipId: this.sipId,
                callIds: (this.callIds || []).slice()
            };
        };
        return GetCallIdsResponse;
    }());
    GetCallIdsResponse.id = 'ondewo.vtsi.GetCallIdsResponse';
    /**
     * Message implementation for ondewo.vtsi.GetVoipLogRequest
     */
    var GetVoipLogRequest = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetVoipLogRequest to deeply clone from
         */
        function GetVoipLogRequest(_value) {
            _value = _value || {};
            this.callId = _value.callId;
            GetVoipLogRequest.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetVoipLogRequest.deserializeBinary = function (bytes) {
            var instance = new GetVoipLogRequest();
            GetVoipLogRequest.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetVoipLogRequest.refineValues = function (_instance) {
            _instance.callId = _instance.callId || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetVoipLogRequest.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetVoipLogRequest.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.callId) {
                _writer.writeString(1, _instance.callId);
            }
        };
        Object.defineProperty(GetVoipLogRequest.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetVoipLogRequest.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetVoipLogRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetVoipLogRequest.prototype.toObject = function () {
            return {
                callId: this.callId
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetVoipLogRequest.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetVoipLogRequest.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                callId: this.callId
            };
        };
        return GetVoipLogRequest;
    }());
    GetVoipLogRequest.id = 'ondewo.vtsi.GetVoipLogRequest';
    /**
     * Message implementation for ondewo.vtsi.GetVoipLogResponse
     */
    var GetVoipLogResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of GetVoipLogResponse to deeply clone from
         */
        function GetVoipLogResponse(_value) {
            _value = _value || {};
            this.activeLog = _value.activeLog
                ? new VoipLog(_value.activeLog)
                : undefined;
            this.doneLogs = (_value.doneLogs || []).map(function (m) { return new VoipLog(m); });
            GetVoipLogResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        GetVoipLogResponse.deserializeBinary = function (bytes) {
            var instance = new GetVoipLogResponse();
            GetVoipLogResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        GetVoipLogResponse.refineValues = function (_instance) {
            _instance.activeLog = _instance.activeLog || undefined;
            _instance.doneLogs = _instance.doneLogs || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        GetVoipLogResponse.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.activeLog = new VoipLog();
                        _reader.readMessage(_instance.activeLog, VoipLog.deserializeBinaryFromReader);
                        break;
                    case 2:
                        var messageInitializer2 = new VoipLog();
                        _reader.readMessage(messageInitializer2, VoipLog.deserializeBinaryFromReader);
                        (_instance.doneLogs = _instance.doneLogs || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            GetVoipLogResponse.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        GetVoipLogResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.activeLog) {
                _writer.writeMessage(1, _instance.activeLog, VoipLog.serializeBinaryToWriter);
            }
            if (_instance.doneLogs && _instance.doneLogs.length) {
                _writer.writeRepeatedMessage(2, _instance.doneLogs, VoipLog.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(GetVoipLogResponse.prototype, "activeLog", {
            get: function () {
                return this._activeLog;
            },
            set: function (value) {
                this._activeLog = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GetVoipLogResponse.prototype, "doneLogs", {
            get: function () {
                return this._doneLogs;
            },
            set: function (value) {
                this._doneLogs = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        GetVoipLogResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            GetVoipLogResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        GetVoipLogResponse.prototype.toObject = function () {
            return {
                activeLog: this.activeLog ? this.activeLog.toObject() : undefined,
                doneLogs: (this.doneLogs || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        GetVoipLogResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        GetVoipLogResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                activeLog: this.activeLog ? this.activeLog.toProtobufJSON(options) : null,
                doneLogs: (this.doneLogs || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return GetVoipLogResponse;
    }());
    GetVoipLogResponse.id = 'ondewo.vtsi.GetVoipLogResponse';
    /**
     * Message implementation for ondewo.vtsi.VoipLog
     */
    var VoipLog = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of VoipLog to deeply clone from
         */
        function VoipLog(_value) {
            _value = _value || {};
            this.callId = _value.callId;
            this.startTime = _value.startTime;
            this.endTime = _value.endTime;
            this.statusHistory = (_value.statusHistory || []).map(function (m) { return new exports.SipStatus(m); });
            this.counters = _value.counters ? new Counters(_value.counters) : undefined;
            VoipLog.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        VoipLog.deserializeBinary = function (bytes) {
            var instance = new VoipLog();
            VoipLog.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        VoipLog.refineValues = function (_instance) {
            _instance.callId = _instance.callId || '';
            _instance.startTime = _instance.startTime || 0;
            _instance.endTime = _instance.endTime || 0;
            _instance.statusHistory = _instance.statusHistory || [];
            _instance.counters = _instance.counters || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        VoipLog.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer4 = new exports.SipStatus();
                        _reader.readMessage(messageInitializer4, exports.SipStatus.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        VoipLog.serializeBinaryToWriter = function (_instance, _writer) {
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
                _writer.writeRepeatedMessage(4, _instance.statusHistory, exports.SipStatus.serializeBinaryToWriter);
            }
            if (_instance.counters) {
                _writer.writeMessage(5, _instance.counters, Counters.serializeBinaryToWriter);
            }
        };
        Object.defineProperty(VoipLog.prototype, "callId", {
            get: function () {
                return this._callId;
            },
            set: function (value) {
                this._callId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipLog.prototype, "startTime", {
            get: function () {
                return this._startTime;
            },
            set: function (value) {
                this._startTime = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipLog.prototype, "endTime", {
            get: function () {
                return this._endTime;
            },
            set: function (value) {
                this._endTime = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipLog.prototype, "statusHistory", {
            get: function () {
                return this._statusHistory;
            },
            set: function (value) {
                this._statusHistory = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VoipLog.prototype, "counters", {
            get: function () {
                return this._counters;
            },
            set: function (value) {
                this._counters = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        VoipLog.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            VoipLog.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        VoipLog.prototype.toObject = function () {
            return {
                callId: this.callId,
                startTime: this.startTime,
                endTime: this.endTime,
                statusHistory: (this.statusHistory || []).map(function (m) { return m.toObject(); }),
                counters: this.counters ? this.counters.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        VoipLog.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        VoipLog.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                callId: this.callId,
                startTime: this.startTime,
                endTime: this.endTime,
                statusHistory: (this.statusHistory || []).map(function (m) { return m.toProtobufJSON(options); }),
                counters: this.counters ? this.counters.toProtobufJSON(options) : null
            };
        };
        return VoipLog;
    }());
    VoipLog.id = 'ondewo.vtsi.VoipLog';
    /**
     * Message implementation for ondewo.vtsi.Counters
     */
    var Counters = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Counters to deeply clone from
         */
        function Counters(_value) {
            _value = _value || {};
            this.fifteenSCounter = _value.fifteenSCounter;
            this.sixtySCounter = _value.sixtySCounter;
            Counters.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Counters.deserializeBinary = function (bytes) {
            var instance = new Counters();
            Counters.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Counters.refineValues = function (_instance) {
            _instance.fifteenSCounter = _instance.fifteenSCounter || '0';
            _instance.sixtySCounter = _instance.sixtySCounter || '0';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Counters.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Counters.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.fifteenSCounter) {
                _writer.writeInt64String(1, _instance.fifteenSCounter);
            }
            if (_instance.sixtySCounter) {
                _writer.writeInt64String(2, _instance.sixtySCounter);
            }
        };
        Object.defineProperty(Counters.prototype, "fifteenSCounter", {
            get: function () {
                return this._fifteenSCounter;
            },
            set: function (value) {
                this._fifteenSCounter = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Counters.prototype, "sixtySCounter", {
            get: function () {
                return this._sixtySCounter;
            },
            set: function (value) {
                this._sixtySCounter = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Counters.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Counters.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Counters.prototype.toObject = function () {
            return {
                fifteenSCounter: this.fifteenSCounter,
                sixtySCounter: this.sixtySCounter
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Counters.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Counters.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                fifteenSCounter: this.fifteenSCounter,
                sixtySCounter: this.sixtySCounter
            };
        };
        return Counters;
    }());
    Counters.id = 'ondewo.vtsi.Counters';
    /**
     * Message implementation for ondewo.vtsi.SaveCallLogsResponse
     */
    var SaveCallLogsResponse = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SaveCallLogsResponse to deeply clone from
         */
        function SaveCallLogsResponse(_value) {
            _value = _value || {};
            this.success = _value.success;
            SaveCallLogsResponse.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        SaveCallLogsResponse.deserializeBinary = function (bytes) {
            var instance = new SaveCallLogsResponse();
            SaveCallLogsResponse.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        SaveCallLogsResponse.refineValues = function (_instance) {
            _instance.success = _instance.success || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        SaveCallLogsResponse.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        SaveCallLogsResponse.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.success) {
                _writer.writeBool(1, _instance.success);
            }
        };
        Object.defineProperty(SaveCallLogsResponse.prototype, "success", {
            get: function () {
                return this._success;
            },
            set: function (value) {
                this._success = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        SaveCallLogsResponse.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            SaveCallLogsResponse.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        SaveCallLogsResponse.prototype.toObject = function () {
            return {
                success: this.success
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        SaveCallLogsResponse.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        SaveCallLogsResponse.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                success: this.success
            };
        };
        return SaveCallLogsResponse;
    }());
    SaveCallLogsResponse.id = 'ondewo.vtsi.SaveCallLogsResponse';

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for VoipCallLogs.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.vtsi.VoipCallLogs
     */
    var VoipCallLogsClient = /** @class */ (function () {
        function VoipCallLogsClient(settings, clientFactory, handler) {
            var _this = this;
            this.handler = handler;
            /**
             * Raw RPC implementation for each service client method.
             * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
             * Attention: these methods do not throw errors when non-zero status codes are received.
             */
            this.$raw = {
                /**
                 * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.GetVoipLogResponse>>
                 */
                getVoipLog: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipCallLogs/GetVoipLog',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetVoipLogRequest,
                        responseClass: GetVoipLogResponse
                    });
                },
                /**
                 * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SaveCallLogsResponse>>
                 */
                activateSaveCallLogs: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: googleProtobuf003.Empty,
                        responseClass: SaveCallLogsResponse
                    });
                }
            };
            this.client = clientFactory.createClient('ondewo.vtsi.VoipCallLogs', settings);
        }
        /**
         * Unary RPC for /ondewo.vtsi.VoipCallLogs/GetVoipLog
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.GetVoipLogResponse>
         */
        VoipCallLogsClient.prototype.getVoipLog = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getVoipLog(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.vtsi.VoipCallLogs/ActivateSaveCallLogs
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SaveCallLogsResponse>
         */
        VoipCallLogsClient.prototype.activateSaveCallLogs = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .activateSaveCallLogs(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return VoipCallLogsClient;
    }());
    VoipCallLogsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function VoipCallLogsClient_Factory() { return new VoipCallLogsClient(i0.ɵɵinject(GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: VoipCallLogsClient, providedIn: "any" });
    VoipCallLogsClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    VoipCallLogsClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for Contexts.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_CONTEXTS_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_CONTEXTS_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.nlu.Contexts
     */
    var ContextsClient = /** @class */ (function () {
        function ContextsClient(settings, clientFactory, handler) {
            var _this = this;
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
                listContexts: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/ListContexts',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
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
                getContext: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/GetContext',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: GetContextRequest,
                        responseClass: exports.Context
                    });
                },
                /**
                 * Unary RPC for /ondewo.nlu.Contexts/CreateContext
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Context>>
                 */
                createContext: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/CreateContext',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: CreateContextRequest,
                        responseClass: exports.Context
                    });
                },
                /**
                 * Unary RPC for /ondewo.nlu.Contexts/UpdateContext
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.Context>>
                 */
                updateContext: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/UpdateContext',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: UpdateContextRequest,
                        responseClass: exports.Context
                    });
                },
                /**
                 * Unary RPC for /ondewo.nlu.Contexts/DeleteContext
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
                 */
                deleteContext: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/DeleteContext',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: DeleteContextRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.nlu.Contexts/DeleteAllContexts
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
                 */
                deleteAllContexts: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.nlu.Contexts/DeleteAllContexts',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: DeleteAllContextsRequest,
                        responseClass: googleProtobuf003.Empty
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
        ContextsClient.prototype.listContexts = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .listContexts(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.nlu.Contexts/GetContext
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Context>
         */
        ContextsClient.prototype.getContext = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getContext(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.nlu.Contexts/CreateContext
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Context>
         */
        ContextsClient.prototype.createContext = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .createContext(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.nlu.Contexts/UpdateContext
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.Context>
         */
        ContextsClient.prototype.updateContext = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .updateContext(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.nlu.Contexts/DeleteContext
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf003.Empty>
         */
        ContextsClient.prototype.deleteContext = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteContext(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.nlu.Contexts/DeleteAllContexts
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf003.Empty>
         */
        ContextsClient.prototype.deleteAllContexts = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .deleteAllContexts(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return ContextsClient;
    }());
    ContextsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContextsClient_Factory() { return new ContextsClient(i0.ɵɵinject(GRPC_CONTEXTS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: ContextsClient, providedIn: "any" });
    ContextsClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    ContextsClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_CONTEXTS_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /* tslint:disable */
    /**
     * Specific GrpcClientSettings for Sip.
     * Use it only if your default settings are not set or the service requires other settings.
     */
    var GRPC_SIP_CLIENT_SETTINGS = new i0.InjectionToken('GRPC_SIP_CLIENT_SETTINGS');

    /* tslint:disable */
    /**
     * Service client implementation for ondewo.sip.Sip
     */
    var SipClient = /** @class */ (function () {
        function SipClient(settings, clientFactory, handler) {
            var _this = this;
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
                startSession: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/StartSession',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: StartSessionRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/EndSession
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                endSession: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/EndSession',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: googleProtobuf003.Empty,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/StartCall
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                startCall: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/StartCall',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: StartCallRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/EndCall
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                endCall: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/EndCall',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: EndCallRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/TransferCall
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                transferCall: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/TransferCall',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: TransferCallRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/RegisterAccount
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
                 */
                registerAccount: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/RegisterAccount',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: RegisterAccountRequest,
                        responseClass: googleProtobuf003.Empty
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/GetSipStatus
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SipStatus>>
                 */
                getSipStatus: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/GetSipStatus',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: googleProtobuf003.Empty,
                        responseClass: exports.SipStatus
                    });
                },
                /**
                 * Unary RPC for /ondewo.sip.Sip/GetSipStatusHistory
                 *
                 * @param requestMessage Request message
                 * @param requestMetadata Request metadata
                 * @returns Observable<GrpcEvent<thisProto.SipStatusHistoryResponse>>
                 */
                getSipStatusHistory: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/GetSipStatusHistory',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: googleProtobuf003.Empty,
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
                playWavFiles: function (requestData, requestMetadata) {
                    if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
                    return _this.handler.handle({
                        type: common.GrpcCallType.unary,
                        client: _this.client,
                        path: '/ondewo.sip.Sip/PlayWavFiles',
                        requestData: requestData,
                        requestMetadata: requestMetadata,
                        requestClass: PlayWavFilesRequest,
                        responseClass: googleProtobuf003.Empty
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
        SipClient.prototype.startSession = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .startSession(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/EndSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.endSession = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .endSession(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/StartCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.startCall = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .startCall(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/EndCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.endCall = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .endCall(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/TransferCall
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.transferCall = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .transferCall(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/RegisterAccount
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.registerAccount = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .registerAccount(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/GetSipStatus
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SipStatus>
         */
        SipClient.prototype.getSipStatus = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getSipStatus(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/GetSipStatusHistory
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<thisProto.SipStatusHistoryResponse>
         */
        SipClient.prototype.getSipStatusHistory = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .getSipStatusHistory(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        /**
         * Unary RPC for /ondewo.sip.Sip/PlayWavFiles
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<googleProtobuf000.Empty>
         */
        SipClient.prototype.playWavFiles = function (requestData, requestMetadata) {
            if (requestMetadata === void 0) { requestMetadata = new common.GrpcMetadata(); }
            return this.$raw
                .playWavFiles(requestData, requestMetadata)
                .pipe(i2.throwStatusErrors(), i2.takeMessages());
        };
        return SipClient;
    }());
    SipClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function SipClient_Factory() { return new SipClient(i0.ɵɵinject(GRPC_SIP_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: SipClient, providedIn: "any" });
    SipClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'any' },] }
    ];
    SipClient.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GRPC_SIP_CLIENT_SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i2.GRPC_CLIENT_FACTORY,] }] },
        { type: i2.GrpcHandler }
    ]; };

    /**
     * Message implementation for google.api.Http
     */
    var Http = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Http to deeply clone from
         */
        function Http(_value) {
            _value = _value || {};
            this.rules = (_value.rules || []).map(function (m) { return new exports.HttpRule(m); });
            this.fullyDecodeReservedExpansion = _value.fullyDecodeReservedExpansion;
            Http.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        Http.deserializeBinary = function (bytes) {
            var instance = new Http();
            Http.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        Http.refineValues = function (_instance) {
            _instance.rules = _instance.rules || [];
            _instance.fullyDecodeReservedExpansion =
                _instance.fullyDecodeReservedExpansion || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        Http.deserializeBinaryFromReader = function (_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        var messageInitializer1 = new exports.HttpRule();
                        _reader.readMessage(messageInitializer1, exports.HttpRule.deserializeBinaryFromReader);
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        Http.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.rules && _instance.rules.length) {
                _writer.writeRepeatedMessage(1, _instance.rules, exports.HttpRule.serializeBinaryToWriter);
            }
            if (_instance.fullyDecodeReservedExpansion) {
                _writer.writeBool(2, _instance.fullyDecodeReservedExpansion);
            }
        };
        Object.defineProperty(Http.prototype, "rules", {
            get: function () {
                return this._rules;
            },
            set: function (value) {
                this._rules = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Http.prototype, "fullyDecodeReservedExpansion", {
            get: function () {
                return this._fullyDecodeReservedExpansion;
            },
            set: function (value) {
                this._fullyDecodeReservedExpansion = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        Http.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            Http.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        Http.prototype.toObject = function () {
            return {
                rules: (this.rules || []).map(function (m) { return m.toObject(); }),
                fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        Http.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        Http.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                rules: (this.rules || []).map(function (m) { return m.toProtobufJSON(options); }),
                fullyDecodeReservedExpansion: this.fullyDecodeReservedExpansion
            };
        };
        return Http;
    }());
    Http.id = 'google.api.Http';
    /**
     * Message implementation for google.api.HttpRule
     */
    exports.HttpRule = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of HttpRule to deeply clone from
         */
        function HttpRule(_value) {
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
            this.additionalBindings = (_value.additionalBindings || []).map(function (m) { return new HttpRule(m); });
            HttpRule.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        HttpRule.deserializeBinary = function (bytes) {
            var instance = new HttpRule();
            HttpRule.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        HttpRule.refineValues = function (_instance) {
            _instance.selector = _instance.selector || '';
            _instance.body = _instance.body || '';
            _instance.responseBody = _instance.responseBody || '';
            _instance.additionalBindings = _instance.additionalBindings || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        HttpRule.deserializeBinaryFromReader = function (_instance, _reader) {
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
                        var messageInitializer11 = new HttpRule();
                        _reader.readMessage(messageInitializer11, HttpRule.deserializeBinaryFromReader);
                        (_instance.additionalBindings =
                            _instance.additionalBindings || []).push(messageInitializer11);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            HttpRule.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        HttpRule.serializeBinaryToWriter = function (_instance, _writer) {
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
        };
        Object.defineProperty(HttpRule.prototype, "selector", {
            get: function () {
                return this._selector;
            },
            set: function (value) {
                this._selector = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "get", {
            get: function () {
                return this._get;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._put = this._post = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.get;
                }
                this._get = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "put", {
            get: function () {
                return this._put;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._post = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.put;
                }
                this._put = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "post", {
            get: function () {
                return this._post;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._delete = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.post;
                }
                this._post = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "delete", {
            get: function () {
                return this._delete;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._patch = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.delete;
                }
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "patch", {
            get: function () {
                return this._patch;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._delete = this._custom = undefined;
                    this._pattern = HttpRule.PatternCase.patch;
                }
                this._patch = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "custom", {
            get: function () {
                return this._custom;
            },
            set: function (value) {
                if (value !== undefined && value !== null) {
                    this._get = this._put = this._post = this._delete = this._patch = undefined;
                    this._pattern = HttpRule.PatternCase.custom;
                }
                this._custom = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "body", {
            get: function () {
                return this._body;
            },
            set: function (value) {
                this._body = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "responseBody", {
            get: function () {
                return this._responseBody;
            },
            set: function (value) {
                this._responseBody = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "additionalBindings", {
            get: function () {
                return this._additionalBindings;
            },
            set: function (value) {
                this._additionalBindings = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpRule.prototype, "pattern", {
            get: function () {
                return this._pattern;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        HttpRule.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            HttpRule.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        HttpRule.prototype.toObject = function () {
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
                additionalBindings: (this.additionalBindings || []).map(function (m) { return m.toObject(); })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        HttpRule.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        HttpRule.prototype.toProtobufJSON = function (
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
                additionalBindings: (this.additionalBindings || []).map(function (m) { return m.toProtobufJSON(options); })
            };
        };
        return HttpRule;
    }());
    exports.HttpRule.id = 'google.api.HttpRule';
    (function (HttpRule) {
        var PatternCase;
        (function (PatternCase) {
            PatternCase[PatternCase["none"] = 0] = "none";
            PatternCase[PatternCase["get"] = 1] = "get";
            PatternCase[PatternCase["put"] = 2] = "put";
            PatternCase[PatternCase["post"] = 3] = "post";
            PatternCase[PatternCase["delete"] = 4] = "delete";
            PatternCase[PatternCase["patch"] = 5] = "patch";
            PatternCase[PatternCase["custom"] = 6] = "custom";
        })(PatternCase = HttpRule.PatternCase || (HttpRule.PatternCase = {}));
    })(exports.HttpRule || (exports.HttpRule = {}));
    /**
     * Message implementation for google.api.CustomHttpPattern
     */
    var CustomHttpPattern = /** @class */ (function () {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CustomHttpPattern to deeply clone from
         */
        function CustomHttpPattern(_value) {
            _value = _value || {};
            this.kind = _value.kind;
            this.path = _value.path;
            CustomHttpPattern.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        CustomHttpPattern.deserializeBinary = function (bytes) {
            var instance = new CustomHttpPattern();
            CustomHttpPattern.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        CustomHttpPattern.refineValues = function (_instance) {
            _instance.kind = _instance.kind || '';
            _instance.path = _instance.path || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        CustomHttpPattern.deserializeBinaryFromReader = function (_instance, _reader) {
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
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        CustomHttpPattern.serializeBinaryToWriter = function (_instance, _writer) {
            if (_instance.kind) {
                _writer.writeString(1, _instance.kind);
            }
            if (_instance.path) {
                _writer.writeString(2, _instance.path);
            }
        };
        Object.defineProperty(CustomHttpPattern.prototype, "kind", {
            get: function () {
                return this._kind;
            },
            set: function (value) {
                this._kind = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CustomHttpPattern.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        CustomHttpPattern.prototype.serializeBinary = function () {
            var writer = new googleProtobuf.BinaryWriter();
            CustomHttpPattern.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        CustomHttpPattern.prototype.toObject = function () {
            return {
                kind: this.kind,
                path: this.path
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        CustomHttpPattern.prototype.toJSON = function () {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        CustomHttpPattern.prototype.toProtobufJSON = function (
        // @ts-ignore
        options) {
            return {
                kind: this.kind,
                path: this.path
            };
        };
        return CustomHttpPattern;
    }());
    CustomHttpPattern.id = 'google.api.CustomHttpPattern';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AsteriskConfig = AsteriskConfig;
    exports.BaseServiceConfig = BaseServiceConfig;
    exports.CommonServicesConfigs = CommonServicesConfigs;
    exports.ContextsClient = ContextsClient;
    exports.Counters = Counters;
    exports.CreateContextRequest = CreateContextRequest;
    exports.Credentials = Credentials;
    exports.CustomHttpPattern = CustomHttpPattern;
    exports.DeleteAllContextsRequest = DeleteAllContextsRequest;
    exports.DeleteContextRequest = DeleteContextRequest;
    exports.DeployPreconditionRequest = DeployPreconditionRequest;
    exports.DeployPreconditionResponse = DeployPreconditionResponse;
    exports.EndCallRequest = EndCallRequest;
    exports.GRPC_CONTEXTS_CLIENT_SETTINGS = GRPC_CONTEXTS_CLIENT_SETTINGS;
    exports.GRPC_SIP_CLIENT_SETTINGS = GRPC_SIP_CLIENT_SETTINGS;
    exports.GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS = GRPC_VOIP_CALL_LOGS_CLIENT_SETTINGS;
    exports.GRPC_VOIP_SESSIONS_CLIENT_SETTINGS = GRPC_VOIP_SESSIONS_CLIENT_SETTINGS;
    exports.GetCallIDsRequest = GetCallIDsRequest;
    exports.GetCallIDsResponse = GetCallIDsResponse;
    exports.GetCallIdsRequest = GetCallIdsRequest;
    exports.GetCallIdsResponse = GetCallIdsResponse;
    exports.GetContextRequest = GetContextRequest;
    exports.GetManifestIDsRequest = GetManifestIDsRequest;
    exports.GetManifestIDsResponse = GetManifestIDsResponse;
    exports.GetSessionIDRequest = GetSessionIDRequest;
    exports.GetSessionIDResponse = GetSessionIDResponse;
    exports.GetVoipLogRequest = GetVoipLogRequest;
    exports.GetVoipLogResponse = GetVoipLogResponse;
    exports.Http = Http;
    exports.ListContextsRequest = ListContextsRequest;
    exports.ListContextsResponse = ListContextsResponse;
    exports.ManifestRequest = ManifestRequest;
    exports.Matchbox = Matchbox;
    exports.Normalization = Normalization;
    exports.PlayWavFilesRequest = PlayWavFilesRequest;
    exports.PostProcessing = PostProcessing;
    exports.PostProcessingOptions = PostProcessingOptions;
    exports.PostProcessors = PostProcessors;
    exports.RegisterAccountRequest = RegisterAccountRequest;
    exports.RemoveManifestResponse = RemoveManifestResponse;
    exports.RunManifestResponse = RunManifestResponse;
    exports.S2TConfig = S2TConfig;
    exports.SaveCallLogsResponse = SaveCallLogsResponse;
    exports.ServiceStatus = ServiceStatus;
    exports.ShutdownUnhealthyCallsRequest = ShutdownUnhealthyCallsRequest;
    exports.ShutdownUnhealthyCallsResponse = ShutdownUnhealthyCallsResponse;
    exports.SipClient = SipClient;
    exports.SipStatusHistoryResponse = SipStatusHistoryResponse;
    exports.StartCallInstanceRequest = StartCallInstanceRequest;
    exports.StartCallInstanceResponse = StartCallInstanceResponse;
    exports.StartCallRequest = StartCallRequest;
    exports.StartMultipleCallInstancesRequest = StartMultipleCallInstancesRequest;
    exports.StartMultipleCallInstancesResponse = StartMultipleCallInstancesResponse;
    exports.StartSessionRequest = StartSessionRequest;
    exports.StopCallInstanceResponse = StopCallInstanceResponse;
    exports.SymSpell = SymSpell;
    exports.T2SConfig = T2SConfig;
    exports.TranscriptionReturnOptions = TranscriptionReturnOptions;
    exports.TransferCallRequest = TransferCallRequest;
    exports.UpdateContextRequest = UpdateContextRequest;
    exports.UpdateServicesStatusResponse = UpdateServicesStatusResponse;
    exports.VoipCallLogsClient = VoipCallLogsClient;
    exports.VoipLog = VoipLog;
    exports.VoipManifest = VoipManifest;
    exports.VoipManifestStatus = VoipManifestStatus;
    exports.VoipManifestStatusRequest = VoipManifestStatusRequest;
    exports.VoipSessionsClient = VoipSessionsClient;
    exports.VoipStatus = VoipStatus;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ondewo-vtsi-client-angular.umd.js.map
