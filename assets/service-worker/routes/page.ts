import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { Route } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

function pageRoute(config) {
  return new Route(
    ({ request }) => {
      return request.mode === 'navigate';
    },
    new NetworkFirst({
      cacheName: config.pagesCacheName,
      networkTimeoutSeconds: 3,
      plugins: [
        new CacheableResponsePlugin({
          statuses: [200],
        }),
      ],
    })
  );
}

export default pageRoute;
