[wizecore-hooks](README.md) / Exports

# wizecore-hooks

## Table of contents

### Functions

- [useDocumentTitle](#usedocumenttitle)
- [useElementPosition](#useelementposition)
- [useFullscreen](#usefullscreen)
- [useIsomorphicLayoutEffect](#useisomorphiclayouteffect)
- [useUserAgent](#useuseragent)

## Functions

### useDocumentTitle

▸ **useDocumentTitle**(`title`): `void`

Sets the document title.

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Defined in

useDocumentTitle.ts:6

___

### useElementPosition

▸ **useElementPosition**(`ref`): `Object`

Get the position of an element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `RefObject`<`HTMLElement`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `left` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

useElementPosition.ts:7

___

### useFullscreen

▸ **useFullscreen**(`ref`, `options?`): () => `void`

Request full screen for a specified iframe element

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `RefObject`<`HTMLIFrameElement` \| `HTMLDivElement`\> |
| `options` | `Object` |
| `options.onEnter` | () => `void` |
| `options.onError` | (`err`: `Error`) => `void` |
| `options.onExit` | () => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

useFullscreen.ts:21

___

### useIsomorphicLayoutEffect

▸ **useIsomorphicLayoutEffect**(`effect`, `deps?`): `void`

Use the layout effect on the client and the effect on the server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1060

___

### useUserAgent

▸ **useUserAgent**(): `Object`

Parse the user agent string to determine if the user is using Safari on an iPhone or iPad.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Safari` | `undefined` \| `boolean` |
| `iPad` | `undefined` \| `boolean` |
| `iPhone` | `undefined` \| `boolean` |
| `userAgent` | `undefined` \| `string` |

#### Defined in

useUserAgent.ts:6
