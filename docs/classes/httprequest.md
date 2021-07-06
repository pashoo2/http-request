[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / HttpRequest

# Class: HttpRequest

## Hierarchy

- [`HttpRequestBodyProcessor`](httprequestbodyprocessor.md)

  ↳ **`HttpRequest`**

## Table of contents

### Constructors

- [constructor](httprequest.md#constructor)

### Properties

- [baseUrl](httprequest.md#baseurl)
- [contentType](httprequest.md#contenttype)
- [credentials](httprequest.md#credentials)
- [method](httprequest.md#method)
- [mode](httprequest.md#mode)
- [options](httprequest.md#options)
- [queryStringParams](httprequest.md#querystringparams)
- [token](httprequest.md#token)
- [url](httprequest.md#url)
- [ContentType](httprequest.md#contenttype)
- [HeaderName](httprequest.md#headername)
- [RequestMethod](httprequest.md#requestmethod)
- [RequestMode](httprequest.md#requestmode)
- [baseUrl](httprequest.md#baseurl)
- [token](httprequest.md#token)

### Accessors

- [bodyRAW](httprequest.md#bodyraw)
- [bodyType](httprequest.md#bodytype)

### Methods

- [getBody](httprequest.md#getbody)
- [getCacheMode](httprequest.md#getcachemode)
- [getCredentials](httprequest.md#getcredentials)
- [getQueryStringParams](httprequest.md#getquerystringparams)
- [getRequestHeaders](httprequest.md#getrequestheaders)
- [getRequestMethod](httprequest.md#getrequestmethod)
- [getRequestMode](httprequest.md#getrequestmode)
- [preProcessBody](httprequest.md#preprocessbody)
- [preProcessResponse](httprequest.md#preprocessresponse)
- [processBodyAsJSON](httprequest.md#processbodyasjson)
- [processBodyAsMultipart](httprequest.md#processbodyasmultipart)
- [processBodyAsUrlEncoded](httprequest.md#processbodyasurlencoded)
- [resolveTargetUrl](httprequest.md#resolvetargeturl)
- [send](httprequest.md#send)
- [setOptions](httprequest.md#setoptions)
- [logError](httprequest.md#logerror)
- [setBaseUrl](httprequest.md#setbaseurl)
- [setToken](httprequest.md#settoken)

## Constructors

### constructor

• **new HttpRequest**(`options`)

Creates an instance of HttpRequest.

**`memberof`** HttpRequest

**`throws`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Overrides

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[constructor](httprequestbodyprocessor.md#constructor)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:62

## Properties

### baseUrl

• `Protected` `Optional` **baseUrl**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:48

___

### contentType

• `Protected` `Optional` **contentType**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:58

___

### credentials

• `Protected` `Optional` **credentials**: `RequestCredentials`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:62

___

### method

• `Protected` `Optional` **method**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:52

___

### mode

• `Protected` `Optional` **mode**: `RequestMode`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:54

___

### options

• `Protected` **options**: [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md)

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[options](httprequestbodyprocessor.md#options)

___

### queryStringParams

• `Protected` `Optional` **queryStringParams**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:60

___

### token

• `Protected` `Optional` **token**: [`THttpRequestToken`](../modules.md#thttprequesttoken)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:56

___

### url

• `Protected` `Optional` **url**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:50

___

### ContentType

▪ `Static` **ContentType**: typeof [`HTTP_REQUEST_CONTENT_TYPE`](../enums/http_request_content_type.md)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:25

___

### HeaderName

▪ `Static` **HeaderName**: typeof [`HTTP_REQUEST_HEADERS_NAMES`](../enums/http_request_headers_names.md)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:27

___

### RequestMethod

▪ `Static` **RequestMethod**: typeof [`HTTP_REQUEST_METHOD`](../enums/http_request_method.md)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:31

___

### RequestMode

▪ `Static` **RequestMode**: typeof [`HTTP_REQUEST_MODE`](../enums/http_request_mode.md)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:29

___

### baseUrl

▪ `Static` `Protected` `Optional` **baseUrl**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:33

___

### token

▪ `Static` `Private` `Optional` **token**: [`THttpRequestToken`](../modules.md#thttprequesttoken)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:35

## Accessors

### bodyRAW

• `Private` `get` **bodyRAW**(): `undefined` \| `string` \| `number` \| `object`

#### Returns

`undefined` \| `string` \| `number` \| `object`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:20

___

### bodyType

• `Private` `get` **bodyType**(): ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"``

#### Returns

``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"``

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:27

## Methods

### getBody

▸ `Protected` **getBody**(): `undefined` \| `string` \| `FormData`

#### Returns

`undefined` \| `string` \| `FormData`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[getBody](httprequestbodyprocessor.md#getbody)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:99

___

### getCacheMode

▸ `Protected` **getCacheMode**(): `RequestCache`

#### Returns

`RequestCache`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:295

___

### getCredentials

▸ `Protected` **getCredentials**(`options`): `undefined` \| `RequestCredentials`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Returns

`undefined` \| `RequestCredentials`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:140

___

### getQueryStringParams

▸ `Protected` **getQueryStringParams**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TQueryStringParams`](../modules.md#tquerystringparams) |

#### Returns

`string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:212

___

### getRequestHeaders

▸ `Protected` **getRequestHeaders**(): `HeadersInit`

#### Returns

`HeadersInit`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:281

___

### getRequestMethod

▸ `Protected` **getRequestMethod**(`method`, `options`): `Error` \| [`HTTP_REQUEST_METHOD`](../enums/http_request_method.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `undefined` \| `string` |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Returns

`Error` \| [`HTTP_REQUEST_METHOD`](../enums/http_request_method.md)

#### Defined in

src/http-request-class-base/http-request-class-base.ts:117

___

### getRequestMode

▸ `Protected` **getRequestMode**(`method`, `options`): `undefined` \| `Error` \| `RequestMode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`HTTP_REQUEST_METHOD`](../enums/http_request_method.md) |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Returns

`undefined` \| `Error` \| `RequestMode`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:154

___

### preProcessBody

▸ `Protected` **preProcessBody**(): `undefined` \| `string` \| `FormData`

#### Returns

`undefined` \| `string` \| `FormData`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[preProcessBody](httprequestbodyprocessor.md#preprocessbody)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:81

___

### preProcessResponse

▸ `Protected` **preProcessResponse**(`response`): `Promise`<`Error` \| [`HttpResponseError`](httpresponseerror.md) \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`<`Error` \| [`HttpResponseError`](httpresponseerror.md) \| [`THttpResponseResult`](../modules.md#thttpresponseresult)\>

#### Defined in

src/http-request-class-base/http-request-class-base.ts:302

___

### processBodyAsJSON

▸ `Protected` **processBodyAsJSON**(): `undefined` \| `string` \| `FormData`

#### Returns

`undefined` \| `string` \| `FormData`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[processBodyAsJSON](httprequestbodyprocessor.md#processbodyasjson)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:67

___

### processBodyAsMultipart

▸ `Protected` **processBodyAsMultipart**(): `undefined` \| `FormData`

#### Returns

`undefined` \| `FormData`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[processBodyAsMultipart](httprequestbodyprocessor.md#processbodyasmultipart)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:33

___

### processBodyAsUrlEncoded

▸ `Protected` **processBodyAsUrlEncoded**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[processBodyAsUrlEncoded](httprequestbodyprocessor.md#processbodyasurlencoded)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:49

___

### resolveTargetUrl

▸ `Protected` **resolveTargetUrl**(`url`): `string`

resolve the url where to send the request
depending on the options url
base url and a query string

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:199

___

### send

▸ **send**(): `Promise`<`undefined` \| `string` \| `object` \| `Error` \| `FormData` \| `Blob` \| [`HttpResponseError`](httpresponseerror.md) \| `File`\>

 /**
send the request to the server
on the url defined in the
options

**`memberof`** HttpRequest

#### Returns

`Promise`<`undefined` \| `string` \| `object` \| `Error` \| `FormData` \| `Blob` \| [`HttpResponseError`](httpresponseerror.md) \| `File`\>

#### Defined in

src/http-request-class-base/http-request-class-base.ts:85

___

### setOptions

▸ `Protected` **setOptions**(`options`): `void`

**`memberof`** HttpRequest

**`throws`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Returns

`void`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:228

___

### logError

▸ `Static` `Protected` **logError**(`methodName`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `err` | `string` \| `Error` |

#### Returns

`void`

#### Inherited from

[HttpRequestBodyProcessor](httprequestbodyprocessor.md).[logError](httprequestbodyprocessor.md#logerror)

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:14

___

### setBaseUrl

▸ `Static` **setBaseUrl**(`baseUrl`): `void` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |

#### Returns

`void` \| `Error`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:37

___

### setToken

▸ `Static` **setToken**(`token`): `void` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`THttpRequestToken`](../modules.md#thttprequesttoken) |

#### Returns

`void` \| `Error`

#### Defined in

src/http-request-class-base/http-request-class-base.ts:44
