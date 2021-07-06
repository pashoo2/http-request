[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / IHttpRequestOptions

# Interface: IHttpRequestOptions

## Table of contents

### Properties

- [baseUrl](ihttprequestoptions.md#baseurl)
- [body](ihttprequestoptions.md#body)
- [cache](ihttprequestoptions.md#cache)
- [contentType](ihttprequestoptions.md#contenttype)
- [credentials](ihttprequestoptions.md#credentials)
- [method](ihttprequestoptions.md#method)
- [mode](ihttprequestoptions.md#mode)
- [queryStringParams](ihttprequestoptions.md#querystringparams)
- [token](ihttprequestoptions.md#token)
- [url](ihttprequestoptions.md#url)
- [withCookie](ihttprequestoptions.md#withcookie)

## Properties

### baseUrl

• `Optional` **baseUrl**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:54

___

### body

• `Optional` **body**: `string` \| `number` \| `object`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:49

___

### cache

• `Optional` **cache**: [`DEFAULT`](../enums/http_request_cache_control.md#default) \| [`NO_CACHE`](../enums/http_request_cache_control.md#no_cache) \| [`RELOAD`](../enums/http_request_cache_control.md#reload) \| [`FORCE`](../enums/http_request_cache_control.md#force) \| [`CACHED_ONLY`](../enums/http_request_cache_control.md#cached_only)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:51

___

### contentType

• `Optional` **contentType**: [`JSON`](../enums/http_request_content_type.md#json) \| [`URL_ENCODED`](../enums/http_request_content_type.md#url_encoded) \| [`MULTIPART`](../enums/http_request_content_type.md#multipart) \| [`PLAIN`](../enums/http_request_content_type.md#plain)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:47

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:57

___

### method

• `Optional` **method**: [`POST`](../enums/http_request_method.md#post) \| [`GET`](../enums/http_request_method.md#get) \| [`PUT`](../enums/http_request_method.md#put) \| [`DELETE`](../enums/http_request_method.md#delete)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:46

___

### mode

• `Optional` **mode**: [`CORS`](../enums/http_request_mode.md#cors) \| [`SAME_ORIGIN`](../enums/http_request_mode.md#same_origin) \| [`NO_CORS`](../enums/http_request_mode.md#no_cors)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:50

___

### queryStringParams

• `Optional` **queryStringParams**: [`TQueryStringParams`](../modules.md#tquerystringparams)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:53

___

### token

• `Optional` **token**: [`THttpRequestToken`](../modules.md#thttprequesttoken)

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:52

___

### url

• **url**: `string`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:48

___

### withCookie

• `Optional` **withCookie**: `boolean`

#### Defined in

src/http-request-class-base/http-request-class-base.types.ts:56
