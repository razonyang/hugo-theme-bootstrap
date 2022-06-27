import docsearch from '@docsearch/js';
import { default as params } from '@params';
import { default as customOptions } from './options';

let defaultOptions = {
  container: '.search-bar'
}

let replacements: Object = {
  appid: 'appId',
  apikey: 'apiKey',
  indexname: 'indexName',
  disableuserpersonalization: 'disableUserPersonalization',
  initialquery: 'initialQuery',
}

// Replace the parameter keys, since Hugo parameters are case-insensitive.
var options = params ? params: {};
for (const name in params) {
  if (replacements.hasOwnProperty(name)) {
    params[replacements[name]] = params[name];
    delete params[name];
  }
}

options = Object.assign(defaultOptions, options, customOptions)

console.debug('DocSearch options:', options);

docsearch(options);
