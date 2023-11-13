# ojp-footer



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute               | Description                          | Type                                                            | Default                    |
| ----------------------- | ----------------------- | ------------------------------------ | --------------------------------------------------------------- | -------------------------- |
| `currentyear`           | `currentyear`           | Set current copyright year           | `number`                                                        | `new Date().getFullYear()` |
| `defaultfootertext`     | `defaultfootertext`     | Default footer text                  | `string`                                                        | `'© 2023 OJP'`             |
| `footerbackgroundcolor` | `footerbackgroundcolor` | Footer background color              | `string`                                                        | `'red'`                    |
| `footertext`            | `footertext`            | Footer text                          | `string`                                                        | `this.defaultfootertext`   |
| `iscentered`            | `iscentered`            | Footer is centered or not            | `boolean`                                                       | `false`                    |
| `linkSections`          | --                      | Array of link sections in the footer | `{ title: string; links: { text: string; url: string; }[]; }[]` | `[]`                       |


## Events

| Event                | Description                                             | Type               |
| -------------------- | ------------------------------------------------------- | ------------------ |
| `elementIsInvisible` | Triggered when the component has left the viewport      | `CustomEvent<any>` |
| `elementIsVisible`   | Triggered when the component is visible in the viewport | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
