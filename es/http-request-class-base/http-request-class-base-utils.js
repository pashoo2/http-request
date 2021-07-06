"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveQueryStringParams = exports.queryStringFromObject = exports.resolveQueryStringParam = exports.getNetworkError = exports.getContentTypeRAW = exports.getContentType = exports.isClientSideError = exports.isSucceedResponse = void 0;
var http_request_class_base_utils_1 = require("./http-request-class-base.utils");
var http_request_class_base_const_1 = require("./http-request-class-base.const");
var NO_ERROR = http_request_class_base_const_1.HTTP_REQUEST_ERROR_CODES_RANGE.NO_ERROR, CLIENT_ERROR = http_request_class_base_const_1.HTTP_REQUEST_ERROR_CODES_RANGE.CLIENT_ERROR;
var _a = __read(NO_ERROR, 2), MIN_CODE_SUCCESS = _a[0], MAX_CODE_SUCCESS = _a[1];
var _b = __read(CLIENT_ERROR, 2), MIN_CODE_ERROR_CLIENT = _b[0], MAX_CODE_ERROR_CLIENT = _b[1];
var isSucceedResponse = function (response) {
    var status = response.status, type = response.type;
    if (type === http_request_class_base_const_1.HTTP_RESPONSE_TYPES.ERROR) {
        return false;
    }
    if (!status) {
        return false;
    }
    if (status >= MIN_CODE_SUCCESS && status <= MAX_CODE_SUCCESS) {
        return true;
    }
    return false;
};
exports.isSucceedResponse = isSucceedResponse;
var isClientSideError = function (response) {
    var status = response.status;
    if (!status) {
        return false;
    }
    if (status >= MIN_CODE_ERROR_CLIENT && status <= MAX_CODE_ERROR_CLIENT) {
        return true;
    }
    return false;
};
exports.isClientSideError = isClientSideError;
var getContentType = function (response) {
    var headers = response.headers;
    if (headers) {
        var contentType = headers.get(http_request_class_base_const_1.HTTP_REQUEST_HEADERS_NAMES.CONTENT_TYPE);
        if (contentType && http_request_class_base_const_1.HTTP_REQUEST_CONTENT_TYPES_KNOWN.includes(contentType)) {
            return contentType;
        }
    }
    return undefined;
};
exports.getContentType = getContentType;
var getContentTypeRAW = function (response) {
    var headers = response.headers;
    if (headers) {
        var contentType = headers.get(http_request_class_base_const_1.HTTP_REQUEST_HEADERS_NAMES.CONTENT_TYPE);
        if (typeof contentType === 'string') {
            return contentType;
        }
    }
    return undefined;
};
exports.getContentTypeRAW = getContentTypeRAW;
var getNetworkError = function (response) {
    if (typeof response.error === 'function') {
        var networkError = response.error();
        return networkError;
    }
    return undefined;
};
exports.getNetworkError = getNetworkError;
/**
 * resolve a param as a string can be used as
 * a query string param
 * @param {object | string | number | Array<object | string | number> } paramValue
 * @returns string
 */
var resolveQueryStringParam = function (paramValue) {
    if (paramValue instanceof Array) {
        return "[" + paramValue.map(exports.resolveQueryStringParam) + "]";
    }
    var paramValueType = typeof paramValue;
    var resolvedValue;
    try {
        switch (paramValueType) {
            case 'string':
                resolvedValue = paramValue;
                break;
            case 'number':
                resolvedValue = String(paramValue);
                break;
            default:
                resolvedValue = JSON.stringify(paramValue);
                break;
        }
        if (resolvedValue) {
            return encodeURIComponent(resolvedValue);
        }
    }
    catch (err) {
        console.error(err);
    }
    return '';
};
exports.resolveQueryStringParam = resolveQueryStringParam;
/**
 *
 * @param {object} obj
 * @returns {string} - string in the format of
 * param1=value1....&paramN=valueN
 */
var queryStringFromObject = function (obj) {
    if (obj && typeof obj === 'object') {
        var paramNames = Object.keys(obj);
        var paramsCount = paramNames.length;
        var paramsLastIdx = paramsCount - 1;
        var idx = 0;
        var result = '';
        var paramName = void 0;
        var paramValue = void 0;
        var paramValueString = void 0;
        for (; idx < paramsCount; idx += 1) {
            paramName = paramNames[idx];
            paramValue = obj[paramName];
            paramValueString = exports.resolveQueryStringParam(paramValue);
            result = encodeURIComponent(paramName) + "=" + paramValueString + (idx !== paramsLastIdx ? '&' : '');
        }
        return result;
    }
    return '';
};
exports.queryStringFromObject = queryStringFromObject;
var resolveQueryStringParams = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var paramsCount = params.length;
    var idx = 0;
    var result = '';
    var paramValue;
    var paramStringValue;
    for (; idx < paramsCount; idx += 1) {
        paramValue = params[idx];
        if (paramValue && typeof paramValue === 'object') {
            paramStringValue = exports.queryStringFromObject(paramValue);
        }
        else {
            paramStringValue = exports.resolveQueryStringParam(paramValue);
        }
        result = http_request_class_base_utils_1.concatStrings('&', result, paramStringValue);
    }
    return result;
};
exports.resolveQueryStringParams = resolveQueryStringParams;
//# sourceMappingURL=http-request-class-base-utils.js.map