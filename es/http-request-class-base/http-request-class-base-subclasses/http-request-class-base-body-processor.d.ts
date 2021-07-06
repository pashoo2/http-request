import { IHttpRequestOptions } from '../http-request-class-base.types';
export declare class HttpRequestBodyProcessor {
    protected options: IHttpRequestOptions;
    protected static logError(methodName: string, err: string | Error): void;
    constructor(options: IHttpRequestOptions);
    private get bodyRAW();
    private get bodyType();
    protected processBodyAsMultipart(): FormData | undefined;
    protected processBodyAsUrlEncoded(): string | undefined;
    protected processBodyAsJSON(): string | FormData | undefined;
    protected preProcessBody(): string | FormData | undefined;
    protected getBody(): string | FormData | undefined;
}
