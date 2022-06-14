import docsearch from '@docsearch/js';
import { default as params } from '@params';

let options = {
  container: params.container ? params.container : '.search-bar',
  appId: params.appid,
  indexName: params.indexname,
  apiKey: params.apikey,
  debug: params.debug === undefined ? false: params.debug,
};

console.debug(options);

docsearch(options);
