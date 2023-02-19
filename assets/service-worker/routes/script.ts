import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { Route } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

function scriptRoute(config) {
  return new Route(
    ({ request, sameOrigin }) => {
      return sameOrigin && request.destination === "script";
    },
    new CacheFirst({
      cacheName: config.scriptsCacheName,
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

export default scriptRoute;
