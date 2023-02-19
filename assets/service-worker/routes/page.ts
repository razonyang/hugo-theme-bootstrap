import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { Route } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

function networkFirst(config): NetworkFirst {
  return new NetworkFirst({
    cacheName: config.pagesCacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  });
}

// function staleWhileRevalidate(config): StaleWhileRevalidate {
//   return new StaleWhileRevalidate({
//     cacheName: config.pagesCacheName,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   });
// }

function pageRoute(config) {
  return new Route(({ request }) => {
    return request.mode === "navigate";
  }, networkFirst(config));
}

export default pageRoute;
