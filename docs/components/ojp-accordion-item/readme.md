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


## CSS Custom Properties

| Name                                         | Description                                                                                           |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `--ojp-accordion-item--animation-speed`      | Animation speed of accordion item toggle (panel height, opacity AND icon rotate). Defaults to `0.35s` |
| `--ojp-accordion-item--header-padding-block` | Top/bottom padding on accordion item header. Defaults to `--space-xs-s`                               |
| `--ojp-accordion-item--hover-opacity`        | Opacity of header on hover. Defaults to `0.5`                                                         |
| `--ojp-accordion-item--icon-stroke-width`    | Stroke width of svg caret icon. Defaults to `3px`                                                     |
| `--ojp-accordion-item--icon-width`           | Width of caret icon. Defaults to `--space-s-m`;                                                       |
| `--ojp-accordion-item--max-content-width`    | Max width of header content AND panel content. Defaults to `100%` (`75%` on desktop up)               |
| `--ojp-accordion-item--padding-inline`       | L/R padding on accordion item (header and panel). Defaults to `--space-s-m`                           |
| `--ojp-accordion-item--panel-padding-block`  | Top/bottom padding on accordion item panel. Defaults to `--space-2xs-xs`                              |
| `--ojp-accordion-item--separator-line-color` | Stroke color of line separating each accordion item. Defaults to `#BABABA`                            |
| `--ojp-accordion-item--separator-line-width` | Stroke width of line separating each accordion item. Defaults to `1px` (`2px` on tablet up)           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
