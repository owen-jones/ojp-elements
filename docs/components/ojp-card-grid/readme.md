# ojp-card-grid



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                    | Type      | Default |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------- | --------- | ------- |
| `ismasonry` | `ismasonry` | isMasonry is false by default, set isMasonry to true to change to masonry layout Type: boolean | `boolean` | `false` |


## Events

| Event                     | Description                                                  | Type               |
| ------------------------- | ------------------------------------------------------------ | ------------------ |
| `elementIsInvisibleEvent` |                                                              | `CustomEvent<any>` |
| `elementIsVisibleEvent`   | Triggered when the card is visible/invisible in the viewport | `CustomEvent<any>` |


## CSS Custom Properties

| Name                       | Description                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--ojp-card-grid--col-gap` | The space between columns in the card grid. Defaults to `10px`                                                                                    |
| `--ojp-card-grid--columns` | Number of columns in card grid. Use media queries to change this value at different breakpoints. Defaults to mobile - 1, tablet - 2, desktop - 3. |
| `--ojp-card-grid--row-gap` | The space between rows in the card grid. Defaults to `10px`                                                                                       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
