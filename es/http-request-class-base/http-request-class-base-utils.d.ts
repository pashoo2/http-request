import { TQueryStringParamsObject, TQueryStringAllowedParamValue, TQueryStringParams } from './http-request-class-base.types';
export declare const isSucceedResponse: (response: Response) => boolean;
export declare const isClientSideError: (response: Response) => boolean;
export declare const getContentType: (response: Response) => void | string;
export declare const getContentTypeRAW: (response: Response) => void | string;
export declare const getNetworkError: (response: Response) => Error | void;
/**
 * resolve a param as a string can be used as
 * a query string param
 * @param {object | string | number | Array<object | string | number> } paramValue
 * @returns string
 */
export declare const resolveQueryStringParam: (paramValue: TQueryStringAllowedParamValue) => string;
/**
 *
 * @param {object} obj
 * @returns {string} - string in the format of
 * param1=value1....&paramN=valueN
 */
export declare const queryStringFromObject: (obj: TQueryStringParamsObject) => string;
export declare const resolveQueryStringParams: (...params: TQueryStringParams[]) => string;
