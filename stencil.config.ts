import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ojp-elements',
  plugins: [
    sass()
  ],
  sourceMap: true,
  globalScript: 'src/global/global.js',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
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
