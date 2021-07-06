export interface IParamsObject {
    [paramName: string]: string | number | object;
}
/**
 * transforms object to a string url encoded
 * where a param names will be the object's
 * keys and it's values will be the object's
 * values
 * @param obj
 * @param {string} obj[name]
 */
export declare const objectToUrlEncodedString: (obj: IParamsObject) => string;
export interface IParamsObjectFormData {
    [paramName: string]: string | File | Blob | object;
}
export declare const objectToFormData: (obj: IParamsObjectFormData) => FormData;
export declare const prefixUrlWithHTTPProtocol: (urlString: string) => string;
export declare const concatStrings: (delimiter: string, ...strings: string[]) => string;
export declare const getFilenameByUrl: (url: string) => string | undefined;
