# ojp-image



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                     | Type     | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `alt`        | `alt`         | Image alt text Type: string Default: ""                                                                                                                                                                                                                                                                                                                         | `string` | `""`        |
| `imageFocus` | `image-focus` | Image focus/object position Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position Default: null                                                                                                                                                                                                                        | `string` | `"50% 50%"` |
| `lazy`       | `lazy`        | Loading type (using browser's native lazy loading) Type: boolean Default: true                                                                                                                                                                                                                                                                                  | `string` | `"true"`    |
| `ratio`      | `ratio`       | Image aspect ratio Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio Default: null                                                                                                                                                                                                                                       | `string` | `"auto"`    |
| `sources`    | `sources`     | Source tags Type: string array of objects Default: [] Example: sources='[           {             "media":"(max-width: 599px)",             "srcset":"../../assets/small_700x600.png"           },           {             "media":"(min-width: 600px) and (max-width: 1000px)",             "srcset":"../../assets/medium_1000x400.png"           }         ]' | `string` | `''`        |
| `src`        | `src`         | Image src Type: string Required: true Default: null                                                                                                                                                                                                                                                                                                             | `string` | `""`        |


## Events

| Event                     | Description                                                                                                                                                              | Type               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `elementIsInvisibleEvent` |                                                                                                                                                                          | `CustomEvent<any>` |
| `elementIsVisibleEvent`   | Triggered when the element is visible/invisible in the viewport                                                                                                          | `CustomEvent<any>` |
| `imageFailedToLoadEvent`  |                                                                                                                                                                          | `CustomEvent<any>` |
| `imageLoadedEvent`        | Triggered when the image loaded/failed to load                                                                                                                           | `CustomEvent<any>` |
| `imageSourceChangedEvent` | Triggered when the current image source changes Note: this event is not emitted when the image is loaded for the first time Emits the previous source and the new source | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
