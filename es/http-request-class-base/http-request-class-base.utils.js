"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilenameByUrl = exports.concatStrings = exports.prefixUrlWithHTTPProtocol = exports.objectToFormData = exports.objectToUrlEncodedString = void 0;
var http_request_class_base_const_1 = require("./http-request-class-base.const");
/**
 * transforms object to a string url encoded
 * where a param names will be the object's
 * keys and it's values will be the object's
 * values
 * @param obj
 * @param {string} obj[name]
 */
var objectToUrlEncodedString = function (obj) {
    return Object.keys(obj).reduce(function (querystring, paramName) {
        var paramValue = obj[paramName] || '';
        var paramValueType = typeof paramValue;
        var paramValueCasted;
        if (paramValueType === 'object') {
            paramValueCasted = JSON.stringify(paramValue);
        }
        else {
            paramValueCasted = String(paramValue);
        }
        return "" + querystring + (querystring.length ? '&' : '') + encodeURIComponent(paramName) + "=" + encodeURIComponent(paramValueCasted);
    }, '');
};
exports.objectToUrlEncodedString = objectToUrlEncodedString;
var objectToFormData = function (obj) {
    var paramValueCasted;
    var thirdParam;
    return Object.keys(obj).reduce(function (formData, paramName) {
        var paramValue = obj[paramName] || '';
        var paramValueType = typeof paramValue;
        paramValueCasted = undefined;
        thirdParam = undefined;
        if (paramValue instanceof File) {
            paramValueCasted = paramValue;
            thirdParam = paramValueCasted.name;
        }
        else if (paramValue instanceof Blob) {
            paramValueCasted = paramValue;
            thirdParam = 'file';
        }
        else if (paramValueType === 'object') {
            paramValueCasted = JSON.stringify(paramValue);
        }
        else if (paramValueType === 'string' || paramValueType === 'number') {
            paramValueCasted = String(paramValue);
        }
        if (paramValueCasted) {
            formData.append(paramName, paramValueCasted, paramValueType);
        }
        else {
            console.error("Can't append the " + paramName + " field as the form data value");
        }
        return formData;
    }, new FormData());
};
exports.objectToFormData = objectToFormData;
var prefixUrlWithHTTPProtocol = function (urlString) {
    var urlTrimmed = urlString.trim().toLowerCase();
    if (urlTrimmed.startsWith('data:')) {
        return urlTrimmed;
    }
    return urlTrimmed.startsWith('http://') || urlTrimmed.startsWith('https://')
        ? urlTrimmed
        : "https://" + urlTrimmed.replace(http_request_class_base_const_1.HTTP_REQUEST_URL_PROTOCOL_DELIMITER_REGEXP, '');
};
exports.prefixUrlWithHTTPProtocol = prefixUrlWithHTTPProtocol;
var concatStrings = function (delimiter) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    var stringsCount = strings.length;
    var stringPart = '';
    var idx = 1;
    var resultedString = strings[0];
    for (; idx < stringsCount; idx += 1) {
        stringPart = strings[idx];
        resultedString = "" + strings + (stringPart.endsWith(delimiter) || stringPart.startsWith(delimiter)
            ? ''
            : '') + stringPart;
    }
    return resultedString;
};
exports.concatStrings = concatStrings;
var getFilenameByUrl = function (url) {
    if (url.startsWith('data:')) {
        return undefined;
    }
    return (url.split('/').pop() || '').split('#')[0].split('?')[0] || undefined;
};
exports.getFilenameByUrl = getFilenameByUrl;
//# sourceMappingURL=http-request-class-base.utils.js.map