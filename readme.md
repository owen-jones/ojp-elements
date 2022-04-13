# Owen Jones Pattern Library

The Owen Pattern Library is a collection of HTML custom elements and SCSS mixins that encapsulate the logic of our most frequently used UI patterns. The library is distributed as an NPM module that can be installed on any JavaScript project when necessary. As a living document, the Owen Pattern Library is extensible and version controlled. Updates to the APIs exposed by the Owen Pattern Library should be documented in the internal library website or Figma document.

## Getting Started

### Setup NPM Private Registry

Installing and publishing this library requires a Github token. To obtain a token, follow the instructions [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Once you have a token, create a .npmrc file in your home directory:

```bash
touch ~/.npmrc
```

Open the file and add the following line, replacing TOKEN with your token:

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

### Development:

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

### Test Pages:

An HTML page can be made for each component to test the component. Add pages to the `pages` directory in a sub-directory with the same name as the component. Then edit the `src/index.html` file to link to the new page.

When a build is made, the `web` directory will be generated and all HTML pages will be copied over. This directory can be served remotely to test on a QA server.

## Installing this library in a project
- Follow the steps above to get a Github token and create a .npmrc file.
- Run `npm install @owen-jones/ojp-elements --save`
- If you are using a bundler like Webpack, you can import elements directly in your JS source files as needed.
- Alternately, you can put a script tag similar to this `<script type='module' src='node_modules/ojp-elements/dist/ojp-elements.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc