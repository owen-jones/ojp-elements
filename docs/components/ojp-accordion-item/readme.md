# ojp-accordion-item



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




## Slots

| Slot        | Description                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"content"` | Slot for the panel/content section of the accordion item. This will be the content under the header section that is collapsed or expanded.                                                                               |
| `"header"`  | Slot for the header section of the accordion item. This will be the text next to the icon.                                                                                                                               |
| `"icon"`    | Optional slot for the icon (defaults to caret) that is next to the header text. Defaults to caret. ** Note: If using the custom icon slot, the icon's "open" and "closed" states must be explicitly defined by end user. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
