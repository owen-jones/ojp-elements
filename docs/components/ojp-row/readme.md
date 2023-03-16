# ojp-row



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                                                                                                            | Type      | Default     |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `align`     | `align`     | align-items property of the grid. <br><br>Default: `stretch`                                                                                                                                                                                                                                           | `string`  | `'stretch'` |
| `cols`      | `cols`      | The number of columns that the row should be divided into. Internally, this is used to set the `grid-template-columns` property. Shorthand for desktop, tablet, and mobile cols. <br><br>Default: `12` <br><br>`<ojp-col cols="12">` is equivalent to <br>`<ojp-col mcols="12" tcols="12" dcols="12">` | `string`  | `'12'`      |
| `dcols`     | `dcols`     | The number of columns that the row should be divided into on desktop. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}                                                                                                                      | `any`     | `undefined` |
| `fullbleed` | `fullbleed` | Should the gutters (aka page padding) be removed? Internally, setting this to true sets the `--ojp-row--gutter` css variable to `0`. <br><br>Default: `false`                                                                                                                                          | `boolean` | `false`     |
| `justify`   | `justify`   | justify-items property of the grid. <br><br>Default: `stretch`                                                                                                                                                                                                                                         | `string`  | `'stretch'` |
| `mcols`     | `mcols`     | The number of columns that the row should be divided into on mobile. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}                                                                                                                       | `any`     | `undefined` |
| `tcols`     | `tcols`     | The number of columns that the row should be divided into on tablet. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}                                                                                                                       | `any`     | `undefined` |


## CSS Custom Properties

| Name                       | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `--ojp-row--align-items`   | Align Items. Defaults to `stretch`.                                           |
| `--ojp-row--col-gap`       | Gap between columns. Defaults to `--space-2xs-xs`.                            |
| `--ojp-row--gutter`        | Minimum gutter width. Defaults to `--space-s-3xl`.                            |
| `--ojp-row--justify-items` | Justify Items. Defaults to `stretch`.                                         |
| `--ojp-row--margin-inline` | Inline margin between rows. Defaults to `--space-xs-s`.                       |
| `--ojp-row--row-gap`       | Vertical gap between stacking columns in a row. Defaults to `--space-2xs-xs`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
