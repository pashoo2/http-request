[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / HttpRequestResponseProcessor

# Class: HttpRequestResponseProcessor

## Table of contents

### Constructors

- [constructor](httprequestresponseprocessor.md#constructor)

### Properties

- [response](httprequestresponseprocessor.md#response)

### Methods

- [getFileNameByResponse](httprequestresponseprocessor.md#getfilenamebyresponse)
- [getHeader](httprequestresponseprocessor.md#getheader)
- [getResult](httprequestresponseprocessor.md#getresult)
- [logError](httprequestresponseprocessor.md#logerror)
- [processAsBlob](httprequestresponseprocessor.md#processasblob)
- [processAsFile](httprequestresponseprocessor.md#processasfile)
- [processAsFormData](httprequestresponseprocessor.md#processasformdata)
- [processAsJSON](httprequestresponseprocessor.md#processasjson)
- [processAsText](httprequestresponseprocessor.md#processastext)
- [processResponse](httprequestresponseprocessor.md#processresponse)

## Constructors

### constructor

• **new HttpRequestResponseProcessor**(`response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:11

## Properties

### response

• `Protected` **response**: `Response`

## Methods

### getFileNameByResponse

▸ `Protected` **getFileNameByResponse**(`extension?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension?` | ``null`` \| `string` |

#### Returns

`undefined` \| `string`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:18

___

### getHeader

▸ `Protected` **getHeader**(`name`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:14

___

### getResult

▸ **getResult**(): `Promise`<`Error` \| [`HttpResponseError`](httpresponseerror.md) \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Returns

`Promise`<`Error` \| [`HttpResponseError`](httpresponseerror.md) \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:146

___

### logError

▸ `Protected` **logError**(`error`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`Error`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:39

___

### processAsBlob

▸ `Protected` **processAsBlob**(): `Promise`<`object` \| `Error`\>

#### Returns

`Promise`<`object` \| `Error`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:70

___

### processAsFile

▸ `Protected` **processAsFile**(`mimeType?`, `extension?`): `Promise`<`object` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mimeType?` | ``null`` \| `string` |
| `extension?` | ``null`` \| `string` |

#### Returns

`Promise`<`object` \| `Error`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:82

___

### processAsFormData

▸ `Protected` **processAsFormData**(): `Promise`<`Error` \| `FormData`\>

#### Returns

`Promise`<`Error` \| `FormData`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:56

___

### processAsJSON

▸ `Protected` **processAsJSON**(): `Promise`<`object` \| `Error`\>

#### Returns

`Promise`<`object` \| `Error`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:106

___

### processAsText

▸ `Protected` **processAsText**(): `Promise`<`string` \| `Error`\>

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:44

___

### processResponse

▸ `Protected` **processResponse**(): `Promise`<`Error` \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Returns

`Promise`<`Error` \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-response-processor.ts:121
