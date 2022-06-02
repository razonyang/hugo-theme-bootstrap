import docsearch from '@docsearch/js';
import { default as params } from '@params';

console.log(params)

docsearch({
  container: '.search-bar',
  appId: params.appid,
  indexName: params.indexname,
  apiKey: params.apikey,
});
