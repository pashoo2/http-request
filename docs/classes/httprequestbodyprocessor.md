[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / HttpRequestBodyProcessor

# Class: HttpRequestBodyProcessor

## Hierarchy

- **`HttpRequestBodyProcessor`**

  ↳ [`HttpRequest`](httprequest.md)

## Table of contents

### Constructors

- [constructor](httprequestbodyprocessor.md#constructor)

### Properties

- [options](httprequestbodyprocessor.md#options)

### Accessors

- [bodyRAW](httprequestbodyprocessor.md#bodyraw)
- [bodyType](httprequestbodyprocessor.md#bodytype)

### Methods

- [getBody](httprequestbodyprocessor.md#getbody)
- [preProcessBody](httprequestbodyprocessor.md#preprocessbody)
- [processBodyAsJSON](httprequestbodyprocessor.md#processbodyasjson)
- [processBodyAsMultipart](httprequestbodyprocessor.md#processbodyasmultipart)
- [processBodyAsUrlEncoded](httprequestbodyprocessor.md#processbodyasurlencoded)
- [logError](httprequestbodyprocessor.md#logerror)

## Constructors

### constructor

• **new HttpRequestBodyProcessor**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md) |

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:16

## Properties

### options

• `Protected` **options**: [`IHttpRequestOptions`](../interfaces/ihttprequestoptions.md)

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

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:99

___

### preProcessBody

▸ `Protected` **preProcessBody**(): `undefined` \| `string` \| `FormData`

#### Returns

`undefined` \| `string` \| `FormData`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:81

___

### processBodyAsJSON

▸ `Protected` **processBodyAsJSON**(): `undefined` \| `string` \| `FormData`

#### Returns

`undefined` \| `string` \| `FormData`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:67

___

### processBodyAsMultipart

▸ `Protected` **processBodyAsMultipart**(): `undefined` \| `FormData`

#### Returns

`undefined` \| `FormData`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:33

___

### processBodyAsUrlEncoded

▸ `Protected` **processBodyAsUrlEncoded**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:49

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

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-body-processor.ts:14
