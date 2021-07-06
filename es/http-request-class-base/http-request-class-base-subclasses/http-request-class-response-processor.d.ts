import { HttpResponseError } from './http-request-class-base-response-error';
import { THttpResponseResult } from '../http-request-class-base.types';
export declare class HttpRequestResponseProcessor {
    protected response: Response;
    constructor(response: Response);
    protected getHeader(name: string): string | null;
    protected getFileNameByResponse(extension?: string | null): string | undefined;
    protected logError(error: Error): Error;
    protected processAsText(): Promise<string | Error>;
    protected processAsFormData(): Promise<Error | FormData>;
    protected processAsBlob(): Promise<Error | object>;
    protected processAsFile(mimeType?: string | null, extension?: string | null): Promise<Error | object>;
    protected processAsJSON(): Promise<Error | object>;
    protected processResponse(): Promise<Error | THttpResponseResult>;
    getResult(): Promise<Error | HttpResponseError | THttpResponseResult>;
}
