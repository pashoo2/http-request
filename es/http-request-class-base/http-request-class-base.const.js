"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_REQUEST_URL_PROTOCOL_DELIMITER_REGEXP = exports.HTTP_REQUEST_CONTENT_TYPES_KNOWN = exports.HTTP_REQUEST_AUTH_TOKEN_TYPE = exports.HTTP_REQUEST_HEADERS_NAMES = exports.HTTP_RESPONSE_TYPES = exports.HTTP_REQUEST_ERROR_CODES_RANGE = exports.HTTP_REQUEST_CACHE_CONTROL = exports.HTTP_REQUEST_MODES_SUPPORTED = exports.HTTP_REQUEST_MODE = exports.HTTP_REQUEST_CONTENT_TYPE = exports.HTTP_REQUEST_METHOD = void 0;
var HTTP_REQUEST_METHOD;
(function (HTTP_REQUEST_METHOD) {
    HTTP_REQUEST_METHOD["POST"] = "post";
    HTTP_REQUEST_METHOD["GET"] = "get";
    HTTP_REQUEST_METHOD["PUT"] = "put";
    HTTP_REQUEST_METHOD["DELETE"] = "delete";
})(HTTP_REQUEST_METHOD = exports.HTTP_REQUEST_METHOD || (exports.HTTP_REQUEST_METHOD = {}));
var HTTP_REQUEST_CONTENT_TYPE;
(function (HTTP_REQUEST_CONTENT_TYPE) {
    HTTP_REQUEST_CONTENT_TYPE["JSON"] = "application/json; charset=utf-8";
    HTTP_REQUEST_CONTENT_TYPE["URL_ENCODED"] = "application/x-www-form-urlencoded";
    HTTP_REQUEST_CONTENT_TYPE["MULTIPART"] = "multipart/form-data";
    HTTP_REQUEST_CONTENT_TYPE["PLAIN"] = "text/plain; charset=utf-8";
})(HTTP_REQUEST_CONTENT_TYPE = exports.HTTP_REQUEST_CONTENT_TYPE || (exports.HTTP_REQUEST_CONTENT_TYPE = {}));
var HTTP_REQUEST_MODE;
(function (HTTP_REQUEST_MODE) {
    HTTP_REQUEST_MODE["CORS"] = "cors";
    // CORS_FORCE_PREFLIGHT = 'cors-with-forced-preflight',
    HTTP_REQUEST_MODE["SAME_ORIGIN"] = "same-origin";
    HTTP_REQUEST_MODE["NO_CORS"] = "no-cors";
})(HTTP_REQUEST_MODE = exports.HTTP_REQUEST_MODE || (exports.HTTP_REQUEST_MODE = {}));
exports.HTTP_REQUEST_MODES_SUPPORTED = Object.values(HTTP_REQUEST_MODE);
var HTTP_REQUEST_CACHE_CONTROL;
(function (HTTP_REQUEST_CACHE_CONTROL) {
    HTTP_REQUEST_CACHE_CONTROL["DEFAULT"] = "default";
    HTTP_REQUEST_CACHE_CONTROL["NO_CACHE"] = "no-cache";
    HTTP_REQUEST_CACHE_CONTROL["RELOAD"] = "reload";
    HTTP_REQUEST_CACHE_CONTROL["FORCE"] = "force-cache";
    HTTP_REQUEST_CACHE_CONTROL["CACHED_ONLY"] = "only-if-cached";
})(HTTP_REQUEST_CACHE_CONTROL = exports.HTTP_REQUEST_CACHE_CONTROL || (exports.HTTP_REQUEST_CACHE_CONTROL = {}));
exports.HTTP_REQUEST_ERROR_CODES_RANGE = {
    CLIENT_ERROR: [400, 499],
    SERVER_ERROR: [500, 599],
    NO_ERROR: [200, 299],
};
exports.HTTP_RESPONSE_TYPES = {
    OPAQUE: 'opaque',
    OPAQUE_REDIRECT: 'opaque_redirect',
    ERROR: 'error',
};
var HTTP_REQUEST_HEADERS_NAMES;
(function (HTTP_REQUEST_HEADERS_NAMES) {
    HTTP_REQUEST_HEADERS_NAMES["AUTHORIZATION"] = "Authorization";
    HTTP_REQUEST_HEADERS_NAMES["CONTENT_TYPE"] = "Content-Type";
})(HTTP_REQUEST_HEADERS_NAMES = exports.HTTP_REQUEST_HEADERS_NAMES || (exports.HTTP_REQUEST_HEADERS_NAMES = {}));
exports.HTTP_REQUEST_AUTH_TOKEN_TYPE = 'Bearer';
exports.HTTP_REQUEST_CONTENT_TYPES_KNOWN = Object.values(HTTP_REQUEST_CONTENT_TYPE);
exports.HTTP_REQUEST_URL_PROTOCOL_DELIMITER_REGEXP = /^\/+/g;
//# sourceMappingURL=http-request-class-base.const.js.map