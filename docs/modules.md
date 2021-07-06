[@pashoo2/http-request](README.md) / Exports

# @pashoo2/http-request

## Table of contents

### Enumerations

- [HTTP\_REQUEST\_CACHE\_CONTROL](enums/http_request_cache_control.md)
- [HTTP\_REQUEST\_CONTENT\_TYPE](enums/http_request_content_type.md)
- [HTTP\_REQUEST\_HEADERS\_NAMES](enums/http_request_headers_names.md)
- [HTTP\_REQUEST\_METHOD](enums/http_request_method.md)
- [HTTP\_REQUEST\_MODE](enums/http_request_mode.md)

### Classes

- [HttpRequest](classes/httprequest.md)
- [HttpRequestBodyProcessor](classes/httprequestbodyprocessor.md)
- [HttpRequestResponseProcessor](classes/httprequestresponseprocessor.md)
- [HttpResponseError](classes/httpresponseerror.md)
- [MimeTypeClass](classes/mimetypeclass.md)

### Interfaces

- [IHttpRequestHeaders](interfaces/ihttprequestheaders.md)
- [IHttpRequestOptions](interfaces/ihttprequestoptions.md)

### Type aliases

- [THttpRequestCacheControl](modules.md#thttprequestcachecontrol)
- [THttpRequestContentType](modules.md#thttprequestcontenttype)
- [THttpRequestMethod](modules.md#thttprequestmethod)
- [THttpRequestMode](modules.md#thttprequestmode)
- [THttpRequestToken](modules.md#thttprequesttoken)
- [THttpRequestUrl](modules.md#thttprequesturl)
- [THttpResponseResult](modules.md#thttpresponseresult)
- [TQueryStringAllowedParamValue](modules.md#tquerystringallowedparamvalue)
- [TQueryStringParams](modules.md#tquerystringparams)
- [TQueryStringParamsObject](modules.md#tquerystringparamsobject)

### Variables

- [HTTP\_REQUEST\_AUTH\_TOKEN\_TYPE](modules.md#http_request_auth_token_type)
- [HTTP\_REQUEST\_CONTENT\_TYPES\_KNOWN](modules.md#http_request_content_types_known)
- [HTTP\_REQUEST\_ERROR\_CODES\_RANGE](modules.md#http_request_error_codes_range)
- [HTTP\_REQUEST\_MODES\_SUPPORTED](modules.md#http_request_modes_supported)
- [HTTP\_REQUEST\_URL\_PROTOCOL\_DELIMITER\_REGEXP](modules.md#http_request_url_protocol_delimiter_regexp)
- [HTTP\_RESPONSE\_TYPES](modules.md#http_response_types)
- [MIME\_TYPES\_CLASS\_BLOB\_TYPES](modules.md#mime_types_class_blob_types)
- [MIME\_TYPES\_CLASS\_JSON\_EXTENSIONS](modules.md#mime_types_class_json_extensions)
- [MIME\_TYPES\_CLASS\_MULTIPART\_FORM\_TYPES](modules.md#mime_types_class_multipart_form_types)
- [MIME\_TYPES\_CLASS\_TEXT\_EXTENSIONS](modules.md#mime_types_class_text_extensions)
- [MIME\_TYPES\_CLASS\_TEXT\_TYPES](modules.md#mime_types_class_text_types)

### Functions

- [getContentType](modules.md#getcontenttype)
- [getContentTypeRAW](modules.md#getcontenttyperaw)
- [getNetworkError](modules.md#getnetworkerror)
- [isClientSideError](modules.md#isclientsideerror)
- [isSucceedResponse](modules.md#issucceedresponse)
- [queryStringFromObject](modules.md#querystringfromobject)
- [resolveQueryStringParam](modules.md#resolvequerystringparam)
- [resolveQueryStringParams](modules.md#resolvequerystringparams)

## Type aliases

### THttpRequestCacheControl

Ƭ **THttpRequestCacheControl**: `ownValueOf`<typeof [`HTTP_REQUEST_CACHE_CONTROL`](enums/http_request_cache_control.md)\>

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:37

___

### THttpRequestContentType

Ƭ **THttpRequestContentType**: `ownValueOf`<typeof [`HTTP_REQUEST_CONTENT_TYPE`](enums/http_request_content_type.md)\>

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:33

___

### THttpRequestMethod

Ƭ **THttpRequestMethod**: `ownValueOf`<typeof [`HTTP_REQUEST_METHOD`](enums/http_request_method.md)\>

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:31

___

### THttpRequestMode

Ƭ **THttpRequestMode**: `ownValueOf`<typeof [`HTTP_REQUEST_MODE`](enums/http_request_mode.md)\>

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:41

___

### THttpRequestToken

Ƭ **THttpRequestToken**: `object` \| `string`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:43

___

### THttpRequestUrl

Ƭ **THttpRequestUrl**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:29

___

### THttpResponseResult

Ƭ **THttpResponseResult**: `undefined` \| `object` \| `string` \| `File` \| `Blob` \| `FormData`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:60

___

### TQueryStringAllowedParamValue

Ƭ **TQueryStringAllowedParamValue**: `string` \| `number` \| `string`[]

allowed types for a query string params
it will be converted to a string

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:14

___

### TQueryStringParams

Ƭ **TQueryStringParams**: [`TQueryStringAllowedParamValue`](modules.md#tquerystringallowedparamvalue) \| [`TQueryStringParamsObject`](modules.md#tquerystringparamsobject)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:25

___

### TQueryStringParamsObject

Ƭ **TQueryStringParamsObject**: `Object`

will be resolved as a string like
&paramName=paramValue....&paramNameN=paramValueN
paramValueN may be an array = [paramNItem1....paramNItemN]

#### Index signature

▪ [paramName: `string`]: [`TQueryStringAllowedParamValue`](modules.md#tquerystringallowedparamvalue)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:21

## Variables

### HTTP\_REQUEST\_AUTH\_TOKEN\_TYPE

• `Const` **HTTP\_REQUEST\_AUTH\_TOKEN\_TYPE**: ``"Bearer"``

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:49

___

### HTTP\_REQUEST\_CONTENT\_TYPES\_KNOWN

• `Const` **HTTP\_REQUEST\_CONTENT\_TYPES\_KNOWN**: `HTTP_REQUEST_CONTENT_TYPE`[]

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:51

___

### HTTP\_REQUEST\_ERROR\_CODES\_RANGE

• `Const` **HTTP\_REQUEST\_ERROR\_CODES\_RANGE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CLIENT_ERROR` | `number`[] |
| `NO_ERROR` | `number`[] |
| `SERVER_ERROR` | `number`[] |

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:32

___

### HTTP\_REQUEST\_MODES\_SUPPORTED

• `Const` **HTTP\_REQUEST\_MODES\_SUPPORTED**: `HTTP_REQUEST_MODE`[]

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:22

___

### HTTP\_REQUEST\_URL\_PROTOCOL\_DELIMITER\_REGEXP

• `Const` **HTTP\_REQUEST\_URL\_PROTOCOL\_DELIMITER\_REGEXP**: `RegExp`

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:55

___

### HTTP\_RESPONSE\_TYPES

• `Const` **HTTP\_RESPONSE\_TYPES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ERROR` | `string` |
| `OPAQUE` | `string` |
| `OPAQUE_REDIRECT` | `string` |

#### Defined in

src/http-request-class-base/http-request-class-base.const.ts:38

___

### MIME\_TYPES\_CLASS\_BLOB\_TYPES

• `Const` **MIME\_TYPES\_CLASS\_BLOB\_TYPES**: `string`[]

#### Defined in

src/mime-types-class-base/mime-types-class-base.const.ts:21

___

### MIME\_TYPES\_CLASS\_JSON\_EXTENSIONS

• `Const` **MIME\_TYPES\_CLASS\_JSON\_EXTENSIONS**: `string`[]

#### Defined in

src/mime-types-class-base/mime-types-class-base.const.ts:19

___

### MIME\_TYPES\_CLASS\_MULTIPART\_FORM\_TYPES

• `Const` **MIME\_TYPES\_CLASS\_MULTIPART\_FORM\_TYPES**: `string`[]

#### Defined in

src/mime-types-class-base/mime-types-class-base.const.ts:31

___

### MIME\_TYPES\_CLASS\_TEXT\_EXTENSIONS

• `Const` **MIME\_TYPES\_CLASS\_TEXT\_EXTENSIONS**: `string`[]

#### Defined in

src/mime-types-class-base/mime-types-class-base.const.ts:1

___

### MIME\_TYPES\_CLASS\_TEXT\_TYPES

• `Const` **MIME\_TYPES\_CLASS\_TEXT\_TYPES**: `string`[]

#### Defined in

src/mime-types-class-base/mime-types-class-base.const.ts:8

## Functions

### getContentType

▸ `Const` **getContentType**(`response`): `string` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`string` \| `void`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:47

___

### getContentTypeRAW

▸ `Const` **getContentTypeRAW**(`response`): `string` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`string` \| `void`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:62

___

### getNetworkError

▸ `Const` **getNetworkError**(`response`): `void` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`void` \| `Error`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:75

___

### isClientSideError

▸ `Const` **isClientSideError**(`response`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`boolean`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:35

___

### isSucceedResponse

▸ `Const` **isSucceedResponse**(`response`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`boolean`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:19

___

### queryStringFromObject

▸ `Const` **queryStringFromObject**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`TQueryStringParamsObject`](modules.md#tquerystringparamsobject) |

#### Returns

`string`

- string in the format of
param1=value1....&paramN=valueN

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:127

___

### resolveQueryStringParam

▸ `Const` **resolveQueryStringParam**(`paramValue`): `string`

resolve a param as a string can be used as
a query string param

#### Parameters

| Name | Type |
| :------ | :------ |
| `paramValue` | [`TQueryStringAllowedParamValue`](modules.md#tquerystringallowedparamvalue) |

#### Returns

`string`

string

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:90

___

### resolveQueryStringParams

▸ `Const` **resolveQueryStringParams**(...`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | [`TQueryStringParams`](modules.md#tquerystringparams)[] |

#### Returns

`string`

#### Defined in

src/http-request-class-base/http-request-class-base-utils.ts:153
