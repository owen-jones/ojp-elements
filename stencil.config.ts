import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ojp-elements',
  globalStyle: 'src/global/global.scss',
  globalScript: 'src/global/global.js',
  plugins: [
    sass()
  ],
  sourceMap: true,
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      includeGlobalScripts: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir: 'web',
      copy: [
        { src: 'pages' },
      ],
    },
  ],
};
