import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ojp-elements',
  enableCache: false,
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
      type: 'dist'
    },
    {
      type: 'docs-readme',
      dir: 'docs',
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
  devServer: {
    port: 4444
  }
};
