import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

config.searchPseudoElements = true;

library.add(faGlobe, faClock); // Add icons that you need.

document.addEventListener('DOMContentLoaded', () => {
  dom.watch();
});
