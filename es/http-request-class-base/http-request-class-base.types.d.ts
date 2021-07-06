import { ownValueOf } from '../types';
import { HTTP_REQUEST_CONTENT_TYPE, HTTP_REQUEST_METHOD, HTTP_REQUEST_MODE, HTTP_REQUEST_CACHE_CONTROL, HTTP_REQUEST_HEADERS_NAMES } from './http-request-class-base.const';
/**
 * allowed types for a query string params
 * it will be converted to a string
 */
export declare type TQueryStringAllowedParamValue = string | number | string[];
/**
 * will be resolved as a string like
 * &paramName=paramValue....&paramNameN=paramValueN
 * paramValueN may be an array = [paramNItem1....paramNItemN]
 */
export declare type TQueryStringParamsObject = {
    [paramName: string]: TQueryStringAllowedParamValue;
};
export declare type TQueryStringParams = TQueryStringAllowedParamValue | TQueryStringParamsObject;
export declare type THttpRequestUrl = string;
export declare type THttpRequestMethod = ownValueOf<typeof HTTP_REQUEST_METHOD>;
export declare type THttpRequestContentType = ownValueOf<typeof HTTP_REQUEST_CONTENT_TYPE>;
export declare type THttpRequestCacheControl = ownValueOf<typeof HTTP_REQUEST_CACHE_CONTROL>;
export declare type THttpRequestMode = ownValueOf<typeof HTTP_REQUEST_MODE>;
export declare type THttpRequestToken = object | string;
export interface IHttpRequestOptions {
    method?: THttpRequestMethod;
    contentType?: THttpRequestContentType;
    url: THttpRequestUrl;
    body?: string | object | number;
    mode?: THttpRequestMode;
    cache?: THttpRequestCacheControl;
    token?: THttpRequestToken;
    queryStringParams?: TQueryStringParams;
    baseUrl?: string;
    withCookie?: boolean;
    credentials?: RequestCredentials;
}
export declare type THttpResponseResult = undefined | object | string | File | Blob | FormData;
export interface IHttpRequestHeaders {
    [HTTP_REQUEST_HEADERS_NAMES.AUTHORIZATION]?: string;
    [HTTP_REQUEST_HEADERS_NAMES.CONTENT_TYPE]?: string;
}
