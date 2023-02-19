import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { Route } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

function fontRoute(config) {
  return new Route(
    ({ request }) => {
      return request.destination === "font";
    },
    new CacheFirst({
      cacheName: config.fontsCacheName,
      plugins: [
        new CacheableResponsePlugin({
          statuses: [200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 30,
        }),
      ],
    })
  );
}

export default fontRoute;
