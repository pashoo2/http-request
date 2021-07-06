export declare enum HTTP_REQUEST_METHOD {
    POST = "post",
    GET = "get",
    PUT = "put",
    DELETE = "delete"
}
export declare enum HTTP_REQUEST_CONTENT_TYPE {
    JSON = "application/json; charset=utf-8",
    URL_ENCODED = "application/x-www-form-urlencoded",
    MULTIPART = "multipart/form-data",
    PLAIN = "text/plain; charset=utf-8"
}
export declare enum HTTP_REQUEST_MODE {
    CORS = "cors",
    SAME_ORIGIN = "same-origin",
    NO_CORS = "no-cors"
}
export declare const HTTP_REQUEST_MODES_SUPPORTED: HTTP_REQUEST_MODE[];
export declare enum HTTP_REQUEST_CACHE_CONTROL {
    DEFAULT = "default",
    NO_CACHE = "no-cache",
    RELOAD = "reload",
    FORCE = "force-cache",
    CACHED_ONLY = "only-if-cached"
}
export declare const HTTP_REQUEST_ERROR_CODES_RANGE: {
    CLIENT_ERROR: number[];
    SERVER_ERROR: number[];
    NO_ERROR: number[];
};
export declare const HTTP_RESPONSE_TYPES: {
    OPAQUE: string;
    OPAQUE_REDIRECT: string;
    ERROR: string;
};
export declare enum HTTP_REQUEST_HEADERS_NAMES {
    AUTHORIZATION = "Authorization",
    CONTENT_TYPE = "Content-Type"
}
export declare const HTTP_REQUEST_AUTH_TOKEN_TYPE = "Bearer";
export declare const HTTP_REQUEST_CONTENT_TYPES_KNOWN: HTTP_REQUEST_CONTENT_TYPE[];
export declare const HTTP_REQUEST_URL_PROTOCOL_DELIMITER_REGEXP: RegExp;
