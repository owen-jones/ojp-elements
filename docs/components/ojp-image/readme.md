# ojp-image



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                              | Type      | Default |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `alt`         | `alt`         | Image alt text Type: string Default: ""                                                                                                  | `string`  | `""`    |
| `dSrc`        | `dsrc`        | Desktop image src Type: string                                                                                                           | `any`     | `null`  |
| `height`      | `height`      | Height of the image Type: string Default: null Note: this is not the height of the image container, but the height of the image itself   | `any`     | `null`  |
| `imageFocus`  | `image-focus` | Image focus/object position Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position Default: null | `any`     | `null`  |
| `lazy`        | `lazy`        | Loading type (true = lazy, false = eager) Type: boolean Default: false                                                                   | `boolean` | `false` |
| `mSrc`        | `msrc`        | Mobile image src                                                                                                                         | `any`     | `null`  |
| `placeholder` | `placeholder` | Optional placeholder image path Type: string Default: null                                                                               | `any`     | `null`  |
| `ratio`       | `ratio`       | Image aspect ratio Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio Default: null                | `any`     | `null`  |
| `src`         | `src`         | Image src Type: string Required: true Default: null                                                                                      | `string`  | `""`    |
| `tSrc`        | `tsrc`        | Tablet image src                                                                                                                         | `any`     | `null`  |
| `wSrc`        | `dsrc`        | Widescreen image src                                                                                                                     | `any`     | `null`  |
| `width`       | `width`       | Width of the image Type: string Default: null Note: this is not the width of the image container, but the width of the image itself      | `any`     | `null`  |


## Events

| Event                | Description                                                                                                                                                              | Type               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `elementIsInvisible` | Triggered when the element has left the viewport                                                                                                                         | `CustomEvent<any>` |
| `elementIsVisible`   | Triggered when the element has entered in the viewport                                                                                                                   | `CustomEvent<any>` |
| `imageFailedToLoad`  | Triggered when the image failed to load                                                                                                                                  | `CustomEvent<any>` |
| `imageLoaded`        | Triggered when the image loaded                                                                                                                                          | `CustomEvent<any>` |
| `imageSourceChanged` | Triggered when the current image source changes Note: this event is not emitted when the image is loaded for the first time Emits the previous source and the new source | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
