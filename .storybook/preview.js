import {defineCustomElements} from '../loader';
import '../web/build/ojp-elements.css';

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  expanded: true
}
