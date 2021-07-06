"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestResponseProcessor = void 0;
var http_request_class_base_response_error_1 = require("./http-request-class-base-response-error");
var http_request_class_base_utils_1 = require("../http-request-class-base-utils");
var http_request_class_base_const_1 = require("../http-request-class-base.const");
var mime_types_class_base_1 = require("../../mime-types-class-base/mime-types-class-base");
var http_request_class_base_utils_2 = require("../http-request-class-base.utils");
var HttpRequestResponseProcessor = /** @class */ (function () {
    function HttpRequestResponseProcessor(response) {
        this.response = response;
    }
    HttpRequestResponseProcessor.prototype.getHeader = function (name) {
        return this.response.headers.get(name);
    };
    HttpRequestResponseProcessor.prototype.getFileNameByResponse = function (extension) {
        var contentDisposition = this.getHeader('content-disposition');
        var fileName = '';
        if (contentDisposition) {
            var fileNameMatch = /filename="(.+)"/.exec(contentDisposition);
            if ((fileNameMatch === null || fileNameMatch === void 0 ? void 0 : fileNameMatch.length) === 2)
                fileName = fileNameMatch[1];
        }
        if (!fileName) {
            fileName = http_request_class_base_utils_2.getFilenameByUrl(this.response.url);
        }
        if (extension) {
            return fileName && fileName.endsWith(extension)
                ? fileName
                : fileName + "." + extension;
        }
        return fileName;
    };
    HttpRequestResponseProcessor.prototype.logError = function (error) {
        console.error(error);
        return error;
    };
    HttpRequestResponseProcessor.prototype.processAsText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = this.response;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.text()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, this.logError(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpRequestResponseProcessor.prototype.processAsFormData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = this.response;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!(typeof response.formData === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.formData()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, new Error("Can't process the response as FormData")];
                    case 4:
                        err_2 = _a.sent();
                        return [2 /*return*/, this.logError(err_2)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HttpRequestResponseProcessor.prototype.processAsBlob = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = this.response;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, this.logError(err_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpRequestResponseProcessor.prototype.processAsFile = function (mimeType, extension) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = this.response;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        result = _a.sent();
                        if (result instanceof Blob) {
                            return [2 /*return*/, new File([result], this.getFileNameByResponse(extension) || 'unknown', {
                                    type: mimeType || undefined,
                                })];
                        }
                        return [2 /*return*/, new Error("Can't process the response as a file")];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, this.logError(err_4)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpRequestResponseProcessor.prototype.processAsJSON = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = this.response;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && typeof result === 'object') {
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, new Error("Can't process the response as json")];
                    case 3:
                        err_5 = _a.sent();
                        return [2 /*return*/, this.logError(err_5)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpRequestResponseProcessor.prototype.processResponse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, contentType, mimeType;
            return __generator(this, function (_a) {
                response = this.response;
                contentType = http_request_class_base_utils_1.getContentTypeRAW(response);
                if (contentType) {
                    mimeType = new mime_types_class_base_1.MimeTypeClass(contentType);
                    if (mimeType.isBlob) {
                        return [2 /*return*/, this.processAsBlob()];
                    }
                    if (mimeType.isJSON) {
                        return [2 /*return*/, this.processAsJSON()];
                    }
                    if (mimeType.isText) {
                        return [2 /*return*/, this.processAsText()];
                    }
                    if (mimeType.isFile) {
                        return [2 /*return*/, this.processAsFile(contentType, mimeType.extension)];
                    }
                    return [2 /*return*/, new Error('There is unknown mime-type of the response content')];
                }
                return [2 /*return*/, new Error('There is no "Content-Type" in the response headers')];
            });
        });
    };
    HttpRequestResponseProcessor.prototype.getResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = this.response;
                if (response.type === http_request_class_base_const_1.HTTP_RESPONSE_TYPES.OPAQUE) {
                    return [2 /*return*/, undefined];
                }
                if (response.type === http_request_class_base_const_1.HTTP_RESPONSE_TYPES.OPAQUE_REDIRECT) {
                    return [2 /*return*/, undefined];
                }
                if (!http_request_class_base_utils_1.isSucceedResponse(response)) {
                    return [2 /*return*/, new http_request_class_base_response_error_1.HttpResponseError(response)];
                }
                return [2 /*return*/, this.processResponse()];
            });
        });
    };
    return HttpRequestResponseProcessor;
}());
exports.HttpRequestResponseProcessor = HttpRequestResponseProcessor;
//# sourceMappingURL=http-request-class-response-processor.js.map