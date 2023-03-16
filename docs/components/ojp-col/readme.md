# ojp-col



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                               | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `dspan`  | `dspan`   | How many grid columns this element will span on desktop devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.                                                                                                                          | `any`    | `undefined` |
| `dstart` | `dstart`  | The column's start position on desktop devices. (Internally uses `grid-column-start: <dstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.                                                                                                       | `any`    | `undefined` |
| `mspan`  | `mspan`   | How many grid columns this element will span on mobile devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.                                                                                                                           | `any`    | `undefined` |
| `mstart` | `mstart`  | The column's start position on mobile devices. (Internally uses `grid-column-start: <mstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.                                                                                                        | `any`    | `undefined` |
| `span`   | `span`    | How many grid columns this element will span. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col span="12">` is equivalent to <br>`<ojp-col mspan="12" tspan="12" dspan="12">`                                             | `string` | `'auto'`    |
| `start`  | `start`   | The column's start position on all devices. Shorthand for desktop, tablet, and mobile start. (Internally uses `grid-column-start: <start>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col start="2">` is equivalent to <br>`<ojp-col mstart="2" tstart="2" dstart="2">` | `string` | `'auto'`    |
| `tspan`  | `tspan`   | How many grid columns this element will span on tablet devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.                                                                                                                           | `any`    | `undefined` |
| `tstart` | `tstart`  | The column's start position on tablet devices. (Internally uses `grid-column-start: <tstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.                                                                                                        | `any`    | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
