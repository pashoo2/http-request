export declare class MimeTypeClass {
    protected mimeType: string;
    extension: string | null;
    isText: boolean;
    isBlob: boolean;
    isFile: boolean;
    isJSON: boolean;
    isUnknown: boolean;
    constructor(mimeType: string);
    checkIsFile(): boolean;
    checkIsBlob(): boolean;
    checkIsJSON(): boolean;
    checkIsText(): boolean;
    checkFileExtension(): void;
    processMimeType(): void;
}
