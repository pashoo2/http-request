[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / HttpResponseError

# Class: HttpResponseError

## Hierarchy

- `Error`

  ↳ **`HttpResponseError`**

## Table of contents

### Constructors

- [constructor](httpresponseerror.md#constructor)

### Properties

- [code](httpresponseerror.md#code)
- [error](httpresponseerror.md#error)
- [isClientError](httpresponseerror.md#isclienterror)
- [message](httpresponseerror.md#message)
- [name](httpresponseerror.md#name)
- [response](httpresponseerror.md#response)
- [stack](httpresponseerror.md#stack)
- [prepareStackTrace](httpresponseerror.md#preparestacktrace)
- [stackTraceLimit](httpresponseerror.md#stacktracelimit)

### Methods

- [errorMessage](httpresponseerror.md#errormessage)
- [mergeWithNetworkError](httpresponseerror.md#mergewithnetworkerror)
- [processResponse](httpresponseerror.md#processresponse)
- [setIsClientSideError](httpresponseerror.md#setisclientsideerror)
- [setResponseCode](httpresponseerror.md#setresponsecode)
- [captureStackTrace](httpresponseerror.md#capturestacktrace)

## Constructors

### constructor

• **new HttpResponseError**(`response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Overrides

Error.constructor

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:12

## Properties

### code

• `Optional` **code**: `number`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:7

___

### error

• `Optional` **error**: `Error`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:8

___

### isClientError

• **isClientError**: `boolean` = `false`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:10

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### response

• `Protected` **response**: `Response`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:12

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### errorMessage

▸ **errorMessage**(): `Promise`<`string` \| `Error`\>

#### Returns

`Promise`<`string` \| `Error`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:33

___

### mergeWithNetworkError

▸ **mergeWithNetworkError**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:56

___

### processResponse

▸ **processResponse**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:67

___

### setIsClientSideError

▸ **setIsClientSideError**(): `void`

#### Returns

`void`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:27

___

### setResponseCode

▸ **setResponseCode**(): `void`

#### Returns

`void`

#### Defined in

src/http-request-class-base/http-request-class-base-subclasses/http-request-class-base-response-error.ts:20

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133
