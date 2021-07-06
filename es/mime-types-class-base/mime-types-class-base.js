"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MimeTypeClass = void 0;
var mime_1 = __importDefault(require("mime"));
var mime_types_class_base_const_1 = require("./mime-types-class-base.const");
var MimeTypeClass = /** @class */ (function () {
    function MimeTypeClass(mimeType) {
        this.mimeType = mimeType;
        this.extension = null;
        this.isText = false;
        this.isBlob = false;
        this.isFile = false;
        this.isJSON = false;
        this.isUnknown = false;
        this.processMimeType();
    }
    MimeTypeClass.prototype.checkIsFile = function () {
        var extension = this.extension;
        return !!extension;
    };
    MimeTypeClass.prototype.checkIsBlob = function () {
        var mimeType = this.mimeType;
        return mime_types_class_base_const_1.MIME_TYPES_CLASS_BLOB_TYPES.includes(mimeType);
    };
    MimeTypeClass.prototype.checkIsJSON = function () {
        var extension = this.extension;
        return !!extension && mime_types_class_base_const_1.MIME_TYPES_CLASS_JSON_EXTENSIONS.includes(extension);
    };
    MimeTypeClass.prototype.checkIsText = function () {
        var mimeType = this.mimeType;
        if (mime_types_class_base_const_1.MIME_TYPES_CLASS_TEXT_TYPES.includes(mimeType)) {
            return true;
        }
        var extension = this.extension;
        if (extension) {
            return mime_types_class_base_const_1.MIME_TYPES_CLASS_TEXT_EXTENSIONS.includes(extension);
        }
        return false;
    };
    MimeTypeClass.prototype.checkFileExtension = function () {
        var mimeType = this.mimeType;
        this.extension = mime_1.default.getExtension(mimeType);
    };
    MimeTypeClass.prototype.processMimeType = function () {
        this.checkFileExtension();
        if ((this.isText = this.checkIsText())) {
            return;
        }
        if ((this.isBlob = this.checkIsBlob())) {
            return;
        }
        if ((this.isJSON = this.checkIsJSON())) {
            return;
        }
        if ((this.isFile = this.checkIsFile())) {
            return;
        }
        this.isUnknown = true;
    };
    return MimeTypeClass;
}());
exports.MimeTypeClass = MimeTypeClass;
//# sourceMappingURL=mime-types-class-base.js.map