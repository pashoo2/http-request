"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
var validator_1 = __importDefault(require("validator"));
var http_request_class_base_body_processor_1 = require("./http-request-class-base-subclasses/http-request-class-base-body-processor");
var http_request_class_base_const_1 = require("./http-request-class-base.const");
var http_request_class_response_processor_1 = require("./http-request-class-base-subclasses/http-request-class-response-processor");
var http_request_class_base_utils_1 = require("./http-request-class-base-utils");
var http_request_class_base_utils_2 = require("./http-request-class-base.utils");
var HttpRequest = /** @class */ (function (_super) {
    __extends(HttpRequest, _super);
    /**
     * Creates an instance of HttpRequest.
     * @param {IHttpRequestOptions} options
     * @memberof HttpRequest
     * @throws
     */
    function HttpRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.baseUrl = HttpRequest.baseUrl;
        _this.token = HttpRequest.token;
        /**
         *  /**
         * send the request to the server
         * on the url defined in the
         * options
         *
         * @memberof HttpRequest
         *  @returns {(Promise<string | object | Error | FormData | Blob | HttpResponseError | File | undefined>)}
         */
        _this.send = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, url, method, credentials, mode, body, headers, cache, response, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, url = _a.url, method = _a.method, credentials = _a.credentials, mode = _a.mode;
                        body = this.getBody();
                        headers = this.getRequestHeaders();
                        cache = this.getCacheMode();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url, {
                                mode: mode,
                                body: body,
                                headers: headers,
                                cache: cache,
                                method: method,
                                credentials: credentials,
                            })];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, this.preProcessResponse(response)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        err_1 = _b.sent();
                        console.error("HttpRequest::" + url + "::send::failed", err_1);
                        return [2 /*return*/, err_1];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.setOptions(options);
        return _this;
    }
    HttpRequest.setBaseUrl = function (baseUrl) {
        if (!validator_1.default.isURL(baseUrl)) {
            return new Error('This is not a valid url');
        }
        HttpRequest.baseUrl = baseUrl;
    };
    HttpRequest.setToken = function (token) {
        HttpRequest.token = token;
    };
    HttpRequest.prototype.getRequestMethod = function (method, options) {
        if (!method) {
            var body = options.body;
            if (body) {
                return http_request_class_base_const_1.HTTP_REQUEST_METHOD.POST;
            }
            return http_request_class_base_const_1.HTTP_REQUEST_METHOD.GET;
        }
        var methodRes = method.trim().toUpperCase();
        if (Object.hasOwnProperty.call(http_request_class_base_const_1.HTTP_REQUEST_METHOD, methodRes)) {
            return http_request_class_base_const_1.HTTP_REQUEST_METHOD[methodRes];
        }
        return new Error("An unknown request method \"" + method + "\"");
    };
    HttpRequest.prototype.getCredentials = function (options) {
        var withCookie = options.withCookie, credentials = options.credentials;
        if (credentials) {
            return credentials;
        }
        if (withCookie) {
            return 'same-origin';
        }
        return undefined;
    };
    HttpRequest.prototype.getRequestMode = function (method, options) {
        var mode = options.mode, contentType = options.contentType, body = options.body, token = options.token;
        if (!mode) {
            if (token) {
                return 'cors';
            }
            if (method === http_request_class_base_const_1.HTTP_REQUEST_METHOD.DELETE ||
                method === http_request_class_base_const_1.HTTP_REQUEST_METHOD.PUT) {
                return 'cors';
            }
            if (contentType !== http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.URL_ENCODED &&
                contentType !== http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.MULTIPART &&
                contentType !== http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.PLAIN) {
                return 'cors';
            }
            if (body instanceof ReadableStream) {
                return 'cors';
            }
            return undefined;
        }
        if (typeof mode === 'string') {
            var methodRes = mode.trim().toLowerCase();
            if (http_request_class_base_const_1.HTTP_REQUEST_MODES_SUPPORTED.includes(methodRes)) {
                return methodRes;
            }
            return new Error("An unknown request mode \"" + mode + "\"");
        }
        return undefined;
    };
    /**
     * resolve the url where to send the request
     * depending on the options url
     * base url and a query string
     */
    HttpRequest.prototype.resolveTargetUrl = function (url) {
        var _a = this, baseUrl = _a.baseUrl, queryStringParams = _a.queryStringParams;
        var urlInstance = new URL(baseUrl ? url : http_request_class_base_utils_2.prefixUrlWithHTTPProtocol(url), baseUrl ? http_request_class_base_utils_2.prefixUrlWithHTTPProtocol(baseUrl) : undefined);
        if (queryStringParams) {
            urlInstance.search = queryStringParams;
        }
        return String(urlInstance);
    };
    HttpRequest.prototype.getQueryStringParams = function (params) {
        var queryStringParams = this.queryStringParams;
        var resolvedParams = http_request_class_base_utils_1.resolveQueryStringParams(queryStringParams || '', params);
        return resolvedParams;
    };
    /**
     * @protected
     * @param {IHttpRequestOptions} options
     * @memberof HttpRequest
     * @throws
     */
    HttpRequest.prototype.setOptions = function (options) {
        if (!options) {
            throw new Error('The options must be defined for the request');
        }
        if (typeof options !== 'object') {
            throw new Error('The options must be an object');
        }
        if (typeof options.url !== 'string') {
            throw new Error('The url must be defined in options');
        }
        var url = options.url, baseUrl = options.baseUrl, method = options.method, token = options.token, queryStringParams = options.queryStringParams;
        if (typeof url !== 'string') {
            throw new Error('The url must be defined in options');
        }
        if (typeof baseUrl === 'string') {
            if (!validator_1.default.isURL(baseUrl)) {
                throw new Error('The baseUrl is not valid');
            }
            this.baseUrl = baseUrl;
        }
        else if (!validator_1.default.isURL(url)) {
            this.baseUrl = '';
            try {
                new URL(url); // maybe it's data url
            }
            catch (err) {
                throw new Error('The url is not valid');
            }
        }
        if (token) {
            this.token = token;
        }
        var methodRes = this.getRequestMethod(method, options);
        if (methodRes instanceof Error) {
            throw methodRes;
        }
        this.method = methodRes;
        var modeRes = this.getRequestMode(methodRes, options);
        if (modeRes instanceof Error) {
            throw modeRes;
        }
        this.mode = modeRes;
        this.credentials = this.getCredentials(options);
        if (queryStringParams) {
            this.queryStringParams = this.getQueryStringParams(queryStringParams);
        }
        this.url = this.resolveTargetUrl(url);
    };
    HttpRequest.prototype.getRequestHeaders = function () {
        var _a = this, options = _a.options, token = _a.token;
        var contentType = options.contentType;
        var headers = {};
        if (contentType) {
            headers[http_request_class_base_const_1.HTTP_REQUEST_HEADERS_NAMES.CONTENT_TYPE] = contentType;
        }
        if (token) {
            headers[http_request_class_base_const_1.HTTP_REQUEST_HEADERS_NAMES.AUTHORIZATION] = "Bearer " + token;
        }
        return headers;
    };
    HttpRequest.prototype.getCacheMode = function () {
        var options = this.options;
        var cache = options.cache;
        return cache;
    };
    HttpRequest.prototype.preProcessResponse = function (response) {
        var responseProcessor = new http_request_class_response_processor_1.HttpRequestResponseProcessor(response);
        return responseProcessor.getResult();
    };
    HttpRequest.ContentType = http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE;
    HttpRequest.HeaderName = http_request_class_base_const_1.HTTP_REQUEST_HEADERS_NAMES;
    HttpRequest.RequestMode = http_request_class_base_const_1.HTTP_REQUEST_MODE;
    HttpRequest.RequestMethod = http_request_class_base_const_1.HTTP_REQUEST_METHOD;
    return HttpRequest;
}(http_request_class_base_body_processor_1.HttpRequestBodyProcessor));
exports.HttpRequest = HttpRequest;
exports.default = HttpRequest;
//# sourceMappingURL=http-request-class-base.js.map