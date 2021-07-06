"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestBodyProcessor = void 0;
var http_request_class_base_const_1 = require("../http-request-class-base.const");
var http_request_class_base_utils_1 = require("../http-request-class-base.utils");
var HttpRequestBodyProcessor = /** @class */ (function () {
    function HttpRequestBodyProcessor(options) {
        this.options = options;
    }
    HttpRequestBodyProcessor.logError = function (methodName, err) {
        console.error("HttpRequestBodyProcessor::" + methodName, err);
    };
    Object.defineProperty(HttpRequestBodyProcessor.prototype, "bodyRAW", {
        get: function () {
            var options = this.options;
            var body = options.body;
            return body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpRequestBodyProcessor.prototype, "bodyType", {
        get: function () {
            var body = this.bodyRAW;
            return typeof body;
        },
        enumerable: false,
        configurable: true
    });
    HttpRequestBodyProcessor.prototype.processBodyAsMultipart = function () {
        var _a = this, body = _a.bodyRAW, bodyType = _a.bodyType;
        if (body instanceof FormData) {
            return body;
        }
        if (bodyType === 'object') {
            return http_request_class_base_utils_1.objectToFormData(body);
        }
        HttpRequestBodyProcessor.logError('checkBodyIsMultipart', 'a wrong type of the body');
        return undefined;
    };
    HttpRequestBodyProcessor.prototype.processBodyAsUrlEncoded = function () {
        var _a = this, body = _a.bodyRAW, bodyType = _a.bodyType;
        switch (bodyType) {
            case 'string':
                return encodeURI(String(body));
            case 'object':
                return http_request_class_base_utils_1.objectToUrlEncodedString(body);
            default: {
                HttpRequestBodyProcessor.logError('processBodyAsUrlEncoded', 'a wrong type of the body');
                return undefined;
            }
        }
    };
    HttpRequestBodyProcessor.prototype.processBodyAsJSON = function () {
        var _a = this, body = _a.bodyRAW, bodyType = _a.bodyType;
        switch (bodyType) {
            case 'string':
                return body;
            case 'number':
            case 'object':
                return JSON.stringify(body);
            default:
                return undefined;
        }
    };
    HttpRequestBodyProcessor.prototype.preProcessBody = function () {
        var options = this.options;
        var contentType = options.contentType;
        if (typeof contentType === 'string') {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            switch (contentType) {
                case http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.JSON:
                    return this.processBodyAsJSON();
                case http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.URL_ENCODED:
                    return this.processBodyAsUrlEncoded();
                case http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPE.MULTIPART:
                    return this.processBodyAsMultipart();
            }
        }
        return undefined;
    };
    HttpRequestBodyProcessor.prototype.getBody = function () {
        var options = this.options;
        var method = options.method;
        if (method === http_request_class_base_const_1.HTTP_REQUEST_METHOD.GET ||
            method === http_request_class_base_const_1.HTTP_REQUEST_METHOD.DELETE) {
            return undefined;
        }
        return this.preProcessBody();
    };
    return HttpRequestBodyProcessor;
}());
exports.HttpRequestBodyProcessor = HttpRequestBodyProcessor;
//# sourceMappingURL=http-request-class-base-body-processor.js.map