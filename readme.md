# Owen Jones Pattern Library

The Owen Pattern Library is a collection of HTML custom elements and SCSS mixins that encapsulate the logic of our most frequently used UI patterns. The library is distributed as an NPM module that can be installed on any JavaScript project when necessary. As a living document, the Owen Pattern Library is extensible and version controlled. Updates to the APIs exposed by the Owen Pattern Library should be documented in each component's source code, which will auto-generate the associate readme.

## Documentation:
[OJP Elements Docs](docs/readme.md)

## Using this library in a project:

### Using the library with NPM, Webpack or Gulp (recommended)

Install the library in your project by running
```bash
npm install @ojp/ojp-elements@0.3.34
```

Import the components you want to use individually:
```javascript
import {OjpAccordion} from '@ojp/ojp-elements/dist/components/ojp-accordion';
import {OjpModal} from '@ojp/ojp-elements/dist/components/ojp-modal';
```

Import the library styles in your main SCSS file:
```scss
@import "~@ojp/ojp-elements/dist/ojp-elements/ojp-elements.css";
```

### Using the library through the CDN

If you can't install the library into your project, the library can be imported 
directly from the CDN through an HTML `<script>` tag.

Include the following imports in the `<head>` of your HTML file:

```html
<script type='module' src='https://cdn.jsdelivr.net/npm/@ojp/ojp-elements@0.3.34/dist/ojp-elements/ojp-elements.esm.min.js'></script>
<link rel='stylesheet' crossorigin='anonymous' href='https://cdn.jsdelivr.net/npm/@ojp/ojp-elements@0.3.34/dist/ojp-elements/ojp-elements.min.css'/>
```

## Development:

Clone the repository and run:
```bash
npm install
npm start
```
To generate the files for a new component, run:

```bash
npm run generateFromTemplate <element-tag>
```
e.g. `npm run generateFromTemplate ojp-accordion`

This will create a new directory in `src/components` with the name of your new element tag. The directory will contain a `component.jsx` file that will contain the JavaScript source of the component. An SCSS stylesheet file will also be created.

To build the component for production and generate docs, run:

```bash
npm run build
```

This will compile the library and generate readme.md files for all the components in the library and place them in `docs` at the project root. These are automatically populated with the element's attributes and properties. To add more information, you can manually update the markdown file in the component's directory.

Need help? Check the Stencil.js docs [here](https://stenciljs.com/docs/my-first-component).

### Demo Pages:

When you run `npm run generateFromTemplate`, an HTML page will be made in the `pages` directory to view and test it. The script will also add the component to the `src/index.html` file to link to the new page.

When a build is made, the `web` directory will be generated and all HTML pages will be copied over. This directory can be served remotely to test on a QA server.'

### Publishing and Versioning:
When you are ready to publish a new version of the library, do the following:

#### Incrementing the version number:
Increment the version number in the following files. The version number should follow [semantic versioning](https://semver.org/).

- 3 places in this `readme.md` file
- `package.json`

#### Tagging a release:
After you have incremented the version number, tag the release in git by running the following commands:

```bash
git add .
git commit -m "Increment version number"
git tag -a v0.3.39 -m "v0.3.39" // Replace the version number with the new version number
git push origin main --tags
```

#### Publishing the library:
Publish the library to NPM by running the following commands. When prompted for a one-time password, you can find it in the 1Password vault under "NPM".

```bash
npm login
npm publish
```

#### Verifying the release:
Verify that the tag has been created and pushed by checking Github. You should see the newly created tag listed [here.](https://github.com/owen-jones/ojp-elements/tags)

Verify that the library has been published to NPM by running the following command:
```bash
npm view @ojp/ojp-elements versions
```
