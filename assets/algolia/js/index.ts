import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { default as params } from "@params";

(() => {
  "use strict";

  const createClient = () => {
    return algoliasearch(params.algolia.appid, params.algolia.apikey);
  };

  window.addEventListener("load", () => {
    autocomplete({
      container: ".search-button",
      // panelContainer: '#algolia-container',
      panelPlacement: "full-width",
      placeholder: "Search",
      detachedMediaQuery: "",
      stallThreshold: params.algolia.stallthreshold
        ? params.algolia.stallthreshold
        : 300,
      // debug: true,
      getSources({ query }) {
        return [
          {
            sourceId: "posts",
            getItems() {
              return getAlgoliaResults({
                searchClient: createClient(),
                queries: [
                  {
                    indexName: params.algolia.indexname,
                    query,
                    params: {
                      hitsPerPage: params.algolia.paginate
                        ? params.algolia.paginate
                        : 5,
                      attributesToSnippet: ["title:10", "content:35"],
                      snippetEllipsisText: "…",
                    },
                  },
                ],
              });
            },
            getItemUrl({ item }) {
              return item.url;
            },
            templates: {
              header({ html }) {
                return html`<div class="aa-Header">
                  <a
                    class="badge bg-secondary mx-2"
                    data-bs-toggle="collapse"
                    href="#aa-shortcuts"
                    role="button"
                    aria-expanded="false"
                    aria-controls="aa-shortcuts"
                  >
                    Shortcuts
                  </a>
                  <div class="collapse p-2 pb-0 fs-sm" id="aa-shortcuts">
                    <div class="card card-body p-2 pb-0">
                      <ul class="d-flex list-unstyled mb-2">
                        <li class="m-1">
                          <kbd>CTRL</kbd>+<kbd>K</kbd> to open
                        </li>
                        <li class="m-1"><kbd>ESC</kbd> to close</li>
                        <li class="m-1">
                          <kbd>↑</kbd> <kbd>↓</kbd> to navigate
                        </li>
                        <li class="m-1"><kbd>ENTER</kbd> to select</li>
                      </ul>
                    </div>
                  </div>
                </div>`;
              },
              item({ item, components, html }) {
                return html`<a
                  href="${item.url}"
                  class="aa-ItemWrapper surface p-2 rounded"
                >
                  <div class="aa-ItemContent">
                    <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                      <i class="fas fa-fw fa-file-alt"></i>
                    </div>
                    <div class="aa-ItemContentBody">
                      <div class="aa-ItemContentTitle mb-1 text-surface">
                        ${components.Highlight({
                          hit: item,
                          attribute: "title",
                        })}
                      </div>
                      <div
                        class="aa-ItemContentDescription overflow-hidden text-surface-secondary"
                      >
                        ${components.Snippet({
                          hit: item,
                          attribute: "content",
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
      renderNoResults({ state, render, html }, root) {
        render(
          html`<div class="aa-noResults">
            No results for "${state.query}".
          </div>`,
          root
        );
      },
    });

    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.keyCode == 75) {
        const btn = document.querySelector(
          ".aa-DetachedSearchButton"
        ) as HTMLButtonElement;
        btn && btn.click();
        event.preventDefault();
      }
      if (event.keyCode == 27) {
        const btn = document.querySelector(
          ".aa-DetachedCancelButton"
        ) as HTMLButtonElement;
        btn && btn.click();
        event.preventDefault();
      }
    });
  });
})();
