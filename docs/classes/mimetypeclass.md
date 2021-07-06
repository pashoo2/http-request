[@pashoo2/http-request](../README.md) / [Exports](../modules.md) / MimeTypeClass

# Class: MimeTypeClass

## Table of contents

### Constructors

- [constructor](mimetypeclass.md#constructor)

### Properties

- [extension](mimetypeclass.md#extension)
- [isBlob](mimetypeclass.md#isblob)
- [isFile](mimetypeclass.md#isfile)
- [isJSON](mimetypeclass.md#isjson)
- [isText](mimetypeclass.md#istext)
- [isUnknown](mimetypeclass.md#isunknown)
- [mimeType](mimetypeclass.md#mimetype)

### Methods

- [checkFileExtension](mimetypeclass.md#checkfileextension)
- [checkIsBlob](mimetypeclass.md#checkisblob)
- [checkIsFile](mimetypeclass.md#checkisfile)
- [checkIsJSON](mimetypeclass.md#checkisjson)
- [checkIsText](mimetypeclass.md#checkistext)
- [processMimeType](mimetypeclass.md#processmimetype)

## Constructors

### constructor

• **new MimeTypeClass**(`mimeType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mimeType` | `string` |

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:21

## Properties

### extension

• **extension**: ``null`` \| `string` = `null`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:11

___

### isBlob

• **isBlob**: `boolean` = `false`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:15

___

### isFile

• **isFile**: `boolean` = `false`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:17

___

### isJSON

• **isJSON**: `boolean` = `false`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:19

___

### isText

• **isText**: `boolean` = `false`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:13

___

### isUnknown

• **isUnknown**: `boolean` = `false`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:21

___

### mimeType

• `Protected` **mimeType**: `string`

## Methods

### checkFileExtension

▸ **checkFileExtension**(): `void`

#### Returns

`void`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:60

___

### checkIsBlob

▸ **checkIsBlob**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:33

___

### checkIsFile

▸ **checkIsFile**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:27

___

### checkIsJSON

▸ **checkIsJSON**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:39

___

### checkIsText

▸ **checkIsText**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:45

___

### processMimeType

▸ **processMimeType**(): `void`

#### Returns

`void`

#### Defined in

src/mime-types-class-base/mime-types-class-base.ts:66
