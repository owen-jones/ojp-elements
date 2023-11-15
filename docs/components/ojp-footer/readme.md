# ojp-footer



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute               | Description                          | Type                                                            | Default                             |
| ----------------------- | ----------------------- | ------------------------------------ | --------------------------------------------------------------- | ----------------------------------- |
| `defaultfootertext`     | `defaultfootertext`     | Default footer text                  | `string`                                                        | `'© 2023 OJP'`                      |
| `footerbackgroundcolor` | `footerbackgroundcolor` | Footer background color              | `string`                                                        | `'#fff'`                            |
| `footerlogo`            | `footerlogo`            | Footer logo                          | `string`                                                        | `'https://via.placeholder.com/150'` |
| `footerlogodisplay`     | `footerlogodisplay`     | Footer logo display or not           | `boolean`                                                       | `false`                             |
| `footerpadding`         | `footerpadding`         | Footer padding                       | `string`                                                        | `'0.25em'`                          |
| `footertext`            | `footertext`            | Footer text                          | `string`                                                        | `this.defaultfootertext`            |
| `footertextcolor`       | `footertextcolor`       | Footer text color                    | `string`                                                        | `'#000'`                            |
| `iscentered`            | `iscentered`            | Footer is centered or not            | `boolean`                                                       | `false`                             |
| `linkSections`          | --                      | Array of link sections in the footer | `{ title: string; links: { text: string; url: string; }[]; }[]` | `[]`                                |


## Events

| Event                | Description                                             | Type               |
| -------------------- | ------------------------------------------------------- | ------------------ |
| `elementIsInvisible` | Triggered when the component has left the viewport      | `CustomEvent<any>` |
| `elementIsVisible`   | Triggered when the component is visible in the viewport | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
