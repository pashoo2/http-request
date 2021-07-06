export declare class HttpResponseError extends Error {
    code?: number;
    error?: Error;
    isClientError: boolean;
    protected response: Response;
    constructor(response: Response);
    setResponseCode(): void;
    setIsClientSideError(): void;
    errorMessage(): Promise<string | Error>;
    mergeWithNetworkError(): boolean;
    processResponse(): Promise<void>;
}
