import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

class ServiceWorker {
  run() {
    registerRoute(
      ({ request }) => request.mode === 'navigate',
      new NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new CacheableResponsePlugin({
            statuses: [200],
          }),
        ],
      }),
    );
  
    registerRoute(
      ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'worker',
      new StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
          new CacheableResponsePlugin({
            statuses: [200],
          }),
        ],
      }),
    );

    registerRoute(
      ({ request }) => request.destination === 'image',
      new CacheFirst({
        cacheName: 'images',
        plugins: [
          new CacheableResponsePlugin({
            statuses: [200],
          }),
          new ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          }),
        ],
      }),
    );
  }
}

(new ServiceWorker()).run();
