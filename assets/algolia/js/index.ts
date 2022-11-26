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
                        navigator: {
                          navigate({ itemUrl }) {
                            console.log(itemUrl)
                            window.location.assign(itemUrl);
                          },
                          navigateNewTab({ itemUrl }) {
                            console.log(itemUrl)
                            const windowReference = window.open(itemUrl, '_blank', 'noopener');
                      
                            if (windowReference) {
                              windowReference.focus();
                            }
                          },
                          navigateNewWindow({ itemUrl }) {
                            window.open(itemUrl, '_blank', 'noopener');
                          },
                        },
                    },
                ];
            },
        });
    })
})()
