import algoliasearch from 'algoliasearch/lite'
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'
import { default as params } from '@params'

(() => {
  'use strict'

  const createClient = () => {
    return algoliasearch(params.algolia.appid, params.algolia.apikey)
  }

  window.addEventListener('load', () => {
    autocomplete({
      container: '.search-bar',
      // panelContainer: '#algolia-container',
      panelPlacement: 'full-width',
      placeholder: 'Search',
      detachedMediaQuery: '',
      // debug: true,
      getSources({ query }) {
        return [
          {
            sourceId: 'posts',
            getItems() {
              return getAlgoliaResults({
                searchClient: createClient(),
                queries: [
                  {
                    indexName: params.algolia.indexname,
                    query,
                    params: {
                      hitsPerPage: 10,
                      attributesToSnippet: ['title:10', 'content:35'],
                      snippetEllipsisText: '…',
                    },
                  },
                ],
              });
            },
            getItemUrl({ item }) {
              return item.url;
            },
            templates: {
              item({ item, components, html }) {
                return html`<a href="${item.url}" class="aa-ItemWrapper surface px-2 py-1 rounded">
                        <div class="aa-ItemContent">
                          <div class="aa-ItemContentBody">
                            <div class="aa-ItemContentTitle mb-1 text-surface">
                              ${components.Highlight({
                  hit: item,
                  attribute: 'title',
                })}
                            </div>
                            <div class="aa-ItemContentDescription overflow-hidden text-surface-secondary">
                              ${components.Snippet({
                  hit: item,
                  attribute: 'content',
                })}
                            </div>
                          </div>
                        </div>
                      </a>`;
              },
            },
          },
        ];
      },
    });

    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.keyCode == 75) {
        const btn = document.querySelector('.aa-DetachedSearchButton') as HTMLButtonElement;
        btn && btn.click();
        event.preventDefault();
      }
      if (event.keyCode == 27) {
        const btn = document.querySelector('.aa-DetachedCancelButton') as HTMLButtonElement;
        btn && btn.click();
        event.preventDefault();
      }
    });
  })
})()
