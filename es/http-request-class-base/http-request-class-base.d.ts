import { HttpRequestBodyProcessor } from './http-request-class-base-subclasses/http-request-class-base-body-processor';
import { IHttpRequestOptions, THttpResponseResult, THttpRequestToken, TQueryStringParams } from './http-request-class-base.types';
import { HTTP_REQUEST_HEADERS_NAMES, HTTP_REQUEST_METHOD, HTTP_REQUEST_MODE, HTTP_REQUEST_CONTENT_TYPE } from './http-request-class-base.const';
import { HttpResponseError } from './http-request-class-base-subclasses/http-request-class-base-response-error';
export declare class HttpRequest extends HttpRequestBodyProcessor {
    static ContentType: typeof HTTP_REQUEST_CONTENT_TYPE;
    static HeaderName: typeof HTTP_REQUEST_HEADERS_NAMES;
    static RequestMode: typeof HTTP_REQUEST_MODE;
    static RequestMethod: typeof HTTP_REQUEST_METHOD;
    protected static baseUrl?: string;
    private static token?;
    static setBaseUrl(baseUrl: string): void | Error;
    static setToken(token: THttpRequestToken): void | Error;
    protected baseUrl?: string;
    protected url?: string;
    protected method?: string;
    protected mode?: RequestMode;
    protected token?: THttpRequestToken;
    protected contentType?: string;
    protected queryStringParams?: string;
    protected credentials?: RequestCredentials;
    /**
     * Creates an instance of HttpRequest.
     * @param {IHttpRequestOptions} options
     * @memberof HttpRequest
     * @throws
     */
    constructor(options: IHttpRequestOptions);
    /**
     *  /**
     * send the request to the server
     * on the url defined in the
     * options
     *
     * @memberof HttpRequest
     *  @returns {(Promise<string | object | Error | FormData | Blob | HttpResponseError | File | undefined>)}
     */
    send: () => Promise<string | object | Error | FormData | Blob | HttpResponseError | File | undefined>;
    protected getRequestMethod(method: string | undefined, options: IHttpRequestOptions): Error | HTTP_REQUEST_METHOD;
    protected getCredentials(options: IHttpRequestOptions): RequestCredentials | undefined;
    protected getRequestMode(method: HTTP_REQUEST_METHOD, options: IHttpRequestOptions): RequestMode | Error | undefined;
    /**
     * resolve the url where to send the request
     * depending on the options url
     * base url and a query string
     */
    protected resolveTargetUrl(url: string): string;
    protected getQueryStringParams(params: TQueryStringParams): string;
    /**
     * @protected
     * @param {IHttpRequestOptions} options
     * @memberof HttpRequest
     * @throws
     */
    protected setOptions(options: IHttpRequestOptions): void;
    protected getRequestHeaders(): HeadersInit;
    protected getCacheMode(): RequestCache;
    protected preProcessResponse(response: Response): Promise<Error | HttpResponseError | THttpResponseResult>;
}
export default HttpRequest;
