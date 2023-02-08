# ojp-image



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                              | Type      | Default |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `alt`         | `alt`         | Image alt text Type: string Default: ""                                                                                                  | `string`  | `""`    |
| `height`      | `height`      | Height of the image Type: string Default: null Note: this is not the height of the image container, but the height of the image itself   | `any`     | `null`  |
| `imageFocus`  | `image-focus` | Image focus/object position Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position Default: null | `any`     | `null`  |
| `lazy`        | `lazy`        | Loading type (true = lazy, false = eager) Type: boolean Default: false                                                                   | `boolean` | `false` |
| `lazyOffset`  | `lazy-offset` | Optional lazy load offset Type: string (pixels) Default: "300"                                                                           | `string`  | `'300'` |
| `placeholder` | `placeholder` | Optional placeholder image path Type: string Default: null                                                                               | `any`     | `null`  |
| `ratio`       | `ratio`       | Image aspect ratio Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio Default: null                | `any`     | `null`  |
| `src`         | `src`         | Image src Type: string Required: true Default: null                                                                                      | `string`  | `""`    |
| `width`       | `width`       | Width of the image Type: string Default: null Note: this is not the width of the image container, but the width of the image itself      | `any`     | `null`  |


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
