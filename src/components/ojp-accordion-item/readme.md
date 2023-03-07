# ojp-accordion



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                 | Type      | Default     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------- | --------- | ----------- |
| `anchorId` | `anchor-id` | Optional User-defined anchor id Used so item can be auto-opened with url param Type: string | `any`     | `undefined` |
| `index`    | `index`     | Index of accordion item from top to bottom Type: number                                     | `number`  | `-1`        |
| `open`     | `open`      | Accordion item is open or opening (css transition) Type: boolean                            | `boolean` | `false`     |


## Events

| Event        | Description                                 | Type               |
| ------------ | ------------------------------------------- | ------------------ |
| `itemClosed` | Triggered when the accordion item is closed | `CustomEvent<any>` |
| `itemOpened` | Triggered when the accordion item is opened | `CustomEvent<any>` |


## Methods

### `closeItem() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openItem() => Promise<void>`

Open the accordion item

#### Returns

Type: `Promise<void>`



### `toggleItem() => Promise<void>`

Toggle the accordion item

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
