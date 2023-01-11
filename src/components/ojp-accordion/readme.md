# ojp-accordion



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description                                                                                                                              | Type      | Default |
| ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `allowMultipleItemsOpen` | `allow-multiple-items-open` | Allow multiple items to be open at once If set to false, opening one item will auto-close all other items in the accordion Type: boolean | `boolean` | `false` |


## Events

| Event                     | Description                                                       | Type               |
| ------------------------- | ----------------------------------------------------------------- | ------------------ |
| `elementIsInvisibleEvent` |                                                                   | `CustomEvent<any>` |
| `elementIsVisibleEvent`   | Triggered when the accordion is visible/invisible in the viewport | `CustomEvent<any>` |


## Methods

### `toggleAll() => Promise<void>`

Expand/Collapse all accordion items

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
