# Owen Jones Pattern Library

The Owen Pattern Library is a collection of HTML custom elements and SCSS mixins that encapsulate the logic of our most frequently used UI patterns. The library is distributed as an NPM module that can be installed on any JavaScript project when necessary. As a living document, the Owen Pattern Library is extensible and version controlled. Updates to the APIs exposed by the Owen Pattern Library should be documented in the [internal library website](http://storybook.whoisowenjones.com) or Figma document.

## Using this library in a project:

### Using the library with NPM, Webpack or Gulp

Install the library in your project by running
```bash
npm install @owen-jones/ojp-elements@0.2.0`
```

Import the loader in your main JavaScript file and invoke it:
```javascript
import { defineCustomElements } from '@owen-jones/ojp-elements/loader';
defineCustomElements();
```

Import the library styles in your main SCSS file:
```scss
@import "~@owen-jones/ojp-elements/dist/ojp-elements/ojp-elements.css";
```

### Using the library through the CDN

If you can't install the library into your project, the library can be imported 
directly from the CDN through an HTML `<script>` tag.

Include the following imports in the `<head>` of your HTML file:

```html
<script type='module' src='https://cdn.jsdelivr.net/npm/@owen-jones/ojp-elements@0.2.0/dist/ojp-elements/ojp-elements.esm.min.js'></script>
<link rel='stylesheet' crossorigin='anonymous' href='https://cdn.jsdelivr.net/npm/@owen-jones/ojp-elements@0.2.0/dist/ojp-elements/ojp-elements.min.css'/>
```

## Development:

Clone the repository and run:
```bash
npm install
npm start
```
To generate the files for a new component, run:

```bash
npm run generate
```

This will create a new directory in `src/components` with the name of your new element tag. The directory will contain a `component.tsx` file that will contain the JavaScript source of the component. A stylesheet file will also be created. To use SCSS instead, just rename the file and update the reference in the component's JavaScript source.

To build the component for production, run:

```bash
npm run build
```

This will compile the library and generate readme.md files for all the components in the library. These are automatically populated with the element's attributes and properties. To add more information, you can manually update the markdown file in the component's directory.

Need help? Check the Stencil.js docs [here](https://stenciljs.com/docs/my-first-component).

## Test Pages:

An HTML page can be made for each component to test the component. Add pages to the `pages` directory in a sub-directory with the same name as the component. Then edit the `src/index.html` file to link to the new page.

When a build is made, the `web` directory will be generated and all HTML pages will be copied over. This directory can be served remotely to test on a QA server.